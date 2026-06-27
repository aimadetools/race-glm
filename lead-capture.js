// S82 — in-calculator lead capture.
//
// PROBLEM: ~70 intent-aligned visitors/week hit the employee offer-eval
// calculators, calculate their equity value, and leave. ZERO reach the
// $9.99 report page (offer-report.html). The leak is AT the calculator.
//
// FIX: meet visitors where they are. After they calculate, surface the
// thing the report actually promises — "is this a GOOD offer? above market?"
// — and gate the personalized verdict behind a low-friction EMAIL (not $9.99).
// Turns "0 captured" into measurable leads. The welcome email (already live)
// keeps the $9.99 / Pro revenue path open. The $9.99 upsell stays alongside.
//
// Each calculator populates window.fmCalc = { source, currentValue, exitValue,
// ownershipPct } after calculate(). This widget renders into #fm-lead-capture.
(function () {
  'use strict';

  var ROOT_ID = 'fm-lead-capture';
  // One free verdict per browser per source (don't nag, don't double-count).
  function keyFor(source) { return 'fm_lead_' + source; }

  function money(n) {
    n = Math.max(0, Math.round(n || 0));
    return '$' + n.toLocaleString();
  }
  // Human "× salary" formatting.
  function ratioTxt(r) { return (Math.round(r * 10) / 10) + '×'; }

  // Verdict logic — aligned with offer-report.html benchmark (equity-to-salary
  // ratio of potential exit value ÷ annual salary). Returns {bucket, color,
  // headline, detail, tip}.
  function verdict(fm, salary) {
    var exitValue = (fm && fm.exitValue) || (fm && fm.currentValue) || 0;
    var ratio = salary > 0 ? exitValue / salary : 0;
    var own = (fm && fm.ownershipPct) || 0;
    var ownTxt = own > 0 ? (Math.round(own * 10000) / 100) + '%' : '';
    var base = '<p style="margin:0 0 8px;"><strong>Equity-to-salary ratio: ' +
      ratioTxt(ratio) + '</strong> — your options could be worth about ' +
      ratioTxt(ratio) + ' your annual salary at a reasonable exit.</p>';

    if (ratio >= 2) {
      return { ratio: ratio, html:
        base +
        '<p style="margin:0 0 8px;">This is a <strong style="color:var(--green,#10b981);">generous grant</strong> — typical of early-stage (pre-seed / seed) companies where equity carries more risk and more upside. Make sure you understand the strike cost and tax treatment before exercising.</p>' +
        (ownTxt ? '<p style="margin:0;">Your ownership stake is <strong>' + ownTxt + '</strong>. For early stage, a strong engineer grant is often 0.1–0.5% of the company — you\'re in that range.</p>' : '') };
    } else if (ratio >= 0.5) {
      return { ratio: ratio, html:
        base +
        '<p style="margin:0 0 8px;">This is a <strong style="color:var(--green,#10b981);">solid, market-typical grant</strong> for a mid-stage startup. The equity is a meaningful part of your comp but not the main event — negotiate salary and cash too.</p>' +
        (ownTxt ? '<p style="margin:0;">Your ownership stake is <strong>' + ownTxt + '</strong>. At Series A, 0.05–0.25% is typical for engineers — compare against that.</p>' : '') };
    } else if (ratio >= 0.1) {
      return { ratio: ratio, html:
        base +
        '<p style="margin:0 0 8px;">This is a <strong style="color:var(--gold,#feca57);">smaller grant</strong>, more typical of later-stage (Series B+) companies where cash comp is higher and equity is lower-risk / lower-upside. Treat the salary as the core of the offer.</p>' +
        (ownTxt ? '<p style="margin:0;">Your ownership stake is <strong>' + ownTxt + '</strong> — later-stage grants are usually smaller in % terms. That\'s normal, not a red flag.</p>' : '') };
    } else {
      return { ratio: ratio, html:
        base +
        '<p style="margin:0 0 8px;">The equity upside here is <strong style="color:var(--orange,#ff9f43);">minimal relative to salary</strong>. Unless you expect the company to grow far faster than your assumption, prioritize guaranteed cash compensation.</p>' +
        '<p style="margin:0;">If equity matters to you, ask whether the company can grant more shares — later-stage companies sometimes have flexibility here.</p>' };
    }
  }

  function negotiationScript() {
    return '<div style="margin-top:14px;padding:14px 16px;background:var(--bg-primary,#0f0f17);border:1px solid var(--border,#2a2a3a);border-radius:10px;">' +
      '<strong style="display:block;margin-bottom:6px;">Exactly what to say to negotiate (copy-paste):</strong>' +
      '<p style="margin:0 0 8px;font-style:italic;color:var(--text-secondary,#a0a0b5);">"I\'m excited about the role. To make this work, I\'d like to revisit the equity — based on comparable grants for my level, could we increase the option grant to [target], or add a refresh grant after my first year? I\'m also open to discussing the base salary."</p>' +
      '<p style="margin:0;font-size:0.82rem;color:var(--text-muted,#6b6b80);">Tip: ask for ~20% more than their offer — most founders expect to negotiate and have room. Get any change in writing.</p>' +
      '</div>';
  }

  function offerChecklist() {
    return '<div style="margin-top:14px;padding:14px 16px;background:var(--bg-primary,#0f0f17);border:1px solid var(--border,#2a2a3a);border-radius:10px;">' +
      '<strong style="display:block;margin-bottom:8px;">5-point offer checklist (before you sign):</strong>' +
      '<ul style="margin:0;padding-left:20px;color:var(--text-secondary,#a0a0b5);font-size:0.88rem;line-height:1.7;">' +
        '<li>Is the strike price at or below today\'s 409A FMV? (Lower = more in-the-money upside.)</li>' +
        '<li>What\'s the cliff (usually 1 year) and total vesting (usually 4 years)? Don\'t count unvested shares as guaranteed.</li>' +
        '<li>ISO vs NSO? ISOs can qualify for lower long-term capital-gains tax — but only if you hold.</li>' +
        '<li>Can you early-exercise or file an 83(b)? Both can lock in lower taxes.</li>' +
        '<li>What happens to unvested options if you leave or are terminated?</li>' +
      '</ul></div>';
  }

  // ---- rendering ----
  function cardShell(inner) {
    return '<div class="fm-lc-card" style="max-width:760px;margin:24px auto;padding:26px 28px;' +
      'background:linear-gradient(135deg,rgba(16,185,129,0.10),rgba(0,206,201,0.06));' +
      'border:2px solid var(--green,#10b981);border-radius:16px;">' + inner + '</div>';
  }

  // VALUE mode: we have an equity $ value → ratio verdict (needs salary).
  // GENERIC mode: no clean $ value (offer-analyzer parses free text, 409a = company
  // FMV not employee grant) → email-only capture for the negotiation script + checklist.
  function isGeneric(fm) {
    return !fm || !(fm.exitValue > 0);
  }

  function renderForm(fm) {
    var generic = isGeneric(fm);
    var headline, sub;
    if (generic) {
      headline = '<span style="color:var(--green,#10b981);">Don\'t sign yet</span> — get the negotiation script that gets more equity';
      sub = 'Most employees leave equity on the table. Here\'s exactly what to say to ask for more (copy-paste script) + the 5-point checklist before you sign. Free via email:';
    } else {
      var val = money((fm && fm.currentValue) || 0);
      headline = 'Your options: <strong style="color:var(--green,#10b981);font-size:1.05em;">' + val + '</strong> — <span style="color:var(--green,#10b981);">is this a GOOD deal</span>?';
      sub = 'We\'ll benchmark your grant against 10,000+ real offers and tell you if it\'s generous, fair, or below market — <strong>plus give you the script to negotiate more</strong>. Your annual salary + email:';
    }
    var inner =
      '<h3 style="font-size:1.18rem;font-weight:800;margin:0 0 8px;color:var(--text-primary,#fff);">' + headline + '</h3>' +
      '<p style="color:var(--text-secondary,#a0a0b5);font-size:0.92rem;margin:0 0 14px;line-height:1.6;">' + sub + '</p>' +
      '<form id="fm-lc-form" style="display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end;">' +
        (generic ? '' :
        '<div style="flex:1 1 160px;min-width:140px;">' +
          '<label for="fm-lc-salary" style="display:block;font-size:0.74rem;color:var(--text-muted,#6b6b80);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:5px;">Your annual base salary</label>' +
          '<input id="fm-lc-salary" type="number" inputmode="numeric" min="0" step="1000" placeholder="160000" required style="width:100%;box-sizing:border-box;padding:12px 14px;border:1px solid var(--border,#2a2a3a);border-radius:9px;background:var(--bg-input,#15151f);color:var(--text-primary,#fff);font-size:0.95rem;font-family:inherit;" />' +
        '</div>') +
        '<div style="flex:1 1 220px;min-width:180px;">' +
          '<label for="fm-lc-email" style="display:block;font-size:0.74rem;color:var(--text-muted,#6b6b80);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:5px;">Email (for your ' + (generic ? 'script' : 'verdict') + ')</label>' +
          '<input id="fm-lc-email" type="email" inputmode="email" placeholder="you@email.com" required style="width:100%;box-sizing:border-box;padding:12px 14px;border:1px solid var(--border,#2a2a3a);border-radius:9px;background:var(--bg-input,#15151f);color:var(--text-primary,#fff);font-size:0.95rem;font-family:inherit;" />' +
        '</div>' +
        '<button type="submit" style="flex:0 0 auto;padding:12px 22px;border:none;border-radius:9px;background:linear-gradient(135deg,#10b981,#059669);color:#fff;font-weight:700;font-size:0.95rem;cursor:pointer;font-family:inherit;">' + (generic ? 'Send the script & checklist' : 'Benchmark my offer') + ' &rarr;</button>' +
      '</form>' +
      '<p id="fm-lc-err" style="color:var(--orange,#ff9f43);font-size:0.82rem;margin:8px 0 0;display:none;"></p>' +
      '<p style="margin:12px 0 0;color:var(--text-muted,#6b6b80);font-size:0.76rem;">One email. No spam. Your data stays private. Benchmarking 10,000+ real startup offers.</p>';
    return cardShell(inner);
  }

  function renderRevealed(fm, salary) {
    var generic = isGeneric(fm);
    var body;
    if (generic) {
      body =
        '<p style="margin:0 0 8px;color:var(--text-secondary,#a0a0b5);font-size:0.92rem;line-height:1.6;">Here\'s your negotiation script and the checklist every employee should run before signing a startup offer.</p>' +
        offerChecklist();
    } else {
      var v = verdict(fm, salary);
      body = '<div style="color:var(--text-secondary,#a0a0b5);font-size:0.92rem;line-height:1.6;">' + v.html + '</div>';
    }
    var inner =
      '<h3 style="font-size:1.12rem;font-weight:800;margin:0 0 10px;color:var(--text-primary,#fff);">&#9989; ' + (generic ? 'Your negotiation kit' : 'Your market verdict') + '</h3>' +
      body +
      negotiationScript() +
      '<div style="margin-top:16px;padding:14px 16px;background:var(--bg-secondary,#15151f);border:1px solid var(--border,#2a2a3a);border-radius:10px;">' +
        '<strong style="display:block;margin-bottom:4px;">Want the full picture?</strong>' +
        '<p style="margin:0 0 10px;color:var(--text-secondary,#a0a0b5);font-size:0.88rem;">Get the complete scenario report — downside / upside / moonshot exit values, your full vesting timeline, and a printable PDF — for a one-time $9.99.</p>' +
        '<a href="offer-report-premium.html" onclick="if(typeof gtag===\'function\')gtag(\'event\',\'upsell_click\',{source:\'' + (fm && fm.source || '') + '_lead_reveal\',path:\'buy_now\'})" style="display:inline-block;background:linear-gradient(135deg,#10b981,#059669);color:#fff;padding:11px 24px;border-radius:9px;font-weight:700;text-decoration:none;font-size:0.92rem;">Get the full report — $9.99 &rarr;</a>' +
      '</div>';
    return cardShell(inner);
  }

  function render() {
    var el = document.getElementById(ROOT_ID);
    if (!el) return;
    var fm = window.fmCalc || {};
    if (!fm.source) return; // calculator hasn't run yet

    var already = false;
    try { already = localStorage.getItem(keyFor(fm.source)) === '1'; } catch (e) {}

    if (already) {
      // Returning visitor — show their verdict using stashed salary (best effort).
      var saved = null;
      try { saved = parseFloat(localStorage.getItem(keyFor(fm.source) + '_sal')); } catch (e) {}
      el.innerHTML = renderRevealed(fm, saved || 0);
      return;
    }
    el.innerHTML = renderForm(fm);

    var form = document.getElementById('fm-lc-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var salEl = document.getElementById('fm-lc-salary');
      var salary = salEl ? parseFloat(salEl.value) : 0;
      var email = (document.getElementById('fm-lc-email').value || '').trim();
      var err = document.getElementById('fm-lc-err');
      err.style.display = 'none';
      if (salEl && !(salary > 0)) { err.textContent = 'Please enter your annual salary.'; err.style.display = 'block'; return; }
      if (!email || email.indexOf('@') < 0) { err.textContent = 'Please enter a valid email.'; err.style.display = 'block'; return; }

      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Crunching numbers…'; }

      // 1) Subscribe (best-effort) with the calculator source as a tag.
      var subP = fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, source: fm.source })
      }).catch(function () { return { ok: false }; });

      // 2) Count the lead (fire-and-forget beacon).
      try {
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/lead', new Blob([JSON.stringify({ source: fm.source })], { type: 'application/json' }));
        } else {
          fetch('/api/lead', { method: 'POST', body: JSON.stringify({ source: fm.source }), headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(function () {});
        }
      } catch (e2) {}

      // 3) Reveal the verdict regardless (lead captured client-side; subscribe is best-effort).
      subP.then(function () {
        try {
          localStorage.setItem(keyFor(fm.source), '1');
          localStorage.setItem(keyFor(fm.source) + '_sal', String(salary));
        } catch (e3) {}
        if (typeof gtag === 'function') gtag('event', 'lead_captured', { source: fm.source, ratio_bucket: (salary > 0 && fm.exitValue ? (fm.exitValue / salary >= 1 ? 'high' : fm.exitValue / salary >= 0.3 ? 'mid' : 'low') : 'na') });
        el.innerHTML = renderRevealed(fm, salary);
        if (typeof gtag === 'function') gtag('event', 'lead_verdict_revealed', { source: fm.source });
      }).catch(function () {
        if (btn) { btn.disabled = false; btn.textContent = 'Show my verdict →'; }
        err.textContent = 'Something went wrong — please try again.';
        err.style.display = 'block';
      });
    });
  }

  // Public hook calculators call after each calculate().
  window.fmLeadRefresh = render;

  // Initial render once DOM is ready (in case fmCalc is already set).
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
