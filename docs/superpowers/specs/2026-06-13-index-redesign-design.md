# Design Specification: Landing Page Redesign (Modern 2026 / Opsi A)

## 1. Overview
Merombak struktur dan desain visual pada halaman utama (`src/pages/index.astro`) menjadi tema "Modern 2026". Fokus utamanya adalah menggunakan *Dark Mode*, *Glassmorphism*, *Glowing Gradients*, *Bento Box Layout*, serta interaksi/animasi *scroll-triggered* (Micro-animations).

## 2. Arsitektur & Teknologi
- **Framework Utama:** Astro JS
- **Styling:** Tailwind CSS (dengan custom utilities di `global.css` jika perlu untuk keyframes/animations)
- **Javascript (Interaktivitas):** Menggunakan Vanilla JS bawaan Astro (dalam `<script>`) yang dioptimasi dengan `IntersectionObserver` untuk menjalankan efek *fade-in-up* ketika *scroll*.
- **Desain Komponen Utama:** Tidak merubah arsitektur file `BaseLayout.astro` secara fundamental, namun *styling body/header* akan diadaptasikan ke tema gelap (Dark Mode).

## 3. Detail Section `index.astro`

### A. Hero Section (Immersive & Dynamic)
- **Visual:** Background `slate-950` dengan elemen *blob/gradient* menyala (blur tinggi) di belakang teks utama.
- **Teks:** Tipografi *bold*, animasi *fade-in-up* saat halaman di-load.
- **CTA:** Tombol utama menggunakan efek neon atau *gradient border*, tombol sekunder menggunakan *glassmorphism* (semi-transparan dengan efek blur).

### B. Logo Marquee (Social Proof / Tech Stack)
- **Visual:** Baris berisi logo atau teks teknologi (React, Astro, Node.js, dll) yang berjalan secara horizontal (CSS `infinite animation`).
- **Fungsi:** Memberikan validasi visual kepada *user* tanpa harus men-scroll panjang.

### C. Services (Bento Box Layout)
- **Visual:** Menggantikan susunan 4 kolom rata dengan *Bento Grid*.
- **Data:** Menggunakan `SERVICES.map` dari `constants/services.ts`.
- **Layouting:** Kartu layanan utama (misal: *Commerce*) dapat memakan 2 kolom (span-2), sedangkan layanan lainnya memakan 1 kolom.
- **Interaksi:** Efek *hover* yang membuat kartu sedikit melayang (`hover:-translate-y-1`), border berpendar tipis, atau ikon yang membesar perlahan.

### D. Process Timeline (Interactive Process)
- **Visual:** Alih-alih grid vertikal statis, dibuat dalam bentuk urutan/timeline.
- **Desain:** Ada garis sambung antar *step* (1, 2, 3, 4) yang terkesan menyala atau menonjol, kartu *glassmorphism* untuk penjelasannya.

### E. Stats & FAQ
- **Stats:** Angka diletakkan dengan desain *floating* atau di dalam satu kotak bento horizontal yang *sleek*.
- **FAQ:** Menggunakan tag `<details>` bawaan HTML namun disesuaikan gaya *dark mode* dengan garis batas (*hairline border*) tipis dan ikon "+" yang berotasi menjadi "-" dengan CSS `transition`.

### F. Global Styles & Theme Adaptations
- Menyesuaikan `BaseLayout.astro` agar mendukung *Dark Mode*. Mengganti teks `text-gray-900` menjadi `text-white`, dan *background* `bg-white` menjadi `bg-slate-950`.
- Memastikan logo Navbar dan Footer terlihat kontras (memakai versi logo putih/terang jika ada, atau menggunakan filter *invert* jika berbasis CSS).

## 4. Rencana Implementasi (Next Step)
1. Modifikasi `BaseLayout.astro` untuk tema gelap global.
2. Buat CSS utilitas animasi di `global.css` (marquee, fade-in, gradient).
3. Rombak urut-urutan di dalam `index.astro` sesuai poin di atas.
4. Sesuaikan komponen eksisting (`Hero.astro`, `Button.astro`) untuk mendukung *prop* tema baru.

## 5. Scope & Batasan
- Perombakan ini **hanya** berfokus pada halaman muka (`index.astro`) dan `BaseLayout` untuk menyesuaikan tema.
- Data konten (`constants`) tetap dipertahankan.
- Halaman detail layanan (`/services/xxx`) sementara belum dirombak struktur grid-nya, tapi akan mengikuti adaptasi tema gelap dari `BaseLayout`.
