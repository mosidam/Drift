def post_init_hook(env):
    env["product.template"].sudo()._drift_autolink_catalog()
    _enable_public_signup(env)
    _ensure_website_app_entry(env)


def _enable_public_signup(env):
    params = env["ir.config_parameter"].sudo()
    params.set_param("auth_signup.invitation_scope", "b2c")
    params.set_param("auth_signup.reset_password", "True")


def _ensure_website_app_entry(env):
    view = env["ir.ui.view"].sudo().search([("key", "=", "drift.header")], limit=1)
    if not view:
        return

    arch = view.arch_db or ""
    if "/sauna-hat" not in arch:
        arch = arch.replace(
            '<a href="/shop">Shop</a>',
            '<a href="/shop">Shop</a>\n                    <a href="/sauna-hat">Sauna Hat</a>',
        )
        arch = arch.replace(
            '<a class="drift-standard-link" href="/shop">Shop</a>',
            '<a class="drift-standard-link" href="/shop">Shop</a>\n                        <a class="drift-standard-link" href="/sauna-hat">Sauna Hat</a>',
        )
    if "/app/today" not in arch:
        arch = arch.replace(
            '<a href="/goals">Goals</a>',
            '<a href="/goals">Goals</a>\n                    <a href="/app/today">App</a>',
        )
        arch = arch.replace(
            '<a class="drift-standard-link" href="/standard">Standard</a>',
            '<a class="drift-standard-link" href="/standard">Standard</a>\n                        <a class="drift-standard-link" href="/app/today">App</a>',
        )
    if arch != view.arch_db:
        view.write({"arch_db": arch})
