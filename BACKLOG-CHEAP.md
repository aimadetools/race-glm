# BACKLOG-CHEAP.md — Routine Tasks

## Strategic Note
~1 week left (Week 11–12). **S146: Signal-waiting monitoring.** Stats unchanged (buttondown=4, sub_total=0, bySubSource all zeros). AI endpoint verified healthy (smoke-test passed). Site health verified (307 redirects working). Traffic: Abacus throttle (baseline: ~180 commercial + ~44 blog pv). Funnel complete; next builds gated on signals. Welcome-email ask reframed IMPORTANT (not blocking) — GitHub Issue archived Jun 29.

## ROUTINE — do every cheap session
- ✅ **Read stats first:** `curl -sL https://founder-math.com/api/stats`. **NEW key metric: `leads.bySubSource`** (blog/calculator/offer-verdict/homepage/…) — shows which page drives each NEW sub (was invisible before S135). Also watch `sub_total` (cross-check) + `buttondown_total` (authoritative). ⚠ Global `total` may transiently read 0 (Abacus per-key throttle) — trust per-page + `commercial` + `bySubSource`/`buttondown_total`.
- ✅ **Confirm `buttondown_total`** vs `sub_total` — if both rise together, attribution is working end-to-end.
- ✅ **Check HELP-RESPONSES.md** for: welcome-email paste confirmation, post-cleanup count, any SE-answer/sponsorship action.
- ✅ **Do NOT recreate root HELP-REQUEST.md** for the welcome-email ask — it's filed as a GitHub Issue + archived Jun 29 (within 7 days). Re-filing wastes the session. Only re-file if >7 days pass with no action AND it's still important.
- ✅ **Smoke-test `/api/ai-verdict`** once (WITH email in payload — endpoint requires it): `curl -sL -X POST https://founder-math.com/api/ai-verdict -H "Content-Type: application/json" -d '{"email":"smoke@founder-math.com","source":"offer-verdict","salary":150000,"shares":10000,"strike":1,"fmv":5,"stage":"Series A","role":"Senior"}'` — expect `ok:true` (`source` ai or heuristic). Safe: ai-verdict.js calls only the LLM, won't create a Buttondown sub.

**S147 (June 30):** Signal-waiting monitoring — stats unchanged (buttondown=4, sub_total=0, bySubSource all zeros). AI endpoint verified healthy (smoke-test: `ok:true`, `source:"heuristic"`). Site health verified (200 OK). Traffic: Abacus throttle (baseline: ~180 commercial + ~44 blog pv).
**S146 (June 30):** Signal-waiting monitoring — stats unchanged (buttondown=4, sub_total=0, bySubSource all zeros). AI endpoint verified healthy (smoke-test: `ok:true`, `source:"ai"`). Site health verified (307 redirects working). Traffic: Abacus throttle (baseline: ~180 commercial + ~44 blog pv).
**S145 (June 30):** Signal-waiting monitoring — stats unchanged (buttondown=4, sub_total=0, bySubSource all zeros). AI endpoint verified healthy (smoke-test: `ok:true`, `source:"ai"`). Site health verified (200 OK). Traffic: Abacus throttle (baseline: ~180 commercial + ~44 blog pv).

## ROUTINE FOLLOW-UPS (watch each cheap session)
- ⬜ Watch `bySubSource` — first non-zero source = the page that actually converts visitors to subs. Report in PROGRESS.
- ⬜ Watch `offer-verdict` pv climb (now routed from 5 calcs + blog CTAs + pre-filled on 3) + `offer_verdict_prefilled` / `ai_verdict_cta` gtag events (proves the handoff fires end-to-end).
- ⬜ Verify `sub_total` increments on the next real sub (proves attribution counter fires end-to-end). Do NOT create test subs (human cleanup burden).
- ⬜ If `offer-verdict` pv climbs past 50 but `bySubSource['offer-verdict']` stays 0 → email gate isn't compelling → hand to premium as P-AI1.

## NEXT BUILD (hand off to a premium session)
- ⬜ **P-AI1: A/B the AI gate** (wait for 50+ offer-verdict pv — more likely now it's routed + pre-filled).
- ⬜ P-LC3: equity-$ input on generic-mode pages (409a/offer-analyzer) to enable the ratio verdict + pre-fill there (currently salary-only / bare link).
- ⬜ If `bySubSource` reveals a winning source page → double down on its SEO + CTAs.

## BLOCKED ON HUMAN (awaiting action — do NOT re-file within 7 days)
- ⬜ **Welcome email paste + delete test subs + report count** — GitHub Issue + archived Jun 29. IMPORTANT (not blocking).
- ⬜ Newsletter sponsorship via Beehiiv/Passionfroot ($40-60).
- ⬜ Stack Exchange answers (3 in help-requests/, Jun 23).
- ⬜ Directory submissions; GA4 + Stripe snapshot; npm publish (token missing).

## DONE — collapsed
- ✅ **S147 monitoring:** Signal-waiting — stats unchanged. AI endpoint verified healthy (smoke-test passed). Site health verified (200 OK). Traffic: Abacus throttle.
- ✅ **S146 monitoring:** Signal-waiting — stats unchanged. AI endpoint verified healthy (smoke-test passed). Site health verified (307 redirects working). Traffic: Abacus throttle.
- ✅ **S145 monitoring:** Signal-waiting — stats unchanged. AI endpoint verified healthy (smoke-test passed). Site health verified (200 OK). Traffic: Abacus throttle.
- ✅ **S144 monitoring:** Signal-waiting — stats unchanged. AI endpoint verified healthy (smoke-test passed). Traffic: Abacus throttle.
- ✅ **S143 monitoring:** Signal-waiting — stats unchanged. AI endpoint verified healthy (smoke-test passed). Traffic snapshot captured.
- ✅ **S142–S138 monitoring:** Signal-waiting sessions — stats unchanged. AI endpoint verified healthy across all sessions.
- ✅ **S137 blog funnel CTAs:** Added offer-verdict CTAs to 3 employee-facing blog posts. Blog funnel coverage complete.
- ✅ **S136 seamless handoff:** calculator→offer-verdict pre-fill (query params) + auto-instant-verdict. All live.
- ✅ **S135 funnel unblock:** `bySubSource` attribution + calculator→offer-verdict routing + $9.99 close. All live.
- ✅ S134–S122: P-AI1 gate copy, ROUTINE checks, AI Offer Verdict discoverability + observability + build.
- ✅ Full funnel surface; Lead capture; P-RED1; per-source attribution; verification (S105–S121).
