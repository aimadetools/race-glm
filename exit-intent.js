// Exit Intent Popup for FounderMath
// Triggers when user moves mouse towards browser tab
// Offers lead magnet (Equity Cheat Sheet) or newsletter signup

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        // Only show if user hasn't seen it (localStorage)
        storageKey: 'fm_exitIntentShown',
        // Delay before showing (ms) - to prevent accidental triggers
        delay: 100,
        // Don't show if user scrolls past this percentage
        scrollThreshold: 50,
        // Don't show if user has been on page this long (ms)
        timeThreshold: 30000
    };

    // Check if we should show the popup
    function shouldShow() {
        // Don't show if already seen
        if (localStorage.getItem(CONFIG.storageKey)) {
            return false;
        }

        // Don't show if user has scrolled deeply (already engaged)
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > CONFIG.scrollThreshold) {
            return false;
        }

        // Don't show if user has been on page too long (already engaged)
        const timeOnPage = Date.now() - window.performance.timing.navigationStart;
        if (timeOnPage > CONFIG.timeThreshold) {
            return false;
        }

        return true;
    }

    // Mark as shown
    function markAsShown() {
        localStorage.setItem(CONFIG.storageKey, 'true');
    }

    // Create popup HTML
    function createPopup() {
        const overlay = document.createElement('div');
        overlay.id = 'exitIntentOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10000;
            display: none;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(4px);
        `;

        const popup = document.createElement('div');
        popup.id = 'exitIntentPopup';
        popup.style.cssText = `
            background: #1a1a2e;
            border-radius: 16px;
            padding: 40px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
            position: relative;
            transform: scale(0.9);
            opacity: 0;
            transition: all 0.3s ease-out;
        `;

        popup.innerHTML = `
            <button id="exitIntentClose" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:24px;color:#a0a0b5;cursor:pointer;padding:4px;line-height:1;">&times;</button>
            <div style="font-size:48px;margin-bottom:16px;">📊</div>
            <h2 style="color:white;font-size:24px;font-weight:700;margin-bottom:12px;">Wait! Don't leave empty-handed.</h2>
            <p style="color:#a0a0b5;margin-bottom:24px;font-size:16px;line-height:1.5;">Get our free Equity Cheat Sheet with formulas for dilution, vesting, SAFE notes, and more.</p>
            <a href="equity-cheat-sheet.html" target="_blank" id="exitIntentCTA" style="display:block;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:white;text-decoration:none;padding:14px 32px;border-radius:10px;font-weight:600;font-size:16px;margin-bottom:16px;transition:transform 0.2s,box-shadow 0.2s;">Download Free Cheat Sheet →</a>
            <p style="color:#666680;font-size:14px;">No signup required. Print and keep it on your desk.</p>
        `;

        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        // Add hover effect
        const cta = document.getElementById('exitIntentCTA');
        cta.addEventListener('mouseenter', () => {
            cta.style.transform = 'translateY(-2px)';
            cta.style.boxShadow = '0 8px 20px rgba(108, 92, 231, 0.4)';
        });
        cta.addEventListener('mouseleave', () => {
            cta.style.transform = 'translateY(0)';
            cta.style.boxShadow = 'none';
        });

        return { overlay, popup };
    }

    // Show popup
    function showPopup() {
        if (!shouldShow()) return;

        const { overlay, popup } = createPopup();
        overlay.style.display = 'flex';

        // Trigger animation
        setTimeout(() => {
            popup.style.transform = 'scale(1)';
            popup.style.opacity = '1';
        }, 10);

        // Mark as shown
        markAsShown();

        // Track event
        if (typeof gtag === 'function') {
            gtag('event', 'exit_intent_shown', {
                page_location: window.location.href
            });
        }

        // Event listeners
        document.getElementById('exitIntentClose').addEventListener('click', closePopup);
        document.getElementById('exitIntentCTA').addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'exit_intent_cta_clicked', {
                    cta: 'cheat_sheet',
                    page_location: window.location.href
                });
            }
            closePopup();
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closePopup();
        });

        // Close on Escape
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closePopup();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    // Close popup
    function closePopup() {
        const overlay = document.getElementById('exitIntentOverlay');
        if (!overlay) return;

        const popup = document.getElementById('exitIntentPopup');
        popup.style.transform = 'scale(0.9)';
        popup.style.opacity = '0';

        setTimeout(() => {
            overlay.remove();
        }, 300);
    }

    // Detect exit intent (mouse leaving viewport)
    let exitIntentTriggered = false;
    let lastMouseY = 0;
    let mouseMovingUp = false;

    document.addEventListener('mousemove', (e) => {
        // Track if mouse is moving up
        if (e.clientY < lastMouseY) {
            mouseMovingUp = true;
        } else {
            mouseMovingUp = false;
        }
        lastMouseY = e.clientY;

        // If mouse goes above viewport and was moving up, trigger exit intent
        if (e.clientY <= 0 && mouseMovingUp && !exitIntentTriggered) {
            // Delay to prevent accidental triggers
            setTimeout(() => {
                if (mouseMovingUp && lastMouseY <= 0) {
                    exitIntentTriggered = true;
                    showPopup();
                }
            }, CONFIG.delay);
        }
    });

    // Also trigger on visibility change (tab switch)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && !exitIntentTriggered) {
            exitIntentTriggered = true;
            showPopup();
        }
    });

    // Reset trigger after popup is closed (allow future interactions)
    window.addEventListener('beforeunload', () => {
        exitIntentTriggered = false;
    });

    console.log('FounderMath Exit Intent loaded');
})();
