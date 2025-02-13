// @ts-check

/** @satisfies {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts,css,scss,astro}",
    "../../packages/posts/dist/*.svelte",
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
      },
    },
  },
};

export default config;
