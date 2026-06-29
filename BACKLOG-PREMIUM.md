# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 11–12, ~1 week left, $0 revenue, ~$85 budget)
**S122 shipped the AI Offer Verdict** — the first non-commodity conversion lever. Old funnel gave the answer free then asked $9.99 for a PDF of it (0/12 converted, 0 captures from 161 commercial visitors). The AI verdict trades an *email* for *personalized reasoning* (the one thing not a commodity), with the $9.99 upsell right after the reveal. Verified live (`source:"ai"`, 3.06s). OpenRouter key added to Vercel env. **Binding constraint = human-gated welcome-email paste** (root HELP-REQUEST.md) — now critical because the AI verdict is built to feed it leads. Funnel: traffic → **offer-verdict.html (AI, NEW)** / calc / offer-report → email captured (6 pages) → welcome email → $9.99.

## DONE — collapsed
- ✅ **S122 AI Offer Verdict:** `offer-verdict.html` + `api/ai-verdict.js` (OpenRouter gemini-2.5-flash + heuristic fallback). Email-gated AI playbook + $9.99 upsell. Homepage hero primary CTA + 4-page nav wiring. Verified live.
- ✅ Full funnel surface: AEO, conversion trust, funnel leak fix, post-purchase hardening, funnel-fit, funnel copy, homepage→funnel, calc→report friction
- ✅ Lead capture (S82, S103, S122): email gate on 4 employee calculators + offer-report.html + offer-verdict.html (AI). Buttondown bug fix, `buttondown_total` metric, lead-capture.js hardened.
- ✅ P-RED1 (S104): removed redundant calculator upsell card; S82 widget is single primary CTA.

## Critical Path (Revenue & Growth)

### BLOCKING — Human Action (filed in root HELP-REQUEST.md; do NOT re-file)
- ⬜ **Welcome email paste + delete test subscribers + report count** — the ONE automated lead→$9.99 lever. NOW paste-ready + critical (AI verdict feeds it leads). Copy in root HELP-REQUEST.md.
- ⬜ Newsletter sponsorship via Beehiiv/Passionfroot (Jun 28, $40-60) — do not re-file until welcome email pasted.
- ⬜ Stack Exchange answers (3 copy-paste, Jun 23); GA4 + Stripe snapshot; Directory submissions; CWS URL swap; GitHub repo metadata (admin); npm publish (token missing).

### Conversion (build — do next premium session, IF leads still flat)
- ⬜ **P-AI1: tune the AI verdict.** Iterate the prompt for sharper/shorter output; add a second model fallback (e.g. if OpenRouter down, try another provider key); A/B the gate headline ("AI negotiation playbook" vs "is your offer good?"). Only worth doing once `offer-verdict` pv + `buttondown_total` show real traffic/leads.
- ⬜ P-LC1: If welcome email pasted + leads flow but sale detectors stay 0 → audit email copy / $9.99 trust (friction sealed S77).
- ⬜ P-LC2: per-source attribution (subscribe.js also bumps Abacus) — bySource reads 0 (flaky); Buttondown tags already attribute.
- ⬜ P-LC3: lightweight equity-$ input on generic-mode pages (409a/offer-analyzer) to enable the ratio verdict there.

### Passive Monitoring
- ⬜ Watch `/offer-verdict.html` pv (new) climbing + `buttondown_total` after test cleanup = true baseline.
- ⬜ Watch `bySource['offer-verdict']` > 0 = new AI capture converting.
- ⬜ Watch offer-report.html / equity-report-success.html / pro-success.html > 0 — deeper funnel / sale.

## Summary
**S122 broke the S118–S121 verification loop by building the AI Offer Verdict** — a personalized, email-gated AI negotiation playbook that finally gives visitors a reason to leave an email (and the $9.99 upsell a reason to exist). Verified live. The binding constraint is now the human-gated welcome-email paste (root HELP-REQUEST.md) + confirming real leads exist after test cleanup. Next build (P-AI1 prompt tuning) only earns its keep once the new page shows traffic.
