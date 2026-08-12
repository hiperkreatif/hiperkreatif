// Fakta bertanggal yang dipakai copy penjualan di `layanan.ts`.
//
// Kenapa terpusat di sini: tarif dan tanggal berlaku aturan pajak/platform
// bergeser, dan sebagian sudah bergeser lebih dari sekali. Kalau angkanya
// tertanam di tengah kalimat panjang, menyegarkannya jadi penelusuran ke
// seluruh repo. Di sini cukup satu berkas.
//
// Artikel di `jurnal.ts` TIDAK memakai ini. Artikel bertanggal terbit dan
// dibaca sebagai catatan pada saat itu, jadi angkanya memang harus beku.
//
// `diperiksa` = kapan terakhir klaim ini dicocokkan ke sumbernya, bukan kapan
// aturannya terbit.

export const TINJAU_TIAP_HARI = 90;

export const FAKTA = {
  pphMarketplace: {
    tarif: "0,5%",
    berlaku: "1 November 2026",
    diperiksa: "2026-08-12",
    sumber:
      "https://www.pajak.go.id/id/pengumuman/penundaan-waktu-pemberlakuan-ketentuan-pemungutan-pph-pasal-22-oleh-marketplace",
    catatan:
      "Sudah dua kali bergeser jadwalnya. Klaim paling rapuh di copy layanan — periksa ini lebih dulu.",
  },

  biayaMarketplace: {
    periode: "Mei 2026",
    diperiksa: "2026-08-12",
    sumber:
      "https://teknologi.bisnis.com/read/20260518/84/1974415/komisi-dinamis-seller-tiktok-shop-naik-hari-ini-batas-atas-melesat-15-kali-lipat",
    catatan: "Tarif per platform berbeda; copy sengaja tidak menyebut angka.",
  },

  metaBusinessAgent: {
    rilis: "11 Agustus 2026",
    diperiksa: "2026-08-12",
    sumber: "",
    catatan:
      "Belum ada URL publik yang tercatat untuk tanggal rilisnya. Seluruh posisi layanan ai-otomasi bertumpu pada fakta ini, jadi sumbernya perlu dilengkapi sebelum dipakai sebagai klaim di halaman lain.",
  },
} as const;

/** Dipanggil sekali dari astro.config.mjs. Memperingatkan, tidak menggagalkan. */
export function periksaKesegaran(hariIni = new Date()) {
  const basi: string[] = [];
  const tanpaSumber: string[] = [];

  for (const [kunci, f] of Object.entries(FAKTA)) {
    const umurHari = Math.floor(
      (hariIni.getTime() - new Date(f.diperiksa).getTime()) / 86_400_000,
    );
    if (umurHari > TINJAU_TIAP_HARI) basi.push(`${kunci} (${umurHari} hari)`);
    if (!f.sumber) tanpaSumber.push(kunci);
  }

  if (basi.length) {
    console.warn(
      `\n⚠ Fakta belum ditinjau > ${TINJAU_TIAP_HARI} hari: ${basi.join(", ")}` +
        `\n  Cocokkan ke sumbernya, lalu perbarui \`diperiksa\` di src/constants/fakta.ts\n`,
    );
  }
  if (tanpaSumber.length) {
    console.warn(`⚠ Fakta tanpa sumber yang bisa dibuka: ${tanpaSumber.join(", ")}\n`);
  }

  return { basi, tanpaSumber };
}
