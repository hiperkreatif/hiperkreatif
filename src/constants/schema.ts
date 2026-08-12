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
