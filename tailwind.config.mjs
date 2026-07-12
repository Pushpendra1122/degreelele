/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b1f4d",
          blue: "#123c7c",
          gold: "#f5b321",
          ink: "#172033",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 31, 77, 0.10)",
      },
    },
  },
  plugins: [],
};
