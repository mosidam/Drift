import base64
import hashlib
import hmac
import json
import os
import re
import uuid
from datetime import datetime, timedelta, timezone

from odoo import api, fields, models, tools
from odoo.exceptions import ValidationError


SENT_FIELDS = [
    "weekly_run_km",
    "weekly_effort",
    "last_run_type",
    "last_run_hours_ago",
    "energy",
    "soreness",
    "stress",
    "sleep_quality",
    "breath_logs_7d",
    "sauna_logs_7d",
    "user_constraints",
]

NOT_SENT_FIELDS = [
    "user name",
    "email",
    "raw Strava payload",
    "route names",
    "activity names",
    "free-text check-in notes",
    "access tokens",
    "refresh tokens",
    "precise location data",
]

ADJUSTMENTS = {
    "why",
    "make_it_easier",
    "no_sauna_today",
    "feel_worse",
    "ran_harder",
}


class DriftProfile(models.Model):
    _name = "drift.profile"
    _description = "DRIFT App Profile"
    _order = "create_date desc"

    partner_id = fields.Many2one("res.partner", ondelete="cascade", index=True)
    user_id = fields.Many2one("res.users", ondelete="set null", index=True)
    guest_key = fields.Char(index=True, copy=False)
    display_name = fields.Char(default="DRIFT Athlete")
    timezone = fields.Char(default=lambda self: self.env.user.tz or "UTC")
    mode = fields.Selection(
        [("guest", "Guest Preview"), ("portal", "Portal Account")],
        default="guest",
        required=True,
    )
    strava_account_ids = fields.One2many("drift.strava.account", "profile_id")
    activity_ids = fields.One2many("drift.activity", "profile_id")
    checkin_ids = fields.One2many("drift.checkin", "profile_id")
    ritual_log_ids = fields.One2many("drift.ritual.log", "profile_id")
    coach_decision_ids = fields.One2many("drift.coach.decision", "profile_id")
    privacy_event_ids = fields.One2many("drift.privacy.event", "profile_id")
    entitlement_ids = fields.One2many("drift.entitlement", "profile_id")

    _guest_key_unique = models.Constraint("unique(guest_key)", "Guest key must be unique.")

    @api.model
    def create_guest_key(self):
        return uuid.uuid4().hex

    def merge_into_portal_user(self, user):
        self.ensure_one()
        partner = user.partner_id
        self.write(
            {
                "user_id": user.id,
                "partner_id": partner.id,
                "display_name": partner.name or "DRIFT Athlete",
                "timezone": user.tz or self.timezone,
                "mode": "portal",
            }
        )
        return self

    def action_build_bootstrap(self):
        self.ensure_one()
        self.env["product.template"].sudo()._drift_autolink_catalog()
        decision_service = self.env["drift.coach.decision"].sudo()
        plan = decision_service.build_today_plan(self)
        return {
            "profile": self._public_payload(),
            "state": self._state_payload(),
            "plan": plan,
            "protocols": self.env["drift.protocol"].sudo().search([("active", "=", True)])._app_payload(),
            "programs": self.env["drift.program"].sudo().search([("active", "=", True)])._app_payload(),
            "products": self.env["product.template"].sudo().search([("drift_pillar", "!=", False)])._drift_app_payload(),
            "entitlements": self.env["drift.entitlement"].sudo().search([("profile_id", "=", self.id)])._app_payload(),
            "privacy": self.env["drift.privacy.event"].sudo().summary_for_profile(self),
            "mobile": self._mobile_payload(),
        }

    def _public_payload(self):
        self.ensure_one()
        strava = self.strava_account_ids[:1]
        return {
            "id": self.id,
            "mode": self.mode,
            "display_name": self._app_display_name(),
            "timezone": self.timezone or "UTC",
            "strava_connected": bool(strava),
            "strava_last_sync": strava.last_sync_at.isoformat() if strava and strava.last_sync_at else None,
            "portal_account": bool(self.user_id),
        }

    def _state_payload(self):
        self.ensure_one()
        return {
            "session": {
                "id": self.guest_key or str(self.id),
                "authReady": True,
                "mode": "odoo-portal" if self.user_id else "odoo-guest-preview",
            },
            "user": {
                "name": self._app_display_name(),
                "timezone": self.timezone or "UTC",
            },
            "strava": self._strava_payload(),
            "activities": self.activity_ids.sorted("started_at", reverse=True)._app_payload(),
            "checkIns": self.checkin_ids.sorted("created_at", reverse=True)._app_payload(),
            "ritualLogs": self.ritual_log_ids.sorted("created_at", reverse=True)._app_payload(),
            "coachDecisions": self.coach_decision_ids.sorted("created_at", reverse=True)._app_payload(),
            "privacyEvents": self.privacy_event_ids.sorted("created_at", reverse=True)._app_payload(),
        }

    def _app_display_name(self):
        self.ensure_one()
        if self.user_id and self.partner_id and self.partner_id.name:
            return self.partner_id.name
        return "DRIFT Athlete"

    def _strava_payload(self):
        self.ensure_one()
        account = self.strava_account_ids[:1]
        return {
            "connected": bool(account),
            "athleteName": "Connected athlete" if account else None,
            "readScope": account.scope if account else "activity:read",
            "writeScope": bool(account and "activity:write" in (account.scope or "")),
            "lastSync": account.last_sync_at.isoformat() if account and account.last_sync_at else None,
            "mode": "server-oauth" if account else "not-connected",
        }

    def _mobile_payload(self):
        params = self.env["ir.config_parameter"].sudo()
        return {
            "downloadUrl": "/download",
            "installUrl": "/app/install",
            "iosAppStoreUrl": params.get_param("drift.ios_app_store_url") or "",
            "androidPlayStoreUrl": params.get_param("drift.android_play_store_url") or "",
        }


class DriftStravaAccount(models.Model):
    _name = "drift.strava.account"
    _description = "DRIFT Strava Account"
    _order = "create_date desc"

    profile_id = fields.Many2one("drift.profile", required=True, ondelete="cascade", index=True)
    athlete_id = fields.Char(required=True, index=True)
    athlete_name_hash = fields.Char()
    scope = fields.Char(required=True)
    encrypted_access_token = fields.Text(required=True, groups="base.group_system")
    encrypted_refresh_token = fields.Text(required=True, groups="base.group_system")
    expires_at = fields.Datetime(required=True)
    last_sync_at = fields.Datetime()

    _athlete_profile_unique = models.Constraint(
        "unique(profile_id, athlete_id)",
        "This athlete is already connected.",
    )

    @api.model
    def hash_private_label(self, value):
        if not value:
            return False
        secret = self._token_secret()
        return hmac.new(secret, value.encode("utf-8"), hashlib.sha256).hexdigest()

    @api.model
    def encrypt_token(self, token):
        try:
            from cryptography.fernet import Fernet
        except ImportError as exc:
            raise RuntimeError("The cryptography package is required for DRIFT token encryption.") from exc

        return Fernet(self._fernet_key()).encrypt(token.encode("utf-8")).decode("utf-8")

    @api.model
    def decrypt_token(self, encrypted_token):
        try:
            from cryptography.fernet import Fernet
        except ImportError as exc:
            raise RuntimeError("The cryptography package is required for DRIFT token decryption.") from exc

        return Fernet(self._fernet_key()).decrypt(encrypted_token.encode("utf-8")).decode("utf-8")

    @api.model
    def _token_secret(self):
        configured = (
            tools.config.get("drift_token_secret")
            or self.env["ir.config_parameter"].sudo().get_param("drift.token_secret")
            or tools.config.get("database.secret")
            or os.environ.get("DRIFT_TOKEN_KEY")
            or os.environ.get("ODOO_DATABASE_SECRET")
        )
        return str(configured or self.env.cr.dbname).encode("utf-8")

    @api.model
    def _fernet_key(self):
        digest = hashlib.sha256(self._token_secret()).digest()
        return base64.urlsafe_b64encode(digest)


class DriftActivity(models.Model):
    _name = "drift.activity"
    _description = "DRIFT Minimized Activity"
    _order = "started_at desc"

    profile_id = fields.Many2one("drift.profile", required=True, ondelete="cascade", index=True)
    strava_activity_id = fields.Char(index=True)
    sport = fields.Selection(
        [("Run", "Run"), ("TrailRun", "Trail Run"), ("Ride", "Ride"), ("Other", "Other")],
        required=True,
    )
    started_at = fields.Datetime(required=True)
    distance_km = fields.Float(digits=(8, 2))
    moving_minutes = fields.Integer()
    elevation_m = fields.Integer()
    relative_effort = fields.Integer()
    privacy_state = fields.Selection(
        [("public", "Public"), ("followers", "Followers"), ("private", "Private"), ("unknown", "Unknown")],
        default="unknown",
        required=True,
    )

    _strava_activity_unique = models.Constraint("unique(strava_activity_id)", "Strava activity is already imported.")

    def _app_payload(self):
        return [
            {
                "id": record.strava_activity_id or f"activity-{record.id}",
                "source": "Strava",
                "sport": record.sport,
                "name": "Strava run" if record.sport in ("Run", "TrailRun") else "Strava activity",
                "startedAt": record.started_at.isoformat() if record.started_at else None,
                "distanceKm": round(record.distance_km or 0, 1),
                "movingMinutes": record.moving_minutes or 0,
                "elevationM": record.elevation_m or 0,
                "effort": self._effort_label(record.relative_effort),
                "relativeEffort": record.relative_effort or 0,
                "privacyState": record.privacy_state,
            }
            for record in self
        ]

    @staticmethod
    def _effort_label(relative_effort):
        value = relative_effort or 0
        if value >= 95:
            return "Hard"
        if value >= 45:
            return "Moderate"
        return "Easy"


class DriftCheckin(models.Model):
    _name = "drift.checkin"
    _description = "DRIFT Check-In"
    _order = "created_at desc"

    profile_id = fields.Many2one("drift.profile", required=True, ondelete="cascade", index=True)
    energy = fields.Integer(required=True)
    soreness = fields.Integer(required=True)
    stress = fields.Integer(required=True)
    sleep_quality = fields.Selection(
        [("poor", "Poor"), ("okay", "Okay"), ("good", "Good"), ("great", "Great")],
        required=True,
        default="okay",
    )
    private_note = fields.Text(groups="base.group_user")
    created_at = fields.Datetime(default=fields.Datetime.now, required=True)

    @api.constrains("energy", "soreness", "stress")
    def _check_scales(self):
        for record in self:
            for field_name in ("energy", "soreness", "stress"):
                value = record[field_name]
                if value < 1 or value > 10:
                    raise ValidationError(f"{field_name} must be between 1 and 10.")

    def _app_payload(self):
        return [
            {
                "id": f"checkin-{record.id}",
                "createdAt": record.created_at.isoformat() if record.created_at else None,
                "energy": record.energy,
                "soreness": record.soreness,
                "stress": record.stress,
                "sleep": record.sleep_quality,
                "note": "",
            }
            for record in self
        ]


class DriftRitualLog(models.Model):
    _name = "drift.ritual.log"
    _description = "DRIFT Ritual Log"
    _order = "created_at desc"

    profile_id = fields.Many2one("drift.profile", required=True, ondelete="cascade", index=True)
    protocol_id = fields.Many2one("drift.protocol", ondelete="set null")
    ritual_type = fields.Selection([("Run", "Run"), ("Breathe", "Breathe"), ("Rest", "Rest")], required=True)
    title = fields.Char(required=True)
    duration_minutes = fields.Integer(required=True)
    private = fields.Boolean(default=True)
    exported_to_strava = fields.Boolean(default=False)
    strava_activity_id = fields.Char(index=True, copy=False)
    exported_at = fields.Datetime()
    created_at = fields.Datetime(default=fields.Datetime.now, required=True)

    def _app_payload(self):
        return [
            {
                "id": f"ritual-{record.id}",
                "type": record.ritual_type,
                "title": record.title,
                "duration": record.duration_minutes,
                "createdAt": record.created_at.isoformat() if record.created_at else None,
                "private": record.private,
                "exportedToStrava": record.exported_to_strava,
                "exportedAt": record.exported_at.isoformat() if record.exported_at else None,
            }
            for record in self
        ]


class DriftFieldLead(models.Model):
    _name = "drift.field.lead"
    _description = "DRIFT Field List Lead"
    _order = "last_signup_at desc, create_date desc"

    email = fields.Char(required=True)
    email_normalized = fields.Char(required=True, index=True)
    interest = fields.Selection(
        [
            ("sauna_hat", "Sauna Hat Founding Batch"),
            ("sauna_downshift", "Sauna Downshift"),
            ("rest_rituals", "Rest Rituals"),
            ("app", "DRIFT App"),
            ("system", "Run / Breathe / Rest System"),
        ],
        default="sauna_hat",
        required=True,
    )
    source = fields.Char(default="website")
    status = fields.Selection(
        [
            ("joined", "Joined"),
            ("customer", "Customer"),
            ("contacted", "Contacted"),
            ("invalid", "Invalid"),
        ],
        default="joined",
        required=True,
    )
    signup_count = fields.Integer(default=1)
    consent_text = fields.Char()
    last_signup_at = fields.Datetime(default=fields.Datetime.now, required=True)

    _email_interest_unique = models.Constraint("unique(email_normalized, interest)", "This email already joined this DRIFT list.")

    @api.model
    def action_subscribe(self, email, interest="sauna_hat", source="website", consent_text=""):
        normalized = self._normalize_email(email)
        if not normalized:
            raise ValidationError("Enter a valid email address.")
        interest = interest if interest in dict(self._fields["interest"].selection) else "sauna_hat"
        existing = self.sudo().search([("email_normalized", "=", normalized), ("interest", "=", interest)], limit=1)
        values = {
            "email": (email or "").strip(),
            "email_normalized": normalized,
            "interest": interest,
            "source": (source or "website")[:120],
            "status": "joined",
            "consent_text": (consent_text or "")[:240],
            "last_signup_at": fields.Datetime.now(),
        }
        if existing:
            existing.write({**values, "signup_count": existing.signup_count + 1})
            return existing
        return self.sudo().create(values)

    @api.model_create_multi
    def create(self, vals_list):
        for values in vals_list:
            values["email_normalized"] = self._normalize_email(values.get("email_normalized") or values.get("email"))
        return super().create(vals_list)

    def write(self, values):
        if "email" in values and "email_normalized" not in values:
            values = {**values, "email_normalized": self._normalize_email(values.get("email"))}
        return super().write(values)

    @api.constrains("email", "email_normalized")
    def _check_email(self):
        for record in self:
            if not record.email_normalized:
                raise ValidationError("Enter a valid email address.")

    @staticmethod
    def _normalize_email(email):
        clean = (email or "").strip().lower()
        if not clean or len(clean) > 254:
            return ""
        if not re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", clean):
            return ""
        return clean


class DriftProtocol(models.Model):
    _name = "drift.protocol"
    _description = "DRIFT Guided Protocol"
    _order = "sequence, id"

    name = fields.Char(required=True)
    slug = fields.Char(required=True, index=True)
    active = fields.Boolean(default=True)
    sequence = fields.Integer(default=10)
    pillar = fields.Selection([("Run", "Run"), ("Breathe", "Breathe"), ("Rest", "Rest")], required=True)
    duration_minutes = fields.Integer(default=8)
    intensity = fields.Char(default="Low")
    summary = fields.Text(required=True)
    equipment = fields.Char()
    audio_url = fields.Char()
    audio_ready = fields.Boolean(default=True)
    product_template_id = fields.Many2one("product.template", ondelete="set null")
    step_ids = fields.One2many("drift.protocol.step", "protocol_id")

    _slug_unique = models.Constraint("unique(slug)", "Protocol slug must be unique.")

    def _app_payload(self):
        return [
            {
                "id": record.slug,
                "odooId": record.id,
                "pillar": record.pillar,
                "title": record.name,
                "duration": f"{record.duration_minutes} min",
                "durationMinutes": record.duration_minutes,
                "intensity": record.intensity,
                "copy": record.summary,
                "equipment": record.equipment or "None",
                "audioReady": record.audio_ready,
                "audioUrl": record.audio_url,
                "steps": [step.name for step in record.step_ids.sorted("sequence")],
                "cta": record.product_template_id.drift_app_cta or record.product_template_id.name or "Start protocol",
                "productTemplateId": record.product_template_id.id or None,
                "commerceUrl": f"/shop/{record.product_template_id.id}" if record.product_template_id else None,
            }
            for record in self
        ]


class DriftProtocolStep(models.Model):
    _name = "drift.protocol.step"
    _description = "DRIFT Protocol Step"
    _order = "sequence, id"

    protocol_id = fields.Many2one("drift.protocol", required=True, ondelete="cascade", index=True)
    sequence = fields.Integer(default=10)
    name = fields.Char(required=True)
    duration_seconds = fields.Integer(default=60)
    cue = fields.Text()


class DriftProgram(models.Model):
    _name = "drift.program"
    _description = "DRIFT Program"
    _order = "sequence, id"

    name = fields.Char(required=True)
    slug = fields.Char(required=True, index=True)
    active = fields.Boolean(default=True)
    sequence = fields.Integer(default=10)
    pillar = fields.Selection(
        [("Run", "Run"), ("Breathe", "Breathe"), ("Rest", "Rest"), ("System", "System")],
        default="System",
        required=True,
    )
    duration_days = fields.Integer(default=7)
    summary = fields.Text(required=True)
    product_template_id = fields.Many2one("product.template", ondelete="set null")
    day_ids = fields.One2many("drift.program.day", "program_id")

    _program_slug_unique = models.Constraint("unique(slug)", "Program slug must be unique.")

    def _app_payload(self):
        return [
            {
                "id": record.slug,
                "odooId": record.id,
                "title": record.name,
                "pillar": record.pillar,
                "durationDays": record.duration_days,
                "copy": record.summary,
                "days": record.day_ids.sorted("day_index")._app_payload(),
                "protocolIds": list(
                    dict.fromkeys(pid for pid in record.day_ids.sorted("day_index").mapped("protocol_id.slug") if pid)
                ),
                "productTemplateId": record.product_template_id.id or None,
                "commerceUrl": f"/shop/{record.product_template_id.id}" if record.product_template_id else None,
            }
            for record in self
        ]


class DriftProgramDay(models.Model):
    _name = "drift.program.day"
    _description = "DRIFT Program Day"
    _order = "day_index, id"

    program_id = fields.Many2one("drift.program", required=True, ondelete="cascade", index=True)
    day_index = fields.Integer(required=True)
    title = fields.Char(required=True)
    protocol_id = fields.Many2one("drift.protocol", ondelete="set null")
    action = fields.Text(required=True)

    def _app_payload(self):
        return [
            {
                "day": record.day_index,
                "title": record.title,
                "protocolId": record.protocol_id.slug if record.protocol_id else None,
                "action": record.action,
            }
            for record in self
        ]


class DriftCoachDecision(models.Model):
    _name = "drift.coach.decision"
    _description = "DRIFT Coach Decision"
    _order = "created_at desc"

    profile_id = fields.Many2one("drift.profile", required=True, ondelete="cascade", index=True)
    decision = fields.Selection(
        [("build", "Build"), ("control", "Control"), ("downshift", "Downshift"), ("rest", "Rest")],
        required=True,
    )
    sanitized_context_json = fields.Json(required=True)
    output_json = fields.Json(required=True)
    source = fields.Selection([("openai", "OpenAI"), ("offline", "Offline")], default="offline", required=True)
    created_at = fields.Datetime(default=fields.Datetime.now, required=True)

    @api.model
    def build_sanitized_context(self, profile, user_constraints=None):
        since = fields.Datetime.now() - timedelta(days=7)
        activities = profile.activity_ids.filtered(lambda activity: activity.started_at and activity.started_at >= since)
        latest_run = activities.sorted("started_at", reverse=True)[:1]
        latest_checkin = profile.checkin_ids.sorted("created_at", reverse=True)[:1]
        rituals = profile.ritual_log_ids.filtered(lambda log: log.created_at and log.created_at >= since)

        checkin = latest_checkin or self._default_checkin_values()
        return {
            "weekly_run_km": round(sum(activities.mapped("distance_km")), 1),
            "weekly_effort": sum(activities.mapped("relative_effort")),
            "last_run_type": latest_run.sport if latest_run else "none",
            "last_run_hours_ago": self._hours_ago(latest_run.started_at) if latest_run else None,
            "energy": checkin.energy if latest_checkin else checkin["energy"],
            "soreness": checkin.soreness if latest_checkin else checkin["soreness"],
            "stress": checkin.stress if latest_checkin else checkin["stress"],
            "sleep_quality": checkin.sleep_quality if latest_checkin else checkin["sleep_quality"],
            "breath_logs_7d": len(rituals.filtered(lambda log: log.ritual_type == "Breathe")),
            "sauna_logs_7d": len(rituals.filtered(lambda log: "sauna" in (log.title or "").lower())),
            "user_constraints": [value for value in (user_constraints or []) if value in ADJUSTMENTS],
        }

    @api.model
    def build_today_plan(self, profile):
        latest = profile.coach_decision_ids.sorted("created_at", reverse=True)[:1]
        if latest:
            return latest._app_payload()[0]["decision"]
        return self.build_deterministic_decision(self.build_sanitized_context(profile), source="offline")

    @api.model
    def generate_for_profile(self, profile, user_constraints=None, adjustment=None):
        context = self.build_sanitized_context(profile, user_constraints=user_constraints)
        decision = None
        source = "offline"
        try:
            decision = self._generate_openai_decision(context)
            source = "openai"
        except Exception:
            decision = self.build_deterministic_decision(context, source="offline", adjustment=adjustment)

        if not self.validate_decision(decision):
            decision = self.build_deterministic_decision(context, source="offline", adjustment=adjustment)
            source = "offline"

        record = self.sudo().create(
            {
                "profile_id": profile.id,
                "decision": decision["decision"],
                "sanitized_context_json": context,
                "output_json": decision,
                "source": source,
            }
        )
        self.env["drift.privacy.event"].sudo().create_event(profile, "coach_decision_generated", source, context)
        return record._app_payload()[0]

    @api.model
    def _generate_openai_decision(self, context):
        api_key = self._openai_api_key()
        if not api_key:
            raise RuntimeError("OPENAI_API_KEY not configured")

        import urllib.error
        import urllib.request

        model = (
            self.env["ir.config_parameter"].sudo().get_param("drift.openai_model")
            or tools.config.get("drift_openai_model")
            or os.environ.get("OPENAI_MODEL")
            or "gpt-5.4-mini"
        )
        payload = {
            "model": model,
            "store": False,
            "input": [
                {
                    "role": "system",
                    "content": (
                        "You are DRIFT Recovery OS. Return only conservative JSON for a runner. "
                        "Do not give medical advice, diagnosis, injury treatment, or unsafe heat guidance. "
                        "Use only the provided aggregate context."
                    ),
                },
                {"role": "user", "content": json.dumps(context)},
            ],
            "text": {
                "format": {
                    "type": "json_schema",
                    "name": "drift_recovery_decision",
                    "strict": True,
                    "schema": self.response_schema(),
                }
            },
        }
        request = urllib.request.Request(
            "https://api.openai.com/v1/responses",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            method="POST",
        )
        with urllib.request.urlopen(request, timeout=18) as response:
            body = json.loads(response.read().decode("utf-8"))

        text = body.get("output_text")
        if not text:
            for item in body.get("output", []):
                for content in item.get("content", []):
                    if content.get("type") == "output_text":
                        text = content.get("text")
                        break
                if text:
                    break
        if not text:
            raise RuntimeError("OpenAI response missing output_text")
        return json.loads(text)

    @api.model
    def _openai_api_key(self):
        params = self.env["ir.config_parameter"].sudo()
        encrypted = params.get_param("drift.openai_api_key_encrypted")
        if encrypted:
            return self.env["drift.strava.account"].sudo().decrypt_token(encrypted)
        return (
            params.get_param("drift.openai_api_key")
            or tools.config.get("drift_openai_api_key")
            or os.environ.get("OPENAI_API_KEY")
        )

    @api.model
    def response_schema(self):
        return {
            "type": "object",
            "additionalProperties": False,
            "required": [
                "decision",
                "primary_action",
                "run_adjustment",
                "breath_protocol",
                "rest_protocol",
                "why",
                "confidence",
                "safety_note",
                "commerce_hint",
                "recommended_protocol_ids",
                "recommended_product_template_id",
            ],
            "properties": {
                "decision": {"type": "string", "enum": ["build", "control", "downshift", "rest"]},
                "primary_action": {"type": "string"},
                "run_adjustment": {"type": "string"},
                "breath_protocol": {"type": "string"},
                "rest_protocol": {"type": "string"},
                "why": {"type": "string"},
                "confidence": {"type": "string", "enum": ["low", "medium", "high"]},
                "safety_note": {"type": "string"},
                "commerce_hint": {"type": "string"},
                "recommended_protocol_ids": {"type": "array", "items": {"type": "string"}},
                "recommended_product_template_id": {"type": ["integer", "null"]},
            },
        }

    @api.model
    def validate_decision(self, decision):
        if not isinstance(decision, dict):
            return False
        required_strings = [
            "decision",
            "primary_action",
            "run_adjustment",
            "breath_protocol",
            "rest_protocol",
            "why",
            "confidence",
            "safety_note",
            "commerce_hint",
        ]
        if decision.get("decision") not in {"build", "control", "downshift", "rest"}:
            return False
        if decision.get("confidence") not in {"low", "medium", "high"}:
            return False
        if any(not isinstance(decision.get(key), str) or not decision.get(key).strip() for key in required_strings):
            return False
        if not isinstance(decision.get("recommended_protocol_ids"), list):
            return False
        return "recommended_product_template_id" in decision

    @api.model
    def build_deterministic_decision(self, context, source="offline", adjustment=None):
        fatigue = context["soreness"] * 1.2 + context["stress"] + (10 - context["energy"])
        load_pressure = context["weekly_effort"] / 42 + context["weekly_run_km"] / 9
        readiness = max(28, min(94, round(92 - fatigue * 2.4 - load_pressure + context["breath_logs_7d"] * 2)))
        recent_hard = context["weekly_effort"] >= 170 or context["weekly_run_km"] >= 34 or context["last_run_type"] == "TrailRun"

        decision = {
            "decision": "control",
            "primary_action": "Keep the system steady today: controlled movement, one breath protocol, one rest ritual.",
            "run_adjustment": "Run easy for 35 to 45 minutes, no pace target.",
            "breath_protocol": "Nasal Reset - 6 minutes of nasal breathing after the run or before the first work block.",
            "rest_protocol": "Sauna Downshift - one controlled heat round, cool rinse, and five minutes seated before screens.",
            "why": "The run load is manageable and the check-in can support a steady aerobic day.",
            "confidence": "medium",
            "safety_note": "Informational performance guidance only. Not medical advice, diagnosis, injury treatment, or a replacement for a qualified coach.",
            "commerce_hint": "Sauna Downshift Kit",
            "recommended_protocol_ids": ["nasal-reset", "sauna-downshift"],
            "recommended_product_template_id": None,
        }

        if context["last_run_type"] == "none":
            decision.update(
                {
                    "decision": "control",
                    "primary_action": "Start with a manual check-in and one low-friction breath protocol.",
                    "run_adjustment": "Connect Strava for run context, or log today as a non-running control day.",
                    "breath_protocol": "Nasal Reset - 6 minutes, low intensity.",
                    "rest_protocol": "Quiet Reset - 12 minutes, low light, no metrics review.",
                    "why": "DRIFT can work without Strava, but run import makes the decision sharper.",
                    "commerce_hint": "DRIFT Nose Strips",
                    "recommended_protocol_ids": ["nasal-reset", "quiet-reset"],
                }
            )

        if readiness >= 74 and context["weekly_run_km"] < 24 and context["energy"] >= 7:
            decision.update(
                {
                    "decision": "build",
                    "primary_action": "Build carefully: add a small amount of run quality without losing the recovery rhythm.",
                    "run_adjustment": "Run 45 minutes easy with 6 x 20-second relaxed strides.",
                    "breath_protocol": "Hot Miles Prep - four minutes nasal-only before the first stride.",
                    "rest_protocol": "Quiet Reset - keep the evening simple and screen-light.",
                    "why": "Energy is good and weekly load is still light enough to build without forcing the day.",
                    "commerce_hint": "DRIFT Heat Cap",
                    "recommended_protocol_ids": ["hot-miles-prep", "quiet-reset"],
                }
            )

        if readiness < 52 or fatigue >= 16:
            decision.update(
                {
                    "decision": "rest",
                    "primary_action": "Protect the day. Reduce input and let the body absorb training.",
                    "run_adjustment": "Skip intensity. Walk, mobility, or 20 minutes very easy if you need movement.",
                    "breath_protocol": "Quiet Reset breathing - inhale 4, exhale 6 for 8 minutes.",
                    "rest_protocol": "Quiet Rest - skip heat today unless you already tolerate it well.",
                    "why": "The check-in suggests the system is already carrying enough stress.",
                    "confidence": "high",
                    "commerce_hint": "DRIFT Nose Strips",
                    "recommended_protocol_ids": ["quiet-reset", "nasal-reset"],
                }
            )
        elif recent_hard or (context["last_run_hours_ago"] is not None and context["last_run_hours_ago"] <= 30 and context["weekly_effort"] >= 120):
            decision.update(
                {
                    "decision": "downshift",
                    "primary_action": "Absorb the work. Your next gain comes from closing the loop, not adding more signal.",
                    "run_adjustment": "No hard running today. Choose an easy shakeout or complete rest.",
                    "breath_protocol": "Nasal Reset - 6 minutes after work or before the heat round.",
                    "why": "A recent hard or long load needs a cleaner landing before the next build.",
                    "confidence": "high",
                    "commerce_hint": "Sauna Downshift Kit",
                    "recommended_protocol_ids": ["nasal-reset", "sauna-downshift"],
                }
            )

        if adjustment in {"make_it_easier", "feel_worse"}:
            decision.update(
                {
                    "decision": "rest",
                    "primary_action": "Make today smaller. The win is lowering load without dropping the ritual.",
                    "run_adjustment": "No intensity. Walk or take complete rest.",
                    "breath_protocol": "Quiet Reset breathing - 8 minutes, nasal only.",
                    "rest_protocol": "Quiet Rest - no sauna required.",
                    "why": "You asked for a lower-input plan, so DRIFT is removing intensity and heat pressure.",
                    "confidence": "high",
                    "commerce_hint": "DRIFT Nose Strips",
                    "recommended_protocol_ids": ["quiet-reset"],
                }
            )

        if adjustment == "no_sauna_today":
            decision["rest_protocol"] = "Quiet Rest - 12 minutes, low light, no heat exposure."
            decision["why"] = f"{decision['why']} Sauna is optional today; the rest target can be met without heat."
            decision["recommended_protocol_ids"] = [pid for pid in decision["recommended_protocol_ids"] if pid != "sauna-downshift"] + ["quiet-reset"]

        if adjustment == "ran_harder":
            decision["decision"] = "control" if decision["decision"] == "build" else "downshift"
            decision["primary_action"] = "Treat the session as higher load and close the day cleanly."
            decision["run_adjustment"] = "No additional intensity today."
            decision["rest_protocol"] = "Sauna Downshift only if it feels controlled; otherwise use Quiet Rest."
            decision["why"] = "The plan was adjusted because the run was harder than expected."
            decision["confidence"] = "high"

        return self._enrich_decision(decision, context, source, readiness)

    @api.model
    def _enrich_decision(self, decision, context, source, readiness=None):
        output = dict(decision)
        output.update(
            {
                "readiness": readiness if readiness is not None else self._estimate_readiness(context),
                "source": source,
                "generated_at": datetime.now(timezone.utc).isoformat(),
                "privacy": {
                    "mode": "minimized-context",
                    "fields_sent": SENT_FIELDS,
                    "not_sent": NOT_SENT_FIELDS,
                },
            }
        )
        return output

    def _app_payload(self):
        return [
            {
                "id": f"decision-{record.id}",
                "createdAt": record.created_at.isoformat() if record.created_at else None,
                "decision": self._enrich_decision(record.output_json, record.sanitized_context_json, record.source),
                "context": record.sanitized_context_json,
                "source": record.source,
            }
            for record in self
        ]

    @staticmethod
    def _hours_ago(value):
        delta = fields.Datetime.now() - value
        return max(0, round(delta.total_seconds() / 3600))

    @staticmethod
    def _default_checkin_values():
        return {"energy": 6, "soreness": 4, "stress": 4, "sleep_quality": "okay"}

    @staticmethod
    def _estimate_readiness(context):
        fatigue = context["soreness"] * 1.2 + context["stress"] + (10 - context["energy"])
        return max(28, min(94, round(92 - fatigue * 2.4 - context["weekly_effort"] / 42 + context["breath_logs_7d"] * 2)))


class DriftPrivacyEvent(models.Model):
    _name = "drift.privacy.event"
    _description = "DRIFT Privacy Event"
    _order = "created_at desc"

    profile_id = fields.Many2one("drift.profile", required=True, ondelete="cascade", index=True)
    event = fields.Char(required=True)
    source = fields.Char(required=True)
    fields_sent_json = fields.Json(default=list)
    fields_not_sent_json = fields.Json(default=list)
    created_at = fields.Datetime(default=fields.Datetime.now, required=True)

    @api.model
    def create_event(self, profile, event, source, context):
        return self.create(
            {
                "profile_id": profile.id,
                "event": event,
                "source": source,
                "fields_sent_json": list(context.keys()),
                "fields_not_sent_json": NOT_SENT_FIELDS,
            }
        )

    @api.model
    def summary_for_profile(self, profile):
        last = self.search([("profile_id", "=", profile.id)], limit=1)
        openai_configured = bool(
            self.env["drift.coach.decision"].sudo()._openai_api_key()
        )
        return {
            "mode": "Minimized Context",
            "openai_store": False,
            "openai_configured": openai_configured,
            "background_mode": False,
            "data_sent_to_openai": SENT_FIELDS,
            "data_not_sent_to_openai": NOT_SENT_FIELDS,
            "last_event": last._app_payload()[0] if last else None,
            "total_events": self.search_count([("profile_id", "=", profile.id)]),
            "explanation": (
                "DRIFT sends only aggregate training and readiness signals to the model. "
                "Raw Strava payloads, route names, user identity, free-text notes, and tokens stay server-side."
            ),
        }

    def _app_payload(self):
        return [
            {
                "id": f"privacy-{record.id}",
                "event": record.event,
                "createdAt": record.created_at.isoformat() if record.created_at else None,
                "source": record.source,
                "fieldsSent": record.fields_sent_json or [],
                "fieldsNotSent": record.fields_not_sent_json or NOT_SENT_FIELDS,
            }
            for record in self
        ]


class DriftEntitlement(models.Model):
    _name = "drift.entitlement"
    _description = "DRIFT App Entitlement"
    _order = "create_date desc"

    profile_id = fields.Many2one("drift.profile", required=True, ondelete="cascade", index=True)
    partner_id = fields.Many2one("res.partner", ondelete="cascade", index=True)
    product_template_id = fields.Many2one("product.template", required=True, ondelete="cascade")
    sale_order_id = fields.Many2one("sale.order", ondelete="set null")
    state = fields.Selection([("active", "Active"), ("revoked", "Revoked")], default="active", required=True)

    def _app_payload(self):
        return [
            {
                "id": record.id,
                "state": record.state,
                "productTemplateId": record.product_template_id.id,
                "productName": record.product_template_id.name,
                "programIds": record.product_template_id.drift_program_ids.mapped("slug"),
                "protocolIds": record.product_template_id.drift_protocol_ids.mapped("slug"),
            }
            for record in self
        ]


class SaleOrder(models.Model):
    _inherit = "sale.order"

    def action_confirm(self):
        result = super().action_confirm()
        self._drift_grant_entitlements()
        return result

    def _drift_grant_entitlements(self):
        Entitlement = self.env["drift.entitlement"].sudo()
        Profile = self.env["drift.profile"].sudo()
        for order in self.sudo():
            if order.state not in {"sale", "done"} or not order.partner_id:
                continue
            profile = self._drift_profile_for_order(order, Profile)
            for line in order.order_line:
                template = line.product_id.product_tmpl_id
                if not template or not self._drift_unlocks_app_content(template):
                    continue
                existing = Entitlement.search(
                    [
                        ("profile_id", "=", profile.id),
                        ("product_template_id", "=", template.id),
                        ("sale_order_id", "=", order.id),
                    ],
                    limit=1,
                )
                if not existing:
                    Entitlement.create(
                        {
                            "profile_id": profile.id,
                            "partner_id": order.partner_id.id,
                            "product_template_id": template.id,
                            "sale_order_id": order.id,
                            "state": "active",
                        }
                    )

    def _drift_profile_for_order(self, order, Profile):
        partner = order.partner_id
        profile = Profile.search([("partner_id", "=", partner.id)], limit=1)
        if profile:
            return profile
        users = self.env["res.users"].sudo().search([("partner_id", "=", partner.id)], limit=1)
        return Profile.create(
            {
                "partner_id": partner.id,
                "user_id": users.id if users else False,
                "display_name": partner.name or "DRIFT Athlete",
                "timezone": users.tz if users and users.tz else "UTC",
                "mode": "portal" if users else "guest",
            }
        )

    @staticmethod
    def _drift_unlocks_app_content(template):
        return bool(template.drift_pillar or template.drift_protocol_ids or template.drift_program_ids)


class DriftSettings(models.TransientModel):
    _name = "drift.settings"
    _description = "DRIFT Integration Settings"

    openai_api_key = fields.Char(
        string="New OpenAI API Key",
        help="Paste a new key to replace the encrypted server-side key. The current key is never displayed.",
        groups="base.group_system",
    )
    openai_key_status = fields.Char(readonly=True)
    openai_model = fields.Char(string="OpenAI Model", default="gpt-5.4-mini")
    strava_client_id = fields.Char(string="Strava Client ID")
    strava_client_secret = fields.Char(
        string="New Strava Client Secret",
        help="Paste a new secret to replace the encrypted server-side secret. The current secret is never displayed.",
        groups="base.group_system",
    )
    strava_redirect_uri = fields.Char(string="Strava Redirect URI")
    strava_status = fields.Char(readonly=True)
    ios_app_store_url = fields.Char(string="iOS App Store URL")
    android_play_store_url = fields.Char(string="Google Play URL")

    @api.model
    def default_get(self, fields_list):
        values = super().default_get(fields_list)
        params = self.env["ir.config_parameter"].sudo()
        values.update(
            {
                "openai_model": params.get_param("drift.openai_model") or "gpt-5.4-mini",
                "openai_key_status": self._secret_status("drift.openai_api_key_encrypted", "drift.openai_api_key_last4"),
                "strava_client_id": params.get_param("drift.strava_client_id") or "",
                "strava_redirect_uri": params.get_param("drift.strava_redirect_uri") or "",
                "strava_status": self._secret_status("drift.strava_client_secret_encrypted", "drift.strava_client_secret_last4"),
                "ios_app_store_url": params.get_param("drift.ios_app_store_url") or "",
                "android_play_store_url": params.get_param("drift.android_play_store_url") or "",
            }
        )
        return values

    def action_save(self):
        self.ensure_one()
        params = self.env["ir.config_parameter"].sudo()
        params.set_param("drift.openai_model", self.openai_model or "gpt-5.4-mini")
        params.set_param("drift.strava_client_id", self.strava_client_id or "")
        params.set_param("drift.strava_redirect_uri", self.strava_redirect_uri or "")
        params.set_param("drift.ios_app_store_url", self.ios_app_store_url or "")
        params.set_param("drift.android_play_store_url", self.android_play_store_url or "")
        if self.openai_api_key:
            self._store_secret("drift.openai_api_key", self.openai_api_key)
        if self.strava_client_secret:
            self._store_secret("drift.strava_client_secret", self.strava_client_secret)
        return {
            "type": "ir.actions.client",
            "tag": "display_notification",
            "params": {
                "title": "DRIFT settings saved",
                "message": "Secrets were stored encrypted server-side.",
                "type": "success",
                "sticky": False,
            },
        }

    @api.model
    def _store_secret(self, key, value):
        params = self.env["ir.config_parameter"].sudo()
        clean = (value or "").strip()
        if not clean:
            return
        encrypted = self.env["drift.strava.account"].sudo().encrypt_token(clean)
        params.set_param(f"{key}_encrypted", encrypted)
        params.set_param(f"{key}_last4", clean[-4:])
        params.set_param(f"{key}_updated_at", fields.Datetime.now())
        params.search([("key", "=", key)]).unlink()

    @api.model
    def _secret_status(self, encrypted_key, last4_key):
        params = self.env["ir.config_parameter"].sudo()
        last4 = params.get_param(last4_key)
        if params.get_param(encrypted_key):
            return f"Configured ending in {last4}" if last4 else "Configured"
        return "Not configured"


class ProductTemplateDriftPayload(models.Model):
    _inherit = "product.template"

    def _drift_app_payload(self):
        return [
            {
                "id": record.id,
                "name": record.name,
                "pillar": record.drift_pillar,
                "system": record.drift_system,
                "cta": record.drift_app_cta,
                "price": record.list_price,
                "currency": record.currency_id.symbol if record.currency_id else "$",
                "url": f"/shop/{record.id}",
                "protocolIds": record.drift_protocol_ids.mapped("slug"),
                "programIds": record.drift_program_ids.mapped("slug"),
            }
            for record in self
        ]
