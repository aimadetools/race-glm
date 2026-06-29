// S122 — AI Offer Verdict.
//
// WHY: calculators are a commodity and the free tier already hands visitors the
// answer, so the $9.99 "PDF of calculator output" wall converts 0/12 and the
// email gate captures nothing. The ONE non-commodity an equity site can sell is
// *personalized reasoning* — "is MY offer good, and exactly what do I say to get
// more?" That's what an LLM does well. This endpoint returns an AI-generated
// negotiation playbook for the visitor's specific offer.
//
// ROBUSTNESS: Vercel Hobby caps serverless at 10s. The OpenRouter call is wrapped
// in an 8.5s AbortController; on ANY failure we fall back to a deterministic
// heuristic verdict so the visitor ALWAYS gets a useful answer (source:'heuristic').
// COST / ABUSE: the client gates this call behind a real email submit (captured
// via /api/subscribe first), and we bound max_tokens. Output is small + cheap.
//
// Contract (POST, application/json):
//   in : { email, source, salary, shares, strike, fmv, stage, role,
//          ownershipPct?, growth?, yearsExit? }
//   out: { ok, source:'ai'|'heuristic', verdict, market, strengths[],
//          redFlags[], negotiation[], counter }

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'google/gemini-2.5-flash';
const CALL_MS = 8500; // leave headroom under the 10s Hobby cap

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://founder-math.com');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body || {};
  try { body = typeof body === 'string' ? JSON.parse(body) : body; } catch (e) { body = {}; }

  // Cheap gate: must look like a lead before we spend an LLM call.
  const email = String(body.email || '').trim();
  if (!email || email.indexOf('@') < 0) {
    return res.status(400).json({ ok: false, error: 'Email is required.' });
  }

  const nums = parseNums(body);
  const ctx = {
    ...nums,
    stage: clean(body.stage, STAGES, 'Series A'),
    role: clean(body.role, ROLES, 'Mid-level'),
    ownershipPct: pct(body.ownershipPct),
    source: cleanSource(body.source),
  };

  // Always compute the heuristic so we have a guaranteed-good fallback.
  const heuristic = buildHeuristic(ctx);

  let ai = null;
  try {
    ai = await callLLM(ctx);
  } catch (e) {
    ai = null; // fall through to heuristic
  }

  const out = (ai && ai.verdict) ? { ok: true, source: 'ai', ...ai } : { ok: true, source: 'heuristic', ...heuristic };
  return res.status(200).json(out);
}

// ---------------------------------------------------------------------------
// Number / input parsing
// ---------------------------------------------------------------------------
function parseNums(b) {
  const f = (v, d) => { const n = parseFloat(v); return isFinite(n) && n >= 0 ? n : d; };
  return {
    salary: f(b.salary, 0),
    shares: f(b.shares, 0),
    strike: f(b.strike, 0),
    fmv: f(b.fmv, 0),
    growth: f(b.growth, 25),     // %/yr, default 25
    yearsExit: f(b.yearsExit, 5),
  };
}
const STAGES = ['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C+', 'Public'];
const ROLES = ['Junior', 'Mid-level', 'Senior', 'Staff', 'Principal', 'Executive'];
function clean(v, allowed, dflt) {
  const s = String(v || '').trim();
  return allowed.includes(s) ? s : dflt;
}
function pct(v) { const n = parseFloat(v); return isFinite(n) && n > 0 ? Math.min(n, 100) : 0; }
function cleanSource(v) {
  const s = String(v || '');
  return /^[a-z0-9-]+$/.test(s) ? s.slice(0, 40) : 'offer-verdict';
}

// ---------------------------------------------------------------------------
// Heuristic verdict — deterministic, always available
// ---------------------------------------------------------------------------
function money(n) {
  n = Math.max(0, Math.round(n || 0));
  if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B';
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
  return '$' + n.toLocaleString();
}
function ratioTxt(r) { return (Math.round(r * 10) / 10) + '×'; }

function buildHeuristic(c) {
  const spread = Math.max(0, c.fmv - c.strike);
  const underwater = c.fmv <= c.strike;
  // Future share price: grow FMV, then a 25% dilution haircut for future rounds.
  const futurePrice = c.fmv * Math.pow(1 + c.growth / 100, c.yearsExit) * 0.75;
  const exitValue = Math.max(0, futurePrice - c.strike) * c.shares;
  const ratio = c.salary > 0 ? exitValue / c.salary : 0;

  let market, headline;
  if (underwater) {
    market = 'Needs scrutiny'; headline = 'Your options are currently underwater (strike ≥ 409A) — upside depends entirely on the company growing past your strike price.';
  } else if (ratio >= 2) {
    market = 'Above market'; headline = 'A generous grant — typical of early-stage companies. The equity could be worth ' + ratioTxt(ratio) + ' your salary at a reasonable exit.';
  } else if (ratio >= 0.5) {
    market = 'Fair'; headline = 'A solid, market-typical grant for a mid-stage startup — equity is meaningful but not the main event (about ' + ratioTxt(ratio) + ' your salary at exit).';
  } else if (ratio >= 0.1) {
    market = 'Below market'; headline = 'A smaller grant, more typical of later-stage companies where cash comp is higher (about ' + ratioTxt(ratio) + ' your salary at exit).';
  } else {
    market = 'Below market'; headline = 'The equity upside is minimal relative to salary — prioritize guaranteed cash unless you expect outsized growth.';
  }

  const strengths = [];
  if (!underwater && spread > 0) strengths.push('Options are ' + money(spread) + ' in the money per share today.');
  if (ratio >= 0.5) strengths.push('Equity-to-salary ratio of ' + ratioTxt(ratio) + ' is healthy for a ' + c.stage + ' company.');
  if (c.ownershipPct >= 0.1) strengths.push('Ownership of ~' + c.ownershipPct.toFixed(2) + '% is meaningful for a ' + c.role + ' hire at ' + c.stage + '.');
  if (strengths.length === 0) strengths.push('Base salary of ' + money(c.salary) + ' is the reliable core of this offer.');

  const redFlags = [];
  if (underwater) redFlags.push('Strike price is at/above current 409A value — no exercisable value today.');
  if (ratio < 0.1 && c.shares > 0) redFlags.push('Equity upside is small versus salary — make sure the cash comp is strong.');
  if (c.stage === 'Pre-seed' || c.stage === 'Seed') redFlags.push('Early stage = high dilution risk; expect your stake to shrink 20–40% per future round.');
  if (c.ownershipPct > 0 && c.ownershipPct < 0.02 && (c.stage === 'Pre-seed' || c.stage === 'Seed')) redFlags.push('Ownership under 0.02% is low even for a non-founding ' + c.role + ' at ' + c.stage + '.');
  if (redFlags.length === 0) redFlags.push('Nothing structural jumps out — confirm vesting cliff, exercise window on departure, and ISO vs NSO tax treatment.');

  const negotiation = [
    'Ask for roughly 20% more shares than offered: "Could we bring the option grant to [target]? Based on comparable ' + c.role + ' grants at ' + c.stage + ' stage, that would make this competitive."',
    'Request a refresh grant: "I\'d love a one-year refresh grant so my equity keeps pace as the company grows."',
    'Negotiate the cash too: "To make this work, can we meet at [base] and revisit the equity at my first review?"',
  ];

  const counter = underwater
    ? 'Push for a lower strike or a larger grant to offset the current underwater position, and confirm the 409A is recent.'
    : 'Counter with ~20% more shares plus a modest base bump, and ask for a refresh grant after year one.';

  return {
    verdict: headline,
    market,
    ratio,
    strengths,
    redFlags,
    negotiation,
    counter,
  };
}

// ---------------------------------------------------------------------------
// LLM call (OpenRouter / Gemini 2.5 Flash). Returns parsed verdict or throws.
// ---------------------------------------------------------------------------
async function callLLM(c) {
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) throw new Error('no key');

  const facts = [
    'Role: ' + c.role,
    'Company stage: ' + c.stage,
    'Annual base salary: ' + money(c.salary),
    'Options granted: ' + (c.shares > 0 ? c.shares.toLocaleString() + ' shares' : 'not specified'),
    'Strike price: ' + (c.strike > 0 ? '$' + c.strike.toFixed(2) + '/share' : 'not specified'),
    'Current 409A value: ' + (c.fmv > 0 ? '$' + c.fmv.toFixed(2) + '/share' : 'not specified'),
    c.ownershipPct > 0 ? 'Ownership stake: ~' + c.ownershipPct.toFixed(3) + '%' : '',
    'Assumed growth to exit: ' + c.growth + '%/yr over ' + c.yearsExit + ' years',
  ].filter(Boolean).join('\n');

  const system = 'You are an expert startup equity and compensation advisor. ' +
    'You give blunt, specific, practical advice about startup job offers. ' +
    'Using the candidate\'s numbers and known benchmarks (early-stage engineer grants are often 0.1–0.5% of company; Series A 0.05–0.25%; later stages smaller), ' +
    'return ONLY valid minified JSON — no markdown, no prose outside the JSON — with EXACTLY these keys: ' +
    '"verdict" (one sharp sentence on whether the equity is generous/fair/below market for this stage+role), ' +
    '"market" (one of: "Above market" | "Fair" | "Below market" | "Needs scrutiny"), ' +
    '"strengths" (array of 2-3 short strings), ' +
    '"redFlags" (array of 2-3 short strings: things to watch or negotiate), ' +
    '"negotiation" (array of 3 specific copy-paste-ready talking points tailored to their numbers), ' +
    '"counter" (one concrete suggested counter-offer). Keep total under ~150 words.';

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), CALL_MS);
  let resp;
  try {
    resp = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + key,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://founder-math.com',
        'X-Title': 'FounderMath Offer Verdict',
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.5,
        max_tokens: 700,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: 'Offer details:\n' + facts + '\n\nReturn the JSON now.' },
        ],
      }),
      signal: ctrl.signal,
    });
  } finally {
    clearTimeout(timer);
  }

  if (!resp || !resp.ok) throw new Error('upstream ' + (resp ? resp.status : 'noresp'));
  const data = await resp.json();
  const text = data?.choices?.[0]?.message?.content || '';
  const parsed = extractJson(text);
  if (!parsed || !parsed.verdict) throw new Error('unparseable');

  // Normalize to our shape (fill any missing arrays so the client never breaks).
  return {
    verdict: String(parsed.verdict).slice(0, 400),
    market: cleanMarket(parsed.market),
    strengths: arr(parsed.strengths, 3),
    redFlags: arr(parsed.redFlags, 3),
    negotiation: arr(parsed.negotiation, 3),
    counter: String(parsed.counter || '').slice(0, 300) || 'Counter with ~20% more shares plus a modest base bump.',
  };
}

function extractJson(text) {
  if (!text) return null;
  try { return JSON.parse(text); } catch (e) {}
  const s = text.indexOf('{'), e2 = text.lastIndexOf('}');
  if (s >= 0 && e2 > s) {
    try { return JSON.parse(text.slice(s, e2 + 1)); } catch (er) {}
  }
  return null;
}
function cleanMarket(m) {
  const v = String(m || '');
  if (/above/i.test(v)) return 'Above market';
  if (/fair/i.test(v)) return 'Fair';
  if (/below|under/i.test(v)) return 'Below market';
  if (/scrutiny|risk|caution/i.test(v)) return 'Needs scrutiny';
  return 'Fair';
}
function arr(a, max) {
  if (!Array.isArray(a)) return [];
  return a.map((x) => String(x)).filter(Boolean).slice(0, max).map((s) => s.slice(0, 300));
}
