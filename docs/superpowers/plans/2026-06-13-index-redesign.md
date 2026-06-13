# Index Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Modern 2026 (Option A) redesign for the landing page (`index.astro`) with dark mode, bento grid layout, and micro-animations.

**Architecture:** We will modify `BaseLayout.astro` for global dark mode, add CSS utilities in `global.css` for animations/glow, and structurally rewrite the sections in `index.astro`. We use a lightweight IntersectionObserver script within `index.astro` for scroll animations. 

**Tech Stack:** Astro, Tailwind CSS

---

### Task 1: Global Theme Adaptations (Dark Mode) & CSS Utilities

**Files:**
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Modify `global.css` to add custom animation utilities**

Add the following to `src/styles/global.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
  .animate-marquee:hover {
    animation-play-state: paused;
  }
  
  .glass-card {
    @apply bg-slate-900/50 backdrop-blur-md border border-white/10 shadow-xl;
  }
  
  .glow-blob {
    @apply absolute rounded-full mix-blend-screen filter blur-[100px] opacity-50;
  }
  
  .animate-on-scroll {
    @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
  }
  
  .animate-on-scroll.is-visible {
    @apply opacity-100 translate-y-0;
  }
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
```

- [ ] **Step 2: Update `BaseLayout.astro` to Dark Mode**

Modify `src/layouts/BaseLayout.astro`.
Find: `<body class="min-h-screen bg-white text-gray-900">`
Replace with: `<body class="min-h-screen bg-slate-950 text-gray-100 overflow-x-hidden">`

Find navbar classes: `class="sticky top-0 z-50 bg-transparent backdrop-blur-xl border-b border-gray-100"`
Replace with: `class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10"`

Find text colors in navbar desktop menu: `text-gray-600 hover:text-black after:bg-black`
Replace with: `text-gray-400 hover:text-white after:bg-white`

Find CTA styling in navbar: `bg-black text-white`
Replace with: `bg-white text-black`

Find logo text gradient: `from-slate-900 to-gray-400`
Replace with: `from-white to-gray-400`

Find footer styling: `border-gray-200 bg-white text-gray-500`
Replace with: `border-white/10 bg-slate-950 text-gray-500`

- [ ] **Step 3: Run build to verify no syntax errors**

Run: `npm run build`
Expected: Successfully builds without errors.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro src/styles/global.css
git commit -m "feat: setup dark mode theme and global css utilities"
```

### Task 2: Hero Section & Marquee Component

**Files:**
- Modify: `src/components/Hero.astro`
- Create: `src/components/Marquee.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create `Marquee.astro`**

Create `src/components/Marquee.astro`:
```astro
---
const technologies = [
  "Astro", "React", "Tailwind CSS", "Node.js", "TypeScript", "Next.js", 
  "Vercel", "OpenAI", "Supabase", "Figma", "PostgreSQL", "Shopify"
];
// Double the array to create a seamless loop
const marqueeItems = [...technologies, ...technologies];
---

<div class="w-full overflow-hidden py-10 border-y border-white/5 relative bg-slate-950/50">
  <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none"></div>
  <div class="flex whitespace-nowrap animate-marquee w-max">
    {marqueeItems.map((tech) => (
      <div class="mx-8 text-xl font-bold text-gray-600 uppercase tracking-widest flex items-center gap-4">
        <span class="w-2 h-2 rounded-full bg-white/20"></span>
        {tech}
      </div>
    ))}
  </div>
</div>
```

- [ ] **Step 2: Update `Hero.astro`**

Modify `src/components/Hero.astro` to add glow effects and dark mode styling.
Update the outer div to include relative positioning and glow blobs.

```astro
---
// src/components/Hero.astro (keep existing props)
export interface Props {
  badge: string;
  headline: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonTarget?: string;
  secondaryButtonRel?: string;
}

const {
  badge, headline, description, primaryButtonText, primaryButtonLink,
  secondaryButtonText, secondaryButtonLink, secondaryButtonTarget = "_self", secondaryButtonRel = ""
} = Astro.props;
---

<section class="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center px-4 animate-on-scroll is-visible">
  <!-- Glowing Background Blobs -->
  <div class="glow-blob bg-purple-600/30 w-[500px] h-[500px] -top-32 -left-20"></div>
  <div class="glow-blob bg-blue-600/30 w-[400px] h-[400px] top-20 right-0"></div>

  <div class="relative z-10 max-w-4xl mx-auto">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-medium mb-8 backdrop-blur-md">
      <span class="flex h-2 w-2 relative">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      {badge}
    </div>

    <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 leading-tight">
      {headline}
    </h1>

    <p class="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
      {description}
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href={primaryButtonLink} class="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
        {primaryButtonText}
      </a>
      <a href={secondaryButtonLink} target={secondaryButtonTarget} rel={secondaryButtonRel} class="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-colors duration-300">
        {secondaryButtonText}
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Integrate Marquee and Hero in `index.astro`**

In `src/pages/index.astro`:
- Import Marquee: `import Marquee from "../components/Marquee.astro";`
- Insert `<Marquee />` right after the `<Hero ... />` component.
- Find `<!-- STATS -->` section and update it to dark mode:
  - Remove `bg-white border-gray-100 text-gray-900 text-gray-600`
  - Replace with `glass-card text-white text-gray-400`
  - Add `animate-on-scroll` to the `<section>`

- [ ] **Step 4: Run build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.astro src/components/Marquee.astro src/pages/index.astro
git commit -m "feat: implement modern dark hero and marquee components"
```

### Task 3: Services Bento Box Layout

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Update Services section in `index.astro`**

Find the `<!-- SERVICES -->` section in `src/pages/index.astro`.
Replace the entire grid div:
`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">`
With a CSS Grid Bento structure:
```astro
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(300px,auto)]">
        {
          SERVICES.map((s, index) => (
            <div class={`service-card group glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] flex flex-col justify-between ${index === 0 ? 'md:col-span-2' : ''} ${index === 3 ? 'md:col-span-2' : ''}`}>
              <div>
                <div class="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white mb-6 border border-white/5 group-hover:border-white/20 transition-colors">
                  {s.badge}
                </div>
                <h3 class="text-3xl font-bold text-white mb-3 tracking-tight">{s.name}</h3>
                <p class="text-gray-400 text-lg">{s.tagline}</p>
                
                <ul class="mt-6 space-y-3">
                  {s.bullets.map((b) => (
                    <li class="flex gap-3 items-start text-gray-300">
                      <svg class="w-5 h-5 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div class="mt-8 pt-6 border-t border-white/10">
                <a href={s.cta} class="inline-flex items-center text-white font-medium hover:text-purple-400 transition-colors">
                  Pelajari & daftar 
                  <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          ))
        }
      </div>
```
Make sure the section has `class="mt-32 animate-on-scroll"`.

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: implement bento grid layout for services"
```

### Task 4: Process Timeline, FAQ & Scroll Observer

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Update Process section in `index.astro`**

Find `<!-- PROCESS -->` section. 
Replace the inner grid layout with a vertical timeline style that uses glass cards:
```astro
    <!-- PROCESS -->
    <section id="process" class="mt-32 animate-on-scroll" aria-labelledby="process-title">
      <div class="glass-card rounded-3xl p-8 md:p-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-white/10 pb-8">
          <div>
            <h2 id="process-title" class="text-4xl font-bold text-white tracking-tight">Proses Kerja</h2>
            <p class="text-gray-400 mt-2 text-lg">Transparan, terukur, dan berorientasi hasil.</p>
          </div>
          <a href="/consultation" class="inline-flex items-center text-sm font-medium text-white bg-white/10 px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors border border-white/5">
            Mulai konsultasi <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>

        <div class="space-y-6">
          {[
            { step: "1", title: "Diagnosa Singkat", desc: "Call 20–30 menit: goal, hambatan, prioritas 30 hari." },
            { step: "2", title: "Rencana & Scope", desc: "Dokumen singkat: deliverable, timeline, biaya." },
            { step: "3", title: "Build & Iterasi", desc: "Sprint cepat + demo mingguan, revisi minor on the fly." },
            { step: "4", title: "Go-Live & Support", desc: "Launch terukur, dokumentasi, 7–30 hari support." }
          ].map((p, i) => (
            <div class="group flex gap-6 p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all">
              <div class="flex-shrink-0">
                <div class="h-14 w-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform">
                  {p.step}
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p class="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Update Guarantee and FAQ sections**

Find `<!-- GUARANTEE -->` and `<!-- FAQ -->`.
Change `bg-white border-gray-900/100` to `glass-card text-white border-purple-500/50`.
For FAQ details elements: 
Change `border-gray-200 bg-white` to `border-white/10 bg-white/5 hover:bg-white/10 transition-colors`.
Change text colors to `text-white` and `text-gray-400`.
Add `animate-on-scroll` to section class.

- [ ] **Step 3: Add Scroll Observer Script**

At the very bottom of `src/pages/index.astro` (before `</BaseLayout>`), add:
```astro
  <script>
    // Intersection Observer for scroll animations
    const setupObserver = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
      });
    };

    // Run on initial load and view transitions
    setupObserver();
    document.addEventListener('astro:page-load', setupObserver);
  </script>
```

- [ ] **Step 4: Run build**

Run: `npm run build`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: update process timeline, faq styling and add scroll animations"
```
