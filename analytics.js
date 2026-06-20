// Credential-free pageview beacon. Fires once per browser session per page.
// Proxied through /api/hit (Abacus-backed) so no third-party call hits the browser.
(function () {
  try {
    if (window.location.hostname === 'localhost' || window.location.protocol === 'file:') return;
    var key = 'fm_hit_' + window.location.pathname;
    if (sessionStorage.getItem(key)) return; // count sessions, not reloads
    sessionStorage.setItem(key, '1');
    var payload = JSON.stringify({ path: window.location.pathname });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/hit', new Blob([payload], { type: 'application/json' }));
    } else {
      fetch('/api/hit', { method: 'POST', body: payload, headers: { 'Content-Type': 'application/json' }, keepalive: true });
    }
  } catch (e) {
    // never break the page
  }
})();
