// Save Reminder: Show "Save this calculation" reminder after 3+ input changes
(function() {
    'use strict';

    var REMINDER_KEY_PREFIX = 'fm_save_reminder_dismissed_';
    var MIN_CHANGES = 3;
    var changesCount = 0;
    var reminderShown = false;

    // Check if reminder has been dismissed for this page
    function isReminderDismissed() {
        var pageName = window.location.pathname.replace(/\.html$/, '').replace(/^\//, '') || 'index';
        var key = REMINDER_KEY_PREFIX + pageName;
        return localStorage.getItem(key) === 'true';
    }

    // Mark reminder as dismissed
    function dismissReminder() {
        var pageName = window.location.pathname.replace(/\.html$/, '').replace(/^\//, '') || 'index';
        var key = REMINDER_KEY_PREFIX + pageName;
        localStorage.setItem(key, 'true');
        hideReminder();
    }

    // Create reminder element
    function createReminder() {
        var reminder = document.createElement('div');
        reminder.id = 'saveReminder';
        reminder.style.cssText = 'position:fixed;bottom:20px;left:20px;right:20px;background:var(--accent);color:white;padding:16px 20px;border-radius:12px;box-shadow:0 8px 32px rgba(108,92,231,0.4);z-index:9999;display:none;align-items:center;justify-content:space-between;gap:12px;max-width:500px;margin-left:auto;margin-right:auto;';

        reminder.innerHTML =
            '<div style="flex:1;">' +
            '  <div style="font-weight:700;margin-bottom:4px;">💾 Save this calculation?</div>' +
            '  <div style="font-size:0.85rem;opacity:0.9;">FounderMath Pro lets you save unlimited scenarios and compare them side-by-side.</div>' +
            '</div>' +
            '<div style="display:flex;gap:8px;align-items:center;">' +
            '  <a href="pricing.html" style="background:white;color:var(--accent);padding:10px 20px;border-radius:8px;font-weight:600;text-decoration:none;white-space:nowrap;font-size:0.85rem;">Upgrade</a>' +
            '  <button id="dismissReminder" style="background:rgba(255,255,255,0.2);color:white;border:none;padding:8px 12px;border-radius:6px;font-size:0.8rem;cursor:pointer;">&times;</button>' +
            '</div>';

        document.body.appendChild(reminder);

        // Add close button handler
        document.getElementById('dismissReminder').addEventListener('click', dismissReminder);
    }

    // Show reminder
    function showReminder() {
        if (reminderShown) return;

        var reminder = document.getElementById('saveReminder');
        if (!reminder) {
            createReminder();
            reminder = document.getElementById('saveReminder');
        }

        if (reminder) {
            reminder.style.display = 'flex';

            // Track in analytics
            if (typeof gtag === 'function') {
                gtag('event', 'save_reminder_shown', {
                    'event_category': 'engagement',
                    'changes_count': changesCount
                });
            }

            reminderShown = true;
        }
    }

    // Hide reminder
    function hideReminder() {
        var reminder = document.getElementById('saveReminder');
        if (reminder) {
            reminder.style.display = 'none';
        }
    }

    // Track input changes
    function trackInputChanges() {
        if (isReminderDismissed()) return;

        var inputs = document.querySelectorAll('input:not([type=hidden]), select, textarea');
        var trackedInputs = new Set();

        inputs.forEach(function(input) {
            var handler = function() {
                if (!trackedInputs.has(input)) {
                    trackedInputs.add(input);
                    changesCount++;

                    if (changesCount >= MIN_CHANGES && !reminderShown) {
                        // Slight delay so user sees it after their action
                        setTimeout(showReminder, 1500);
                    }
                }
            };

            input.addEventListener('input', handler);
            input.addEventListener('change', handler);
        });
    }

    // Initialize
    function init() {
        // Skip on pricing page and pages that don't need it
        if (window.location.pathname.includes('pricing') ||
            window.location.pathname.includes('about') ||
            window.location.pathname.includes('contact') ||
            window.location.pathname.includes('blog/') ||
            window.location.pathname.includes('.md')) {
            return;
        }

        trackInputChanges();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
