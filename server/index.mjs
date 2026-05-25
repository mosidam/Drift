import { createServer } from 'node:http';
import { randomBytes, createCipheriv, createDecipheriv } from 'node:crypto';
import {
  buildDeterministicDecision,
  buildPrivacySummary,
  buildSanitizedCoachContext,
  buildTodayPlan,
  connectDemoStrava,
  createCheckIn,
  createRitualLog,
  enableWriteScope,
  initialCoachState,
  markRitualExported,
  normalizeState,
  recordCoachDecision,
  validateCoachDecision,
} from '../src/services/driftApi.js';

const port = Number(process.env.PORT || 8787);
const openaiModel = process.env.OPENAI_MODEL || 'gpt-5.4-mini';
const openaiApiKey = process.env.OPENAI_API_KEY;
const encryptionKey = Buffer.from(
  process.env.DRIFT_TOKEN_KEY || 'local-dev-token-key-must-be-32b!',
).subarray(0, 32);

let state = normalizeState(initialCoachState);
let encryptedDemoToken = encryptToken('demo-strava-refresh-token');

const responseSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'decision',
    'primary_action',
    'run_adjustment',
    'breath_protocol',
    'rest_protocol',
    'why',
    'confidence',
    'safety_note',
    'commerce_hint',
    'recommended_protocol_ids',
    'recommended_product_template_id',
  ],
  properties: {
    decision: { type: 'string', enum: ['build', 'control', 'downshift', 'rest'] },
    primary_action: { type: 'string' },
    run_adjustment: { type: 'string' },
    breath_protocol: { type: 'string' },
    rest_protocol: { type: 'string' },
    why: { type: 'string' },
    confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
    safety_note: { type: 'string' },
    commerce_hint: { type: 'string' },
    recommended_protocol_ids: { type: 'array', items: { type: 'string' } },
    recommended_product_template_id: { type: ['integer', 'null'] },
  },
};

const server = createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);

  if (request.method === 'OPTIONS') {
    return send(response, 204, null);
  }

  try {
    if (request.method === 'GET' && (url.pathname === '/api/today' || url.pathname === '/drift/api/bootstrap')) {
      return send(response, 200, {
        plan: buildTodayPlan(state),
        state: publicState(state),
        profile: {
          mode: state.profile?.mode || 'guest',
          portal_account: false,
          display_name: 'DRIFT Athlete',
        },
        protocols: state.protocols || [],
        programs: state.programs || [],
        products: state.products || [],
        entitlements: state.entitlements || [],
        privacy: buildPrivacySummary(state),
        csrfToken: 'local-dev-csrf',
      });
    }

    if (request.method === 'POST' && (url.pathname === '/api/check-ins' || url.pathname === '/drift/api/check-in')) {
      state = createCheckIn(state, await readJson(request));
      return send(response, 201, {
        plan: buildTodayPlan(state),
        state: publicState(state),
      });
    }

    if (request.method === 'POST' && (url.pathname === '/api/ritual-logs' || url.pathname === '/drift/api/ritual-log')) {
      state = createRitualLog(state, await readJson(request));
      return send(response, 201, {
        plan: buildTodayPlan(state),
        state: publicState(state),
      });
    }

    if (request.method === 'POST' && (url.pathname === '/api/coach/decision' || url.pathname === '/drift/api/coach/decision')) {
      const decisionPayload = await generateDecision([]);
      return send(response, 201, decisionPayload);
    }

    if (request.method === 'POST' && (url.pathname === '/api/coach/adjust' || url.pathname === '/drift/api/coach/adjust')) {
      const body = await readJson(request);
      const adjustment = body.adjustment || 'why';
      const decisionPayload = await generateDecision([adjustment], adjustment);
      return send(response, 201, decisionPayload);
    }

    if (request.method === 'GET' && (url.pathname === '/api/privacy/summary' || url.pathname === '/drift/api/privacy/summary')) {
      return send(response, 200, buildPrivacySummary(state));
    }

    if (request.method === 'POST' && url.pathname === '/api/coach/chat') {
      return send(response, 410, {
        error: 'Chat endpoint removed. Use /api/coach/decision or /api/coach/adjust.',
      });
    }

    if (request.method === 'GET' && (url.pathname === '/api/strava/connect' || url.pathname === '/drift/strava/connect')) {
      const clientId = process.env.STRAVA_CLIENT_ID;
      const redirectUri = process.env.STRAVA_REDIRECT_URI || `http://localhost:${port}/api/strava/callback`;

      if (!clientId) {
        state = connectDemoStrava(state);
        return send(response, 200, { mode: 'demo', state: publicState(state) });
      }

      const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        approval_prompt: 'auto',
        scope: 'activity:read,activity:read_all',
      });
      response.writeHead(302, { Location: `https://www.strava.com/oauth/authorize?${params.toString()}` });
      return response.end();
    }

    if (request.method === 'GET' && (url.pathname === '/api/strava/callback' || url.pathname === '/drift/strava/callback')) {
      const code = url.searchParams.get('code') || 'demo-code';
      encryptedDemoToken = encryptToken(`refresh-token-for-${code}`);
      state = connectDemoStrava(state);
      return send(response, 200, {
        connected: true,
        tokenStored: Boolean(encryptedDemoToken),
        state: publicState(state),
      });
    }

    if (request.method === 'POST' && (url.pathname === '/api/strava/webhook' || url.pathname === '/drift/strava/webhook')) {
      return send(response, 202, { accepted: true });
    }

    if (request.method === 'POST' && (url.pathname === '/api/strava/export-ritual' || url.pathname === '/drift/strava/export-ritual')) {
      const body = await readJson(request);
      state = enableWriteScope(state);
      state = markRitualExported(state, body.ritualId);
      return send(response, 200, { exported: true, state: publicState(state) });
    }

    return send(response, 404, { error: 'Not found' });
  } catch (error) {
    return send(response, 500, { error: error.message });
  }
});

server.listen(port, () => {
  console.log(`DRIFT Coach API listening on http://localhost:${port}`);
});

async function generateDecision(userConstraints = [], adjustment = null) {
  const context = buildSanitizedCoachContext(state, userConstraints);
  let decision = null;
  let source = 'offline';

  if (openaiApiKey) {
    try {
      decision = await generateOpenAIDecision(context);
      source = 'openai';
    } catch (error) {
      decision = buildDeterministicDecision(context, 'offline', adjustment);
      source = 'offline';
    }
  } else {
    decision = buildDeterministicDecision(context, 'offline', adjustment);
  }

  if (!validateCoachDecision(decision)) {
    decision = buildDeterministicDecision(context, 'offline', adjustment);
    source = 'offline';
  }

  state = recordCoachDecision(state, decision, context, source);
  return {
    decision: buildTodayPlan(state),
    context,
    privacy: buildPrivacySummary(state),
    state: publicState(state),
  };
}

async function generateOpenAIDecision(context) {
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${openaiApiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: openaiModel,
      store: false,
      input: [
        {
          role: 'system',
          content:
            'You are DRIFT Recovery OS. Return only a conservative JSON recovery decision for a runner. Do not give medical advice, diagnosis, or injury treatment. Use only the provided aggregate context.',
        },
        {
          role: 'user',
          content: JSON.stringify(context),
        },
      ],
      text: {
        format: {
          type: 'json_schema',
          name: 'drift_recovery_decision',
          strict: true,
          schema: responseSchema,
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI decision failed: ${response.status}`);
  }

  const payload = await response.json();
  const text = payload.output_text || payload.output?.flatMap((item) => item.content || [])?.find((item) => item.type === 'output_text')?.text;
  if (!text) throw new Error('OpenAI decision missing output_text');
  return JSON.parse(text);
}

function publicState(value) {
  const sanitized = normalizeState(value);
  return {
    ...sanitized,
    user: {
      name: 'DRIFT Athlete',
      timezone: sanitized.user.timezone,
    },
  };
}

function send(response, status, body) {
  response.writeHead(status, {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type',
    'content-type': 'application/json; charset=utf-8',
  });

  if (body === null) return response.end();
  response.end(JSON.stringify(body));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let data = '';
    request.on('data', (chunk) => {
      data += chunk;
    });
    request.on('end', () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });
    request.on('error', reject);
  });
}

function encryptToken(token) {
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', encryptionKey, iv);
  const encrypted = Buffer.concat([cipher.update(token, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString('hex')}.${tag.toString('hex')}.${encrypted.toString('hex')}`;
}

export function decryptToken(payload) {
  const [ivHex, tagHex, encryptedHex] = payload.split('.');
  const decipher = createDecipheriv('aes-256-gcm', encryptionKey, Buffer.from(ivHex, 'hex'));
  decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
  return Buffer.concat([
    decipher.update(Buffer.from(encryptedHex, 'hex')),
    decipher.final(),
  ]).toString('utf8');
}
