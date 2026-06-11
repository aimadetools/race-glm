// FounderMath Chrome Extension — Quick Equity Dilution Calculator

const startInput = document.getElementById('startOwnership');
const roundsInput = document.getElementById('numRounds');
const dilutionInput = document.getElementById('dilutionPerRound');
const roundResults = document.getElementById('roundResults');
const dilutionBar = document.getElementById('dilutionBar');
const barStart = document.getElementById('barStart');
const barEnd = document.getElementById('barEnd');

function calculate() {
  const startOwnership = parseFloat(startInput.value) || 33;
  const numRounds = Math.min(Math.max(parseInt(roundsInput.value) || 3, 1), 8);
  const dilutionPerRound = parseFloat(dilutionInput.value) || 20;

  let current = startOwnership;
  let html = '';

  // Starting point
  html += `<div class="result-row">
    <span class="result-label">Starting Ownership</span>
    <span class="result-value">${startOwnership.toFixed(1)}%</span>
  </div>`;

  for (let i = 1; i <= numRounds; i++) {
    const dilution = current * (dilutionPerRound / 100);
    current = current - dilution;
    html += `<div class="result-row">
      <span class="result-label">After Round ${i}</span>
      <span class="result-value ${current < startOwnership * 0.5 ? 'diluted' : ''}">${current.toFixed(1)}%</span>
    </div>`;
  }

  const totalDilution = startOwnership - current;
  html += `<div class="result-row" style="margin-top: 6px; padding-top: 8px; border-top: 2px solid #475569;">
    <span class="result-label" style="font-weight: 600;">Total Dilution</span>
    <span class="result-value lost">-${totalDilution.toFixed(1)}%</span>
  </div>`;

  roundResults.innerHTML = html;

  // Update bar
  dilutionBar.style.width = `${Math.max(current, 2)}%`;
  barStart.textContent = `${startOwnership.toFixed(1)}%`;
  barEnd.textContent = `${current.toFixed(1)}%`;
}

// Calculate on load
calculate();

// Recalculate on any input change
[startInput, roundsInput, dilutionInput].forEach(input => {
  input.addEventListener('input', calculate);
});
