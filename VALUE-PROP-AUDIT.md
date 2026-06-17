# $9.99 Value Prop Audit — Day 91

**Purpose:** P51 — Audit whether the premium deliverable is genuinely must-have after paywall verification.

---

## Current Premium Deliverable ($9.99)

### 1. Personalized Recommendations (5 types)
Located in `equity-report.html` ~line 1532 (`renderRecommendations` function):

| Type | Trigger | Recommendation |
|------|---------|----------------|
| Danger | yourDilution > bench.avgDilution | "Above-average dilution — negotiate harder on valuation or round size" |
| Tip | yourDilution ≤ bench.avgDilution | "Dilution looks reasonable — focus on maximizing valuation" |
| Warning | Seed/Pre-Seed round detected | "Watch the option pool — investors require 10-20% which dilutes YOU, not them" |
| Warning | cofounders > 2 | "Multiple cofounders = faster dilution — consider vesting carefully" |
| Danger | exitValue < $1M | "Low exit value for your stake — consider if equity given up is worth capital" |
| Tip | exitValue ≥ $5M | "Strong potential exit value — protect your equity" |
| Danger | finalOwnership < 10% | "Below 10% ownership means losing control — consider anti-dilution protections" |

### 2. Industry Benchmarks
Located in `equity-report.html` ~line 1213:

```javascript
var BENCHMARKS = {
    'pre-seed': { avgDilution: 55, avgFounderOwnership: 45 },
    'seed': { avgDilution: 50, avgFounderOwnership: 50 },
    'series-a': { avgDilution: 40, avgFounderOwnership: 55 },
    'series-b': { avgDilution: 30, avgFounderOwnership: 60 }
};
```

### 3. PDF Export
- Investor-ready formatting (white background, professional layout)
- Includes all charts, tables, and recommendations
- Downloadable for records/investor meetings

---

## Gap Analysis

### What's Missing (Critical Gaps)

1. **Term-Sheet Red-Flag Detector** ❌
   - No analysis of liquidation preferences (1x vs 2x vs participating)
   - No anti-dilution protection analysis (full ratchet vs weighted average)
   - No drag-along/tag-along rights warnings
   - No vesting schedule cliff warnings

2. **Cap Table Health Score** ❌
   - No single 0-100 score summarizing cap table health
   - No breakdown contributing factors (dilution rate, ownership concentration, exit alignment)

3. **Scenario Modeling ("What If")** ❌
   - No "What if we raise at $8M vs $10M valuation" comparison
   - No "What if we negotiate option pool down from 20% to 10%" impact
   - No dollar-value impact of each negotiation lever

4. **Negotiation Talking Points** ❌
   - No specific language founders can use in investor meetings
   - No data-backed arguments for better terms

### Current Strengths ✅

- Visual dilution chart is clear and professional
- Exit value analysis connects dilution to actual dollars
- Benchmark comparison anchors expectations
- PDF formatting is investor-ready

---

## Value Prop Assessment

**Current State:** "Nice to Have" → Not "Must Have"

The current deliverable is useful but not urgent. A founder can:
- Calculate basic dilution themselves
- Find benchmark data via Google (Carta, FounderMath blog posts)
- Export to PDF via browser print

**To become "Must Have," the report needs:**
1. **Insight they can't get elsewhere** → Term-sheet red-flag detection
2. **Scenario impact in dollars** → "This negotiation saves you $X at exit"
3. **Actionable next steps** → Specific talking points, not generic advice

---

## Proposed Enhancements (Prioritized by Impact vs Effort)

### High Impact, Medium Effort (Do Now)

#### 1. Term-Sheet Red-Flag Detector
**What:** Add input fields for key term-sheet terms, generate red-flag warnings.

**Inputs:**
- Liquidation preference (1x, 2x, participating)
- Anti-dilution type (none, weighted average, full ratchet)
- Option pool size (default 20%, user-editable)
- Vesting cliff (months)

**Outputs:**
- Red-flag items marked with urgency (HIGH/MEDIUM/LOW)
- Dollar impact at exit
- Negotiation language for each red flag

**Implementation:**
- Add 4-5 input fields to equity-report.html form
- Add red-flag scoring logic to `renderRecommendations()`
- 2-3 hours

#### 2. Scenario Comparison Pack
**What:** Generate 2-3 side-by-side scenarios (e.g., "Your deal" vs "Better terms")

**Implementation:**
- Clone reportData with modified parameters
- Render 2-column comparison table
- Add "Save $X at exit" delta calculation
- 2-3 hours

### High Impact, High Effort (Premium Session)

#### 3. Cap Table Health Score
**What:** Single 0-100 score with breakdown and improvement roadmap.

**Implementation:**
- Design scoring algorithm (dilution rate, ownership concentration, exit alignment, term risk)
- Visual gauge/meter
- Factor-by-factor breakdown
- 4-6 hours

#### 4. Negotiation Talking Points Generator
**What:** Custom scriptable talking points based on specific deal issues.

**Implementation:**
- Template system for talking points
- Data-backed arguments ("At $50M exit, this clause costs you $X")
- 3-4 hours

---

## Recommendation

**Immediate Action (This Session):**
1. Add term-sheet red-flag detector (liquidation preference, option pool, anti-dilution)
2. Add scenario comparison (Your deal vs Negotiated deal)
3. Re-run `test-paywall-gating.js` to ensure gating logic still holds

**Result:** Premium deliverable becomes "Must Have" because it:
- Catches red flags founders miss (insight they can't get elsewhere)
- Shows dollar impact of specific negotiations (tangible value)
- Provides actionable talking points (not just generic advice)

**Expected Conversion Impact:** These additions differentiate the $9.99 report from free alternatives (Google search, basic calculators) and create urgency ("You may be signing a bad term sheet").

---

## Implementation Notes

- All changes must preserve the two-tier gating (email = chart free, $9.99 = recs + PDF)
- Run `node test-paywall-gating.js` after any changes to equity-report.html
- Keep recommendations concise (max 6-8 items) — avoid overwhelming the user
- Dollar impact calculations should use the exitGoal input value

---

**Status:** IMPLEMENTED (Session 4, Day 91). Term-sheet red-flag detector and scenario comparison pack are now live in equity-report.html. Paywall gating verified intact.
