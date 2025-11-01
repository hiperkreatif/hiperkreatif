// types/services.ts atau constants/services.ts

/** KPI yang sederhana tapi profesional */
export interface KPI {
  /** Nama indikator, gampang dimengerti */
  name: string;
  /** Target yang pengen dicapai (jelas dan terukur) */
  target: string;
  /** Tujuan bisnis/kenapa KPI ini penting */
  goal: string;
  /** Periode evaluasi (opsional) */
  window?: "7d" | "30d" | "90d";
  /** Sumber data/alat pengukuran (opsional) */
  source?: string[]; // contoh: ["GA4", "Server Logs", "Pixel Ads"]
}

/** Service data model yang informatif dan siap dipakai UI */
export interface Service {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  desc?: string;
  bullets: string[];
  cta: string;
  url?: string;

  // ====== Tambahan info berguna ======
  audience?: string[];
  outcomes?: string[];
  deliverables?: { title: string; items: string[] }[];
  includes?: string[];
  excludes?: string[];
  timeline?: { minWeeks: number; maxWeeks: number; note?: string };
  price?: {
    from?: number;
    to?: number;
    currency?: "IDR" | "USD";
    unit?: "project" | "month";
    note?: string;
  };

  /** KPI yang dipantau pasca go-live */
  kpis?: KPI[];

  security?: { features: string[] };
  support?: { warrantyDays?: number; slaHours?: number; channels?: string[] };
  demo?: { label: string; href: string };
}

/** Daftar layanan utama (KPI user-friendly) */
export const SERVICES: Service[] = [
  // =========================
  // 1) HyperSite Commerce
  // =========================
  {
    slug: "hypersite-commerce",
    name: "HyperSite Commerce",
    badge: "E-commerce",
    tagline: "Toko online kencang, aman, SEO-ready, siap scale.",
    desc: "Website e-commerce siap jualan: performa kencang, checkout rapi, dan data iklan tertata. Fokus konversi, bukan pamer efek.",
    bullets: [
      "Katalog produk lengkap dengan filter & pencarian cerdas",
      "Checkout cepat & aman (gateway lokal & internasional)",
      "Integrasi pembayaran, pengiriman & manajemen stok",
      "Pixel & analytics rapi untuk iklan",
      "Optimasi SEO & performa web",
    ],
    cta: "/services/hypersite-commerce",
    audience: [
      "Toko ritel yang mau ekspansi online",
      "Brand D2C yang butuh platform independen",
      "F&B dengan layanan delivery",
      "Toko yang migrasi dari marketplace",
    ],
    outcomes: [
      "Konversi naik dengan alur checkout singkat",
      "Data iklan bersih (event & pixel tertata)",
      "Operasional order lebih cepat dan minim error",
      "Trafik organik meningkat",
      "Pengalaman belanja konsisten",
    ],
    deliverables: [
      {
        title: "Halaman & Fitur Inti",
        items: [
          "Home, Katalog, Produk, Cart, Checkout, Order Tracking",
          "Auth (login/register), Profil, Riwayat Pesanan",
          "Admin ringan: produk, stok, order, diskon",
        ],
      },
      {
        title: "Teknis & Growth",
        items: [
          "SEO on-page dasar (title, meta, sitemap, robots)",
          "Analytics + pixel ads siap pakai",
          "Schema data produk dasar",
          "Optimasi performa (image, cache, lazyload)",
        ],
      },
    ],
    includes: [
      "Desain responsif + komponen UI reusable",
      "Caching & optimasi gambar",
      "Dokumentasi singkat operasional toko",
      "Setup analytics & pixel",
    ],
    excludes: [
      "Input data massal (produk/foto/deskripsi)",
      "Copywriting penuh & foto produk",
      "Biaya gateway pembayaran/ongkir/alat SaaS",
      "Manajemen iklan & SEO off-page",
    ],
    timeline: {
      minWeeks: 2,
      maxWeeks: 4,
      note: "Tergantung kesiapan konten & integrasi pihak ketiga.",
    },
    price: {
      from: 1_800_000,
      currency: "IDR",
      unit: "project",
      note: "Base untuk skenario sederhana. Integrasi khusus & kustom heavy ada biaya tambahan.",
    },
    kpis: [
      {
        name: "Tingkat Pembelian",
        target: "CR ≥ 2.5% (30 hari)",
        goal: "Lebih banyak pengunjung jadi pembeli",
        window: "30d",
        source: ["GA4"],
      },
      {
        name: "Checkout Sukses",
        target: "≥ 97%",
        goal: "Transaksi mulus tanpa error pembayaran",
        window: "30d",
        source: ["GA4", "Gateway Logs"],
      },
      {
        name: "Kecepatan Halaman",
        target: "P75 LCP mobile ≤ 2.5s",
        goal: "Pengunjung tidak kabur karena lemot",
        window: "30d",
        source: ["PageSpeed/CrUX"],
      },
      {
        name: "Abandoned Cart",
        target: "≤ 60%",
        goal: "Lebih banyak transaksi selesai",
        window: "30d",
        source: ["GA4"],
      },
      {
        name: "Akurasi Pixel",
        target: "Event loss ≤ 3%",
        goal: "Data iklan rapi untuk optimasi",
        window: "30d",
        source: ["Pixel/GA4"],
      },
      {
        name: "Stabilitas Pembayaran",
        target: "Gateway error ≤ 0.5%",
        goal: "Minim kegagalan saat bayar",
        window: "30d",
        source: ["Gateway Logs"],
      },
    ],
    security: {
      features: ["SSL Gratis", "Proteksi DDoS Dasar", "Backup Harian Otomatis"],
    },
    support: { warrantyDays: 7, slaHours: 48, channels: ["Email", "WhatsApp"] },
    demo: { label: "Lihat demo checkout", href: "/demo/commerce" },
  },

  // =========================
  // 2) HyperProfile Site
  // =========================
  {
    slug: "hyperprofile-site",
    name: "HyperProfile Site",
    badge: "Company Profile",
    tagline: "Brand kredibel, visual tajam, mudah dikelola tim.",
    desc: "Situs profil bisnis yang cepat, rapi, dan siap dipakai tim non-teknis. Cocok buat B2B, tender, dan pitching.",
    bullets: [
      "Desain visual tajam & konsisten dengan brand identity",
      "CMS friendly untuk tim non-teknis",
      "Form lead terintegrasi ke email/CRM",
      "Optimasi kecepatan & SEO on-page",
      "Struktur halaman yang jelas & terorganisir",
    ],
    cta: "/services/hyperprofile-site",
    audience: [
      "Perusahaan B2B butuh kredibilitas online",
      "Agensi & konsultan profesional",
      "Brand yang ingin tampil profesional",
      "Startup yang butuh landing page kredibel",
    ],
    outcomes: [
      "Brand terlihat profesional & konsisten",
      "Lead masuk terstruktur ke email/CRM",
      "Kecepatan muat halaman tinggi untuk SEO",
      "Citra perusahaan lebih kredibel",
      "Konten mudah dikelola tim",
    ],
    deliverables: [
      {
        title: "Halaman Umum",
        items: [
          "Home, About, Services/Products, Portfolio/Case, Blog (opsional), Contact",
          "CTA jelas & form lead tervalidasi",
        ],
      },
      {
        title: "Teknis & Manajemen",
        items: [
          "CMS sederhana (role & akses dasar)",
          "SEO on-page dasar + analytics",
          "Komponen hero/CTA yang bisa diedit",
          "Optimasi kecepatan & performa",
        ],
      },
    ],
    includes: [
      "Copy guideline ringkas",
      "Komponen SEO dasar",
      "Dokumentasi editor",
      "Setup analytics dasar",
    ],
    excludes: [
      "Produksi konten panjang (artikel/whitepaper)",
      "Brand guideline penuh (logo/CI manual)",
      "Iklan & outreach",
      "SEO off-page & manajemen konten",
    ],
    timeline: {
      minWeeks: 1,
      maxWeeks: 2,
      note: "Tergantung kesiapan materi & kecepatan keputusan.",
    },
    price: {
      from: 1_200_000,
      currency: "IDR",
      unit: "project",
      note: "Harga base untuk 5–7 halaman standar.",
    },
    kpis: [
      {
        name: "Form Kontak Berhasil",
        target: "≥ 98%",
        goal: "Prospek tidak nyangkut saat kirim pesan",
        window: "30d",
        source: ["GA4", "Form Logs"],
      },
      {
        name: "Kualitas Kunjungan",
        target: "Durasi & scroll naik vs baseline",
        goal: "Pengunjung betah dan membaca konten",
        window: "30d",
        source: ["GA4"],
      },
      {
        name: "Kecepatan Mobile",
        target: "Load < 2s (utama)",
        goal: "Kesan pertama bagus di perangkat nyata",
        window: "30d",
        source: ["PageSpeed/CrUX"],
      },
      {
        name: "Bounce Rate",
        target: "Turun ≥ 15%",
        goal: "Lebih banyak interaksi di halaman",
        window: "30d",
        source: ["GA4"],
      },
      {
        name: "Performa SEO Awal",
        target: "Keyword prioritas mulai naik (90 hari)",
        goal: "Muncul di pencarian penting",
        window: "90d",
        source: ["Search Console"],
      },
    ],
    security: {
      features: ["SSL Gratis", "Proteksi Brute-Force", "Update Keamanan Rutin"],
    },
    support: { warrantyDays: 7, slaHours: 48, channels: ["Email", "WhatsApp"] },
    demo: { label: "Contoh layout profil", href: "/demo/profile" },
  },

  // =========================
  // 3) HyperBuild Custom
  // =========================
  {
    slug: "hyperbuild-custom",
    name: "HyperBuild Custom",
    badge: "Custom Build",
    tagline: "Kebutuhan unik, arsitektur tepat, biaya masuk akal.",
    desc: "Project tailor-made dengan desain arsitektur yang benar dari awal. Diskusi serius, milestone jelas, tanpa drama.",
    bullets: [
      "Arsitektur sistem yang skalabel & maintainable",
      "Development iteratif dengan milestone jelas",
      "Integrasi aman dengan sistem eksternal",
      "Testing & dokumentasi menyeluruh",
      "Transparansi penuh terhadap progress",
    ],
    cta: "/services/hyperbuild-custom",
    audience: [
      "Startup tahap awal butuh solusi kustom",
      "Tim produk dengan kebutuhan spesifik",
      "Unit bisnis yang perlu solusi internal",
      "Perusahaan yang migrasi dari legacy system",
    ],
    outcomes: [
      "Fitur prioritas cepat ke market",
      "Teknologi relevan & maintainable",
      "Risiko teknis terukur sejak awal",
      "Scalability jangka panjang",
      "Dokumentasi teknis komprehensif",
    ],
    deliverables: [
      {
        title: "Dokumen Teknis",
        items: [
          "Arsitektur & logical diagram",
          "ERD & skema database",
          "API spec (OpenAPI) terdokumentasi",
        ],
      },
      {
        title: "Quality & Ops",
        items: [
          "CI/CD otomatis",
          "Linting, testing & quality gates",
          "Playbook deploy/rollback",
          "Monitoring & alerting",
        ],
      },
    ],
    includes: [
      "Sesi discovery & design review mendalam",
      "Demo mingguan & feedback loop",
      "Transparansi backlog & risiko",
      "Dokumentasi teknis & user manual",
    ],
    excludes: [
      "Pengembangan mobile penuh jika tidak disepakati",
      "Lisensi berbayar pihak ketiga",
      "Operasional 24/7 tanpa kontrak maintenance",
      "Desain UI/UX jika tidak termasuk dalam scope",
    ],
    timeline: {
      minWeeks: 3,
      maxWeeks: 8,
      note: "Bergantung kompleksitas & dependensi eksternal.",
    },
    price: {
      currency: "IDR",
      unit: "project",
      note: "Estimasi setelah discovery & scope final.",
    },
    kpis: [
      {
        name: "Waktu Aktif Sistem",
        target: "≥ 99.9%",
        goal: "Layanan tetap online",
        window: "30d",
        source: ["Uptime Monitor"],
      },
      {
        name: "Kecepatan Akses",
        target: "P95 API ≤ 300 ms",
        goal: "Pengalaman cepat & responsif",
        window: "30d",
        source: ["APM/Logs"],
      },
      {
        name: "Kualitas Rilis",
        target: "Bug kritis saat UAT ≈ 0",
        goal: "Rilis awal mulus",
        window: "7d",
        source: ["Issue Tracker"],
      },
      {
        name: "Pemulihan Gangguan",
        target: "MTTR ≤ 30 menit",
        goal: "Gak berlama-lama saat error",
        window: "30d",
        source: ["Incident Logs"],
      },
      {
        name: "Rutin Rilis",
        target: "≥ 1x/minggu",
        goal: "Fitur dan perbaikan jalan terus",
        window: "30d",
        source: ["CI/CD"],
      },
    ],
    security: {
      features: [
        "SSL Terkelola",
        "Audit Keamanan Kode",
        "Manajemen Vulnerability",
      ],
    },
    support: { warrantyDays: 7, slaHours: 48, channels: ["Email", "WhatsApp"] },
    demo: { label: "Minta arsitektur sample", href: "/demo/custom" },
  },

  // =========================
  // 4) Gen-AI Solutions
  // =========================
  {
    slug: "gen-ai-solutions",
    name: "Gen-AI Solutions",
    badge: "Gen-AI",
    tagline:
      "AI yang beneran kerja: dari chat pelanggan sampai keputusan bisnis.",
    desc: "Kami bantu bangun ekosistem Gen-AI yang relevan dan terukur — bukan sekadar demo yang bikin 'wow' sebentar. Dari otomasi chat WhatsApp 24/7 sampai analitik keuangan cerdas, semuanya diorkestrasi biar tim lo bisa kerja lebih cepat, rapi, dan murah.",
    bullets: [
      "CS AI 24/7 di WhatsApp & web",
      "AI Asisten Operasional (meeting, laporan, jadwal)",
      "AI Knowledge Search berbasis dokumen internal (RAG)",
      "AI Content Generator untuk marketing & brand",
      "Prompt Crafter siap pakai untuk tim non-teknis",
      "AI Decision Support untuk analitik & keuangan",
      "AI Training & Education interaktif",
      "AI Agent Multi-Role yang saling sinkron",
    ],
    cta: "/services/gen-ai-solutions",
    audience: [
      "Tim Customer Service & Operasional yang overworked",
      "Tim Marketing yang dikejar konten tiap hari",
      "Owner yang mau efisiensi tanpa nurunin kualitas",
      "Perusahaan dengan ribuan chat atau tiket per bulan",
    ],
    outcomes: [
      "Masalah selesai otomatis tanpa eskalasi manusia",
      "Waktu respon chat & analitik turun dari menit ke detik",
      "Nada & tone brand tetap konsisten di semua channel",
      "Biaya per tiket dan produksi konten turun signifikan",
      "Kepuasan pelanggan (CSAT) tetap stabil atau meningkat",
    ],
    deliverables: [
      {
        title: "Fondasi & Data",
        items: [
          "Analisis use case & peta risiko",
          "Pembangunan knowledge base (RAG) + pipeline otomatis",
          "Desain prompt, flow agent, dan guardrails keamanan",
        ],
      },
      {
        title: "Orkestrasi & Kontrol",
        items: [
          "Evaluasi kualitas model (offline & real-time)",
          "Monitoring percakapan dan performa agent",
          "Dashboard metrik, biaya, dan insight penggunaan",
          "Alert otomatis untuk error & penurunan kualitas",
        ],
      },
    ],
    includes: [
      "Template guardrail & evaluasi kualitas",
      "Dokumentasi operasional & keamanan data",
      "Workshop onboarding untuk tim internal",
      "Setup awal dashboard & monitoring",
    ],
    excludes: [
      "Biaya penggunaan model LLM & embedding",
      "Labeling data dalam skala besar",
      "Integrasi enterprise kompleks (perlu SOW tambahan)",
      "Fitur custom di luar scope dasar",
    ],
    timeline: {
      minWeeks: 2,
      maxWeeks: 6,
      note: "Mulai dari pilot kecil yang bisa langsung diukur, lalu scale bertahap.",
    },
    price: {
      currency: "IDR",
      unit: "project",
      note: "Estimasi menyesuaikan kompleksitas dan scope final.",
    },
    kpis: [
      {
        name: "Masalah Selesai oleh Bot",
        target: "≥ 60%",
        goal: "CS fokus ke kasus penting, bukan repetitif",
        window: "30d",
        source: ["Bot Analytics"],
      },
      {
        name: "Waktu Respon Chat",
        target: "< 2 detik",
        goal: "Pengalaman pelanggan secepat instan",
        window: "30d",
        source: ["Bot Analytics"],
      },
      {
        name: "Kepuasan Pelanggan (CSAT)",
        target: "≥ 4.2/5",
        goal: "AI tetap memberi jawaban yang memuaskan",
        window: "30d",
        source: ["Survey/CSAT"],
      },
      {
        name: "Biaya Operasional",
        target: "Turun ≥ 30%",
        goal: "Efisiensi biaya per tiket atau per konten",
        window: "30d",
        source: ["Billing/Usage"],
      },
      {
        name: "Konsistensi Jawaban",
        target: "On-brand (audit mingguan)",
        goal: "Nada & isi tetap sesuai brand voice",
        window: "7d",
        source: ["Sampling QA"],
      },
      {
        name: "Akurasi AI",
        target: "Hallucination < 5%",
        goal: "Jawaban aman dan relevan",
        window: "30d",
        source: ["Sampling QA"],
      },
    ],
    security: {
      features: [
        "Enkripsi Data End-to-End",
        "Role-Based Access Control (RBAC)",
        "Deteksi Anomali & Audit Log AI",
      ],
    },
    support: {
      warrantyDays: 7,
      slaHours: 48,
      channels: ["Email", "WhatsApp"],
    },
    demo: { label: "Coba pilot RAG", href: "/demo/gen-ai" },
  },
];
