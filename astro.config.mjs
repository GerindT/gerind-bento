import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import { existsSync, readdirSync } from "node:fs";

const hasPhotos = existsSync("./src/assets/photos") && readdirSync("./src/assets/photos").some((f) => /\.(jpe?g|png|webp)$/i.test(f));

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";


// https://astro.build/config
export default defineConfig({
  site: "https://gerindtershana.netlify.app",
  integrations: [
    sitemap({ filter: (page) => hasPhotos || !page.includes("/photos") }),
    robotsTxt({
      sitemap: ["https://gerindtershana.netlify.app/sitemap-index.xml"],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static",
  build: { inlineStylesheets: "always" },
});
