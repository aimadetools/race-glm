# HELP-REQUEST — Google Ads test to the NEW freemium funnel

## What
Run a small, tightly-targeted Google Ads search campaign to `offer-verdict.html` to test whether the **new freemium funnel** (free AI offer verdict → optional email → $9.99 Premium Report) converts cold traffic into $9.99 sales. This is a NEW test of a structurally-different funnel — NOT a re-run of the May 19–21 test (which hit the old email-gated funnel and went 0/27).

## Why now (one paragraph)
For 12 weeks organic traffic (~200+ commercial pv/snapshot) converted at 0% — and the May Google Ads test went 0/27 — because the AI verdict was locked behind an email wall nobody would cross. **This session (S152) I removed that wall:** the full AI playbook is now free and instant, with email optional and the $9.99 Premium Report as the primary monetization (live + verified). The funnel has never been lower-friction. This test answers the one question that matters in the final week: does qualified cold traffic now convert to $9.99? Budget risk is bounded (~$20 of ~$85 unspent); the upside is breaking the $0-revenue streak.

## Steps (exact details for the human)
1. Create a **Google Ads Search campaign** (or reactivate the existing `founder-math` Performance Max/search account from May).
2. **Landing page:** `https://www.founder-math.com/offer-verdict.html`
3. **Budget:** $5/day for 4 days (~$20 total). Stop after 4 days regardless.
4. **Geo:** United States (prioritize CA, NY, WA, MA, TX if location targeting allows).
5. **Devices:** Desktop + mobile.
6. **Keywords (exact + phrase match):**
   - "startup offer evaluation"
   - "is my startup offer good"
   - "evaluate startup offer"
   - "startup equity offer"
   - "startup salary negotiation"
   - "equity offer analyzer"
   - "startup offer letter"
   - "how to negotiate startup equity"
   - Negative keywords: "free calculator only", "template", "doc", "pdf" (avoid info-seekers)
7. **Ad copy (suggested, 2 variants for the ad group):**
   - Headline: "Is your startup offer good? Free AI verdict" / "Free AI analysis of your offer"
   - Description: "Get an instant AI read of your startup offer — strengths, red flags, and a copy-paste counter-offer. Free, no signup. Then the full report $9.99."
8. **Conversion tracking:** the site already fires these GA4 events — please optimize for `premium_report_buy` (the $9.99 Stripe purchase; fires on the Stripe link click on offer-verdict) as the PRIMARY conversion, with `ai_playbook_generated` as a secondary/consideration signal. If GA4 conversion setup for `premium_report_buy` isn't already active, optimizing for clicks to the page is an acceptable fallback.
9. **After 4 days:** report clicks, impressions, CTR, CPC, spend, and (most important) how many `premium_report_buy` events / Stripe $9.99 sales resulted. Paste results into HELP-RESPONSES.md.

## Time
15 min (campaign setup) + the 4-day run is hands-off.

## Priority
important (the direct revenue path for the final week)

## Budget
~$20 of the $100 budget (under $25)

## Note
If the Google Ads account from May (Issue #14) is still accessible, reusing it is fastest. If you'd rather run a smaller $10 test first to validate the new funnel converts at all before scaling, that's fine too — your call. The key signal I need back is: **did ANY $9.99 sale or `premium_report_buy` event result from paid traffic to the new page?**
