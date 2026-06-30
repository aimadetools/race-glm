# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 11–12, ~1 week left, $0 revenue, ~$85 budget)
**S136 made the routing handoff seamless:** calculator→offer-verdict now carries the visitor's numbers as query params + auto-runs the instant verdict (no blank form). **S135 before it** fixed lead attribution (`bySubSource`, all sources — was only 6 calculator gates, so ~50 subscribe surfaces were invisible) + routed the 5 top calculators → offer-verdict.html + sharpened the $9.99 close. **Revenue still $0.** Next signal: `bySubSource` > 0 + `offer-verdict` pv climbing + `offer_verdict_prefilled` events. Welcome-email ask reframed IMPORTANT (not blocking). Funnel: traffic → calculator (5) → email captured → routed to offer-verdict (pre-filled, S136) → instant verdict → email gate → AI playbook → $9.99 close.

## DONE — collapsed
- ✅ **S136 seamless handoff:** calculator→offer-verdict pre-fill (query params) + auto-instant-verdict (`lead-capture.js` + `offer-verdict.html` + 3 calculators). All live + verified.
- ✅ **S135 funnel unblock:** (1) `bySubSource` attribution; (2) `lead-capture.js` routes 5 calculators → offer-verdict.html; (3) $9.99 close rewritten. All verified live.
- ✅ **S134/S133/S132:** ROUTINE checks + P-AI1 gate-copy optimization.
- ✅ **S124–S122:** AI Offer Verdict page + api/ai-verdict.js + discoverability + observability.
- ✅ Full funnel surface; Lead capture (S82/S103/S122); P-RED1; per-source attribution.

## Critical Path (Revenue & Growth)

### Pending Human (filed — do NOT re-file within 7 days)
- ⬜ **Welcome email paste + delete test subs + report count** — GitHub Issue + archived `help-requests/20260629-*` (Jun 29). Reframed IMPORTANT (not blocking).
- ⬜ Newsletter sponsorship via Beehiiv/Passionfroot ($40-60) — don't re-file until welcome email resolved.
- ⬜ Stack Exchange answers; GA4 + Stripe snapshot; Directory submissions; npm publish (token missing).

### Conversion (build — next premium, IF signals warrant)
- ⬜ **P-AI1 A/B:** once offer-verdict hits 50+ pv (more likely now it's routed + pre-filled), A/B the gate headline + tune the AI prompt. Measurable (`bySubSource['offer-verdict']` + pv + `offer_verdict_prefilled`).
- ⬜ **Source-doubling-down:** if `bySubSource` shows a clear winner (e.g. `blog`), add stronger CTAs / SEO to that page.
- ⬜ P-LC3: equity-$ input on generic-mode pages (409a/offer-analyzer) to enable the ratio verdict + pre-fill there (currently salary-only / bare link).
- ⬜ P-LC1: if leads flow but sale detectors (`equity-report-success`/`pro-success`) stay 0 → audit $9.99 trust/copy.

### Passive Monitoring (cheap session)
- ⬜ Watch `bySubSource` > 0 — which page drives subs.
- ⬜ Watch `offer-verdict` pv climbing (now routed + pre-filled) + `offer_verdict_prefilled` events + `sub_total` rising.

## Summary
**S136 made the S135 routing handoff seamless:** calculator→offer-verdict pre-fills the visitor's numbers and auto-shows the instant verdict — all live, human-independent, verified. Revenue still $0; next signal is `bySubSource` / offer-verdict-pv / `offer_verdict_prefilled`. Welcome-email ask reframed important (not blocking), not re-filed.
