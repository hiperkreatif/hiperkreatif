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
      "Auto-reply WhatsApp 24/7 pakai AI, tanpa repot training CS. Workflow ini gabungkan n8n, WhatsApp Official, Gemini AI, dan Google Sheet — bikin bisnis lo responsif, hemat waktu, dan siap scale tanpa drama.",
    url: "#",
    thumbnail: "https://placehold.co/400x200?text=Workflow+CS+AI",
    tags: ["Workflow", "AI", "WhatsApp", "CRM", "Automation"],
  },
];
