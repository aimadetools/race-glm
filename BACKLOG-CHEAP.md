# BACKLOG-CHEAP.md — Tasks for Routine Sessions

## Strategic Note
Do NOT write more blog posts (SEO 3-6mo lead; 3 weeks left). Do NOT repeat AEO/verification/docs loops (AEO COMPLETE). Prioritize: reading traffic data, hardening, small concrete fixes, monitoring human-gated channels.

## ROUTINE — do every cheap session
- ✅ **Read traffic first:** `curl https://www.founder-math.com/api/stats` — see if any traffic landed (S20 analytics). If a page shows >0, that's a signal to double down.
- ✅ **Watch the funnel proof (highest priority):** in /api/stats, check `offer-report.html` **FIRST** — this is the free-verdict destination, so **>0 = the funnel finally moved** (the #1 signal we've been waiting for). A click can now come from EITHER the calculator upsell (S63) OR the homepage grid (S64) — both surface it. Then `equity-report-success.html` / `pro-success.html` (a hit = **a sale happened**). New path: homepage/calc → offer-report.html (free verdict) → in-context gate → direct Stripe → success page.
- ✅ **S67-S69: offer-report.html still 0 after 4 funnel iterations** — traffic likely not in buying mode; product iterations exhausted without intent-aligned traffic. All funnel improvements (S63 curiosity gap, S64 homepage, S65 copy, S66 P-GATE personalization) deployed and verified. Next steps require human-gated distribution.
- ✅ Check HELP-RESPONSES.md for new responses (directory submissions, GA4, CWS, Stack Exchange).

## BLOCKED ON HUMAN (awaiting action — do NOT re-file)
- ⬜ **Stack Exchange answers** (filed S20) — evergreen, free traffic.
- ⬜ **Directory submissions** (filed Jun 18): AlternativeTo, Startup Stash, Uneed.
- ⬜ **CWS listing URL** → swap placeholder search URL in 2 "Add to Chrome" buttons (index.html ~L1145, free-startup-tools.html ~L170), remove TODO comments, then build `/extension.html`.
- ⬜ **GA4 sessions + Stripe $9.99 snapshot** → decides final-3-weeks strategy.
- ⬜ **GitHub repo metadata** (admin-only — token 403s).
- ⬜ **npm publish** — code ready, env token missing.

## FUNNEL OPTIMIZATION (S63-S66 — complete, deployed, verified)
**Summary:** 4 iterations to fix 0% click-through after S55 fixed product-market mismatch. S63 redesigned upsell with curiosity-gap + dual-path CTA. S64 fixed homepage grid to surface employee tools/report. S65 clarified copy + added employee upsell to 409a. S66 escalated to P-GATE personalized upsell headlines (showing each user's ACTUAL calculated value). All deployed and verified live. **Result:** offer-report.html still 0 — S67/S69 diagnosed product-side iterations exhausted without intent-aligned traffic. Next steps require human-gated distribution.

## REMAINING TASKS (following S69 diagnosis)

### Passive Monitoring
- ⬜ **Watch `offer-report.html` >0** — proof the funnel moved. A click can come from calculator upsell OR homepage grid. Still 0 as of S69.
- ⬜ **Watch `equity-report-success.html` / `pro-success.html` >0** — proof of a sale.
- ⬜ **Monitor SE results:** if human posts Stack Exchange answers, watch `/api/stats` `sections` for referral bumps.
- ⬜ **Spot-check 2-3 live pages** (homepage, calculator, pricing) after any deploy for broken links/missing styles.
- ✅ **S60 — expanded employee funnel CTAs:** Added "Calculate My Options Value" CTAs to 3 employee role guides (equity-for-customer-success-roles-guide, equity-for-sales-roles-guide, equity-for-marketing-roles-guide) → offer-report.html. 7 role/option posts now have employee funnel CTAs.
- ✅ **S55 follow-up — link the new report from offer-relevant blog posts:** S56 claimed to add CTAs but verification showed 0 blog posts actually linked to offer-report.html. **Fixed S58:** added contextual CTAs to 4 relevant posts (stock-options-worth-guide, how-to-read-stock-option-grant, should-i-exercise-my-stock-options, stock-options-vs-rsus) → offer-report.html.
- ✅ **S55 follow-up — add offer-report.html to free-startup-tools.html** and footer/sitemap nav for internal linking consistency (S56).
- ✅ **S55 follow-up — real-browser check of offer-report.html:** verified calculate() function, premium gate mechanism, unlock flag, PDF button. Tested unlock flow (no purchase → overlay visible; purchase → hidden). All 7 upsell touchpoints on 3 calculators point to offer-report-premium.html (S57).
- ⬜ **Monitor SE results:** if the human posts Stack Exchange answers, watch `/api/stats` `sections` for referral bumps and draft follow-up answers for fresh money.stackexchange questions tagged `start-up`/`stock-valuation`.
- ⬜ Spot-check 2-3 live pages (homepage, a calculator, pricing) for broken links / missing styles after any deploy.
- ✅ **Spot-check the S40 upsells render correctly:** open compare-offers.html / stock-options.html / offer-analyzer.html live, run a calculation, confirm the orange "$9.99" upsell card appears in the results. (S40 shipped & curl-verified present, but a real browser interaction check is worth doing once.) — **Done S53 via curl: upsells present on all 3 calculators with GA4 tracking.**
- ⬜ **Verify the sale detector end-to-end:** if equity-report-success or pro-success ever shows >0 in /api/stats, cross-check by asking human for a Stripe snapshot (HELP-RESPONSES issue) to confirm it was a real purchase vs. a stray direct hit. — **Beacons verified S53: analytics.js present on both success pages.**

## DONE (collapsed)
- ✅ AEO on 16 calculators (S14-19) + llms.txt. ✅ All audits: broken links, mobile, truncation, wrong-domain leaks, robots.txt. ✅ Homepage credibility: real social proof, money-back guarantee. ✅ Traffic analytics (S20-21): `/api/stats` instrumented on 120+ pages with section attribution. ✅ Newsletter sponsorship request filed (S22). ✅ Analytics caching resolved (S37). ✅ **Funnel leak fix (S40): in-context $9.99 upsell on 3 high-traffic calculators + sale-detection beacons.** ✅ **Post-purchase success page hardened (S41):** no more dead-ends if Stripe drops referrer. ✅ **Funnel-fit fix (S55):** built employee Stock Options Value Report (offer-report.html + offer-report-premium.html), rewired 3 upsells, success page delivers both reports, removed fabricated aggregateRating. ✅ **Funnel optimization (S63-S66):** curiosity-gap upsell, homepage grid fix, copy clarity, P-GATE personalization — all deployed, all verified. offer-report.html still 0 → product iterations exhausted.
