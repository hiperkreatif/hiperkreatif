# Service Slugs Adjustment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify and standardize the service page slugs/URLs to be cleaner and more SEO-friendly (`ecommerce`, `company-profile`, `social-media`, `ai-automation`).

**Architecture:** We will update the slugs in `src/constants/services.ts`, correct the corresponding schema markup URLs in `src/pages/index.astro`, remove the outdated sitemap link from `astro.config.mjs`, and compile the static build to verify all paths are generated correctly.

**Tech Stack:** Astro, Tailwind CSS, TypeScript

---

### Task 1: Update Services Constants

**Files:**
- Modify: `src/constants/services.ts`

- [ ] **Step 1: Update slugs and CTAs in services.ts**
  Modify the `slug` and `cta` values for all four services to use the new simple formats.

  *Target changes:*
  - For service 1 (around line 3 and 15):
    ```diff
    - slug: "hypersite-commerce",
    + slug: "ecommerce",
    ...
    - cta: "/services/hypersite-commerce",
    + cta: "/services/ecommerce",
    ```
  - For service 2 (around line 24 and 36):
    ```diff
    - slug: "hyperprofile-site",
    + slug: "company-profile",
    ...
    - cta: "/services/hyperprofile-site",
    + cta: "/services/company-profile",
    ```
  - For service 3 (around line 45 and 57):
    ```diff
    - slug: "social-media-management",
    + slug: "social-media",
    ...
    - cta: "/services/social-media-management",
    + cta: "/services/social-media",
    ```
  - For service 4 (around line 66 and 78):
    ```diff
    - slug: "gen-ai-solutions",
    + slug: "ai-automation",
    ...
    - cta: "/services/gen-ai-solutions",
    + cta: "/services/ai-automation",
    ```

- [ ] **Step 2: Commit Task 1**
  Run:
  ```bash
  git add src/constants/services.ts
  git commit -m "refactor: simplify services constant slugs and CTAs"
  ```

---

### Task 2: Update Index Page Schema Markup

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Replace old slugs in index.astro schema block**
  Update the schema markup URLs at the bottom of the file (lines 352-409) to use the new service slugs.

  *Target changes:*
  - Replace `hypersite-commerce` with `ecommerce`.
  - Replace `hyperprofile-site` with `company-profile`.
  - Replace `social-media-management` with `social-media`.
  - Replace `gen-ai-solutions` with `ai-automation`.

- [ ] **Step 2: Commit Task 2**
  Run:
  ```bash
  git add src/pages/index.astro
  git commit -m "refactor: update index page schema markup with new service slugs"
  ```

---

### Task 3: Update Sitemap Configuration

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1: Remove customPages array from sitemap integration**
  Remove the outdated `ecommerce-crafter` link. The sitemap plugin will auto-discover the generated `/services/*` pages.

  *Target change (around line 10):*
  ```diff
  -    sitemap({
  -      customPages: ["https://hiperkreatif.com/ecommerce-crafter"],
  -      changefreq: "weekly",
  -      priority: 0.8,
  -    }),
  +    sitemap({
  +      changefreq: "weekly",
  +      priority: 0.8,
  +    }),
  ```

- [ ] **Step 2: Commit Task 3**
  Run:
  ```bash
  git add astro.config.mjs
  git commit -m "refactor: remove outdated custom sitemap URL"
  ```

---

### Task 4: Build & Verify

**Files:**
- None

- [ ] **Step 1: Run production build**
  Verify the static generation generates the correct paths:
  `/services/ecommerce/index.html`
  `/services/company-profile/index.html`
  `/services/social-media/index.html`
  `/services/ai-automation/index.html`

  Run: `bun run build`
  Expected: Successful compilation, sitemap-index.xml created, and files present in `dist/services/`.

- [ ] **Step 2: Commit final status**
  Run: `git status`
  Ensure everything is clean.
