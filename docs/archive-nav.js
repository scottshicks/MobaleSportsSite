/**
 * Blog Archive Navigation
 * Handles year filtering and navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    const yearLinks = document.querySelectorAll('.year-link');
    const archiveYears = document.querySelectorAll('.archive-year');

    if (yearLinks.length === 0 || archiveYears.length === 0) {
        return; // Not on archive page
    }

    // Show/hide year sections based on hash
    function showYearSection(yearId) {
        // Hide all sections
        archiveYears.forEach(section => {
            section.style.display = 'none';
        });

        // Remove active class from all links
        yearLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.querySelector(yearId);
        if (targetSection) {
            targetSection.style.display = 'block';

            // Add active class to corresponding link
            const activeLink = document.querySelector(`a[href="${yearId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Scroll to section
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Handle year link clicks
    yearLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const yearId = this.getAttribute('href');
            showYearSection(yearId);

            // Update URL hash
            history.pushState(null, null, yearId);
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', function() {
        if (location.hash) {
            showYearSection(location.hash);
        } else {
            showYearSection('#year-2025'); // Default to most recent
        }
    });

    // Show initial year based on hash or default to 2025
    if (location.hash) {
        showYearSection(location.hash);
    } else {
        showYearSection('#year-2025');
    }

    // Filter empty years option
    const showAllButton = document.getElementById('show-all-years');
    if (showAllButton) {
        showAllButton.addEventListener('click', function(e) {
            e.preventDefault();

            // Show all sections
            archiveYears.forEach(section => {
                section.style.display = 'block';
            });

            // Remove active from year links
            yearLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Update URL
            history.pushState(null, null, '#');
        });
    }
});