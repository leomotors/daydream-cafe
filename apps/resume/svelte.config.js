// @ts-check

import path from "node:path";

import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
export default {
  kit: {
    adapter: adapter(),
    alias: {
      $: path.resolve("src"),
      $components: path.resolve("src/components"),
    },
  },
};
