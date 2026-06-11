/**
 * FounderMath Equity Calculation Library
 * Free startup equity calculation utilities for Node.js
 *
 * Tools: founder-math.com | npm: foundermath-equity
 * @module foundermath-equity
 */

'use strict';

// ============================================================================
// EQUITY DILUTION
// ============================================================================

/**
 * Calculate equity ownership after multiple funding rounds.
 * @param {Object} options
 * @param {number} options.startingOwnership - Starting ownership percentage (e.g., 33.3)
 * @param {number} options.numRounds - Number of funding rounds (1-8)
 * @param {number} options.dilutionPerRound - Average dilution per round as percentage (e.g., 20)
 * @returns {Object} Dilution projection with per-round breakdown
 */
function calculateDilution({ startingOwnership, numRounds = 3, dilutionPerRound = 20 }) {
  if (startingOwnership <= 0 || startingOwnership > 100) {
    throw new Error('startingOwnership must be between 0 and 100');
  }
  if (numRounds < 1 || numRounds > 8) {
    throw new Error('numRounds must be between 1 and 8');
  }

  const rounds = [];
  let current = startingOwnership;

  for (let i = 1; i <= numRounds; i++) {
    const diluted = current * (dilutionPerRound / 100);
    current = current - diluted;
    rounds.push({
      round: i,
      ownershipBefore: +(rounds.length > 0 ? rounds[rounds.length - 1].ownershipAfter : startingOwnership).toFixed(4),
      dilutionAmount: +diluted.toFixed(4),
      ownershipAfter: +current.toFixed(4),
    });
  }

  return {
    startingOwnership,
    finalOwnership: +current.toFixed(4),
    totalDilution: +(startingOwnership - current).toFixed(4),
    dilutionPercent: +((1 - current / startingOwnership) * 100).toFixed(2),
    rounds,
  };
}

// ============================================================================
// SAFE NOTE CONVERSION
// ============================================================================

/**
 * Calculate SAFE note conversion at a priced round.
 * @param {Object} options
 * @param {number} options.investmentAmount - Amount invested via SAFE (e.g., 50000)
 * @param {string} options.safeType - 'pre-money' or 'post-money'
 * @param {number} options.valuationCap - Valuation cap (e.g., 5000000)
 * @param {number} options.discount - Discount rate (e.g., 20 for 20%)
 * @param {number} options.pricedRoundValuation - Pre-money valuation of priced round
 * @param {number} options.newMoneyInPriced - New money being invested in priced round
 * @returns {Object} SAFE conversion details
 */
function calculateSAFEConversion({ investmentAmount, safeType = 'post-money', valuationCap, discount = 0, pricedRoundValuation, newMoneyInPriced = 0 }) {
  if (investmentAmount <= 0) throw new Error('investmentAmount must be positive');
  if (!valuationCap || valuationCap <= 0) throw new Error('valuationCap must be positive');

  // Calculate effective valuation (lower of cap-adjusted and discount-adjusted price)
  let effectiveValuation = valuationCap;
  if (discount > 0) {
    const discountedValuation = pricedRoundValuation * (1 - discount / 100);
    effectiveValuation = Math.min(valuationCap, discountedValuation);
  }

  let ownershipPercent;
  if (safeType === 'post-money') {
    ownershipPercent = (investmentAmount / effectiveValuation) * 100;
  } else {
    // Pre-money SAFE: ownership = investment / (effectiveValuation + investment)
    ownershipPercent = (investmentAmount / (effectiveValuation + investmentAmount)) * 100;
  }

  const sharesEquivalent = (investmentAmount / effectiveValuation) * 1000000; // per 1M shares

  return {
    investmentAmount,
    safeType,
    valuationCap,
    discount: discount || 0,
    effectiveValuation: +effectiveValuation.toFixed(2),
    ownershipPercent: +ownershipPercent.toFixed(4),
    sharesPerMillion: +sharesEquivalent.toFixed(2),
    pricePerShare: +(effectiveValuation / 1000000).toFixed(4),
  };
}

// ============================================================================
// VESTING SCHEDULE
// ============================================================================

/**
 * Calculate vesting schedule for equity grants.
 * @param {Object} options
 * @param {number} options.totalShares - Total shares granted
 * @param {number} options.vestingYears - Total vesting period in years (default 4)
 * @param {number} options.cliffMonths - Cliff period in months (default 12)
 * @param {number} options.cliffPercent - Percentage that vests at cliff (default 25)
 * @returns {Object} Vesting schedule with monthly breakdown
 */
function calculateVesting({ totalShares, vestingYears = 4, cliffMonths = 12, cliffPercent = 25 }) {
  if (totalShares <= 0) throw new Error('totalShares must be positive');

  const totalMonths = vestingYears * 12;
  const cliffShares = Math.floor(totalShares * (cliffPercent / 100));
  const remainingShares = totalShares - cliffShares;
  const postCliffMonths = totalMonths - cliffMonths;
  const monthlyVest = postCliffMonths > 0 ? remainingShares / postCliffMonths : 0;

  const months = [];
  let vested = 0;

  for (let m = 1; m <= totalMonths; m++) {
    if (m < cliffMonths) {
      months.push({ month: m, vested: 0, cumulative: 0 });
    } else if (m === cliffMonths) {
      vested = cliffShares;
      months.push({ month: m, vested: cliffShares, cumulative: cliffShares });
    } else {
      const monthVest = Math.min(monthlyVest, totalShares - vested);
      vested += monthVest;
      months.push({ month: m, vested: +monthVest.toFixed(2), cumulative: +vested.toFixed(2) });
    }
  }

  return {
    totalShares,
    vestingYears,
    cliffMonths,
    cliffShares,
    postCliffMonthlyVest: +monthlyVest.toFixed(2),
    fullyVestedDate: `${vestingYears} years`,
    months,
  };
}

// ============================================================================
// RUNWAY CALCULATOR
// ============================================================================

/**
 * Calculate startup runway in months.
 * @param {Object} options
 * @param {number} options.cashBalance - Current cash in bank
 * @param {number} options.monthlyBurn - Net monthly burn rate (expenses - revenue)
 * @param {number} options.monthlyRevenue - Monthly recurring revenue (default 0)
 * @param {number} options.monthlyExpenses - Total monthly expenses (default 0)
 * @returns {Object} Runway calculation
 */
function calculateRunway({ cashBalance, monthlyBurn, monthlyRevenue = 0, monthlyExpenses = 0 }) {
  if (cashBalance <= 0) throw new Error('cashBalance must be positive');

  const burn = monthlyBurn || (monthlyExpenses - monthlyRevenue);
  if (burn <= 0) {
    return { runwayMonths: Infinity, runwayYears: Infinity, isProfitable: true, message: 'Profitable — infinite runway' };
  }

  const runwayMonths = Math.floor(cashBalance / burn);
  const runwayYears = +(runwayMonths / 12).toFixed(1);
  const runOutDate = new Date();
  runOutDate.setMonth(runOutDate.getMonth() + runwayMonths);

  return {
    cashBalance,
    monthlyBurn: +burn.toFixed(2),
    runwayMonths,
    runwayYears,
    runOutDate: runOutDate.toISOString().split('T')[0],
    isProfitable: false,
  };
}

// ============================================================================
// STOCK OPTION VALUE
// ============================================================================

/**
 * Calculate stock option value and potential returns.
 * @param {Object} options
 * @param {number} options.numOptions - Number of options granted
 * @param {number} options.strikePrice - Exercise (strike) price per share
 * @param {number} options.currentFMV - Current 409A fair market value
 * @param {number} options.exitPricePerShare - Hypothetical exit price per share
 * @returns {Object} Option value calculation
 */
function calculateStockOptionValue({ numOptions, strikePrice, currentFMV, exitPricePerShare }) {
  if (numOptions <= 0) throw new Error('numOptions must be positive');
  if (strikePrice <= 0) throw new Error('strikePrice must be positive');

  const exerciseCost = numOptions * strikePrice;
  const currentValue = numOptions * (currentFMV - strikePrice);
  const exitValue = exitPricePerShare ? numOptions * (exitPricePerShare - strikePrice) : null;
  const paperGain = numOptions * currentFMV;

  return {
    numOptions,
    strikePrice,
    currentFMV,
    exerciseCost: +exerciseCost.toFixed(2),
    currentValue: Math.max(0, +currentValue.toFixed(2)),
    paperGain: +paperGain.toFixed(2),
    exitValue: exitValue !== null ? +exitValue.toFixed(2) : null,
    exitMultiple: exitPricePerShare ? +(exitPricePerShare / strikePrice).toFixed(2) : null,
  };
}

// ============================================================================
// COFOUNDER EQUITY SPLIT
// ============================================================================

/**
 * Calculate cofounder equity split based on contributions.
 * Uses a weighted scoring model across key dimensions.
 * @param {Array} founders - Array of founder contribution objects
 * @param {string} founders[].name - Founder name
 * @param {number} founders[].idea - Idea contribution (1-10)
 * @param {number} founders[].timeCommitment - Time commitment (1-10)
 * @param {number} founders[].capital - Capital contribution (1-10)
 * @param {number} founders[].skills - Unique skills (1-10)
 * @param {number} founders[].network - Network/connections (1-10)
 * @param {number} founders[].opportunityCost - Opportunity cost (1-10)
 * @returns {Object} Recommended equity split
 */
function calculateEquitySplit(founders) {
  if (!Array.isArray(founders) || founders.length < 2) {
    throw new Error('Must provide at least 2 founders');
  }

  const weights = {
    idea: 0.15,
    timeCommitment: 0.25,
    capital: 0.20,
    skills: 0.20,
    network: 0.10,
    opportunityCost: 0.10,
  };

  const scores = founders.map(f => {
    const score = Object.entries(weights).reduce((sum, [key, weight]) => {
      return sum + (f[key] || 0) * weight;
    }, 0);
    return { name: f.name, score };
  });

  const totalScore = scores.reduce((sum, f) => sum + f.score, 0);

  return {
    founders: scores.map(f => ({
      name: f.name,
      score: +f.score.toFixed(2),
      equityPercent: +((f.score / totalScore) * 100).toFixed(2),
    })),
    weights,
  };
}

// ============================================================================
// CONVERTIBLE NOTE
// ============================================================================

/**
 * Calculate convertible note conversion.
 * @param {Object} options
 * @param {number} options.principal - Principal investment amount
 * @param {number} options.interestRate - Annual interest rate (e.g., 5 for 5%)
 * @param {number} options.maturityMonths - Months until maturity (default 24)
 * @param {number} options.valuationCap - Valuation cap
 * @param {number} options.discount - Conversion discount (e.g., 20 for 20%)
 * @param {number} options.pricedRoundValuation - Pre-money valuation at conversion
 * @returns {Object} Convertible note conversion details
 */
function calculateConvertibleNote({ principal, interestRate = 5, maturityMonths = 24, valuationCap, discount = 20, pricedRoundValuation }) {
  if (principal <= 0) throw new Error('principal must be positive');

  const accrued = principal * (interestRate / 100) * (maturityMonths / 12);
  const totalOwed = principal + accrued;

  if (!pricedRoundValuation || !valuationCap) {
    return { principal, accruedInterest: +accrued.toFixed(2), totalOwed: +totalOwed.toFixed(2), converted: false };
  }

  // Determine conversion price
  const capPrice = totalOwed / valuationCap;
  const discountPrice = totalOwed / (pricedRoundValuation * (1 - discount / 100));
  const conversionPricePerDollar = Math.min(capPrice, discountPrice);

  const ownershipPercent = conversionPricePerDollar * 100;
  const effectiveValuation = totalOwed / conversionPricePerDollar;

  return {
    principal,
    interestRate,
    maturityMonths,
    accruedInterest: +accrued.toFixed(2),
    totalOwed: +totalOwed.toFixed(2),
    valuationCap,
    discount,
    effectiveValuation: +effectiveValuation.toFixed(2),
    ownershipPercent: +ownershipPercent.toFixed(4),
    converted: true,
  };
}

// ============================================================================
// EXPORTS
// ============================================================================

module.exports = {
  calculateDilution,
  calculateSAFEConversion,
  calculateVesting,
  calculateRunway,
  calculateStockOptionValue,
  calculateEquitySplit,
  calculateConvertibleNote,
};
