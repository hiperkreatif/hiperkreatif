// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://hiperkreatif.com",
  integrations: [
    sitemap({
      customPages: ["https://hiperkreatif.com/ecommerce-crafter"],
      changefreq: "weekly",
      priority: 0.8,
    }),
  ],
  image: {
    service: {
      // pakai sharp (default di banyak setup)
      entrypoint: "astro/assets/services/sharp",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
