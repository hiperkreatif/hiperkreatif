# Space Mono Typography Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the Space Mono font locally and apply the `font-mono` class to stats, step numbers, badges, labels, and footer copyright to enhance the "Blueprint of Efficiency" brand aesthetic.

**Architecture:** We load local TTF font files (`SpaceMono-Regular.ttf` and `SpaceMono-Bold.ttf`) in `global.css`, map them to Tailwind's `--font-mono` token under the `@theme` block, and use Tailwind's utility `font-mono` on designated elements.

**Tech Stack:** Astro, Tailwind CSS v4

---

### Task 1: Update Global CSS

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Declare Space Mono @font-face and theme override**
  Add the font-face declarations at the top of the file, and define the `@theme` variable `--font-mono`.

  *Target change:*
  At the top of `src/styles/global.css`, add:
  ```css
  @font-face {
    font-family: 'Space Mono';
    src: url('/src/assets/fonts/SpaceMono-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Space Mono';
    src: url('/src/assets/fonts/SpaceMono-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @theme {
    --font-mono: 'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  ```

- [ ] **Step 2: Commit Task 1**
  Run:
  ```bash
  git add src/styles/global.css
  git commit -m "style: declare Space Mono @font-face and override --font-mono in theme"
  ```

---

### Task 2: Update Layouts (BaseLayout & LandingPageLayout)

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/layouts/LandingPageLayout.astro`

- [ ] **Step 1: Modify BaseLayout.astro to use font-mono**
  Add `font-mono` styling to the navbar menu items, navbar CTA, and footer copyright.

  *Target changes:*
  - In `src/layouts/BaseLayout.astro` (around line 96):
    ```diff
    - class="relative text-xs text-gray-400 font-bold uppercase tracking-widest hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
    + class="relative text-xs text-gray-400 font-mono font-bold uppercase tracking-widest hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
    ```
  - In `src/layouts/BaseLayout.astro` (around line 106):
    ```diff
    - class="ml-4 bg-white text-black font-bold uppercase tracking-widest text-xs px-6 py-3 hover:bg-gray-200 transition-colors"
    + class="ml-4 bg-white text-black font-mono font-bold uppercase tracking-widest text-xs px-6 py-3 hover:bg-gray-200 transition-colors"
    ```
  - In mobile menu panel (around line 144):
    ```diff
    - class="block text-xs text-gray-400 hover:text-white font-bold uppercase tracking-widest py-2"
    + class="block text-xs text-gray-400 hover:text-white font-mono font-bold uppercase tracking-widest py-2"
    ```
  - In mobile menu CTA (around line 154):
    ```diff
    - class="block mt-6 bg-white text-black font-bold uppercase tracking-widest text-xs px-6 py-4 text-center"
    + class="block mt-6 bg-white text-black font-mono font-bold uppercase tracking-widest text-xs px-6 py-4 text-center"
    ```
  - In footer copyright block (around line 198):
    ```diff
    - class="text-xs text-gray-500 uppercase tracking-widest font-bold text-center md:text-right mt-2 md:mt-0"
    + class="text-xs text-gray-500 font-mono uppercase tracking-widest font-bold text-center md:text-right mt-2 md:mt-0"
    ```

- [ ] **Step 2: Modify LandingPageLayout.astro to use font-mono**
  Add `font-mono` styling to the navbar menu items, navbar CTA, and footer copyright.

  *Target changes:*
  - In `src/layouts/LandingPageLayout.astro` (around line 95):
    ```diff
    - class="relative text-base text-gray-600 font-medium px-2 py-1 hover:text-black transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full"
    + class="relative text-sm font-mono text-gray-600 font-medium px-2 py-1 hover:text-black transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full"
    ```
  - In `src/layouts/LandingPageLayout.astro` (around line 105):
    ```diff
    - class="ml-4 bg-black text-white font-medium text-base px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    + class="ml-4 bg-black text-white font-mono font-medium text-sm px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    ```
  - In mobile menu panel (around line 142):
    ```diff
    - class="block text-base text-gray-600 hover:text-black font-medium px-3 py-2.5 rounded-lg hover:bg-white transition-all"
    + class="block text-sm font-mono text-gray-600 hover:text-black font-medium px-3 py-2.5 rounded-lg hover:bg-white transition-all"
    ```
  - In mobile menu CTA (around line 152):
    ```diff
    - class="block mt-6 bg-black text-white font-medium text-base px-6 py-3 rounded-full text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    + class="block mt-6 bg-black text-white font-mono font-medium text-sm px-6 py-3 rounded-full text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
    ```
  - In footer copyright block (around line 192):
    ```diff
    - class="text-sm text-gray-500 text-center md:text-right font-medium"
    + class="text-xs font-mono text-gray-500 text-center md:text-right font-medium"
    ```

- [ ] **Step 3: Commit Task 2**
  Run:
  ```bash
  git add src/layouts/BaseLayout.astro src/layouts/LandingPageLayout.astro
  git commit -m "style: apply font-mono to navbar, CTA, and footer in BaseLayout and LandingPageLayout"
  ```

---

### Task 3: Update Consultation Page

**Files:**
- Modify: `src/pages/consultation.astro`

- [ ] **Step 1: Modify consultation.astro to use font-mono**
  Add `font-mono` to the Discovery Call badge, form labels, and submit button.

  *Target changes:*
  - Discovery Call badge (around line 20):
    ```diff
    - <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-white mb-8 border border-white/20 uppercase tracking-widest text-xs font-bold backdrop-blur-sm">
    + <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-white mb-8 border border-white/20 font-mono uppercase tracking-widest text-xs font-bold backdrop-blur-sm">
    ```
  - Name label (around line 66):
    ```diff
    - <label for="name" class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Nama / Perwakilan</label>
    + <label for="name" class="block text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Nama / Perwakilan</label>
    ```
  - Company label (around line 78):
    ```diff
    - <label for="company" class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Nama Perusahaan</label>
    + <label for="company" class="block text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Nama Perusahaan</label>
    ```
  - Brief label (around line 91):
    ```diff
    - <label for="brief" class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Deskripsi Singkat Tantangan Bisnis</label>
    + <label for="brief" class="block text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">Deskripsi Singkat Tantangan Bisnis</label>
    ```
  - Form submit button (around line 102):
    ```diff
    - class="mt-auto inline-flex items-center justify-center gap-3 w-full lg:w-auto self-start px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    + class="mt-auto inline-flex items-center justify-center gap-3 w-full lg:w-auto self-start px-10 py-5 bg-white text-black font-mono font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
    ```

- [ ] **Step 2: Commit Task 3**
  Run:
  ```bash
  git add src/pages/consultation.astro
  git commit -m "style: apply font-mono to consultation page badge, labels, and button"
  ```

---

### Task 4: Update Home Page (index.astro)

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Modify Hero section badges and text**
  Add `font-mono` to the Hero badge and primary buttons if needed. Let's make the hero badge and main links monospace.

  *Target changes:*
  - Hero Badge (around line 34):
    ```diff
    - <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-gray-300 mb-8 animate-on-scroll" style="transition-delay: 0ms;">
    + <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card font-mono text-xs uppercase tracking-wider text-gray-300 mb-8 animate-on-scroll" style="transition-delay: 0ms;">
    ```
  - Hero CTA 1 (around line 49):
    ```diff
    - <a href="/consultation" class="px-8 py-4 bg-white text-slate-950 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
    + <a href="/consultation" class="px-8 py-4 bg-white text-slate-950 font-mono font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
    ```
  - Hero CTA 2 (around line 52):
    ```diff
    - <a href="#services" class="px-8 py-4 border-2 border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-white transition-colors">
    + <a href="#services" class="px-8 py-4 border-2 border-white/20 text-white font-mono font-bold uppercase tracking-widest text-xs hover:border-white transition-colors">
    ```

- [ ] **Step 2: Modify Stats section values and labels**
  Change the stats layout to use `font-mono`.

  *Target changes:*
  - Stats card value (around line 85):
    ```diff
    - <p class="text-5xl md:text-6xl font-black text-white tracking-tighter mb-3 group-hover:scale-110 transition-transform duration-500">{stat.val}</p>
    + <p class="text-5xl md:text-6xl font-mono font-bold text-white tracking-tight mb-3 group-hover:scale-110 transition-transform duration-500">{stat.val}</p>
    ```
  - Stats card label (around line 86):
    ```diff
    - <p class="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest">{stat.label}</p>
    + <p class="text-xs text-gray-400 font-mono font-bold uppercase tracking-wider">{stat.label}</p>
    ```

- [ ] **Step 3: Modify Services section badges and numbers**
  Add `font-mono` to the sub-headings, background numbers, and service categories.

  *Target changes:*
  - Services section label (around line 101):
    ```diff
    - <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-white text-sm font-medium mb-4">
    + <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-white font-mono text-xs uppercase tracking-wider mb-4">
    ```
  - Services section CTA link (around line 111):
    ```diff
    - class="inline-flex items-center gap-2 px-6 py-3 animated-border text-sm font-medium text-white transition-all hover:scale-105"
    + class="inline-flex items-center gap-2 px-6 py-3 animated-border font-mono text-xs font-medium uppercase tracking-wider text-white transition-all hover:scale-105"
    ```
  - Background number (around line 126):
    ```diff
    - <div class="absolute -right-8 -bottom-16 text-[200px] font-black text-white/[0.03] group-hover:text-white/[0.09] transition-colors duration-700 leading-none select-none">
    + <div class="absolute -right-8 -bottom-16 text-[200px] font-mono font-bold text-white/[0.03] group-hover:text-white/[0.09] transition-colors duration-700 leading-none select-none">
    ```
  - Service card badge (around line 132):
    ```diff
    - <div class="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-white/10 text-white mb-8 border border-white/20 uppercase tracking-widest backdrop-blur-sm">
    + <div class="inline-flex items-center gap-2 text-[10px] font-mono font-bold px-3 py-1.5 bg-white/10 text-white mb-8 border border-white/20 uppercase tracking-widest backdrop-blur-sm">
    ```
  - Service card CTA (around line 151):
    ```diff
    - <a href={s.cta} class="group/cta inline-flex items-center gap-3 text-white font-bold uppercase text-sm tracking-widest">
    + <a href={s.cta} class="group/cta inline-flex items-center gap-3 text-white font-mono font-bold uppercase text-xs tracking-widest">
    ```

- [ ] **Step 4: Modify Process section numbers and links**
  Add `font-mono` to the numbers.

  *Target changes:*
  - Process CTA link (around line 178):
    ```diff
    - <a href="/consultation" class="mt-8 inline-block px-6 py-3 bg-white text-black font-bold uppercase text-sm tracking-widest hover:bg-gray-200 transition-colors">Konsultasi Sekarang</a>
    + <a href="/consultation" class="mt-8 inline-block px-6 py-3 bg-white text-black font-mono font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors">Konsultasi Sekarang</a>
    ```
  - Step numbers (around line 183):
    ```diff
    - <div class="text-6xl font-black text-white/[0.05] mb-4 group-hover:text-white/10 transition-colors">01</div>
    + <div class="text-6xl font-mono font-bold text-white/[0.05] mb-4 group-hover:text-white/10 transition-colors">01</div>
    ```
    *(Note: Apply the class change to all `li` items in the process loop: lines 183, 188, 193, 198)*

- [ ] **Step 5: Commit Task 4**
  Run:
  ```bash
  git add src/pages/index.astro
  git commit -m "style: apply font-mono to index.astro hero, stats, services, and process elements"
  ```

---

### Task 5: Build & Verification

**Files:**
- None

- [ ] **Step 1: Run production build**
  Verify the Astro project compiles successfully with the modifications.

  Run: `bun run build`
  Expected: Build finishes with no errors.

- [ ] **Step 2: Commit changes**
  Run:
  ```bash
  git status
  ```
  Ensure everything is clean.
