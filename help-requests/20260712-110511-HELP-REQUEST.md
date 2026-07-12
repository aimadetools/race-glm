# HELP-REQUEST — Google Ads Search test to the freemium funnel (FINAL-WEEK revenue lever)

> ⚠️ **This is at the ROOT (HELP-REQUEST.md) — please read.** The prior versions sat in `help-requests/` and were never seen (HELP-RESPONSES shows nothing pending). This is the **only remaining lever to break $0 revenue in the final week.**

## What
Run a tightly-targeted Google Ads **Search** campaign to `offer-verdict.html` to test whether the freemium funnel (free instant AI offer verdict → optional email → **$9.99 Premium Equity Report**) converts high-intent search traffic into a sale. This is a **structurally-different funnel** from the May 19–21 test (which hit the old email-gated page and went **0/27**). The email wall is gone — the full AI verdict is now free and instant, so this is the real test of whether the product converts.

## Why this is THE move (short)
12 weeks, $0 revenue. Organic traffic is ~346 lifetime commercial pageviews — too thin to ever convert on its own, and it mostly hits calculators, not the monetized funnel (`offer-verdict.html` has only 9 lifetime views). **Qualified paid search traffic ("is my startup offer good") is 10–50× more likely to convert than cold organic.** This answers the one question that decides the race: does the working funnel produce a $9.99 sale when real, motivated buyers reach it? Telemetry is now clean (I fixed my own smoke tests from inflating counters), so any sale will be cleanly attributable via the `/equity-report-success.html` hit.

## Steps (exact details)
1. **Reuse the existing `founder-math` Google Ads account** from May (Issue #14) if still open. Otherwise create a new **Search** campaign (not Performance Max — we want keyword control).
2. **Landing page:** `https://www.founder-math.com/offer-verdict.html`
3. **Budget:** $5/day, **stop after 5 days (~$25) or sooner if a $9.99 sale lands.** (~$25 of the ~$85 unspent budget. A $10 2-day validation first is fine too — your call.)
4. **Geo:** United States (prioritize CA, NY, WA, MA, TX).
5. **Devices:** Desktop + mobile.
6. **Keywords (exact + phrase match):**
   - "is my startup offer good" · "startup offer evaluation" · "evaluate startup offer"
   - "startup equity offer" · "startup offer letter" · "equity offer analyzer"
   - "how to negotiate startup equity" · "startup salary negotiation"
   - **Negatives:** free, template, doc, pdf, example, calculator only
7. **Ad copy (2 variants):**
   - **H:** "Is your startup offer good? Free AI verdict" / **D:** "Instant AI read of your offer — strengths, red flags, and a copy-paste counter-offer. Free, no signup. Full report $9.99."
   - **H:** "Free AI startup offer analysis" / **D:** "Enter your numbers, get an instant verdict + negotiation script. No email needed. Optional Premium Report $9.99."
8. **Conversion tracking:** optimize for the **$9.99 Stripe purchase**. The "See my full report — $9.99 →" button fires GA4 `upsell_clicked`; the Stripe success redirect hits `/equity-report-success.html`. If GA4 purchase conversion isn't set up, optimize for clicks to the page as a fallback.
9. **Report back** (paste into HELP-RESPONSES.md): clicks, impressions, CTR, CPC, total spend, and — **most important — number of $9.99 sales / `equity-report-success.html` hits from the run.**

## Time
15 min setup + 5-day hands-off run.

## Priority
**blocking** — this is the direct revenue path for the final week.

## Budget
~$25 of the $100 budget (under $25). The key signal: **did ANY $9.99 sale result from paid traffic to the page?** One sale breaks $0 and proves the model.
