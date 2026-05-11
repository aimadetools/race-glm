// FounderMath Share Results System
// Generates shareable URLs with encoded calculator results
// When someone views a shared link, they see the results + a CTA to try the calculator themselves
(function() {
    // Compress data to URL-safe string
    function encodeResults(data) {
        try {
            var json = JSON.stringify(data);
            // Use btoa for base64, make URL-safe
            return btoa(unescape(encodeURIComponent(json)))
                .replace(/\+/g, '-')
                .replace(/\//g, '_')
                .replace(/=+$/, '');
        } catch(e) {
            return null;
        }
    }

    // Decompress URL-safe string back to data
    function decodeResults(encoded) {
        try {
            // Restore base64 padding
            var base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
            while (base64.length % 4) base64 += '=';
            var json = decodeURIComponent(escape(atob(base64)));
            return JSON.parse(json);
        } catch(e) {
            return null;
        }
    }

    // Generate share URL
    function getShareUrl(calculatorName, results) {
        var data = {
            c: calculatorName,
            r: results,
            t: Date.now()
        };
        var encoded = encodeResults(data);
        if (!encoded) return null;
        return window.location.origin + '/' + calculatorName + '.html?s=' + encoded;
    }

    // Copy to clipboard
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text);
        }
        // Fallback
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        return Promise.resolve();
    }

    // Show share modal
    function showShareModal(calculatorName, results, summaryText) {
        var shareUrl = getShareUrl(calculatorName, results);
        if (!shareUrl) return;

        // Remove existing modal
        var existing = document.getElementById('fm-share-modal');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.id = 'fm-share-modal';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);';

        var modal = document.createElement('div');
        modal.style.cssText = 'background:var(--bg-secondary,#12121a);border:1px solid var(--border,#2a2a40);border-radius:16px;max-width:480px;width:100%;padding:28px;position:relative;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;';

        var calcDisplayName = calculatorName.replace(/-/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase(); });

        modal.innerHTML =
            '<button id="fm-share-close" style="position:absolute;top:12px;right:16px;background:none;border:none;color:var(--text-muted,#666680);font-size:24px;cursor:pointer;line-height:1;" aria-label="Close">&times;</button>' +
            '<div style="text-align:center;margin-bottom:20px;">' +
                '<div style="display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);margin-bottom:12px;">' +
                    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>' +
                '</div>' +
                '<h3 style="color:var(--text-primary,#f0f0f5);font-size:1.15rem;margin:0 0 6px;">Share Your ' + calcDisplayName + ' Results</h3>' +
                '<p style="color:var(--text-secondary,#a0a0b5);font-size:0.85rem;margin:0;">Share this link with your cofounders or advisors.</p>' +
            '</div>' +
            (summaryText ? '<div style="background:var(--bg-card,#1a1a2e);border-radius:8px;padding:12px;margin-bottom:16px;font-size:0.85rem;color:var(--text-secondary,#a0a0b5);line-height:1.5;">' + summaryText + '</div>' : '') +
            '<div style="display:flex;gap:8px;margin-bottom:16px;">' +
                '<input type="text" value="' + shareUrl + '" readonly style="flex:1;background:var(--bg-primary,#0a0a0f);border:1px solid var(--border,#2a2a40);color:var(--text-primary,#f0f0f5);padding:10px 12px;border-radius:8px;font-size:0.8rem;font-family:monospace;overflow:hidden;text-overflow:ellipsis;" onclick="this.select()" aria-label="Share URL">' +
                '<button id="fm-share-copy" style="background:var(--accent,#6c5ce7);color:white;border:none;padding:10px 16px;border-radius:8px;font-weight:600;font-size:0.85rem;cursor:pointer;white-space:nowrap;">Copy</button>' +
            '</div>' +
            '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">' +
                '<a href="https://twitter.com/intent/tweet?text=' + encodeURIComponent('Check out my ' + calcDisplayName + ' results on @foundermath — ') + '&url=' + encodeURIComponent(shareUrl) + '" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:#1da1f2;color:white;text-decoration:none;padding:8px 14px;border-radius:8px;font-size:0.8rem;font-weight:600;">Twitter</a>' +
                '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl) + '" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:#0077b5;color:white;text-decoration:none;padding:8px 14px;border-radius:8px;font-size:0.8rem;font-weight:600;">LinkedIn</a>' +
                '<a href="mailto:?subject=' + encodeURIComponent('My ' + calcDisplayName + ' Results — FounderMath') + '&body=' + encodeURIComponent('Check out my startup equity calculations: ' + shareUrl) + '" style="display:inline-flex;align-items:center;gap:6px;background:var(--bg-card,#1a1a2e);color:var(--text-primary,#f0f0f5);text-decoration:none;padding:8px 14px;border-radius:8px;font-size:0.8rem;font-weight:600;border:1px solid var(--border,#2a2a40);">Email</a>' +
            '</div>' +
            '<div style="text-align:center;margin-top:12px;">' +
                '<span style="color:var(--text-muted,#666680);font-size:0.75rem;">Link expires never. Anyone with the link can view your results.</span>' +
            '</div>';

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Copy handler
        document.getElementById('fm-share-copy').onclick = function() {
            var btn = this;
            copyToClipboard(shareUrl).then(function() {
                btn.textContent = 'Copied!';
                btn.style.background = '#00b894';
                setTimeout(function() { btn.textContent = 'Copy'; btn.style.background = 'var(--accent,#6c5ce7)'; }, 2000);
                if (typeof gtag === 'function') gtag('event', 'share_link_copied', { calculator: calculatorName });
            });
        };

        // Close handlers
        function closeModal() { var m = document.getElementById('fm-share-modal'); if (m) m.remove(); }
        document.getElementById('fm-share-close').onclick = closeModal;
        document.getElementById('fm-share-maybe');
        overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', esc); }
        });

        if (typeof gtag === 'function') gtag('event', 'share_modal_shown', { calculator: calculatorName });
    }

    // Check if current page was loaded with shared results
    function checkForSharedResults() {
        var params = new URLSearchParams(window.location.search);
        var shared = params.get('s');
        if (!shared) return null;
        var data = decodeResults(shared);
        if (!data) return null;
        // Show a banner at the top indicating these are shared results
        showSharedBanner(data);
        return data;
    }

    function showSharedBanner(data) {
        var banner = document.createElement('div');
        banner.style.cssText = 'position:fixed;top:64px;left:0;right:0;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:white;padding:10px 16px;text-align:center;z-index:999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;font-size:0.85rem;';
        var calcName = (data.c || 'calculator').replace(/-/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase(); });
        banner.innerHTML =
            '<span style="font-weight:600;">Viewing shared ' + calcName + ' results</span>' +
            ' &middot; ' +
            '<a href="' + window.location.pathname + '" style="color:white;text-decoration:underline;font-weight:600;">Start your own calculation</a>' +
            ' &middot; ' +
            '<button onclick="this.parentElement.remove()" style="background:none;border:none;color:white;font-size:16px;cursor:pointer;margin-left:8px;vertical-align:middle;" aria-label="Dismiss">&times;</button>';
        document.body.appendChild(banner);

        // Auto-remove after 10 seconds
        setTimeout(function() { if (banner.parentElement) banner.remove(); }, 10000);
    }

    // Init: check for shared results
    function init() {
        checkForSharedResults();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.FMShare = {
        showShareModal: showShareModal,
        getShareUrl: getShareUrl,
        encodeResults: encodeResults,
        decodeResults: decodeResults,
        checkForSharedResults: checkForSharedResults
    };
})();
