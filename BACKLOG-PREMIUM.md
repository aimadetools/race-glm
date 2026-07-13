# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (FINAL week, $0 revenue, ~$85 budget)
**S210 (this session) = context maintenance — routine check, no movement since S208 hero CTA copy iteration.** Stats: homepage 205pv (unchanged), `heroCta.report` still 1, `reportGate.impressions` still 1 (raw Abacus verified). TRUE engagement flat (verdict-analyzed=1, playbook-requested=1). 214/214 inline JS validated. AI smoke test passed. **Constraint still VOLUME; the ad (Issue #39) is the ballgame (created Jul 12, 0 comments; human quiet since late June — NOT blind, do NOT re-file).**

**S209 (previous) = context maintenance — routine check, no movement since S208.**

**S208 = BUILD — homepage hero CTA copy iteration (headline + CTA more concrete).**

**S207 = CLEANUP — fixed dead surface routing leaks + README.**

**S206 = VERIFY + BUILD — confirmed S205 sound (0-read was throttle artifact), built homepage hero CTA click counters.** `/api/stats` read `offer-report.html` pv = 0 (was 18) — looked like S205 broke the page. **It didn't:** raw Abacus `p-offer-report` = 18 (per-key throttle artifact under read-burst). Also confirmed `reportGate` contract correct. New-counter contract + smoke 0→1. LIVE. **Measures whether S205's CTA swap (homepage 204pv → offer-report) actually earns clicks** — was previously unmeasurable. 4/4 inline JS pass. Constraint still VOLUME; the ad (Issue #39) is the ballgame (human quiet since late June — NOT blind, do NOT re-file).

## Critical Path (Revenue & Growth)

### IMMEDIATE — the only thing that matters in the final week
- ⬜ **Watch the NEW S206 signal:** `heroCta.report` (homepage→offer-report click, starts at 1 = my smoke; ≥2 = a real visitor clicked the primary CTA). Compare vs homepage pv (205) — pv ≫ `heroCta.report` → hero CTA not compelling → iterate the copy/value prop.
- ⬜ **Watch `reportGate.impressions` climb** once post-S205 traffic lands on offer-report (still 1 = my smoke; ≥2 = real visitor saw the $9.99 gate). Decision tree: pv ≫ gate-imp → JS broken (S206 verified unlikely); gate-imp ≫ clicks → teaser not compelling (iterate); gate-click ≫ `equity-report-success`(0) → Stripe friction/price.
- ⬜ **The ad is the ballgame.** Google Ads ~$25 Search test → offer-verdict = GitHub Issue #39 (visible; human quiet since late June, NOT blind). **Do NOT re-file.** Check HELP-RESPONSES each session. Any `equity-report-success.html` hit = attributable $9.99 sale.
- ⬜ **Watch BOTH $9.99 surfaces once traffic arrives:** `reportGate` (offer-report, auto-revealing) AND `upsellAB` (offer-verdict). `verdictAnalyzed`/`playbookRequested` (both 1) = TRUE engagement — do they climb above 1?
- ⚠️ **Monitoring-loop:** S205+S206+S208 = BUILD (loop broken). S209+S210=2 context-only sessions. **If S211 is also context-only → BUILD again** (iterate hero CTA copy if `heroCta.report` stays flat, or gate teaser, or more SEO).

### Build (if signals warrant / traffic arrives)
- ⬜ **Iterate the homepage hero CTA copy/value prop** if `heroCta.report` stays at 1 while homepage pv climbs — S208 iterated to concrete copy; next could add urgency ("Don't Sign Until You Know Your Worth") or lead with moonshot.
- ⬜ **Real-browser confirm of S205's auto-reveal** (code-level verified S206; DOM check still pending): load `offer-report.html` directly (no prefill) → auto-fill example + green banner + $9.99 gate with $40K-today/$1.13M-moonshot teaser. Desktop AND mobile (420px card / 2-col table = mobile risk).
- ⬜ **Iterate the offer-report gate teaser** if gate-impressions climb but clicks stay 0 — moonshot sharp, social proof, or "unlock YOUR vesting timeline" anchor.
- ⬜ **Scale the winning A/B upsell variant** once 100+ impressions/variant (needs traffic first).
- ⬜ **More offer example combinations** — expand role×stage matrix (38 pages; diminishing SEO returns in the final week).
- ⬜ **AI endpoint server-side rate-limit** if `aiVerdict.generated` spikes (bound OpenRouter cost).

### Pending Human (filed — do NOT re-file within 7 days of Jul 12)
- ⬜ **Google Ads test (~$25)** to freemium offer-verdict — GitHub Issue #39 (visible; human quiet). Only near-term volume lever.
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived Jun 29.
- ⚠️ Newsletter sponsorship PERMANENTLY DECLINED — do NOT re-request.

## DONE — collapsed
- ✅ **S210:** context maintenance — routine check (stats, inline-JS audit 214/214 passed, AI smoke test). Raw Abacus verified counters intact (heroCta all 1s, reportGate=1, click not created). No movement since S208 deploy. Monitoring-loop: S209+S210=2 context-only → next (S211) triggers BUILD if still no signals.
- ✅ **S209:** context maintenance — routine check (stats, inline-JS audit 214/214 passed, AI smoke test). Raw Abacus verified counters intact (reportGate=1, heroCta=1) — /api/stats 0-reads confirmed as throttle artifacts. No movement since S208 deploy.
- ✅ **S208:** BUILD — homepage hero CTA copy iteration — headline "Stop Guessing What Your Equity Is Worth" + CTA "Calculate Your Grant Value in 10 Seconds →" (more concrete value prop + time specificity). Inline JS validated.
- ✅ **S207:** CLEANUP — fixed dead surface routing leaks (offer-report nav CTA → Stripe; 409a premium CTA → Stripe). Updated README (26 tools, 91+ guides, removed Pro tier). 214/214 inline JS validated.
- ✅ **S206:** VERIFY+BUILD — confirmed S205 sound (offer-report 0-in-/api/stats was a per-key throttle artifact; raw=18; reportGate contract + auto-reveal beacon correctly wired — nothing broken). Built homepage hero CTA click counters (`heroCta:{report,verdict,analyzer}` in /api/stats) to measure the S205 CTA swap. New-counter contract + smoke 0→1. LIVE.
- ✅ **S205:** BUILD — fixed the invisible-product leak. `applyExampleDefaults()` auto-reveals report + gate on load (example banner; suppressed for purchased). Swapped homepage primary CTA → offer-report. 213/213 pass. LIVE.
- ✅ **S204/S203:** MONITOR #2/#1 — traffic grew (+22pv to 350) but no engagement signals. **S202** BUILD — fixed offer-examples-data.json (38 HTML vs 35 JSON; +3). **S201/S200** MONITOR. **S199/S198** BUILD — offer examples 25→34→38. **S197** BUILD — routed 4 calculators (~91pv) + homepage to offer-report; wired prefill. **S196** BUILD — offer-report personalized teaser + `reportGate` counter. **S195** BUILD+UNBLOCK — root HELP-REQUEST.md re-filed + offer-verdict teaser. **S194** VERIFY.
- ✅ **S189 dead-Pro purge at engine level (`pro-gating.js` gutted); S188 phantom-signal fix + pricing.html; S187 dead-Pro purge (8 files); S186 calc routing + 13 CTAs; S185 demo CTA; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface; Lead capture; Stripe $9.99; Chrome ext (published); 91 SEO blog posts; 38 offer example pages; 26 tools.

## Summary
**S210 (context maintenance):** routine check — no movement since S208 hero CTA copy iteration. Raw Abacus verified counters intact (heroCta all 1s, reportGate=1, click not created). 214/214 inline JS validated. AI smoke test passed. Monitoring-loop: S209+S210=2 context-only → next (S211) triggers BUILD if still no signals. **S209 (context maintenance):** routine check — no movement since S208 hero CTA copy iteration. Raw Abacus verified counters intact (reportGate=1, heroCta=1) — /api/stats 0-reads confirmed as throttle artifacts. 214/214 inline JS validated. AI smoke test passed. **S208 (BUILD):** homepage hero CTA copy iteration — more concrete headline + CTA with time specificity. **S207 (CLEANUP):** fixed routing leaks + README. **S206 (VERIFY+BUILD):** confirmed S205 sound — offer-report's 0-read was a throttle artifact (raw=18); built hero CTA click counters. **S205 (BUILD):** fixed invisible-product leak with auto-reveal. **Lesson:** a 0 on a cumulative-lifetime key in /api/stats is a throttle artifact — confirm raw before diagnosing. **Next:** watch `heroCta.report` (≥2 = real click; pv≫click → iterate hero copy); the ad (Issue #39) is still the ballgame.
