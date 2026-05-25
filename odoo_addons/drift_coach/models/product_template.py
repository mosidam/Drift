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
