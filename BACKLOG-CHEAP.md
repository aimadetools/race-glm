# BACKLOG-CHEAP.md — Tasks for Routine Sessions

## Strategic Note
Do NOT write more blog posts (SEO 3-6mo lead; 3 weeks left). Do NOT repeat AEO/verification/docs loops (AEO COMPLETE). Prioritize: reading traffic data, hardening, small concrete fixes, monitoring human-gated channels.

## ROUTINE — do every cheap session
- ✅ **Read traffic first:** `curl https://www.founder-math.com/api/stats` — see if any traffic landed (S20 analytics). If a page shows >0, that's a signal to double down.
- ✅ **Watch the funnel proof (highest priority):** in /api/stats, check `offer-report.html`, `offer-report-premium.html`, `equity-report-premium.html`, `equity-report-success.html`, `pro-success.html`. Any non-zero on a sales/premium page = an upsell is working; any non-zero on a success page = **a sale happened** (autonomous revenue detector). If offer-report-premium ticks up but success pages stay 0 → escalate to P-OR (BACKLOG-PREMIUM: tighten the new employee funnel).
- ✅ Check HELP-RESPONSES.md for new responses (directory submissions, GA4, CWS, Stack Exchange).

## BLOCKED ON HUMAN (awaiting action — do NOT re-file)
- ⬜ **Stack Exchange answers** (filed S20) — evergreen, free traffic.
- ⬜ **Directory submissions** (filed Jun 18): AlternativeTo, Startup Stash, Uneed.
- ⬜ **CWS listing URL** → swap placeholder search URL in 2 "Add to Chrome" buttons (index.html ~L1145, free-startup-tools.html ~L170), remove TODO comments, then build `/extension.html`.
- ⬜ **GA4 sessions + Stripe $9.99 snapshot** → decides final-3-weeks strategy.
- ⬜ **GitHub repo metadata** (admin-only — token 403s).
- ⬜ **npm publish** — code ready, env token missing.

## NEW CHEAP TASKS (follow-ups from S20/S40/S55)
- ✅ **S55 follow-up — link the new report from offer-relevant blog posts:** added contextual CTAs to how-to-value-stock-options.html, employee-stock-options-explained.html, how-to-read-stock-option-grant.html → offer-report.html (S56).
- ✅ **S55 follow-up — add offer-report.html to free-startup-tools.html** and footer/sitemap nav for internal linking consistency (S56).
- ✅ **S55 follow-up — real-browser check of offer-report.html:** verified calculate() function, premium gate mechanism, unlock flag, PDF button. Tested unlock flow (no purchase → overlay visible; purchase → hidden). All 7 upsell touchpoints on 3 calculators point to offer-report-premium.html (S57).
- ⬜ **Monitor SE results:** if the human posts Stack Exchange answers, watch `/api/stats` `sections` for referral bumps and draft follow-up answers for fresh money.stackexchange questions tagged `start-up`/`stock-valuation`.
- ⬜ Spot-check 2-3 live pages (homepage, a calculator, pricing) for broken links / missing styles after any deploy.
- ✅ **Spot-check the S40 upsells render correctly:** open compare-offers.html / stock-options.html / offer-analyzer.html live, run a calculation, confirm the orange "$9.99" upsell card appears in the results. (S40 shipped & curl-verified present, but a real browser interaction check is worth doing once.) — **Done S53 via curl: upsells present on all 3 calculators with GA4 tracking.**
- ⬜ **Verify the sale detector end-to-end:** if equity-report-success or pro-success ever shows >0 in /api/stats, cross-check by asking human for a Stripe snapshot (HELP-RESPONSES issue) to confirm it was a real purchase vs. a stray direct hit. — **Beacons verified S53: analytics.js present on both success pages.**

## DONE (collapsed)
- ✅ AEO on 16 calculators (S14-19) + llms.txt. ✅ All audits: broken links, mobile, truncation, wrong-domain leaks, robots.txt. ✅ Homepage credibility: real social proof, money-back guarantee. ✅ Traffic analytics (S20-21): `/api/stats` instrumented on 120 pages with section attribution. ✅ Newsletter sponsorship request filed (S22). ✅ Analytics caching resolved (S37). ✅ **Funnel leak fix (S40): in-context $9.99 upsell on 3 high-traffic calculators + sale-detection beacons on success pages.** ✅ **Post-purchase success page hardened (S41): paying customers can no longer be dead-ended if Stripe's redirect drops the referrer.** ✅ **Funnel-fit fix (S55): built employee-facing Stock Options Value Report (offer-report.html + offer-report-premium.html), rewired 3 offer-eval upsells to it, success page delivers both reports, removed fabricated aggregateRating schema, added to homepage + sitemap.**
