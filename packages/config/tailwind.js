/* eslint-disable @typescript-eslint/no-require-imports */
// @ts-check

/** @satisfies {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts,css,scss,astro}",
    "../../packages/posts/dist/*.svelte",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
