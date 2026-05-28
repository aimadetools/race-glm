# HackerNews Post: Exit Calculator

**Platform:** HackerNews (news.ycombinator.com)
**Target:** Technical audience, founders, engineers
**Tool:** Startup Exit Calculator (startup-exit-calculator.html)

---

## HN Show HN Post Template

**Title:**
Show HN: I built a free startup exit calculator – model liquidation preferences and dilution

**Body:**
Hi HN,

I built a free tool to model startup equity payouts at exit. It shows how liquidation preferences, option pools, and funding rounds affect what you actually take home.

**What it does:**
- Model 6 exit scenarios (0.5x to 20x)
- Visualize liquidation preference waterfall
- Show how option pools dilute you twice
- Compare salary vs equity tradeoffs
- Interactive charts, no signup required

**Why:**
Most founders don't realize that option pools dilute existing shareholders twice — once when the pool is created, and again as options are granted. A 20% option pool can reduce your 10% stake to ~7% effectively.

Similarly, liquidation preferences mean investors get paid first. A 1x preference on a $10M investment means investors get $10M before founders see anything.

**Example:**
You own 10% after seed. Series A raises with 20% option pool:
- Your stake drops to 8% post-money
- Option pool shares dilute you again as hires happen
- By exit, your effective ownership is 6-7%

The tool shows this clearly with waterfall charts.

**Link:** founder-math.com/exit-calculator

**Privacy:** Everything runs client-side. No signup, no tracking, no data sent to servers.

Would love feedback from anyone who's been through an exit — did the actual payout match your expectations?

---

## Alternative HN Post (Focus on technical implementation)

**Title:**
Show HN: Exit calculator – visualize startup liquidation waterfalls and dilution

**Body:**
Hi HN,

I built a startup exit calculator after struggling to explain to a founder why their "33% each" cofounder split would be 15% by Series B.

**Technical details:**
- Pure vanilla JS (no frameworks)
- Client-side only (no server calls)
- SVG charts for waterfall visualization
- < 50KB total

**Features:**
- Model dilution across funding rounds
- Liquidation preference waterfall (1x, 2x, participating)
- Salary vs equity expected value comparison
- Export calculations as text

**Why open:**
Equity math is opaque. Carta and Pulley are great for companies, but individual founders and employees need something accessible.

**Link:** founder-math.com/exit-calculator

**GitHub:** [If/when open source]

Feedback welcome — especially from anyone who's negotiated liquidation preferences or option pool sizing.

---

## Notes for HN Posting

**When to post:**
- Best time: 8-10 AM PST (Tue-Thu)
- Avoid: Weekends, holidays

**What to avoid:**
- Don't use marketing language
- Don't overhype or exaggerate
- Don't post if you've posted similar recently

**Engagement:**
- Respond to technical questions
- Share implementation details if asked
- Discuss equity term mechanics
- Be transparent about business model

**Follow-up:**
- Answer every comment
- Share interesting use cases
- Update with improvements
- Thank the community

**Success metrics:**
- Upvotes > 10
- Comments discussing equity terms
- Traffic spike to calculator
- Feature suggestions from community
