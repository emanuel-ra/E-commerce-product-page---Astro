/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      borderColor: {
        'theme-orange': 'hsl(26, 100%, 55%)',
      },
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        secondary: 'hsl(220, 14%, 75%)',
        primaryLight: 'hsl(25, 100%, 94%)',
      },
    },
  },
  plugins: [],
};
