import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Brain,
  CalendarDays,
  Check,
  CircleAlert,
  Download,
  Flame,
  Gauge,
  Home,
  LogIn,
  Lock,
  Moon,
  Pause,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Route as RouteIcon,
  ShieldCheck,
  Smartphone,
  Timer,
  TrendingUp,
  UserPlus,
  UserRound,
  Waves,
  Wind,
  X,
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
  defaultCheckIn,
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
const loginUrl = '/app/login?redirect=/app/today';
const signupUrl = '/app/signup?redirect=/app/today';

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

const accountBenefits = [
  {
    icon: Check,
    title: 'Saved history',
    copy: 'Keep check-ins, rituals, and streaks across devices.',
  },
  {
    icon: Activity,
    title: 'Strava context',
    copy: 'Use weekly volume, effort, and last-session timing for sharper rest recommendations.',
  },
  {
    icon: CalendarDays,
    title: 'Programs',
    copy: 'Carry your 7-Day Reset, stretching, meditation, and Sauna Downshift paths.',
  },
  {
    icon: Lock,
    title: 'Private notes',
    copy: 'Keep personal notes inside your DRIFT account.',
  },
];

const quickRituals = [
  {
    type: 'Rest',
    title: 'Post-Run Stretch',
    duration: 10,
    icon: Waves,
    copy: 'A guided mobility reset for calves, hips, hamstrings, and low back after logged volume.',
  },
  {
    type: 'Rest',
    title: 'Guided Downshift Meditation',
    duration: 10,
    icon: Moon,
    copy: 'A quiet body scan for athletes carrying training load, work stress, or late-day stimulation.',
  },
  {
    type: 'Rest',
    title: 'Sauna Downshift',
    duration: 22,
    icon: Flame,
    copy: 'One controlled heat round, cool rinse, and a quiet landing.',
  },
  {
    type: 'Breathe',
    title: 'Nasal Reset',
    duration: 6,
    icon: Wind,
    copy: 'Slow nasal control for work blocks, evening resets, or post-run downshift.',
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
        return { state: next, decision: buildTodayPlan(next) };
      } else {
        setStatus({ api: 'error', coach: status.coach });
        throw new Error('DRIFT could not save this yet. Try again.');
      }
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
          <Route path="/download" element={<Navigate to={appPath('/install')} replace />} />
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
          <Route path="/app/library" element={<LibraryPage protocols={catalog.protocols} products={catalog.products} postState={postState} />} />
          <Route path="/app/protocols" element={<ProtocolsPage protocols={catalog.protocols} postState={postState} />} />
          <Route
            path="/app/programs"
            element={<ProgramsPage state={state} programs={catalog.programs} protocols={catalog.protocols} products={catalog.products} />}
          />
          <Route
            path="/app/profile"
            element={<SettingsPage state={state} postState={postState} />}
          />
          <Route path="/app/install" element={<InstallPage state={state} />} />
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
    ? 'Strava ready'
    : state.profile?.portalAccount
      ? 'Account saved'
      : status.api === 'live'
        ? 'Start free'
        : 'Start free';

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
  const stravaConfigured = Boolean(state.strava.oauthConfigured);
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
          <p className="eyebrow">Rest recommendations from Strava</p>
          <h1>{decisionLabel}: recover from the work you logged.</h1>
          <p>DRIFT syncs activity volume from Strava and recommends the right rest session: sauna, guided meditation, stretching, or quiet recovery.</p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={generateDecision}>
              <Brain size={17} /> Get rest recommendation
            </button>
            <Link to={appPath('/log')} className="button ghost">
              <Plus size={17} /> Check in
            </Link>
          </div>
        </div>
      </section>

      <StartFlow hasAccount={hasAccount} hasStrava={hasStrava} stravaConfigured={stravaConfigured} />

      <HowItWorks connected={hasStrava} />

      {!hasAccount && <AccountPrompt />}

      {!hasStrava && <EmptyStravaState stravaConfigured={stravaConfigured} />}

      <section className="decision-band">
        <MetricCard icon={Gauge} label="Recommendation" value={decisionLabel} detail={`${plan.readiness} readiness`} />
        <MetricCard icon={TrendingUp} label="7-day volume" value={`${context.weekly_run_km} km`} detail={`${context.weekly_effort} effort`} />
        <MetricCard icon={Wind} label="Guided" value={context.breath_logs_7d} detail="breath logs" />
        <MetricCard icon={Flame} label="Heat" value={context.sauna_logs_7d} detail="sauna logs" />
      </section>

      <section className="section-block">
        <div className="section-title">
          <p className="eyebrow">{status.coach === 'openai' ? 'Personalized rest pick' : 'Daily recommendation'}</p>
          <h2>Today’s rest recommendation.</h2>
        </div>
        <div className="decision-grid">
          <DecisionCard icon={RouteIcon} label="Activity Volume" title={decisionLabel} copy={plan.run_adjustment} />
          <DecisionCard icon={Wind} label="Guided Session" title="Meditate" copy={plan.breath_protocol} />
          <DecisionCard icon={Waves} label="Rest Protocol" title="Recover" copy={plan.rest_protocol} />
          <DecisionCard icon={Brain} label="Why this plan" title="Why" copy={plan.why} />
        </div>
      </section>

      <section className="split-grid">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Activity Volume</p>
              <h3>{hasStrava ? 'Strava volume is shaping today' : 'Manual mode is enough to start'}</h3>
            </div>
            <RefreshCw size={18} />
          </div>
          <div className="run-stats">
            <span>{context.weekly_run_km} km / 7d</span>
            <span>{context.weekly_effort} effort</span>
            <span>{context.last_run_type}</span>
          </div>
          <p>
            DRIFT reads weekly volume, effort, last-activity timing, and your check-in. Route names and maps are not
            needed for rest recommendations.
          </p>
        </div>
        <div className="panel product-panel">
          <img src={assets.sauna} alt="DRIFT sauna ritual kit" />
          <div>
            <p className="eyebrow">Contextual Tool</p>
            <h3>{recommendedProduct?.name || plan.commerce_hint}</h3>
            <p>One useful tool for today’s ritual. The plan comes first; gear stays optional.</p>
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
    try {
      await postState(apiRoutes.checkIn, input, (current) => {
        const withCheckIn = createCheckIn(current, input);
        const context = buildSanitizedCoachContext(withCheckIn);
        return recordCoachDecision(withCheckIn, buildDeterministicDecision(context, 'offline'), context, 'offline');
      });
      setSavedNotice({ type: 'success', message: 'Check-in saved. Your next recommendation will use it.' });
    } catch (error) {
      setSavedNotice({ type: 'error', message: error.message || 'DRIFT could not save this yet. Try again.' });
    }
  };

  const logRitual = async (ritual) => {
    try {
      await postState(apiRoutes.ritualLog, ritual, (current) => createRitualLog(current, ritual));
      setSavedNotice({ type: 'success', message: `${ritual.title} logged. Streak updated.` });
    } catch (error) {
      setSavedNotice({ type: 'error', message: error.message || 'DRIFT could not log this yet. Try again.' });
    }
  };

  return (
    <div className="screen">
      <PageIntro
        eyebrow="Check body state"
        title="Tell DRIFT what Strava cannot see."
        copy="Energy, soreness, stress, and sleep quality tune the rest recommendation. Private notes stay in your DRIFT account."
      />
      {savedNotice && (
        <section className={savedNotice.type === 'error' ? 'error-notice' : 'success-notice'} role="status">
          {savedNotice.type === 'error' ? <CircleAlert size={20} /> : <Check size={20} />}
          <p>{savedNotice.message}</p>
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
          <p className="eyebrow">Current recommendation</p>
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
        eyebrow="Coach"
        title="Tune today’s rest recommendation in one tap."
        copy="Tell DRIFT what changed and it will adjust the suggested sauna, meditation, stretching, or quiet rest session."
      />
      <section className="coach-decision-panel">
        <div>
            <p className="eyebrow">Today’s recommendation</p>
          <h2>{decisionLabels[plan.decision]}</h2>
          <p>{plan.primary_action}</p>
        </div>
        <div className="confidence-card">
          <span>Signal</span>
          <strong>{plan.confidence}</strong>
          <small>{plan.source === 'openai' ? 'Personalized' : 'Standard guide'}</small>
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
        <DecisionCard icon={RouteIcon} label="Activity" title="Volume Context" copy={plan.run_adjustment} />
        <DecisionCard icon={Wind} label="Guided" title="Meditation" copy={plan.breath_protocol} />
        <DecisionCard icon={Waves} label="Rest" title="Protocol" copy={plan.rest_protocol} />
        <DecisionCard icon={Brain} label="Why" title="Reasoning" copy={lastAdjustment?.decision?.why || plan.why} />
      </section>
      <section className="privacy-panel">
        <div>
          <p className="eyebrow">Private by default</p>
          <h3>Your plan uses signals, not secrets.</h3>
          <p>Activity volume, check-in scores, and ritual history shape the recommendation. Personal notes, route titles, and maps stay out.</p>
        </div>
        <div className="privacy-list">
          <span>Activity volume</span>
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
        copy="Activities come from Strava. Sauna, meditation, stretching, and breathwork are DRIFT logs, private unless you choose to export them."
      />
      <section className="panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Activity Volume</p>
            <h3>{state.activities.length ? 'Strava volume context' : 'No Strava activities yet'}</h3>
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

function LibraryPage({ protocols: protocolCatalog, products, postState }) {
  const [filter, setFilter] = useState('All');
  const [activeProtocol, setActiveProtocol] = useState(null);
  const [notice, setNotice] = useState(null);
  const visibleProtocols =
    filter === 'All' ? protocolCatalog : protocolCatalog.filter((protocol) => protocol.pillar === filter);
  const completeProtocol = async (protocol) => {
    const ritual = protocolToRitual(protocol);
    try {
      await postState(apiRoutes.ritualLog, ritual, (current) => createRitualLog(current, ritual));
      setNotice({ type: 'success', message: `${protocol.title} complete. Your ritual history is updated.` });
      setActiveProtocol(null);
    } catch (error) {
      setNotice({ type: 'error', message: error.message || 'DRIFT could not save this session yet.' });
    }
  };

  return (
    <div className="screen">
      <PageIntro
        eyebrow="Library"
        title="Guided rest sessions for the work Strava sees."
        copy="Browse sauna, guided meditation, stretching, breath, and quiet rest sessions with clear timing and simple steps."
      />
      <section className="filter-tabs" aria-label="Library filters">
        {['All', 'Run', 'Breathe', 'Rest'].map((item) => (
          <button key={item} type="button" className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </section>
      {notice && (
        <section className={notice.type === 'error' ? 'error-notice' : 'success-notice'} role="status">
          {notice.type === 'error' ? <CircleAlert size={20} /> : <Check size={20} />}
          <p>{notice.message}</p>
        </section>
      )}
      <section className="protocol-grid">
        {visibleProtocols.map((protocol) => (
          <GuidedProtocolCard key={protocol.id} protocol={protocol} products={products} onStart={() => setActiveProtocol(protocol)} />
        ))}
      </section>
      {activeProtocol && (
        <ProtocolSessionModal
          protocol={activeProtocol}
          onClose={() => setActiveProtocol(null)}
          onComplete={() => completeProtocol(activeProtocol)}
        />
      )}
      <SafetyNotice />
    </div>
  );
}

function ProgramsPage({ state, programs: programCatalog, protocols: protocolCatalog, products }) {
  return (
    <div className="screen">
      <PageIntro
        eyebrow="Programs"
        title="Guided paths for rest after training."
        copy="Programs turn single rest sessions into repeatable weekly systems: stretching, meditation, sauna, and lower-input days."
      />
      <section className="program-grid">
        {programCatalog.map((program) => {
          const linkedProduct = products.find((product) => (product.programIds || []).includes(program.id));
          const commerceUrl = program.commerceUrl || (program.id === 'seven-day-reset' ? null : linkedProduct?.url);
          const status = programAccessStatus(state, program, linkedProduct, commerceUrl);
          return (
            <article className="program-card" key={program.id}>
              <div className="program-card-head">
                <div className="protocol-top">
                  <CalendarDays size={22} />
                  <span>{program.pillar}</span>
                </div>
                <span className={`program-status is-${status.key}`}>
                  {status.key === 'unlocked' ? <Check size={14} /> : status.key === 'preview' ? <Lock size={14} /> : <ShieldCheck size={14} />}
                  {status.label}
                </span>
              </div>
              <h2>{program.title}</h2>
              <p>{program.copy}</p>
              <div className="protocol-meta">
                <span>
                  <Timer size={15} /> {program.durationDays} days
                </span>
                <span>
                  {status.key === 'unlocked' ? <Check size={15} /> : <Lock size={15} />} {status.detail}
                </span>
              </div>
              <div className="program-strip">
                {(program.protocolIds || []).slice(0, 3).map((id) => {
                  const protocol = protocolCatalog.find((item) => item.id === id);
                  return <span key={id}>{protocol?.title || id}</span>;
                })}
              </div>
              <div className="button-row">
                <Link to={appPath('/log')} className="button primary">
                  <Timer size={17} /> {status.key === 'preview' ? 'Start preview' : 'Start program'}
                </Link>
                {commerceUrl && status.key !== 'unlocked' && (
                  <a className="button ghost" href={commerceUrl}>
                    <ArrowRight size={17} /> Unlock with kit
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

function programAccessStatus(state, program, linkedProduct, commerceUrl) {
  const entitlements = Array.isArray(state.entitlements) ? state.entitlements : [];
  const isUnlocked = entitlements.some((entitlement) => {
    if (entitlement.state && entitlement.state !== 'active') return false;
    return (
      (program.productTemplateId && entitlement.productTemplateId === program.productTemplateId) ||
      (linkedProduct?.id && entitlement.productTemplateId === linkedProduct.id) ||
      (Array.isArray(entitlement.programIds) && entitlement.programIds.includes(program.id))
    );
  });

  if (isUnlocked) {
    return { key: 'unlocked', label: 'Unlocked', detail: 'Full path is active' };
  }
  if (commerceUrl) {
    return { key: 'preview', label: 'Preview', detail: 'Linked kit unlocks full path' };
  }
  return { key: 'free', label: 'Free', detail: 'Full preview included' };
}

function ProtocolsPage({ protocols: protocolCatalog = protocols, postState }) {
  const [activeProtocol, setActiveProtocol] = useState(null);
  const [notice, setNotice] = useState(null);
  const completeProtocol = async (protocol) => {
    const ritual = protocolToRitual(protocol);
    try {
      await postState(apiRoutes.ritualLog, ritual, (current) => createRitualLog(current, ritual));
      setNotice({ type: 'success', message: `${protocol.title} complete. Your ritual history is updated.` });
      setActiveProtocol(null);
    } catch (error) {
      setNotice({ type: 'error', message: error.message || 'DRIFT could not save this session yet.' });
    }
  };

  return (
    <div className="screen">
      <PageIntro
        eyebrow="Protocols"
        title="Rest protocols matched to activity volume."
        copy="After Strava logs the work, DRIFT helps choose the recovery input: stretch, meditate, sauna, breathe, or keep the day quiet."
      />
      {notice && (
        <section className={notice.type === 'error' ? 'error-notice' : 'success-notice'} role="status">
          {notice.type === 'error' ? <CircleAlert size={20} /> : <Check size={20} />}
          <p>{notice.message}</p>
        </section>
      )}
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
                {(protocol.steps || []).map((step, index) => (
                  <li key={`${protocol.id}-preview-${index}`}>{step}</li>
                ))}
              </ol>
              <button className="button primary" type="button" onClick={() => setActiveProtocol(protocol)}>
                <Play size={17} /> Start guided session
              </button>
            </article>
          );
        })}
      </section>
      {activeProtocol && (
        <ProtocolSessionModal
          protocol={activeProtocol}
          onClose={() => setActiveProtocol(null)}
          onComplete={() => completeProtocol(activeProtocol)}
        />
      )}
      <SafetyNotice />
    </div>
  );
}

function GuidedProtocolCard({ protocol, products, onStart }) {
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
          <ShieldCheck size={15} /> {protocol.audioReady ? 'Guided' : 'Timed'}
        </span>
      </div>
      <ol>
        {(protocol.steps || []).map((step, index) => (
          <li key={`${protocol.id}-card-${index}`}>{step}</li>
        ))}
      </ol>
      <div className="button-row">
        <button className="button primary" type="button" onClick={onStart}>
          <Play size={17} /> Start guided session
        </button>
        {linkedProduct?.url && (
          <a href={linkedProduct.url} className="button ghost">
            <ArrowRight size={17} /> {linkedProduct.name}
          </a>
        )}
      </div>
    </article>
  );
}

function ProtocolSessionModal({ protocol, onClose, onComplete }) {
  const totalSeconds = Math.max(60, Number(protocol.durationMinutes || Number.parseInt(protocol.duration, 10) || 8) * 60);
  const steps = Array.isArray(protocol.steps) && protocol.steps.length ? protocol.steps : [protocol.copy];
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const remaining = Math.max(0, totalSeconds - elapsed);
  const progress = Math.min(100, Math.round((elapsed / totalSeconds) * 100));
  const activeStep = Math.min(steps.length - 1, Math.floor((elapsed / totalSeconds) * steps.length));

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (!isRunning) return undefined;
    const timer = window.setInterval(() => {
      setElapsed((current) => Math.min(totalSeconds, current + 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isRunning, totalSeconds]);

  useEffect(() => {
    if (elapsed >= totalSeconds && isRunning) setIsRunning(false);
  }, [elapsed, isRunning, totalSeconds]);

  const completeSession = async () => {
    setIsCompleting(true);
    try {
      await onComplete();
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <div className="session-backdrop" role="dialog" aria-modal="true" aria-labelledby="session-title">
      <section className="session-modal">
        <button className="session-close" type="button" aria-label="Close session" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="session-visual">
          <p className="eyebrow">{protocol.pillar}</p>
          <h2 id="session-title">{protocol.title}</h2>
          <p>{protocol.copy}</p>
          <div className="session-timer" style={{ '--progress': `${progress}%` }}>
            <div>
              <span>{formatDuration(remaining)}</span>
              <small>{elapsed >= totalSeconds ? 'Complete' : 'Remaining'}</small>
            </div>
          </div>
          <div className="session-controls">
            <button className="button primary" type="button" onClick={() => setIsRunning((running) => !running)}>
              {isRunning ? <Pause size={17} /> : <Play size={17} />} {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              className="button ghost"
              type="button"
              onClick={() => {
                setElapsed(0);
                setIsRunning(false);
              }}
            >
              <RotateCcw size={17} /> Reset
            </button>
          </div>
        </div>
        <div className="session-steps">
          <div className="session-steps-head">
            <span>{protocol.duration}</span>
            <span>{protocol.intensity}</span>
          </div>
          <ol>
            {steps.map((step, index) => (
              <li
                key={`${protocol.id}-session-${index}`}
                className={index === activeStep ? 'is-active' : index < activeStep ? 'is-complete' : ''}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
          <button className="button primary wide" type="button" disabled={isCompleting} onClick={completeSession}>
            <Check size={17} /> {isCompleting ? 'Saving session' : 'Complete session'}
          </button>
        </div>
      </section>
    </div>
  );
}

function protocolToRitual(protocol) {
  const duration = Math.max(1, Number(protocol.durationMinutes || Number.parseInt(protocol.duration, 10) || 8));
  return {
    protocolId: protocol.id,
    type: protocol.pillar === 'Breathe' ? 'Breathe' : protocol.pillar === 'Run' ? 'Run' : 'Rest',
    title: protocol.title,
    duration,
    private: true,
  };
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${String(remainder).padStart(2, '0')}`;
}

function SettingsPage({ state, postState }) {
  const oauthUrl = buildStravaOAuthUrl();
  const params = new URLSearchParams(window.location.search);
  const stravaStatus = params.get('strava');
  const [notice, setNotice] = useState(null);
  const stravaConfigured = Boolean(state.strava.oauthConfigured);
  const stravaMessage = {
    missing_config: 'Strava import is not enabled for this DRIFT instance yet. Manual check-ins and rest recommendations still work today.',
    missing_code: 'Strava did not finish connecting. Try again from this screen.',
    state_error: 'That Strava attempt expired. Start the connection again from here.',
    denied: 'Strava connection was cancelled. Manual check-ins still work.',
    read_scope_required: 'DRIFT needs permission to read activity summaries so it can understand volume and effort.',
    connected_sync_failed: 'Strava connected, but the first sync did not finish. Tap Sync Strava to try again.',
  }[stravaStatus];

  const connect = async () => {
    if (state.strava.connected) {
      await postState(apiRoutes.stravaSync, {}, (current) => current);
      setNotice('Strava synced. Your next plan will use the latest run context.');
      return;
    }
    if (!stravaConfigured) {
      setNotice('Manual mode is ready. Strava import will appear here once Strava access is enabled for DRIFT.');
      return;
    }
    if (oauthUrl) window.location.href = `${API_BASE}${oauthUrl}`;
  };

  return (
    <div className="screen">
      <PageIntro
        eyebrow="Account"
        title="Your free home for rest recommendations."
        copy="Create an account to save training context, connect Strava when enabled, keep streaks, and unlock programs from DRIFT kits."
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
              <p className="eyebrow">Strava</p>
              <h3>
                {state.strava.connected
                  ? 'Connected for activity volume'
                  : stravaConfigured
                    ? 'Add your activity volume'
                    : 'Manual mode now. Strava next.'}
              </h3>
            </div>
            <Activity size={22} />
          </div>
          <p>
            Connect Strava so DRIFT can understand weekly volume, recent effort, and when you last trained. Ritual export
            is always optional.
          </p>
          <div className="button-row">
            {state.strava.connected || stravaConfigured ? (
              <button className="button primary" type="button" onClick={connect}>
                <RefreshCw size={17} /> {state.strava.connected ? 'Sync Strava' : 'Connect Strava'}
              </button>
            ) : (
              <>
                <Link className="button primary" to={appPath('/log')}>
                  <Plus size={17} /> Check in manually
                </Link>
                <button className="button ghost" type="button" onClick={connect}>
                  <Activity size={17} /> Strava import pending
                </button>
              </>
            )}
          </div>
        </article>
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Install</p>
              <h3>Use it like a daily app.</h3>
            </div>
            <Smartphone size={22} />
          </div>
          <p>
            Add DRIFT to your phone and open it after training: check in, get the decision, complete the ritual.
          </p>
          <Link to={appPath('/install')} className="button ghost">
            <Download size={17} /> Install DRIFT
          </Link>
        </article>
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Privacy</p>
              <h3>Built for personal training data.</h3>
            </div>
            <Lock size={22} />
          </div>
          <p>Your plan uses training summaries and check-in scores. Personal notes, maps, and route titles stay out.</p>
          <Link to={appPath('/privacy')} className="button ghost">
            <ShieldCheck size={17} /> Privacy details
          </Link>
        </article>
      </section>
    </div>
  );
}

function InstallPage({ state }) {
  const iosUrl = state.mobile?.iosAppStoreUrl;
  const androidUrl = state.mobile?.androidPlayStoreUrl;
  const hasStoreLinks = Boolean(iosUrl || androidUrl);

  return (
    <div className="screen install-screen">
      <section className="hero-card install-hero">
        <img src={assets.runner} alt="" />
        <div className="hero-scrim" />
        <div className="hero-copy">
          <p className="eyebrow">Install DRIFT</p>
          <h1>Install DRIFT on your phone.</h1>
          <p>Open DRIFT after training: check in, get the day’s rest recommendation, and log the protocol before the day drifts away.</p>
          <div className="hero-actions">
            <Link to={appPath('/today')} className="button primary">
              <ArrowRight size={17} /> Open DRIFT
            </Link>
            <a className="button ghost" href="/download">
              <Download size={17} /> Download link
            </a>
          </div>
        </div>
      </section>

      <section className="install-grid">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Today</p>
              <h3>Install as a web app.</h3>
            </div>
            <Smartphone size={22} />
          </div>
          <p>On iPhone, open this page in Safari, tap Share, then Add to Home Screen. On Android, use the browser Install App prompt.</p>
        </article>
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Native App</p>
              <h3>{hasStoreLinks ? 'Store links are ready.' : 'App Store release path is prepared.'}</h3>
            </div>
            <Download size={22} />
          </div>
          <p>
            DRIFT is now structured for an iOS and Android wrapper. Store buttons will point to the native app as soon as the listings are live.
          </p>
          <div className="button-row">
            {iosUrl && (
              <a className="button primary" href={iosUrl}>
                App Store
              </a>
            )}
            {androidUrl && (
              <a className="button primary" href={androidUrl}>
                Google Play
              </a>
            )}
            {!hasStoreLinks && (
              <Link className="button ghost" to={appPath('/today')}>
                Start free
              </Link>
            )}
          </div>
        </article>
      </section>

      <section className="how-grid" aria-label="Install benefits">
        {[
          ['Daily rest pick', 'Sauna, meditation, stretching, or quiet rest in under 30 seconds.'],
          ['Saved rhythm', 'Check-ins, rituals, streaks, and programs stay with your account.'],
          ['Strava context', 'Activity volume sharpens the recommendation when you connect it.'],
          ['Shop unlocks', 'DRIFT kits can unlock related guided programs.'],
        ].map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

function PrivacyPage({ privacy }) {
  return (
    <div className="screen">
      <PageIntro
        eyebrow="Privacy"
        title="Your routes and notes stay yours."
        copy="DRIFT can recommend rest protocols from summary signals without reading maps, route titles, or personal notes."
      />
      <section className="privacy-panel">
        <div>
          <p className="eyebrow">Used for your plan</p>
          <h3>The signals that matter after training.</h3>
          <p>Activity volume, last-session timing, check-in scores, ritual streaks, and selected adjustment buttons shape the daily recommendation.</p>
        </div>
        <div className="privacy-list">
          <span>Weekly activity volume</span>
          <span>Energy / soreness / stress / sleep</span>
          <span>Stretching, meditation, and sauna logs</span>
          <span>Selected adjustment buttons</span>
        </div>
      </section>
      <section className="privacy-panel">
        <div>
          <p className="eyebrow">Kept out</p>
          <h3>Maps, route titles, notes, and identity.</h3>
          <p>Your personal notes, route details, account identity, and Strava access details are not used to create the plan.</p>
        </div>
        <div className="privacy-list">
          <span>Route names and maps</span>
          <span>Private check-in notes</span>
          <span>Name and email</span>
          <span>Strava access details</span>
        </div>
      </section>
      <section className="safety-notice">
        <ShieldCheck size={20} />
        <p>
          DRIFT is designed to make the plan useful without turning personal training data into the product.
        </p>
      </section>
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
    ['Import activity volume', connected ? 'Strava is connected.' : 'Connect Strava or use a manual check-in.'],
    ['Check body state', 'Energy, soreness, stress, sleep.'],
    ['Get rest session', 'Sauna, meditation, stretching, or quiet rest.'],
    ['Log the protocol', 'Build a history of what helps you recover.'],
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

function StartFlow({ hasAccount, hasStrava, stravaConfigured }) {
  const steps = [
    {
      icon: UserPlus,
      title: hasAccount ? 'Account saved' : 'Create a free account',
      copy: hasAccount ? 'Your check-ins, rituals, and program access are saved.' : 'Save history, streaks, Strava, and program access.',
      action: hasAccount ? null : { label: 'Create account', href: signupUrl },
    },
    {
      icon: Activity,
      title: hasStrava ? 'Strava connected' : stravaConfigured ? 'Connect Strava' : 'Start manually',
      copy: hasStrava
        ? 'Activity volume is already shaping today’s rest recommendation.'
        : stravaConfigured
          ? 'Add volume, effort, and last-activity timing when you are ready.'
          : 'Manual check-ins work today. Strava import appears here as soon as it is enabled.',
      action: hasStrava ? null : { label: stravaConfigured ? 'Connect' : 'Check in', to: stravaConfigured ? appPath('/profile') : appPath('/log') },
    },
    {
      icon: Plus,
      title: 'Check in',
      copy: 'Energy, soreness, stress, and sleep turn the plan into today’s plan.',
      action: { label: 'Check in', to: appPath('/log') },
    },
  ];

  return (
    <section className="start-flow" aria-label="Start DRIFT">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <article key={step.title}>
            <Icon size={20} />
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
            {step.action?.href && <a href={step.action.href}>{step.action.label}</a>}
            {step.action?.to && <Link to={step.action.to}>{step.action.label}</Link>}
          </article>
        );
      })}
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
        <h2>Make DRIFT yours before the streaks start.</h2>
        <p>
          A free account turns the app from a one-day guide into your saved recovery system.
        </p>
        <AccountBenefitList compact />
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
          <h3>{hasAccount ? 'Your DRIFT history is saved.' : 'Create once. Train everywhere.'}</h3>
        </div>
        <UserRound size={22} />
      </div>
      <p>
        {hasAccount
          ? 'Your check-ins, rituals, Strava connection, and program access are tied to this account.'
          : 'Start free, save your recovery rhythm, and keep every rest recommendation in one place.'}
      </p>
      <AccountBenefitList />
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

function AccountBenefitList({ compact = false }) {
  return (
    <div className={compact ? 'benefit-list is-compact' : 'benefit-list'}>
      {accountBenefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div key={benefit.title}>
            <Icon size={16} />
            <span>{benefit.title}</span>
            {!compact && <small>{benefit.copy}</small>}
          </div>
        );
      })}
    </div>
  );
}

function EmptyStravaState({ stravaConfigured }) {
  return (
    <section className="empty-state">
      <div>
        <p className="eyebrow">Start without Strava</p>
        <h2>{stravaConfigured ? 'Use DRIFT today. Add Strava when ready.' : 'Use DRIFT today. Strava import is the next layer.'}</h2>
        <p>
          A manual check-in is enough to get a rest recommendation. Strava adds activity volume, effort, and last-session timing when connected.
        </p>
      </div>
      <Link to={stravaConfigured ? appPath('/profile') : appPath('/log')} className="button primary">
        {stravaConfigured ? <Activity size={17} /> : <Plus size={17} />}
        {stravaConfigured ? 'Connect Strava' : 'Check in manually'}
      </Link>
    </section>
  );
}

function CheckInForm({ initial, onSubmit }) {
  const safeInitial = initial || defaultCheckIn;
  const [form, setForm] = useState({
    energy: safeInitial.energy ?? defaultCheckIn.energy,
    soreness: safeInitial.soreness ?? defaultCheckIn.soreness,
    sleep: safeInitial.sleep ?? defaultCheckIn.sleep,
    stress: safeInitial.stress ?? defaultCheckIn.stress,
    note: safeInitial.note ?? defaultCheckIn.note,
  });

  useEffect(() => {
    const next = initial || defaultCheckIn;
    setForm({
      energy: next.energy ?? defaultCheckIn.energy,
      soreness: next.soreness ?? defaultCheckIn.soreness,
      sleep: next.sleep ?? defaultCheckIn.sleep,
      stress: next.stress ?? defaultCheckIn.stress,
      note: next.note ?? defaultCheckIn.note,
    });
  }, [initial?.id]);

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
  const [notice, setNotice] = useState(null);

  const logQuickRitual = async (ritual) => {
    try {
      await postState(apiRoutes.ritualLog, ritual, (current) => createRitualLog(current, ritual));
      setNotice({ type: 'success', message: `${ritual.title} logged.` });
    } catch (error) {
      setNotice({ type: 'error', message: error.message || 'DRIFT could not log this yet. Try again.' });
    }
  };

  return (
    <>
      {notice && (
        <section className={notice.type === 'error' ? 'quick-notice is-error' : 'quick-notice'} role="status">
          {notice.type === 'error' ? <CircleAlert size={18} /> : <Check size={18} />}
          <span>{notice.message}</span>
        </section>
      )}
      <section className="quick-log">
        {quickRituals.slice(0, 3).map((ritual) => {
          const Icon = ritual.icon;
          return (
            <button key={ritual.title} type="button" onClick={() => logQuickRitual(ritual)}>
              <Icon size={18} />
              <span>{ritual.title}</span>
            </button>
          );
        })}
      </section>
    </>
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
        private notes, identity, and account access details stay out of the coaching plan.
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
