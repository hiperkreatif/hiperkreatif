export const SEO = {
  // Kata kunci pencarian ("jasa website", "toko online", "otomasi ai") sengaja
  // dipertahankan di title, problem-first-nya ditaruh di description.
  title: "Jasa Website, Toko Online & Otomasi AI untuk UMKM | Hiperkreatif",

  description:
    "Margin habis di potongan marketplace dan kerja manual? Kami bangun toko online, profil perusahaan, otomasi AI, dan kelola media sosialnya. Konsultasi gratis.",

  personName: "Kang Dadan",
  personRole: "Software Engineer & Solo Founder",

  // Open Graph / Twitter
  // Gambarnya diimpor sebagai aset di BaseLayout, jadi tidak ada path di sini:
  // src/assets/og.webp, bukan public/og.webp. Alt harus mengutip teks di dalam
  // gambarnya, bukan menuliskan klaim lain.
  ogImageAlt:
    "Hiperkreatif — toko online, profil perusahaan, media sosial, otomasi AI. Dirancang untuk masalah nyata, dibangun untuk profitabilitas.",
  ogType: "website",
  twitterCard: "summary_large_image",

  // Robots: valid & diakui Google
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  siteName: "Hiperkreatif",

  // Nama merek tetap "Hiperkreatif"; badan hukumnya dipakai di footer dan
  // schema.org legalName supaya bisa diverifikasi calon klien B2B.
  legalName: "PT Hiperkreatif Solusi Digital",
};
