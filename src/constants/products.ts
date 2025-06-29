export interface Product {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    title:
      "Workflow CS AI: n8n + WhatsApp Official + Gemini AI + Google Sheet (CRM)",
    description:
      "Otomatisasi customer service dengan integrasi n8n, WhatsApp Official API, Gemini AI, dan Google Sheet untuk CRM. Cocok untuk bisnis yang ingin efisiensi dan respons cepat.",
    url: "#",
    thumbnail: "https://placehold.co/400x200?text=Workflow+CS+AI",
    tags: ["Workflow", "AI", "WhatsApp", "CRM", "Automation"],
  },
  {
    title: "Jasa Pembuatan Website / Aplikasi Mobile / Digital Solution",
    description:
      "Solusi pembuatan website, aplikasi mobile, dan digital solution custom sesuai kebutuhan bisnis Anda. Didukung tim berpengalaman dan teknologi terbaru.",
    url: "#",
    thumbnail: "https://placehold.co/400x200?text=Web+Mobile+App",
    tags: ["Jasa", "Website", "Mobile App", "Digital Solution"],
  },
  {
    title: "UI/UX Design Website & Aplikasi",
    description:
      "Layanan desain UI/UX profesional untuk website dan aplikasi mobile. Mulai dari riset, wireframe, hingga prototyping dengan tampilan modern dan user-friendly, meningkatkan konversi dan pengalaman pengguna.",
    url: "#",
    thumbnail: "https://placehold.co/400x200?text=UIUX+Design+Service",
    tags: ["Jasa", "UI/UX", "Desain", "Website", "Aplikasi"],
  },
  {
    title:
      "Ebook: Membuat Aplikasi Company Profile dengan Laravel 12 + Filament",
    description:
      "Panduan lengkap step-by-step membuat aplikasi company profile profesional menggunakan Laravel 12 dan Filament. Cocok untuk pemula maupun developer yang ingin mempercepat workflow pembuatan web modern.",
    url: "#",
    thumbnail: "https://placehold.co/400x200?text=Ebook+Laravel+Filament",
    tags: ["Ebook", "Laravel", "Filament", "Company Profile", "Web"],
  },
];
