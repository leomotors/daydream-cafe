// @ts-check

import tseslint from "typescript-eslint";

import base from "@daydream-cafe/config/eslint/astro.js";

export default tseslint.config(...base, {
  files: ["**/*.d.ts"],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
  },
});
