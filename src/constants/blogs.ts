// Kategori artikel = layanan, satu lawan satu. Kuncinya sengaja memakai slug
// di services.ts supaya hubungannya eksplisit: tiap artikel punya layanan yang
// menjawabnya, dan chip kategori berfungsi sebagai perutean, bukan label hiasan.
// Jangan tambah kunci baru tanpa menambah layanannya — kategori tanpa layanan
// di belakangnya membuat pembaca yang selesai membaca tidak punya tujuan.
// Catatan: `astro check` tidak dipasang di proyek ini, jadi kunci yang salah
// tidak menggagalkan build — chip-nya cuma jadi kosong. Editor tetap menangkapnya.
export const CATEGORY = {
  ecommerce: "E-Commerce",
  "company-profile": "Corporate Profile",
  "social-media": "Social Media",
  "ai-automation": "AI & Otomasi",
} as const;

export const BLOGS = [
  {
    slug: "potongan-naik-pajak-dipungut-2026",
    title: "Potongan Naik, Pajak Dipungut di Muka: Hitung Ulang Letak Pesanan Ulang Anda",
    date: "06 Agustus 2026, 09:10 WIB",
    category: CATEGORY["ecommerce"],
    excerpt: "Mei 2026 menambah potongan di tiga tempat sekaligus, dan sejak 1 Agustus empat marketplace memungut PPh 0,5% tiap transaksi. Angkanya cukup untuk mengubah keputusan, bukan cuma bikin kesal.",
    content: `
      <h2>Tiga potongan datang dalam satu bulan</h2>
      <p>Pada 2 Mei 2026, biaya layanan program Gratis Ongkir XTRA di Shopee untuk sebagian kategori fashion naik dari 5,5% menjadi 7,5% per transaksi, sementara kategori standarnya naik dari 1,5% ke 2%. Sejak 1 Mei, Tokopedia dan TikTok Shop menambahkan biaya logistik per pesanan, sekitar Rp5.000 di TikTok Shop dan di atas Rp10.000 di Tokopedia sebelum pajak. Pada 18 Mei, batas komisi Tokopedia naik dari Rp40.000 menjadi Rp650.000 per item, hampir 15 kali lipat.</p>
      <p>Kenaikan terakhir itu nyaris tidak terasa bagi penjual barang murah, dan terasa sangat berbeda bagi penjual barang mahal. Kalau harga jual Anda di atas dua juta, plafon yang dulu melindungi margin sudah tidak ada lagi.</p>

      <h2>Satu produk, dihitung apa adanya</h2>
      <p>Ambil produk fashion Rp150.000 dengan HPP Rp80.000 yang mengikuti program Gratis Ongkir XTRA:</p>
      <ul>
        <li>Biaya program 7,5% dari harga jual, Rp11.250</li>
        <li>Biaya logistik per pesanan, Rp5.000</li>
        <li>Estimasi biaya iklan yang menempel pada pesanan itu, Rp8.000</li>
      </ul>
      <p>Sisa marginnya Rp45.750, atau 30,5% dari harga jual. Potongan platformnya sendiri Rp24.250, sekitar 16% dari harga jual. Bukan 30% seperti yang sering disebut orang, tapi cukup besar untuk menentukan apakah Anda masih sanggup ikut perang diskon berikutnya.</p>

      <h2>Yang berubah pada 1 Agustus 2026</h2>
      <p>PMK 37/2025 menunjuk pihak lain sebagai pemungut PPh atas penghasilan pedagang dalam negeri lewat sistem elektronik. DJP kemudian menetapkan empat pemungut pertama, yaitu Tokopedia, Shopee, Lazada, dan Blibli, yang mulai memungut PPh Pasal 22 final 0,5% pada 1 Agustus 2026. Dasarnya nilai transaksi bruto tanpa PPN, dan pemungutannya terjadi setiap transaksi, bukan saat dana ditarik ke rekening. Pedagang dengan omzet setahun belum melampaui Rp500 juta dikecualikan, dengan syarat surat pernyataannya sudah disampaikan ke marketplace.</p>
      <p>Perlu jujur soal ini: kalau pajaknya memang Anda setor, ini bukan beban baru, hanya berpindah waktu penyetorannya. Yang benar-benar berubah adalah arus kas. Uang yang dulu masuk penuh lalu disetor kemudian sekarang terpotong sejak transaksi pertama, dan bagi bisnis yang perputaran stoknya cepat, selisih waktu itu terasa di modal belanja.</p>

      <h2>Pertanyaan yang lebih berguna daripada "pindah atau tidak"</h2>
      <p>Meninggalkan marketplace hampir selalu keputusan buruk. Di sana ada pembeli yang tidak akan pernah mengetik nama toko Anda di browser, dan biaya menemukan mereka lewat jalur lain umumnya lebih mahal daripada komisi yang Anda keluhkan.</p>
      <p>Pertanyaan yang lebih layak dihitung: berapa persen pesanan bulan lalu datang dari orang yang sudah pernah belanja di Anda? Angka itu ada di laporan penjualan Anda sendiri, tinggal dihitung dari nomor telepon atau nama penerima yang berulang. Untuk porsi itulah tarif akuisisi tidak masuk akal dibayar untuk kedua kalinya.</p>

      <blockquote>
        "Marketplace mahal untuk pembeli lama dan murah untuk pembeli baru. Yang perlu Anda putuskan bukan mana yang menang, tapi pesanan yang mana lewat mana."
      </blockquote>

      <h2>Kanal sendiri juga punya biaya, sebut saja</h2>
      <p>Toko sendiri bukan gratis. Ada server, domain, dan payment gateway yang memungut per transaksi. Ada juga biaya yang jarang ditulis di penawaran, yaitu mendatangkan orangnya. Kalau Anda memindahkan pembeli baru ke toko sendiri tanpa memasok trafik, hasilnya halaman sepi dengan tagihan bulanan. Karena itu urutan yang biasanya masuk akal adalah membuka kanal sendiri untuk pesanan ulang lebih dulu, lalu menambah akuisisi setelah kanal itu terbukti dipakai.</p>

      <h2>Cara termurah mengujinya</h2>
      <p>Tidak perlu toko lengkap untuk menguji asumsi ini. Satu halaman produk dengan checkout yang jalan, satu nomor WhatsApp yang menjawab cepat, dan satu penawaran yang hanya ada di kanal Anda sendiri sudah cukup untuk melihat apakah pembeli lama mau pindah. Kalau ternyata tidak mau, yang hilang cuma biaya satu halaman. Kalau mau, Anda punya angka nyata untuk memutuskan seberapa besar yang layak dibangun berikutnya.</p>
    `
  },
  {
    slug: "pencarian-tanpa-klik-2026",
    title: "68% Pencarian Berakhir Tanpa Klik. Yang Dikutip Mesin yang Dibaca Orang.",
    date: "05 Agustus 2026, 11:40 WIB",
    category: CATEGORY["company-profile"],
    excerpt: "Situs Anda tidak jadi tidak penting. Pekerjaannya bergeser dari tempat orang mendarat menjadi bahan yang dikutip mesin, dan dua pekerjaan itu butuh halaman yang berbeda.",
    content: `
      <h2>Angkanya</h2>
      <p>Analisis SparkToro atas panel Similarweb untuk pencarian Google di Amerika Serikat periode Januari sampai April 2026 mencatat 68,01% pencarian berakhir tanpa satu pun klik. Dua tahun sebelumnya 60,45%. Pada kueri yang memunculkan AI Overviews, rasio klik ke situs turun hampir 60%.</p>
      <p>Data itu bukan data Indonesia dan sebaiknya tidak dipakai seolah-olah begitu. Yang bisa Anda periksa sendiri lebih meyakinkan: buka laporan pencarian situs Anda dua tahun terakhir, lalu bandingkan jumlah tayangan dengan jumlah klik. Pola yang paling sering muncul adalah tayangan naik sementara klik jalan di tempat.</p>

      <h2>Kenapa ini bukan berarti situs tidak berguna</h2>
      <p>Model jawaban tidak menyimpan profil bisnis Anda di kepalanya. Ia mengambil dari halaman yang bisa ia baca, merangkumnya, lalu menyebut sebagian sumbernya. Kalau halaman paling jelas tentang perusahaan Anda adalah lapak marketplace, direktori vendor, atau unggahan orang lain, itu yang jadi bahan. Situs Anda tetap penting, hanya pekerjaannya berubah: dulu tempat orang mendarat, sekarang juga bahan mentah untuk ringkasan yang dibaca orang sebelum memutuskan mendarat.</p>
      <p>Semrush melaporkan kunjungan yang datang dari jawaban AI beberapa kali lebih mungkin berujung transaksi dibanding rata-rata kunjungan organik. Itu wajar. Orang yang mengklik setelah membaca ringkasan sudah selesai membanding-bandingkan.</p>

      <h2>Apa yang membuat satu halaman mudah dikutip</h2>
      <ul>
        <li>Jawabannya ada di kalimat pertama, bukan setelah tiga paragraf pemanasan.</li>
        <li>Satu klaim per paragraf, dengan angka dan tanggal yang bisa dipisahkan dari kalimatnya tanpa kehilangan arti.</li>
        <li>Fakta perusahaan ditulis sebagai teks, bukan hanya tergambar di banner atau terkubur di dalam PDF.</li>
        <li>Tanya jawab disusun satu pertanyaan satu jawaban, format yang paling sering diambil utuh.</li>
        <li>Penanda terstruktur JSON-LD yang menyebut entitasnya eksplisit: nama badan hukum, layanan, kontak, dan pertanyaan umum.</li>
      </ul>
      <p>Halaman yang sedang Anda baca dibangun begitu. Buka source beranda kami dan cari blok application/ld+json kalau ingin melihat bentuknya.</p>

      <h2>Yang tidak menolong</h2>
      <p>Menumpuk kata kunci tidak menolong, karena yang dicari mesin adalah pernyataan yang bisa dipertanggungjawabkan, bukan kepadatan istilah. Artikel dua ribu kata tanpa satu pun fakta baru juga tidak, dan sejak 2026 malah merugikan karena teks semacam itu sudah dikenali pembaca sebagai isi yang diproduksi massal. Tulisan yang layak dikutip biasanya pendek dan punya angka.</p>

      <h2>Cara mengukur posisi Anda hari ini</h2>
      <p>Ajukan ke dua atau tiga asisten AI pertanyaan yang biasa diajukan calon pembeli Anda, misalnya vendor untuk kebutuhan tertentu di kota Anda. Catat siapa saja yang disebut. Ulangi sebulan kemudian. Selain itu, periksa laporan trafik Anda untuk rujukan dari domain asisten AI. Jumlahnya biasanya kecil, tapi perilaku pengunjungnya berbeda. Dua pengukuran sederhana itu cukup untuk tahu apakah pembenahan struktur di situs Anda membuahkan hasil.</p>

      <h2>Urutan yang masuk akal</h2>
      <p>Perbaiki dulu halaman yang menjawab pertanyaan paling mahal dari calon pembeli: apa yang Anda jual, untuk siapa, berapa lama pengerjaannya, dan bukti apa yang bisa mereka periksa sendiri. Artikel menyusul setelah itu. Menerbitkan tulisan setiap minggu sementara halaman layanan Anda masih menyiratkan tanpa menyatakan adalah urutan yang terbalik.</p>
    `
  },
  {
    slug: "pembeli-anda-mungkin-program-2027",
    title: "Di 2027 Pembeli Anda Mungkin Sebuah Program",
    date: "04 Agustus 2026, 08:25 WIB",
    category: CATEGORY["ecommerce"],
    excerpt: "Tiga standar checkout untuk agen AI muncul sepanjang 2026 dan belum ada yang menang. Ada pekerjaan yang tetap berguna apa pun hasilnya, dan ada yang sebaiknya ditunda dulu.",
    content: `
      <h2>Apa yang sebenarnya terjadi</h2>
      <p>OpenAI bersama Stripe memperkenalkan Agentic Commerce Protocol, standar terbuka untuk percakapan antara agen dan penjual soal pilihan produk, harga, dan pembayaran, dengan checkout yang selesai di dalam ChatGPT. Pada Januari 2026 di konferensi NRF, Google bersama Shopify mengumumkan Universal Commerce Protocol. Meta memperkenalkan Business Agent secara global pada 3 Juni 2026, membuka platformnya untuk mitra pada 1 Juli 2026, dan menagihnya per token sejak 1 Agustus 2026. Agen itu bisa menjawab pertanyaan, menyarankan produk dari katalog, mengatur jadwal, dan menutup transaksi di dalam percakapan WhatsApp, Instagram, atau Messenger.</p>
      <p>Tiga jalur, tiga pemilik, belum ada yang jadi standar tunggal. Posisinya mirip masa ketika pembayaran online belum punya satu cara baku.</p>

      <h2>Yang berubah kalau pembelinya sebuah program</h2>
      <p>Agen tidak terbujuk foto produk yang bagus dan tidak membaca kalimat pemasaran. Ia membandingkan yang bisa ia baca: nama barang, varian, harga, stok, biaya kirim, estimasi tiba, syarat pengembalian. Toko yang datanya lengkap dan konsisten akan sering muncul di perbandingan itu. Toko yang harga aslinya hanya ada di gambar, dan stoknya baru diketahui setelah bertanya di chat, tidak ikut dibandingkan sama sekali.</p>
      <p>Ini kebalikan dari keahlian yang sepuluh tahun terakhir dilatih penjual online, yaitu meyakinkan manusia. Keahlian itu tetap perlu untuk manusia. Bedanya sekarang ada satu lapis pembaca lain yang lebih rewel dan tidak bisa dibujuk.</p>

      <h2>Pekerjaan yang tetap berguna apa pun standarnya</h2>
      <ul>
        <li>Data produk yang benar di satu tempat: harga, varian, berat, stok, dan aturan ongkir. Satu sumber, bukan tiga versi di tiga platform.</li>
        <li>Katalog yang bisa dibaca program lewat feed atau endpoint, bukan cuma tampil rapi di halaman.</li>
        <li>Checkout yang bisa dipanggil dari luar dan mengembalikan status pesanan yang jelas.</li>
        <li>Fakta perusahaan yang eksplisit di situs Anda sendiri, karena agen tetap perlu memastikan penjualnya benar-benar ada.</li>
      </ul>
      <p>Empat hal itu sudah membayar dirinya sendiri hari ini, sebelum ada urusan agen. Yang pertama mengurangi salah kirim, yang kedua memperbaiki posisi Anda di pencarian, yang ketiga membuka jalan otomasi pesanan, yang keempat dipakai buyer B2B untuk memverifikasi Anda.</p>

      <h2>Yang sebaiknya ditunda</h2>
      <p>Integrasi penuh ke satu protokol tertentu sebaiknya ditunda sampai jelas mana yang dipakai pembeli Anda. Membangun dua kali karena standarnya berganti adalah biaya yang bisa dihindari hanya dengan menunggu beberapa bulan. Begitu juga membeli perangkat yang menjanjikan kesiapan agen tanpa mau memperlihatkan bagaimana data Anda dibaca.</p>

      <h2>Cara mengecek kesiapan Anda dalam sepuluh menit</h2>
      <p>Ambil satu produk andalan. Jawab dari data yang ada di sistem Anda, tanpa membuka chat dan tanpa menebak: harga hari ini, stok tersisa, berat kirim, biaya kirim ke tiga kota, dan estimasi tiba. Kalau ada satu saja yang harus ditanyakan ke orang, di situlah agen berhenti membandingkan Anda. Perbaikan pertamanya bukan soal AI, hanya pembenahan data yang selama ini ditunda.</p>
    `
  },
  {
    slug: "whatsapp-balasan-cs-berbayar-oktober-2026",
    title: "1 Oktober 2026: Balasan Admin di WhatsApp Mulai Ditagih Per Pesan",
    date: "03 Agustus 2026, 15:05 WIB",
    category: CATEGORY["ai-automation"],
    excerpt: "Meta mengumumkan pesan layanan tidak lagi gratis. Yang berubah bukan cuma tagihan, tapi cara menghitung apakah tim CS Anda sudah efisien.",
    content: `
      <h2>Apa yang diumumkan</h2>
      <p>Pada 1 Juli 2026 Meta menyatakan bahwa mulai 1 Oktober 2026 pesan layanan ditagih per pesan, dengan tarif yang sama seperti kategori utility dan authentication di masing-masing pasar. Pesan layanan adalah balasan yang dikirim admin Anda di dalam jendela 24 jam setelah pelanggan menghubungi, yang selama ini tidak dikenai biaya. Tidak ada potongan volume: tarif per pesannya tetap, sebanyak apa pun yang Anda kirim dalam sebulan. Jendela 72 jam untuk percakapan yang dimulai dari iklan Click to WhatsApp tidak berubah.</p>
      <p>Tarif resmi yang berlaku Oktober belum diterbitkan. Meta menjanjikan pengumumannya paling lambat 1 September 2026. Sementara itu, tarif utility untuk nomor Indonesia yang dipublikasikan penyedia layanan berada di kisaran Rp350 sampai Rp450 per pesan, dan itu angka yang wajar dipakai untuk ancar-ancar.</p>

      <h2>Hitung dengan angka bisnis Anda</h2>
      <p>Anggap 3.000 percakapan masuk sebulan, dan rata-rata admin mengirim enam balasan per percakapan. Pada Rp400 per pesan, itu 18.000 pesan atau Rp7,2 juta sebulan. Kalau rata-ratanya bisa ditekan ke dua balasan, angkanya jadi Rp2,4 juta. Selisih Rp4,8 juta itu tidak datang dari mengurangi jumlah pelanggan yang dilayani, hanya dari menjawab lebih tuntas di kesempatan pertama.</p>
      <p>Perhatikan apa yang berubah pada cara mengukurnya. Yang mahal bukan lagi jumlah admin, tapi jumlah pesan. Kebiasaan membalas sepotong-sepotong, yang dulu terlihat responsif, sekarang muncul di tagihan.</p>

      <h2>Empat hal yang menurunkan jumlah pesan</h2>
      <ul>
        <li>Jawaban standar yang lengkap sekali kirim: harga, stok, ongkir, dan estimasi tiba dalam satu pesan, bukan empat.</li>
        <li>Hal yang bisa dicek sendiri dipindahkan ke halaman: status pesanan, katalog, dan aturan pengembalian dengan tautan permanen.</li>
        <li>Balasan pertama otomatis yang benar-benar menjawab, bukan menyapa. Sapaan tanpa informasi sekarang ada tarifnya.</li>
        <li>Serah terima ke admin yang sekali jalan, supaya percakapan tidak berputar antara bot dan manusia.</li>
      </ul>

      <h2>Otomasi berhenti jadi soal gaji admin</h2>
      <p>Sebelum ini, alasan memasang asisten otomatis biasanya menghemat biaya orang. Alasan itu masih ada, tapi bukan lagi yang paling kuat. Yang lebih menentukan sejak Oktober: setiap percakapan punya biaya variabel, dan sistem yang menuntaskan urusan dalam dua pesan lebih murah daripada yang menuntaskannya dalam sepuluh, terlepas dari siapa yang mengetik.</p>
      <p>Perlu dicatat juga bahwa asisten milik platform tidak gratis. Meta Business Agent ditagih per token sejak 1 Agustus 2026, jadi memakai agen bawaan bukan otomatis lebih murah daripada memasang asisten sendiri yang jawabannya lebih pendek dan lebih tepat.</p>

      <h2>Yang layak dikerjakan sebelum September</h2>
      <p>Ambil seratus percakapan terakhir Anda, lalu hitung dua hal: rata-rata pesan per percakapan, dan lima pertanyaan yang paling sering muncul. Dua angka itu menentukan tagihan Anda di Oktober, sekaligus memberi daftar pekerjaan yang paling cepat membayar dirinya sendiri. Pengukurannya bisa Anda kerjakan sendiri minggu ini tanpa membeli apa pun.</p>
    `
  },
  {
    slug: "mengapa-toko-online-bangkrut",
    title: "Yang Menutup Toko Online Bukan Produknya, Tapi Aturan yang Berubah",
    date: "13 Juni 2026, 10:36 WIB",
    category: CATEGORY["ecommerce"],
    excerpt: "Permendag 19/2026 berlaku 8 Juni: pedagang tanpa NIB wajib dihentikan transaksinya setelah tenggat. Risiko terbesar toko online sekarang datang dari perubahan aturan, bukan dari sepinya pembeli.",
    content: `
      <h2>Aturan yang berlaku 8 Juni 2026</h2>
      <p>Peraturan Menteri Perdagangan Nomor 19 Tahun 2026 tentang Penyelenggaraan Perdagangan melalui Sistem Elektronik mulai berlaku 8 Juni 2026. Isinya: setiap pelaku usaha yang berjualan lewat sistem elektronik wajib punya izin berusaha yang dibuktikan dengan NIB.</p>
      <p>Tenggatnya dibedakan. Pedagang baru diberi waktu 6 bulan dihitung dari tanggal pendaftaran akun. Kalau setelah 6 bulan NIB belum ada, marketplace wajib menghentikan transaksi akun tersebut. Pedagang yang sudah lebih dulu berjualan diberi 18 bulan, dihitung dari 8 Juni 2026. Selama masa itu marketplace boleh tetap menerima pedagang yang izinnya belum selesai, dengan label status Dalam Proses Legalisasi.</p>
      <p>Ini bukan kabar buruk yang setara dengan bencana. NIB diurus lewat OSS, tidak berbiaya, dan bagi usaha kecil biasanya selesai dalam sehari. Yang berisiko adalah menundanya sampai mendekati tenggat, karena konsekuensinya bukan teguran bertahap melainkan penghentian transaksi.</p>

      <h2>Kenapa akun yang berhenti lebih mahal daripada kelihatannya</h2>
      <p>Yang berhenti bukan cuma penjualan hari itu. Dana penjualan yang belum ditarik ikut tertahan, dan proses banding tidak punya tenggat yang pasti dari sisi pedagang. Bagi bisnis yang perputaran stoknya dibiayai dari pemasukan minggu lalu, jeda semacam itu berarti pembelian bahan berikutnya tidak jalan.</p>
      <p>Penyebab pembatasan akun yang paling sering dilaporkan penyedia layanan e-commerce: unggahan produk berulang yang dianggap spam, penyalahgunaan voucher dan program gratis ongkir, mengarahkan transaksi ke luar platform, penjualan produk yang dilarang, dan aktivitas toko yang dinilai mencurigakan.</p>
      <p>Perhatikan yang ketiga, karena ini yang paling sering ditabrak tanpa sadar. Mengarahkan pembeli keluar platform termasuk pelanggaran. Artinya cara paling umum memindahkan pelanggan ke kanal sendiri, yaitu menitipkan nomor WhatsApp di dalam percakapan marketplace, justru menaruh akun Anda pada risiko yang sedang Anda coba hindari.</p>

      <h2>Cara memindahkan pelanggan tanpa melanggar</h2>
      <p>Yang aman terjadi di luar percakapan platform, setelah transaksi selesai:</p>
      <ul>
        <li>Kartu di dalam paket yang mengarah ke halaman garansi atau panduan pakai, bukan ke katalog</li>
        <li>Garansi atau kartu servis yang perlu registrasi di situs Anda</li>
        <li>Nomor layanan purna jual yang tercetak di kemasan</li>
        <li>Program pembelian ulang yang hanya berlaku di kanal Anda, diumumkan lewat email atau paket, bukan lewat chat marketplace</li>
      </ul>
      <p>Empat cara itu memindahkan hubungan tanpa memindahkan transaksi yang sedang berjalan di platform.</p>

      <h2>Yang berubah di sisi biaya</h2>
      <p>Kenaikan biaya program dan logistik yang datang sepanjang Mei 2026 sudah dibahas terpisah di <a href="/blog/potongan-naik-pajak-dipungut-2026">tulisan soal potongan dan PPh yang dipungut di muka</a>, termasuk simulasi satu produk. Ditambah PMK 37/2025 yang menugaskan marketplace memungut PPh final 0,5% dengan pemungutan dijadwalkan mulai 1 Agustus 2026, dua hal terjadi bersamaan: marginnya menipis dan syarat berjualannya bertambah.</p>

      <h2>Urutan yang masuk akal</h2>
      <p>Urus NIB sekarang, bukan di bulan ketujuh belas. Setelah itu baru pikirkan kanal sendiri, dan pikirkan sebagai tempat pesanan ulang mendarat, bukan sebagai pengganti marketplace. Marketplace tetap tempat termurah untuk ditemukan pembeli baru; yang tidak masuk akal adalah membayar tarif akuisisi berulang kali untuk orang yang sudah tahu nama Anda.</p>
    `
  },
  {
    slug: "website-perusahaan-murahan",
    title: "Buyer B2B Cuma Memakai 17% Waktunya untuk Bertemu Vendor",
    date: "11 Juni 2026, 14:20 WIB",
    category: CATEGORY["company-profile"],
    excerpt: "Menurut Gartner, hanya 17% dari total waktu pembelian B2B dipakai untuk bertemu calon pemasok. Yang menentukan Anda lolos kurasi terjadi di sisa waktunya, saat tidak ada orang Anda di ruangan.",
    content: `
      <h2>Angkanya</h2>
      <p>Gartner mencatat pembeli B2B hanya memakai 17% dari total waktu perjalanan pembeliannya untuk bertemu calon pemasok, dan 27% dipakai untuk meneliti sendiri secara daring. Sisanya habis di rapat internal, penyusunan syarat, dan pembandingan dokumen.</p>
      <p>Arahnya juga terukur. Pada survei yang dirilis Juni 2025, 61% pembeli B2B menyatakan lebih suka pengalaman pembelian tanpa perantara penjual. Pada rilis Maret 2026, angkanya 67%. Naik enam poin dalam sembilan bulan.</p>
      <p>Satu temuan Gartner yang dirilis Mei 2026 melengkapi gambarannya: 69% pembeli B2B mendatangi tenaga penjual untuk memverifikasi wawasan yang dihasilkan AI. Jadi bukan orang penjualan yang tidak diperlukan lagi. Perannya bergeser, dari sumber informasi pertama menjadi pemeriksa informasi yang sudah pembeli kumpulkan sendiri, termasuk yang dikumpulkan dari ringkasan mesin.</p>
      <p>Konsekuensinya konkret. Kalau ringkasan itu keliru atau kosong soal perusahaan Anda, pertemuan pertama habis untuk membantah dan menjelaskan hal dasar, bukan untuk membicarakan pekerjaan. Data Gartner ini global dan lintas industri, bukan data Indonesia, dan pengadaan di sini menambah satu lapis lagi berupa pemeriksaan dokumen.</p>

      <h2>Yang diperiksa saat Anda tidak bisa menemani</h2>
      <p>Untuk pengadaan di Indonesia, daftarnya cukup seragam: nama badan hukum, NIB, NPWP, sertifikasi yang relevan dengan barang atau jasanya, kapasitas produksi atau kapasitas tim, dan bukti pekerjaan sejenis pada skala yang setara.</p>
      <p>Sejak 8 Juni 2026, Permendag 19/2026 membuat status legalitas pedagang jadi penanda yang terlihat publik di marketplace, lewat label Dalam Proses Legalisasi bagi yang izinnya belum selesai. Kalau di lapak pihak ketiga saja legalitas sekarang terpampang, ketiadaannya di halaman perusahaan sendiri jadi lebih mencolok, bukan lebih tersembunyi.</p>

      <h2>Yang menggagalkan kurasi biasanya bukan desainnya</h2>
      <p>Tampilan memang memengaruhi kesan, tapi yang membuat berkas berhenti di tahap kurasi umumnya informasi yang tidak ada, bukan huruf yang jelek. Halaman sederhana yang menyebut nama badan hukum, nomor izin, dan tiga pekerjaan sejenis akan lolos. Halaman yang megah tapi hanya memuat kata-kata soal komitmen dan sinergi tidak, karena tidak ada yang bisa diverifikasi dari situ.</p>
      <p>Beberapa hal yang berulang kali jadi penyebab kegagalan sederhana:</p>
      <ul>
        <li>Nama merek dipakai di mana-mana, nama badan hukum tidak pernah muncul, sementara dokumen penawaran memakai nama PT</li>
        <li>Nomor izin ditaruh sebagai foto sertifikat, jadi tidak bisa disalin, dicari, atau dibaca mesin</li>
        <li>Portofolio menyebut nama klien tapi tidak menyebut lingkup dan skalanya, sehingga tidak bisa dibandingkan dengan kebutuhan pembeli</li>
        <li>Alamat yang tidak cocok antara situs, akun media sosial, dan dokumen</li>
      </ul>

      <h2>Yang berubah karena mesin ikut membaca</h2>
      <p>Sebagian pemeriksaan sekarang lewat asisten AI yang merangkum apa saja yang bisa ia baca tentang Anda. Pembahasan lengkapnya ada di <a href="/blog/pencarian-tanpa-klik-2026">tulisan soal pencarian yang berakhir tanpa klik</a>. Intinya sama dengan bagian di atas: fakta yang ditulis sebagai teks bisa dikutip, fakta yang tergambar di banner tidak.</p>
    `
  },
  {
    slug: "rahasia-sosmed-ratusan-juta",
    title: "Engagement Instagram Rata-rata 0,48% dan Turun 24% Setahun",
    date: "09 Juni 2026, 09:15 WIB",
    category: CATEGORY["social-media"],
    excerpt: "Socialinsider menganalisis 35 juta unggahan dari 447.613 halaman. Kalau target akun Anda masih ditetapkan dengan asumsi beberapa tahun lalu, laporan bulanannya akan selalu terlihat gagal.",
    content: `
      <h2>Angkanya, dan dari mana asalnya</h2>
      <p>Socialinsider menganalisis 35 juta unggahan Instagram dari 447.613 halaman aktif sepanjang Januari sampai Desember 2025. Hasilnya: rata-rata engagement rate 0,48%, turun 24% dibanding periode sebelumnya. Per format, karusel 0,55%, Reels 0,52%, dan gambar tunggal 0,37%.</p>
      <p>Cara hitungnya perlu disebut supaya angkanya bisa dibandingkan dengan laporan Anda sendiri: jumlah like dan komentar pada unggahan dalam satu periode, dibagi jumlah follower, dikali 100. Kalau alat yang Anda pakai menghitung berdasarkan jangkauan alih-alih jumlah follower, angkanya tidak sebanding.</p>
      <p>Dua catatan yang jujur soal data ini. Pertama, studinya diberi label 2026 tapi isinya nilai 2025; penerbitnya menyatakan sendiri datanya belum cukup saat tahun baru berjalan. Jadi ini patokan tahun lalu. Kedua, angka penurunan jangkauan organik yang banyak beredar, dari 9% ke sekitar 6%, tidak kami pakai di sini karena tidak menemukan metodologi yang bisa diperiksa di baliknya.</p>

      <h2>Apa artinya untuk target akun Anda</h2>
      <p>Pada akun 5.000 follower, engagement 0,48% berarti sekitar 24 interaksi per unggahan. Itu angka wajar untuk patokan sekarang, bukan tanda ada yang rusak. Banyak target internal masih ditetapkan dengan asumsi era ketika angkanya beberapa kali lebih tinggi, dan akibatnya tim mengejar sesuatu yang tidak lagi ada, lalu menyimpulkan kontennya jelek.</p>
      <p>Yang lebih berguna dipantau adalah arahnya dari bulan ke bulan pada akun Anda sendiri, dan perbandingan antar format. Karusel bertahan paling baik dari tahun ke tahun; gambar tunggal paling lemah.</p>

      <h2>Yang masih bekerja, dengan alasannya</h2>
      <ul>
        <li>Karusel, karena angkanya memang yang paling tahan pada data di atas</li>
        <li>Konten yang menjawab satu pertanyaan spesifik, karena bisa ditemukan lagi berbulan-bulan kemudian, bukan cuma dilihat sekali saat tayang</li>
        <li>Jadwal yang konsisten, bukan karena algoritma menyukai keteraturan, tapi karena jumlah percobaan yang menentukan peluang ada satu yang tembus</li>
        <li>Nama merek dan produk disebut jelas di caption dan transkrip, karena teks itulah yang bisa dibaca mesin ketika seseorang menanyakan kategori Anda ke asisten AI</li>
      </ul>

      <h2>Ukur yang berujung uang</h2>
      <p>Engagement berguna sebagai pembanding, bukan sebagai tujuan. Yang layak masuk laporan bulanan adalah jumlah percakapan masuk, jumlah orang yang menanyakan harga, dan jumlah yang berlanjut ke pesanan. Akun dengan interaksi sedang tapi rutin menghasilkan pertanyaan harga lebih berharga daripada akun dengan banyak suka yang tidak pernah menghasilkan percakapan.</p>
      <p>Kanal ini juga yang memasok pengunjung ke toko dan profil milik Anda sendiri. Kenapa itu penting sejak potongan platform naik, dibahas di <a href="/blog/potongan-naik-pajak-dipungut-2026">tulisan soal potongan dan pajak yang dipungut di muka</a>.</p>
    `
  },
  {
    slug: "ai-mengambil-alih-efisiensi",
    title: "Klarna Memangkas Setara 700 Agen CS karena AI, Lalu Menarik Manusianya Kembali",
    date: "06 Juni 2026, 16:45 WIB",
    category: CATEGORY["ai-automation"],
    excerpt: "Deflection 85% bisa berarti resolution 60%, artinya 25 orang menyerah tanpa masalahnya selesai. Angka yang biasa dipakai menjual otomasi CS sering mengukur hal yang salah.",
    content: `
      <h2>Yang terjadi di Klarna</h2>
      <p>Pada 2024, asisten AI Klarna disebut menangani beban kerja setara 700 agen layanan pelanggan, dengan penghematan yang diumumkan sekitar 40 juta dolar. Angka itu beredar luas dan jadi contoh yang paling sering dikutip orang yang menjual otomasi.</p>
      <p>Empat belas bulan kemudian ceritanya berbeda. Kepuasan pelanggan turun tajam dan kualitas layanan dinilai jatuh, sampai perusahaan meminta tenaga teknis dan tim pemasarannya ikut mengangkat telepon. Sepanjang 2025 hingga 2026 Klarna membangun kembali kapasitas manusianya dan berpindah ke model hibrida: AI menangani pertanyaan rutin bervolume besar, manusia menangani eskalasi, kasus rumit, dan pelanggan bernilai tinggi.</p>
      <p>Kenapa contoh ini relevan untuk bisnis yang jauh lebih kecil: Klarna punya tim teknis besar, data lengkap, dan anggaran untuk mengulang. Kalau di sana asumsi pasang bot lalu potong admin bisa berbalik, asumsi yang sama tidak aman ditiru dengan tim yang lebih kecil dan tanpa ruang mengulang.</p>

      <h2>Yang diperkirakan Gartner</h2>
      <p>Pada Februari 2026 Gartner menerbitkan perkiraan bahwa sampai 2027, separuh perusahaan yang mengaitkan pengurangan jumlah karyawan dengan AI akan merekrut kembali untuk fungsi serupa, dengan nama jabatan yang berbeda.</p>
      <p>Angka pendampingnya lebih menjelaskan keadaan sekarang. Meski 91% eksekutif mendorong penerapan AI, hanya 20% pemimpin layanan pelanggan yang benar-benar mengurangi jumlah agen; mayoritas menyatakan jumlahnya tetap sementara pelanggan yang dilayani bertambah. Gartner juga memperkirakan AI agentik menyelesaikan 80% persoalan layanan yang umum, dan tahun yang disebut adalah 2029, bukan tahun ini.</p>

      <h2>Deflection bukan resolution</h2>
      <p>Ini pembedaan yang paling banyak menyesatkan orang saat membaca penawaran vendor. Deflection mengukur persentase percakapan yang tidak sampai ke manusia. Resolution mengukur persentase masalah yang benar-benar selesai. Keduanya sering disebut bergantian, padahal jaraknya bisa jauh.</p>
      <p>Contoh yang beredar di kalangan praktisi: sebuah agen AI bisa mencatat deflection 85% dengan resolution 60%. Dari 100 pertanyaan, 85 tidak naik ke manusia, tapi hanya 60 yang selesai. Dua puluh lima sisanya berakhir tanpa penyelesaian karena orangnya menyerah di tengah jalan.</p>
      <p>Yang menyerah itu tidak muncul di dasbor sebagai kegagalan. Ia muncul sebagai keberhasilan deflection. Di situlah laporan bulanan bisa terlihat bagus sementara pembeli pindah ke toko sebelah.</p>
      <p>Untuk pertanyaan lapis pertama yang jawabannya memang ada di sistem, seperti status pesanan, jam buka, ketentuan pengembalian, dan ketersediaan barang, deflection yang realistis di lingkungan produksi berada di kisaran 55% sampai 70%. Bukan 90%.</p>

      <h2>Cara memasangnya supaya tidak berbalik</h2>
      <ul>
        <li>Ukur resolution, dan hitung juga percakapan yang berakhir tanpa balasan lanjutan dari pelanggan</li>
        <li>Batasi cakupan asisten ke pertanyaan yang jawabannya benar-benar ada di katalog dan SOP Anda</li>
        <li>Serah terima ke manusia yang sekali jalan, dengan riwayat percakapan terbawa, supaya pelanggan tidak mengulang cerita dari awal</li>
        <li>Jangan kurangi jumlah admin sebelum angka resolution stabil setidaknya tiga bulan</li>
        <li>Simpan daftar pertanyaan yang gagal dijawab, karena itu bahan perbaikan yang paling murah</li>
      </ul>

      <h2>Alasan yang lebih jujur untuk memasang otomasi</h2>
      <p>Bukan memangkas gaji admin. Yang benar-benar berubah adalah kecepatan balasan pertama di jam sibuk dan di luar jam kerja, dan itu bisa diukur tanpa memberhentikan siapa pun. Kalau setelah beberapa bulan resolution-nya stabil dan tim Anda melayani lebih banyak pelanggan dengan jumlah orang yang sama, itu hasil yang nyata dan tidak perlu dibesar-besarkan jadi kepunahan pekerjaan.</p>
    `
  }
];
