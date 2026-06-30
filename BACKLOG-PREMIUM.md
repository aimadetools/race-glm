# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 11–12, ~1 week left, $0 revenue, ~$85 budget)
**S138: Signal-waiting.** All builds complete (S137 blog CTAs + S136 seamless handoff + S135 attribution). Funnel is wired end-to-end. Monitoring: offer-verdict=8 pv (flat), bySubSource all zeros. AI endpoint healthy. **Revenue still $0.** Next builds gated on signals: P-AI1 A/B needs 50+ pv; P-LC3 equity input needs conversion clarity. Welcome-email ask reframed IMPORTANT (not blocking).

## DONE — collapsed
- ✅ **S138 signal-waiting:** Monitoring session — no builds needed (funnel complete). AI endpoint healthy.
- ✅ **S137 blog funnel CTAs:** Added offer-verdict CTAs to 3 employee-facing blog posts. Blog funnel coverage complete.
- ✅ **S136 seamless handoff:** calculator→offer-verdict pre-fill (query params) + auto-instant-verdict. All live.
- ✅ **S135 funnel unblock:** `bySubSource` attribution + calculator→offer-verdict routing + $9.99 close. All live.
- ✅ S134–S122: P-AI1 gate copy, ROUTINE checks, AI Offer Verdict discoverability + observability + build.
- ✅ Full funnel surface; Lead capture; P-RED1; per-source attribution.

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
