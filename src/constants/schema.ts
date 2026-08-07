// Semua @id dan url di JSON-LD diturunkan dari Astro.site, tidak ditulis tangan.
// Sebelumnya schema memakai www.hiperkreatif.com sementara canonical dan og:url
// memakai hiperkreatif.com, jadi mesin membacanya sebagai dua organisasi yang
// berbeda. Satu sumber kebenaran menutup seluruh kelas bug itu, bukan cuma
// kejadiannya yang kemarin.
const FALLBACK = "https://hiperkreatif.com/";

export const ids = (site: URL | undefined) => {
  const base = (site?.href ?? FALLBACK).replace(/\/*$/, "/");
  return {
    base,
    org: `${base}#org`,
    person: `${base}#person`,
    website: `${base}#website`,
    url: (path: string) => new URL(path.replace(/^\//, ""), base).toString(),
  };
};

// Breadcrumb UI sudah ada di halaman layanan dan artikel; ini versi yang bisa
// dibaca mesin. Posisi dimulai dari 1 sesuai spesifikasi schema.org.
export const breadcrumb = (site: URL | undefined, items: { name: string; path: string }[]) => {
  const { url } = ids(site);
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: url(it.path),
    })),
  };
};
