# Hiperkreatif

Situs PT Hiperkreatif Solusi Digital. Astro + Tailwind CSS v4, keluaran statis,
di-deploy ke Vercel.

```sh
npm install
npm run dev      # localhost:4321
npm run build    # keluaran ke dist/
npm run preview
```

## Rute

Seluruh rute berbahasa Indonesia. Tidak ada versi bahasa lain, dan tidak ada
`hreflang`, situs ini satu bahasa.

| Rute | Berkas |
|---|---|
| `/` | `src/pages/index.astro` |
| `/jurnal` | `src/pages/jurnal/index.astro` |
| `/jurnal/<slug>` | `src/pages/jurnal/[slug].astro` |
| `/layanan/<slug>` | `src/pages/layanan/[slug].astro` |
| `/konsultasi` | `src/pages/konsultasi.astro` |

Isi halaman diambil dari `src/constants/`: `jurnal.ts`, `layanan.ts`, `faqs.ts`,
`navbar.ts`, `seo.ts`, `schema.ts`.

## Kenapa `vercel.json` penuh aturan `/blog` dan `/services`

**Rute-rute itu sudah tidak ada.** Tidak ada halaman `/blog`, `/services`, atau
`/consultation` di `src/pages/`, dan tidak ada satu pun tautan ke sana dari
dalam situs. Yang tersisa hanya aturan redirect 301, dan alasannya cuma satu:
alamat-alamat itu pernah publik, jadi tautan lama dan indeks mesin pencari
masih menunjuk ke sana.

Riwayat perpindahannya:

```
/blog                 ->  /jurnal
/services/<slug>      ->  /layanan/<slug padanannya>
/consultation         ->  /konsultasi
```

### Isi jurnal direset, dan URL artikel lama sengaja dibiarkan 404

Delapan artikel lama dihapus dan diganti empat tulisan baru yang setiap
angkanya menautkan penerbit datanya. Karena isinya diganti, bukan dipindah,
**tidak ada satu pun nama slug lama yang disimpan di repo ini** dan **tidak ada
redirect untuk URL artikelnya.**

Itu disengaja. `/blog/<slug-lama>` kini balas 404, dan itu memang sinyal yang
diinginkan: mesin pencari mencabut URL yang balas 404 lebih cepat daripada URL
yang di-301 ke halaman lain. Sinyal peringkat yang menempel di delapan URL itu
tidak dipertahankan, dan memang tidak ingin dipertahankan.

Yang lebih tepat secara teknis sebenarnya **410 Gone**, tapi itu menuntut fungsi
server sementara situs ini statis murni. 404 adalah pendekatan terdekat yang
bisa dicapai tanpa menambah runtime.

Jangan tambahkan kembali aturan `/blog/:slug` tanpa alasan baru. Aturan itu
pernah ada dan dicabut atas keputusan sadar, bukan karena terlupa.

Halaman layanan berbeda perlakuannya. Isinya tidak direset, hanya berpindah
alamat, jadi tiap slug lama dipetakan satu-satu ke padanannya.

### Sebelum menambah aturan baru

Periksa `git` dulu, jangan menebak. Rute yang benar-benar pernah ter-deploy
terlihat dari `git ls-tree -r HEAD --name-only | grep src/pages`. Selama
pekerjaan ini sempat ada redirect untuk alamat perantara yang tidak pernah
keluar dari mesin pengembangan; aturan seperti itu tidak melindungi apa pun dan
hanya memperpanjang daftar.

Dua hal yang wajib dijaga saat menyunting `vercel.json`:

1. **Urutan menentukan.** Vercel memakai aturan pertama yang cocok. Semua
   aturan spesifik harus berada **di atas** aturan tangkap-semua `:slug`.
   Kalau terbalik, slug lama diarahkan ke alamat yang tidak ada.
2. **Tujuan harus alamat final, bukan alamat perantara.** Semua redirect
   sengaja menunjuk langsung ke tujuan akhir supaya cuma ada satu lompatan,
   bukan rantai 301 berturut-turut.

`vercel.json` tidak menerima properti di luar skemanya, jadi catatan ini tidak
bisa ditaruh sebagai komentar di dalam berkas itu. Tempatnya di sini.

## Kenapa schema.org menyebut `Blog`, bukan `Jurnal`

Di JSON-LD tiap artikel:

```json
"@type": "BlogPosting",
"isPartOf": { "@type": "Blog", "name": "Jurnal Hiperkreatif" }
```

`Blog` dan `BlogPosting` adalah **kosakata baku schema.org**, bukan label yang
kita pilih. Tidak ada tipe untuk rubrik tulisan berkala di web selain itu, `Periodical` diperuntukkan bagi terbitan berkala seperti jurnal ilmiah dan
majalah, bukan rubrik situs. Mengarang tipe sendiri membuat schemanya tidak
terbaca sama sekali.

Bagian yang memang milik kita sudah berbahasa Indonesia: `name` berbunyi
"Jurnal Hiperkreatif" dan `@id` memakai `/jurnal#jurnal`. Jadi mesin membacanya
sebagai *objek bertipe Blog yang bernama Jurnal Hiperkreatif*.

Pembaca tidak pernah melihat kata "blog" di mana pun, nol kemunculan di teks
tampil, judul tab, breadcrumb, navigasi, maupun footer.

## Aturan isi

- Setiap angka di artikel wajib menautkan penerbit datanya, dan tautan itu
  harus bisa dibuka pembaca. Klaim yang hanya bisa ditelusuri sampai blog
  vendor yang menjual solusinya tidak dipakai.
- Sumber ditulis dua kali dari satu data: sebagai blok "Sumber" yang tampil,
  dan sebagai `BlogPosting.citation` di schema. Keduanya diturunkan dari array
  `sources` di `jurnal.ts` supaya tidak bisa berbeda.
- Kategori artikel memakai slug layanan sebagai kuncinya. Kategori tanpa
  layanan di belakangnya membuat pembaca yang selesai membaca tidak punya
  tujuan.

## Jalur lead: WhatsApp saja

Form `/konsultasi` menyusun pesan lalu membuka `wa.me`. Tidak ada penangkap di
sisi server, dan itu keputusan sadar: satu-satunya jejak lead ada di aplikasi
WhatsApp.

Konsekuensinya perlu diketahui sebelum diubah: orang yang mengisi form lalu
batal di layar WhatsApp tidak meninggalkan bekas apa pun, jadi tidak ada cara
membedakan "tidak ada yang tertarik" dari "tombolnya gagal".

Endpoint `api/lead.js` pernah ada untuk menutup celah itu — sengaja dicabut
karena butuh satu tujuan eksternal (`LEAD_WEBHOOK_URL`) yang tidak dipasang.
Kalau nanti diperlukan, yang dibutuhkan: satu berkas di `api/` (Vercel
membangunnya sebagai serverless function tanpa adapter Astro, jadi situsnya
tetap statis penuh), satu `fetch` ber-`keepalive` di `konsultasi.astro` sebelum
`window.open`, dan satu penampung POST JSON — Apps Script ke Google Sheet paling
cepat. Aturan yang tidak boleh dilanggar: pencatatan tidak pernah menunda atau
membatalkan pembukaan WhatsApp.

## Fakta bertanggal (`src/constants/fakta.ts`)

Tarif dan tanggal berlaku yang dipakai copy penjualan di `layanan.ts` tinggal di
satu berkas, bukan tertanam di tengah kalimat. Alasannya: jadwal PPh marketplace
sudah dua kali bergeser, dan copy yang memajang tanggal lama merusak kredibilitas
tepat di titik kita menjual ketelitian.

Tiap fakta punya `sumber` dan `diperiksa`. Saat memperbarui: cocokkan ke
sumbernya, ubah angkanya, lalu **majukan `diperiksa`**. Kalau ada yang lebih tua
dari `TINJAU_TIAP_HARI` (90 hari) atau tidak punya `sumber`, `astro build` dan
`astro dev` mencetak peringatan — memperingatkan saja, tidak menggagalkan build.

Artikel di `jurnal.ts` tidak memakai ini. Artikel dibaca sebagai catatan
bertanggal, jadi angkanya memang harus beku.

## Mode tampilan

INK dan PAPER, disimpan di `localStorage['hk-mode']`, dipasang ke
`html[data-mode]` sebelum paint pertama supaya tidak berkedip. Skripnya inline
di `BaseLayout.astro` dan harus tetap sinkron.

Token warna ada di `src/styles/global.css`. Ukur kontras di **kedua** mode dan
terhadap `--color-bg` maupun `--color-surface` sebelum mengubah token apa pun.
