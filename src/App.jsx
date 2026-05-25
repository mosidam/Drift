import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Brain,
  CalendarDays,
  Check,
  CircleAlert,
  Flame,
  Gauge,
  Home,
  LogIn,
  Lock,
  Moon,
  Plus,
  RefreshCw,
  Route as RouteIcon,
  ShieldCheck,
  Smartphone,
  Timer,
  TrendingUp,
  UserPlus,
  UserRound,
  Waves,
  Wind,
  Zap,
} from 'lucide-react';
import {
  adjustmentOptions,
  apiRoutes,
  applyBootstrapPayload,
  buildDeterministicDecision,
  buildPrivacySummary,
  buildSanitizedCoachContext,
  buildStravaOAuthUrl,
  buildTodayPlan,
  commerceProducts,
  combinedTimeline,
  createCheckIn,
  createRitualLog,
  decisionLabels,
  loadCoachState,
  markRitualExported,
  normalizeState,
  programs,
  protocols,
  recordCoachDecision,
  saveCoachState,
} from './services/driftApi.js';

const API_BASE = import.meta.env.VITE_DRIFT_API_BASE || (import.meta.env.DEV ? 'http://localhost:8787' : '');
const appPath = (path = '') => `/app${path}`;
const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
const loginUrl = '/web/login?redirect=/app/today';
const signupUrl = '/web/signup?redirect=/app/today';

const assets = {
  runner: assetUrl('/assets/drift-hero-runner.png'),
  sauna: assetUrl('/assets/drift-sauna-kit.png'),
};

const navItems = [
  ['Today', appPath('/today'), Home],
  ['Log', appPath('/log'), Plus],
  ['Coach', appPath('/coach'), Brain],
  ['Library', appPath('/library'), Waves],
  ['Programs', appPath('/programs'), CalendarDays],
  ['Account', appPath('/profile'), UserRound],
];

const quickRituals = [
  {
    type: 'Breathe',
    title: 'Nasal Reset',
    duration: 6,
    icon: Wind,
    copy: 'Slow nasal control for work blocks, evening resets, or post-run downshift.',
  },
  {
    type: 'Rest',
    title: 'Sauna Downshift',
    duration: 22,
    icon: Flame,
    copy: 'One controlled heat round, cool rinse, and a quiet landing.',
  },
  {
    type: 'Rest',
    title: 'Quiet Rest',
    duration: 12,
    icon: Moon,
    copy: 'Low input recovery for days where intensity should stay out of the room.',
  },
  {
    type: 'Run',
    title: 'Hot Miles Prep',
    duration: 8,
    icon: Activity,
    copy: 'A short pre-run protocol for heat, focus, and nasal control.',
  },
];

function App() {
  const [state, setState] = useState(() => loadCoachState());
  const [catalog, setCatalog] = useState({
    protocols,
    programs,
    products: commerceProducts,
  });
  const [status, setStatus] = useState({ api: 'loading', coach: 'offline' });
  const plan = useMemo(() => buildTodayPlan(state), [state]);
  const timeline = useMemo(() => combinedTimeline(state), [state]);
  const privacy = useMemo(() => buildPrivacySummary(state), [state]);
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    apiRequest(apiRoutes.bootstrap)
      .then((payload) => {
        if (cancelled) return;
        setState((current) => applyBootstrapPayload(current, payload));
        setCatalog({
          protocols: payload.protocols?.length ? payload.protocols : protocols,
          programs: payload.programs?.length ? payload.programs : programs,
          products: payload.products?.length ? payload.products : commerceProducts,
        });
        setStatus({ api: 'live', coach: payload.plan?.source || 'offline' });
      })
      .catch(() => {
        if (cancelled) return;
        setStatus({ api: 'local', coach: plan.source || 'offline' });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    saveCoachState(state);
  }, [state]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  const updateState = (updater) => {
    setState((current) => normalizeState(typeof updater === 'function' ? updater(current) : updater));
  };

  const postState = async (path, body, fallback) => {
    try {
      const payload = await apiRequest(path, { method: 'POST', body }, state.session.csrfToken);
      if (payload.state) setState((current) => applyBootstrapPayload(current, payload));
      setStatus({ api: 'live', coach: payload.decision?.source || payload.plan?.source || status.coach });
      return payload;
    } catch {
      const next = fallback(state);
      if (import.meta.env.DEV) {
        setState(normalizeState(next));
        setStatus({ api: 'local', coach: 'offline' });
      } else {
        setStatus({ api: 'error', coach: status.coach });
      }
      return { state: next, decision: buildTodayPlan(next) };
    }
  };

  return (
    <div className="app-shell">
      <AppHeader state={state} status={status} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to={appPath('/today')} replace />} />
          <Route path="/today" element={<Navigate to={appPath('/today')} replace />} />
          <Route path="/log" element={<Navigate to={appPath('/log')} replace />} />
          <Route path="/coach" element={<Navigate to={appPath('/coach')} replace />} />
          <Route path="/protocols" element={<Navigate to={appPath('/protocols')} replace />} />
          <Route path="/settings" element={<Navigate to={appPath('/profile')} replace />} />
          <Route path="/history" element={<Navigate to={appPath('/profile')} replace />} />
          <Route
            path="/app/today"
            element={<TodayPage state={state} plan={plan} status={status} postState={postState} products={catalog.products} />}
          />
          <Route path="/app/log" element={<LogPage state={state} plan={plan} postState={postState} />} />
          <Route
            path="/app/coach"
            element={<CoachPage state={state} plan={plan} privacy={privacy} postState={postState} />}
          />
          <Route
            path="/app/history"
            element={<HistoryPage state={state} timeline={timeline} updateState={updateState} postState={postState} />}
          />
          <Route path="/app/library" element={<LibraryPage protocols={catalog.protocols} products={catalog.products} />} />
          <Route path="/app/protocols" element={<ProtocolsPage protocols={catalog.protocols} />} />
          <Route path="/app/programs" element={<ProgramsPage programs={catalog.programs} protocols={catalog.protocols} />} />
          <Route
            path="/app/profile"
            element={<SettingsPage state={state} postState={postState} />}
          />
          <Route path="/app/privacy" element={<PrivacyPage privacy={privacy} />} />
          <Route path="/app/strava/callback" element={<StravaCallback updateState={updateState} />} />
          <Route path="/strava/callback" element={<Navigate to={appPath('/strava/callback')} replace />} />
          <Route path="*" element={<Navigate to={appPath('/today')} replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

function AppHeader({ state, status }) {
  const label = state.strava.connected
    ? 'Strava connected'
    : state.profile?.portalAccount
      ? 'Account saved'
    : status.api === 'live' && state.profile?.mode === 'guest'
      ? 'Free preview'
      : status.api === 'live'
        ? 'Ready'
        : status.api === 'error'
          ? 'Saving paused'
          : 'Preview';

  return (
    <header className="app-header">
      <Link to={appPath('/today')} className="brand-lockup" aria-label="DRIFT Coach home">
        <span>DRIFT</span>
        <small>Recovery OS</small>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([labelText, href, Icon]) => (
          <NavLink key={labelText} to={href} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            <Icon size={16} />
            <span>{labelText}</span>
          </NavLink>
        ))}
      </nav>
      <div className="header-status">
        <span className={state.strava.connected || status.api === 'live' ? 'status-dot is-live' : 'status-dot'} />
        <span>{label}</span>
      </div>
    </header>
  );
}

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="DRIFT Coach navigation">
      {navItems.map(([label, href, Icon]) => (
        <NavLink key={label} to={href} className={({ isActive }) => (isActive ? 'is-active' : '')}>
          <Icon size={19} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function TodayPage({ state, plan, status, postState, products }) {
  const context = buildSanitizedCoachContext(state);
  const hasStrava = state.strava.connected && state.activities.length > 0;
  const hasAccount = Boolean(state.profile?.portalAccount);
  const decisionLabel = decisionLabels[plan.decision];

  const generateDecision = () =>
    postState(apiRoutes.coachDecision, {}, (current) => {
      const localContext = buildSanitizedCoachContext(current);
      const localDecision = buildDeterministicDecision(localContext, 'offline');
      return recordCoachDecision(current, localDecision, localContext, 'offline');
    });
  const recommendedProduct =
    products.find((product) => product.id === plan.recommended_product_template_id) ||
    products.find((product) => product.name === plan.commerce_hint);

  return (
    <div className="screen today-screen">
      <section className="hero-card recovery-hero">
        <img src={assets.runner} alt="" />
        <div className="hero-scrim" />
        <div className="hero-copy">
          <p className="eyebrow">Recovery OS for Strava athletes</p>
          <h1>{decisionLabel}: your next best recovery decision.</h1>
          <p>Strava shows the workout. DRIFT helps you close the day with the right Run / Breathe / Rest ritual.</p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={generateDecision}>
              <Brain size={17} /> Get today’s decision
            </button>
            <Link to={appPath('/log')} className="button ghost">
              <Plus size={17} /> Check in
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks connected={hasStrava} />

      {!hasAccount && <AccountPrompt />}

      {!hasStrava && <EmptyStravaState />}

      <section className="decision-band">
        <MetricCard icon={Gauge} label="Decision" value={decisionLabel} detail={`${plan.readiness} readiness`} />
        <MetricCard icon={TrendingUp} label="7-day load" value={`${context.weekly_run_km} km`} detail={`${context.weekly_effort} effort`} />
        <MetricCard icon={Wind} label="Breath" value={context.breath_logs_7d} detail="logs this week" />
        <MetricCard icon={Flame} label="Heat" value={context.sauna_logs_7d} detail="sauna logs" />
      </section>

      <section className="section-block">
        <div className="section-title">
          <p className="eyebrow">{status.coach === 'openai' ? 'Personalized daily plan' : 'Daily plan'}</p>
          <h2>Today’s Run / Breathe / Rest plan.</h2>
        </div>
        <div className="decision-grid">
          <DecisionCard icon={RouteIcon} label="Run Context" title={decisionLabel} copy={plan.run_adjustment} />
          <DecisionCard icon={Wind} label="Breath Protocol" title="Breathe" copy={plan.breath_protocol} />
          <DecisionCard icon={Waves} label="Sauna / Rest Protocol" title="Rest" copy={plan.rest_protocol} />
          <DecisionCard icon={Brain} label="Why this plan" title="Why" copy={plan.why} />
        </div>
      </section>

      <section className="split-grid">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Run Context</p>
              <h3>{hasStrava ? 'Strava is shaping today' : 'Manual check-in is enough to start'}</h3>
            </div>
            <RefreshCw size={18} />
          </div>
          <div className="run-stats">
            <span>{context.weekly_run_km} km / 7d</span>
            <span>{context.weekly_effort} effort</span>
            <span>{context.last_run_type}</span>
          </div>
          <p>
            DRIFT uses weekly load, last-run timing, and your check-in. Route details and private activity names stay out
            of the coaching plan.
          </p>
        </div>
        <div className="panel product-panel">
          <img src={assets.sauna} alt="DRIFT sauna ritual kit" />
          <div>
            <p className="eyebrow">Contextual Tool</p>
            <h3>{recommendedProduct?.name || plan.commerce_hint}</h3>
            <p>One useful gear match for the day, always secondary to the ritual.</p>
            {recommendedProduct?.url && (
              <a className="button ghost" href={recommendedProduct.url}>
                <ArrowRight size={17} /> View in shop
              </a>
            )}
          </div>
        </div>
      </section>

      <PrivacyNotice plan={plan} />
      <QuickLogBar postState={postState} />
    </div>
  );
}

function LogPage({ state, plan, postState }) {
  const latestCheckIn = state.checkIns[0];
  const [savedNotice, setSavedNotice] = useState(null);

  const saveCheckIn = async (input) => {
    await postState(apiRoutes.checkIn, input, (current) => {
      const withCheckIn = createCheckIn(current, input);
      const context = buildSanitizedCoachContext(withCheckIn);
      return recordCoachDecision(withCheckIn, buildDeterministicDecision(context, 'offline'), context, 'offline');
    });
    setSavedNotice('Check-in saved. Your next decision will use it.');
  };

  const logRitual = async (ritual) => {
    await postState(apiRoutes.ritualLog, ritual, (current) => createRitualLog(current, ritual));
    setSavedNotice(`${ritual.title} logged. Streak updated.`);
  };

  return (
    <div className="screen">
      <PageIntro
        eyebrow="Check body state"
        title="Tell DRIFT what Strava cannot see."
        copy="Energy, soreness, stress, and sleep quality tune the daily plan. Private notes stay in your DRIFT account."
      />
      {savedNotice && (
        <section className="success-notice" role="status">
          <Check size={20} />
          <p>{savedNotice}</p>
        </section>
      )}
      <CheckInForm
        initial={latestCheckIn}
        onSubmit={saveCheckIn}
      />

      <section className="section-block">
        <div className="section-title">
          <p className="eyebrow">Log ritual</p>
          <h2>Close the loop after training.</h2>
        </div>
        <div className="ritual-grid">
          {quickRituals.map((ritual) => (
            <RitualCard
              key={ritual.title}
              ritual={ritual}
              onLog={() => logRitual(ritual)}
            />
          ))}
        </div>
      </section>

      <section className="panel coach-summary">
        <Brain size={22} />
        <div>
          <p className="eyebrow">Current decision</p>
          <h3>{decisionLabels[plan.decision]}</h3>
          <p>{plan.primary_action}</p>
        </div>
      </section>
    </div>
  );
}

function CoachPage({ state, plan, privacy, postState }) {
  const [lastAdjustment, setLastAdjustment] = useState(null);

  const adjust = async (adjustment) => {
    const payload = await postState(
      apiRoutes.coachAdjust,
      { adjustment },
      (current) => {
        const context = buildSanitizedCoachContext(current, [adjustment]);
        const decision = buildDeterministicDecision(context, 'offline', adjustment);
        return recordCoachDecision(current, decision, context, 'offline');
      },
    );
    setLastAdjustment({
      adjustment,
      decision: payload.decision || buildTodayPlan(payload.state || state),
    });
  };

  return (
    <div className="screen coach-screen">
      <PageIntro
        eyebrow="Plan Explainer"
        title="Adjust the day without starting a chat."
        copy="Tap what changed and DRIFT reshapes the plan into a clearer, easier recovery decision."
      />
      <section className="coach-decision-panel">
        <div>
          <p className="eyebrow">Today’s decision</p>
          <h2>{decisionLabels[plan.decision]}</h2>
          <p>{plan.primary_action}</p>
        </div>
        <div className="confidence-card">
          <span>Confidence</span>
          <strong>{plan.confidence}</strong>
          <small>{plan.source === 'openai' ? 'Personalized plan' : 'Standard plan'}</small>
        </div>
      </section>
      <section className="adjust-grid" aria-label="Plan adjustment actions">
        {adjustmentOptions.map((option) => (
          <button key={option.id} type="button" onClick={() => adjust(option.id)}>
            <span>{option.label}</span>
            <small>{option.copy}</small>
          </button>
        ))}
      </section>
      <section className="decision-grid compact">
        <DecisionCard icon={RouteIcon} label="Run" title="Run Adjustment" copy={plan.run_adjustment} />
        <DecisionCard icon={Wind} label="Breathe" title="Breath Protocol" copy={plan.breath_protocol} />
        <DecisionCard icon={Waves} label="Rest" title="Rest Protocol" copy={plan.rest_protocol} />
        <DecisionCard icon={Brain} label="Why" title="Reasoning" copy={lastAdjustment?.decision?.why || plan.why} />
      </section>
      <section className="privacy-panel">
        <div>
          <p className="eyebrow">Private by default</p>
          <h3>Only recovery context is used.</h3>
          <p>DRIFT uses training load, check-in scores, and ritual history to explain the plan. Private notes and route details stay out.</p>
        </div>
        <div className="privacy-list">
          <span>Run load</span>
          <span>Body check-in</span>
          <span>Ritual streaks</span>
        </div>
      </section>
    </div>
  );
}

function HistoryPage({ state, timeline, postState }) {
  const weekly = state.activities.slice(0, 7).reverse();

  return (
    <div className="screen">
      <PageIntro
        eyebrow="History"
        title="One timeline for effort and downshift."
        copy="Runs come from Strava. Sauna and breathwork are DRIFT logs, private unless you choose to export them."
      />
      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Weekly Load</p>
            <h3>{state.activities.length ? 'Run volume context' : 'No Strava runs yet'}</h3>
          </div>
          <span>{state.activities.reduce((sum, run) => sum + run.distanceKm, 0).toFixed(1)} km</span>
        </div>
        <div className="bar-chart" aria-label="Recent run distance chart">
          {(weekly.length ? weekly : [{ id: 'empty', startedAt: new Date().toISOString(), distanceKm: 0 }]).map((run) => (
            <div key={run.id}>
              <span style={{ height: `${Math.max(20, run.distanceKm * 5)}px` }} />
              <small>{new Date(run.startedAt).toLocaleDateString(undefined, { weekday: 'short' })}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-icon">{iconForKind(item.kind)}</div>
            <div>
              <p>{item.kind}</p>
              <h3>{item.title}</h3>
              <span>{item.meta}</span>
            </div>
            <div className="timeline-side">
              <small>{relativeDate(item.date)}</small>
              {item.kind !== 'Run' && item.kind !== 'TrailRun' ? (
                <button
                  className="mini-button"
                  disabled={!state.strava.writeScope || item.source.includes('Strava')}
                  onClick={() => postState(apiRoutes.stravaExportRitual, { ritualId: item.id }, (current) => markRitualExported(current, item.id))}
                >
                  {item.source.includes('Strava') ? 'Exported' : state.strava.writeScope ? 'Export' : 'Private'}
                </button>
              ) : (
                <small>{item.source}</small>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function LibraryPage({ protocols: protocolCatalog, products }) {
  const [filter, setFilter] = useState('All');
  const visibleProtocols =
    filter === 'All' ? protocolCatalog : protocolCatalog.filter((protocol) => protocol.pillar === filter);

  return (
    <div className="screen">
      <PageIntro
        eyebrow="Library"
        title="Guided recovery sessions, built around the training day."
        copy="Browse DRIFT like an app library: short protocols, clear equipment, timer-ready steps, and optional product support."
      />
      <section className="filter-tabs" aria-label="Library filters">
        {['All', 'Run', 'Breathe', 'Rest'].map((item) => (
          <button key={item} type="button" className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </section>
      <section className="protocol-grid">
        {visibleProtocols.map((protocol) => (
          <GuidedProtocolCard key={protocol.id} protocol={protocol} products={products} />
        ))}
      </section>
      <SafetyNotice />
    </div>
  );
}

function ProgramsPage({ programs: programCatalog, protocols: protocolCatalog }) {
  return (
    <div className="screen">
      <PageIntro
        eyebrow="Programs"
        title="Calm-like paths for Run / Breathe / Rest."
        copy="Programs turn single rituals into weekly systems. Product purchases can unlock related paths while the free preview stays useful."
      />
      <section className="program-grid">
        {programCatalog.map((program) => (
          <article className="program-card" key={program.id}>
            <div className="protocol-top">
              <CalendarDays size={22} />
              <span>{program.pillar}</span>
            </div>
            <h2>{program.title}</h2>
            <p>{program.copy}</p>
            <div className="protocol-meta">
              <span>
                <Timer size={15} /> {program.durationDays} days
              </span>
              <span>
                <Lock size={15} /> Linked kit unlocks full path
              </span>
            </div>
            <div className="program-strip">
              {(program.protocolIds || []).slice(0, 3).map((id) => {
                const protocol = protocolCatalog.find((item) => item.id === id);
                return <span key={id}>{protocol?.title || id}</span>;
              })}
            </div>
            {program.commerceUrl && (
              <a className="button ghost" href={program.commerceUrl}>
                <ArrowRight size={17} /> View linked system
              </a>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}

function ProtocolsPage({ protocols: protocolCatalog = protocols }) {
  return (
    <div className="screen">
      <PageIntro
        eyebrow="Protocols"
        title="Rituals for the hours around training."
        copy="Run gives the signal. Breathe and Rest close the loop. DRIFT protocols are practical, not medical."
      />
      <section className="protocol-grid">
        {protocolCatalog.map((protocol) => {
          const Icon = protocol.pillar === 'Run' ? Activity : protocol.pillar === 'Breathe' ? Wind : Waves;
          return (
            <article className="protocol-card" key={protocol.id}>
              <div className="protocol-top">
                <Icon size={22} />
                <span>{protocol.pillar}</span>
              </div>
              <h2>{protocol.title}</h2>
              <p>{protocol.copy}</p>
              <div className="protocol-meta">
                <span>
                  <Timer size={15} /> {protocol.duration}
                </span>
                <span>
                  <Zap size={15} /> {protocol.intensity}
                </span>
              </div>
              <ol>
                {protocol.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <button className="button ghost" type="button">
                <ArrowRight size={17} /> {protocol.cta}
              </button>
            </article>
          );
        })}
      </section>
      <SafetyNotice />
    </div>
  );
}

function GuidedProtocolCard({ protocol, products }) {
  const Icon = protocol.pillar === 'Run' ? Activity : protocol.pillar === 'Breathe' ? Wind : Waves;
  const linkedProduct = products.find((product) => (product.protocolIds || []).includes(protocol.id));

  return (
    <article className="protocol-card guided-card">
      <div className="protocol-top">
        <Icon size={22} />
        <span>{protocol.pillar}</span>
      </div>
      <h2>{protocol.title}</h2>
      <p>{protocol.copy}</p>
      <div className="protocol-meta">
        <span>
          <Timer size={15} /> {protocol.duration}
        </span>
        <span>
          <Zap size={15} /> {protocol.intensity}
        </span>
        <span>
          <ShieldCheck size={15} /> {protocol.audioReady ? 'Audio-ready' : 'Timer-only'}
        </span>
      </div>
      <ol>
        {protocol.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="button-row">
        <Link to={appPath('/log')} className="button primary">
          <Timer size={17} /> Start session
        </Link>
        {linkedProduct?.url && (
          <a href={linkedProduct.url} className="button ghost">
            <ArrowRight size={17} /> {linkedProduct.name}
          </a>
        )}
      </div>
    </article>
  );
}

function SettingsPage({ state, postState }) {
  const oauthUrl = buildStravaOAuthUrl();
  const params = new URLSearchParams(window.location.search);
  const stravaStatus = params.get('strava');
  const [notice, setNotice] = useState(null);
  const stravaMessage = {
    missing_config: 'Strava connection is not open yet. You can still use manual check-ins and save rituals today.',
    missing_code: 'Strava did not return an authorization code. Try connecting again from this screen.',
    state_error: 'For your safety, that Strava session expired. Start the connection again.',
    denied: 'Strava connection was cancelled. Manual check-ins still work.',
    read_scope_required: 'DRIFT needs activity read access to import run load from Strava.',
    connected_sync_failed: 'Strava connected, but the first sync did not finish. Tap Sync Strava to try again.',
  }[stravaStatus];

  const connect = async () => {
    if (state.strava.connected) {
      await postState(apiRoutes.stravaSync, {}, (current) => current);
      setNotice('Strava synced. Your next plan will use the latest run context.');
      return;
    }
    if (oauthUrl) window.location.href = `${API_BASE}${oauthUrl}`;
  };

  return (
    <div className="screen">
      <PageIntro
        eyebrow="Account"
        title="Save your recovery rhythm."
        copy="Create a free DRIFT account to keep history, connect Strava, and carry your programs across devices."
      />
      {stravaMessage && (
        <section className="safety-notice">
          <CircleAlert size={20} />
          <p>{stravaMessage}</p>
        </section>
      )}
      {notice && (
        <section className="success-notice" role="status">
          <Check size={20} />
          <p>{notice}</p>
        </section>
      )}
      <section className="settings-grid">
        <AccountCard hasAccount={state.profile?.portalAccount} />
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Run import</p>
              <h3>{state.strava.connected ? state.strava.athleteName : 'Not connected'}</h3>
            </div>
            <Activity size={22} />
          </div>
          <p>
            Connect Strava so DRIFT can see weekly run load, recent effort, and last-run timing. When Strava asks,
            activity read powers the plan; activity write lets you send rituals back when you choose.
          </p>
          <div className="button-row">
            <button className="button primary" type="button" onClick={connect}>
              <RefreshCw size={17} /> {state.strava.connected ? 'Sync Strava' : 'Connect Strava'}
            </button>
          </div>
        </article>
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Install</p>
              <h3>Add DRIFT to your home screen.</h3>
            </div>
            <Smartphone size={22} />
          </div>
          <p>
            On iPhone: open Safari, tap Share, then Add to Home Screen. On Android: use the browser Install App
            prompt.
          </p>
        </article>
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Privacy</p>
              <h3>Private by default.</h3>
            </div>
            <Lock size={22} />
          </div>
          <p>Private notes, route details, account identity, and connection credentials are not used in the AI plan.</p>
          <Link to={appPath('/privacy')} className="button ghost">
            <ShieldCheck size={17} /> Privacy details
          </Link>
        </article>
      </section>
    </div>
  );
}

function PrivacyPage({ privacy }) {
  return (
    <div className="screen">
      <PageIntro
        eyebrow="Privacy"
        title="Your routes and notes are not the product."
        copy="DRIFT can personalize a recovery plan without reading route details, maps, private notes, or identity details."
      />
      <section className="privacy-panel">
        <div>
          <p className="eyebrow">Used for your plan</p>
          <h3>Recovery signals only.</h3>
          <p>Training load, last-run timing, check-in scores, ritual streaks, and selected adjustment buttons shape the daily decision.</p>
        </div>
        <div className="privacy-list">
          <span>Weekly run load</span>
          <span>Energy / soreness / stress / sleep</span>
          <span>Breath and sauna logs</span>
          <span>Selected adjustment buttons</span>
        </div>
      </section>
      <section className="privacy-panel">
        <div>
          <p className="eyebrow">Kept out</p>
          <h3>Routes, notes, identity, and credentials.</h3>
          <p>Your private notes, route details, account identity, and Strava connection credentials stay out of the coaching request.</p>
        </div>
        <div className="privacy-list">
          <span>Route names and maps</span>
          <span>Private check-in notes</span>
          <span>Name and email</span>
          <span>Strava connection credentials</span>
        </div>
      </section>
      <section className="safety-notice">
        <ShieldCheck size={20} />
        <p>
          The coaching engine runs inside DRIFT, not inside your browser. The app never sees private service keys or
          your Strava connection credentials.
        </p>
      </section>
      {!privacy.openai_configured && (
        <section className="safety-notice">
          <CircleAlert size={20} />
          <p>Daily plans continue with DRIFT’s standard planner until personalized AI decisions are active.</p>
        </section>
      )}
    </div>
  );
}

function StravaCallback() {
  return (
    <div className="screen center-screen">
      <div className="panel">
        <p className="eyebrow">Strava</p>
        <h1>Returning from Strava.</h1>
        <p>If the connection did not complete automatically, start the Strava link again from Account.</p>
        <Link to={appPath('/today')} className="button primary">
          <ArrowRight size={17} /> Return to Today
        </Link>
      </div>
    </div>
  );
}

function HowItWorks({ connected }) {
  const steps = [
    ['Import run load', connected ? 'Strava is connected.' : 'Connect Strava or use a manual check-in.'],
    ['Check body state', 'Energy, soreness, stress, sleep.'],
    ['Get decision', 'Build, Control, Downshift, or Rest.'],
    ['Log ritual', 'Breathe, sauna, or quiet reset.'],
  ];

  return (
    <section className="how-grid" aria-label="How DRIFT works">
      {steps.map(([title, copy], index) => (
        <article key={title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{title}</h3>
          <p>{copy}</p>
        </article>
      ))}
    </section>
  );
}

function AccountPrompt() {
  return (
    <section className="account-callout">
      <div className="account-icon">
        <UserRound size={24} />
      </div>
      <div>
        <p className="eyebrow">Free account</p>
        <h2>Save your history before you start building streaks.</h2>
        <p>
          A DRIFT account keeps your check-ins, ritual logs, Strava connection, and unlocked programs available across
          devices.
        </p>
      </div>
      <div className="account-actions">
        <a className="button primary" href={signupUrl}>
          <UserPlus size={17} /> Create account
        </a>
        <a className="button ghost" href={loginUrl}>
          <LogIn size={17} /> Log in
        </a>
      </div>
    </section>
  );
}

function AccountCard({ hasAccount }) {
  return (
    <article className="panel account-card">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Free account</p>
          <h3>{hasAccount ? 'Your history is being saved.' : 'Create once. Use everywhere.'}</h3>
        </div>
        <UserRound size={22} />
      </div>
      <p>
        {hasAccount
          ? 'Your check-ins, rituals, Strava connection, and program access are tied to this account.'
          : 'Save recovery history, keep streaks across devices, connect Strava, and unlock linked programs from DRIFT kits.'}
      </p>
      {!hasAccount && (
        <div className="button-row">
          <a className="button primary" href={signupUrl}>
            <UserPlus size={17} /> Create free account
          </a>
          <a className="button ghost" href={loginUrl}>
            <LogIn size={17} /> Log in
          </a>
        </div>
      )}
    </article>
  );
}

function EmptyStravaState() {
  return (
    <section className="empty-state">
      <div>
        <p className="eyebrow">Start without Strava</p>
        <h2>Use DRIFT today. Connect Strava when ready.</h2>
        <p>
          A manual check-in is enough to get a plan. Strava adds weekly load and last-run timing when you connect it.
        </p>
      </div>
      <Link to={appPath('/profile')} className="button primary">
        <Activity size={17} /> Connect Strava
      </Link>
    </section>
  );
}

function CheckInForm({ initial, onSubmit }) {
  const [form, setForm] = useState({
    energy: initial.energy,
    soreness: initial.soreness,
    sleep: initial.sleep,
    stress: initial.stress,
    note: initial.note,
  });

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  return (
    <form
      className="checkin-panel"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(form);
      }}
    >
      <SliderField label="Energy" value={form.energy} onChange={(value) => update('energy', value)} />
      <SliderField label="Soreness" value={form.soreness} onChange={(value) => update('soreness', value)} />
      <SliderField label="Stress" value={form.stress} onChange={(value) => update('stress', value)} />
      <label className="field">
        <span>Sleep feel</span>
        <select value={form.sleep} onChange={(event) => update('sleep', event.target.value)}>
          <option value="poor">Poor</option>
          <option value="okay">Okay</option>
          <option value="good">Good</option>
          <option value="great">Great</option>
        </select>
      </label>
      <label className="field wide">
        <span>Private note</span>
        <textarea
          value={form.note}
          onChange={(event) => update('note', event.target.value)}
          placeholder="Optional. Private to your DRIFT account."
        />
      </label>
      <button className="button primary wide" type="submit">
        <Check size={17} /> Save check-in
      </button>
    </form>
  );
}

function SliderField({ label, value, onChange }) {
  return (
    <label className="field slider-field">
      <span>
        {label} <strong>{value}</strong>
      </span>
      <input min="1" max="10" type="range" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function QuickLogBar({ postState }) {
  return (
    <section className="quick-log">
      {quickRituals.slice(0, 3).map((ritual) => {
        const Icon = ritual.icon;
        return (
          <button
            key={ritual.title}
            type="button"
            onClick={() => postState(apiRoutes.ritualLog, ritual, (current) => createRitualLog(current, ritual))}
          >
            <Icon size={18} />
            <span>{ritual.title}</span>
          </button>
        );
      })}
    </section>
  );
}

function RitualCard({ ritual, onLog }) {
  const Icon = ritual.icon;

  return (
    <article className="ritual-card">
      <div className="ritual-icon">
        <Icon size={23} />
      </div>
      <p className="eyebrow">{ritual.type}</p>
      <h3>{ritual.title}</h3>
      <p>{ritual.copy}</p>
      <button className="button ghost" type="button" onClick={onLog}>
        <Plus size={17} /> Log {ritual.duration} min
      </button>
    </article>
  );
}

function MetricCard({ icon: Icon, label, value, detail }) {
  return (
    <article className="metric-card">
      <Icon size={20} />
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

function DecisionCard({ icon: Icon, label, title, copy }) {
  return (
    <article className="plan-card decision-card">
      <div className="plan-card-top">
        <Icon size={21} />
        <span>{label}</span>
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

function PageIntro({ eyebrow, title, copy }) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}

function PrivacyNotice({ plan }) {
  return (
    <section className="safety-notice">
      <Lock size={20} />
      <p>
        {plan.source === 'openai' ? 'Personalized from your saved recovery context.' : 'Built from your check-in and ritual history.'} Route details,
        private notes, identity, and connection credentials stay out of the coaching plan.
      </p>
    </section>
  );
}

function SafetyNotice() {
  return (
    <section className="safety-notice">
      <CircleAlert size={20} />
      <p>
        DRIFT Coach is informational performance guidance. It is not medical advice, diagnosis, injury treatment,
        or a replacement for a qualified coach.
      </p>
    </section>
  );
}

function relativeDate(date) {
  const days = Math.floor((Date.now() - new Date(date).getTime()) / (24 * 60 * 60 * 1000));
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  return `${days} days ago`;
}

function iconForKind(kind) {
  if (kind === 'Run' || kind === 'TrailRun') return <Activity size={18} />;
  if (kind === 'Breathe') return <Wind size={18} />;
  return <Waves size={18} />;
}

async function apiRequest(path, options = {}, csrfToken = null) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method || 'GET',
    headers: {
      'content-type': 'application/json',
      ...(csrfToken ? { 'x-csrftoken': csrfToken, 'x-drift-csrf': csrfToken } : {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    credentials: API_BASE ? 'omit' : 'include',
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export default App;
