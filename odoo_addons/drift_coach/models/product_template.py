from odoo import fields, models


class ProductTemplate(models.Model):
    _inherit = "product.template"

    drift_pillar = fields.Selection(
        [
            ("run", "Run"),
            ("breathe", "Breathe"),
            ("rest", "Rest"),
            ("system", "System"),
        ],
        string="DRIFT Pillar",
    )
    drift_system = fields.Selection(
        [
            ("starter", "Starter System"),
            ("hot_miles", "Hot Miles"),
            ("sauna_downshift", "Sauna Downshift"),
            ("race_week_reset", "Race Week Reset"),
            ("rest_rituals", "Rest Rituals"),
        ],
        string="DRIFT System",
    )
    drift_protocol_ids = fields.Many2many(
        "drift.protocol",
        "drift_product_protocol_rel",
        "product_tmpl_id",
        "protocol_id",
        string="Unlocked / Linked Protocols",
    )
    drift_program_ids = fields.Many2many(
        "drift.program",
        "drift_product_program_rel",
        "product_tmpl_id",
        "program_id",
        string="Unlocked / Linked Programs",
    )
    drift_app_cta = fields.Char(
        string="DRIFT App CTA",
        default="Pair with today's plan",
    )

    def _drift_autolink_catalog(self):
        Protocol = self.env["drift.protocol"].sudo()
        Program = self.env["drift.program"].sudo()
        mapping = {
            "DRIFT Heat Cap": {
                "pillar": "run",
                "system": "hot_miles",
                "protocols": ["hot-miles-prep"],
                "programs": ["hot-miles"],
                "cta": "Pair with Hot Miles Prep",
            },
            "DRIFT Nose Strips": {
                "pillar": "breathe",
                "system": "starter",
                "protocols": ["nasal-reset"],
                "programs": ["seven-day-reset"],
                "cta": "Pair with Nasal Reset",
            },
            "DRIFT Sauna Hat": {
                "pillar": "rest",
                "system": "sauna_downshift",
                "protocols": ["sauna-downshift"],
                "programs": ["sauna-downshift-program"],
                "cta": "Pair with Sauna Downshift",
            },
            "DRIFT Starter System": {
                "pillar": "system",
                "system": "starter",
                "protocols": ["nasal-reset", "quiet-reset"],
                "programs": ["seven-day-reset"],
                "cta": "Start the 7-Day Reset",
            },
            "Hot Miles Kit": {
                "pillar": "run",
                "system": "hot_miles",
                "protocols": ["hot-miles-prep", "nasal-reset"],
                "programs": ["hot-miles"],
                "cta": "Build Hot Miles",
            },
            "Sauna Downshift Kit": {
                "pillar": "rest",
                "system": "sauna_downshift",
                "protocols": ["sauna-downshift", "quiet-reset"],
                "programs": ["sauna-downshift-program"],
                "cta": "Close the training day",
            },
            "Race Week Reset": {
                "pillar": "system",
                "system": "race_week_reset",
                "protocols": ["nasal-reset", "quiet-reset"],
                "programs": ["race-week-reset"],
                "cta": "Prepare race week",
            },
            "DRIFT Sauna Essential Oil Flight": {
                "pillar": "rest",
                "system": "rest_rituals",
                "protocols": ["sauna-downshift", "quiet-reset"],
                "programs": ["sauna-downshift-program"],
                "cta": "Find your downshift",
            },
        }
        for name, values in mapping.items():
            product = self.sudo().search([("name", "=", name)], limit=1)
            if not product:
                continue
            product.write(
                {
                    "drift_pillar": values["pillar"],
                    "drift_system": values["system"],
                    "drift_app_cta": values["cta"],
                    "drift_protocol_ids": [(6, 0, Protocol.search([("slug", "in", values["protocols"])]).ids)],
                    "drift_program_ids": [(6, 0, Program.search([("slug", "in", values["programs"])]).ids)],
                }
            )
        botanical_products = self.sudo().search([("name", "ilike", "DRIFT Sauna Essential Oil -")])
        if botanical_products:
            botanical_products.write(
                {
                    "drift_pillar": "rest",
                    "drift_system": "rest_rituals",
                    "drift_protocol_ids": [(6, 0, Protocol.search([("slug", "in", ["sauna-downshift"])]).ids)],
                    "drift_program_ids": [(6, 0, Program.search([("slug", "in", ["sauna-downshift-program"])]).ids)],
                    "drift_app_cta": "Add to Rest Rituals",
                }
            )
