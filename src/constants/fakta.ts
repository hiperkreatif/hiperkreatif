
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
    sumber:
      "https://tekno.kompas.com/read/2026/08/11/15125137/meta-business-agent-resmi-di-indonesia-karyawan-ai-yang-bisa-kerja-24-jam",
    catatan:
      "Diumumkan di WhatsApp Business Summit Indonesia 2026, Jakarta. Dua skema: terintegrasi di aplikasi WhatsApp Business untuk UKM, dan Business Agent Platform untuk perusahaan besar. Seluruh posisi layanan ai-otomasi bertumpu pada fakta ini.",
  },
} as const;

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
