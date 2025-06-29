export const NAV_LOGO: string = "hiperkreatif";

export interface NavMenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_MENU: NavMenuItem[] = [
  { label: "Blog", href: "https://hiperkreatif.com/blog" },
  { label: "Community", href: "#community" },
  { label: "Github", href: "https://github.com/ddr137", external: true },
];

export interface NavCta {
  label: string;
  href: string;
}

export const NAV_CTA: NavCta = {
  label: "Tanyain aja!",
  href: "https://wa.me/6285157445924?text=Halo,%20saya%20ingin%20konsultasi%20atau%20tanya%20tentang%20produk%20digital%20di%20Hiperkreatif.%20Boleh%20dibantu?",
};
