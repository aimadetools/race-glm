# Google Ads Experiment Plan — FounderMath

**Date:** May 2026
**Total Budget:** $15 ($5/day x 3 days)
**Remaining startup budget after:** ~$75

---

## Campaign 1: "Startup Equity Calculator" (Search)

### Target Keywords

Organized by priority. Start with Group A (highest intent, most aligned with product). Add Group B if budget allows.

#### Group A — Primary (add first)

| Keyword                          | Est. CPC | Monthly Search Volume (US) | Search Intent           | Landing Page                        |
|----------------------------------|----------|----------------------------|-------------------------|-------------------------------------|
| equity dilution calculator       | $1.50-3.00 | 1,600-2,400              | Transactional (tool)    | /dilution.html                      |
| SAFE note calculator             | $1.00-2.50 | 880-1,300                | Transactional (tool)    | /safe.html                          |
| cap table calculator             | $2.00-4.00 | 1,000-1,600              | Transactional (tool)    | /cap-table.html                     |
| startup runway calculator        | $0.80-1.50 | 480-720                  | Transactional (tool)    | /runway.html                        |
| stock option calculator          | $1.50-3.50 | 2,400-3,600              | Transactional (tool)    | /stock-options.html                 |
| startup equity calculator        | $1.50-3.00 | 880-1,300                | Transactional (tool)    | / (homepage, all calculators)       |

#### Group B — Secondary (add if Group A performs)

| Keyword                                | Est. CPC | Monthly Search Volume (US) | Search Intent       | Landing Page                  |
|----------------------------------------|----------|----------------------------|----------------------|-------------------------------|
| how to calculate equity dilution       | $0.50-1.50 | 720-1,100                | Informational        | /blog/equity-dilution-guide.html |
| vesting schedule calculator            | $1.00-2.00 | 480-720                  | Transactional (tool) | /vesting.html                 |
| startup burn rate calculator           | $0.80-1.50 | 390-590                  | Transactional (tool) | /runway.html                  |
| how much are my stock options worth    | $0.50-1.00 | 390-720                  | Informational        | /stock-options.html           |
| equity split calculator                | $0.80-1.50 | 390-590                  | Transactional (tool) | /equity-split.html            |
| startup valuation calculator           | $1.50-3.00 | 590-880                  | Transactional (tool) | /valuation.html               |

#### Negative Keywords (add to every ad group)

`free`, `template`, `excel`, `spreadsheet`, `course`, `book`, `pdf download`, `app`, `software management`, `carta`, `pulley`

These filter out people looking for spreadsheets, courses, or competitors -- not interactive calculators.

---

### Ad Copy (3 Variations)

#### Ad Variation 1: "Free & Instant" (best for transactional keywords)

**Headline 1 (30 chars):**
`Free Equity Calculator`

**Headline 2 (30 chars):**
`See Your Dilution Visualized`

**Headline 3 (30 chars):**
`No Signup Required`

**Description 1 (90 chars):**
`Interactive startup equity calculators. See dilution, SAFE notes, and runway instantly.`

**Description 2 (90 chars):**
`Free. No signup. Drag sliders and watch your equity change in real-time. Try it now.`

**Display URL:**
`founder-math.com/Calculator`

**Landing page:** Dynamic -- send each keyword to its matching calculator page (e.g., "SAFE note calculator" -> /safe.html). For generic keywords, send to / (homepage).

---

#### Ad Variation 2: "Founder Pain Point" (best for informational keywords)

**Headline 1 (30 chars):**
`Confused About Your Equity?`

**Headline 2 (30 chars):**
`Free Visual Calculators`

**Headline 3 (30 chars):**
`Understand Before You Sign`

**Description 1 (90 chars):**
`Stop guessing about dilution, SAFE notes, and vesting. Free calculators for founders.`

**Description 2 (90 chars):**
`Join thousands of founders who use FounderMath to negotiate better deals. Try free.`

**Display URL:**
`founder-math.com`

**Landing page:** / (homepage) for broad terms; /blog/equity-dilution-guide.html for "how to calculate" queries (then the blog post links to the calculator).

---

#### Ad Variation 3: "Urgency / Speed" (best for mobile, in-the-moment searches)

**Headline 1 (30 chars):**
`Equity Math in 30 Seconds`

**Headline 2 (30 chars):**
`Free Startup Calculator`

**Headline 3 (30 chars):**
`Used by Thousands of Founders`

**Description 1 (90 chars):**
`Don't sign a term sheet without understanding your dilution. Free calculator, no signup.`

**Description 2 (90 chars):**
`SAFE notes, cap tables, runway, vesting -- 10 free calculators. Get answers in 30 sec.`

**Display URL:**
`founder-math.com/Free`

**Landing page:** / (homepage)

---

### Campaign Settings

| Setting               | Value                                         |
|-----------------------|-----------------------------------------------|
| Campaign type         | Search (Google Search Network only, no Display/Shopping partners) |
| Bidding strategy      | Maximize Clicks (for experiment -- let Google optimize within budget) |
| Daily budget          | $5.00/day                                     |
| Duration              | 3 days (Monday-Wednesday)                     |
| Total spend           | ~$15                                          |
| Geographic targeting  | United States only                            |
| Language              | English                                       |
| Devices               | All (Desktop + Mobile + Tablet)               |
| Audience              | No demographic restrictions (founders are diverse) |
| Ad rotation           | Rotate evenly (for A/B testing during experiment) |
| Ad extensions         | Sitelink extensions (link to top 4 calculators) |
|                       | Callout extensions: "Free", "No Signup", "10 Calculators", "Export to PDF" |

#### Ad Schedule

Run Monday through Wednesday. Reasoning:
- Monday-Wednesday has highest B2B/search engagement
- Founders search for equity tools during work, not weekends
- 3 days gives enough data without burning budget
- If results are promising, re-run the following Mon-Wed

#### Sitelink Extensions (add all 4)

1. `Equity Dilution` -> /dilution.html
2. `SAFE Note Converter` -> /safe.html
3. `Runway Calculator` -> /runway.html
4. `Stock Options` -> /stock-options.html

---

### Measurement Plan

#### What to Track

Set up Google Ads conversion tracking for these events:

| Event                    | Priority | How to Track                          | Value      |
|--------------------------|----------|----------------------------------------|------------|
| Calculator interaction   | Primary  | Event trigger on first slider drag     | $0 (engagement) |
| Pro upgrade page visit   | Primary  | Pageview on /pricing.html or /pro-success.html | $19 |
| Newsletter signup        | Secondary| Form submission on any subscribe form  | $5 (estimated LTV contribution) |
| Scenario save            | Secondary| "Save" button click                    | $2 |
| PDF/PNG export           | Secondary| Export button click                    | $2 |
| Time on page > 2 min     | Signal   | GA4 event                              | $0 |
| Bounce rate < 40%        | Signal   | GA4 metric                             | $0 |

#### Implementation Notes

- Add Google Ads conversion tracking tag to site (global site tag in `<head>`)
- Add event snippets to calculator interaction points (slider drag, save, export)
- Link Google Ads to GA4 for behavioral data
- Use UTM parameters: `?utm_source=google&utm_medium=cpc&utm_campaign=equity_calculator&utm_content={ad_variation}`

#### Key Metrics Dashboard

Track these daily during the experiment:

| Metric                  | Target           |
|--------------------------|------------------|
| Impressions              | 500-2,000 total  |
| Clicks                   | 30-100 total     |
| CTR                      | > 3%             |
| Avg CPC                  | < $3.00          |
| Bounce rate              | < 50%            |
| Calculator interactions  | > 20% of clicks  |
| Cost per engagement      | < $5.00          |

#### Success Criteria

**Minimum viable signal (worth continuing at $5/day ongoing):**
- CTR > 2% on at least one ad variation
- Bounce rate < 60%
- At least 10 calculator interactions from paid traffic
- At least 1 newsletter signup or pricing page visit

**Strong signal (worth increasing budget to $10-15/day):**
- CTR > 4% on any keyword
- Bounce rate < 40%
- 20+ calculator interactions
- 2+ pricing page visits or newsletter signups
- Avg CPC < $2.00

**Kill criteria (stop and reassess):**
- CTR < 1% across all ads
- Bounce rate > 75%
- Zero calculator interactions after 3 days
- Avg CPC > $5.00 (too expensive for this budget)

#### Post-Experiment Actions

- **If strong signal:** Run Campaign 2 (retargeting) the following week. Increase daily budget to $10/day.
- **If minimum signal:** Optimize -- pause worst-performing keywords, double down on best. Run another 3-day test.
- **If kill:** Pause. Revisit keyword strategy. Consider that SEO/content may be the better channel for this product at this stage.

---

## Campaign 2: Retargeting ($5 remaining budget, optional)

**Only run this if Campaign 1 shows minimum viable signal.**

### Setup

| Setting               | Value                                         |
|-----------------------|-----------------------------------------------|
| Campaign type         | Display / Performance Max                     |
| Budget                | $5 total (one day, or $1.67/day for 3 days)   |
| Target audience       | All site visitors from Campaign 1 who did NOT interact with a calculator or visit pricing |
| Membership duration   | 30 days                                       |
| Frequency cap         | 3 impressions/day/user                        |
| Placements            | Google Display Network (auto)                 |

### Retargeting Ad Copy

**Responsive Display Ad:**

**Headlines (select from):**
- `Still Thinking About Your Equity?`
- `Your Dilution Questions, Answered`
- `Free Startup Calculator`
- `Don't Guess -- Calculate`

**Descriptions:**
- `You visited FounderMath but didn't try the calculator. It takes 30 seconds and it's completely free.`
- `See exactly how dilution, SAFE notes, and vesting affect your ownership. Free, no signup.`

**Images:**
- Use OG images already on the site (og-dilution.svg, og-safe.svg, og-runway.svg)
- Create a simple 1200x628 banner: "Free Equity Calculators for Founders" with FounderMath logo

**Landing page:** / (homepage) with the live demo section visible

### Retargeting Success Criteria

- CTR > 0.5% (display ads have lower CTR than search)
- At least 1 calculator interaction from retargeted visitors
- If zero engagement from retargeting after $5 spend, stop and do not continue

---

## Budget Summary

| Item                    | Amount    |
|-------------------------|-----------|
| Campaign 1 (Search)     | $15.00    |
| Campaign 2 (Retargeting)| $5.00     |
| **Total**               | **$20.00**|
| Remaining startup budget| ~$70.00   |

---

## Pre-Launch Checklist

Before turning on Campaign 1:

- [ ] Google Ads account created and billing set up
- [ ] Conversion tracking tag added to site `<head>` on all pages
- [ ] Event tracking on calculator interactions (slider drag)
- [ ] GA4 linked to Google Ads
- [ ] UTM parameters appended to all destination URLs
- [ ] All landing pages load fast on mobile (< 3 seconds)
- [ ] Negative keyword list added
- [ ] Ad extensions (sitelinks + callouts) configured
- [ ] Ad copy reviewed for character limits
- [ ] Budget cap confirmed at $5/day with no overrun
- [ ] Campaign set to "Rotate evenly" (not "Optimize")
- [ ] Start date set to next Monday

---

## Keyword-to-Landing-Page Mapping

For the final URL of each keyword, use this mapping so users land on the most relevant calculator:

| Keyword Group              | Final URL                                    |
|---------------------------|----------------------------------------------|
| equity dilution calculator | `https://founder-math.com/dilution.html`     |
| how to calculate equity dilution | `https://founder-math.com/blog/equity-dilution-guide.html` |
| SAFE note calculator      | `https://founder-math.com/safe.html`         |
| cap table calculator      | `https://founder-math.com/cap-table.html`    |
| startup runway calculator | `https://founder-math.com/runway.html`       |
| startup burn rate calculator | `https://founder-math.com/runway.html`     |
| stock option calculator   | `https://founder-math.com/stock-options.html`|
| how much are my stock options worth | `https://founder-math.com/stock-options.html` |
| startup equity calculator | `https://founder-math.com/`                  |
| vesting schedule calculator | `https://founder-math.com/vesting.html`     |
| equity split calculator   | `https://founder-math.com/equity-split.html` |
| startup valuation calculator | `https://founder-math.com/valuation.html`   |

Append UTM to all: `?utm_source=google&utm_medium=cpc&utm_campaign=equity_calculator&utm_term={keyword}`
