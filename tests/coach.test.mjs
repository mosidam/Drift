import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  applyBootstrapPayload,
  buildDeterministicDecision,
  buildPrivacySummary,
  buildSanitizedCoachContext,
  initialCoachState,
  recordCoachDecision,
  validateCoachDecision,
} from '../src/services/driftApi.js';

const sensitiveState = {
  ...initialCoachState,
  user: {
    name: 'Private Person',
    email: 'private@example.com',
    timezone: 'Europe/Warsaw',
  },
  activities: [
    {
      id: 'private-activity',
      source: 'Strava',
      sport: 'Run',
      name: 'Secret home route name',
      raw_payload: {
        access_token: 'strava-access-token',
        refresh_token: 'strava-refresh-token',
        map: { polyline: 'private-location-polyline' },
      },
      startedAt: new Date().toISOString(),
      distanceKm: 10,
      movingMinutes: 50,
      elevationM: 100,
      effort: 'Moderate',
      relativeEffort: 80,
    },
  ],
  checkIns: [
    {
      id: 'private-note',
      createdAt: new Date().toISOString(),
      energy: 5,
      soreness: 5,
      stress: 6,
      sleep: 'okay',
      note: 'This exact private note must not leave the backend.',
    },
  ],
};

const context = buildSanitizedCoachContext(sensitiveState, ['no_sauna_today']);
const serializedContext = JSON.stringify(context);

assert.equal(initialCoachState.activities.length, 0);
assert.equal(initialCoachState.checkIns.length, 0);
assert.equal(initialCoachState.ritualLogs.length, 0);

assert.deepEqual(Object.keys(context).sort(), [
  'breath_logs_7d',
  'energy',
  'last_run_hours_ago',
  'last_run_type',
  'sauna_logs_7d',
  'sleep_quality',
  'soreness',
  'stress',
  'user_constraints',
  'weekly_effort',
  'weekly_run_km',
].sort());

for (const forbidden of [
  'Private Person',
  'private@example.com',
  'Secret home route name',
  'This exact private note',
  'access_token',
  'refresh_token',
  'private-location-polyline',
]) {
  assert.equal(serializedContext.includes(forbidden), false, `sanitized context leaked ${forbidden}`);
}

const fallbackDecision = buildDeterministicDecision(context, 'offline');
assert.equal(validateCoachDecision(fallbackDecision), true);
assert.match(fallbackDecision.safety_note, /not medical advice/i);
assert.equal(Array.isArray(fallbackDecision.recommended_protocol_ids), true);
assert.equal(Object.prototype.hasOwnProperty.call(fallbackDecision, 'recommended_product_template_id'), true);

const stateWithDecision = recordCoachDecision(sensitiveState, fallbackDecision, context, 'offline');
const privacy = buildPrivacySummary(stateWithDecision);
const cleanedBootstrap = applyBootstrapPayload(initialCoachState, {
  profile: { mode: 'guest', display_name: 'drift.profile,71', portal_account: false },
  state: { checkIns: [], ritualLogs: [], activities: [] },
});
assert.equal(cleanedBootstrap.profile.displayName, 'DRIFT Athlete');
assert.equal(privacy.openai_store, false);
assert.equal(privacy.background_mode, false);
assert.equal(privacy.data_sent_to_openai.includes('weekly_run_km'), true);
assert.equal(privacy.data_not_sent_to_openai.includes('free-text check-in notes'), true);

const serverSource = await readFile(new URL('../server/index.mjs', import.meta.url), 'utf8');
const sharedSource = await readFile(new URL('../src/services/driftApi.js', import.meta.url), 'utf8');
assert.match(serverSource, /store:\s*false/);
assert.doesNotMatch(serverSource, /background:\s*true/);
assert.match(serverSource, /\/api\/coach\/decision/);
assert.match(serverSource, /\/drift\/api\/bootstrap/);
assert.match(serverSource, /\/api\/coach\/adjust/);
assert.match(serverSource, /\/api\/privacy\/summary/);
assert.match(serverSource, /\/drift\/strava\/sync/);
assert.doesNotMatch(serverSource, /connectDemoStrava|demo-strava|mode:\s*'demo'/);
assert.doesNotMatch(sharedSource, /local-demo|demo-oauth|connectDemoStrava|preview-oauth|seedActivities|Moderate workday|strava-105|ritual-1/);

const odooController = await readFile(new URL('../odoo_addons/drift_coach/controllers/main.py', import.meta.url), 'utf8');
const odooModels = await readFile(new URL('../odoo_addons/drift_coach/models/drift_models.py', import.meta.url), 'utf8');
const odooManifest = await readFile(new URL('../odoo_addons/drift_coach/__manifest__.py', import.meta.url), 'utf8');
const odooAccess = await readFile(new URL('../odoo_addons/drift_coach/security/ir.model.access.csv', import.meta.url), 'utf8');
const odooRules = await readFile(new URL('../odoo_addons/drift_coach/security/drift_record_rules.xml', import.meta.url), 'utf8');
const odooTemplates = await readFile(new URL('../odoo_addons/drift_coach/views/drift_templates.xml', import.meta.url), 'utf8');
const odooHooks = await readFile(new URL('../odoo_addons/drift_coach/hooks.py', import.meta.url), 'utf8');
const packageSource = await readFile(new URL('../package.json', import.meta.url), 'utf8');
const tryOnSource = await readFile(new URL('../src/saunaHatTryOn.js', import.meta.url), 'utf8');
const tryOnBundle = await readFile(new URL('../odoo_addons/drift_coach/static/tryon/sauna-hat-try-on.js', import.meta.url), 'utf8');
const tryOnConfig = await readFile(new URL('../vite.tryon.config.js', import.meta.url), 'utf8');
const pwaSource = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
const nativeRuntime = await readFile(new URL('../src/nativeRuntime.js', import.meta.url), 'utf8');
const capacitorConfig = await readFile(new URL('../capacitor.config.ts', import.meta.url), 'utf8');
assert.match(odooController, /\/drift\/api\/bootstrap/);
assert.match(odooController, /\/sauna-hat/);
assert.match(odooController, /\/drift\/shop\/add\/<int:product_template_id>/);
assert.match(odooController, /\/drift\/field-list\/subscribe/);
assert.match(odooController, /_safe_return_url/);
assert.match(odooController, /\/download/);
assert.match(odooController, /ios_app_store_url/);
assert.match(odooController, /android_play_store_url/);
assert.match(odooController, /\/app\/login/);
assert.match(odooController, /\/app\/signup/);
assert.match(odooController, /\/app\/<path:path>/);
assert.match(odooController, /X-CSRFToken/);
assert.match(odooController, /\/drift\/strava\/sync/);
assert.match(odooController, /activity:read,activity:read_all,activity:write/);
assert.match(odooController, /_make_oauth_state/);
assert.match(odooController, /_valid_oauth_state/);
assert.match(odooController, /_refresh_strava_token/);
assert.match(odooController, /_create_strava_ritual_activity/);
assert.doesNotMatch(odooController, /_connect_demo_strava|strava=demo/);
assert.match(odooModels, /store\": False/);
assert.equal(odooModels.includes('drift.openai_api_key_encrypted'), true);
assert.match(odooModels, /class DriftSettings/);
assert.match(odooModels, /class DriftFieldLead/);
assert.match(odooModels, /action_subscribe/);
assert.match(odooModels, /class SaleOrder/);
assert.match(odooModels, /_drift_grant_entitlements/);
assert.match(odooModels, /protocolIds/);
assert.match(odooModels, /_mobile_payload/);
assert.match(odooModels, /ios_app_store_url/);
assert.match(odooModels, /android_play_store_url/);
assert.match(odooModels, /encrypted_access_token/);
assert.match(odooModels, /strava_activity_id/);
assert.doesNotMatch(odooModels, /raw_payload/);
assert.doesNotMatch(odooModels, /route_name/);
assert.match(odooManifest, /auth_signup/);
assert.match(odooManifest, /security\/drift_record_rules\.xml/);
assert.match(odooAccess, /access_drift_profile_portal,drift\.profile portal,model_drift_profile,base\.group_portal,1,0,0,0/);
assert.match(odooAccess, /access_drift_checkin_portal,drift\.checkin portal,model_drift_checkin,base\.group_portal,1,0,0,0/);
assert.match(odooAccess, /access_drift_ritual_log_portal,drift\.ritual\.log portal,model_drift_ritual_log,base\.group_portal,1,0,0,0/);
assert.match(odooAccess, /access_drift_field_lead_user,drift\.field\.lead user,model_drift_field_lead,base\.group_user,1,1,1,0/);
assert.match(odooRules, /drift_profile_portal_own_rule/);
assert.match(odooRules, /profile_id\.user_id/);
assert.match(odooRules, /profile_id\.partner_id/);
assert.match(odooTemplates, /id="sauna_hat_landing"/);
assert.match(odooTemplates, /The uniform for controlled heat/);
assert.match(odooTemplates, /First 100 sauna sessions/);
assert.match(odooTemplates, /\/drift\/shop\/add\/%s/);
assert.match(odooTemplates, /Join Field List/);
assert.match(odooTemplates, /\/drift\/field-list\/subscribe/);
assert.match(odooTemplates, /website_menu_drift_sauna_hat/);
assert.match(odooTemplates, /data-drift-tryon/);
assert.match(odooTemplates, /Try in 3D/);
assert.match(odooTemplates, /Join color vote/);
assert.match(odooTemplates, /\/drift_coach\/static\/tryon\/sauna-hat-try-on\.js/);
assert.doesNotMatch(odooTemplates, /cures|heals|treats|diagnoses/i);
assert.match(odooHooks, /\/sauna-hat/);
assert.match(odooTemplates, /No generic newsletter/);
assert.match(odooTemplates, /You can ask to be removed any time/);
assert.match(packageSource, /"three"/);
assert.match(packageSource, /"build:tryon"/);
assert.match(tryOnSource, /from 'three'/);
assert.match(tryOnSource, /GLTFLoader/);
assert.match(tryOnSource, /\/drift_coach\/static\/tryon\/models\/drift-athlete-hsr0015\.glb/);
assert.match(tryOnSource, /new THREE\.WebGLRenderer/);
assert.match(tryOnSource, /preserveDrawingBuffer:\s*true/);
assert.match(tryOnSource, /MeshPhysicalMaterial/);
assert.match(tryOnSource, /addWoolFibers/);
assert.match(tryOnSource, /makeLimb/);
assert.match(tryOnSource, /__driftTryOnModel/);
assert.match(tryOnSource, /data-color/);
assert.match(tryOnSource, /data-variant/);
assert.match(tryOnSource, /data-fit/);
assert.match(tryOnSource, /__driftTryOnReady/);
assert.match(tryOnBundle, /data-drift-tryon/);
assert.match(tryOnConfig, /publicDir:\s*'src\/tryon-public'/);
assert.match(pwaSource, /Create free account|Your free home for recovery decisions/);
assert.match(pwaSource, /\/app\/signup\?redirect=\/app\/today/);
assert.match(pwaSource, /programAccessStatus/);
assert.match(pwaSource, /Unlock with kit/);
assert.match(pwaSource, /InstallPage/);
assert.match(pwaSource, /\/app\/install/);
assert.match(pwaSource, /Sync Strava/);
assert.doesNotMatch(pwaSource, /Backend routes|Sync demo data|Offline coach mode|local MVP|authorization code|service keys/);
assert.match(capacitorConfig, /appId:\s*'run\.drift\.coach'/);
assert.match(capacitorConfig, /DRIFT_NATIVE_URL/);
assert.match(capacitorConfig, /cleartext:\s*false/);
assert.match(nativeRuntime, /Capacitor\.isNativePlatform/);
assert.match(nativeRuntime, /SplashScreen\.hide/);
assert.match(nativeRuntime, /appUrlOpen/);
assert.match(nativeRuntime, /\/app\/install/);

console.log('coach privacy tests passed');
