def post_init_hook(env):
    env["product.template"].sudo()._drift_autolink_catalog()
