// @ts-check

import path from "node:path";

import staticPaths from "@daydream-cafe/posts/staticPaths";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
export default {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      $: path.resolve("src"),
      $components: path.resolve("src/components"),
    },
    prerender: {
      entries: ["*", ...staticPaths],
    },
  },
};
