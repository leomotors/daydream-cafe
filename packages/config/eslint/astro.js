// @ts-check

import { defineConfig } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";

import svelte from "./svelte.js";

export default defineConfig(
  ...svelte,
  ...eslintPluginAstro.configs.recommended,
);
