// Kunci = slug layanan. Jangan tambah kunci tanpa menambah layanannya: chip
// kategori berfungsi sebagai perutean, dan `astro check` tidak dipasang di sini
// jadi kunci yang salah tidak menggagalkan build, cuma bikin chip kosong.
//
export const CATEGORY = {
  ecommerce: "E-Commerce",
  "profil-perusahaan": "Profil Perusahaan",
  "media-sosial": "Media Sosial",
  "ai-otomasi": "Otomasi Operasional",
} as const;

// Tiap angka wajib menautkan penerbit datanya, dan tautannya harus bisa dibuka
// pembaca. Klaim yang cuma sampai blog vendor tidak dipakai.
export const JURNAL = [
  {
    slug: "pph-marketplace-ditunda-1-november-2026",
    title: "PPh Marketplace Dipungut Empat Hari, Lalu Ditunda ke November",
    date: "11 Agustus 2026, 08:40 WIB",
    service: "ecommerce",
    iso: "2026-08-11T08:40:00+07:00",
    excerpt:
      "Pemungutan dimulai 1 Agustus, dibatalkan 5 Agustus, dan yang terlanjur dipungut dikembalikan. Yang perlu Anda putuskan bukan soal pajaknya, karena tanggalnya sudah dua kali bergeser.",
    sources: [
      {
        title: "Pemerintah Implementasi PMK 37/2025 Melalui Penunjukan Empat Marketplace Sebagai Pemungut PPh",
        publisher: "Direktorat Jenderal Pajak",
        date: "1 Juli 2026",
        url: "https://www.pajak.go.id/id/siaran-pers/pemerintah-implementasi-pmk-372025-melalui-penunjukan-empat-marketplace-sebagai",
      },
      {
        title: "Pengumuman PENG-46/PJ.09/2026 tentang Penundaan Waktu Pemberlakuan Ketentuan Pemungutan PPh Pasal 22 oleh Marketplace",
        publisher: "Direktorat Jenderal Pajak",
        date: "5 Agustus 2026",
        url: "https://www.pajak.go.id/id/pengumuman/penundaan-waktu-pemberlakuan-ketentuan-pemungutan-pph-pasal-22-oleh-marketplace",
      },
      {
        title: "DJP: Pemungutan PPh Pasal 22 Marketplace Ditunda hingga 31 Oktober",
        publisher: "DDTC News",
        date: "Agustus 2026",
        url: "https://news.ddtc.co.id/berita/nasional/1821422/djp-pemungutan-pph-pasal-22-marketplace-ditunda-hingga-31-oktober",
      },
      {
        title: "Marketplace Tetap Bersiap Meski Penunjukan Pemungut PPh 22 Ditunda",
        publisher: "DDTC News",
        date: "5 November 2025",
        url: "https://news.ddtc.co.id/berita/nasional/1814973/marketplace-tetap-bersiap-meski-penunjukan-pemungut-pph-22-ditunda",
      },
      {
        title: "Shopee Naikkan Biaya Gratis Ongkir ke Penjual Mulai 2 Mei, Bersifat Opsional",
        publisher: "Katadata",
        date: "13 April 2026",
        url: "https://katadata.co.id/digital/e-commerce/69dc895b0656c/shopee-naikkan-biaya-gratis-ongkir-ke-penjual-mulai-2-mei-bersifat-opsional",
      },
      {
        title: "Komisi Dinamis Seller TikTok Shop Naik Hari Ini, Batas Atas Melesat 15 Kali Lipat",
        publisher: "Bisnis.com",
        date: "18 Mei 2026",
        url: "https://teknologi.bisnis.com/read/20260518/84/1974415/komisi-dinamis-seller-tiktok-shop-naik-hari-ini-batas-atas-melesat-15-kali-lipat",
      },
    ],
    content: `
      <h2>Urutan kejadiannya</h2>
      <p>Pada 1 Juli 2026, Direktorat Jenderal Pajak menunjuk empat penyelenggara marketplace sebagai pemungut PPh Pasal 22: PT Tokopedia, PT Shopee International Indonesia, PT Ecart Webportal Indonesia (Lazada), dan PT Global Digital Niaga Tbk (Blibli). Dasarnya <a href="https://www.pajak.go.id/id/siaran-pers/pemerintah-implementasi-pmk-372025-melalui-penunjukan-empat-marketplace-sebagai" rel="noopener">PMK 37/2025</a>, dan Pasal 17 aturan itu memberi jeda satu bulan sejak penunjukan. Pemungutan pun dimulai 1 Agustus 2026.</p>
      <p>Empat hari kemudian aturannya ditunda. Dalam media briefing 5 Agustus 2026, Menteri Keuangan Purbaya Yudhi Sadewa menyatakan pemberlakuannya ditahan demi menjaga daya beli. DJP menerbitkan <a href="https://www.pajak.go.id/id/pengumuman/penundaan-waktu-pemberlakuan-ketentuan-pemungutan-pph-pasal-22-oleh-marketplace" rel="noopener">Pengumuman PENG-46/PJ.09/2026 tentang penundaan pemberlakuan</a> pada hari yang sama, dan isinya tegas: pemberlakuan ditunda sampai dengan 31 Oktober 2026, dan pemungutan baru mulai berlaku 1 November 2026.</p>
      <p>Dua hal ikut dibatalkan. Surat penunjukan keempat marketplace dicabut dan akan diterbitkan ulang nanti, dan PPh Pasal 22 yang sudah terlanjur dipungut sejak 1 Agustus <a href="https://news.ddtc.co.id/berita/nasional/1821422/djp-pemungutan-pph-pasal-22-marketplace-ditunda-hingga-31-oktober" rel="noopener">dikembalikan kepada pedagang</a>.</p>

      <h2>Tanggalnya sudah bergeser sebelum ini</h2>
      <p>Jadwal pelaksanaan aturan ini bukan baru sekali berubah. PMK 37/2025 sendiri sudah terbit sejak pertengahan 2025, tapi penunjukan pemungutnya tidak langsung keluar. Pada 5 November 2025, Sekjen idEA Budi Primawan menyatakan aturannya <a href="https://news.ddtc.co.id/berita/nasional/1814973/marketplace-tetap-bersiap-meski-penunjukan-pemungut-pph-22-ditunda" rel="noopener">"sedang ditunda sampai daya beli masyarakat meningkat"</a> sementara anggotanya tetap bersiap. Penunjukan baru terbit 1 Juli 2026, pemungutan dimulai 1 Agustus, dan ditahan lagi empat hari kemudian.</p>
      <p>Alasan yang disebut pemerintah sama di kedua penundaan: menjaga daya beli masyarakat. Yang perlu dibaca dari pola ini bukan tanggalnya, tapi sifatnya. Setiap tanggal baru sejauh ini punya tanggal penggantinya, dan tidak ada yang menjamin 1 November 2026 berbeda.</p>

      <blockquote>Kalau sebuah keputusan bisnis hanya masuk akal karena satu tanggal regulasi, keputusan itu sebenarnya belum matang. Tanggalnya bisa bergeser, strukturnya tidak.</blockquote>

      <h2>Yang sebenarnya tidak berubah</h2>
      <p>Perlu diluruskan lebih dulu, karena ini yang paling sering disalahpahami: PMK 37/2025 tidak menciptakan pajak baru. Dirjen Pajak Bimo Wijayanto menyatakannya langsung: <em>"PMK-37/2025 tidak mengatur jenis pajak baru."</em> Penghasilan usaha Anda memang sudah terutang PPh sebelumnya. Yang berubah hanya siapa yang menyetorkan dan kapan: dari Anda setor sendiri belakangan, menjadi dipungut marketplace saat transaksi terjadi.</p>
      <p>Artinya bagi pedagang yang selama ini patuh, ini bukan beban tambahan melainkan pergeseran arus kas. Uang yang dulu masuk penuh lalu disetor kemudian, nanti terpotong di depan. Bagi usaha dengan perputaran stok cepat, selisih waktu itu terasa di modal belanja, dan itu efek yang nyata meski tarifnya bukan biaya baru.</p>
      <p>Tarifnya 0,5% dari peredaran bruto, di luar PPN dan PPnBM. Wajib pajak orang pribadi dengan omzet sampai Rp500 juta setahun dikecualikan, tapi pengecualian itu <strong>tidak otomatis</strong>: syaratnya menyampaikan surat pernyataan kepada marketplace sesuai ketentuan. Kalau surat itu tidak pernah dikirim, pemotongan tetap jalan meski omzet Anda di bawah ambang.</p>

      <h2>Yang naik bulan Mei justru tidak ditunda</h2>
      <p>Sementara pajaknya bergeser, biaya platform bergerak ke arah sebaliknya dan tidak ada pengumuman penundaan untuk itu. Per 2 Mei 2026 Shopee menyesuaikan biaya layanan program Gratis Ongkir XTRA. Menurut <a href="https://katadata.co.id/digital/e-commerce/69dc895b0656c/shopee-naikkan-biaya-gratis-ongkir-ke-penjual-mulai-2-mei-bersifat-opsional" rel="noopener">rincian yang dikutip Katadata dari laman edukasi penjual Shopee</a>, sub-kategori fashion aksesori naik dari 5,5% menjadi 7,5% untuk produk ukuran biasa, sementara sub-kategori logam mulia dan perhiasan naik dari 1,5% menjadi 2% dengan batas Rp40.000 per produk. Programnya opsional, dan penjual yang beriklan bisa menekan biayanya sampai 1,5%.</p>
      <p>Yang lebih besar datang pada 18 Mei 2026. TikTok Shop menaikkan batas maksimum Biaya Komisi Dinamis dari Rp40.000 menjadi Rp650.000 per item, potongan yang dikenakan atas tiap pesanan yang berhasil dikirim dan sudah termasuk PPN. <a href="https://teknologi.bisnis.com/read/20260518/84/1974415/komisi-dinamis-seller-tiktok-shop-naik-hari-ini-batas-atas-melesat-15-kali-lipat" rel="noopener">Bisnis.com memuat dua contoh hitungan dari skema barunya</a>.</p>
      <ul>
        <li>Pakaian dan sepatu wanita seharga Rp1 juta. Tarif lama 5,50% menghasilkan Rp55.000, tapi yang dipotong cuma Rp40.000 karena tertahan plafon. Tarif barunya 8,00%, jadi Rp80.000 dipotong penuh karena masih jauh di bawah plafon baru.</li>
        <li>Laptop seharga Rp20 juta. Tarif kategorinya 4,00% menghasilkan Rp800.000, dan kini yang dipotong Rp650.000 karena tertahan plafon baru. Sebelum 18 Mei, potongannya berhenti di Rp40.000.</li>
      </ul>
      <p>Contoh pertama itu yang paling relevan untuk kebanyakan penjual: barang sejuta rupiah, potongan naik dua kali lipat dalam satu hari. Contoh kedua menunjukkan ke mana arahnya untuk barang mahal.</p>
      <p>Jadi urutannya begini: satu potongan yang tertunda dua bulan, dan beberapa potongan lain yang sudah naik sejak Mei dan tidak akan turun.</p>

      <h2>Keputusan yang tetap layak diambil sekarang</h2>
      <p>Ada satu hal yang tidak ikut ditunda dan tidak diatur PMK mana pun: pembeli yang sudah pernah belanja di toko Anda tetap dihitung sebagai pembeli baru setiap kali mereka pesan lagi, lengkap dengan komisi dan biaya program yang menyertainya. Itu bukan kebijakan yang bisa dibatalkan lewat pengumuman.</p>
      <p>Jadi pekerjaan yang layak dikerjakan dua bulan ke depan bukan memindahkan kanal karena takut pajak, melainkan menghitung berapa persen pesanan bulan lalu yang datang dari orang yang sudah pernah membeli. Angkanya ada di laporan penjualan Anda sendiri, bisa dihitung dari nomor telepon atau nama penerima yang berulang. Untuk porsi itulah potongan pembeli baru tidak masuk akal dibayar dua kali.</p>
      <p>Dan untuk 1 November, yang perlu disiapkan cukup dua: pastikan NPWP atau NIK sudah terdaftar di akun marketplace Anda, dan kalau omzet Anda di bawah Rp500 juta, siapkan surat pernyataannya sebelum tanggalnya tiba.</p>
    `,
  },

  {
    slug: "nib-wajib-permendag-19-2026",
    title: "NIB Jadi Syarat Transaksi, dan Statusnya Terpampang di Profil Toko",
    date: "10 Agustus 2026, 10:15 WIB",
    service: "profil-perusahaan",
    iso: "2026-08-10T10:15:00+07:00",
    excerpt:
      "Permendag 19/2026 ditandatangani 8 Juni dan mencabut aturan sebelumnya. Kemendag menyebut baru beberapa persen pedagang yang punya NIB. Yang berubah bukan cuma kewajibannya, tapi siapa yang bisa melihat statusnya.",
    sources: [
      {
        title: "Permendag 19/2026 Berlaku, Pedagang di e-Commerce Kini Wajib Punya NIB",
        publisher: "DDTC News",
        date: "Juni 2026",
        url: "https://news.ddtc.co.id/berita/nasional/1820139/permendag-192026-berlaku-pedagang-di-e-commerce-kini-wajib-punya-nib",
      },
      {
        title: "Kemendag Beri Masa Transisi NIB bagi Pedagang Marketplace",
        publisher: "InfoPublik (Kominfo)",
        date: "2026",
        url: "https://infopublik.id/kategori/nasional-ekonomi-bisnis/979462/index.html",
      },
      {
        title: "Permendag Baru E-Commerce Terbit, Ini 10 Poin Pentingnya",
        publisher: "CNN Indonesia",
        date: "9 Juni 2026",
        url: "https://www.cnnindonesia.com/ekonomi/20260609133130-92-1367064/permendag-baru-e-commerce-terbit-ini-10-poin-pentingnya",
      },
    ],
    content: `
      <h2>Aturannya sudah berjalan</h2>
      <p>Peraturan Menteri Perdagangan Nomor 19 Tahun 2026 tentang Penyelenggaraan Perdagangan Melalui Sistem Elektronik <a href="https://www.cnnindonesia.com/ekonomi/20260609133130-92-1367064/permendag-baru-e-commerce-terbit-ini-10-poin-pentingnya" rel="noopener">ditandatangani Menteri Perdagangan Budi Santoso pada 8 Juni 2026</a> dan mencabut Permendag 31/2023. Isinya mewajibkan pelaku usaha yang berjualan lewat platform digital memiliki perizinan berusaha, dan menurut Pasal 4 ayat (5) itu berarti <a href="https://news.ddtc.co.id/berita/nasional/1820139/permendag-192026-berlaku-pedagang-di-e-commerce-kini-wajib-punya-nib" rel="noopener">paling sedikit NIB di bidang perdagangan</a> beserta bukti pemenuhan standar teknis barang atau jasanya.</p>
      <p>Soal seberapa siap lapangannya, angkanya belum pernah dirinci resmi. Yang ada baru keterangan pejabat Kemendag bahwa menurut data awal, <a href="https://infopublik.id/kategori/nasional-ekonomi-bisnis/979462/index.html" rel="noopener">baru beberapa persen merchant di berbagai platform e-commerce yang telah memiliki NIB</a>. Kami tidak memakai angka yang lebih pasti dari itu, karena tidak menemukannya di sumber mana pun yang bisa dibuka.</p>

      <h2>Dua tenggat, dua konsekuensi</h2>
      <ul>
        <li><strong>Pedagang lama</strong>, yang sudah berjualan sebelum aturan berlaku, diberi masa transisi 18 bulan sejak aturannya berlaku pada 8 Juni 2026, jadi berakhir sekitar Desember 2027. Alasannya disebut pejabat Kemendag sederhana saja: mereka sudah ada di dalam ekosistemnya. Selama proses berjalan, akun mereka menyandang label "Dalam Proses Legalisasi".</li>
        <li><strong>Pedagang baru</strong> diberi waktu 6 bulan sejak mendaftar, dan selama tenggang itu tetap boleh berjualan.</li>
      </ul>
      <p>Sanksinya bukan denda. Pasal 17 ayat (5) mewajibkan platform membatasi hak akses berupa penghentian transaksi perdagangan begitu masa tenggangnya lewat. Pasal 4 ayat (4) juga mewajibkan platform menolak pendaftaran pedagang dalam negeri yang belum punya perizinan berusaha.</p>
      <p>Biayanya nol. Pengurusan NIB lewat sistem OSS di oss.go.id tidak dipungut biaya dan bisa diselesaikan daring, dan Pasal 17 ayat (1) mewajibkan platform menyediakan fitur perizinan yang tersambung langsung ke OSS saat pendaftaran.</p>

      <h2>Bagian yang sering terlewat</h2>
      <p>Fokus pemberitaan biasanya berhenti di kewajiban dan sanksinya. Padahal ada satu kewajiban platform yang dampaknya berbeda jenis: marketplace diwajibkan menayangkan informasi status NIB pada profil pedagang, dan informasi itu <strong>dapat dilihat konsumen</strong>.</p>
      <p>Artinya legalitas berpindah dari berkas di laci menjadi label di halaman toko. Dua penjual dengan harga dan foto produk yang mirip akan tampil berbeda kalau satu berstatus terverifikasi dan satunya "Dalam Proses Legalisasi". Tidak ada yang perlu bertanya, dan tidak ada kesempatan menjelaskan.</p>

      <blockquote>Selama ini legalitas diperlakukan sebagai urusan kepatuhan. Mulai sekarang ia juga sinyal yang dibaca pembeli sebelum memutuskan.</blockquote>

      <h2>Kenapa ini penting di luar marketplace</h2>
      <p>Pola yang sama sudah lebih dulu berlaku di penjualan B2B, cuma tanpa aturan yang memaksanya. Tim pengadaan memeriksa calon vendor sebelum membalas penawaran, dan yang mereka cari persis dokumen jenis ini: NIB, NPWP, sertifikasi, kapasitas produksi. Bedanya, di marketplace statusnya kini ditampilkan otomatis, sementara di luar marketplace Anda sendiri yang harus menampilkannya.</p>
      <p>Kalau nomor-nomor itu hanya ada di PDF yang dikirim saat diminta, pemeriksaan berhenti sebelum Anda tahu sedang diperiksa. Menaruhnya sebagai teks di satu halaman yang bisa dibuka siapa saja menyelesaikan dua pekerjaan sekaligus: manusia bisa mengeceknya, dan mesin yang merangkum profil perusahaan Anda punya sesuatu yang bisa dikutip.</p>
      <p>Untuk pedagang lama, Desember 2027 terdengar jauh. Tapi label "Dalam Proses Legalisasi" mulai tampil jauh sebelum tenggat itu, dan label itulah yang dilihat pembeli sepanjang masa transisi.</p>
    `,
  },

  {
    slug: "gartner-proyek-agentic-ai-dibatalkan",
    title: "Gartner: Lebih dari 40% Proyek Agentic AI Batal Sebelum Akhir 2027",
    date: "9 Agustus 2026, 14:05 WIB",
    service: "ai-otomasi",
    iso: "2026-08-09T14:05:00+07:00",
    excerpt:
      "Perkiraannya diterbitkan Juni 2025, bukan kabar minggu ini. Penyebab yang disebut: biaya membengkak, nilai bisnis tidak jelas, kontrol risiko tidak memadai. Dari ribuan vendor yang mengaku agentic, Gartner memperkirakan hanya sekitar 130 yang benar-benar begitu.",
    sources: [
      {
        title: "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027",
        publisher: "Gartner",
        date: "25 Juni 2025",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
      },
      {
        title: "WhatsApp Business Platform: halaman Pricing, dirujuk sebagai pembanding klaim tarif",
        publisher: "Meta for Developers",
        date: "diperiksa 11 Agustus 2026",
        url: "https://developers.facebook.com/docs/whatsapp/pricing",
      },
    ],
    content: `
      <h2>Angkanya</h2>
      <p>Dalam rilis 25 Juni 2025, Gartner memperkirakan <a href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" rel="noopener">lebih dari 40% proyek agentic AI akan dibatalkan</a> sampai akhir 2027. Tiga sebab yang disebut: biaya yang membengkak, nilai bisnis yang tidak jelas, dan kontrol risiko yang tidak memadai.</p>
      <p>Anushree Verma, Senior Director Analyst di Gartner, menyebut sebagian besar proyek agentic AI saat ini masih berupa eksperimen tahap awal atau proof of concept yang didorong hype dan kerap salah sasaran. Efeknya, biaya dan kerumitan menjalankannya dalam skala nyata jadi tertutupi.</p>
      <p>Ada istilah yang dipakai Gartner untuk sebagian penyebabnya: <em>agent washing</em>, yaitu menjual ulang produk lama seperti asisten AI, RPA, dan chatbot dengan label agentic tanpa kemampuan agentic yang berarti. Dari ribuan vendor yang mengaku agentic, Gartner memperkirakan hanya sekitar 130 yang benar-benar begitu.</p>

      <h2>Sebagian besar yang mengaku sudah jalan, belum</h2>
      <p>Jajak pendapat Gartner pada Januari 2025 terhadap 3.412 peserta webinar memberi gambaran sebaran investasinya: 19% sudah berinvestasi signifikan, 42% konservatif, 8% belum sama sekali, dan 31% menunggu atau belum yakin.</p>
      <p>Gartner sendiri tidak menyimpulkan bahwa teknologinya gagal. Perkiraan jangka panjangnya justru naik: pada 2028, setidaknya 15% keputusan kerja harian diperkirakan diambil secara otonom lewat agentic AI, dari 0% pada 2024, dan 33% aplikasi perangkat lunak perusahaan akan memuat agentic AI, dari kurang dari 1% pada 2024.</p>
      <p>Dua hal itu tidak bertentangan. Yang dibatalkan adalah proyek yang dipasang sebagai agen padahal masalahnya tidak menuntut agen.</p>

      <blockquote>Verma menutup dengan rekomendasi yang paling jarang dikutip: kejar agentic AI hanya di tempat yang nilainya jelas, dan sadari bahwa menyambungkan agen ke sistem lama itu rumit secara teknis dan sering menuntut perombakan yang mahal.</blockquote>

      <h2>Cara memisahkan yang butuh agen dan yang tidak</h2>
      <p>Patokan yang berguna: agen dibutuhkan ketika langkah penyelesaiannya tidak bisa ditentukan di muka. Kalau alurnya bisa digambar sebagai bagan, dengan pertanyaan A dijawab jawaban A dan kondisi B memicu tindakan B, maka yang Anda butuhkan alur kerja biasa, dan alur kerja biasa jauh lebih murah, lebih cepat dibangun, serta bisa diuji dengan pasti.</p>
      <p>Sebagian besar pertanyaan yang masuk ke admin toko masuk kategori kedua: jam buka, ongkos kirim, status pesanan, ketersediaan stok, cara pembayaran. Itu pencarian data, bukan penalaran. Memasangkan model bahasa di depannya berguna untuk memahami kalimat pelanggan yang berantakan, tapi yang menjawab tetap katalog dan basis data Anda.</p>

      <h2>Yang membuat proyeknya bertahan</h2>
      <p>Dari sebab-sebab yang disebut Gartner, dua bisa ditutup sebelum menulis kode:</p>
      <ul>
        <li><strong>Nilai yang tidak jelas</strong> ditutup dengan menyepakati angka sebelum mulai. Bukan "meningkatkan efisiensi", tapi berapa persen pertanyaan masuk yang selesai tanpa admin membuka aplikasi, diukur dari data bulan sebelumnya.</li>
        <li><strong>Kontrol risiko</strong> ditutup dengan menentukan lebih dulu apa yang tidak boleh dijawab sendiri oleh sistem. Komplain, negosiasi harga, dan apa pun yang menyangkut uang pelanggan dioper ke manusia. Bukan karena modelnya tidak sanggup menyusun kalimat, tapi karena biaya salahnya ditanggung Anda.</li>
      </ul>
      <p>Sisanya, biaya yang membengkak, biasanya bukan biaya model melainkan biaya integrasi ke sistem yang sudah ada, dan itu persis yang Verma sebut sering menuntut perombakan mahal. Jadi angka itu layak diminta di awal, bukan ditemukan di tengah jalan.</p>

      <h2>Catatan soal satu angka yang tidak kami pakai</h2>
      <p>Sepanjang 2026 beredar luas kabar bahwa Meta akan menagih balasan admin WhatsApp per pesan mulai 1 Oktober 2026, dan menagih Meta Business Agent per token sejak 1 Agustus 2026. Angkanya konsisten di banyak tulisan, tapi seluruhnya blog penyedia layanan otomasi WhatsApp, pihak yang berkepentingan menjual solusinya. Saat catatan ini ditulis, <a href="https://developers.facebook.com/docs/whatsapp/pricing" rel="noopener">halaman harga resmi WhatsApp Business Platform</a> masih menyatakan pesan non-template di dalam jendela layanan gratis, dan tidak memuat satu pun dari kedua perubahan itu.</p>
      <p>Mungkin saja pengumumannya menyusul. Tapi selama sumbernya belum bisa dibuka, angkanya tidak layak dipakai untuk menyusun anggaran, dan tidak layak kami pakai untuk menjual apa pun kepada Anda.</p>
    `,
  },

  {
    slug: "komentar-hampir-sekuat-iklan-media-sosial",
    title: "Komentar Orang Lain Hampir Sekuat Iklan Anda Sendiri",
    date: "8 Agustus 2026, 09:30 WIB",
    service: "media-sosial",
    iso: "2026-08-08T09:30:00+07:00",
    excerpt:
      "Iklan berbayar dan komentar orang lain hampir sama besar sebagai pintu masuk merek baru di Indonesia. Bedanya cuma satu: yang kedua tidak bisa dibeli.",
    content: `
      <h2>Angka yang jarang disandingkan</h2>
      <p>Laporan <a href="https://wearesocial.com/id/blog/2025/11/digital-2026-top-digital-and-social-media-trends-in-indonesia/" rel="noopener">Digital 2026: Indonesia dari We Are Social dan Meltwater</a> memuat daftar kanal yang dipakai orang untuk menemukan merek baru. Tiga teratas:</p>
      <ul>
        <li>Mesin pencari: <strong>38,3%</strong></li>
        <li>Iklan di media sosial: <strong>37,3%</strong></li>
        <li>Komentar di media sosial: <strong>32,6%</strong></li>
      </ul>
      <p>Yang menarik bukan urutannya, tapi jaraknya. Selisih antara iklan berbayar dan komentar orang lain cuma 4,7 poin. Satu kanal Anda beli dengan anggaran bulanan, satunya lagi tidak bisa dibeli sama sekali, dan keduanya nyaris sama besar sebagai pintu masuk.</p>
      <p>Laporan yang sama juga menyebut tiga dari lima orang Indonesia memakai media sosial sebagai kanal utama untuk meneliti merek secara online. Jadi kolom komentar bukan tempat orang basa-basi. Itu tempat orang memutuskan.</p>

      <blockquote>Anggaran iklan bisa dinyalakan besok pagi. Kolom komentar yang berisi butuh berbulan-bulan, dan tidak ada tombolnya.</blockquote>

      <h2>Anda tidak bisa hadir di semua tempat</h2>
      <p>Laporan itu mencatat orang Indonesia menghabiskan 21 jam 50 menit per minggu di media sosial termasuk menonton video online, atau lebih dari tiga jam sehari. Tapi waktu itu tersebar ke rata-rata <strong>7,7 platform</strong> tiap bulan.</p>
      <p>Angka 7,7 itu yang biasanya diabaikan saat menyusun rencana konten. Menargetkan semuanya berarti hadir setengah hati di tujuh tempat, dan setengah hati di media sosial terlihat jelas. Lebih masuk akal memilih dua atau tiga tempat di mana pembeli Anda memang berhenti lama, lalu benar-benar mengisinya.</p>
      <p>Untuk memilihnya, dua angka dari laporan yang sama berguna. Dari sisi waktu harian, TikTok memimpin dengan 1 jam 53 menit, disusul WhatsApp 1 jam 52 menit. Dari sisi jangkauan, WhatsApp dipakai sembilan dari sepuluh orang Indonesia tiap bulan. Dan dari sisi lama satu kunjungan, YouTube paling lama dengan rata-rata 16 menit 49 detik per sesi, diikuti SnackVideo 15 menit 4 detik.</p>
      <p>Tiga angka itu menjawab tiga pertanyaan berbeda: di mana orang menghabiskan waktu, di mana orang bisa dijangkau, dan di mana orang mau menonton lama. Platform yang menang di satu kolom belum tentu menang di kolom lain.</p>

      <h2>Soal "180 juta pengguna"</h2>
      <p>Angka yang paling sering dikutip dari laporan ini adalah 180 juta pengguna media sosial di Indonesia, setara 62,9% populasi, naik 26% dibanding tahun sebelumnya.</p>
      <p>Perlu dibaca hati-hati. Laporannya menyebut <em>identitas pengguna</em>, bukan orang. Satu orang bisa punya beberapa akun di beberapa platform, dan lonjakan 26% dalam setahun jauh lebih mungkin mencerminkan cara menghitung ketimbang pertambahan manusia sebanyak itu. Angkanya tetap berguna sebagai gambaran skala, tapi bukan jumlah calon pembeli.</p>

      <h2>Kenapa target yang dipatok dari patokan industri sering meleset</h2>
      <p>Satu peringatan praktis sebelum Anda menyepakati target dengan siapa pun. Angka patokan engagement rate yang beredar berbeda-beda drastis tergantung siapa yang mengukur dan bagaimana rumusnya. Sebagian membagi dengan jumlah pengikut, sebagian dengan jangkauan, sebagian dengan tayangan. Hasilnya bisa berbeda beberapa kali lipat untuk akun yang sama persis.</p>
      <p>Maka patokan yang kami pakai bukan angka industri, melainkan angka Anda sendiri tiga bulan terakhir, dihitung dengan satu rumus yang tidak berubah. Itu satu-satunya perbandingan yang benar-benar setara, dan satu-satunya yang bisa membuktikan pekerjaannya berhasil atau tidak.</p>
    `,
    sources: [
      {
        title: "Digital 2026: Top digital and social media trends in Indonesia",
        publisher: "We Are Social & Meltwater",
        date: "11 November 2025",
        url: "https://wearesocial.com/id/blog/2025/11/digital-2026-top-digital-and-social-media-trends-in-indonesia/",
      },
      {
        title: "Digital 2026: Indonesia reveals social media user identities increased 26% to 180 million",
        publisher: "Campaign Brief Asia",
        date: "6 November 2025",
        url: "https://campaignbriefasia.com/2025/11/06/digital-2026-indonesia-reveals-social-media-user-identities-increased-26-to-180-million/",
      },
    ],
  },
];
