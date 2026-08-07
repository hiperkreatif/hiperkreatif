// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { BLOGS } from "./src/constants/blogs.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://hiperkreatif.com",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      // lastmod hanya diisi untuk artikel, karena cuma artikel yang punya
      // tanggal sebenarnya. Mengisi seluruh URL dengan waktu build akan
      // memberi tahu crawler bahwa semua halaman berubah tiap deploy —
      // sinyal palsu yang lama-lama diabaikan.
      serialize(item) {
        const slug = new URL(item.url).pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
        const post = BLOGS.find((b) => b.slug === slug);
        if (post) item.lastmod = post.updated || post.iso;
        return item;
      },
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
