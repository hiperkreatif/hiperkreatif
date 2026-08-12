export const NAV_LOGO: string = "hiperkreatif";

export interface NavMenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_MENU: NavMenuItem[] = [
  { label: "Layanan", href: "/#layanan" },
  { label: "Jurnal", href: "/jurnal" },
  { label: "GitHub", href: "https://github.com/hiperkreatif", external: true },
];

export interface NavCta {
  label: string;
  href: string;
}

export const NAV_CTA: NavCta = {
  label: "Jadwalkan konsultasi",
  href: "/konsultasi",
};
