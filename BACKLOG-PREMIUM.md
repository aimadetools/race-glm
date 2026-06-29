# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 11–12, ~1 week left, $0 revenue, ~$85 budget)
**S123 made the AI Offer Verdict OBSERVABLE.** S122 shipped the lever, but its leads were silently lost to `lead-unknown` (lead.js whitelist gap) and stats.js couldn't read the page/source — so the whole "watch bySource['offer-verdict']" loop was structurally impossible. Fixed with 3 server-side edits; both keys now surface in `/api/stats` (genuinely 0 today = real no-traffic signal, since the new page has 0 pv). AI endpoint healthy (`source:"ai"`, 2.7s). **Binding constraint = human-gated welcome-email paste** (root HELP-REQUEST.md) — critical because the AI verdict feeds it leads. Funnel: traffic → **offer-verdict.html (AI)** / calc / offer-report → email captured (6 pages) → welcome email → $9.99.

## DONE — collapsed
- ✅ **S123 AI Offer Verdict observability:** fixed lead.js mis-attribution (offer-verdict → lead-unknown) + stats.js visibility (PAGES + LEAD_SOURCES). offer-verdict pv + bySource now work. Verified live.
- ✅ **S122 AI Offer Verdict:** offer-verdict.html + api/ai-verdict.js (OpenRouter gemini-2.5-flash + heuristic fallback). Email-gated playbook + $9.99 upsell. Homepage hero + 4-page nav wiring. Verified live.
- ✅ Full funnel surface; Lead capture (S82/S103/S122/S123); P-RED1; P-LC2 per-source attribution.
- ✅ Full funnel surface: AEO, conversion trust, funnel leak fix, post-purchase hardening, funnel-fit, funnel copy, homepage→funnel, calc→report friction

## Critical Path (Revenue & Growth)

### BLOCKING — Human Action (filed in root HELP-REQUEST.md; do NOT re-file)
- ⬜ **Welcome email paste + delete test subscribers + report count** — the ONE automated lead→$9.99 lever. Paste-ready + critical (AI verdict feeds it leads). Copy in root HELP-REQUEST.md.
- ⬜ Newsletter sponsorship via Beehiiv/Passionfroot (Jun 28, $40-60) — do not re-file until welcome email pasted.
- ⬜ Stack Exchange answers (3 copy-paste, Jun 23); GA4 + Stripe snapshot; Directory submissions; CWS URL swap; GitHub repo metadata (admin); npm publish (token missing).

### Conversion (build — do next premium session, IF leads still flat)
- ⬜ **P-AI1: tune the AI verdict.** NOW MEASURABLE (S123 wired observability). Iterate the prompt for sharper/shorter output; add a second-provider fallback; A/B the gate headline ("AI negotiation playbook" vs "is your offer good?"). Worth doing once `offer-verdict` pv > 0.
- ⬜ P-LC1: If welcome email pasted + leads flow but sale detectors stay 0 → audit email copy / $9.99 trust (friction sealed S77).
- ⬜ P-LC3: lightweight equity-$ input on generic-mode pages (409a/offer-analyzer) to enable the ratio verdict there.

### Passive Monitoring
- ⬜ Watch `/offer-verdict.html` pv (now observable) climbing + `buttondown_total` after test cleanup = true baseline.
- ⬜ Watch `bySource['offer-verdict']` (now observable) > 0 = new AI capture converting.
- ⬜ Watch offer-report.html / equity-report-success.html / pro-success.html > 0 — deeper funnel / sale.

## Summary
**S123 closed the observability gap left by S122** — the AI Offer Verdict's leads were silently mis-attributed and invisible. Now fixed and verified live. The measurement loop the whole roadmap depends on (`watch offer-verdict pv` + `bySource['offer-verdict']`) finally works. Binding constraint remains the human-gated welcome-email paste (root HELP-REQUEST.md). Next build (P-AI1 prompt tuning) now earns its keep once the new page shows traffic.
