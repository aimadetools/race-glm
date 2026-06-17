// Extracts the EXACT gating code from equity-report.html and runs it against a
// minimal DOM/localStorage mock across 4 localStorage scenarios. No browser.
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'equity-report.html');
const html = fs.readFileSync(FILE, 'utf8');

// --- Extract the two exact code blocks from the production file ---
// 1) The restore block inside the report-render path (apply unlock tiers)
const restoreMatch = html.match(/\/\/ Restore unlock tiers[\s\S]*?catch\(e\) \{\}/);
if (!restoreMatch) { console.error('FAIL: could not find restore block'); process.exit(1); }
const RESTORE_CODE = restoreMatch[0];

// 2) unlockReport (email path) — from function signature to its closing brace
const unlockMatch = html.match(/    function unlockReport\(e\) \{[\s\S]*?^    \}/m);
if (!unlockMatch) { console.error('FAIL: could not find unlockReport'); process.exit(1); }
const UNLOCK_CODE = unlockMatch[0];

// --- Minimal DOM + storage shim ---
function makeMock() {
  const store = {};
  const els = {};
  function el(id) {
    if (!els[id]) {
      els[id] = {
        id,
        style: { display: '' },
        classList: {
          _set: new Set(),
          add(c) { this._set.add(c); },
          contains(c) { return this._set.has(c); },
        },
        value: '',
      };
    }
    return els[id];
  }
  const document = { getElementById: el };
  const localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; },
  };
  return { store, els, el, document, localStorage };
}

// State-check helpers (mirror what CSS does: visible = overlay hidden AND/OR gate 'unlocked')
function chartVisible(env) {
  const overlay = env.els.paywallOverlay;
  const gate = env.els.paywallGate;
  const overlayHidden = overlay && overlay.style.display === 'none';
  const gateUnlocked = gate && gate.classList.contains('unlocked');
  return !!(overlayHidden || gateUnlocked);
}
function premiumVisible(env) {
  const overlay = env.els.premiumOverlay;
  const gate = env.els.premiumGate;
  const pdf = env.els.pdfDownloadArea;
  const overlayHidden = overlay && overlay.style.display === 'none';
  const gateUnlocked = gate && gate.classList.contains('unlocked');
  const pdfShown = pdf && pdf.style.display === 'block';
  return !!(overlayHidden && gateUnlocked && pdfShown);
}

let failures = 0;
function assert(name, cond, detail) {
  if (cond) {
    console.log(`  ✅ ${name}`);
  } else {
    console.log(`  ❌ ${name}  ${detail || ''}`);
    failures++;
  }
}

console.log('=== Testing EXACT production gating code from equity-report.html ===');
console.log('Source: ' + FILE);

// Stubs for browser globals the real unlockReport references
const STUBS = (env) => ({
  gtag: () => {},
  trackPaywallConversion: () => {},
  currentVariant: 'control',
  fetch: () => Promise.resolve({ ok: true }),
  window: { FounderMathPro: { captureEmail: () => {} } },
});

// Scenario A: Fresh visitor, enters email -> chart unlocked, premium LOCKED
console.log('\n--- Scenario A: fresh visitor unlocks via email ---');
const A = makeMock();
const sA = STUBS();
const fnA = new Function('document', 'localStorage', 'window', 'gtag', 'trackPaywallConversion', 'currentVariant', 'fetch', UNLOCK_CODE + '\n; return unlockReport;')(
  A.document, A.localStorage, sA.window, sA.gtag, sA.trackPaywallConversion, sA.currentVariant, sA.fetch);
A.document.getElementById('unlockEmail').value = 'founder@startup.com';
fnA({ preventDefault(){} });
new Function('document', 'localStorage', RESTORE_CODE)(A.document, A.localStorage);
assert('email flag set after unlock', A.localStorage.getItem('fm_report_email_unlocked') === 'true', 'got: ' + A.localStorage.getItem('fm_report_email_unlocked'));
assert('purchase flag NOT set', A.localStorage.getItem('foundermath_equity_report_purchased') === null);
assert('chart VISIBLE (email unlocked it)', chartVisible(A) === true);
assert('premium LOCKED (recs/PDF hidden)', premiumVisible(A) === false, JSON.stringify({ov: A.els.premiumOverlay && A.els.premiumOverlay.style.display, pdf: A.els.pdfDownloadArea && A.els.pdfDownloadArea.style.display}));

// Scenario B: Purchased only -> everything visible
console.log('\n--- Scenario B: returning purchaser (purchased flag set) ---');
const B = makeMock();
B.localStorage.setItem('foundermath_equity_report_purchased', 'true');
new Function('document', 'localStorage', RESTORE_CODE)(B.document, B.localStorage);
assert('chart VISIBLE', chartVisible(B) === true);
assert('premium VISIBLE (recs + PDF)', premiumVisible(B) === true);

// Scenario C: Email only (no purchase), restore path -> chart visible, premium locked
console.log('\n--- Scenario C: returning email-tier user, no purchase ---');
const C = makeMock();
C.localStorage.setItem('fm_report_email_unlocked', 'true');
new Function('document', 'localStorage', RESTORE_CODE)(C.document, C.localStorage);
assert('chart VISIBLE', chartVisible(C) === true, 'overlay=' + C.els.paywallOverlay.style.display + ' unlocked=' + C.els.paywallGate.classList.contains('unlocked'));
assert('premium LOCKED', premiumVisible(C) === false);

// Scenario D: fresh, no flags, no email -> everything locked
console.log('\n--- Scenario D: fresh visitor, nothing unlocked ---');
const D = makeMock();
new Function('document', 'localStorage', RESTORE_CODE)(D.document, D.localStorage);
assert('chart LOCKED', chartVisible(D) === false);
assert('premium LOCKED', premiumVisible(D) === false);

// Static safety check: unlockReport (email path) must NEVER reveal premium
console.log('\n--- Static check: email path must not touch premium gate ---');
const touchesPremium = /premiumOverlay|premiumGate|pdfDownloadArea/.test(UNLOCK_CODE);
assert('unlockReport does NOT reveal premium content', touchesPremium === false, touchesPremium ? 'FOUND premium ref in email path!' : '');

console.log('\n' + (failures === 0 ? '🎉 ALL GATING TESTS PASSED' : `⚠️  ${failures} FAILURE(S)`));
process.exit(failures === 0 ? 0 : 1);
