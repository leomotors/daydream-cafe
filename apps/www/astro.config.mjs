// @ts-check

import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: "https://leomotors.me",
  markdown: {
    remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex]
  },
  integrations: [sitemap(), tailwind(), svelte()],
});
