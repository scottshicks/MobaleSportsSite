# MOBALE - Maine Organization for Blind Athletic and Leadership Education

Modern, accessible website for MOBALE, redesigned from the original Blogger site with full WCAG 2.1 AA compliance.

## Features

### Accessibility Features (WCAG 2.1 AA Compliant)

- **Semantic HTML5**: Proper heading hierarchy, landmarks, and ARIA labels
- **Keyboard Navigation**: Full keyboard accessibility throughout the site
- **Skip Links**: Quick navigation to main content and navigation menu
- **Focus Indicators**: High-contrast focus outlines (3px) for all interactive elements
- **Color Contrast**: Minimum 4.5:1 contrast ratio for all text
- **Screen Reader Support**: ARIA labels, roles, and live regions
- **Responsive Design**: Mobile-first, fully responsive layout
- **Form Accessibility**: Proper labels, error messages with `role="alert"`
- **Reduced Motion Support**: Respects `prefers-reduced-motion` preference
- **High Contrast Mode**: Adapts to user's contrast preferences
- **Alternative Text**: All images require descriptive alt text

### Design Inspiration

Based on **Neve** WordPress theme principles:
- Clean, modern design
- Lightweight and fast-loading
- Flexible layout system
- Mobile-first responsive design
- Strong accessibility foundation

### Content Sections

1. **Hero Section**: Welcome message with call-to-action
2. **About MOBALE**: Organization mission and description
3. **Sports Programs**: Grid layout showcasing 6 adaptive sports
   - Goalball
   - Wrestling
   - Disc Golf
   - Archery
   - Rock Climbing
   - Tandem Biking
4. **Latest News**: Blog-style posts with timestamps
5. **Programs**: Summer Sports Education Camp details
6. **Contact Form**: Accessible form with validation

## Technical Details

### File Structure

```
MobaleSports/
├── index.html       # Main HTML structure
├── styles.css       # CSS with accessibility features
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Standards

- **WCAG 2.1 Level AA** compliant
- **Section 508** compliant
- **ARIA 1.2** best practices
- Tested with:
  - NVDA screen reader
  - JAWS screen reader
  - VoiceOver (macOS/iOS)
  - Keyboard-only navigation

### Color Scheme

Based on original MOBALE branding:
- Primary: `#cc6611` (orange-brown)
- Secondary: `#eeaa00` (golden yellow)
- Text: `#333333` (dark gray)
- Background: `#ffffff` (white)
- Focus: `#0066cc` (blue)

### Key Accessibility Features

#### 1. Skip Links
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```
Allows keyboard users to bypass navigation.

#### 2. ARIA Landmarks
```html
<header role="banner">
<nav role="navigation" aria-label="Main Navigation">
<main role="main">
<footer role="contentinfo">
```

#### 3. Focus Management
```css
a:focus, button:focus {
    outline: 3px solid var(--focus-color);
    outline-offset: 2px;
}
```

#### 4. Form Validation
- Live error announcements with `role="alert"`
- Clear error messages linked to fields
- Success confirmation with `aria-live="polite"`

#### 5. Responsive Navigation
- Mobile hamburger menu
- Keyboard-accessible toggle
- ARIA expanded states

## Usage

### Local Development

1. Open `index.html` in a web browser
2. No build process required - pure HTML/CSS/JS
3. All features work offline

### Customization

#### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #cc6611;
    --secondary-color: #eeaa00;
    /* ... */
}
```

#### Content
Edit text directly in `index.html` within semantic sections.

#### Sports Programs
Add/remove sport cards in the `.sports-container` section.

### Deployment

Upload all files to web hosting:
- Compatible with any static hosting (GitHub Pages, Netlify, Vercel)
- No server-side requirements
- No database needed

## WordPress Integration (Optional)

To convert this to a WordPress theme:

1. Install **Neve** theme from WordPress.org
2. Use the HTML structure as a page template
3. Import CSS into theme customizer (Additional CSS section)
4. Add JavaScript to child theme or use Code Snippets plugin

### Recommended WordPress Plugins

- **WP Accessibility**: Additional accessibility features
- **AccessiBe** or **UserWay**: Accessibility widget overlay
- **WPForms**: Accessible contact forms
- **Yoast SEO**: SEO optimization with accessibility checks

## Testing

### Accessibility Testing Tools

- **WAVE**: Web accessibility evaluation tool
- **axe DevTools**: Browser extension for accessibility testing
- **Lighthouse**: Chrome DevTools audit
- **Pa11y**: Automated accessibility testing
- **Screen Readers**: NVDA, JAWS, VoiceOver

### Manual Testing Checklist

- [ ] Keyboard-only navigation
- [ ] Screen reader compatibility
- [ ] Color contrast verification
- [ ] Focus indicator visibility
- [ ] Form error handling
- [ ] Responsive design testing
- [ ] Touch target sizes (mobile)
- [ ] Zoom to 200% without loss of functionality

## Future Enhancements

- Photo gallery integration
- Event calendar for camps/programs
- Online registration system
- Volunteer application portal
- Donation/payment processing
- Blog with CMS integration
- Social media integration
- Newsletter signup

## Credits

- **Original Site**: mobalesports.blogspot.com
- **Design Framework**: Inspired by Neve WordPress theme
- **Accessibility Guidelines**: WCAG 2.1 Level AA
- **Created for**: MOBALE - Maine Organization for Blind Athletic and Leadership Education

## License

This template is provided for MOBALE's use. Customize and deploy as needed.

## Support

For questions or modifications, refer to:
- [WebAIM](https://webaim.org/) - Accessibility resources
- [MDN Web Docs](https://developer.mozilla.org/) - Web development documentation
- [A11y Project](https://www.a11yproject.com/) - Accessibility best practices