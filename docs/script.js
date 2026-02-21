/**
 * MOBALE - Accessible Sports Website
 * JavaScript for enhanced functionality
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            // Toggle menu
            navMenu.classList.toggle('active');

            // Update ARIA attributes
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInside = menuToggle.contains(event.target) || navMenu.contains(event.target);

            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on ESC key
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });
    }
});

// Smooth Scroll with Accessibility
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for skip links
        if (href === '#main-content' || href === '#main-navigation') {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Set focus to target for keyboard users
            target.setAttribute('tabindex', '-1');
            target.focus();

            // Remove tabindex after focus
            target.addEventListener('blur', function () {
                target.removeAttribute('tabindex');
            }, { once: true });
        }
    });
});

// Form Validation with Accessible Error Messages

const contactForm2a = document.getElementById('contactForm');
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Clear previous errors
        clearErrors();

        let isValid = true;

        // Validate name
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate email
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate message
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // ⭐ Submit to Web3Forms
            const formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: "POST",
                body: formData
            })
                .then(async (response) => {
                    const result = await response.json();

                    if (response.ok) {
                        showSuccessMessage();
                        contactForm.reset();
                    } else {
                        alert("Error: " + result.message);
                    }
                })
                .catch(error => {
                    alert("Something went wrong. Please try again.");
                    console.error(error);
                });
        } else {
            // Focus on first error
            const firstError = contactForm.querySelector('.error-message');
            if (firstError) {
                const errorField = firstError.previousElementSibling;
                errorField.focus();
            }
        }
    });
}

const contactForm2 = document.querySelector('.contact-form');

if (false) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Clear previous errors
        clearErrors();

        let isValid = true;

        // Validate name
        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate email
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate message
        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // Form is valid - show success message
            showSuccessMessage();
            contactForm.reset();
        } else {
            // Focus on first error
            const firstError = contactForm.querySelector('.error-message');
            if (firstError) {
                const errorField = firstError.previousElementSibling;
                errorField.focus();
            }
        }
    });
}

function showError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.setAttribute('role', 'alert');
    errorDiv.style.color = '#d32f2f';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;

    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', 'error-' + field.id);
    errorDiv.id = 'error-' + field.id;

    formGroup.appendChild(errorDiv);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());

    const invalidFields = document.querySelectorAll('[aria-invalid="true"]');
    invalidFields.forEach(field => {
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.setAttribute('role', 'status');
    successDiv.setAttribute('aria-live', 'polite');
    successDiv.style.backgroundColor = '#4caf50';
    successDiv.style.color = 'white';
    successDiv.style.padding = '1rem';
    successDiv.style.borderRadius = '4px';
    successDiv.style.marginTop = '1rem';
    successDiv.textContent = 'Thank you! Your message has been sent successfully.';

    contactForm.appendChild(successDiv);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// Announce page transitions to screen readers
function announcePageLoad() {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'screen-reader-text';
    announcement.textContent = 'Page loaded successfully';
    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

announcePageLoad();

// Keyboard Navigation Enhancement
document.addEventListener('keydown', function (e) {
    // Allow keyboard users to activate cards with Enter/Space
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('sport-card') || e.target.classList.contains('news-post')) {
            const link = e.target.querySelector('a');
            if (link) {
                e.preventDefault();
                link.click();
            }
        }
    }
});

// Add focus management for sport cards
document.querySelectorAll('.sport-card').forEach(card => {
    card.setAttribute('tabindex', '0');
});

// Detect and respect user's motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable smooth scroll for users who prefer reduced motion
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'auto',
                    block: 'start'
                });
            }
        });
    });
}