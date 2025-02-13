// @ts-check

import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

import svelte from "./svelte.js";

export default tseslint.config(
  ...svelte,
  ...eslintPluginAstro.configs.recommended,
);
