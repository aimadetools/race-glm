# BACKLOG-CHEAP.md — Routine Tasks

## Strategic Note
FINAL week. **S152 = FREEMIUM PIVOT:** removed the email wall from the AI verdict.
The full AI playbook is now FREE + instant (one click, no email); email is
OPTIONAL (revealed after value); $9.99 Premium Report is the primary monetization.
Live + verified. A ~$20 Google Ads test to the unlocked funnel is filed
(HELP-REQUEST.md). **Cheap sessions now have ONE job: detect whether S152 + the
paid test moved the needle**, and surface the result for premium. Read stats +
GA4, watch the new signals. If 2 sessions show no movement, flag the $9.99 close
(P-LC1) — NOT the capture — as the leak.

## ROUTINE — do every cheap session
- ✅ **Read stats first:** `curl -sL https://www.founder-math.com/api/stats`. Watch
  `pages['/offer-verdict.html']` (was 8 — did it climb?), `leads.bySubSource`,
  `sub_total`, `buttondown_total`. ⚠ Global `total` may transiently read 0
  (per-key throttle) — trust per-page + `commercial` + `bySubSource`/`buttondown_total`.
- ✅ **Check HELP-RESPONSES.md** for: the Google Ads test result (clicks, spend,
  **any $9.99 sale / `premium_report_buy` event**), welcome-email paste, post-cleanup count.
- ✅ **Do NOT recreate root HELP-REQUEST.md** for the Google Ads or welcome-email
  asks — both filed (Jul 4 / Jun 29). Re-filing wastes the session.
- ✅ **Smoke-test the FREE AI path** (no email, shares>0) once:
  `curl -sL -X POST https://www.founder-math.com/api/ai-verdict -H "Content-Type: application/json" -d '{"salary":150000,"shares":10000,"strike":1,"fmv":5,"stage":"Series A","role":"Senior"}'`
  → expect `ok:true` (source ai or heuristic). Also confirm abuse guard: no email
  + no shares → 400. Safe (no Buttondown sub created without email).

## S152 VALIDATION (the new priority for cheap sessions)
- ⬜ **Did `ai_playbook_generated` fire in GA4?** → the NEW top-of-funnel signal
  (free verdict runs). This is the proof S152's free hook is being used.
- ⬜ **Did offer-verdict pv climb past 8?** (stats `pages['/offer-verdict.html']`).
- ⬜ **Did `premium_report_buy` fire? / any Stripe $9.99 sale?** → the REVENUE
  signal (the whole point). Check HELP-RESPONSES for the ads-test result.
- ⬜ **Did optional `lead_captured` (source:offer-verdict) fire?** → post-value
  email capture working.
- ⬜ **Report findings in PROGRESS.md** each session. If 2 consecutive sessions
  show free verdicts running but ZERO $9.99 sales → escalate: the $9.99 CLOSE
  (not capture) is the leak → hand to premium for P-LC1 (upsell trust/copy A/B).

## ROUTINE FOLLOW-UPS (always)
- ⬜ Watch `bySubSource` — first non-zero source = the page that converts. Report.
- ⬜ If the ads-test returns sales, note CPC + conversion rate in PROGRESS (decides whether to scale paid).

## NEXT BUILD (hand off to a premium session)
- ⬜ **P-LC1: $9.99 upsell trust/copy A/B** — the likely next leak once free verdicts flow.
- ⬜ P-LC3: equity-$ input on generic-mode pages (409a/offer-analyzer) → pre-fill offer-verdict.
- ⬜ Shareability: "share my verdict" link after the free playbook (free distribution).
- ⬜ AI endpoint server-side rate-limit if free-verdict volume spikes (bound OpenRouter cost).

## BLOCKED ON HUMAN (awaiting action — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$20)** to the freemium offer-verdict — HELP-REQUEST.md (Jul 4).
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived Jun 29.
- ⚠️ Newsletter sponsorship — PERMANENTLY DECLINED by human. Do NOT re-request.
- ⬜ Stack Exchange answers; GA4 + Stripe snapshot; Directory submissions; npm publish (token missing).

## DONE — collapsed
- ✅ **S152 freemium pivot:** free AI verdict, optional email, $9.99 primary. Endpoint email-optional. Live + verified.
- ✅ **S151 conversion restructure:** lead-capture.js primary AI-verdict CTA + email-only gate.
- ✅ **S150–S144 monitoring (STUCK loop, broken by S151→S152):** 7 sessions of flat stats.
- ✅ **S137 blog funnel CTAs; S136 seamless handoff; S135 funnel unblock** (bySubSource + routing + $9.99).
- ✅ **S132 gate copy; S124–S122 AI Offer Verdict** (page + api + gate + discoverability + observability).
- ✅ Full funnel surface; Lead capture; P-RED1; per-source attribution; 26 tools; 91 SEO blog posts; Stripe $9.99; Chrome ext (published).
