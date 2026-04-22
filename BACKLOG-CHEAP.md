# BACKLOG-CHEAP.md — Routine Tasks

*These tasks are straightforward and can be done quickly.*

## Quick Wins (Do First)

### C24: Add localStorage Auto-Save to All Calculators ✅
- Each calculator auto-saves inputs to localStorage on change
- On page load, restore saved state (with fallback to defaults)
- Add "Saved locally" indicator in the input panel
- 5 calculators: dilution, runway, safe, vesting, unit-economics

### C25: Add "Saved Scenarios" Dropdown ✅
- Add a dropdown above the inputs: "Load Scenario" with saved scenarios
- Allow naming and saving multiple scenarios per calculator
- Add delete button for saved scenarios
- Uses localStorage key: `foundermath_{calculator}_scenarios`

### C26: Add PDF Export with jsPDF ✅
- Add "Export PDF" button to each calculator's share bar
- Use jsPDF library (client-side) to generate PDF with:
  - Page header with FounderMath branding
  - Summary cards data
  - Chart as image (canvas.toDataURL)
  - Key table data
- Free-tier feature (differentiator from competitors)

### C27: Add "Compare Scenarios" UI
- Add "Compare" button next to save button on each calculator
- Opens side-by-side view with 2 scenarios
- Highlights differences between scenarios
- Uses saved scenarios from localStorage

## Content & SEO Tasks

### C28: Write Blog Post — "How to Evaluate a Startup Equity Offer" ✅
- 2000+ word guide for early employees
- Cover: vesting, cliff, strike price, FMV, 409A valuations
- Link to vesting calculator
- SEO keywords: "startup equity offer", "how to evaluate stock options"

### C29: Write Blog Post — "SaaS Unit Economics: Why LTV:CAC Ratio Matters"
- 1500+ word guide
- Cover: CAC calculation, LTV calculation, benchmarks, common mistakes
- Link to unit-economics calculator
- SEO keywords: "LTV CAC ratio", "unit economics SaaS"

### C30: Write Blog Post — "Vesting Schedules Explained: Cliff, Acceleration, and 83(b)"
- 1500+ word guide
- Cover: standard 4-year vesting, cliff mechanics, single/double-trigger acceleration
- Link to vesting calculator
- SEO keywords: "vesting schedule", "startup vesting", "83b election"

### C31: Update Blog Index with New Calculators
- Add blog post links to blog.html for new guides
- Update featured calculator links in blog sidebar/header
- Add "Try our new Vesting Calculator" banner

## CSS & Design Tasks

### C32: Add Light Theme CSS to All Blog Posts
- The blog posts may not have light theme CSS (body[data-theme="light"] overrides)
- Ensure all pages have consistent light theme variables
- Test theme toggle on all blog post pages

### C33: Polish Calculator Input UX
- Add input formatting (commas in number inputs) on blur
- Add tooltip hints with "?" icon next to complex inputs
- Add keyboard shortcuts (Enter to recalculate, Ctrl+S to save)
- Improve mobile input experience (proper inputmode attributes)

### C34: Add "Pro Tips" Callouts to Calculators
- Add collapsible "Pro Tip" sections with industry insights
- e.g., "Most seed-stage companies have 12-18 months of runway"
- e.g., "A healthy LTV:CAC ratio for SaaS is 3:1 or higher"
- e.g., "Always file your 83(b) election within 30 days"

## Marketing Setup

### C35: Create Show HN Draft Post
- Draft compelling title: "Show HN: FounderMath — Interactive startup equity and dilution calculators"
- Write engaging description with key differentiators
- Prepare demo scenario URL (pre-filled with sample data)
- Plan launch timing (Tuesday-Thursday morning US time)

### C36: Create Reddit Post Templates
- r/startups: "I built a free equity dilution calculator because I was confused about my own vesting"
- r/Entrepreneur: "After getting confused by SAFE note math, I built a visual calculator"
- r/SaaS: "Free unit economics calculator — check your LTV:CAC ratio"
- Each with calculator link and genuine story angle

### C37: Create Twitter/X Thread Templates
- Thread 1: "I visualized how startup equity dilutes across 5 funding rounds. Here's what happens to a founder who starts with 33%..."
- Thread 2: "Your SAFE note has a cap AND a discount. Here's which one actually matters (with calculator)"
- Thread 3: "Most founders can't calculate their runway correctly. Here's the right way (with free tool)"

## Already Completed

### C1: Add Favicon and App Icons ✅
### C2: Add Meta Tags for Social Sharing ✅
### C3: Add Google Analytics Script ✅
### C4: Mobile Navigation Polish ✅
### C5: Footer Consistency ✅
### C6: Loading Performance ✅
### C7: Write Blog Post — "How Equity Dilution Works" ✅
### C8: Write Blog Post — "SAFE Note Conversion Guide" ✅
### C9: Write Blog Post — "How to Calculate Startup Runway" ✅
### C10: Write Blog Post — "Cap Table 101 for Founders" ✅
### C11: Add Smooth Scroll Animations ✅
### C12: Dark/Light Mode Toggle ✅
### C16: Print Stylesheet ✅
### C17: 404 Page ✅
### C18: robots.txt and sitemap.xml ✅
### C19: Accessibility Improvements ✅
### C20: Error Handling for Calculators ✅
