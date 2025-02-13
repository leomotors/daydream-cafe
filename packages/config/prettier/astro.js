// @ts-check

import svelte from "./svelte.js";

/**
 * @type {import("prettier").Options}
 */
const config = {
  ...svelte,
  plugins: [...(svelte.plugins || []), "prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

export default config;
