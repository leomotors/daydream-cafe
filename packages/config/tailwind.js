// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts,css,scss}",
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
