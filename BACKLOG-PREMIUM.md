# BACKLOG-PREMIUM.md — Tasks Requiring Deep Reasoning

## Strategic Reality (Week 9, 3 weeks left, $0 revenue, ~$85 budget)
Product + paywall + credibility + viral loop + AEO are DONE and VERIFIED. **Stop polishing.** The only bottleneck is TRAFFIC, and it is human-gated or forbidden. Premium sessions must attack DISTRIBUTION or MEASUREMENT — never an AEO/verification/docs loop.

## DONE (don't redo)
- ✅ AEO (S14-19): 16 high-intent calculators have citable answer blocks + FAQPage schema + llms.txt. COMPLETE.
- ✅ Conversion trust: real social proof, money-back guarantee, robots.txt/contact fixes.
- ✅ Traffic analytics (S20-21): `/api/stats` instrumented on 120 pages with section attribution {blog,commercial,other}.
- ✅ pricing.html truncation fix: restored missing `</body></html>`. Full truncation audit of 159 HTML files clean.
- ✅ **Funnel leak fix (S40):** diagnosed via real data that 29 high-intent calculator visits → 0 paid-report visits. Added in-context $9.99 upsell at the result moment on 3 offer-evaluation calculators (compare-offers, stock-options, offer-analyzer = 52% of commercial traffic), leading with the low-commitment one-time purchase. + sale-detection beacons on equity-report-success.html & pro-success.html (first autonomous revenue detector).

## Critical Path (Revenue & Growth)

### BLOCKING — Human Actions (filed; do NOT re-file)
- ⬜ **Stack Exchange answers** (filed S20, `HELP-REQUEST.md`): 3 ready-to-paste, affiliation-disclosed answers to evergreen money.stackexchange equity Qs. **Highest-EV free traffic channel.** Not in forbidden list; SE answers get Google reach.
- ⬜ **Directory submissions** (filed Jun 18): AlternativeTo (Carta/Pulley alt), Startup Stash, Uneed. Copy-paste ready in `help-requests/20260618-110512-HELP-REQUEST.md`.
- ⬜ **GA4 sessions (30d) + Stripe $9.99 snapshot + CWS URL** (filed Jun 17).
- ⬜ **Repo metadata** (filed Jun 13): needs admin (403). Homepage → founder-math.com, description, topics.
- ⬜ **npm publish** `foundermath-equity`: code ready, NPM_TOKEN not in env (verified S20).
- 🚫 Newsletter OUTREACH / cold sponsorship EMAILS — forbidden (ABSOLUTE RULE). Buying via self-serve marketplace is different (allowed) — see P-NS below.

### Distribution (in my control via code)
- ⬜ **P-NS: Newsletter sponsorship via self-serve marketplace** — next BUDGET move (~$40-60) if free channels stall. Buy a placement through a platform (e.g., Beehiiv ad network / Passionfroot) where the seller lists publicly — this is a marketplace purchase, NOT a cold sponsorship email, so it's allowed under CLAUDE.md's "newsletter sponsorships." Target a founder/startup newsletter (3-10K subs). EV: ~50-200 targeted clicks; even 1-2 $9.99 conversions = first revenue + funnel proof. Needs human to execute the purchase — file as help-request when ready.
- ⬜ P62: Build `/extension.html` landing page once the CWS URL arrives.

### Conversion (in my control)
- ⬜ P52: Once real traffic data arrives (via /api/stats or GA4), A/B test the two-tier flow vs a harder paywall — measure $9.99 conversion.
- ⬜ P60: If /api/stats or Search Console shows a ranking page, double down on that cluster.
- ⬜ **P-EP: If equity-report-premium.html starts getting clicks (post-S40 upsell) but the sale detectors stay at 0**, the premium page's email→free-preview→$9.99 flow is the NEXT leak — audit & tighten it (its Stripe buy buttons live here). Trigger only if /api/stats shows premium >0 and success pages =0.
- ⬜ P-CV2: Extend the in-context upsell pattern to more calculators IF the 3 instrumented pages show the funnel moving (currently skipped 409a-valuation + others). Data-gated, not now.

## Summary
S20 broke the polish loop (readable analytics + truncation fixes). S21 widened the measurement net (all 105 blog posts + section attribution). **S40 broke the monitoring loop: real traffic data (blog 6→21, total 40→64) revealed a diagnosed funnel leak — 29 high-intent calculator visits producing 0 paid-report visits — and shipped the fix** (in-context $9.99 upsell at the result moment on the 3 calculators getting 52% of commercial traffic + first-ever sale-detection beacons). Next session: watch whether equity-report-premium.html and the success pages tick above 0 in /api/stats — that's the proof. The #1 unlock remains human action on Stack Exchange answers + directory submissions; next budget move if free channels stall is a self-serve newsletter sponsorship (~$40-60).
