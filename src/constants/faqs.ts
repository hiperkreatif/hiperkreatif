export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "Berapa estimasi timeline proyek?",
    a: "Company profile 1–2 minggu, e-commerce 2–4 minggu, custom 3–8 minggu. Tergantung kesiapan konten, keputusan cepat, dan integrasi pihak ketiga.",
  },
  {
    q: "Skema pembayaran bagaimana?",
    a: "50% DP untuk mulai, 30% setelah demo pertama, 20% sebelum go-live. Untuk enterprise bisa PO/invoice net 14–30 hari.",
  },
  {
    q: "Apa saja yang termasuk dan tidak termasuk?",
    a: "Termasuk: desain, build, deploy, dokumentasi dasar. Tidak termasuk: copywriting penuh, stok foto berbayar, biaya SaaS pihak ketiga, iklan/SEO off-page, domain/hosting.",
  },
  {
    q: "Siapa pemilik source code dan aset?",
    a: "Klien punya lisensi penuh untuk proyek yang dibayar lunas. Reusable library internal tetap milik kami, tapi tidak membatasi operasional situs/app kamu.",
  },
  {
    q: "Bisa NDA dan kontrak formal?",
    a: "Bisa. Kami siap tanda tangan NDA dan MSA/SOW standar. Draft sederhana tersedia bila dibutuhkan.",
  },
  {
    q: "Teknologi yang dipakai?",
    a: "Pilih yang cepat dikerjakan, mudah dirawat, dan aman buat growth. Detail teknis dibahas saat konsultasi berdasarkan kebutuhan (SEO, performa, integrasi, AI).",
  },
  {
    q: "Hosting, domain, dan email bisnis?",
    a: "Kami bantu rekomendasi dan setup. Biaya ditanggung klien. Untuk performance, kami pakai hosting yang hemat tapi kencang sesuai skala.",
  },
  {
    q: "SEO & analytics siap?",
    a: "On-page SEO dasar, sitemap, robots, dan integrasi analytics/pixel termasuk. Campaign iklan/SEO off-page di luar scope.",
  },
  {
    q: "Keamanan & privasi data?",
    a: "Prinsip minimum access, enkripsi di transit, audit log dasar, dan praktik secure defaults. Data sensitif tetap milik klien.",
  },
  {
    q: "Perubahan scope di tengah jalan?",
    a: "Minor change kami akomodir di sprint berjalan. Major change dibuatkan change request dengan estimasi biaya & timeline baru.",
  },
  {
    q: "Support pasca go-live?",
    a: "7–30 hari support sesuai paket. Opsional maintenance bulanan untuk update, monitoring, dan backup.",
  },
  {
    q: "Jam operasional & kanal komunikasi?",
    a: "Senin–Jumat, 09.00–18.00 WIB. Kanal utama email & WhatsApp. Escalation untuk isu kritis via WhatsApp.",
  },
];
