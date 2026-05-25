import json
import os
import urllib.parse
import urllib.request
from datetime import datetime

from odoo import fields, http, tools
from odoo.http import request
from werkzeug.exceptions import Forbidden, NotFound
from werkzeug.utils import redirect


APP_ROUTES = {
    "",
    "today",
    "log",
    "coach",
    "library",
    "protocols",
    "programs",
    "profile",
    "privacy",
    "history",
    "settings",
    "strava/callback",
}


class DriftCoachController(http.Controller):
    @http.route(["/app", "/app/<path:path>"], type="http", auth="public", website=True, sitemap=False)
    def app_shell(self, path="", **kwargs):
        if path in {"manifest.webmanifest", "sw.js"}:
            return self._static_pwa_file(path)

        first_segment = (path or "").split("/")[0]
        if path and first_segment not in {route.split("/")[0] for route in APP_ROUTES}:
            raise NotFound()

        try:
            html = tools.file_open("drift_coach/static/pwa/index.html", "r").read()
            return request.make_response(html, headers=[("Content-Type", "text/html; charset=utf-8")])
        except FileNotFoundError:
            return request.render("drift_coach.app_shell_fallback", {})

    @http.route(["/today", "/log", "/coach", "/library", "/protocols", "/programs", "/profile", "/privacy"], type="http", auth="public", website=True, sitemap=False)
    def legacy_app_redirect(self, **kwargs):
        return redirect(f"/app{request.httprequest.path}", code=302)

    @http.route(["/manifest.webmanifest", "/app/manifest.webmanifest"], type="http", auth="public", sitemap=False)
    def manifest(self, **kwargs):
        return self._static_pwa_file("manifest.webmanifest")

    @http.route("/icons/<path:filename>", type="http", auth="public", sitemap=False)
    def pwa_icon(self, filename, **kwargs):
        return self._static_pwa_file(f"icons/{filename}")

    @http.route("/app/sw.js", type="http", auth="public", sitemap=False)
    def service_worker(self, **kwargs):
        response = self._static_pwa_file("sw.js")
        response.headers["Service-Worker-Allowed"] = "/app/"
        return response

    @http.route("/drift/api/bootstrap", type="http", auth="public", methods=["GET"], csrf=False)
    def bootstrap(self, **kwargs):
        profile, guest_key = self._current_profile()
        payload = profile.action_build_bootstrap()
        payload["csrfToken"] = request.csrf_token()
        response = request.make_json_response(payload)
        if guest_key:
            response.set_cookie("drift_guest", guest_key, max_age=60 * 60 * 24 * 365, httponly=True, samesite="Lax")
        return response

    @http.route("/drift/api/check-in", type="http", auth="public", methods=["POST"], csrf=False)
    def check_in(self, **kwargs):
        self._require_csrf()
        profile, _guest_key = self._current_profile()
        body = self._json_body()
        request.env["drift.checkin"].sudo().create(
            {
                "profile_id": profile.id,
                "energy": self._scale(body.get("energy"), default=6),
                "soreness": self._scale(body.get("soreness"), default=4),
                "stress": self._scale(body.get("stress"), default=4),
                "sleep_quality": body.get("sleep") or body.get("sleep_quality") or "okay",
                "private_note": body.get("note") or "",
            }
        )
        return request.make_json_response(profile.action_build_bootstrap(), status=201)

    @http.route("/drift/api/ritual-log", type="http", auth="public", methods=["POST"], csrf=False)
    def ritual_log(self, **kwargs):
        self._require_csrf()
        profile, _guest_key = self._current_profile()
        body = self._json_body()
        protocol = None
        if body.get("protocolId"):
            protocol = request.env["drift.protocol"].sudo().search([("slug", "=", body["protocolId"])], limit=1)
        request.env["drift.ritual.log"].sudo().create(
            {
                "profile_id": profile.id,
                "protocol_id": protocol.id if protocol else False,
                "ritual_type": body.get("type") or (protocol.pillar if protocol else "Rest"),
                "title": body.get("title") or (protocol.name if protocol else "DRIFT Ritual"),
                "duration_minutes": int(body.get("duration") or body.get("durationMinutes") or (protocol.duration_minutes if protocol else 8)),
                "private": body.get("private", True) is not False,
            }
        )
        return request.make_json_response(profile.action_build_bootstrap(), status=201)

    @http.route("/drift/api/coach/decision", type="http", auth="public", methods=["POST"], csrf=False)
    def coach_decision(self, **kwargs):
        self._require_csrf()
        profile, _guest_key = self._current_profile()
        payload = request.env["drift.coach.decision"].sudo().generate_for_profile(profile)
        response = profile.action_build_bootstrap()
        response["decision"] = payload["decision"]
        return request.make_json_response(response, status=201)

    @http.route("/drift/api/coach/adjust", type="http", auth="public", methods=["POST"], csrf=False)
    def coach_adjust(self, **kwargs):
        self._require_csrf()
        profile, _guest_key = self._current_profile()
        body = self._json_body()
        adjustment = body.get("adjustment") or "why"
        payload = request.env["drift.coach.decision"].sudo().generate_for_profile(
            profile,
            user_constraints=[adjustment],
            adjustment=adjustment,
        )
        response = profile.action_build_bootstrap()
        response["decision"] = payload["decision"]
        return request.make_json_response(response, status=201)

    @http.route("/drift/api/privacy/summary", type="http", auth="public", methods=["GET"], csrf=False)
    def privacy_summary(self, **kwargs):
        profile, _guest_key = self._current_profile()
        return request.make_json_response(request.env["drift.privacy.event"].sudo().summary_for_profile(profile))

    @http.route("/drift/strava/connect", type="http", auth="public", methods=["GET"], csrf=False)
    def strava_connect(self, **kwargs):
        client_id = self._config("strava_client_id", "STRAVA_CLIENT_ID")
        redirect_uri = self._config("strava_redirect_uri", "STRAVA_REDIRECT_URI") or request.httprequest.host_url.rstrip("/") + "/drift/strava/callback"
        if not client_id:
            profile, _guest_key = self._current_profile()
            self._connect_demo_strava(profile)
            return request.make_json_response({"mode": "demo", "state": profile._state_payload()})

        params = urllib.parse.urlencode(
            {
                "client_id": client_id,
                "redirect_uri": redirect_uri,
                "response_type": "code",
                "approval_prompt": "auto",
                "scope": "activity:read,activity:read_all",
            }
        )
        return redirect(f"https://www.strava.com/oauth/authorize?{params}", code=302)

    @http.route("/drift/strava/callback", type="http", auth="public", methods=["GET"], csrf=False)
    def strava_callback(self, **kwargs):
        profile, _guest_key = self._current_profile()
        code = kwargs.get("code")
        if not code or not self._config("strava_client_secret", "STRAVA_CLIENT_SECRET"):
            self._connect_demo_strava(profile)
            return redirect("/app/today?strava=demo", code=302)

        token_payload = self._exchange_strava_code(code)
        account_model = request.env["drift.strava.account"].sudo()
        athlete = token_payload.get("athlete") or {}
        account_model.search([("profile_id", "=", profile.id)]).unlink()
        account_model.create(
            {
                "profile_id": profile.id,
                "athlete_id": str(athlete.get("id")),
                "athlete_name_hash": account_model.hash_private_label(athlete.get("username") or athlete.get("firstname") or ""),
                "scope": token_payload.get("scope") or "activity:read",
                "encrypted_access_token": account_model.encrypt_token(token_payload["access_token"]),
                "encrypted_refresh_token": account_model.encrypt_token(token_payload["refresh_token"]),
                "expires_at": datetime.utcfromtimestamp(int(token_payload.get("expires_at"))),
                "last_sync_at": fields.Datetime.now(),
            }
        )
        return redirect("/app/today?strava=connected", code=302)

    @http.route("/drift/strava/webhook", type="http", auth="public", methods=["GET", "POST"], csrf=False)
    def strava_webhook(self, **kwargs):
        if request.httprequest.method == "GET":
            verify_token = self._config("strava_webhook_verify_token", "STRAVA_WEBHOOK_VERIFY_TOKEN")
            if kwargs.get("hub.verify_token") == verify_token:
                return request.make_json_response({"hub.challenge": kwargs.get("hub.challenge")})
            raise Forbidden()
        return request.make_json_response({"accepted": True}, status=202)

    @http.route("/drift/strava/export-ritual", type="http", auth="public", methods=["POST"], csrf=False)
    def strava_export_ritual(self, **kwargs):
        self._require_csrf()
        profile, _guest_key = self._current_profile()
        body = self._json_body()
        ritual_id = str(body.get("ritualId") or "").replace("ritual-", "")
        ritual = request.env["drift.ritual.log"].sudo().search([("id", "=", ritual_id), ("profile_id", "=", profile.id)], limit=1)
        if ritual:
            ritual.write({"exported_to_strava": True, "exported_at": fields.Datetime.now()})
        return request.make_json_response({"exported": bool(ritual), "state": profile._state_payload()})

    def _current_profile(self):
        env = request.env
        user = env.user
        profile_model = env["drift.profile"].sudo()
        if not user._is_public():
            profile = profile_model.search([("user_id", "=", user.id)], limit=1)
            if not profile:
                guest_profile, guest_key = self._guest_profile()
                profile = guest_profile.merge_into_portal_user(user)
                return profile, guest_key
            return profile, None
        return self._guest_profile()

    def _guest_profile(self):
        profile_model = request.env["drift.profile"].sudo()
        guest_key = request.httprequest.cookies.get("drift_guest")
        profile = guest_key and profile_model.search([("guest_key", "=", guest_key)], limit=1)
        if profile:
            return profile, None
        guest_key = profile_model.create_guest_key()
        profile = profile_model.create(
            {
                "guest_key": guest_key,
                "display_name": "DRIFT Athlete",
                "timezone": "UTC",
                "mode": "guest",
            }
        )
        return profile, guest_key

    def _require_csrf(self):
        token = request.httprequest.headers.get("X-CSRFToken") or request.httprequest.headers.get("X-Drift-CSRF")
        if token and token == request.csrf_token():
            return
        raise Forbidden("Missing or invalid CSRF token")

    def _json_body(self):
        raw = request.httprequest.get_data(as_text=True)
        if not raw:
            return {}
        return json.loads(raw)

    def _static_pwa_file(self, filename):
        path = f"drift_coach/static/pwa/{filename}"
        try:
            content = tools.file_open(path, "rb").read()
        except FileNotFoundError:
            raise NotFound()
        if filename.endswith(".webmanifest"):
            content_type = "application/manifest+json"
        elif filename.endswith(".svg"):
            content_type = "image/svg+xml"
        else:
            content_type = "application/javascript"
        return request.make_response(content, headers=[("Content-Type", content_type)])

    def _connect_demo_strava(self, profile):
        activity_model = request.env["drift.activity"].sudo()
        activity_model.search([("profile_id", "=", profile.id), ("strava_activity_id", "in", [f"demo-{profile.id}-1", f"demo-{profile.id}-2"])]).unlink()
        activity_model.create(
            [
                {
                    "profile_id": profile.id,
                    "strava_activity_id": f"demo-{profile.id}-1",
                    "sport": "Run",
                    "started_at": fields.Datetime.now(),
                    "distance_km": 8.4,
                    "moving_minutes": 43,
                    "elevation_m": 92,
                    "relative_effort": 62,
                    "privacy_state": "unknown",
                },
                {
                    "profile_id": profile.id,
                    "strava_activity_id": f"demo-{profile.id}-2",
                    "sport": "TrailRun",
                    "started_at": fields.Datetime.now(),
                    "distance_km": 17.8,
                    "moving_minutes": 112,
                    "elevation_m": 420,
                    "relative_effort": 128,
                    "privacy_state": "unknown",
                },
            ]
        )

    def _exchange_strava_code(self, code):
        redirect_uri = self._config("strava_redirect_uri", "STRAVA_REDIRECT_URI") or request.httprequest.host_url.rstrip("/") + "/drift/strava/callback"
        data = urllib.parse.urlencode(
            {
                "client_id": self._config("strava_client_id", "STRAVA_CLIENT_ID"),
                "client_secret": self._config("strava_client_secret", "STRAVA_CLIENT_SECRET"),
                "code": code,
                "grant_type": "authorization_code",
                "redirect_uri": redirect_uri,
            }
        ).encode("utf-8")
        req = urllib.request.Request("https://www.strava.com/oauth/token", data=data, method="POST")
        with urllib.request.urlopen(req, timeout=18) as response:
            return json.loads(response.read().decode("utf-8"))

    def _config(self, key, env_key):
        return (
            request.env["ir.config_parameter"].sudo().get_param(f"drift.{key}")
            or tools.config.get(f"drift_{key}")
            or os.environ.get(env_key)
        )

    @staticmethod
    def _scale(value, default):
        try:
            number = int(value)
        except (TypeError, ValueError):
            number = default
        return max(1, min(10, number))
