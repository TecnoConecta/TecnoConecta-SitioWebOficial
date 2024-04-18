import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from "@astrojs/node";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }), 
  site: "https://tecnoconecta.net",
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    tailwind({
      configFile: "./tailwind.config.js",
    }),
    compressor({
      gzip: true,
      brotli: false,
      fileExtensions: [
        ".css",
        ".js",
        ".html",
        ".xml",
        ".cjs",
        ".mjs",
        ".svg",
        ".txt",
        ".webp",
      ],
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2024-04-15"),
    }),
  ],
});
