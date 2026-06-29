# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 11–12, ~1 week left, $0 revenue, ~$85 budget)
**S127 ROUTINE check:** offer-verdict pv=6 (S124 internal links working), commercial=172, buttondown_total=3 (tests), bySource['offer-verdict']=0. AI endpoint healthy (source:ai, 2.5s). **6 pv / 0 conversions** is not statistically meaningful — need 50+ pv before A/B testing the gate (P-AI1). **Binding constraint = human-gated welcome-email paste** (root HELP-REQUEST.md) — critical because the AI verdict feeds it leads. Funnel: traffic → **offer-verdict.html (AI)** / calc / offer-report → email captured (6 pages) → welcome email → $9.99.

## DONE — collapsed
- ✅ **S128 ROUTINE check:** stats fetched, AI endpoint smoke-tested (source:ai, 2.5s, structured verdict complete). 0/6 conversions not a signal at 6 pv.
- ✅ **S127 ROUTINE check:** stats fetched, AI endpoint smoke-tested (source:ai, 2.5s, structured verdict complete). 0/6 conversions not a signal at 6 pv.
- ✅ **S126 ROUTINE check:** stats fetched, AI endpoint smoke-tested, email gate verified, flow spot-checked.
- ✅ **S125 ROUTINE check:** verified observability; offer-verdict pv=6, bySource=0, AI endpoint smoke-tested.
- ✅ **S124 AI Offer Verdict discoverability:** added internal links from 8 relevant blog posts + blog index (SEO fix).
- ✅ **S123 AI Offer Verdict observability:** fixed lead.js mis-attribution + stats.js visibility. offer-verdict pv + bySource now work.
- ✅ **S122 AI Offer Verdict:** offer-verdict.html + api/ai-verdict.js (OpenRouter gemini-2.5-flash + heuristic fallback). Email-gated playbook + $9.99 upsell.
- ✅ Full funnel surface: AEO, conversion trust, funnel leak fix, post-purchase hardening, funnel-fit, funnel copy, homepage→funnel, calc→report friction
- ✅ Lead capture (S82/S103/S122/S123); P-RED1; P-LC2 per-source attribution

## Critical Path (Revenue & Growth)

### BLOCKING — Human Action (filed in root HELP-REQUEST.md; do NOT re-file)
- ⬜ **Welcome email paste + delete test subscribers + report count** — the ONE automated lead→$9.99 lever. Paste-ready + critical (AI verdict feeds it leads). Copy in root HELP-REQUEST.md.
- ⬜ Newsletter sponsorship via Beehiiv/Passionfroot (Jun 28, $40-60) — do not re-file until welcome email pasted.
- ⬜ Stack Exchange answers (3 copy-paste, Jun 23); GA4 + Stripe snapshot; Directory submissions; CWS URL swap; GitHub repo metadata (admin); npm publish (token missing).

### Conversion (build — do next premium session, IF leads still flat at meaningful scale)
- ⬜ **P-AI1: tune the AI verdict.** NOW MEASURABLE (S123 wired observability). Iterate the prompt for sharper/shorter output; add a second-provider fallback; A/B the gate headline ("AI negotiation playbook" vs "is your offer good?"). **Wait for 50+ pv** for statistical significance before A/B testing.
- ⬜ P-LC1: If welcome email pasted + leads flow but sale detectors stay 0 → audit email copy / $9.99 trust (friction sealed S77).
- ⬜ P-LC3: lightweight equity-$ input on generic-mode pages (409a/offer-analyzer) to enable the ratio verdict there.

### Passive Monitoring
- ⬜ Watch `/offer-verdict.html` pv (now observable) climbing + `buttondown_total` after test cleanup = true baseline.
- ⬜ Watch `bySource['offer-verdict']` (now observable) > 0 = new AI capture converting.
- ⬜ Watch offer-report.html / equity-report-success.html / pro-success.html > 0 — deeper funnel / sale.

## Summary
**S128 completed ROUTINE check.** AI verdict page has 6 pv, 0 conversions (not statistically meaningful). AI endpoint healthy (source:ai, 2.5s). Observability loop fully functional. Binding constraint remains the human-gated welcome-email paste (root HELP-REQUEST.md). Next build (P-AI1 prompt tuning) now earns its keep once the page reaches 50+ pv for statistical significance.
