# DRIFT Mobile App Release Notes

DRIFT should use Capacitor for the native shell. Odoo remains the product backend, auth layer, ecommerce system, and recovery API.

## Why Capacitor

- App Store and Google Play listing for Meta / Instagram app install campaigns.
- Native splash screen, status bar, haptics, and phone-safe layout.
- Deep links into `/app/today`, `/app/log`, `/app/programs`, and account screens.
- The web/PWA and native app share the same React interface.

Cordova is not the preferred path for DRIFT unless a legacy plugin becomes unavoidable.

## Production Architecture

The native app should load the production Odoo app over HTTPS:

```bash
DRIFT_NATIVE_URL=https://YOUR-PRODUCTION-DOMAIN/app/today npm run cap:sync
```

This keeps cookies, account login, cart, Strava OAuth, and OpenAI calls server-side in Odoo. Do not ship a native app pointed at `http://olivierstrails.com:11020`.

## Required Before Store Submission

- Public HTTPS domain for DRIFT app and website.
- App Store Connect account and Google Play Console account.
- Final app name, icon, splash art, subtitle, screenshots, and privacy answers.
- Strava production app credentials configured in Odoo.
- App deep-link domain configured for iOS Associated Domains and Android App Links.
- Meta app setup after the store listings exist.

## Local Commands

```bash
npm run build:native
npm run cap:sync
npm run cap:add:ios
npm run cap:add:android
npm run cap:open:ios
npm run cap:open:android
```

Run `cap:add:*` only when you are ready to commit native platform projects and configure signing.
