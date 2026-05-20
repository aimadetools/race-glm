// Blog Quick Share System
(function() {
    var shareData = null;

    // Copy URL to clipboard
    function copyUrl() {
        var url = window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(function() {
                showCopyFeedback();
                if (typeof gtag === 'function') gtag('event', 'blog_share_copy', { url: url });
            });
        } else {
            // Fallback
            prompt('Copy this URL:', url);
            if (typeof gtag === 'function') gtag('event', 'blog_share_copy', { url: url });
        }
    }

    function showCopyFeedback() {
        var btn = document.getElementById('fm-blog-share-copy');
        if (btn) {
            var originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.style.background = '#00b894';
            setTimeout(function() {
                btn.textContent = originalText;
                btn.style.background = 'var(--accent, #6c5ce7)';
            }, 2000);
        }
    }

    // Share to Twitter
    function shareToTwitter() {
        var url = window.location.href;
        var title = document.querySelector('meta[property="og:title"]')?.content || document.title;
        var text = title + ' — @foundermath';
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), '_blank', 'width=600,height=400');
        if (typeof gtag === 'function') gtag('event', 'blog_share_twitter', { url: url });
    }

    // Share to LinkedIn
    function shareToLinkedIn() {
        var url = window.location.href;
        window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url), '_blank', 'width=600,height=400');
        if (typeof gtag === 'function') gtag('event', 'blog_share_linkedin', { url: url });
    }

    // Show share modal
    function showShareModal() {
        // Remove existing modal
        var existing = document.getElementById('fm-blog-share-modal');
        if (existing) existing.remove();

        var url = window.location.href;
        var title = document.querySelector('meta[property="og:title"]')?.content || document.title;

        var overlay = document.createElement('div');
        overlay.id = 'fm-blog-share-modal';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);';

        var modal = document.createElement('div');
        modal.style.cssText = 'background:var(--bg-secondary,#12121a);border:1px solid var(--border,#2a2a40);border-radius:16px;max-width:400px;width:100%;padding:24px;position:relative;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;';

        modal.innerHTML =
            '<button onclick="FMBlogShare.closeModal()" style="position:absolute;top:12px;right:16px;background:none;border:none;color:var(--text-muted,#666680);font-size:24px;cursor:pointer;line-height:1;" aria-label="Close">&times;</button>' +
            '<div style="text-align:center;margin-bottom:20px;">' +
                '<div style="display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);margin-bottom:12px;">' +
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>' +
                '</div>' +
                '<h3 style="color:var(--text-primary,#f0f0f5);font-size:1rem;margin:0 0 6px;">Share This Post</h3>' +
                '<p style="color:var(--text-secondary,#a0a0b5);font-size:0.8rem;margin:0;">Help others find this article</p>' +
            '</div>' +
            '<div style="display:flex;flex-direction:column;gap:10px;">' +
                '<button onclick="FMBlogShare.shareTwitter()" style="display:flex;align-items:center;gap:10px;background:#1da1f2;color:white;border:none;padding:12px 16px;border-radius:8px;font-size:0.9rem;font-weight:600;cursor:pointer;transition:opacity 0.2s;">' +
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' +
                    'Share on X (Twitter)' +
                '</button>' +
                '<button onclick="FMBlogShare.shareLinkedIn()" style="display:flex;align-items:center;gap:10px;background:#0077b5;color:white;border:none;padding:12px 16px;border-radius:8px;font-size:0.9rem;font-weight:600;cursor:pointer;transition:opacity 0.2s;">' +
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' +
                    'Share on LinkedIn' +
                '</button>' +
                '<button onclick="FMBlogShare.copyUrl()" id="fm-blog-share-copy" style="display:flex;align-items:center;gap:10px;background:var(--accent,#6c5ce7);color:white;border:none;padding:12px 16px;border-radius:8px;font-size:0.9rem;font-weight:600;cursor:pointer;transition:opacity 0.2s;">' +
                    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>' +
                    'Copy Link' +
                '</button>' +
            '</div>';

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Close on overlay click
        overlay.onclick = function(e) {
            if (e.target === overlay) closeModal();
        };

        // Close on Escape
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', esc);
            }
        });

        if (typeof gtag === 'function') gtag('event', 'blog_share_modal_open', { url: url });
    }

    function closeModal() {
        var m = document.getElementById('fm-blog-share-modal');
        if (m) m.remove();
    }

    // Init: inject share button if container exists
    function init() {
        var container = document.getElementById('fm-blog-share-container');
        if (container) {
            var btn = document.createElement('button');
            btn.id = 'fm-blog-share-btn';
            btn.onclick = showShareModal;
            btn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;background:var(--bg-card,#1a1a2e);color:var(--text-primary,#f0f0f5);border:1px solid var(--border,#2a2a40);padding:8px 14px;border-radius:6px;font-size:0.85rem;font-weight:600;cursor:pointer;transition:all 0.2s;';
            btn.innerHTML =
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>' +
                'Share';
            btn.onmouseenter = function() { this.style.borderColor = 'var(--accent,#6c5ce7)'; };
            btn.onmouseleave = function() { this.style.borderColor = 'var(--border,#2a2a40)'; };
            container.appendChild(btn);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.FMBlogShare = {
        showShareModal: showShareModal,
        shareTwitter: shareToTwitter,
        shareLinkedIn: shareToLinkedIn,
        copyUrl: copyUrl,
        closeModal: closeModal
    };
})();