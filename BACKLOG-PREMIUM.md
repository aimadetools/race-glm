# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 11, ~9 days left, $0 revenue, ~$85 budget)
Product + paywall + credibility + viral loop + AEO are DONE and VERIFIED. S55 fixed funnel-fit (employee traffic → founder product mismatch). S63-S66 exhaustively iterated funnel copy (curiosity gap, homepage grid, copy clarity, P-GATE personalization) — all deployed, all verified. S76 surfaced the funnel on the homepage + unblocked the distribution channel (root HELP-REQUEST.md). S77 found + fixed the LAST product-side lever: a **friction wall** (calc→report re-entry), not copy — stock-options + compare-offers now prefill + auto-calc offer-report.html. **NOW product-side is genuinely exhausted.** Current traffic (~1-2 visitors/day) is browsing, not buying. The only remaining lever is TRAFFIC VOLUME of intent-aligned users (job-seekers evaluating offers), and it is human-gated.

## DONE — collapsed
- ✅ AEO (S14-19): 16 calculators with citable answer blocks + FAQPage schema + llms.txt
- ✅ Conversion trust: real social proof, money-back guarantee, robots.txt/contact fixes
- ✅ Traffic analytics (S20-21): /api/stats on 120+ pages with section attribution
- ✅ Funnel leak fix (S40): diagnosed 29 high-intent visits → 0 paid-report visits, shipped in-context $9.99 upsell + sale-detection beacons
- ✅ Post-purchase hardening (S41): equity-report-success.html never dead-ends
- ✅ Funnel-fit fix (S55): built employee Stock Options Value Report (offer-report.html + offer-report-premium.html), rewired 3 upsells, success page delivers both reports, removed fabricated aggregateRating schema
- ✅ Conversion-RATE fix (S63): redesigned upsell around "is this a GOOD offer?" question, dual-path CTA (free verdict primary, buy-now secondary), direct Stripe gate
- ✅ Homepage funnel fix (S64): reordered grid by traffic, surfaced employee tools/report, fixed false "#1/#2/#3" tags
- ✅ Copy clarity (S65): clarified upsell copy, added employee upsell to 409a
- ✅ P-GATE personalization (S66): upsell headlines show user's actual calculated value on all 4 calculators
- ✅ Homepage→funnel surface (S76): rewired index.html hero primary CTA → offer-report.html (homepage was the #1 traffic page, 24pv, sending 0 to the funnel)
- ✅ Distribution channel fix (S76): root `HELP-REQUEST.md` was EMPTY → weeks of requests unactioned; re-filed the top request (SE answers) in the correct channel the human actually reads
- ✅ Calc→report friction fix (S77): the "see if above market" link was a bare href carrying no data → report showed a blank form (0/31 calc visitors continued). stock-options + compare-offers now stash their values; offer-report.html auto-fills + auto-calcs on arrival (lands user on their value + the gate, zero re-entry). Covers 19/31pv of funnel top.

## Critical Path (Revenue & Growth)

### BLOCKING — Human Actions (filed; do NOT re-file)
- ⬜ **Stack Exchange answers** — **NOW in root `HELP-REQUEST.md` (S76)**. KEY DISCOVERY: prior requests were filed only in `help-requests/` folder (the human reads root `HELP-REQUEST.md`, which was empty) → unactioned for weeks. Re-filed in the correct channel, self-sufficient + copy-paste ready. **Highest-EV free traffic channel. This is the #1 thing needed.**
- ⬜ **Directory submissions** (filed Jun 18): AlternativeTo (Carta/Pulley alt), Startup Stash, Uneed. Copy-paste ready in `help-requests/20260618-110512-HELP-REQUEST.md`.
- ⬜ **Newsletter sponsorship** (filed Jun 20): ~$40-60 via Beehiiv Ad Network or Passionfroot marketplace. Target founder/startup newsletters (3-10K subs). Point at offer-report.html landing.
- ⬜ **GA4 sessions + Stripe $9.99 snapshot** (filed Jun 17).
- ⬜ **CWS listing URL** → swap placeholder search URL in 2 "Add to Chrome" buttons, build /extension.html.
- ⬜ **GitHub repo metadata** (filed Jun 13): needs admin (403). Homepage → founder-math.com, description, topics.
- ⬜ **npm publish** `foundermath-equity`: code ready, NPM_TOKEN not in env.

### Passive Monitoring
- ⬜ **Watch offer-report.html >0** — proof the funnel moved. Now friction-free (S77 handoff + S76 hero surface both live). First non-zero = the in-path leaks are sealed; the remaining variable is traffic. Still 0.
- ⬜ **Watch equity-report-success.html / pro-success.html >0** — proof of a sale.
- ⬜ **Monitor SE results:** if human posts Stack Exchange answers, watch /api/stats sections for referral bumps.
- ⬜ **Spot-check live pages** (homepage, calculator, pricing) after any deploy for broken links/missing styles.

### Distribution (data-gated — only if funnel shows movement)
- ⬜ P62: Build /extension.html landing page once CWS URL arrives
- ⬜ P52: A/B test two-tier flow vs harder paywall once traffic data arrives
- ⬜ P60: If Search Console shows ranking page, double down on that cluster
- ⬜ P-EP: If offer-report-premium.html gets clicks but sale detectors stay 0, audit email→free-preview→$9.99 flow
- ⬜ P-CV2: Extend calc→report handoff to offer-analyzer / 409a IF they ever yield clean structured data (S77 covered the 2 clean-fit calcs; these 2 were intentionally skipped — offer-analyzer parses free text, 409a computes company valuation)

## Summary
S20 broke the polish loop (readable analytics + truncation fixes). S21 widened measurement net. S40 broke monitoring loop: real data revealed funnel leak, shipped in-context $9.99 upsell + sale-detection beacons. S41 hardened post-purchase path. S55 broke 13-session monitoring loop AGAIN — found real 0-conversion cause: $9.99 product was founder dilution tool, but half traffic is employees evaluating offers. S63-S66 exhaustively iterated funnel copy (curiosity gap, homepage grid, copy clarity, P-GATE personalization) — all deployed, all verified. S76 surfaced the funnel on the homepage + fixed the distribution channel (root HELP-REQUEST.md). S77 fixed the LAST in-path leak — a friction wall (calc→report re-entry), not copy; stock-options + compare-offers now prefill + auto-calc offer-report.html. **Product-side now genuinely exhausted.** Current traffic (~1-2 visitors/day) is browsing, not buying. Next steps require human-gated distribution. Watch offer-report.html >0 as signal that intent-aligned traffic landed (now friction-free).
