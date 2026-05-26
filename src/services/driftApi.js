const STORAGE_KEY = 'drift-coach-state-v2';
const dayMs = 24 * 60 * 60 * 1000;

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
    id: 'post-run-stretch',
    pillar: 'Rest',
    title: 'Post-Run Stretch',
    duration: '10 min',
    durationMinutes: 10,
    intensity: 'Mobility',
    copy: 'A simple guided stretch for calves, hips, hamstrings, and low back after logged volume.',
    equipment: 'Mat optional',
    audioReady: true,
    steps: ['Start with calves and ankles', 'Move into hip flexors and hamstrings', 'Finish with low back breathing'],
    cta: 'Use after easy and moderate volume',
    commerceUrl: null,
  },
  {
    id: 'guided-downshift-meditation',
    pillar: 'Rest',
    title: 'Guided Downshift Meditation',
    duration: '10 min',
    durationMinutes: 10,
    intensity: 'Still',
    copy: 'A quiet guided reset for athletes carrying training load, work stress, or late-day stimulation.',
    equipment: 'Headphones optional',
    audioReady: true,
    steps: ['Sit or lie down without checking metrics', 'Follow a slow body scan from feet to jaw', 'Close with one simple plan for tomorrow'],
    cta: 'Use when volume or stress is high',
    commerceUrl: null,
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
    title: '7-Day Strava Rest Reset',
    pillar: 'System',
    durationDays: 7,
    copy: 'A one-week preview that turns activity volume into stretching, meditation, sauna, or quiet rest.',
    protocolIds: ['post-run-stretch', 'guided-downshift-meditation', 'sauna-downshift', 'quiet-reset'],
    commerceUrl: null,
  },
  {
    id: 'hot-miles',
    title: 'Hot Miles',
    pillar: 'Run',
    durationDays: 14,
    copy: 'Heat-aware running and rest rituals for athletes building without forcing the day.',
    protocolIds: ['hot-miles-prep', 'post-run-stretch', 'guided-downshift-meditation'],
    commerceUrl: '/shop',
  },
  {
    id: 'sauna-downshift-program',
    title: 'Sauna Downshift',
    pillar: 'Rest',
    durationDays: 14,
    copy: 'A conservative heat, meditation, and cool-down system for closing training days.',
    protocolIds: ['sauna-downshift', 'guided-downshift-meditation', 'quiet-reset'],
    commerceUrl: '/shop/sauna-downshift-kit-7',
  },
  {
    id: 'race-week-reset',
    title: 'Race Week Reset',
    pillar: 'System',
    durationDays: 7,
    copy: 'A simple race-week rhythm for mobility, meditation, and lower-input evenings.',
    protocolIds: ['post-run-stretch', 'guided-downshift-meditation', 'quiet-reset'],
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

export const defaultCheckIn = {
  energy: 6,
  soreness: 4,
  sleep: 'okay',
  stress: 4,
  note: '',
};

export const initialCoachState = {
  session: {
    id: 'browser-session',
    authReady: true,
    mode: 'browser-fallback',
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
  checkIns: [],
  ritualLogs: [],
  coachDecisions: [],
  privacyEvents: [],
  entitlements: [],
  mobile: {
    downloadUrl: '/download',
    installUrl: '/app/install',
    iosAppStoreUrl: '',
    androidPlayStoreUrl: '',
  },
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
  const legacyPreviewState = state.session?.mode === ['local', 'preview'].join('-');
  const activities = legacyPreviewState ? [] : Array.isArray(state.activities) ? state.activities : [];
  const checkIns = legacyPreviewState ? [] : Array.isArray(state.checkIns) ? state.checkIns : [];
  const ritualLogs = legacyPreviewState ? [] : Array.isArray(state.ritualLogs) ? state.ritualLogs : [];

  return {
    ...initialCoachState,
    ...state,
    profile: { ...initialCoachState.profile, ...(state.profile || {}) },
    strava: { ...initialCoachState.strava, ...(state.strava || {}) },
    session: { ...initialCoachState.session, ...(state.session || {}) },
    mobile: { ...initialCoachState.mobile, ...(state.mobile || {}) },
    activities,
    checkIns,
    ritualLogs,
    coachDecisions: Array.isArray(state.coachDecisions) ? state.coachDecisions : [],
    privacyEvents: Array.isArray(state.privacyEvents) ? state.privacyEvents : [],
    entitlements: Array.isArray(state.entitlements) ? state.entitlements : [],
  };
}

export function applyBootstrapPayload(currentState, payload) {
  const displayName = cleanDisplayName(payload.profile?.display_name || payload.profile?.displayName);

  return normalizeState({
    ...currentState,
    ...(payload.state || {}),
    profile: {
      ...currentState.profile,
      mode: payload.profile?.mode || payload.state?.profile?.mode || currentState.profile.mode,
      portalAccount: Boolean(payload.profile?.portal_account || payload.profile?.portalAccount),
      displayName,
    },
    session: {
      ...(payload.state?.session || currentState.session),
      csrfToken: payload.csrfToken || currentState.session.csrfToken || null,
    },
    entitlements: payload.entitlements || currentState.entitlements || [],
    mobile: {
      ...currentState.mobile,
      ...(payload.mobile || {}),
    },
  });
}

function cleanDisplayName(value) {
  const label = String(value || '').trim();
  if (!label || /^drift\.profile,\d+$/i.test(label)) return 'DRIFT Athlete';
  return label;
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
    protocolId: input.protocolId || null,
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
  const latestCheckIn = normalized.checkIns[0] || defaultCheckIn;
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
  const hasActivityVolume = Boolean(context.last_run_type && context.last_run_type !== 'none');
  const highVolume = context.weekly_run_km >= 34 || context.weekly_effort >= 170;
  const moderateVolume = context.weekly_run_km >= 16 || context.weekly_effort >= 80;

  let decision = 'control';
  let primaryAction = 'Use today as a recovery support day: one guided stretch, then a short downshift before sleep.';
  let runAdjustment = 'Strava volume is light to moderate this week. Keep the next run easy unless your check-in is clearly strong.';
  let breathProtocol = 'Guided Downshift Meditation - 10 minutes to lower stimulation after training or work.';
  let restProtocol = 'Post-Run Stretch - 10 minutes for calves, hips, hamstrings, and low back.';
  let why = 'Your recent activity volume does not require an aggressive recovery intervention, so DRIFT is recommending mobility plus a short guided reset.';
  let confidence = 'medium';
  let commerceHint = 'No gear needed';
  let recommendedProtocolIds = ['post-run-stretch', 'guided-downshift-meditation'];
  let recommendedProductTemplateId = null;

  if (!hasActivityVolume) {
    decision = 'control';
    primaryAction = 'Start manually today: check in, complete a guided stretch, and add Strava when ready for volume-based recommendations.';
    runAdjustment = 'No imported activity volume yet. DRIFT can still guide rest from your check-in, but Strava makes the recommendation sharper.';
    breathProtocol = 'Guided Downshift Meditation - 10 minutes, low input.';
    restProtocol = 'Post-Run Stretch - 10 minutes, easy range only.';
    why = 'Without imported activity volume, DRIFT keeps the recommendation conservative and useful: mobility plus a short guided reset.';
    commerceHint = 'No gear needed';
    recommendedProtocolIds = ['post-run-stretch', 'guided-downshift-meditation'];
    recommendedProductTemplateId = null;
  }

  if (hasActivityVolume && !moderateVolume && readiness >= 68) {
    decision = 'build';
    primaryAction = 'Volume is light. Keep the rest session short so you recover without making the day feel heavy.';
    runAdjustment = 'Next run can stay normal: easy aerobic work or light strides if energy remains high.';
    breathProtocol = 'Guided Downshift Meditation - 10 minutes after work or before sleep.';
    restProtocol = 'Post-Run Stretch - 10 minutes, focus on hips and calves.';
    why = 'Strava volume is still low enough that the best recovery choice is a simple stretch and nervous-system downshift.';
    confidence = 'medium';
    commerceHint = 'No gear needed';
    recommendedProtocolIds = ['post-run-stretch', 'guided-downshift-meditation'];
    recommendedProductTemplateId = null;
  }

  if (readiness < 52 || fatigue >= 16) {
    decision = 'rest';
    primaryAction = 'Protect the day. Use a guided meditation and skip extra training signal.';
    runAdjustment = 'No intensity today. Walk or take complete rest if soreness, stress, or sleep feel off.';
    breathProtocol = 'Guided Downshift Meditation - 10 minutes, no metrics review first.';
    restProtocol = 'Quiet Reset - 12 minutes, low light and low input. Skip sauna unless it already feels easy for you.';
    why = 'Your check-in suggests the system is carrying enough stress, so DRIFT is recommending the lowest-friction rest protocol.';
    confidence = 'high';
    commerceHint = 'No gear needed';
    recommendedProtocolIds = ['guided-downshift-meditation', 'quiet-reset'];
    recommendedProductTemplateId = null;
  } else if (highVolume || recentHardRun || (context.last_run_hours_ago !== null && context.last_run_hours_ago <= 30 && context.weekly_effort >= 120)) {
    decision = 'downshift';
    primaryAction = 'Activity volume is high. Close the training day with sauna if available, otherwise use meditation plus stretching.';
    runAdjustment = 'No hard running today. Choose a very easy shakeout or complete rest.';
    breathProtocol = 'Guided Downshift Meditation - 10 minutes before the rest session or before sleep.';
    restProtocol = context.sauna_logs_7d
      ? 'Post-Run Stretch - 10 minutes, then Quiet Reset. You already logged sauna recently.'
      : 'Sauna Downshift - one controlled heat round, cool rinse, and a quiet landing.';
    why = 'Strava volume and recent effort indicate that the next useful session is recovery, not more output.';
    confidence = 'high';
    commerceHint = 'Sauna Downshift Kit';
    recommendedProtocolIds = context.sauna_logs_7d
      ? ['post-run-stretch', 'guided-downshift-meditation', 'quiet-reset']
      : ['sauna-downshift', 'guided-downshift-meditation', 'post-run-stretch'];
    recommendedProductTemplateId = 7;
  } else if (moderateVolume) {
    decision = 'control';
    primaryAction = 'Volume is meaningful but manageable. Use stretching now and guided meditation later.';
    runAdjustment = 'Keep the next session easy unless today’s check-in improves clearly.';
    breathProtocol = 'Guided Downshift Meditation - 10 minutes in the evening.';
    restProtocol = 'Post-Run Stretch - 10 minutes after the run or as the first recovery block.';
    why = 'Your Strava week has enough volume to benefit from structured rest, but not enough to require a full downshift day.';
    confidence = 'medium';
    commerceHint = 'No gear needed';
    recommendedProtocolIds = ['post-run-stretch', 'guided-downshift-meditation'];
    recommendedProductTemplateId = null;
  }

  if (adjustment === 'make_it_easier' || adjustment === 'feel_worse') {
    decision = 'rest';
    primaryAction = 'Make today smaller. The win is completing one easy rest session.';
    runAdjustment = 'No intensity. Walk or take complete rest.';
    breathProtocol = 'Guided Downshift Meditation - 10 minutes, low input.';
    restProtocol = 'Quiet Reset - no sauna required.';
    why = 'You asked for a lower-input plan, so DRIFT is removing intensity, heat pressure, and extra decisions.';
    confidence = 'high';
    commerceHint = 'No gear needed';
    recommendedProtocolIds = ['guided-downshift-meditation', 'quiet-reset'];
    recommendedProductTemplateId = null;
  }

  if (adjustment === 'no_sauna_today') {
    restProtocol = 'Post-Run Stretch - 10 minutes, then Quiet Reset. No heat exposure needed.';
    why = `${why} Sauna is optional; the recovery target can be met with stretching and guided rest.`;
    recommendedProtocolIds = [...recommendedProtocolIds.filter((id) => id !== 'sauna-downshift'), 'post-run-stretch', 'quiet-reset'];
  }

  if (adjustment === 'ran_harder') {
    decision = decision === 'build' ? 'control' : 'downshift';
    primaryAction = 'Treat the activity as higher load and close the day with a rest protocol.';
    runAdjustment = 'No additional intensity today.';
    breathProtocol = 'Guided Downshift Meditation - 10 minutes before sleep.';
    restProtocol = 'Sauna Downshift if available and familiar; otherwise Post-Run Stretch plus Quiet Reset.';
    why = 'The recommendation changed because the activity was harder than planned.';
    confidence = 'high';
    recommendedProtocolIds = ['guided-downshift-meditation', 'post-run-stretch', 'sauna-downshift'];
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
