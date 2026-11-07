import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import { existsSync, readdirSync } from "node:fs";

const hasPhotos = existsSync("./src/assets/photos") && readdirSync("./src/assets/photos").some((f) => /\.(jpe?g|png|webp)$/i.test(f));

import solidJs from "@astrojs/solid-js";


// https://astro.build/config
export default defineConfig({
  site: "https://gerind.dev",
  integrations: [
    sitemap({ filter: (page) => hasPhotos || !page.includes("/photos") }),
    robotsTxt({
      sitemap: ["https://gerind.dev/sitemap-index.xml"],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
  build: { inlineStylesheets: "always" },
});
