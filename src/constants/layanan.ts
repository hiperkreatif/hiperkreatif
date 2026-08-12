import { FAKTA } from "./fakta";

// `aliases` menampung bentuk Inggris yang dipakai orang saat mencari ("jasa
// pembuatan company profile"). Terbit sebagai schema.org alternateName dan
// Organization.knowsAbout, jadi tidak mengotori teks tampil.
//
// Tanggal dan tarif yang bisa berubah diambil dari FAKTA, jangan ditulis ulang
// di dalam kalimat — lihat catatan di fakta.ts.
export const LAYANAN = [
  {
    slug: "ecommerce",
    name: "Sistem E-Commerce",
    aliases: ["Toko Online", "E-Commerce", "Jasa Pembuatan Toko Online", "Online Store"],
    badge: "Kanal jualan sendiri",
    tagline: "Pembeli lama tidak perlu dipotong dengan tarif pembeli baru.",
    desc: `Kenaikan ${FAKTA.biayaMarketplace.periode} menambah potongan di tiga tempat sekaligus: biaya program, logistik per pesanan, dan batas komisi. Pemungutan PPh ${FAKTA.pphMarketplace.tarif} oleh marketplace sendiri sudah dua kali bergeser jadwalnya dan kini dijadwalkan mulai ${FAKTA.pphMarketplace.berlaku}. Marketplace tetap kanal termurah untuk menemukan pembeli baru. Yang mahal adalah membayar potongan pembeli baru untuk orang yang sudah tahu nama Anda, dan biaya itu tidak ikut tertunda. Toko sendiri dipakai untuk menampung pesanan ulang, dengan pembayaran, ongkir, dan stok yang terurus otomatis.`,
    bullets: [
      "Tanpa komisi per transaksi, cuma server dan payment gateway.",
      "Nomor dan riwayat pembeli masuk ke basis data Anda.",
      "Stok berkurang otomatis begitu order masuk.",
      "Ongkir dan pembayaran tersambung ke kurir, virtual account, e-wallet.",
      "Harga dan stok terbaca mesin pencari dan asisten AI."
    ],
    faqs: [
      { q: "Berapa lama sampai tokonya bisa menerima pesanan?", a: "Dua sampai empat minggu untuk versi yang sudah bisa dipakai berjualan: katalog, checkout, pembayaran, dan ongkir yang jalan. Fitur tambahan menyusul setelah toko itu terbukti dipakai, bukan ditahan sampai semuanya lengkap." },
      { q: "Apakah saya harus menutup toko di marketplace?", a: "Tidak, dan kami akan menyarankan sebaliknya. Marketplace tetap kanal termurah untuk menemukan pembeli baru. Toko sendiri dipakai untuk menampung pembelian ulang dari orang yang sudah tahu nama Anda, karena untuk mereka potongan pembeli baru tidak masuk akal dibayar dua kali." },
      { q: "Stok di marketplace dan di toko sendiri apakah bisa satu angka?", a: "Bisa, selama platformnya membuka API stok. Kalau tidak, kami pakai satu sumber angka di sisi Anda dan sinkronisasi terjadwal, dan kami sebutkan di awal berapa jeda yang mungkin terjadi supaya Anda tidak menemukannya sebagai kejutan." },
      { q: "Pembayarannya lewat apa saja?", a: "Virtual account bank, e-wallet, kartu, dan transfer manual kalau Anda masih memerlukannya. Biaya per transaksinya milik payment gateway, dibayar langsung oleh Anda ke penyedianya, dan kami tunjukkan tarifnya sebelum Anda memilih." },
      { q: "Kalau nanti PPh 0,5% jadi berlaku, apakah sistemnya perlu diubah?", a: "Tidak. Pemungutan itu terjadi di sisi marketplace, bukan di toko Anda sendiri. Yang perlu Anda siapkan cuma NPWP atau NIK terdaftar di akun marketplace, dan surat pernyataan kalau omzet Anda di bawah Rp500 juta setahun." },
    ],
    cta: "/layanan/ecommerce",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 2, maxWeeks: 4, note: "" },
    // `from: 0` berarti belum ditetapkan, bukan gratis: barisnya disembunyikan
    // di halaman layanan dan tidak diterbitkan sebagai Offer. Isi angkanya
    // untuk memunculkannya.
    price: { currency: "IDR", unit: "project", from: 0, note: "" },
    security: { features: [] },
    support: { warrantyDays: 30, slaHours: 24, channels: [] },
    demo: { label: "", href: "" }
  },
  {
    slug: "profil-perusahaan",
    name: "Profil Perusahaan",
    aliases: ["Company Profile", "Jasa Pembuatan Company Profile", "Website Perusahaan", "Corporate Profile"],
    badge: "Profil yang bisa diverifikasi",
    tagline: "Buyer dan asisten AI menilai vendor dari yang tertulis saja.",
    desc: "Buyer B2B memeriksa vendor sebelum membalas penawaran, dan sebagian pemeriksaan itu kini lewat asisten AI yang merangkum apa saja yang bisa ia baca. Kalau NIB, NPWP, sertifikasi, dan kapasitas produksi tidak tertulis eksplisit di satu tempat, berkas Anda berhenti di tahap kurasi tanpa pernah tahu alasannya. Kami taruh bukti-bukti itu dalam struktur yang bisa dicek manusia maupun mesin.",
    bullets: [
      "Halaman legalitas: NIB, NPWP, sertifikasi, bisa dicek sendiri.",
      "Fakta perusahaan ditulis sebagai penanda terstruktur, bukan kalimat pemasaran.",
      "Kapasitas produksi dan daftar klien menjawab kurasi vendor.",
      "Tata letak menyesuaikan isi Anda, bukan sebaliknya.",
      "Panel sederhana, staf Anda memperbarui portofolio sendiri."
    ],
    faqs: [
      { q: "Berapa lama pengerjaannya?", a: "Satu sampai dua minggu, terhitung sejak bahan legalitas dan profil kapasitas produksi Anda lengkap. Bagian yang paling sering memperlambat bukan pembuatannya, melainkan menunggu dokumen dikumpulkan dari beberapa orang di tim Anda." },
      { q: "Kami belum punya NIB. Apakah masih bisa dikerjakan?", a: "Bisa, dan halamannya kami siapkan supaya nomor itu tinggal dimasukkan begitu terbit. Pengurusan NIB lewat OSS tidak dipungut biaya resmi, tapi kami tidak mengurusnya untuk Anda, karena itu di luar cakupan kami dan kami tidak mau menagih Anda untuk sesuatu yang gratis." },
      { q: "Apa bedanya dengan memakai template yang sudah jadi?", a: "Template menentukan bagian mana yang harus Anda isi. Kalau perusahaan Anda tidak punya isi untuk salah satu bagiannya, yang terjadi adalah mengarang teks basa-basi untuk mengisinya. Kami balik urutannya: tata letaknya menyesuaikan bukti yang benar-benar Anda punya." },
      { q: "Apakah tim kami bisa memperbarui sendiri?", a: "Bisa. Panel untuk memperbarui portofolio, sertifikasi, dan daftar klien dibuat sesederhana mungkin, dan tim Anda kami latih sampai tidak perlu bertanya lagi. Kalau ada bagian yang tetap membingungkan, itu masalah desain kami." },
      { q: "Bagaimana memastikan profilnya terbaca asisten AI?", a: "Fakta perusahaan ditulis sebagai teks biasa dan sekaligus sebagai penanda terstruktur, bukan digambar di dalam banner. Mesin bisa mengutip kalimat, tidak bisa mengutip gambar, dan itu bedanya antara disebut dan dilewati saat ada yang merangkum kategori Anda." },
    ],
    cta: "/layanan/profil-perusahaan",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 1, maxWeeks: 2, note: "" },
    price: { currency: "IDR", unit: "project", from: 0, note: "" },
    security: { features: [] },
    support: { warrantyDays: 30, slaHours: 24, channels: [] },
    demo: { label: "", href: "" }
  },
  {
    slug: "media-sosial",
    name: "Pengelolaan Media Sosial",
    aliases: ["Social Media Management", "Jasa Social Media", "Admin Media Sosial", "Social Media Marketing"],
    badge: "Kanal sosial dikelola",
    tagline: "Jadwal posting berhenti begitu tim sibuk, pengunjungnya ikut berhenti.",
    desc: "Jangkauan organik makin sempit, dan cara orang mencari ikut bergeser: sebagian bertanya ke asisten AI, sebagian mencari langsung di TikTok. Keduanya menuntut merek yang cukup sering muncul untuk diingat dan disebut. Rutin posting saja tidak cukup, dan justru di titik itu kebanyakan UMKM berhenti karena orang yang mengurusnya punya pekerjaan utama lain. Kami ambil alih siklusnya, sekaligus memasok pengunjung ke toko dan profil milik Anda sendiri.",
    bullets: [
      "Jadwal tayang jalan terus, termasuk saat pemiliknya cuti.",
      "Konten diuji kecil dulu, yang tembus baru didorong.",
      "Desain dan video pendek ikut kami kerjakan.",
      "Merek disebut konsisten di caption dan transkrip, ikut terbaca mesin.",
      "Laporan bulanan menghitung prospek, bukan jumlah suka."
    ],
    faqs: [
      { q: "Kontennya siapa yang membuat?", a: "Kami, termasuk desain dan video pendeknya. Yang kami minta dari Anda hanya bahan mentah yang cuma Anda punya: foto produk asli, proses kerja, dan hal-hal yang tidak bisa kami karang sendiri." },
      { q: "Berapa kali posting per bulan?", a: "Jumlahnya ditetapkan di awal bersama Anda dan ditulis di blueprint, bukan dijanjikan sebagai angka pemasaran. Yang kami jaga adalah jadwalnya tetap jalan di minggu tersibuk Anda, termasuk saat pemiliknya cuti." },
      { q: "Bisa dijanjikan berapa banyak pengikut baru?", a: "Tidak, dan siapa pun yang menjanjikannya sedang menjual hal yang tidak dia kendalikan. Jangkauan ditentukan algoritma platform. Yang bisa kami sepakati adalah jumlah tayang, konsistensi jadwal, dan berapa prospek yang datang dari kanal ini, dan angka terakhir itu yang kami laporkan." },
      { q: "Apa isi laporan bulanannya?", a: "Berapa prospek yang masuk dari kanal ini dan dari konten yang mana, bukan sekadar jumlah suka. Kalau angkanya jelek, laporannya tetap menyebutkan angkanya." },
      { q: "Kalau kami mau berhenti, bagaimana?", a: "Layanan ini bulanan tanpa ikatan minimum. Akun, konten yang sudah tayang, dan bahan mentahnya milik Anda dan tetap di tangan Anda saat berhenti." },
    ],
    cta: "/layanan/media-sosial",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 4, maxWeeks: 12, note: "" },
    price: { currency: "IDR", unit: "month", from: 0, note: "" },
    security: { features: [] },
    support: { warrantyDays: 0, slaHours: 12, channels: [] },
    demo: { label: "", href: "" }
  },
  {
    slug: "ai-otomasi",
    name: "Otomasi Operasional",
    aliases: ["AI Automation", "Otomasi Bisnis", "Integrasi AI", "Workflow Automation", "Chatbot WhatsApp", "Otomasi WhatsApp Business API"],
    badge: "Sesudah pesan masuk",
    tagline: "Pesannya sudah dijawab. Pesanannya masih Anda salin sendiri.",
    desc: `Pada ${FAKTA.metaBusinessAgent.rilis} Meta meluncurkan Meta Business Agent di Indonesia: agen yang menempel di aplikasi WhatsApp Business, menjawab pertanyaan produk, merekomendasikan katalog, menjadwalkan janji temu, dan mengoper ke manusia. Lapis penjawab itu sekarang datang dari platformnya sendiri, dan kami tidak berminat menagih Anda untuk sesuatu yang sudah Anda punya. Yang tidak ikut selesai adalah semua yang terjadi sesudah percakapan ditutup: pesanan tetap disalin tangan ke spreadsheet, invoice tetap diketik ulang, stok di tiga kanal tetap disamakan satu per satu, jatuh tempo tetap bergantung pada ingatan orang. Itu bukan percakapan, itu pekerjaan, dan itu yang kami otomatiskan.`,
    bullets: [
      "Pesanan masuk langsung jadi baris data, tidak disalin ulang tangan.",
      "Invoice, penagihan, dan pengingat jatuh tempo jalan tanpa diingatkan orang.",
      "Stok dan harga disamakan lintas kanal, bukan diperbaiki setelah pembeli komplain.",
      "Tiap alur punya batas wewenang dan jejak audit, bisa dimatikan per bagian.",
      "Alur yang bisa digambar sebagai bagan tidak kami pasangi model bahasa."
    ],
    faqs: [
      { q: "Meta sudah memberi agen AI di WhatsApp. Buat apa menyewa Anda?", a: "Untuk menjawab pertanyaan produk dan menjadwalkan janji temu, pakai saja punya Meta, dan kami akan bilang begitu di panggilan pertama. Yang kami kerjakan mulai di titik agen itu berhenti: menyambungkan percakapan yang sudah selesai ke stok, pembukuan, pengiriman, dan penagihan Anda, supaya tidak ada yang perlu disalin tangan setelahnya." },
      { q: "Berapa lama sampai bisa dipakai?", a: "Tiga sampai enam minggu untuk satu alur pertama yang sudah menangani transaksi sungguhan. Waktu terbanyak habis di merapikan data dan sistem yang sudah Anda pakai, bukan di memasang modelnya. Alur berikutnya jauh lebih cepat karena sambungannya sudah ada." },
      { q: "Apakah bisnis kami benar-benar butuh AI?", a: "Belum tentu, dan itu pertanyaan yang kami dahulukan. Kalau langkah penyelesaiannya bisa ditentukan di muka dan digambar sebagai bagan, yang Anda butuhkan alur kerja biasa: lebih murah, lebih cepat dibangun, dan hasilnya bisa diuji dengan pasti. Model bahasa kami pakai hanya di bagian yang tidak bisa ditentukan di muka." },
      { q: "Biaya pemakaian AI-nya bisa membengkak di tengah jalan?", a: "Bisa, dan itu salah satu sebab paling sering proyek semacam ini dihentikan. Karena itu alur yang deterministik tidak memanggil model sama sekali, batas pemakaian ditetapkan per alur sebelum dijalankan, dan laporan pemakaiannya terbuka untuk Anda, bukan tertutup di dalam tagihan kami." },
      { q: "Bagaimana kalau otomasinya salah bertindak?", a: "Batas wewenangnya ditentukan sebelum dibangun, bukan setelah ada yang salah. Apa pun yang menyangkut uang pelanggan, komplain, dan negosiasi harga berhenti untuk disetujui manusia. Tiap tindakan meninggalkan jejak yang bisa ditelusuri, dan tiap alur bisa dimatikan sendiri-sendiri tanpa mematikan sisanya." },
      { q: "Data internal dan percakapan pelanggan kami dipakai melatih model?", a: "Tidak. Dokumen internal dan riwayat percakapan Anda disimpan terpisah dan tidak dipakai melatih model publik. Kredensial tidak pernah ditaruh di dalam kode, dan hak akses dibatasi per peran." },
      { q: "Bagaimana kami tahu ini berhasil atau tidak?", a: "Angkanya disepakati sebelum mulai: berapa jam kerja manual per minggu yang hilang, dan berapa persen pesanan yang berjalan dari masuk sampai tercatat tanpa disentuh, dihitung dari data bulan sebelum sistemnya jalan. Kalau setelah berjalan angkanya tidak bergerak, itu terlihat di laporan, bukan tertutup istilah." },
    ],
    cta: "/layanan/ai-otomasi",
    audience: [], outcomes: [], deliverables: [], includes: [], excludes: [], kpis: [],
    timeline: { minWeeks: 3, maxWeeks: 6, note: "" },
    price: { currency: "IDR", unit: "project", from: 0, note: "" },
    security: { features: [] },
    support: { warrantyDays: 30, slaHours: 24, channels: [] },
    demo: { label: "", href: "" }
  }
];
