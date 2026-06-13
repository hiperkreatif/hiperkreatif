import type { Service } from "./types";

export const SERVICES = [
  {
    slug: "hypersite-commerce",
    name: "Sistem E-Commerce",
    badge: "Toko Online Otomatis",
    tagline: "Infrastruktur penjualan 24/7 yang memangkas biaya operasional dan mencegah kebocoran transaksi.",
    desc: "Bagi skala bisnis yang terus bertumbuh, mengandalkan pemesanan manual via chat adalah bottleneck (hambatan). Kami membangun infrastruktur e-commerce yang mengotomatisasi seluruh alur pembelanjaan—dari pemilihan produk, kalkulasi ongkos kirim, hingga verifikasi pembayaran—sehingga tim Anda bisa fokus pada ekspansi, bukan urusan admin rutin.",
    bullets: [
      "Retensi Pelanggan Maksimal: Waktu muat (loading) instan untuk mencegah calon pembeli kabur ke kompetitor.",
      "Otomatisasi Logistik & Pembayaran: Terintegrasi langsung dengan kurir nasional dan gateway pembayaran (Virtual Account, E-Wallet).",
      "Manajemen Inventaris Terpusat: Sistem stok yang ter-update real-time, mencegah penjualan barang kosong.",
      "Checkout Tanpa Hambatan: Alur pembelian yang disederhanakan untuk meningkatkan rasio konversi secara drastis.",
      "Skalabilitas Tinggi: Server yang dirancang untuk menahan lonjakan trafik saat kampanye diskon besar-besaran."
    ],
    cta: "/services/hypersite-commerce",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 2, maxWeeks: 4, note: "" },
    price: { currency: "IDR", unit: "project", note: "" },
    security: { features: [] },
    support: { warrantyDays: 30, slaHours: 24, channels: [] },
    demo: { label: "", href: "" }
  },
  {
    slug: "hyperprofile-site",
    name: "Corporate Profile",
    badge: "Otoritas Digital",
    tagline: "Brosur digital elit yang merubah keraguan calon investor dan klien menjadi kepercayaan penuh.",
    desc: "Kesan pertama klien B2B atau investor modern selalu dimulai dari pencarian Google. Kami merancang arsitektur website profil perusahaan yang memancarkan otoritas penuh, kredibilitas, dan stabilitas bisnis Anda, memastikan Anda memenangkan persepsi klien bahkan sebelum pertemuan pertama terjadi.",
    bullets: [
      "Desain Kelas Enterprise: Estetika visual premium yang mencerminkan dominasi Anda di industri.",
      "Lead Generation Otomatis: Sistem yang secara otomatis menangkap data (nama, kontak) dari calon prospek yang berkunjung.",
      "Independensi Konten: Sistem panel kontrol simpel agar staf internal Anda bisa memperbarui berita/portofolio tanpa perlu keahlian teknis.",
      "Optimasi Mesin Pencari (SEO): Struktur yang dirancang agar perusahaan Anda mendominasi halaman pertama Google.",
      "Aksesibilitas Sempurna: Tampil tajam dan proporsional di seluruh ukuran layar, dari smartphone hingga monitor rapat."
    ],
    cta: "/services/hyperprofile-site",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 1, maxWeeks: 2, note: "" },
    price: { currency: "IDR", unit: "project", note: "" },
    security: { features: [] },
    support: { warrantyDays: 30, slaHours: 24, channels: [] },
    demo: { label: "", href: "" }
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    badge: "Dominasi Sosial",
    tagline: "Akuisisi pangsa pasar di Instagram & TikTok tanpa menguras waktu manajemen Anda.",
    desc: "Mendelegasikan media sosial ke karyawan yang tidak berpengalaman sering kali merusak citra brand. Kami mengambil alih seluruh beban tersebut. Tim ahli kami menangani riset pasar, strategi kampanye, produksi desain visual, hingga pelaporan matriks pertumbuhan—mengubah media sosial dari beban kerja menjadi aset penarik pelanggan.",
    bullets: [
      "Eksekusi Tanpa Pengawasan: Anda fokus memimpin bisnis, biarkan tim kami yang memikirkan ide dan produksi setiap bulan.",
      "Standar Visual Premium: Desain grafis dan video pendek (Reels/TikTok) yang mengerek nilai jual produk Anda.",
      "Strategi Berbasis Data: Konten yang dirancang untuk mengumpulkan interaksi murni, bukan sekadar pamer desain.",
      "Konsistensi Mutlak: Jadwal tayang yang presisi untuk memastikan brand Anda selalu berada di pikiran konsumen.",
      "Laporan Kinerja Transparan: Rangkuman bulanan tentang seberapa banyak audiens yang berhasil diubah menjadi prospek."
    ],
    cta: "/services/social-media-management",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 4, maxWeeks: 12, note: "" },
    price: { currency: "IDR", unit: "month", note: "" },
    security: { features: [] },
    support: { warrantyDays: 0, slaHours: 12, channels: [] },
    demo: { label: "", href: "" }
  },
  {
    slug: "gen-ai-solutions",
    name: "Integrasi AI & Otomasi",
    badge: "Efisiensi Cerdas",
    tagline: "Sistem kecerdasan buatan yang memangkas beban kerja operasional hingga 50%.",
    desc: "Beban kerja administratif yang berulang adalah pemborosan anggaran terbesar dalam perusahaan. Kami mengimplementasikan Asisten Kecerdasan Buatan (AI) terenkripsi yang mampu mengambil alih pekerjaan Customer Service tingkat pertama, pencarian dokumen internal, hingga merangkum laporan—tanpa kenal lelah, 24 jam sehari.",
    bullets: [
      "Efisiensi Tenaga Kerja: Mengurangi kebutuhan staf admin untuk menjawab pertanyaan standar pelanggan yang berulang.",
      "Respon Instan 24/7: Pelanggan Anda tidak akan pernah dibiarkan menunggu, jam berapapun mereka menghubungi.",
      "Adaptasi Pengetahuan Bisnis: AI dilatih secara khusus menggunakan SOP dan katalog produk internal perusahaan Anda.",
      "Analitik Data Cepat: Mampu merangkum ribuan baris data komplain atau transaksi menjadi ringkasan matang dalam hitungan detik.",
      "Privasi Tingkat Enterprise: Data rahasia perusahaan dan riwayat obrolan diisolasi penuh dan dijamin tidak akan bocor ke publik."
    ],
    cta: "/services/gen-ai-solutions",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 3, maxWeeks: 6, note: "" },
    price: { currency: "IDR", unit: "project", note: "" },
    security: { features: [] },
    support: { warrantyDays: 30, slaHours: 24, channels: [] },
    demo: { label: "", href: "" }
  }
];
