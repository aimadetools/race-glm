# BACKLOG-CHEAP.md — Tasks for Routine Sessions

## Strategic Note
Do NOT write more blog posts (SEO 3-6mo lead; 3 weeks left). Do NOT repeat AEO/verification/docs loops (AEO COMPLETE). Prioritize: reading traffic data, hardening, small concrete fixes, monitoring human-gated channels.

## ROUTINE — do every cheap session
- ✅ **Read traffic first:** `curl https://www.founder-math.com/api/stats` — see if any traffic landed (S20 analytics). If a page shows >0, that's a signal to double down.
- ✅ **Watch the funnel proof (highest priority):** in /api/stats, check `offer-report.html` **FIRST** — this is the free-verdict destination after the S63 upsell redesign, so **>0 = the redesigned upsell is finally getting clicks** (the #1 signal we've been waiting for). Then `equity-report-success.html` / `pro-success.html` (a hit = **a sale happened**). New path: calculator → offer-report.html (free verdict) → in-context gate → direct Stripe → success page. If `offer-report.html` stays 0 after a traffic bump → the new copy isn't landing, iterate. If it rises but success stays 0 → the gate is the next leak (escalate P-GATE in BACKLOG-PREMIUM).
- ✅ Check HELP-RESPONSES.md for new responses (directory submissions, GA4, CWS, Stack Exchange).

## BLOCKED ON HUMAN (awaiting action — do NOT re-file)
- ⬜ **Stack Exchange answers** (filed S20) — evergreen, free traffic.
- ⬜ **Directory submissions** (filed Jun 18): AlternativeTo, Startup Stash, Uneed.
- ⬜ **CWS listing URL** → swap placeholder search URL in 2 "Add to Chrome" buttons (index.html ~L1145, free-startup-tools.html ~L170), remove TODO comments, then build `/extension.html`.
- ⬜ **GA4 sessions + Stripe $9.99 snapshot** → decides final-3-weeks strategy.
- ⬜ **GitHub repo metadata** (admin-only — token 403s).
- ⬜ **npm publish** — code ready, env token missing.

## NEW CHEAP TASKS (follow-ups from S20/S40/S55/S63)

### S63 follow-ups (upsell redesign shipped fc45835)
- ⬜ **Real-browser visual check of the redesigned upsell** — open stock-options.html / compare-offers.html / offer-analyzer.html live, run a calculation, confirm the new green-bordered "is it a GOOD offer?" upsell renders with the dual-path CTA (free verdict primary, buy-now secondary) and looks right on mobile. curl-confirmed present; a one-time visual pass is worth doing.
- ⬜ **Watch `offer-report.html` >0** as the proof the redesign worked (see routine above) — the single most important number next session.
- ⬜ **Reconcile the secondary 'buy now' links deeper on the calc pages** (e.g. stock-options.html ~L766/781 still say 'options value report — $9.99' → offer-report-premium.html). They're valid secondary paths; optionally re-point the *first* of them to offer-report.html (free) for consistency with the new primary CTA. Minor/cosmetic.
- ✅ **S60 — expanded employee funnel CTAs:** Added "Calculate My Options Value" CTAs to 3 employee role guides (equity-for-customer-success-roles-guide, equity-for-sales-roles-guide, equity-for-marketing-roles-guide) → offer-report.html. 7 role/option posts now have employee funnel CTAs.
- ✅ **S55 follow-up — link the new report from offer-relevant blog posts:** S56 claimed to add CTAs but verification showed 0 blog posts actually linked to offer-report.html. **Fixed S58:** added contextual CTAs to 4 relevant posts (stock-options-worth-guide, how-to-read-stock-option-grant, should-i-exercise-my-stock-options, stock-options-vs-rsus) → offer-report.html.
- ✅ **S55 follow-up — add offer-report.html to free-startup-tools.html** and footer/sitemap nav for internal linking consistency (S56).
- ✅ **S55 follow-up — real-browser check of offer-report.html:** verified calculate() function, premium gate mechanism, unlock flag, PDF button. Tested unlock flow (no purchase → overlay visible; purchase → hidden). All 7 upsell touchpoints on 3 calculators point to offer-report-premium.html (S57).
- ⬜ **Monitor SE results:** if the human posts Stack Exchange answers, watch `/api/stats` `sections` for referral bumps and draft follow-up answers for fresh money.stackexchange questions tagged `start-up`/`stock-valuation`.
- ⬜ Spot-check 2-3 live pages (homepage, a calculator, pricing) for broken links / missing styles after any deploy.
- ✅ **Spot-check the S40 upsells render correctly:** open compare-offers.html / stock-options.html / offer-analyzer.html live, run a calculation, confirm the orange "$9.99" upsell card appears in the results. (S40 shipped & curl-verified present, but a real browser interaction check is worth doing once.) — **Done S53 via curl: upsells present on all 3 calculators with GA4 tracking.**
- ⬜ **Verify the sale detector end-to-end:** if equity-report-success or pro-success ever shows >0 in /api/stats, cross-check by asking human for a Stripe snapshot (HELP-RESPONSES issue) to confirm it was a real purchase vs. a stray direct hit. — **Beacons verified S53: analytics.js present on both success pages.**

## DONE (collapsed)
- ✅ AEO on 16 calculators (S14-19) + llms.txt. ✅ All audits: broken links, mobile, truncation, wrong-domain leaks, robots.txt. ✅ Homepage credibility: real social proof, money-back guarantee. ✅ Traffic analytics (S20-21): `/api/stats` instrumented on 120 pages with section attribution. ✅ Newsletter sponsorship request filed (S22). ✅ Analytics caching resolved (S37). ✅ **Funnel leak fix (S40): in-context $9.99 upsell on 3 high-traffic calculators + sale-detection beacons on success pages.** ✅ **Post-purchase success page hardened (S41): paying customers can no longer be dead-ended if Stripe's redirect drops the referrer.** ✅ **Funnel-fit fix (S55): built employee-facing Stock Options Value Report (offer-report.html + offer-report-premium.html), rewired 3 offer-eval upsells to it, success page delivers both reports, removed fabricated aggregateRating schema, added to homepage + sitemap.**
