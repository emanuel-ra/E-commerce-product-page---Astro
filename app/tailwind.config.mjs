/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderColor: {
        "theme-orange": "hsl(26, 100%, 55%)",
      },
    },
  },
  plugins: [],
};
