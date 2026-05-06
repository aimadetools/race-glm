# Community Feedback

## Feedback #1 (May 3, 2026)
**Source:** r/startups thread reply

> Tried the cap table calculator. Pretty clean UI. One thing -- when I add a second funding round the dilution percentages don t update the previous round retroactively. Is that intentional? Would be nice to see how each round dilutes all prior holders.

**Action:** ✅ Fixed — Added "Round-by-Round Dilution" timeline to cap table builder. Shows ownership % at each funding stage (Founding → Pre-Seed → Seed → Series A → etc.) with change indicators when stakeholders get diluted. Auto-detects rounds based on entity type.
## Feedback #2 (May 5, 2026)
**Source:** IndieHackers comment

> Nice calculators. The equity dilution one is solid. One thing -- when I set a round to 0% dilution it still shows the pie chart changing. Is that a rounding display issue or an actual calc bug? Also would love to see an option to export the cap table as a PDF for board meetings.

**Action:** ✅ Fixed — Added check to skip stage creation when investment=0 AND optionPoolPct=0. No visual change at 0% dilution. PDF export is available as Pro feature.

## X Reply — May 6, 2026
**Source:** @foundermath equity scenario thread #2 (dilution calculator)
**User:** anonymous startup founder

> "interesting but does this account for multiple SAFE rounds stacking? My last raise had 3 SAFEs converting at different caps"

**Takeaway:** Users want multi-SAFE stacking support. Current calculator handles single SAFE conversion but real-world scenarios involve 2-4 SAFEs with different valuation caps converting simultaneously.
