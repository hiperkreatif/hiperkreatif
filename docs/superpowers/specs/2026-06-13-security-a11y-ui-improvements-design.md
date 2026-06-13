# Design Spec: Security, Accessibility, and UI/UX Improvements

## 1. Overview
This specification details the enhancements for the Hiperkreatif Astro-based website. The updates focus on tightening backend security via HTTP headers, achieving a 100/100 accessibility score, and elevating the frontend presentation with micro-animations, mobile responsiveness, and visible social media links.

## 2. Security Headers (`vercel.json`)
Since the project uses Vercel Analytics, we assume it is deployed on Vercel. We will configure strict security headers at the server level to protect against common web vulnerabilities.
- **X-Frame-Options (`DENY`)**: Mitigates clickjacking attacks.
- **X-Content-Type-Options (`nosniff`)**: Prevents MIME-type sniffing.
- **Referrer-Policy (`strict-origin-when-cross-origin`)**: Secures analytics and user tracks.
- **Strict-Transport-Security (`max-age=31536000; includeSubDomains; preload`)**: Enforces HTTPS connections.

## 3. Accessibility (a11y)
The site will be audited and updated to be screen-reader friendly and standard-compliant.
- **ARIA Attributes**: Inject `aria-label` into all icon-only buttons (e.g., mobile hamburger menu). Ensure decorative elements have `aria-hidden="true"`.
- **State Management**: Ensure mobile menus properly toggle `aria-expanded` and target the correct `aria-controls`.
- **Contrast**: Verify text color contrasts against backgrounds in all standard components.

## 4. UI/UX & Responsive Enhancements
- **Social Media Links**: Update the footer components in `BaseLayout.astro` and `LandingPageLayout.astro` to include prominent icon links to Instagram, TikTok, Facebook, and Threads.
- **Micro-Animations**:
  - Add `hover:scale-105 active:scale-95 transition-all duration-300` to primary buttons and interactive cards.
  - Implement smooth underline hover states for navigation text links.
  - Add smooth toggle transitions (fade or slide) to the mobile navigation menu.
- **Mobile View**: 
  - Ensure paddings (`px-4 sm:px-6`) are sufficient and text does not overflow on smaller screens.
  - Check layout grids to gracefully degrade from multiple columns on desktop to single columns on mobile.
