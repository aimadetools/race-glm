# Chrome Extension Research — FounderMath Equity Calculator

Research Date: Day 75 (June 4, 2026)
Budget: $5 developer fee + human setup cost
Potential ROI: Increased distribution, brand visibility, recurring traffic

---

## Concept: FounderMath Equity Calculator Extension

**Value Proposition:** Instant equity dilution and offer analysis while browsing job postings, offer letters, or cap table discussions.

---

## Use Cases

### 1. Job Offer Analysis
- **Trigger:** User browsing LinkedIn, Glassdoor, or company careers page
- **Feature:** "Analyze Equity Offer" button in browser toolbar
- **Flow:** Opens dilution calculator in popup or side panel with pre-filled company stage estimate

### 2. Quick Dilution Check
- **Trigger:** User reading "Series A" or "funding" articles on TechCrunch, HN
- **Feature:** One-click dilution impact calculator
- **Flow:** "What if they raised Series A?" → Instant answer

### 3. Cap Table Reference
- **Trigger:** User reviewing offer letter PDF
- **Feature:** Highlight equity terms → Right-click "Calculate ownership"
- **Flow:** Popup with ownership projection at exit

---

## Technical Implementation

### Architecture Options

**Option A: Content Script + Popup**
- Content script detects equity-related keywords on pages
- Toolbar icon activates when equity terms detected
- Popup loads founder-math.com calculators via iframe
- Minimal data storage (localStorage for preferences)

**Option B: Side Panel (Chrome 114+)**
- Side panel shows full calculator interface
- Persists across tab navigation
- Better UX for complex calculations

**Option C: Context Menu Integration**
- Right-click on equity numbers → "Calculate dilution"
- Opens mini calculator overlay
- Lightweight, non-intrusive

### Recommended: Option A (Content Script + Popup)
- Lower development complexity
- Cross-browser compatible (Firefox, Edge, Safari)
- Familiar UX pattern

---

## Feature Set (MVP)

### Core Features
1. **Keyword Detection**
   - Detect terms: "equity", "stock options", "Series A", "dilution", "vesting"
   - Badge notification on toolbar icon when terms detected
   - Confidence score based on context

2. **Quick Calculator Access**
   - Popup with 3 most used calculators:
     - Dilution Calculator (dilution.html embedded)
     - Offer Analyzer (offer-analyzer.html embedded)
     - Vesting Calculator (stock-options.html embedded)

3. **One-Click Equity Analysis**
   - Select equity percentage on page → Right-click "Analyze"
   - Opens relevant calculator with value pre-filled

4. **Company Stage Detection**
   - Detect company stage from page content (Seed, Series A, B, C)
   - Pre-fill calculator defaults based on stage

### Optional Features (V2)
- LinkedIn integration (auto-detect offer stage from company profile)
- Offer letter PDF parsing
- Bookmark/favorite calculations
- Share calculation link
- Sync with founder-math.com account

---

## Development Requirements

### Files Structure
```
foundermath-extension/
├── manifest.json (v3)
├── popup.html (calculator selector)
├── popup.js
├── content.js (keyword detection, context menu)
├── background.js (service worker)
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── _locales/ (for i18n, if needed)
```

### Manifest V3 Requirements
```json
{
  "manifest_version": 3,
  "name": "FounderMath Equity Calculator",
  "version": "1.0.0",
  "description": "Instant startup equity analysis while browsing",
  "permissions": ["activeTab", "contextMenus", "storage"],
  "host_permissions": ["https://founder-math.com/*"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_idle"
    }
  ]
}
```

### Core Code Components

**content.js (Keyword Detection)**
```javascript
const equityKeywords = [
  'equity', 'stock options', 'series a', 'series b',
  'dilution', 'vesting', 'iso', 'nso', '409a',
  'liquidation preference', 'option pool'
];

function scanForEquityTerms() {
  const bodyText = document.body.innerText.toLowerCase();
  const foundTerms = equityKeywords.filter(term =>
    bodyText.includes(term)
  );

  if (foundTerms.length > 0) {
    chrome.runtime.sendMessage({
      type: 'equityTermsDetected',
      terms: foundTerms,
      count: foundTerms.length
    });
  }
}

// Run on page load and when DOM changes
scanForEquityTerms();
new MutationObserver(scanForEquityTerms).observe(
  document.body,
  { childList: true, subtree: true }
);
```

**popup.html (Calculator Selector)**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { width: 320px; padding: 16px; font-family: system-ui; }
    .calc-card {
      border: 1px solid #ddd; border-radius: 8px;
      padding: 12px; margin-bottom: 8px; cursor: pointer;
    }
    .calc-card:hover { background: #f5f5f5; }
    iframe { width: 100%; height: 400px; border: none; }
  </style>
</head>
<body>
  <h3>FounderMath</h3>
  <div id="calculator-list">
    <div class="calc-card" data-calc="dilution">
      <strong>Dilution Calculator</strong>
      <p>See how funding rounds affect your equity</p>
    </div>
    <div class="calc-card" data-calc="offer">
      <strong>Offer Analyzer</strong>
      <p>Analyze your startup job offer</p>
    </div>
    <div class="calc-card" data-calc="vesting">
      <strong>Vesting Calculator</strong>
      <p>Understand your vesting schedule</p>
    </div>
  </div>
  <iframe id="calc-frame" style="display:none"></iframe>

  <script src="popup.js"></script>
</body>
</html>
```

**popup.js (Calculator Loading)**
```javascript
document.querySelectorAll('.calc-card').forEach(card => {
  card.addEventListener('click', () => {
    const calcType = card.dataset.calc;
    const frame = document.getElementById('calc-frame');
    const list = document.getElementById('calculator-list');

    const urls = {
      dilution: 'https://founder-math.com/dilution.html',
      offer: 'https://founder-math.com/offer-analyzer.html',
      vesting: 'https://founder-math.com/stock-options.html'
    };

    frame.src = urls[calcType];
    frame.style.display = 'block';
    list.style.display = 'none';
  });
});
```

---

## Distribution Strategy

### Chrome Web Store

**Listing Details:**
- **Name:** FounderMath Equity Calculator
- **Tagline:** Instant startup equity analysis while you browse
- **Description:** "Understand your startup equity in seconds. Detects equity terms on any page and connects you to free dilution, offer, and vesting calculators. Perfect for founders evaluating funding or employees analyzing job offers."
- **Category:** Productivity
- **Screenshots:** 5 screenshots showing popup, calculator integration, keyword detection

**ASO Keywords:**
- equity calculator
- startup dilution
- stock options
- vesting schedule
- job offer analyzer

**Initial Reviews:**
- Seed with 3-5 reviews from beta testers
- Respond to all reviews

### Launch Strategy

**Phase 1: Soft Launch (Week 1)**
- Submit to Chrome Web Store ($5 fee)
- Beta test with 10 users
- Fix bugs based on feedback

**Phase 2: Public Launch (Week 2)**
- HN Show HN: "Show HN: I built a Chrome extension that detects equity terms and connects you to calculators"
- Reddit: r/startups, r/SideProject
- Twitter/X thread about equity terms detection

**Phase 3: Growth (Week 3+)**
- Product Hunt listing
- Cross-promote on founder-math.com
- Guest post on startup blogs about "hidden equity terms in offer letters"

---

## Cost Analysis

### One-Time Costs
- **Chrome Web Store Developer Fee:** $5 (one-time)
- **Icon Design:** $0 (use AI image generator or simple design)
- **Total:** $5

### Ongoing Costs
- **Hosting:** $0 (calculators hosted on founder-math.com)
- **Maintenance:** Minimal (bug fixes, Chrome manifest updates)

### Time Investment
- **Development:** 8-12 hours (MVP)
- **Testing:** 2-4 hours
- **Launch prep:** 2-3 hours
- **Total:** 12-19 hours

---

## Expected ROI

### Conservative Estimates

**Installs (Year 1):**
- Month 1-3: 100-500 installs (HN + Reddit launch)
- Month 4-6: 500-2,000 installs (word of mouth)
- Month 7-12: 2,000-5,000 installs (Chrome Web Store organic)

**Active Users (30-day):**
- 20-30% of installs remain active
- 200-1,500 monthly active users by end of Year 1

**Traffic to FounderMath:**
- 3-5 clicks per active user per month
- 600-7,500 visits per month
- 6-75 conversions per month (1-5% conversion)

**Revenue Impact:**
- At $10/report: $60-750/month potential
- At $9.50/mo Pro: $57-712 MRR potential

### Break-Even Analysis

**Investment:** $5 + 15 hours = ~$300 opportunity cost

**Break-even:** 30 Premium Report sales OR 3 Pro subscriptions

**Time to Break-even:** 3-6 months post-launch

---

## Risks & Mitigation

### Risk 1: Low Retention
- **Issue:** Users install but rarely use
- **Mitigation:** Focus on high-frequency use cases (LinkedIn, offer letters)

### Risk 2: Chrome Web Store Rejection
- **Issue:** Manifest V3 compliance, permission issues
- **Mitigation:** Follow Chrome extension guidelines precisely, test thoroughly

### Risk 3: Maintenance Burden
- **Issue:** Chrome updates break extension
- **Mitigation:** Simple architecture, minimal dependencies, regular testing

### Risk 4: Low Conversion
- **Issue:** Traffic from extension doesn't convert
- **Mitigation:** Deep link to specific calculators, contextual CTAs

---

## Alternatives Considered

### Alternative 1: Bookmarklet
- **Pros:** No extension store, zero cost, instant deploy
- **Cons:** Harder to discover, no passive keyword detection
- **Verdict:** Good complement, but extension has better distribution

### Alternative 2: Web App (PWA)
- **Pros:** Works on all browsers, installable
- **Cons:** No keyword detection, no passive discovery
- **Verdict:** Extension adds unique value via keyword detection

### Alternative 3: Browser Extension + Desktop App
- **Pros:** More features, offline capability
- **Cons:** Much higher development cost, platform-specific
- **Verdict:** Overkill for MVP

---

## Recommendation: **Proceed with MVP Chrome Extension**

### Why?

1. **Low cost:** $5 one-time fee
2. **Unique value:** Keyword detection + instant calculator access
3. **Distribution:** Chrome Web Store provides organic discoverability
4. **Alignment:** Extends FounderMath brand into user's browsing workflow
5. **Scalable:** Can add features over time based on usage

### Next Steps

1. **Design icon** (AI-generated or simple design)
2. **Implement MVP** (12-16 hours development)
3. **Beta test** with 5-10 users
4. **Submit to Chrome Web Store**
5. **Launch** with HN Show HN + Reddit posts
6. **Monitor analytics** (extension installs, calculator usage, conversions)

### Success Metrics

- **Month 1:** 100+ installs, 20+ active users
- **Month 3:** 500+ installs, 100+ active users, 10+ conversions
- **Month 6:** 2,000+ installs, 400+ active users, 30+ conversions/month

---

## Sample Launch Posts

**HN Show HN:**
```
Title: Show HN: I built a Chrome extension that detects equity terms and connects you to calculators

Body: Hi HN,

I built a Chrome extension for FounderMath (founder-math.com) that
detects startup equity terms on any page and connects you to free
calculators for dilution, offer analysis, and vesting.

Use case: You're reading a job offer or TechCrunch article about
funding, and the extension badge lights up. Click it, and you can
instantly calculate dilution impact or analyze the offer without
leaving the page.

The calculators are embedded directly in the popup, so you get instant
answers without navigating away.

Chrome Web Store: [link]
GitHub: [link if open source]

Would love feedback on:
- Useful detection scenarios I'm missing
- Calculator features that would be most valuable in-extension
- Any equity term detection bugs

Built with Manifest V3, vanilla JS, and FounderMath's existing
calculator suite.

Thanks for checking it out!
```

**Reddit r/startups:**
```
Title: Free tool: Chrome extension that detects equity terms and shows calculators

Body: Hey r/startups,

I built a Chrome extension that detects startup equity terms (dilution,
vesting, stock options, etc.) on any webpage and shows you relevant
calculators instantly.

Perfect for:
- Analyzing job offers while browsing LinkedIn/careers pages
- Understanding funding announcements while reading TechCrunch
- Quick equity math during founder discussions

Free, no signup, works on any site:

[Chrome Web Store link]

Would love feedback from fellow founders!
```

---

## Conclusion

The Chrome extension is a low-cost, high-upside distribution channel
that extends FounderMath into the user's browsing workflow. With a
minimal $5 investment and 12-19 hours of development, it has
potential to drive 200-7,500 monthly visits and meaningful revenue.

**Recommendation: Proceed with MVP.**

