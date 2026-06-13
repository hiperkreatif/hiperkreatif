# Security, A11y, and UI Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement security headers via vercel.json, improve accessibility with ARIA attributes, and add micro-animations & social links to the UI.

**Architecture:** We will modify the Vercel configuration for headers, and apply layout changes directly to the Astro components (Layouts, Button, and Index).

**Tech Stack:** Astro, Tailwind CSS, Vercel

---

### Task 1: Add Security Headers

**Files:**
- Create: `vercel.json`

- [ ] **Step 1: Write `vercel.json`**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

- [ ] **Step 2: Commit**

```bash
git add vercel.json
git commit -m "chore: add security headers in vercel.json"
```

---

### Task 2: Enhance BaseLayout.astro

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Add ARIA labels to SVG and decorative elements**
Modify the `aria-hidden` attribute on the background decorations in the footer.
```astro
        <!-- Footer Nodes -->
        <div class="absolute w-1.5 h-1.5 bg-white -top-[3px] -left-[3px] z-20" aria-hidden="true"></div>
        <div class="absolute w-1.5 h-1.5 bg-white -top-[3px] -right-[3px] z-20" aria-hidden="true"></div>
```

- [ ] **Step 2: Add social media links to Footer**
Add the social media links row before the copyright text.
```astro
        <div class="text-white font-black tracking-widest uppercase text-xl">
          {NAV_LOGO}
        </div>
        
        <div class="flex items-center gap-4 my-4 md:my-0">
          <a href="https://instagram.com/hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-gray-400 hover:text-white transition-colors hover:scale-110">Instagram</a>
          <a href="https://tiktok.com/@hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="text-gray-400 hover:text-white transition-colors hover:scale-110">TikTok</a>
          <a href="https://facebook.com/hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-gray-400 hover:text-white transition-colors hover:scale-110">Facebook</a>
          <a href="https://threads.net/@hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="Threads" class="text-gray-400 hover:text-white transition-colors hover:scale-110">Threads</a>
        </div>

        <div class="text-xs text-gray-500 uppercase tracking-widest font-bold">
```

- [ ] **Step 3: Update Navigation Links with Micro-Animations**
Update the desktop menu links in `BaseLayout.astro` to have an underline animation.
```astro
            {
              NAV_MENU.map((item) => (
                <a
                  href={item.href}
                  class="relative text-xs text-gray-400 font-bold uppercase tracking-widest hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener" : undefined}
                >
                  {item.label}
                </a>
              ))
            }
```

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: enhance BaseLayout with a11y, social links, and micro-animations"
```

---

### Task 3: Enhance LandingPageLayout.astro

**Files:**
- Modify: `src/layouts/LandingPageLayout.astro`

- [ ] **Step 1: Add ARIA to Mobile Menu Button**
Ensure `aria-label`, `aria-expanded`, and `aria-controls` are present on the mobile menu button (like in `BaseLayout.astro`).
```astro
          {/* Mobile Menu Button */}
          <button
            class="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none rounded-full hover:bg-gray-100 transition-colors"
            onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"
            aria-label="Toggle mobile menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
```

- [ ] **Step 2: Add social media links to Footer**
Replace the footer content.
```astro
    <footer
      transition:name="site-footer"
      class="mt-12 py-8 border-t border-gray-200 bg-white"
    >
      <div class="max-w-4xl mx-auto px-6 sm:px-0 flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-4 text-sm font-medium">
          <a href="https://instagram.com/hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-gray-500 hover:text-black transition-colors hover:scale-110">Instagram</a>
          <a href="https://tiktok.com/@hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="text-gray-500 hover:text-black transition-colors hover:scale-110">TikTok</a>
          <a href="https://facebook.com/hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-gray-500 hover:text-black transition-colors hover:scale-110">Facebook</a>
          <a href="https://threads.net/@hiperkreatif" target="_blank" rel="noopener noreferrer" aria-label="Threads" class="text-gray-500 hover:text-black transition-colors hover:scale-110">Threads</a>
        </div>
        <div class="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hiperkreatif. All rights reserved.
        </div>
      </div>
    </footer>
```

- [ ] **Step 3: Commit**

```bash
git add src/layouts/LandingPageLayout.astro
git commit -m "feat: enhance LandingPageLayout with a11y and social links"
```

---

### Task 4: Enhance Button and Interactive Elements

**Files:**
- Modify: `src/components/Button.astro`

- [ ] **Step 1: Add scale animations to button variants**
Update `variantClasses` in `Button.astro`.
```astro
const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-gray-900 text-white border-2 border-gray-900 hover:bg-gray-800 hover:shadow-xl hover:scale-105 active:scale-95",
  secondary:
    "bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 hover:shadow-xl hover:scale-105 active:scale-95",
  outline:
    "bg-transparent text-gray-900 border-2 border-gray-200 hover:bg-gray-50 hover:scale-105 active:scale-95",
  ghost:
    "bg-transparent text-gray-900 hover:underline underline-offset-4 px-0 hover:scale-105 active:scale-95",
  "pricing-popular":
    "block w-full py-3 rounded-xl border-2 border-gray-900 bg-gray-900 text-white font-semibold hover:bg-black hover:scale-105 active:scale-95",
  "pricing-standard":
    "block w-full py-3 rounded-xl border-2 border-gray-900 bg-white text-gray-900 font-semibold hover:bg-gray-50 hover:scale-105 active:scale-95",
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Button.astro
git commit -m "feat: add scale micro-animations to Button component"
```
