import hashlib
import hmac
import json
import os
import urllib.parse
import urllib.request
import uuid
from datetime import datetime, timedelta, timezone

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
    "install",
    "history",
    "settings",
    "strava/callback",
}


class DriftCoachController(http.Controller):
    @http.route("/download", type="http", auth="public", website=True, sitemap=False)
    def download_redirect(self, **kwargs):
        user_agent = (request.httprequest.headers.get("User-Agent") or "").lower()
        ios_url = self._config("ios_app_store_url", "DRIFT_IOS_APP_STORE_URL")
        android_url = self._config("android_play_store_url", "DRIFT_ANDROID_PLAY_STORE_URL")
        if kwargs.get("web") != "1":
            if ios_url and any(token in user_agent for token in ("iphone", "ipad", "ipod")):
                return redirect(ios_url, code=302)
            if android_url and "android" in user_agent:
                return redirect(android_url, code=302)
        return redirect("/app/install", code=302)

    @http.route("/app/login", type="http", auth="public", website=True, sitemap=False)
    def app_login(self, **kwargs):
        redirect_url = kwargs.get("redirect") or "/app/today"
        if not request.env.user._is_public():
            return redirect(redirect_url, code=302)
        return request.render(
            "drift_coach.app_login",
            {
                "redirect_url": redirect_url,
                "signup_url": self._app_auth_url("/app/signup", redirect_url),
            },
        )

    @http.route("/app/signup", type="http", auth="public", website=True, sitemap=False)
    def app_signup(self, **kwargs):
        redirect_url = kwargs.get("redirect") or "/app/today"
        if not request.env.user._is_public():
            return redirect(redirect_url, code=302)
        return request.render(
            "drift_coach.app_signup",
            {
                "redirect_url": redirect_url,
                "login_url": self._app_auth_url("/app/login", redirect_url),
                "signup_token": kwargs.get("token") or "",
            },
        )

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
        profile, guest_key = self._current_profile()
        client_id = self._config("strava_client_id", "STRAVA_CLIENT_ID")
        redirect_uri = self._config("strava_redirect_uri", "STRAVA_REDIRECT_URI") or request.httprequest.host_url.rstrip("/") + "/drift/strava/callback"
        if not client_id:
            return redirect("/app/profile?strava=missing_config", code=302)

        oauth_state = self._make_oauth_state(profile)
        params = urllib.parse.urlencode(
            {
                "client_id": client_id,
                "redirect_uri": redirect_uri,
                "response_type": "code",
                "approval_prompt": "auto",
                "scope": "activity:read,activity:read_all,activity:write",
                "state": oauth_state,
            }
        )
        response = redirect(f"https://www.strava.com/oauth/authorize?{params}", code=302)
        response.set_cookie("drift_strava_state", oauth_state, max_age=600, httponly=True, samesite="Lax")
        if guest_key:
            response.set_cookie("drift_guest", guest_key, max_age=60 * 60 * 24 * 365, httponly=True, samesite="Lax")
        return response

    @http.route("/drift/strava/callback", type="http", auth="public", methods=["GET"], csrf=False)
    def strava_callback(self, **kwargs):
        profile, _guest_key = self._current_profile()
        if kwargs.get("error"):
            return self._strava_redirect("denied")

        code = kwargs.get("code")
        if not code:
            return self._strava_redirect("missing_code")
        state = kwargs.get("state")
        cookie_state = request.httprequest.cookies.get("drift_strava_state")
        if not state or not cookie_state or not hmac.compare_digest(state, cookie_state) or not self._valid_oauth_state(profile, state):
            return self._strava_redirect("state_error")
        if not self._config("strava_client_id", "STRAVA_CLIENT_ID") or not self._secret_config("strava_client_secret", "STRAVA_CLIENT_SECRET"):
            return self._strava_redirect("missing_config")

        token_payload = self._exchange_strava_code(code)
        accepted_scope = kwargs.get("scope") or token_payload.get("scope") or ""
        if not self._scope_has(accepted_scope, "activity:read"):
            return self._strava_redirect("read_scope_required")

        account_model = request.env["drift.strava.account"].sudo()
        athlete = token_payload.get("athlete") or {}
        account_model.search([("profile_id", "=", profile.id)]).unlink()
        account = account_model.create(
            {
                "profile_id": profile.id,
                "athlete_id": str(athlete.get("id")),
                "athlete_name_hash": account_model.hash_private_label(athlete.get("username") or athlete.get("firstname") or ""),
                "scope": accepted_scope or "activity:read",
                "encrypted_access_token": account_model.encrypt_token(token_payload["access_token"]),
                "encrypted_refresh_token": account_model.encrypt_token(token_payload["refresh_token"]),
                "expires_at": datetime.utcfromtimestamp(int(token_payload.get("expires_at"))),
                "last_sync_at": fields.Datetime.now(),
            }
        )
        status = "connected"
        try:
            self._sync_recent_strava_activities(profile, account)
        except Exception:
            status = "connected_sync_failed"
        return self._strava_redirect(status, "/app/today")

    @http.route("/drift/strava/sync", type="http", auth="public", methods=["POST"], csrf=False)
    def strava_sync(self, **kwargs):
        self._require_csrf()
        profile, _guest_key = self._current_profile()
        account = profile.strava_account_ids[:1]
        if not account:
            return request.make_json_response({"synced": False, "reason": "not_connected", "state": profile._state_payload()}, status=409)
        self._sync_recent_strava_activities(profile, account)
        return request.make_json_response(profile.action_build_bootstrap(), status=201)

    @http.route("/drift/strava/webhook", type="http", auth="public", methods=["GET", "POST"], csrf=False)
    def strava_webhook(self, **kwargs):
        if request.httprequest.method == "GET":
            verify_token = self._config("strava_webhook_verify_token", "STRAVA_WEBHOOK_VERIFY_TOKEN")
            if kwargs.get("hub.verify_token") == verify_token:
                return request.make_json_response({"hub.challenge": kwargs.get("hub.challenge")})
            raise Forbidden()
        body = self._json_body()
        account = request.env["drift.strava.account"].sudo().search([("athlete_id", "=", str(body.get("owner_id") or ""))], limit=1)
        if account:
            try:
                self._sync_recent_strava_activities(account.profile_id, account)
            except Exception:
                pass
        return request.make_json_response({"accepted": True}, status=202)

    @http.route("/drift/strava/export-ritual", type="http", auth="public", methods=["POST"], csrf=False)
    def strava_export_ritual(self, **kwargs):
        self._require_csrf()
        profile, _guest_key = self._current_profile()
        body = self._json_body()
        ritual_id = str(body.get("ritualId") or "").replace("ritual-", "")
        ritual = request.env["drift.ritual.log"].sudo().search([("id", "=", ritual_id), ("profile_id", "=", profile.id)], limit=1)
        if not ritual:
            return request.make_json_response({"exported": False, "reason": "missing_ritual", "state": profile._state_payload()}, status=404)
        account = profile.strava_account_ids[:1]
        if not account:
            return request.make_json_response({"exported": False, "reason": "not_connected", "state": profile._state_payload()}, status=409)
        if not self._scope_has(account.scope, "activity:write"):
            return request.make_json_response({"exported": False, "reason": "missing_write_scope", "state": profile._state_payload()}, status=409)
        if ritual.exported_to_strava and ritual.strava_activity_id:
            return request.make_json_response({"exported": True, "state": profile._state_payload()})
        strava_activity_id = self._create_strava_ritual_activity(account, ritual)
        ritual.write({"exported_to_strava": True, "exported_at": fields.Datetime.now(), "strava_activity_id": str(strava_activity_id or "")})
        return request.make_json_response({"exported": True, "state": profile._state_payload()})

    def _current_profile(self):
        env = request.env
        user = env.user
        profile_model = env["drift.profile"].sudo()
        if not user._is_public():
            profile = profile_model.search([("user_id", "=", user.id)], limit=1)
            if not profile:
                profile = profile_model.search([("partner_id", "=", user.partner_id.id)], limit=1)
                if profile:
                    profile.merge_into_portal_user(user)
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
        if token and request.validate_csrf(token):
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

    def _make_oauth_state(self, profile):
        nonce = uuid.uuid4().hex
        body = f"{profile.id}:{nonce}"
        secret = request.env["drift.strava.account"].sudo()._token_secret()
        signature = hmac.new(secret, body.encode("utf-8"), hashlib.sha256).hexdigest()
        return f"{body}:{signature}"

    def _valid_oauth_state(self, profile, state):
        parts = (state or "").split(":")
        if len(parts) != 3:
            return False
        profile_id, nonce, signature = parts
        if str(profile.id) != profile_id or not nonce:
            return False
        body = f"{profile_id}:{nonce}"
        secret = request.env["drift.strava.account"].sudo()._token_secret()
        expected = hmac.new(secret, body.encode("utf-8"), hashlib.sha256).hexdigest()
        return hmac.compare_digest(signature, expected)

    def _strava_redirect(self, status, path="/app/profile"):
        response = redirect(f"{path}?strava={status}", code=302)
        response.delete_cookie("drift_strava_state")
        return response

    @staticmethod
    def _app_auth_url(path, redirect_url):
        return f"{path}?{urllib.parse.urlencode({'redirect': redirect_url})}"

    def _sync_recent_strava_activities(self, profile, account):
        token = self._strava_access_token(account)
        req = urllib.request.Request(
            "https://www.strava.com/api/v3/athlete/activities?per_page=30",
            headers={"Authorization": f"Bearer {token}"},
            method="GET",
        )
        with urllib.request.urlopen(req, timeout=18) as response:
            activities = json.loads(response.read().decode("utf-8"))

        activity_model = request.env["drift.activity"].sudo()
        for item in activities:
            sport = item.get("sport_type") or item.get("type") or "Other"
            if sport not in {"Run", "TrailRun", "Ride"}:
                sport = "Other"
            strava_id = str(item.get("id"))
            values = {
                "profile_id": profile.id,
                "strava_activity_id": strava_id,
                "sport": sport,
                "started_at": fields.Datetime.to_datetime(item.get("start_date")),
                "distance_km": round(float(item.get("distance") or 0) / 1000, 2),
                "moving_minutes": round(float(item.get("moving_time") or 0) / 60),
                "elevation_m": round(float(item.get("total_elevation_gain") or 0)),
                "relative_effort": int(item.get("suffer_score") or item.get("relative_effort") or 0),
                "privacy_state": "private" if item.get("private") else "unknown",
            }
            existing = activity_model.search([("strava_activity_id", "=", strava_id)], limit=1)
            if existing:
                existing.write(values)
            else:
                activity_model.create(values)
        account.write({"last_sync_at": fields.Datetime.now()})

    def _create_strava_ritual_activity(self, account, ritual):
        token = self._strava_access_token(account)
        started_at = ritual.created_at or fields.Datetime.now()
        if started_at.tzinfo is None:
            started_at = started_at.replace(tzinfo=timezone.utc)
        data = urllib.parse.urlencode(
            {
                "name": f"DRIFT: {ritual.title}",
                "sport_type": "Workout",
                "type": "Workout",
                "start_date_local": started_at.isoformat(),
                "elapsed_time": max(60, int(ritual.duration_minutes or 1) * 60),
                "description": "DRIFT Run / Breathe / Rest ritual exported by the athlete.",
                "trainer": 1,
                "commute": 0,
            }
        ).encode("utf-8")
        req = urllib.request.Request(
            "https://www.strava.com/api/v3/activities",
            data=data,
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            method="POST",
        )
        with urllib.request.urlopen(req, timeout=18) as response:
            payload = json.loads(response.read().decode("utf-8"))
        return payload.get("id")

    def _strava_access_token(self, account):
        if account.expires_at and account.expires_at > fields.Datetime.now() + timedelta(minutes=10):
            return request.env["drift.strava.account"].sudo().decrypt_token(account.encrypted_access_token)
        return self._refresh_strava_token(account)

    def _refresh_strava_token(self, account):
        refresh_token = request.env["drift.strava.account"].sudo().decrypt_token(account.encrypted_refresh_token)
        data = urllib.parse.urlencode(
            {
                "client_id": self._config("strava_client_id", "STRAVA_CLIENT_ID"),
                "client_secret": self._secret_config("strava_client_secret", "STRAVA_CLIENT_SECRET"),
                "grant_type": "refresh_token",
                "refresh_token": refresh_token,
            }
        ).encode("utf-8")
        req = urllib.request.Request("https://www.strava.com/oauth/token", data=data, method="POST")
        with urllib.request.urlopen(req, timeout=18) as response:
            payload = json.loads(response.read().decode("utf-8"))
        account.write(
            {
                "encrypted_access_token": request.env["drift.strava.account"].sudo().encrypt_token(payload["access_token"]),
                "encrypted_refresh_token": request.env["drift.strava.account"].sudo().encrypt_token(payload.get("refresh_token") or refresh_token),
                "expires_at": datetime.utcfromtimestamp(int(payload.get("expires_at"))),
            }
        )
        return payload["access_token"]

    def _exchange_strava_code(self, code):
        redirect_uri = self._config("strava_redirect_uri", "STRAVA_REDIRECT_URI") or request.httprequest.host_url.rstrip("/") + "/drift/strava/callback"
        data = urllib.parse.urlencode(
            {
                "client_id": self._config("strava_client_id", "STRAVA_CLIENT_ID"),
                "client_secret": self._secret_config("strava_client_secret", "STRAVA_CLIENT_SECRET"),
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

    def _secret_config(self, key, env_key):
        params = request.env["ir.config_parameter"].sudo()
        encrypted = params.get_param(f"drift.{key}_encrypted")
        if encrypted:
            return request.env["drift.strava.account"].sudo().decrypt_token(encrypted)
        return params.get_param(f"drift.{key}") or tools.config.get(f"drift_{key}") or os.environ.get(env_key)

    @staticmethod
    def _scope_has(scope, required):
        scopes = set((scope or "").replace(",", " ").split())
        return required in scopes

    @staticmethod
    def _scale(value, default):
        try:
            number = int(value)
        except (TypeError, ValueError):
            number = default
        return max(1, min(10, number))
