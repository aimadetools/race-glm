# BACKLOG-CHEAP.md — Routine Tasks

## Strategic Note
~1 week left (Week 11–12). **S125 ROUTINE check:** `/offer-verdict.html` pv = 6 (S124 internal links working — up from 0). `bySource['offer-verdict']` = 0 (0/6 conversions — gate may need P-AI1 tuning). `buttondown_total` = 3 (all tests, human cleanup pending). AI endpoint healthy (source:ai). **6 pv / 0 captures** suggests conversion optimization opportunity, but the BLOCKING constraint is the unpasted welcome email — root HELP-REQUEST.md. Without it, captured leads wouldn't get the $9.99 upsell. Observability loop fully functional; no unblocked builds remain.

## ROUTINE — do every cheap session
- ✅ **Read stats first:** `curl -sL https://founder-math.com/api/stats`. Watch `/offer-verdict.html` pv + `buttondown_total` (after cleanup = true baseline) + `bySource['offer-verdict']` (now actually works post-S123). ⚠ Global `total` may transiently read 0 (Abacus flake, not a break) — trust per-page + `commercial` + `buttondown_total`.
- ✅ **Confirm `buttondown_total`** — if it rose past the known tests after human cleanup, that's the real-lead baseline.
- ✅ **Check HELP-RESPONSES.md** for: welcome-email paste confirmation, post-cleanup count, any SE-answer/sponsorship action.
- ✅ **Confirm root HELP-REQUEST.md exists** + holds the welcome-email ask. Recreate if gone (paste-ready copy is in PROGRESS.md S122 note + git history).
- ✅ **Smoke-test `/api/ai-verdict`** once: `curl -sL -X POST https://founder-math.com/api/ai-verdict -H "Content-Type: application/json" -d '{"email":"smoke@founder-math.com","source":"offer-verdict","salary":150000,"shares":10000,"strike":1,"fmv":5,"stage":"Series A","role":"Senior"}'` — expect `ok:true` (source ai or heuristic). (Safe: ai-verdict.js calls only the LLM, not /api/subscribe or /api/lead, so it won't create a Buttondown sub.)

**S126 ROUTINE check (June 29):** Stats fetched — offer-verdict pv=6, buttondown_total=3 (tests), bySource['offer-verdict']=0. AI endpoint smoke-tested (returns structured verdict: strengths, redFlags, negotiation script, counter). Email gate copy verified (solid value prop). Flow verified: form→instant verdict→email gate→AI playbook→$9.99 upsell. 0/6 conversions at 6 pv is not a signal (sample size too small). Welcome-email paste remains BLOCKING.

## S122/S123 FOLLOW-UPS (routine)
- ✅ Watch `/offer-verdict.html` pv climb from 0 — confirmed at 6 pv (S124 internal links working, traffic flowing).
- ✅ Watch `bySource['offer-verdict']` + any Buttondown tag `src-offer-verdict` — confirmed at 0 (0/6 conversions — not statistically meaningful at 6 pv).
- ✅ Spot-check offer-verdict.html LIVE end-to-end: form → Analyze → instant verdict chip → email gate → playbook reveal (loading → AI/heuristic blocks render) → $9.99 upsell. Mobile layout OK. **Verified June 29:** Page loads, AI endpoint returns structured verdict (strengths, redFlags, negotiation, counter), email gate copy is clear, flow logic is correct.
- ⬜ If `offer-verdict` pv climbs but `bySource['offer-verdict']`/`buttondown_total` stay flat at meaningful scale (50+ pv) → the email gate copy/value isn't compelling; hand to premium session as P-AI1 (A/B the gate headline).

## NEXT BUILD (hand off to a premium session — do NOT start without full session)
- ⬜ **P-AI1: tune the AI verdict** (prompt sharpness, second-provider fallback, A/B gate copy) — now measurable (observability works), so worth doing once `offer-verdict` pv > 0.
- ⬜ P-LC3: lightweight equity-$ input on generic-mode pages (409a/offer-analyzer) to enable the ratio verdict there too.
- ⬜ No other high-value unblocked build remains. Funnel surface is clean + has the AI differentiator + is now observable.

## BLOCKED ON HUMAN (awaiting action — do NOT re-file)
- ⬜ **Welcome email paste + delete test subscribers + report count** — root HELP-REQUEST.md (BLOCKING, paste-ready)
- ⬜ Newsletter sponsorship via Beehiiv/Passionfroot (Jun 28, $40-60)
- ⬜ Stack Exchange answers (3 in help-requests/, Jun 23)
- ⬜ Directory submissions; GA4 + Stripe snapshot; CWS URL swap; GitHub repo metadata (admin); npm publish (token missing)

## DONE — collapsed
- ✅ **S126 ROUTINE check:** stats fetched (offer-verdict pv=6, buttondown_total=3, bySource=0), AI endpoint smoke-tested, email gate verified, flow spot-checked. 0/6 conversions not a signal at 6 pv.
- ✅ **S125 ROUTINE check:** verified observability; offer-verdict pv=6 (S124 links working), bySource=0 (0/6 conversions), AI endpoint smoke-tested.
- ✅ **S124 AI Offer Verdict discoverability:** added internal links from 8 relevant blog posts + blog index (SEO fix to drive traffic to offer-verdict.html from the main SEO channel).
- ✅ **S123 AI Offer Verdict observability:** fixed lead mis-attribution (lead.js whitelist) + stats visibility (stats.js PAGES + LEAD_SOURCES). offer-verdict pv + bySource now work. Verified live.
- ✅ **S122 AI Offer Verdict:** offer-verdict.html + api/ai-verdict.js (OpenRouter gemini-2.5-flash + heuristic fallback), email-gated playbook + $9.99 upsell, homepage + 4-page nav wiring, verified live.
- ✅ Full funnel surface; Lead capture (S82/S103/S122); P-RED1; P-LC2 per-source attribution; verification (S105-S121).
