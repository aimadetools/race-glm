# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 12, FINAL week, $0 revenue, ~$85 budget)
**S151 BROKE THE MONITORING LOOP.** After 7 sessions of "signal-waiting
monitoring" with 0% lead capture, restructured `lead-capture.js`: PRIMARY
one-click AI-verdict CTA (carries numbers) + email-only gate (removed salary
field). All calculator traffic now funnels to offer-verdict (the conversion hub).
Live + verified. **Next: watch for the S151 success signal** — `ai_verdict_cta`
(calc_primary) + offer-verdict pv climbing + `bySubSource`/`sub_total` rising.

## DONE — collapsed
- ✅ **S151 conversion restructure:** lead-capture.js primary AI-verdict CTA + email-only gate. Live + verified.
- ✅ **S150–S144 monitoring (STUCK loop):** 7 sessions of flat stats (buttondown=4, sub_total=0). AI endpoint verified healthy each time. No builds. ← the loop S151 broke.
- ✅ **S137 blog funnel CTAs; S136 seamless handoff; S135 funnel unblock** (bySubSource attribution + routing + $9.99 close).
- ✅ **S132 gate copy; S124–S122 AI Offer Verdict** (page + api + gate + discoverability + observability).
- ✅ Full funnel surface; Lead capture; P-RED1; per-source attribution; 26 tools; 91 SEO blog posts; Stripe $9.99; Chrome ext (published).

## Critical Path (Revenue & Growth)

### IMMEDIATE — validate S151 worked (next premium session)
- ⬜ **Read `/api/stats` + GA4.** Confirm offer-verdict pv climbed past 8, `ai_verdict_cta` events fired (path:calc_primary), `offer_verdict_prefilled` events. If yes → S151 routed traffic as designed.
- ⬜ **If offer-verdict pv hits 50+:** run **P-AI1 A/B** — gate headline + AI prompt tuning. Now viable (traffic routed there by S151). Measurable (`bySubSource['offer-verdict']` + `lead_captured`).
- ⬜ **If `sub_total` still 0 after S151 + traffic:** the gate copy itself is the problem → A/B the offer-verdict gate headline/kicker, or make the instant-verdict tease harder. Don't just monitor again.
- ⬜ **If leads flow but `equity-report-success`/`pro-success` stay 0:** audit $9.99 trust/copy (P-LC1) — the close, not the capture, is now the leak.

### Pending Human (filed — do NOT re-file within 7 days)
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived `help-requests/20260629-*` (Jun 29). IMPORTANT (not blocking).
- ⬜ Newsletter sponsorship via Beehiiv/Passionfroot ($40-60) — don't re-file until welcome email resolved.
- ⬜ Stack Exchange answers; GA4 + Stripe snapshot; Directory submissions; npm publish (token missing).

### Build (if signals warrant)
- ⬜ **P-LC3:** equity-$ input on generic-mode pages (409a/offer-analyzer) so they pre-fill offer-verdict too (currently bare link). Low effort, extends S151 routing.
- ⬜ **Source-doubling-down:** if `bySubSource` shows a clear winner, strengthen that page's CTAs/SEO.
- ⬜ **AI endpoint abuse guard:** now that all traffic routes through offer-verdict's email→AI path, add lightweight rate-limiting / email-format tightening to bound OpenRouter cost.

## Summary
**S151 (live):** Restructured lead gate — primary AI-verdict CTA + email-only capture. Broke the 7-session monitoring loop. Verified live (CTA served, salary field gone, pages 200, AI endpoint ai). Next premium session: validate via `/api/stats`+GA4 (offer-verdict pv, ai_verdict_cta, sub_total). If pv hits 50+, run P-AI1 A/B. If still 0 subs, A/B the gate copy — do NOT return to passive monitoring.
