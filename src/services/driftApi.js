const STORAGE_KEY = 'drift-coach-state-v2';
const dayMs = 24 * 60 * 60 * 1000;
const now = new Date();

const isoDaysAgo = (days) => new Date(now.getTime() - days * dayMs).toISOString();

export const apiRoutes = {
  bootstrap: '/drift/api/bootstrap',
  checkIn: '/drift/api/check-in',
  ritualLog: '/drift/api/ritual-log',
  coachDecision: '/drift/api/coach/decision',
  coachAdjust: '/drift/api/coach/adjust',
  privacySummary: '/drift/api/privacy/summary',
  stravaConnect: '/drift/strava/connect',
  stravaCallback: '/drift/strava/callback',
  stravaSync: '/drift/strava/sync',
  stravaWebhook: '/drift/strava/webhook',
  stravaExportRitual: '/drift/strava/export-ritual',
};

export const decisionLabels = {
  build: 'Build',
  control: 'Control',
  downshift: 'Downshift',
  rest: 'Rest',
};

export const adjustmentOptions = [
  {
    id: 'why',
    label: 'Why?',
    copy: 'Explain the decision in plain language.',
  },
  {
    id: 'make_it_easier',
    label: 'Make it easier',
    copy: 'Lower the intensity and simplify the plan.',
  },
  {
    id: 'no_sauna_today',
    label: 'No sauna today',
    copy: 'Swap heat for a non-heat rest protocol.',
  },
  {
    id: 'feel_worse',
    label: 'I feel worse',
    copy: 'Protect the day and reduce load.',
  },
  {
    id: 'ran_harder',
    label: 'I ran harder than planned',
    copy: 'Treat the day like higher load.',
  },
];

export const protocols = [
  {
    id: 'hot-miles-prep',
    pillar: 'Run',
    title: 'Hot Miles Prep',
    duration: '8 min',
    durationMinutes: 8,
    intensity: 'Low',
    copy: 'Prime the session before heat, hills, or a long exposed route.',
    equipment: 'Heat cap optional',
    audioReady: true,
    steps: ['Sip water before kit-up', 'Nasal-only warmup for 4 minutes', 'Run the first 10 minutes under control'],
    cta: 'Pair with DRIFT Heat Cap',
    commerceUrl: '/shop',
  },
  {
    id: 'nasal-reset',
    pillar: 'Breathe',
    title: 'Nasal Reset',
    duration: '6 min',
    durationMinutes: 6,
    intensity: 'Calm',
    copy: 'A simple downshift protocol for airflow awareness after work or before sleep.',
    equipment: 'Nose strips optional',
    audioReady: true,
    steps: ['Sit tall', 'Inhale through the nose for 4', 'Exhale through the nose for 6', 'Repeat for 6 minutes'],
    cta: 'Pair with DRIFT Nose Strips',
    commerceUrl: '/shop',
  },
  {
    id: 'sauna-downshift',
    pillar: 'Rest',
    title: 'Sauna Downshift',
    duration: '22 min',
    durationMinutes: 22,
    intensity: 'Heat',
    copy: 'A controlled heat ritual for the end of a training day.',
    equipment: 'Sauna hat and optional botanical blend',
    audioReady: true,
    steps: ['Warm room entry', 'One quiet heat round', 'Cool water rinse', 'Five minutes seated before screens'],
    cta: 'Pair with Sauna Downshift Kit',
    commerceUrl: '/shop/sauna-downshift-kit-7',
  },
  {
    id: 'quiet-reset',
    pillar: 'Rest',
    title: 'Quiet Reset',
    duration: '12 min',
    durationMinutes: 12,
    intensity: 'Recovery',
    copy: 'A no-hero reset for days where the system needs less input.',
    equipment: 'None',
    audioReady: true,
    steps: ['Dim light', 'Low nasal breathing', 'No metrics review', 'Plan tomorrow in one line'],
    cta: 'Use when fatigue is high',
    commerceUrl: null,
  },
];

export const programs = [
  {
    id: 'seven-day-reset',
    title: '7-Day Run / Breathe / Rest Reset',
    pillar: 'System',
    durationDays: 7,
    copy: 'A one-week preview that teaches the DRIFT loop: run context, check-in, daily decision, ritual log.',
    protocolIds: ['hot-miles-prep', 'nasal-reset', 'quiet-reset', 'sauna-downshift'],
    commerceUrl: null,
  },
  {
    id: 'hot-miles',
    title: 'Hot Miles',
    pillar: 'Run',
    durationDays: 14,
    copy: 'Heat-aware running rituals for athletes building without forcing the day.',
    protocolIds: ['hot-miles-prep', 'nasal-reset'],
    commerceUrl: '/shop',
  },
  {
    id: 'sauna-downshift-program',
    title: 'Sauna Downshift',
    pillar: 'Rest',
    durationDays: 14,
    copy: 'A conservative heat and cool-down system for closing training days.',
    protocolIds: ['sauna-downshift', 'quiet-reset'],
    commerceUrl: '/shop/sauna-downshift-kit-7',
  },
  {
    id: 'race-week-reset',
    title: 'Race Week Reset',
    pillar: 'System',
    durationDays: 7,
    copy: 'A simple race-week rhythm for control, breath, and lower-input evenings.',
    protocolIds: ['nasal-reset', 'quiet-reset'],
    commerceUrl: '/shop',
  },
];

export const commerceProducts = [
  {
    id: 1,
    name: 'DRIFT Starter System',
    pillar: 'system',
    system: 'starter',
    price: 72,
    currency: '$',
    url: '/shop',
    protocolIds: ['nasal-reset', 'quiet-reset'],
    programIds: ['seven-day-reset'],
  },
  {
    id: 2,
    name: 'Hot Miles Kit',
    pillar: 'run',
    system: 'hot_miles',
    price: 68,
    currency: '$',
    url: '/shop',
    protocolIds: ['hot-miles-prep'],
    programIds: ['hot-miles'],
  },
  {
    id: 7,
    name: 'Sauna Downshift Kit',
    pillar: 'rest',
    system: 'sauna_downshift',
    price: 88,
    currency: '$',
    url: '/shop/sauna-downshift-kit-7',
    protocolIds: ['sauna-downshift', 'quiet-reset'],
    programIds: ['sauna-downshift-program'],
  },
];

export const seedActivities = [
  {
    id: 'strava-105',
    source: 'Strava',
    sport: 'Run',
    name: 'Strava run',
    startedAt: isoDaysAgo(0),
    distanceKm: 8.4,
    movingMinutes: 43,
    elevationM: 92,
    effort: 'Moderate',
    relativeEffort: 62,
  },
  {
    id: 'strava-104',
    source: 'Strava',
    sport: 'Run',
    name: 'Strava run',
    startedAt: isoDaysAgo(2),
    distanceKm: 6.1,
    movingMinutes: 34,
    elevationM: 38,
    effort: 'Easy',
    relativeEffort: 31,
  },
  {
    id: 'strava-103',
    source: 'Strava',
    sport: 'TrailRun',
    name: 'Strava trail run',
    startedAt: isoDaysAgo(4),
    distanceKm: 17.8,
    movingMinutes: 112,
    elevationM: 420,
    effort: 'Hard',
    relativeEffort: 128,
  },
  {
    id: 'strava-102',
    source: 'Strava',
    sport: 'Run',
    name: 'Strava run',
    startedAt: isoDaysAgo(6),
    distanceKm: 4.8,
    movingMinutes: 29,
    elevationM: 20,
    effort: 'Easy',
    relativeEffort: 22,
  },
];

const seedCheckIn = {
  id: 'checkin-seed',
  createdAt: isoDaysAgo(0),
  energy: 6,
  soreness: 4,
  sleep: 'okay',
  stress: 4,
  note: 'Moderate workday, legs a little heavy.',
};

export const initialCoachState = {
  session: {
    id: 'local-preview-session',
    authReady: true,
    mode: 'local-preview',
    csrfToken: null,
  },
  profile: {
    mode: 'guest',
    portalAccount: false,
    displayName: 'DRIFT Athlete',
  },
  user: {
    name: 'DRIFT Athlete',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local',
  },
  strava: {
    connected: false,
    athleteName: null,
    readScope: 'activity:read',
    writeScope: false,
    lastSync: null,
    mode: 'not-connected',
  },
  activities: [],
  checkIns: [seedCheckIn],
  ritualLogs: [
    {
      id: 'ritual-1',
      type: 'Breathe',
      title: 'Nasal Reset',
      duration: 6,
      createdAt: isoDaysAgo(1),
      private: true,
      exportedToStrava: false,
    },
    {
      id: 'ritual-2',
      type: 'Rest',
      title: 'Sauna Downshift',
      duration: 22,
      createdAt: isoDaysAgo(3),
      private: true,
      exportedToStrava: false,
    },
  ],
  coachDecisions: [],
  privacyEvents: [],
  entitlements: [],
};

export function loadCoachState() {
  if (typeof window === 'undefined') return initialCoachState;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return initialCoachState;
    return normalizeState({ ...initialCoachState, ...JSON.parse(stored) });
  } catch {
    return initialCoachState;
  }
}

export function saveCoachState(state) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function normalizeState(state) {
  return {
    ...initialCoachState,
    ...state,
    profile: { ...initialCoachState.profile, ...(state.profile || {}) },
    strava: { ...initialCoachState.strava, ...(state.strava || {}) },
    session: { ...initialCoachState.session, ...(state.session || {}) },
    activities: Array.isArray(state.activities) ? state.activities : [],
    checkIns: Array.isArray(state.checkIns) && state.checkIns.length ? state.checkIns : [seedCheckIn],
    ritualLogs: Array.isArray(state.ritualLogs) ? state.ritualLogs : [],
    coachDecisions: Array.isArray(state.coachDecisions) ? state.coachDecisions : [],
    privacyEvents: Array.isArray(state.privacyEvents) ? state.privacyEvents : [],
    entitlements: Array.isArray(state.entitlements) ? state.entitlements : [],
  };
}

export function applyBootstrapPayload(currentState, payload) {
  return normalizeState({
    ...currentState,
    ...(payload.state || {}),
    profile: {
      ...currentState.profile,
      mode: payload.profile?.mode || payload.state?.profile?.mode || currentState.profile.mode,
      portalAccount: Boolean(payload.profile?.portal_account || payload.profile?.portalAccount),
      displayName: payload.profile?.display_name || payload.profile?.displayName || 'DRIFT Athlete',
    },
    session: {
      ...(payload.state?.session || currentState.session),
      csrfToken: payload.csrfToken || currentState.session.csrfToken || null,
    },
    entitlements: payload.entitlements || currentState.entitlements || [],
  });
}

export function connectPreviewStrava(state) {
  return normalizeState({
    ...state,
    strava: {
      ...state.strava,
      connected: true,
      athleteName: 'Connected athlete',
      lastSync: new Date().toISOString(),
      mode: 'preview-oauth',
    },
    activities: seedActivities,
  });
}

export function enableWriteScope(state) {
  return normalizeState({
    ...state,
    strava: {
      ...state.strava,
      writeScope: true,
    },
  });
}

export function createCheckIn(state, input) {
  const checkIn = {
    id: `checkin-${Date.now()}`,
    createdAt: new Date().toISOString(),
    energy: Number(input.energy),
    soreness: Number(input.soreness),
    sleep: input.sleep,
    stress: Number(input.stress),
    note: input.note || '',
  };

  return normalizeState({
    ...state,
    checkIns: [checkIn, ...state.checkIns],
  });
}

export function createRitualLog(state, input) {
  const log = {
    id: `ritual-${Date.now()}`,
    type: input.type,
    title: input.title,
    duration: Number(input.duration),
    createdAt: new Date().toISOString(),
    private: input.private !== false,
    exportedToStrava: false,
  };

  return normalizeState({
    ...state,
    ritualLogs: [log, ...state.ritualLogs],
  });
}

export function markRitualExported(state, ritualId) {
  return normalizeState({
    ...state,
    ritualLogs: state.ritualLogs.map((log) =>
      log.id === ritualId ? { ...log, exportedToStrava: true, exportedAt: new Date().toISOString() } : log,
    ),
  });
}

export function buildSanitizedCoachContext(state, userConstraints = []) {
  const normalized = normalizeState(state);
  const recentActivities = normalized.activities.filter((activity) => daysSince(activity.startedAt) <= 7);
  const sortedActivities = [...recentActivities].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));
  const latestRun = sortedActivities[0] || null;
  const latestCheckIn = normalized.checkIns[0] || seedCheckIn;
  const recentRituals = normalized.ritualLogs.filter((log) => daysSince(log.createdAt) <= 7);

  return {
    weekly_run_km: round(recentActivities.reduce((sum, activity) => sum + Number(activity.distanceKm || 0), 0), 1),
    weekly_effort: recentActivities.reduce((sum, activity) => sum + Number(activity.relativeEffort || 0), 0),
    last_run_type: latestRun ? latestRun.sport : 'none',
    last_run_hours_ago: latestRun ? Math.max(0, Math.round((Date.now() - new Date(latestRun.startedAt).getTime()) / 36e5)) : null,
    energy: Number(latestCheckIn.energy),
    soreness: Number(latestCheckIn.soreness),
    stress: Number(latestCheckIn.stress),
    sleep_quality: latestCheckIn.sleep,
    breath_logs_7d: recentRituals.filter((log) => log.type === 'Breathe').length,
    sauna_logs_7d: recentRituals.filter((log) => log.title.toLowerCase().includes('sauna')).length,
    user_constraints: sanitizeConstraints(userConstraints),
  };
}

export function buildTodayPlan(state) {
  const context = buildSanitizedCoachContext(state);
  const latestDecision = normalizeState(state).coachDecisions[0]?.decision;
  return latestDecision
    ? enrichDecision(latestDecision, context, latestDecision.source || 'stored')
    : buildDeterministicDecision(context, 'offline');
}

export function buildDeterministicDecision(context, source = 'offline', adjustment = null) {
  const fatigue = context.soreness * 1.2 + context.stress + (10 - context.energy);
  const loadPressure = context.weekly_effort / 42 + context.weekly_run_km / 9;
  const readiness = clamp(Math.round(92 - fatigue * 2.4 - loadPressure + context.breath_logs_7d * 2), 28, 94);
  const recentHardRun = context.weekly_effort >= 170 || context.weekly_run_km >= 34 || context.last_run_type === 'TrailRun';

  let decision = 'control';
  let primaryAction = 'Keep the system steady today: controlled movement, one breath protocol, one rest ritual.';
  let runAdjustment = 'Run easy for 35 to 45 minutes, no pace target.';
  let breathProtocol = 'Nasal Reset - 6 minutes of nasal breathing after the run or before the first work block.';
  let restProtocol = 'Sauna Downshift - one controlled heat round, cool rinse, and five minutes seated before screens.';
  let why = 'The run load is manageable and the check-in can support a steady aerobic day.';
  let confidence = 'medium';
  let commerceHint = 'Sauna Downshift Kit';
  let recommendedProtocolIds = ['nasal-reset', 'sauna-downshift'];
  let recommendedProductTemplateId = 7;

  if (!context.last_run_type || context.last_run_type === 'none') {
    decision = 'control';
    primaryAction = 'Start with a manual check-in and one low-friction breath protocol.';
    runAdjustment = 'Connect Strava for run context, or log today as a non-running control day.';
    breathProtocol = 'Nasal Reset - 6 minutes, low intensity.';
    restProtocol = 'Quiet Reset - 12 minutes, low light, no metrics review.';
    why = 'DRIFT can work without Strava, but run import makes the decision sharper.';
    commerceHint = 'DRIFT Nose Strips';
    recommendedProtocolIds = ['nasal-reset', 'quiet-reset'];
    recommendedProductTemplateId = null;
  }

  if (readiness >= 74 && context.weekly_run_km < 24 && context.energy >= 7) {
    decision = 'build';
    primaryAction = 'Build carefully: add a small amount of run quality without losing the recovery rhythm.';
    runAdjustment = 'Run 45 minutes easy with 6 x 20-second relaxed strides.';
    breathProtocol = 'Hot Miles Prep - four minutes nasal-only before the first stride.';
    restProtocol = 'Quiet Reset - keep the evening simple and screen-light.';
    why = 'Energy is good and weekly load is still light enough to build without forcing the day.';
    confidence = 'medium';
    commerceHint = 'DRIFT Heat Cap';
    recommendedProtocolIds = ['hot-miles-prep', 'quiet-reset'];
    recommendedProductTemplateId = 2;
  }

  if (readiness < 52 || fatigue >= 16) {
    decision = 'rest';
    primaryAction = 'Protect the day. Reduce input and let the body absorb training.';
    runAdjustment = 'Skip intensity. Walk, mobility, or 20 minutes very easy if you need movement.';
    breathProtocol = 'Quiet Reset breathing - inhale 4, exhale 6 for 8 minutes.';
    restProtocol = 'Quiet Rest - skip heat today unless you already tolerate it well.';
    why = 'The check-in suggests the system is already carrying enough stress.';
    confidence = 'high';
    commerceHint = 'DRIFT Nose Strips';
    recommendedProtocolIds = ['quiet-reset', 'nasal-reset'];
    recommendedProductTemplateId = null;
  } else if (recentHardRun || (context.last_run_hours_ago !== null && context.last_run_hours_ago <= 30 && context.weekly_effort >= 120)) {
    decision = 'downshift';
    primaryAction = 'Absorb the work. Your next gain comes from closing the loop, not adding more signal.';
    runAdjustment = 'No hard running today. Choose an easy shakeout or complete rest.';
    breathProtocol = 'Nasal Reset - 6 minutes after work or before the heat round.';
    restProtocol = context.sauna_logs_7d ? 'Short warm-room reset - keep it conservative.' : restProtocol;
    why = 'A recent hard or long load needs a cleaner landing before the next build.';
    confidence = 'high';
    commerceHint = 'Sauna Downshift Kit';
    recommendedProtocolIds = ['nasal-reset', 'sauna-downshift'];
    recommendedProductTemplateId = 7;
  }

  if (adjustment === 'make_it_easier' || adjustment === 'feel_worse') {
    decision = 'rest';
    primaryAction = 'Make today smaller. The win is lowering load without dropping the ritual.';
    runAdjustment = 'No intensity. Walk or take complete rest.';
    breathProtocol = 'Quiet Reset breathing - 8 minutes, nasal only.';
    restProtocol = 'Quiet Rest - no sauna required.';
    why = 'You asked for a lower-input plan, so DRIFT is removing intensity and heat pressure.';
    confidence = 'high';
    commerceHint = 'DRIFT Nose Strips';
    recommendedProtocolIds = ['quiet-reset'];
    recommendedProductTemplateId = null;
  }

  if (adjustment === 'no_sauna_today') {
    restProtocol = 'Quiet Rest - 12 minutes, low light, no heat exposure.';
    why = `${why} Sauna is optional today; the rest target can be met without heat.`;
    recommendedProtocolIds = [...recommendedProtocolIds.filter((id) => id !== 'sauna-downshift'), 'quiet-reset'];
  }

  if (adjustment === 'ran_harder') {
    decision = decision === 'build' ? 'control' : 'downshift';
    primaryAction = 'Treat the session as higher load and close the day cleanly.';
    runAdjustment = 'No additional intensity today.';
    restProtocol = 'Sauna Downshift only if it feels controlled; otherwise use Quiet Rest.';
    why = 'The plan was adjusted because the run was harder than expected.';
    confidence = 'high';
  }

  return enrichDecision(
    {
      decision,
      primary_action: primaryAction,
      run_adjustment: runAdjustment,
      breath_protocol: breathProtocol,
      rest_protocol: restProtocol,
      why,
      confidence,
      safety_note: 'Informational performance guidance only. Not medical advice, diagnosis, injury treatment, or a replacement for a qualified coach.',
      commerce_hint: commerceHint,
      recommended_protocol_ids: [...new Set(recommendedProtocolIds)],
      recommended_product_template_id: recommendedProductTemplateId,
    },
    context,
    source,
  );
}

export function enrichDecision(decision, context, source) {
  return {
    ...decision,
    decision: normalizeDecisionValue(decision.decision),
    readiness: decision.readiness ?? estimateReadiness(context),
    source,
    generated_at: decision.generated_at || new Date().toISOString(),
    privacy: {
      mode: 'minimized-context',
      fields_sent: sanitizedFieldList,
      not_sent: notSentList,
    },
  };
}

export function validateCoachDecision(decision) {
  const required = [
    'decision',
    'primary_action',
    'run_adjustment',
    'breath_protocol',
    'rest_protocol',
    'why',
    'confidence',
    'safety_note',
    'commerce_hint',
  ];

  return (
    decision &&
    required.every((key) => typeof decision[key] === 'string' && decision[key].trim().length > 0) &&
    ['build', 'control', 'downshift', 'rest'].includes(decision.decision) &&
    ['low', 'medium', 'high'].includes(decision.confidence) &&
    Array.isArray(decision.recommended_protocol_ids || []) &&
    Object.prototype.hasOwnProperty.call(decision, 'recommended_product_template_id')
  );
}

export function recordCoachDecision(state, decision, context, source = 'offline') {
  return normalizeState({
    ...state,
    coachDecisions: [
      {
        id: `decision-${Date.now()}`,
        createdAt: new Date().toISOString(),
        decision: enrichDecision(decision, context, source),
        context,
        source,
      },
      ...state.coachDecisions,
    ],
    privacyEvents: [
      buildPrivacyEvent('coach_decision_generated', context, source),
      ...state.privacyEvents,
    ],
  });
}

export function buildPrivacySummary(state) {
  const normalized = normalizeState(state);
  return {
    mode: 'Minimized Context',
    openai_store: false,
    openai_configured: false,
    background_mode: false,
    data_sent_to_openai: sanitizedFieldList,
    data_not_sent_to_openai: notSentList,
    last_event: normalized.privacyEvents[0] || null,
    total_events: normalized.privacyEvents.length,
    explanation:
      'DRIFT sends only aggregate training and readiness signals to the model. Raw Strava payloads, route names, user identity, free-text notes, and tokens stay server-side.',
  };
}

export function combinedTimeline(state) {
  const normalized = normalizeState(state);
  const runs = normalized.activities.map((activity) => ({
    id: activity.id,
    kind: activity.sport,
    title: activity.name || activity.sport,
    meta: `${activity.distanceKm} km / ${activity.movingMinutes} min / ${activity.effort}`,
    date: activity.startedAt,
    source: activity.source,
  }));

  const rituals = normalized.ritualLogs.map((log) => ({
    id: log.id,
    kind: log.type,
    title: log.title,
    meta: `${log.duration} min / ${log.private ? 'Private' : 'Shared'}`,
    date: log.createdAt,
    source: log.exportedToStrava ? 'DRIFT + Strava' : 'DRIFT',
  }));

  return [...runs, ...rituals].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function buildStravaOAuthUrl() {
  return apiRoutes.stravaConnect;
}

export const sanitizedFieldList = [
  'weekly_run_km',
  'weekly_effort',
  'last_run_type',
  'last_run_hours_ago',
  'energy',
  'soreness',
  'stress',
  'sleep_quality',
  'breath_logs_7d',
  'sauna_logs_7d',
  'user_constraints',
];

export const notSentList = [
  'user name',
  'email',
  'raw Strava payload',
  'route names',
  'activity names',
  'free-text check-in notes',
  'access tokens',
  'refresh tokens',
  'precise location data',
];

function buildPrivacyEvent(event, context, source) {
  return {
    id: `privacy-${Date.now()}`,
    event,
    createdAt: new Date().toISOString(),
    source,
    fieldsSent: Object.keys(context),
    fieldsNotSent: notSentList,
  };
}

function estimateReadiness(context) {
  const fatigue = context.soreness * 1.2 + context.stress + (10 - context.energy);
  return clamp(Math.round(92 - fatigue * 2.4 - context.weekly_effort / 42 + context.breath_logs_7d * 2), 28, 94);
}

function normalizeDecisionValue(value) {
  return ['build', 'control', 'downshift', 'rest'].includes(value) ? value : 'control';
}

function sanitizeConstraints(userConstraints) {
  const allowed = new Set(adjustmentOptions.map((option) => option.id));
  return (Array.isArray(userConstraints) ? userConstraints : [userConstraints]).filter((item) => allowed.has(item));
}

function daysSince(date) {
  return Math.max(0, Math.floor((Date.now() - new Date(date).getTime()) / dayMs));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round(value, decimals) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
