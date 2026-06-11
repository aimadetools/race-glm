# foundermath-equity

> Startup equity calculation utilities — dilution, SAFE notes, vesting, runway, cap tables.

By [FounderMath](https://founder-math.com) — free interactive equity calculators for startup founders.

## Install

```bash
npm install foundermath-equity
```

## Quick Start

```javascript
const fm = require('foundermath-equity');

// Calculate dilution across funding rounds
const dilution = fm.calculateDilution({
  startingOwnership: 33.3,
  numRounds: 3,
  dilutionPerRound: 20
});
console.log(`After 3 rounds: ${dilution.finalOwnership}% (lost ${dilution.totalDilution}%)`);

// SAFE note conversion
const safe = fm.calculateSAFEConversion({
  investmentAmount: 50000,
  safeType: 'post-money',
  valuationCap: 5000000,
  discount: 20,
  pricedRoundValuation: 10000000
});
console.log(`SAFE converts to ${safe.ownershipPercent}% ownership`);

// Vesting schedule
const vesting = fm.calculateVesting({
  totalShares: 10000,
  vestingYears: 4,
  cliffMonths: 12
});
console.log(`${vesting.cliffShares} shares vest at 1-year cliff`);

// Runway calculator
const runway = fm.calculateRunway({
  cashBalance: 500000,
  monthlyBurn: 40000
});
console.log(`Runway: ${runway.runwayMonths} months`);

// Stock option value
const options = fm.calculateStockOptionValue({
  numOptions: 10000,
  strikePrice: 0.50,
  currentFMV: 2.00,
  exitPricePerShare: 10.00
});
console.log(`Exercise cost: $${options.exerciseCost}, Exit value: $${options.exitValue}`);

// Cofounder equity split
const split = fm.calculateEquitySplit([
  { name: 'Alice', idea: 8, timeCommitment: 10, capital: 7, skills: 9, network: 6, opportunityCost: 8 },
  { name: 'Bob', idea: 5, timeCommitment: 8, capital: 8, skills: 7, network: 9, opportunityCost: 6 },
]);
split.founders.forEach(f => console.log(`${f.name}: ${f.equityPercent}%`));

// Convertible note conversion
const note = fm.calculateConvertibleNote({
  principal: 100000,
  interestRate: 5,
  maturityMonths: 24,
  valuationCap: 5000000,
  discount: 20,
  pricedRoundValuation: 8000000
});
console.log(`Note converts to ${note.ownershipPercent}% at effective valuation $${note.effectiveValuation}`);
```

## API Reference

### `calculateDilution(options)`
Calculate equity ownership after multiple funding rounds.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `startingOwnership` | number | required | Starting ownership % |
| `numRounds` | number | 3 | Number of funding rounds (1-8) |
| `dilutionPerRound` | number | 20 | Average dilution % per round |

Returns: `{ startingOwnership, finalOwnership, totalDilution, dilutionPercent, rounds[] }`

### `calculateSAFEConversion(options)`
Calculate SAFE note conversion at a priced round.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `investmentAmount` | number | required | Amount invested via SAFE |
| `safeType` | string | 'post-money' | 'pre-money' or 'post-money' |
| `valuationCap` | number | required | Valuation cap |
| `discount` | number | 0 | Discount rate % |
| `pricedRoundValuation` | number | required | Pre-money valuation of priced round |

Returns: `{ investmentAmount, safeType, effectiveValuation, ownershipPercent, sharesPerMillion, pricePerShare }`

### `calculateVesting(options)`
Calculate vesting schedule for equity grants.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `totalShares` | number | required | Total shares granted |
| `vestingYears` | number | 4 | Total vesting period in years |
| `cliffMonths` | number | 12 | Cliff period in months |
| `cliffPercent` | number | 25 | Percentage that vests at cliff |

Returns: `{ totalShares, cliffShares, postCliffMonthlyVest, months[] }`

### `calculateRunway(options)`
Calculate startup runway in months.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `cashBalance` | number | required | Current cash in bank |
| `monthlyBurn` | number | — | Net monthly burn rate |
| `monthlyRevenue` | number | 0 | Monthly recurring revenue |
| `monthlyExpenses` | number | 0 | Total monthly expenses |

Returns: `{ cashBalance, monthlyBurn, runwayMonths, runwayYears, runOutDate, isProfitable }`

### `calculateStockOptionValue(options)`
Calculate stock option value and potential returns.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `numOptions` | number | required | Number of options granted |
| `strikePrice` | number | required | Exercise price per share |
| `currentFMV` | number | required | Current 409A fair market value |
| `exitPricePerShare` | number | — | Hypothetical exit price per share |

Returns: `{ exerciseCost, currentValue, paperGain, exitValue, exitMultiple }`

### `calculateEquitySplit(founders)`
Calculate cofounder equity split based on weighted contributions.

Each founder: `{ name, idea, timeCommitment, capital, skills, network, opportunityCost }` (all 1-10)

Returns: `{ founders[{ name, score, equityPercent }], weights }`

### `calculateConvertibleNote(options)`
Calculate convertible note conversion.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `principal` | number | required | Investment amount |
| `interestRate` | number | 5 | Annual interest rate % |
| `maturityMonths` | number | 24 | Months until maturity |
| `valuationCap` | number | — | Valuation cap |
| `discount` | number | 20 | Conversion discount % |
| `pricedRoundValuation` | number | — | Pre-money valuation at conversion |

Returns: `{ principal, accruedInterest, totalOwed, effectiveValuation, ownershipPercent }`

## License

MIT

## Links

- **Website:** [founder-math.com](https://founder-math.com)
- **Free Tools:** [25+ startup calculators](https://founder-math.com/free-startup-tools.html)
- **Free Equity Report:** [founder-math.com/equity-report.html](https://founder-math.com/equity-report.html)
