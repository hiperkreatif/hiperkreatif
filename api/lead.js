// Pencatat lead. Dipanggil form /konsultasi sesaat sebelum WhatsApp dibuka,
// supaya ada jejak di sisi kami meski calon klien batal di layar WhatsApp.
//
// Berkas ini di luar src/: Vercel membangun apa pun di /api sebagai serverless
// function tanpa perlu adapter Astro, jadi situsnya tetap keluaran statis penuh.
// Astro tidak menyentuh direktori ini.
//
// Tujuan akhirnya ditentukan satu variabel lingkungan, LEAD_WEBHOOK_URL
// (Apps Script, Slack, n8n, apa pun yang menerima POST JSON). Tanpa itu
// endpoint ini menjawab 503 dan form tetap melanjutkan ke WhatsApp — tidak
// pernah menahan lead karena masalah di sisi kami.
//
// Batas yang diambil sadar: tidak ada rate limit. Penyaringnya cuma honeypot,
// validasi kolom, dan batas panjang. Kalau endpoint ini mulai dibanjiri, naikkan
// ke Vercel Firewall (rate limit per IP di dashboard, tanpa ubah kode) —
// jangan menulis penghitung sendiri di sini, function ini stateless.

const BATAS = { name: 120, company: 160, brief: 2000 };
const TIMEOUT_MS = 5000;

// Semua karakter kontrol kecuali tab (U+0009) dan newline (U+000A). Keduanya
// dipertahankan karena brief datang dari <textarea> dan memang multi-baris.
// Sisanya dibuang: bisa dipakai memalsukan struktur pesan di sisi webhook.
const KONTROL = /[\u0000-\u0008\u000B-\u001F\u007F]/g;

/** Rapikan satu kolom masukan, lalu potong ke batasnya. */
function bersihkan(nilai, batas) {
  if (typeof nilai !== "string") return "";
  return nilai
    .replace(/\r\n?/g, "\n")
    .replace(KONTROL, "")
    .trim()
    .slice(0, batas);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, alasan: "method_not_allowed" });
  }

  // req.body sudah diurai Vercel untuk application/json. Kalau dikirim sebagai
  // teks (mis. fetch tanpa header), urai manual supaya tidak diam-diam gagal.
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, alasan: "json_tidak_valid" });
    }
  }
  if (!body || typeof body !== "object") {
    return res.status(400).json({ ok: false, alasan: "body_kosong" });
  }

  // Honeypot: kolom ini tersembunyi di form, hanya bot yang mengisinya.
  // Dijawab 200 supaya bot tidak belajar bahwa isiannya ditolak.
  if (bersihkan(body.fax, 40)) return res.status(200).json({ ok: true });

  const lead = {
    name: bersihkan(body.name, BATAS.name),
    company: bersihkan(body.company, BATAS.company),
    brief: bersihkan(body.brief, BATAS.brief),
  };

  if (!lead.name || !lead.brief) {
    return res.status(400).json({ ok: false, alasan: "nama_atau_brief_kosong" });
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (!webhook) {
    // Jaring pengaman: seluruh isinya ditulis ke log function, bukan cuma
    // namanya. Log Vercel bisa dibuka dan dicari, jadi lead tetap bisa
    // diselamatkan selama webhook belum dipasang. Bukan pengganti webhook —
    // log Vercel punya masa simpan terbatas, tidak memberi notifikasi.
    console.error("LEAD_WEBHOOK_URL belum diset. LEAD:", JSON.stringify(lead));
    return res.status(503).json({ ok: false, alasan: "webhook_belum_diset" });
  }

  try {
    const balasan = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...lead,
        waktu: new Date().toISOString(),
        sumber: "form /konsultasi",
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (!balasan.ok) {
      // Pesan webhook tidak diteruskan ke klien: bisa memuat URL atau token.
      console.error("Webhook menolak:", balasan.status);
      return res.status(502).json({ ok: false, alasan: "webhook_menolak" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Gagal meneruskan lead:", err?.name || err);
    return res.status(502).json({ ok: false, alasan: "webhook_tidak_terjangkau" });
  }
}

export { bersihkan, BATAS, KONTROL };
