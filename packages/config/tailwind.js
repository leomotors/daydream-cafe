// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts,css,scss}",
    "../../packages/ui/src/**/*.{html,js,svelte,ts,css,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
};

module.exports = config;
