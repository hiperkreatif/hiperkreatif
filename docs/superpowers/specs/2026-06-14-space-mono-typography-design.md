# Space Mono Typography Integration Design Spec

- **Date:** 2026-06-14
- **Topic:** Space Mono Typography Integration
- **Status:** Approved
- **Goal:** Introduce Space Mono as a secondary typography element to represent the "Blueprint of Efficiency" and high-precision automation aspects of the Hiperkreatif brand identity.

---

## 1. Typography Hierarchy Changes

Currently, the website uses `Manrope` for all text elements. We will introduce `Space Mono` for data-oriented, navigation, and labelling components while keeping `Manrope` as the primary body font and general heading font.

### Font-Face Declarations
We define the local `@font-face` bindings in `src/styles/global.css`:
- `SpaceMono-Regular.ttf` -> weight 400
- `SpaceMono-Bold.ttf` -> weight 700

### Tailwind CSS v4 Theme Config
Define `--font-mono` override inside the `@theme` block in `src/styles/global.css`:
```css
@theme {
  --font-mono: 'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
```

---

## 2. Implementation Scope

### A. Layouts
- **[BaseLayout.astro](file:///Users/ddr/projects/hiperkreatif/hiperkreatif/src/layouts/BaseLayout.astro)**
  - Update navbar links (`NAV_MENU` map) to use `font-mono tracking-wider`.
  - Update navbar CTA button to use `font-mono text-xs uppercase`.
  - Update footer copyright (`&copy; ... Blueprint Of Efficiency`) to use `font-mono`.
- **[LandingPageLayout.astro](file:///Users/ddr/projects/hiperkreatif/hiperkreatif/src/layouts/LandingPageLayout.astro)**
  - Update navbar links (`NAV_MENU` map) to use `font-mono`.
  - Update footer copyright to use `font-mono`.

### B. Pages
- **[index.astro](file:///Users/ddr/projects/hiperkreatif/hiperkreatif/src/pages/index.astro)**
  - **Hero Badge:** `"Agency Jasa Website & Otomasi AI"` to use `font-mono text-xs uppercase tracking-widest`.
  - **Stats Section:**
    - Stats value (`15+`, `-60%`, etc.) -> `font-mono font-bold`.
    - Stats label -> `font-mono text-xs tracking-wider`.
  - **Services Section:**
    - Section badge -> `font-mono text-xs uppercase tracking-wider`.
    - Large background numbers (`01`, `02`, etc.) -> `font-mono font-bold`.
    - Card small badges -> `font-mono text-[10px] tracking-widest`.
  - **Process Section:**
    - Large step numbers (`01`, `02`, etc.) -> `font-mono font-bold`.
- **[consultation.astro](file:///Users/ddr/projects/hiperkreatif/hiperkreatif/src/pages/consultation.astro)**
  - **Discovery Call Badge:** `font-mono text-xs uppercase tracking-widest`.
  - **Form Labels:** `label` elements (`Nama / Perwakilan`, `Nama Perusahaan`, etc.) -> `font-mono text-xs tracking-wider`.
  - **WhatsApp CTA button:** -> `font-mono text-xs tracking-widest`.

---

## 3. Verification Plan
- Build the site locally using `npm run build` or `astro check` to ensure there are no compilation errors.
- Confirm that the `Space Mono` font face declarations are correctly pointing to local assets.
