// Self-check endpoint lead. Tanpa framework: `node api/lead.test.mjs`.
// Yang diuji cuma yang bisa rusak tanpa terlihat: validasi di batas kepercayaan
// dan jaminan bahwa webhook tidak pernah dipanggil untuk masukan tak sah.
import assert from "node:assert/strict";
import handler, { bersihkan, BATAS } from "./lead.js";

function mockRes() {
  const res = { kode: 0, body: null, headers: {} };
  res.setHeader = (k, v) => (res.headers[k] = v);
  res.status = (k) => ((res.kode = k), res);
  res.json = (b) => ((res.body = b), res);
  return res;
}

const panggil = async (req) => {
  const res = mockRes();
  await handler(req, res);
  return res;
};

// --- bersihkan ---------------------------------------------------------------
assert.equal(bersihkan("  Budi  ", 120), "Budi");
assert.equal(bersihkan(undefined, 120), "");
assert.equal(bersihkan(123, 120), "");
assert.equal(bersihkan("a".repeat(500), 120).length, 120, "harus dipotong ke batas");
assert.equal(bersihkan("Toko A-B", 120), "Toko A-B", "tanda hubung tidak boleh hilang");
assert.equal(bersihkan("baris1\nbaris2", 120), "baris1\nbaris2", "newline dipertahankan");
assert.equal(bersihkan("hai\u0000\u001Bthere", 120), "haithere", "kontrol dibuang");
assert.equal(bersihkan("a\r\nb", 120), "a\nb", "CRLF jadi LF");

// --- method ------------------------------------------------------------------
{
  const res = await panggil({ method: "GET" });
  assert.equal(res.kode, 405);
  assert.equal(res.headers.Allow, "POST");
}

// --- body tak sah ------------------------------------------------------------
assert.equal((await panggil({ method: "POST", body: "{bukan json" })).kode, 400);
assert.equal((await panggil({ method: "POST", body: null })).kode, 400);
assert.equal(
  (await panggil({ method: "POST", body: { name: "Budi" } })).kode,
  400,
  "brief kosong harus ditolak",
);
assert.equal(
  (await panggil({ method: "POST", body: { brief: "macet" } })).kode,
  400,
  "nama kosong harus ditolak",
);

// --- honeypot ----------------------------------------------------------------
{
  // Webhook diset, tapi jangan sampai dipanggil: honeypot terisi.
  process.env.LEAD_WEBHOOK_URL = "https://contoh.invalid/hook";
  let dipanggil = false;
  const fetchAsli = globalThis.fetch;
  globalThis.fetch = async () => ((dipanggil = true), { ok: true });

  const res = await panggil({
    method: "POST",
    body: { name: "Bot", brief: "spam", fax: "terisi" },
  });
  assert.equal(res.kode, 200, "bot dijawab 200 supaya tidak belajar");
  assert.equal(dipanggil, false, "honeypot terisi: webhook TIDAK boleh dipanggil");

  globalThis.fetch = fetchAsli;
  delete process.env.LEAD_WEBHOOK_URL;
}

// --- webhook belum diset -----------------------------------------------------
{
  delete process.env.LEAD_WEBHOOK_URL;
  const res = await panggil({ method: "POST", body: { name: "Budi", brief: "macet" } });
  assert.equal(res.kode, 503);
  assert.equal(res.body.alasan, "webhook_belum_diset");
}

// --- jalur sukses + payload --------------------------------------------------
{
  process.env.LEAD_WEBHOOK_URL = "https://contoh.invalid/hook";
  let terkirim = null;
  const fetchAsli = globalThis.fetch;
  globalThis.fetch = async (_url, opt) => ((terkirim = JSON.parse(opt.body)), { ok: true });

  const res = await panggil({
    method: "POST",
    body: { name: "Budi Santoso", company: "", brief: "order disalin manual" },
  });

  assert.equal(res.kode, 200);
  assert.equal(terkirim.name, "Budi Santoso");
  assert.equal(terkirim.sumber, "form /konsultasi");
  assert.ok(terkirim.waktu, "waktu harus ikut dikirim");
  assert.ok(!("fax" in terkirim), "honeypot tidak boleh diteruskan");

  globalThis.fetch = fetchAsli;
  delete process.env.LEAD_WEBHOOK_URL;
}

// --- webhook gagal -----------------------------------------------------------
{
  process.env.LEAD_WEBHOOK_URL = "https://contoh.invalid/hook";
  const fetchAsli = globalThis.fetch;

  globalThis.fetch = async () => ({ ok: false, status: 500 });
  let res = await panggil({ method: "POST", body: { name: "Budi", brief: "macet" } });
  assert.equal(res.kode, 502);
  assert.equal(res.body.alasan, "webhook_menolak");

  globalThis.fetch = async () => {
    throw new Error("jaringan mati");
  };
  res = await panggil({ method: "POST", body: { name: "Budi", brief: "macet" } });
  assert.equal(res.kode, 502);
  assert.equal(res.body.alasan, "webhook_tidak_terjangkau");

  globalThis.fetch = fetchAsli;
  delete process.env.LEAD_WEBHOOK_URL;
}

assert.equal(BATAS.brief, 2000);
console.log("api/lead.js: semua pemeriksaan lolos");
