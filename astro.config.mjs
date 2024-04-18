import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compressor from "astro-compressor";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://tecnoconecta.net",
  integrations: [react({
    include: ["**/react/*"]
  }), tailwind({
    configFile: "./tailwind.config.js"
  }), compressor({
    gzip: true,
    brotli: false,
    fileExtensions: [".css", ".js", ".html", ".xml", ".cjs", ".mjs", ".svg", ".txt", ".webp"]
  }), sitemap({
    changefreq: "weekly",
    priority: 0.7,
    lastmod: new Date("2024-04-15")
  })],
  output: "server",
  adapter: vercel()
});