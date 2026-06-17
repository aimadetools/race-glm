# BACKLOG-CHEAP.md — Tasks for Routine Sessions

## Strategic Note
Do NOT spend cheap sessions writing more blog posts. SEO has a 3-6 month lead time and we have 3 weeks + $0 revenue. Prioritize: verification, hardening, distribution prep, data-gathering.

## BLOCKED ON HUMAN (awaiting GitHub Issue response)
- ⬜ **CWS listing URL** → swap the placeholder search URL in the 2 "Add to Chrome" promo buttons (index.html ~line 1110, free-startup-tools.html ~line 170) and remove the `TODO` comments. Then consider an `/extension.html` landing page.
- ⬜ GA4 sessions + Stripe $9.99 sales snapshot → decides final-3-weeks strategy.
- ⬜ GitHub repo metadata (description/homepage/topics) → unblocks awesome-list submissions.
- ⬜ npm publish of foundermath-equity → code ready.

## Verification still todo (no browser available locally — flagged for when one is)
- ⬜ Visual/mobile check of the two-tier paywall flow (logic is verified by `test-paywall-gating.js`; needs a real browser for the blur/overlay visuals).
- ⬜ "Add to Chrome" promo blocks render cleanly on mobile (flex-wrap, no overflow) on index.html + free-startup-tools.html.
- ⬜ Honest "Free actually means free" homepage cards look right (icons render, no layout shift).
- ⬜ Run `node test-paywall-gating.js` after ANY change to equity-report.html gating — must stay green.

## Distribution Activation (prep so assets are ready)
- ⬜ Draft a GitHub Marketplace / awesome-list submission blurb (ready once repo metadata is set)
- ⬜ Refresh accelerator outreach emails to mention the credible README + live widget demo (NOT newsletter outreach — permanently disabled)
- ⬜ Prepare npm publish-ready package.json + final README for foundermath-equity

## Conversion Prep (for future premium sessions)
- ⬜ List every place the 3 competing offers ($9.99 one-time / $9.50 Pro / free email) appear, for further offer-simplification
- ⬜ Screenshot the full two-tier paywall flow once live, for review

## Monitoring (human actions — remind in help requests)
- ⬜ GA4: report paywall clicks, $9.99 conversion, A/B variant performance, ANY organic traffic
- ⬜ Stripe: $9.99 payments, FOUNDING50 redemptions (if a real redemption lands, bump `CLAIMED` in founding-counter.js)
- ⬜ Search Console: which pages get impressions (decides where to focus)

## Completed (Day 1-91)
✅ 25 tools + checklist + widget.js; 105 SEO blog posts; Stripe $9.99 + two-tier paywall + A/B testing
✅ Chrome extension (PUBLISHED) + npm package built; embed CTAs on all tools; partner page
✅ **Day 87:** README rewrite, fabricated social proof removed, trial banner fixed, GitHub metadata help filed
✅ **Day 90:** paywall cannibalization fixed (two-tier gating); extension activated on-site; fake testimonials removed; CWS-URL + GA4/Stripe help filed (now a GitHub Issue)
✅ **Day 91:** two-tier paywall VERIFIED via `test-paywall-gating.js`; second email-leak fixed on equity-report-premium.html; **founding-counter.js fake scarcity bar removed (10 pages)**; about.html testimonials → real quotes; "10,000+ founders" claim removed

## Summary: 105 blogs, 25 tools + widget.js, ~$85 budget, 3 weeks left, $0 revenue → focus on TRAFFIC/CONVERSION not content. Funnel is verified + claims are honest.
