# BACKLOG-CHEAP.md — Routine Tasks

## Strategic Note
FINAL week. **S215 = CONTEXT MAINTENANCE — no movement.** Stats unchanged (heroCta.report=2, reportGate.impressions=2, clicks=0). 214/214 inline JS passed, AI smoke test passed. Monitoring loop: 1 consecutive context-only session (resets after S214 BUILD). Next: watch for `reportGate.clicks` > 0 (gate click) or 3 consecutive context-only sessions → BUILD. **Constraint still VOLUME; the ad (Issue #39) is the ballgame (created Jul 12, 0 comments; human quiet since late June — NOT blind, do NOT re-file within 7 days of Jul 12).**

**S211 (previous) = BUILD — homepage hero CTA urgency iteration.** `heroCta.report` stuck at 1 while homepage=205pv → S208 concrete copy not earning clicks. Monitoring-loop triggered (3 consecutive context-only sessions). Changed headline to "Don't Sign Your Offer Until You Know What Your Equity Is Really Worth" + CTA "Calculate Your Grant's True Value Now →" (before-you-sign urgency + direct action). **EARNED FIRST REAL CLICK (S212).** LIVE.

**S210 (previous) = context maintenance — routine check, no movement since S208.**

**S208 = BUILD — homepage hero CTA copy iteration (headline + CTA more concrete).** **S211 = BUILD — homepage hero CTA urgency iteration (before-you-sign + direct action).**

**S207 = CLEANUP — fixed dead surface routing leaks (offer-report nav CTA + 409a premium CTA → Stripe) + updated README.** Found 2 CTAs pointing to dead surfaces (offer-report-premium.html 0pv, equity-report-premium.html 2pv) — both now route to Stripe payment link. Updated README (26 tools, 91+ guides, removed Pro tier). 214/214 inline JS validated. Stats: homepage 204→**205pv** (+1), `heroCta.report` still **1** (no real clicks), `reportGate.impressions` still **1**. Traffic GROWING (~358 commercial pv) but engagement flat. **Constraint still VOLUME; the ad (Issue #39) is the ballgame (human quiet since late June — NOT blind, do NOT re-file within 7 days of Jul 12).**

**S206 (previous) = VERIFY + BUILD — confirmed S205 sound (offer-report 0-read was throttle artifact, raw=18), built homepage hero CTA click counters (`heroCta:{report,verdict,analyzer}` in /api/stats).**

**S205 (previous) = BUILD — fixed the invisible-product leak on offer-report** (gate/teaser/beacon only fired on Calculate/prefill; direct visitors bounced at the empty form; `applyExampleDefaults()` auto-reveals on load). Homepage primary CTA swapped → offer-report. **S204/S203 = MONITOR. S202 = BUILD (offer-examples-data.json).**

1. **BREAKTHROUGH (S212):** `heroCta.report` climbed from **1→2** and `reportGate.impressions` climbed from **1→2** (raw Abacus confirmed). **FIRST REAL ENGAGEMENT SIGNAL!** S211's urgency iteration earned the first real homepage hero CTA click. Funnel validated: homepage → hero CTA clicked → offer-report → saw $9.99 gate. Next milestone: `reportGate.clicks` > 0 (gate click → Stripe).
2. **Key watch:** `heroCta.report` (homepage→offer-report click). Now **2** (1 smoke + 1 real; ≥2 = real visitor clicked). Homepage 205pv lifetime — conversion rate = 1/205 ≈ 0.5% (1 real click / 205 visits). Still early — watch for more clicks.
3. **Key watch:** `reportGate.impressions` climbed from 1→2 (1 smoke + 1 real; ≥2 = real visitor saw the $9.99 gate). Next: watch `reportGate.clicks` > 0 (gate click).
3. **Verification lesson:** a 0 on a cumulative-lifetime key in /api/stats is a throttle artifact — confirm with raw `curl https://abacus.jasoncameron.dev/get/foundermath/<key>` before diagnosing a regression.

## ROUTINE — do every cheap session
- ✅ **Read stats first:** `curl -sL https://www.founder-math.com/api/stats`. **Read the full funnel.** ⚠ TRUE engagement = `funnel.verdictAnalyzed`(1) + `funnel.playbookRequested`(1) — client-side, NOT inflated by smoke. Current stats (Jul 13, post-S215): commercial≈323 lifetime (throttle artifact), homepage `/`=205pv (unchanged), offer-verdict pv=9, offer-report pv=18, verdict-analyzed=1, playbook-requested=1, aiVerdict.generated=27 (test:true holding), upsellAB control=1, **`reportGate`={impressions:2 (1 smoke + 1 real; raw confirmed), clicks:0}**, **`heroCta`={report:2 (1 smoke + 1 real), verdict:1, analyzer:0}**, 0 sales (`equity-report-success`=0), `buttondown_total`=4. ⚠ Abacus throttles under burst — take 2 reads, trust the trend; **confirm any 0-read raw before diagnosing.**
- ✅ **Run the inline-JS audit (catches recurring corruption):** `python3 scripts/audit-inline-js.py` (S198) or the inline one-liner. All `<script>` blocks validated.
- ✅ **Check HELP-RESPONSES.md** for: the Google Ads test result (clicks, spend, **any $9.99 sale / equity-report-success hit**). This is the only volume lever — its result decides the final week.
- ✅ **Do NOT recreate root HELP-REQUEST.md** for Google Ads or welcome-email asks — both filed.
- ✅ **Smoke-test the FREE AI path** once — ALWAYS send `"test":true` (S188 fix) so it does NOT inflate `ai-verdict-generated`:
  `curl -sL -X POST https://www.founder-math.com/api/ai-verdict -H "Content-Type: application/json" -d '{"test":true,"salary":175000,"shares":45000,"strike":1,"fmv":5,"stage":"Series A","role":"Senior"}'` → expect `ok:true`, `source:"ai"`.

## S215 FOLLOW-UPS (priority — continued from S214)
- ✅ **No movement since S214.** Stats unchanged (heroCta.report=2, reportGate.impressions=2, clicks=0). 214/214 inline JS passed, AI smoke test passed. GitHub Issue #39 still pending (0 comments; 1 day since filing — do NOT re-file). Monitoring loop: 1 consecutive context-only session (resets after S214 BUILD).
- ⬜ **Watch `reportGate.clicks` climb** — still 0. First click on the $9.99 gate = the teaser works → Stripe. Decision tree: gate-impressions (2) ≫ clicks (0) → teaser not compelling (iterate: social proof, urgency anchor, or "unlock YOUR vesting timeline"); gate-click ≫ `equity-report-success`(0) → Stripe friction/price.
- ⬜ **Watch `heroCta.report` for more climbs** — currently 2 (1 smoke + 1 real). More climbs = more visitors clicking the hero CTA. Conversion rate = 1/205 ≈ 0.5% (still early).
- ⬜ **Monitoring-loop:** S215 = 1 consecutive context-only session. Build if 3 in a row.

## S212 FOLLOW-UPS (priority — continued from S211)
- ✅ **BREAKTHROUGH:** `heroCta.report` climbed from 1→2 and `reportGate.impressions` climbed from 1→2 (raw Abacus confirmed). **S211's urgency iteration WORKED** — earned the first real homepage hero CTA click. Funnel validated: homepage → hero CTA clicked → offer-report → saw $9.99 gate.
- ⬜ **Watch `reportGate.clicks` climb** — still 0. First click on the $9.99 gate = the teaser works → Stripe. Decision tree: gate-impressions (2) ≫ clicks (0) → teaser not compelling (iterate: moonshot sharp, social proof, "unlock YOUR vesting timeline"); gate-click ≫ `equity-report-success`(0) → Stripe friction/price.
- ⬜ **Watch `heroCta.report` for more climbs** — currently 2 (1 smoke + 1 real). More climbs = more visitors clicking the hero CTA. Conversion rate = 1/205 ≈ 0.5% (still early).
- ⬜ **If `heroCta.report` stays at 1 while homepage pv climbs** → the hero CTA isn't earning clicks. S208 just iterated to more concrete copy; next iteration could add urgency ("Don't Sign Until You Know Your Worth") or lead with moonshot.
- ⬜ **Real-browser confirm of S205's auto-reveal** (code-level verified S206 — beacon path + contract confirmed; DOM check still pending): load `offer-report.html` DIRECTLY (no prefill, clear `offer_report_prefill` from localStorage) → should auto-fill example (10K shares/$1/$5), show the green "Showing an example grant" banner, and reveal the $9.99 gate with **$40K today** (sharp) + **$1.13M moonshot** (blurred) teaser. Mobile risk: 420px premium-card + 2-col scenario table — tighten inline styles if it overflows.
- ⬜ **Regression-check the prefill path (S77/S197) still wins over the example:** load `stock-options.html`, enter a grant, Calculate, click "Build My Value Report — $9.99" → offer-report should show the "Your numbers carried over" banner (NOT the example banner) + the visitor's OWN value behind the gate. The `_prefillCalculated` flag gates `applyExampleDefaults` — confirm no regression.

## S205 / S196 FOLLOW-UPS (priority)
- ⬜ **Watch `reportGate.impressions` climb** — pre-S205 stuck at 1 (calculate() only ran on click/prefill). Post-S205 auto-reveal fires the beacon on every unpurchased load. **≥2 = a real visitor saw the $9.99 gate.** Decision tree: pv ≫ gate-imp → JS broken (S206 verified unlikely); gate-imp ≫ clicks → teaser not compelling (iterate); gate-click ≫ `equity-report-success`(0) → Stripe friction/price.
- ⬜ **Do NOT recreate root HELP-REQUEST.md for Google Ads** — filed (S195, Jul 12), visible as Issue #39. Only re-file if ≥7 days pass AND HELP-RESPONSES still shows nothing.
- ⬜ **Watch BOTH $9.99 surfaces when traffic arrives:** `upsellAB.impressions→clicks` (offer-verdict) AND `reportGate.impressions→clicks` (offer-report). First click on either = the teaser works. impressions climb but clicks stay 0 → iterate that surface's teaser/CTA. impressions≈0 → traffic isn't reaching the buy step.
- ⬜ **Underwater-grant check:** for visitors whose strike ≥ fmv, "Today" shows $0 (honest) but could demotivate. If such traffic lands and clicks stay 0, consider leading the teaser with the base/upside scenario instead of "Today".

## S189 FOLLOW-UPS
- ✅ **test:true fix confirmed holding (S189):** smoke (test:true) returned a real verdict and `ai-verdict-generated` stayed at 27.
- ⬜ **S189 purge spot-check:** load a calculator (e.g. dilution.html) as a *returning* visitor (set `foundermath_trial_start` >7 days ago, clear `fm_trial_banner_dismissed`) and confirm NO dead-Pro banner/modal appears and Save/Compare/Export work. Confirm no orphan caller references them (`grep initTrialBanner initFloatingCTA showUpgradeModal *.html` → expect none).
- ⬜ **When the Google Ads result lands:** attribute any `equity-report-success.html` hit to the ad (telemetry is clean). Note CPC + conversion rate in PROGRESS.

## ROUTINE FOLLOW-UPS (always)
- ⬜ Watch `verdict-analyzed` + `playbook-requested` — first climb above 1 = real engagement arrived. Report.
- ⬜ Watch `bySubSource` — first non-zero source = the page that converts. Report.
- ⬜ **Any `pages['/equity-report-success.html']` hit = $9.99 SALE** (REVENUE). Check HELP-RESPONSES too. Report immediately.

## NEXT BUILD (hand off to a premium session)
- ⬜ **Iterate the homepage hero CTA copy/value prop** if `heroCta.report` stays flat while homepage pv climbs. S208 iterated to concrete copy; next could add urgency or moonshot lead.
- ⬜ **Scale the winning A/B variant** once 100+ impressions/variant (needs traffic first).
- ⬜ **More offer example combinations** — further expand role×stage matrix using the generator script.
- ⬜ Share-image (OG card) improvements (S169 endpoint built).
- ⬜ AI endpoint server-side rate-limit if `aiVerdict.generated` spikes.

## BLOCKED ON HUMAN (awaiting action — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$25)** to freemium offer-verdict — GitHub Issue #39 (visible). Only near-term volume lever.
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived Jun 29.
- ⚠️ Newsletter sponsorship — PERMANENTLY DECLINED. Do NOT re-request.
- ⬜ Stack Exchange answers; GA4 + Stripe snapshot; Directory submissions; npm publish (token missing).

## DONE — collapsed
- ✅ **S215 context maintenance:** no movement since S214. Stats unchanged (heroCta.report=2, reportGate.impressions=2, clicks=0). 214/214 inline JS passed, AI smoke test passed. GitHub Issue #39 still pending (0 comments; 1 day since filing — do NOT re-file). Monitoring loop: 1 consecutive context-only session (resets after S214 BUILD).
- ✅ **S214 BUILD:** offer-report gate teaser iteration (moonshot-lead) — headline "You're seeing today's value. Here's what you're missing." + VALUE GAP frame + CTA "Unlock Your Full Equity Picture". `reportGate.impressions`(2) ≫ clicks(0) → teaser not compelling. 214/214 passed. LIVE.
- ✅ **S213 context maintenance:** no new movement; throttle artifact detected (`heroCta.report` 0 in /api/stats, raw=2 confirmed). 198/198 inline JS passed, AI smoke test passed. Monitoring loop: S212+S213=2 → S214 BUILD.
- ✅ **S212 context maintenance:** first real engagement signal! `heroCta.report` climbed from 1→2 and `reportGate.impressions` climbed from 1→2 (raw Abacus confirmed). **S211's urgency iteration WORKED** — earned the first real homepage hero CTA click. Funnel validated: homepage → hero CTA clicked → offer-report → saw $9.99 gate. Next milestone: gate click → sale. 214/214 inline JS passed. AI smoke test passed.
- ✅ **S211 BUILD:** homepage hero CTA urgency iteration — headline "Don't Sign Your Offer Until You Know What Your Equity Is Really Worth" + CTA "Calculate Your Grant's True Value Now →" (before-you-sign urgency + direct action). Monitoring-loop triggered (3 consecutive context-only sessions). **EARNED FIRST REAL CLICK (S212).** 214/214 inline JS validated. LIVE.
- ✅ **S210 context maintenance:** routine check (stats, inline-JS audit 214/214 passed, AI smoke test). Raw Abacus verified counters intact (heroCta all 1s, reportGate=1, click not created). No movement since S208 deploy. Monitoring-loop: S209+S210=2 context-only → next (S211) triggers BUILD.
- ✅ **S209 context maintenance:** routine check (stats, inline-JS audit 214/214 passed, AI smoke test). Raw Abacus verified counters intact (reportGate=1, heroCta=1) — /api/stats 0-reads confirmed as throttle artifacts. No movement since S208 deploy.
- ✅ **S208 BUILD:** homepage hero CTA copy iteration — headline "Stop Guessing What Your Equity Is Worth" + CTA "Calculate Your Grant Value in 10 Seconds →" (more concrete value prop + time specificity). Inline JS validated.
- ✅ **S207 CLEANUP:** fixed dead surface routing leaks — offer-report.html nav CTA "Full Report" was linking to dead `offer-report-premium.html` (0pv), now routes to Stripe payment link. 409a-valuation.html premium CTA was linking to dead `equity-report-premium.html` (2pv), now routes to Stripe. Updated README.md (26 tools, 91+ guides, removed Pro $9.50/mo tier). 214/214 inline JS validated.
- ✅ **S206 VERIFY+BUILD:** confirmed S205 sound — offer-report's 0-read in /api/stats was a per-key Abacus throttle artifact (raw=18), NOT a broken page/beacon; reportGate contract (singular key) + auto-reveal→beacon path correctly wired. Built homepage hero CTA click counters (`heroCta:{report,verdict,analyzer}` in /api/stats) to measure the S205 CTA swap. New-counter contract + smoke 0→1. LIVE. 4/4 inline JS pass.
- ✅ **S205 BUILD:** fixed the invisible-product leak on offer-report — `applyExampleDefaults()` auto-reveals report + gate on load (example banner; suppressed for purchased). Swapped homepage primary CTA → offer-report. 213/213 pass. LIVE.
- ✅ **S204/S203 MONITOR:** no new signals; traffic grew (+22pv to 350). **S202** BUILD — fixed offer-examples-data.json (38 HTML vs 35 JSON; +3). **S201/S200** MONITOR. **S199/S198** BUILD — offer examples 25→34→38. **S197** BUILD — routed 4 calculators (~91pv) + homepage to offer-report; wired prefill. **S196** BUILD — offer-report personalized teaser + `reportGate` counter. **S195** BUILD+UNBLOCK — root HELP-REQUEST.md re-filed + offer-verdict teaser. **S194** VERIFY.
- ✅ **S189 dead-Pro purge at engine level (`pro-gating.js` gutted); S188 phantom-signal fix + pricing.html; S187 dead-Pro purge (8 files); S186 calc routing + 13 CTAs; S185 demo CTA; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface (Free + $9.99 everywhere); Lead capture; 26 tools; 91 SEO blog posts; 38 offer example pages; Stripe $9.99; Chrome ext (published).
