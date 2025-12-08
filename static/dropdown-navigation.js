/**
 * DROPDOWN NAVIGATION - Enhanced Accessibility and Mobile Support
 * Handles keyboard navigation, mobile touch interactions, and ARIA attributes
 */

(function() {
    'use strict';

    // Initialize dropdown navigation when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDropdownNavigation);
    } else {
        initDropdownNavigation();
    }

    function initDropdownNavigation() {
        const dropdownItems = document.querySelectorAll('.has-dropdown');

        dropdownItems.forEach(item => {
            const link = item.querySelector('a');
            const submenu = item.querySelector('.dropdown-menu');

            if (!link || !submenu) return;

            // Add ARIA attributes for accessibility
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
            submenu.setAttribute('role', 'menu');

            // Add ARIA role to submenu items
            const submenuLinks = submenu.querySelectorAll('a');
            submenuLinks.forEach(sublink => {
                sublink.setAttribute('role', 'menuitem');
            });

            // Keyboard navigation
            link.addEventListener('keydown', handleKeyboardNav);

            // Mobile: Toggle on click/tap
            if (isMobile()) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    toggleDropdown(item, link, submenu);
                });
            }

            // Track open/close state for ARIA
            item.addEventListener('mouseenter', function() {
                link.setAttribute('aria-expanded', 'true');
            });

            item.addEventListener('mouseleave', function() {
                link.setAttribute('aria-expanded', 'false');
                item.classList.remove('expanded');
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.has-dropdown')) {
                closeAllDropdowns();
            }
        });

        // Handle ESC key to close dropdowns
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeAllDropdowns();
                // Return focus to the currently open dropdown's trigger
                const expandedItem = document.querySelector('.has-dropdown.expanded a');
                if (expandedItem) expandedItem.focus();
            }
        });
    }

    /**
     * Handle keyboard navigation for dropdown menus
     */
    function handleKeyboardNav(e) {
        const item = e.target.closest('.has-dropdown');
        const submenu = item.querySelector('.dropdown-menu');
        const submenuLinks = Array.from(submenu.querySelectorAll('a'));

        switch(e.key) {
            case 'Enter':
            case ' ': // Space bar
                if (!isMobile()) {
                    // On desktop, Enter/Space opens dropdown and focuses first item
                    e.preventDefault();
                    toggleDropdown(item, e.target, submenu);
                    if (item.classList.contains('expanded')) {
                        submenuLinks[0]?.focus();
                    }
                }
                break;

            case 'ArrowDown':
                e.preventDefault();
                if (!item.classList.contains('expanded')) {
                    toggleDropdown(item, e.target, submenu);
                }
                submenuLinks[0]?.focus();
                break;

            case 'ArrowUp':
                e.preventDefault();
                if (item.classList.contains('expanded')) {
                    submenuLinks[submenuLinks.length - 1]?.focus();
                }
                break;
        }
    }

    /**
     * Toggle dropdown open/closed state
     */
    function toggleDropdown(item, link, submenu) {
        const isExpanded = item.classList.contains('expanded');

        // Close all other dropdowns first
        closeAllDropdowns();

        if (!isExpanded) {
            item.classList.add('expanded');
            link.setAttribute('aria-expanded', 'true');
        } else {
            item.classList.remove('expanded');
            link.setAttribute('aria-expanded', 'false');
        }
    }

    /**
     * Close all dropdown menus
     */
    function closeAllDropdowns() {
        const expandedItems = document.querySelectorAll('.has-dropdown.expanded');
        expandedItems.forEach(item => {
            item.classList.remove('expanded');
            const link = item.querySelector('a');
            if (link) link.setAttribute('aria-expanded', 'false');
        });
    }

    /**
     * Detect if device is mobile
     */
    function isMobile() {
        return window.innerWidth <= 768 ||
               ('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0);
    }

    /**
     * Arrow key navigation within submenu
     */
    document.addEventListener('keydown', function(e) {
        const target = e.target;

        // Only handle if we're in a dropdown menu
        if (!target.matches('.dropdown-menu a')) return;

        const submenu = target.closest('.dropdown-menu');
        const items = Array.from(submenu.querySelectorAll('a'));
        const currentIndex = items.indexOf(target);

        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % items.length;
                items[nextIndex].focus();
                break;

            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + items.length) % items.length;
                items[prevIndex].focus();
                break;

            case 'Home':
                e.preventDefault();
                items[0].focus();
                break;

            case 'End':
                e.preventDefault();
                items[items.length - 1].focus();
                break;

            case 'Tab':
                // Close dropdown when tabbing out
                const dropdown = target.closest('.has-dropdown');
                setTimeout(() => {
                    if (!dropdown.contains(document.activeElement)) {
                        dropdown.classList.remove('expanded');
                        const link = dropdown.querySelector('a');
                        if (link) link.setAttribute('aria-expanded', 'false');
                    }
                }, 0);
                break;
        }
    });

})();
