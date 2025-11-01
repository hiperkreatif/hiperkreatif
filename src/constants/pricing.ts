export interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  discountPercentage?: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  target?: string;
  shadow?: boolean;
}

export interface ServicePricing {
  serviceName: string;
  plans: PricingPlan[];
}

export const PRICING_DATA: Record<string, ServicePricing> = {
  hypersiteCommerce: {
    serviceName: "HyperSite Commerce",
    plans: [
      {
        name: "Starter",
        price: "IDR 2,200,000",
        originalPrice: "Rp 2,800,000",
        discountPercentage: 21,
        description: "Cocok untuk UMKM yang mau segera mulai jualan online tanpa ribet.",
        features: [
          "Katalog produk dasar (s.d. 50 SKU)",
          "Checkout sederhana (COD/transfer manual)",
          "Struktur kategori & tag dasar",
          "SEO on-page dasar (title, meta, sitemap)",
          "1x impor data awal (CSV/Sheet)"
        ],
        cta: "Mulai Dulu",
        shadow: false,
        target: "UMKM pemula"
      },
      {
        name: "Pro",
        price: "IDR 4,200,000",
        originalPrice: "Rp 5,800,000",
        discountPercentage: 28,
        description: "Paling populer—fitur siap scale, iklan rapih, data kebaca. + Gratis CS AI 3 bulan.",
        features: [
          "Semua fitur Starter",
          "Checkout lanjutan (variasi, kupon, ongkir dinamis)",
          "Integrasi pembayaran (VA/QRIS) *biaya gateway terpisah",
          "Analytics & pixel (Ads/Tag Manager)",
          "Optimasi performa (image, cache, lazyload)",
          "Staging & QA basic",
          "Training singkat admin (1 sesi)",
          "CS AI otomatis 24/7 (WhatsApp)"
        ],
        cta: "Paling Banyak Dipilih",
        popular: true,
        shadow: true,
        target: "Brand yang mau scale"
      },
      {
        name: "Enterprise",
        price: "Custom",
        description: "Solusi kustom untuk kebutuhan kompleks & volume tinggi.",
        features: [
          "Semua fitur Pro",
          "Fitur kustom bisnis (approval, bundling, B2B pricing)",
          "Integrasi API pihak ketiga (ERP/OMS/WMS)",
          "Multi gudang / multi cabang",
          "Monitoring & dukungan prioritas"
        ],
        cta: "Konsultasi Gratis",
        shadow: false,
        target: "Perusahaan & B2B"
      }
    ]
  },
  hyperprofileSite: {
    serviceName: "HyperProfile Site",
    plans: [
      {
        name: "Basic",
        price: "IDR 1,400,000",
        originalPrice: "Rp 1,900,000",
        discountPercentage: 26,
        description: "Profil singkat yang rapi dan cepat live.",
        features: [
          "S.d. 5 halaman statis (Home, About, Services, Gallery, Contact)",
          "Desain responsif",
          "Form kontak (email/WA)",
          "SEO on-page dasar",
          "Deploy & konfigurasi basic"
        ],
        cta: "Bangun Profil",
        shadow: false,
        target: "Startup & profesional"
      },
      {
        name: "Business",
        price: "IDR 2,800,000",
        originalPrice: "Rp 3,800,000",
        discountPercentage: 26,
        description: "Paling populer—CMS gampang, lead tracking rapi. + Gratis CS AI 3 bulan.",
        features: [
          "Semua fitur Basic",
          "CMS sederhana (blog/portfolio)",
          "Integrasi CRM/Sheet",
          "Analytics & pixel",
          "Optimasi kecepatan",
          "Konten awal 5 artikel/portfolio",
          "CS AI otomatis 24/7 (WhatsApp)"
        ],
        cta: "Tampil Profesional",
        popular: true,
        shadow: true,
        target: "UKM berkembang"
      },
      {
        name: "Corporate",
        price: "IDR 5,200,000",
        originalPrice: "Rp 6,800,000",
        discountPercentage: 24,
        description: "Corporate look, multilanguage, siap tender.",
        features: [
          "Semua fitur Business",
          "Desain kustom",
          "Multi bahasa",
          "Integrasi API (career, investor, dsb.)",
          "Dukungan prioritas"
        ],
        cta: "Konsultasi Gratis",
        shadow: false,
        target: "Perusahaan & B2B"
      }
    ]
  }
};
