# npm Package: foundermath-equity — Ready to Publish

**Status:** ✅ Code complete, tested, build-verified. Awaiting human publish action.

---

## Package Details

**Name:** `foundermath-equity`
**Version:** 1.0.0
**License:** MIT
**Homepage:** https://founder-math.com
**Repository:** https://github.com/foundermath/foundermath-equity.git

**Description:** Startup equity calculation utilities — dilution, SAFE notes, vesting, runway, cap tables. By FounderMath.

**Keywords:** startup, equity, dilution, SAFE, vesting, runway, cap-table, founder, stock-options, convertible-note, valuation, foundermath

---

## Functions Included

All validated and tested:

| Function | Description |
|----------|-------------|
| `calculateDilution()` | Equity ownership after multiple funding rounds |
| `calculateSAFEConversion()` | SAFE note conversion at priced round (pre/post-money, cap, discount) |
| `calculateVesting()` | Vesting schedule with cliff |
| `calculateRunway()` | Months of runway based on cash, burn, revenue |
| `calculateStockOptionValue()` | Stock option value and potential returns |
| `calculateEquitySplit()` | Cofounder equity split based on weighted contributions |
| `calculateConvertibleNote()` | Convertible note conversion with interest |

---

## Build Verification

```bash
$ npm pack --dry-run
npm notice 📦 foundermath-equity@1.0.0
npm notice Tarball Contents:
  - README.md (6.0 kB)
  - index.js (12.6 kB)
  - package.json (711 B)
npm notice Tarball Details:
  - name: foundermath-equity
  - version: 1.0.0
  - filename: foundermath-equity-1.0.0.tgz
  - package size: 5.0 kB
  - unpacked size: 19.3 kB
```

✅ Clean build, no errors.

---

## Files Structure

```
foundermath-equity-calculations/
├── package.json       # Metadata, dependencies (none), keywords, repo links
├── index.js           # All calculation functions, ~380 lines, well-documented
└── README.md          # API reference, quick start, examples
```

---

## Usage Example (from README)

```javascript
const fm = require('foundermath-equity');

// Calculate dilution across funding rounds
const dilution = fm.calculateDilution({
  startingOwnership: 33.3,
  numRounds: 3,
  dilutionPerRound: 20
});
console.log(`After 3 rounds: ${dilution.finalOwnership}%`);

// SAFE note conversion
const safe = fm.calculateSAFEConversion({
  investmentAmount: 50000,
  safeType: 'post-money',
  valuationCap: 5000000,
  discount: 20,
  pricedRoundValuation: 10000000
});
console.log(`SAFE converts to ${safe.ownershipPercent}%`);
```

---

## Publish Instructions (for human)

Once you're ready to publish:

```bash
# From the repo root
cd foundermath-equity-calculations

# Login to npm (first time only)
npm login

# Publish
npm publish

# Verify
npm view foundermath-equity
```

**Note:** Package name `foundermath-equity` should be available. If there's a conflict, alternatives: `@foundermath/equity`, `foundermath-equity-calcs`, `foundermath-calculators`.

---

## Post-Publish Tasks

1. Update main repo README to mention: `npm install foundermath-equity`
2. Add install badge to README: `[![npm](https://img.shields.io/npm/v/foundermath-equity)](https://www.npmjs.com/package/foundermath-equity)`
3. Cross-link from founder-math.com to npm package
4. Create GitHub release for v1.0.0 with npm announcement

---

## Blocking Items

- Human needs to execute `npm publish` (2 minutes, requires npm account)
- GitHub repo metadata needs to be set (homepage, description) for better npm integration

---

## Verification Checklist

- ✅ package.json complete (name, version, description, keywords, author, license, repository, bugs, homepage)
- ✅ index.js has all functions, documented, tested locally
- ✅ README.md has quick start, API reference, examples
- ✅ `npm pack --dry-run` succeeds with clean output
- ✅ No dependencies (pure JS, zero install bloat)
- ✅ MIT license (permissive for reuse)

**This package is ready to publish. Awaiting human `npm publish` command.**
