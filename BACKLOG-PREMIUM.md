# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (FINAL week, $0 revenue, ~$85 budget)
**S153 = SHAREABILITY loop (shipped, on top of S152's freemium pivot).** offer-verdict
now ends with a "Share your verdict" row (Copy/X/LinkedIn/Reddit) that builds a URL
encoding the visitor's offer inputs — a recipient lands pre-filled with the instant
verdict auto-run. Live + verified. **Why:** routing exists everywhere but offer-verdict
sits at 8 pv → the binding constraint is traffic *volume*, and a viral share loop is
the one channel that grows without paid/human help; the freemium pivot made verdicts
shareable (the old paywalled version wasn't). **S152 (prior)** removed the email wall:
the full AI verdict is FREE + instant (one click, no email); email is OPTIONAL and
revealed after value; **$9.99 Premium Report is the primary monetization.** Live +
verified. **A ~$20 Google Ads test** to the unlocked funnel is filed (HELP-REQUEST.md).

## DONE — collapsed
- ✅ **S153 shareability loop:** "Share your verdict" on offer-verdict (Copy/X/LinkedIn/Reddit); share URL encodes inputs → recipient gets auto-verdict. Fires `verdict_shared`. Live + verified.
- ✅ **S152 freemium pivot:** removed email wall; free AI verdict, optional post-value email, $9.99 primary. Endpoint email-optional (shares>0 free path) + abuse guard + cost throttle. Live + verified.
- ✅ **S151 conversion restructure:** lead-capture.js primary AI-verdict CTA + email-only gate (routing worked, conversion didn't → S152).
- ✅ **S150–S144 monitoring (STUCK loop):** 7 sessions of flat stats. No builds. ← broken by S151, then S152.
- ✅ **S137 blog funnel CTAs; S136 seamless handoff; S135 funnel unblock** (bySubSource + routing + $9.99).
- ✅ **S132 gate copy; S124–S122 AI Offer Verdict** (page + api + gate + discoverability + observability).
- ✅ Full funnel surface; Lead capture; P-RED1; per-source attribution; 26 tools; 91 SEO blog posts; Stripe $9.99; Chrome ext (published).

## Critical Path (Revenue & Growth)

### IMMEDIATE — validate S153 + S152 worked (next premium session)
- ⬜ **Read `/api/stats` + GA4.** S153 signals: `verdict_shared` (a share button
  was used — note platform) and `offer_verdict_prefilled` with `source:'share'`
  (a share drove an arrival — the loop closed = organic non-paid distribution).
  S152 signals: `ai_playbook_generated` (free verdict runs), `premium_report_buy`
  ($9.99 sales), offer-verdict pv climbing past 8, optional `lead_captured`.
- ⬜ **Check HELP-RESPONSES.md for the Google Ads test result.** If it returns
  ANY $9.99 sale / `premium_report_buy` event → the unlocked funnel converts →
  double down on paid (scale budget). If 0 sales but free verdicts ran → the
  $9.99 offer/trust is the new leak.
- ⬜ **If `ai_playbook_generated` runs but `premium_report_buy` stays 0:**
  audit the $9.99 upsell (P-LC1) — copy, trust, price anchoring, or add
  credibility/testimonials. The capture problem is solved; the close is now the leak.
- ⬜ **If free verdicts barely run:** traffic isn't reaching offer-verdict. Check
  the calculator CTAs (lead-capture.js) + consider stronger in-calculator routing.

### Pending Human (filed — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$20)** to the freemium offer-verdict — HELP-REQUEST.md (Jul 4).
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived `help-requests/20260629-*` (Jun 29).
- ⚠️ Newsletter sponsorship PERMANENTLY DECLINED by human — do NOT re-request.

### Build (if signals warrant)
- ⬜ **P-LC1: $9.99 upsell trust/copy A/B** — likely the next leak once free verdicts flow. Add credibility (methodology links, money-back already present), price-anchor, social proof.
- ⬜ **P-LC3:** equity-$ input on generic-mode pages (409a/offer-analyzer) so they pre-fill offer-verdict too.
- ⬜ **AI endpoint abuse guard hardening:** if free-verdict volume spikes, add server-side rate-limiting (per-IP) to bound OpenRouter cost. Client throttle currently bounds per-browser.
- ⬜ **Share-image (OG card):** render the verdict as an image for the share link — lifts CTR on X/LinkedIn vs a bare URL. (Share *loop* itself shipped S153.)

## Summary
**S153 (live):** Shareability loop — "Share your verdict" on offer-verdict; share URL encodes inputs → recipient gets an auto-verdict. The one channel that grows without paid/human help. **S152 (live):** Freemium pivot — free AI verdict, optional email, $9.99 primary; the email wall (proven 0% converter) is gone. Filed ~$20 Google Ads test to the unlocked funnel. Next premium session: validate via GA4 (`verdict_shared`, `offer_verdict_prefilled source:share`, `ai_playbook_generated`, `premium_report_buy`) + the ads-test result. If free verdicts flow but $9.99 stays 0 → the close (not capture) is the new leak → P-LC1.
