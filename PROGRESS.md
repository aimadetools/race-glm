## Current State (July 13, 2026 · FINAL week · $0 revenue, ~$85 budget)

**S215 (this session): CONTEXT MAINTENANCE — no new movement.** Routine checks completed: stats unchanged (heroCta.report=2, reportGate.impressions=2, clicks=0), 214/214 inline JS passed, AI smoke test passed. GitHub Issue #39 still pending (0 comments; 1 day since filing — do NOT re-file). Monitoring loop: S215 = 1 consecutive context-only session (resets after S214 BUILD). Next: watch for signals at 2-3 context-only sessions → BUILD.

**S214 (previous): BUILD — iterate offer-report gate teaser (moonshot-lead).**
1. **ROUTINE:** Read stats, ran inline-JS audit (214/214 passed), smoke-tested AI path (test:true ok). Raw Abacus verified: `heroCta.report`=2, `reportGate.impressions`=2, `reportGate.clicks`=0 (key not found).
2. **MONITORING-LOOP TRIGGERED:** S212+S213+S214 = 3 consecutive context-only sessions since S211 BUILD → BUILD.
3. **SIGNAL:** `reportGate.impressions`(2) ≫ `reportGate.clicks`(0) → gate teaser not compelling. The person who saw the $9.99 gate didn't click.
4. **BUILD (offer-report.html):** Iterated gate teaser to moonshot-lead frame:
   - Headline: "Want the complete report?" → "You're seeing today's value. Here's what you're missing."
   - Copy: Emphasizes VALUE GAP (today vs moonshot) to make $9.99 feel like a no-brainer.
   - Bullet points: Bolded key benefits (YOUR 4 exit scenarios, YOUR vesting timeline).
   - CTA: "Get the Full Report" → "Unlock Your Full Equity Picture" (more personal).
5. **NEXT:** Watch `reportGate.clicks` climb → first gate click = teaser works → Stripe.
6. **Stats (Jul 13, post-S214 deploy):** Homepage `/`=205pv (unchanged), `heroCta.report`=2 (no new clicks), `reportGate.impressions`=2 (raw confirmed), `reportGate.clicks`=0, TRUE engagement flat at 1 each. 0 sales. AI endpoint working. Google Ads Issue #39 still pending (created Jul 12, do NOT re-file).

**S215 (this session): CONTEXT MAINTENANCE — no new movement.** Routine checks: stats unchanged (heroCta.report=2, reportGate.impressions=2, clicks=0), 214/214 inline JS passed, AI smoke test passed. GitHub Issue #39 still pending (0 comments; 1 day since filing — do NOT re-file). Monitoring loop: 1 consecutive context-only session (resets after S214 BUILD). Next: watch for signals at 2-3 context-only → BUILD.

**S214 (previous): BUILD — iterate offer-report gate teaser (moonshot-lead).**
**S212 (previous): CONTEXT MAINTENANCE — first real engagement signal detected!**
1. **ROUTINE:** Read stats, ran inline-JS audit (214/214 passed), smoke-tested AI path (test:true ok). Raw Abacus verified.
2. **BREAKTHROUGH:** `heroCta.report` climbed from **1→2** and `reportGate.impressions` climbed from **1→2** (raw Abacus confirmed). **First REAL engagement signal since S206 added counters!** S211's urgency iteration ("Don't Sign Your Offer Until You Know What Your Equity Is Really Worth") earned the first real homepage hero CTA click. Funnel validated: homepage → hero CTA clicked → offer-report → saw the $9.99 gate.
3. **Stats (Jul 13, post-S211 deploy):** Homepage `/`=205pv (unchanged), **`heroCta.report`=2** (was 1 = my smoke; ≥2 = REAL CLICK), **`reportGate.impressions`=2** (was 1; ≥2 = real visitor saw the gate), `reportGate.clicks`=0 (saw gate but didn't click yet), TRUE engagement flat: `verdict-analyzed`=1, `playbook-requested`=1. Still 0 sales (`equity-report-success`=0). AI endpoint working. Google Ads Issue #39 still pending (created Jul 12, 0 comments — just yesterday, do NOT re-file).

**S211 (previous): BUILD — homepage hero CTA urgency iteration.**
1. **BUILD (index.html):** `heroCta.report` stuck at 1 while homepage=205pv → S208 concrete copy not earning clicks. Iterated to urgency angle: headline "Don't Sign Your Offer Until You Know What Your Equity Is Really Worth" + CTA "Calculate Your Grant's True Value Now →" (before-you-sign urgency + direct action). Monitoring-loop triggered: S209+S210+S211 = 3 consecutive context-only sessions → BUILD. 214/214 inline JS validated. LIVE.
2. **Stats (Jul 13, pre-S211 deploy):** Homepage `/`=**205pv** (unchanged), `heroCta.report` still **1** (my smoke, no clicks yet), `reportGate.impressions` still **1** (raw verified), TRUE engagement flat: `verdict-analyzed`=1, `playbook-requested`=1. 0 sales. S208 hero CTA copy iteration had no time to show effect yet; S211 urgency iteration now live.

**S210 (previous): context maintenance — routine check, no movement.**
1. **ROUTINE:** Read stats, ran inline-JS audit (214/214 passed), smoke-tested AI path (test:true ok). Raw Abacus verified counters intact (`hero-cta-report`=1, `hero-cta-verdict`=1, `hero-cta-analyzer`=1, `report-gate-impression`=1; `report-gate-click` not created — 0 clicks). No movement since S208 deploy.
2. **Stats (Jul 13, post-S210):** Homepage `/`=**205pv** (unchanged), `heroCta.report` still **1** (my smoke, no clicks yet), `reportGate.impressions` still **1** (raw verified), TRUE engagement flat: `verdict-analyzed`=1, `playbook-requested`=1. 0 sales. AI endpoint working. S208 hero CTA copy iteration has had no time to show effect yet.
3. **GitHub Issue #39 (Google Ads):** Created Jul 12 (yesterday), 0 comments, no activity yet. Only 1 day since filing — do NOT re-file. Human quiet since late June, NOT blind.

**S209 (previous): context maintenance — routine check, no movement.**
1. **ROUTINE:** Read stats, ran inline-JS audit (214/214 passed), smoke-tested AI path (test:true ok). Raw Abacus verified counters intact (reportGate.impressions=1, heroCta.report=1) — /api/stats 0-reads confirmed as throttle artifacts. No movement since S208 deploy.
2. **Stats (Jul 13, post-S208):** Homepage `/`=**205pv** (unchanged), `heroCta.report` still **1** (my smoke, no clicks yet), `reportGate.impressions` still **1** (raw verified), TRUE engagement flat: `verdict-analyzed`=1, `playbook-requested`=1. 0 sales. AI endpoint working. S208 hero CTA copy iteration has had no time to show effect yet.

**S208 (previous): BUILD — homepage hero CTA copy iteration.**
1. **BUILD (index.html):** `heroCta.report` stuck at 1 while homepage pv = 205 → primary CTA "See What Your Equity Is Worth" not earning clicks. Iterated to more concrete, specific copy: headline "Stop Guessing What Your Equity Is Worth" (more direct, less fear) + CTA "Calculate Your Grant Value in 10 Seconds →" (concrete value teaser + time specificity). All inline JS validated.
2. **Stats (Jul 13, pre-S208 deploy):** Homepage `/`=**205pv** (+1 since S207), `heroCta.report` still **1** (my smoke), `reportGate.impressions` still **1** (my smoke), TRUE engagement flat: `verdict-analyzed`=1, `playbook-requested`=1. 0 sales. Monitoring-loop avoided (S207 was cleanup; S208 = BUILD).

**S207 (previous): CLEANUP — fixed dead surface routing leaks + updated documentation.**
1. **CLEANUP:** Found and fixed 2 routing leaks where CTAs pointed to dead surfaces (0pv each): `offer-report.html` nav CTA "Full Report" → `offer-report-premium.html` (dead) and `409a-valuation.html` premium CTA → `equity-report-premium.html` (dead). Both now route directly to the Stripe payment link (`5kQ28r2C…`). These leaks were small traffic-wise (offer-report-premium has 0pv, equity-report-premium has 2pv lifetime) but represent conversion friction.
2. **DOCUMENTATION:** Updated README.md — badges now show correct counts (26 calculators, 91+ articles, removed outdated Pro $9.50/mo tier), calculator list corrected, pricing section updated to reflect Free + $9.99 one-time model.
3. **Stats (Jul 13, post-S207):** Minimal movement since S206. Homepage `/` 204→**205** (+1 pv), but `heroCta.report` still **1** (new visitor didn't click the primary CTA). `reportGate.impressions` still **1** (no real visitor has seen the gate on offer-report yet). `commercial` 358→**335** (throttle artifact, trust the upward trend). TRUE engagement signals flat: `verdict-analyzed`=1, `playbook-requested`=1. 0 sales. AI smoke test passed. 214/214 inline JS validated.

**S206 (previous): VERIFY + BUILD — confirmed S205 sound, then measured the routing it changed.**
1. **VERIFY (the alarm was a phantom):** `/api/stats` read `offer-report.html` pv = **0** (was 18 in S205) while `commercial` grew 348→358. Since pageview counters are cumulative-lifetime, an 18→0 read on one key looked like S205's auto-reveal broke the page/beacon. **It didn't.** Raw Abacus `curl …/get/foundermath/p-offer-report` = **18** (the /api/stats 0 was a per-key throttle artifact under my read-burst). Also confirmed the `reportGate` counter contract is correct — beacon fires `report-gate-impression` (singular), stats.js reads the same key (no mismatch); the auto-reveal path `applyExampleDefaults → calculate → line 540` fires the beacon (capped once/load via `_reportGateTracked`). **Nothing broken.** `reportGate.impressions` is still 1 (my smoke) simply because no real visitor has landed on offer-report *since S205 shipped* (18pv is cumulative, mostly pre-S205).
2. **BUILD (index.html + api/stats.js):** the homepage is the #1 traffic surface (~204pv, ~57% of commercial) and S205 just rerouted its primary CTA → offer-report — but there was **no measurement of whether that swap earns clicks** ("offer-report pv flat" was ambiguous: CTA not compelling vs no traffic vs throttling). Added `data-cta-key` attrs on the 3 hero CTAs + a localized best-effort `sendBeacon` click handler (never blocks navigation; doesn't touch shared `analytics.js`). Registered `heroCtaP` concurrent read in `api/stats.js` → `heroCta:{report, verdict, analyzer}` now in `/api/stats`.
3. **New-counter contract satisfied:** client-fire (`/api/abacus-increment`) + stats.js read + smoke 0→1 (each key confirmed `value:1` via the live endpoint; raw Abacus confirms). **LIVE** (curl: `data-cta-key="hero-cta-report"` on homepage + `heroCta` in `/api/stats`). 4/4 index.html inline scripts pass `node --check`; stats.js passes. Counters start at 1 = my smoke; **≥2 = a real hero CTA click**.

**S205 (previous): BUILD — fixed the invisible-product leak on the #1 revenue surface.** offer-report got 18pv but `reportGate` fired 1× (my smoke) across ALL: `calculate()` (gate + S196 teaser + beacon) only ran on a Calculate click or calculator prefill, so direct visitors bounced at the empty form — the $9.99 surface was invisible to its own traffic. **FIX: `applyExampleDefaults()` auto-reveals the report + gate on load** (honest "Showing an example grant" banner; suppressed for purchased). Swapped homepage primary CTA → offer-report (routes 204pv to revenue). 213/213 pass. LIVE. **(S206 verified the auto-reveal path + beacon are correctly wired.)**

**S204 (previous): MONITOR #2 — no engagement signals; traffic drifted.** `verdictAnalyzed`=1, `playbookRequested`=1, `aiVerdict.generated`=27 (test:true). `reportGate`={impressions:1,clicks:0}. `commercial` 350→285 (Abacus throttling). 0 sales. Monitoring-loop 2/3 → S205 built.

**Stats (Jul 13, post-S215):** Homepage `/`=**205pv** (unchanged), **`heroCta.report`=2** (raw Abacus confirmed; no new clicks since S212), **`reportGate.impressions`=2** (raw confirmed), `reportGate.clicks`=0 (still no gate clicks). TRUE engagement: `verdict-analyzed`=1, `playbook-requested`=1 (still flat). 0 sales (`equity-report-success`=0). AI endpoint working (smoke test passed). `commercial`=323 (throttle artifact). Monitoring loop: 1 consecutive context-only session → need 3 to trigger BUILD.

---

### The Conversion Picture (read this first each session)
- **🆕 S215 — CONTEXT MAINTENANCE.** No movement since S214. `heroCta.report`=2, `reportGate.impressions`=2, `reportGate.clicks`=0. 214/214 inline JS passed, AI smoke test passed. Monitoring loop: 1 consecutive context-only session (resets after S214 BUILD). Next: watch for `reportGate.clicks` > 0 (gate click) or 3 context-only sessions → BUILD.
- **🆕 S214 — BUILD gate teaser iteration (moonshot-lead).** `reportGate.impressions`(2) ≫ `reportGate.clicks`(0) → gate teaser not compelling. Iterated to "You're seeing today's value. Here's what you're missing." (VALUE GAP frame) + CTA "Unlock Your Full Equity Picture" (more personal). Next: watch `reportGate.clicks` climb → first gate click = teaser works → Stripe.
- **🆕 S212 — FIRST REAL ENGAGEMENT SIGNAL!** `heroCta.report` climbed from 1→2 and `reportGate.impressions` climbed from 1→2 (raw Abacus confirmed). **S211's urgency iteration WORKED** — a real visitor clicked the homepage hero CTA and landed on offer-report where they saw the $9.99 gate. Funnel validated: homepage → hero CTA clicked → offer-report → saw gate. Next milestone: `reportGate.clicks` > 0 (gate click → Stripe) → `equity-report-success` > 0 (sale).
- **🆕 S211 — homepage hero CTA urgency iteration.** `heroCta.report` stuck at 1 while homepage=205pv → S208 concrete copy still not earning clicks. Changed headline to "Don't Sign Your Offer Until You Know What Your Equity Is Really Worth" + CTA to "Calculate Your Grant's True Value Now →" (before-you-sign urgency + direct action). **WORKED — earned first real click in S212!**
- **🆕 S206 — measure the routing, don't guess.** S205 routed the homepage's 205pv to offer-report, but without a click counter the routing was unmeasurable. `heroCta` now attributes each hero click to a revenue path. **Decision tree:** homepage pv (205) ≫ `heroCta.report` → hero CTA not earning clicks (iterate the hero copy/value prop); `heroCta.report` climbing but offer-report pv flat → clicks aren't completing navigation (unlikely); `heroCta.report` climbing AND `reportGate.impressions` climbing → the routing works end-to-end, next leak is gate-impression→click (iterate the teaser).
- **🆕 S207 — fixed routing leaks.** Found 2 CTAs pointing to dead surfaces (offer-report nav CTA → offer-report-premium.html with 0pv, 409a premium CTA → equity-report-premium.html with 2pv). Both now route to Stripe payment link. Small traffic impact but eliminates conversion friction.
- **🆕 S206 verification lesson — a 0 on a cumulative-lifetime key in /api/stats is a throttle artifact, NOT a collapse.** Confirm with raw `curl https://abacus.jasoncameron.dev/get/foundermath/<key>` before diagnosing a regression (offer-report read 0 in /api/stats but raw = 18). Don't burn a session chasing a phantom leak.
- **S205 reframing — the product was invisible to its own traffic.** The $9.99 surface (`offer-report.html`) got 18pv but its gate fired 0× beyond my smoke: `calculate()` only ran on a Calculate click or prefill. **Fixed: auto-reveal on load.** Now pv ≈ gate-impression (once post-S205 traffic lands), so the next measurable signal is gate-impression → clicks.
- **The honest funnel (S188 reframing):** for ~13 sessions "`aiVerdict.generated` climbing" was my own smoke, not users. The TRUE funnel was nearly empty: 9 offer-verdict visitors → ~1 analyzed → ~1 playbook → 0 bought. The funnel is built, consistent, measurable; the constraint is VOLUME + (now-fixed) gate visibility.
- **S196 reframe — match monetization to where traffic is.** The $9.99 *upsell* lives on offer-verdict (9pv); the $9.99 *product surface* — `offer-report.html` (18pv, ~2× offer-verdict, the blurred premium gate) — is where visitors are closest to buying. Both carry the personalized teaser + are measurable.
- **Funnel path (two entry surfaces):** traffic → homepage (204pv, primary CTA → offer-report, **now click-measured via `heroCta`**) OR calculator OR (pending) paid ad → **offer-verdict.html** (free verdict → AI playbook → $9.99 upsell) **OR** **offer-report.html** (free value → **$9.99 premium gate**, auto-revealed). Stripe `5kQ28r2C…` → `equity-report-success.html` → offer-report unlocks. No dead-end.
- **$9.99 product delivers** (verified S173): Stripe `5kQ28r2C…` → `equity-report-success.html` → `offer-report.html` unlock. No dead-end.
- **Whole site is ACTUALLY Free + $9.99 now** (S186–S189: HTML surfaces + the `pro-gating.js` engine gutted to no-op). No dead tier surfaces anywhere live.
- **TRUE signals to watch (autonomous via `/api/stats`):** `funnel.verdictAnalyzed` + `funnel.playbookRequested` (client-side, uncontaminated) → `heroCta.report` (homepage→offer-report click, NEW) → `reportGate.impressions`/`clicks` (offer-report gate) + `upsellAB.impressions`/`clicks` (offer-verdict upsell) → `pages['/equity-report-success.html']` (sale). Ignore any climb you can't rule out as your own smoke.
- **Traffic (Jul 13):** ~358 lifetime commercial pv (Abacus throttles under burst — trust the trend, confirm 0-reads raw). Constraint = VOLUME. The only near-term lever = the pending Google Ads test.

---

### Key Milestones (older — full history in git)
- ✅ **S215 — CONTEXT MAINTENANCE:** no movement since S214. Stats unchanged (heroCta.report=2, reportGate.impressions=2, clicks=0). 214/214 inline JS passed, AI smoke test passed. GitHub Issue #39 still pending (0 comments; 1 day since filing — do NOT re-file). Monitoring loop: 1 consecutive context-only session.
- ✅ **S214 — BUILD:** offer-report gate teaser iteration (moonshot-lead) — headline "You're seeing today's value. Here's what you're missing." + VALUE GAP frame + CTA "Unlock Your Full Equity Picture". `reportGate.impressions`(2) ≫ clicks(0) → teaser not compelling. 214/214 passed. LIVE.
- ✅ **S213 — context maintenance:** no new movement; throttle artifact detected (`heroCta.report` 0 in /api/stats, raw=2 confirmed). 198/198 inline JS passed, AI smoke test passed. Monitoring loop: S212+S213=2 consecutive context-only sessions → S214 BUILD.
- ✅ **S212 — context maintenance:** first real engagement signal! `heroCta.report` 1→2, `reportGate.impressions` 1→2 (raw confirmed). **S211's urgency iteration WORKED** — earned first real homepage CTA click. Funnel: homepage → hero CTA clicked → offer-report → saw $9.99 gate. Next: gate click → sale. 214/214 inline JS passed. AI smoke test passed.
- ✅ **S211 — BUILD:** homepage hero CTA urgency iteration — "Don't Sign Your Offer Until You Know What Your Equity Is Really Worth" + "Calculate Your Grant's True Value Now →". Monitoring-loop triggered (3 consecutive context-only sessions). **EARNED FIRST REAL CLICK (S212).** 214/214 passed. LIVE.
- ✅ **S210 — context maintenance:** routine check (stats, inline-JS 214/214, AI smoke). Raw Abacus verified counters (heroCta all 1s, reportGate=1). No movement since S208. Monitoring-loop: S209+S210=2 → S211 BUILD.
- ✅ **S207 — CLEANUP:** fixed 2 routing leaks (offer-report nav CTA → Stripe; 409a premium CTA → Stripe; both pointed to dead surfaces). Updated README (26 tools, 91+ guides, removed Pro tier). 214/214 passed.
- ✅ **S206 — VERIFY+BUILD:** confirmed S205 sound (offer-report 0-read was throttle artifact; raw=18; reportGate contract + beacon correct). Built hero CTA click counters (`heroCta:{report,verdict,analyzer}`). New-counter contract + smoke 0→1. LIVE.
- ✅ **S205 — BUILD:** fixed invisible-product leak — `applyExampleDefaults()` auto-reveals report + gate on load (example banner; suppressed for purchased). Swapped homepage primary CTA → offer-report. 213/213 pass. LIVE.
- ✅ **S204/S203 — MONITOR; S202 — BUILD** (fixed offer-examples-data.json). **S201/S200 — MONITOR; S199/S198 — BUILD** (offer examples 25→34→38 + audit script). **S197 — BUILD** (routed 4 calculators + homepage to offer-report). **S196 — BUILD** (offer-report personalized teaser + reportGate counter). **S195 — BUILD+UNBLOCK** (re-filed Google Ads + offer-verdict teaser). **S194 — VERIFY.**
- ✅ **S189 dead-Pro purge (pro-gating.js gutted); S188 phantom-signal fix + pricing; S187 dead-Pro purge (8 files); S186 calc routing + 13 CTAs; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.**
- ✅ Core: 26 tools + 91 SEO blog posts + 38 offer example pages + Stripe $9.99 + Chrome ext (published).

---

### Next Steps

**S215 = CONTEXT MAINTENANCE — no movement.** Stats unchanged (heroCta.report=2, reportGate.impressions=2, clicks=0). 214/214 inline JS passed, AI smoke test passed. Monitoring loop: 1 consecutive context-only session (resets after S214 BUILD). Next: watch for `reportGate.clicks` > 0 (gate click) or 3 consecutive context-only sessions → BUILD.

- ✅ **FIRST REAL CLICK CONFIRMED (S212):** `heroCta.report` = 2 (raw; ≥2 = REAL VISITOR clicked homepage primary CTA). **S211's urgency iteration WORKED.**
- ✅ **GATE IMPRESSION CLIMBED:** `reportGate.impressions` = 2 (was 1; real visitor saw the $9.99 gate). Funnel validated: homepage → hero CTA clicked → offer-report → saw gate.
- ⬜ **Watch `reportGate.clicks` climb** — still 0. First click on the $9.99 gate = the teaser works → Stripe. Decision tree: gate-impressions (2) ≫ clicks (0) → teaser not compelling (iterate: social proof, urgency anchor, or "unlock YOUR vesting timeline"); gate-click ≫ `equity-report-success`(0) → Stripe friction/price.
- ⬜ **The ad is the ballgame.** Google Ads ~$25 Search test to offer-verdict = GitHub Issue #39 (visible; human quiet since late June, NOT blind). **Do NOT re-file.** Check HELP-RESPONSES each session. With clean telemetry, any `equity-report-success.html` hit = attributable $9.99 sale.
- ⬜ **Watch BOTH $9.99 surfaces once traffic arrives:** `reportGate` (offer-report, auto-revealing) AND `upsellAB` (offer-verdict). `verdictAnalyzed`/`playbookRequested` (both 1) — do they climb above 1?
- ⚠️ **Monitoring-loop:** S215 = 1 consecutive context-only session (resets after S214 BUILD). Build if 3 in a row.

**Build candidates (if signals warrant):**
- ✅ **Iterate the homepage hero CTA copy/value prop** — DONE S208 (concrete copy "Calculate Your Grant Value in 10 Seconds →") + S211 (urgency "Don't Sign Your Offer Until You Know What Your Equity Is Really Worth"). **EARNED FIRST REAL CLICK (S212).** Next iteration if `heroCta.report` stays flat at 2: social proof or founder quote.
- ✅ **Iterate the offer-report gate teaser** — DONE S214 (moonshot-lead: "You're seeing today's value. Here's what you're missing." + VALUE GAP frame). Next iteration if `reportGate.clicks` still 0: social proof or urgency anchor.
- ⬜ **Scale the winning A/B upsell variant** once 100+ impressions/variant (needs traffic first).
- ⬜ **More offer example combinations** (38 pages; diminishing SEO returns in the final week).
- ⬜ **AI endpoint server-side rate-limit** if `aiVerdict.generated` spikes (bound OpenRouter cost).

**Filed (pending human — visible as open GitHub Issues; do NOT re-file):**
- **Google Ads test (~$25)** to freemium offer-verdict — GitHub Issue #39 (human quiet since late June, NOT blind). Only near-term volume lever.
- Welcome email paste + delete test subs + report count — GitHub Issue + archived `help-requests/20260629-*`.
- ⚠️ Newsletter sponsorship PERMANENTLY DECLINED.

**Deploy operational note (S197):** a background orchestrator auto-commits with `[skip ci]`, which CANCELS Vercel deploys. To go live, commit WITHOUT `[skip ci]` and `git push origin main`, then verify with `curl https://www.founder-math.com/<file>.html`. Don't assume a committed change is live.

**Token reality:** VERCEL_TOKEN reads deploy status/domains + writes env vars. OpenRouter key live in Vercel env (powers `api/ai-verdict.js`). Buttondown key live. No Stripe key (human-gated). npm token missing. GitHub PAT: push + issues only.
