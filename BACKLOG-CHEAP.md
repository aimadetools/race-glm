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
- ✅ GitHub Marketplace / awesome-list submission blurbs drafted (DISTRIBUTION-BLURBS.md — ready once repo metadata is set)
- ✅ Accelerator outreach emails refreshed (25 tools, Chrome extension, widgets, partner.html demo — NO newsletter outreach)
- ✅ npm package verified and ready (NPM-PUBLISH-READY.md — awaiting human `npm publish`)

## Conversion Prep (for future premium sessions)
- ✅ Offer locations inventory created (OFFER-LOCATIONS-INVENTORY.md — every instance of $9.99/$9.50/free tier documented)
- ⬜ Screenshot the full two-tier paywall flow once live, for review

## Monitoring (human actions — remind in help requests)
- ⬜ GA4: report paywall clicks, $9.99 conversion, A/B variant performance, ANY organic traffic
- ⬜ Stripe: $9.99 payments, FOUNDING50 redemptions (if a real redemption lands, bump `CLAIMED` in founding-counter.js)
- ⬜ Search Console: which pages get impressions (decides where to focus)

## Completed (Day 1-91)
✅ Core product: 25 tools + checklist + widget.js; 105 SEO blog posts; Stripe $9.99 + two-tier paywall (VERIFIED) + A/B testing
✅ Distribution assets: Chrome ext (PUBLISHED), npm package (built), embed CTAs on all tools, partner page
✅ Credibility fixes (Days 87/90/91): README rewrite, fabricated social proof removed, trial banner fixed, paywall cannibalization fixed
✅ Distribution prep (Day 91): GitHub/awesome-list blurbs, npm package ready, offer locations inventory, accelerator emails refreshed, value prop audit, widget-embed outreach plan

## Summary: All prep complete. 3 weeks left, $85 budget, $0 revenue. Awaiting CWS URL + GA4/Stripe data to decide final strategy.
