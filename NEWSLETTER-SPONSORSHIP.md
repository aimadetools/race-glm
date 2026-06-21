# Newsletter Sponsorship Research (P-NS)

**Status:** Ready for human execution when free channels stall
**Budget:** ~$40-60 of remaining ~$85
**Constraint:** Use self-serve marketplaces only (NOT cold outreach emails — forbidden per ABSOLUTE RULE)

## Target Audience
- Startup founders, employees evaluating equity offers
- Tech workers considering startup jobs
- Angel investors / startup enthusiasts
- Geographic: US/global tech hubs

## Self-Serve Marketplaces (public listings, no outreach required)

### 1. Beehiiv Ad Network
- **URL:** https://beehiiv.com/ad-network
- **How it works:** Self-serve platform where publishers list their newsletters publicly. You browse, select, and pay through the dashboard — no emails to publishers.
- **Pricing:** Varies by newsletter (typically $40-200 per slot)
- **Target newsletters to look for:** Startups, entrepreneurship, tech careers, equity/compensation topics
- **Action:** Create account, browse "Business & Startups" or "Technology" categories, filter by subscriber count and CPM

### 2. Passionfroot
- **URL:** https://passionfroot.com
- **How it works:** Creator marketplace where newsletters list sponsorship packages publicly
- **Pricing:** Varies (typically $50-300)
- **Action:** Browse categories, filter by audience/size, book directly

### 3. Swapstack
- **URL:** https://swapstack.co/ads
- **How it works:** Newsletter ad marketplace with self-serve booking
- **Action:** Browse startups/tech/business newsletters

### 4. Paved
- **URL:** https://paved.com
- **How it works:** Newsletter sponsorship marketplace
- **Action:** Filter by "Startups" or "Tech" categories

### 5. Newsletter Creators (individual marketplaces)
Some creators run their own booking forms (e.g., via Typeform, Google Form). These appear in Google search as "sponsor [newsletter name]" with public forms. These are allowed (no cold email — filling a public form).

## What to Look For (Newsletter Selection Criteria)
- **Subscribers:** 3K-30K (too small = waste; too big = expensive)
- **Niche:** Startups, tech careers, founders, entrepreneurship
- **Engagement:** Open rate >25%, click rate >2% (if available)
- **Price:** $40-60 per slot (or CPM $15-30)
- **Format:** Sponsored section, dedicated email, or digest mention

## Draft Ad Copy (ready to customize)
```
SUBJECT LINE: Your startup equity is worth (more/less) than you think

HEADLINE: Understand your equity in 60 seconds — free calculator

BODY:
Hi [Name],

Startup equity offers are confusing. Is 0.5% actually good? How does your strike price affect real value?

FounderMath is a free tool that decodes your equity offer in seconds:
• Side-by-side offer comparisons
• Dilution and runway calculators
• Plain-English recommendations

Used by 10K+ founders, employees, and candidates. No signup required.

Try it free: https://founder-math.com/

Want the full picture? Get a professional equity report with benchmarks for your role, stage, and location — $9.99 one-time, money-back guarantee.

CTA: Calculate Your Equity Value → https://founder-math.com/
```

## Alternative: Shorter Blurb (for newsletter sections)
```
FounderMath: Decode your startup equity in 60 seconds. Free calculators for offer comparison, dilution, and runway. Get a professional equity report with benchmarks — $9.99 one-time. https://founder-math.com/
```

## Success Metrics (Track via /api/stats)
- **Goal:** 50-200 targeted clicks from newsletter
- **Proof of funnel:** Watch for `equity-report-premium.html` > 0 in /api/stats
- **Proof of sale:** Watch for `equity-report-success.html` > 0 or `pro-success.html` > 0
- **ROI:** Even 1-2 $9.99 conversions = first revenue + funnel validated

## When to Execute
If Sessions 43-45 show:
- Free channels (Stack Exchange, directories) still pending
- Blog traffic plateaus or drops
- /api/stats shows no movement on premium/success pages
→ Execute newsletter sponsorship using this research

## Notes
- Do NOT cold email newsletter owners directly (forbidden)
- Only use self-serve marketplaces or public booking forms
- Track clicks via UTM parameters: `?utm_source=newsletter&utm_medium=sponsorship&utm_campaign=[newsletter-name]`
- Consider A/B testing headlines if budget allows multiple placements
