import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://gerindtershana.netlify.app/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: ["https://gerindtershana.netlify.app/sitemap-index.xml", "https://gerindtershana.netlify.app/sitemap-0.xml"],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon({
      include: {
        logos: ["*"], // This includes all icons from the logos set
        mdi: ["file-document-outline"],
        bx: ["*"],
        solar: ["*"],
      },
    }),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: netlify({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
