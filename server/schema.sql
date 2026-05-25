create table if not exists users (
  id uuid primary key,
  email text unique,
  name text not null,
  timezone text not null,
  created_at timestamptz not null default now()
);

create table if not exists strava_accounts (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  athlete_id text not null,
  athlete_name text,
  scope text not null,
  encrypted_access_token text not null,
  encrypted_refresh_token text not null,
  expires_at timestamptz not null,
  last_sync_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists activities (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  strava_activity_id text unique,
  sport text not null,
  name text not null,
  started_at timestamptz not null,
  distance_km numeric(7, 2),
  moving_minutes integer,
  elevation_m integer,
  relative_effort integer,
  raw_payload jsonb,
  created_at timestamptz not null default now()
);

create table if not exists check_ins (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  energy integer not null check (energy between 1 and 10),
  soreness integer not null check (soreness between 1 and 10),
  stress integer not null check (stress between 1 and 10),
  sleep text not null check (sleep in ('poor', 'okay', 'good', 'great')),
  note text,
  created_at timestamptz not null default now()
);

create table if not exists ritual_logs (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  type text not null check (type in ('Run', 'Breathe', 'Rest')),
  title text not null,
  duration integer not null,
  private boolean not null default true,
  exported_to_strava boolean not null default false,
  exported_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists coach_decisions (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  decision text not null check (decision in ('build', 'control', 'downshift', 'rest')),
  sanitized_context jsonb not null,
  output jsonb not null,
  source text not null check (source in ('openai', 'offline')),
  created_at timestamptz not null default now()
);

create table if not exists privacy_events (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  event text not null,
  source text not null,
  fields_sent text[] not null,
  fields_not_sent text[] not null,
  created_at timestamptz not null default now()
);

create table if not exists product_recommendations (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  product_name text not null,
  context text not null,
  created_at timestamptz not null default now()
);
