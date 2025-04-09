// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}", // Adjust the paths if necessary for your project
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["'Noto Serif Display'", "serif"],
      },
    },
  },
  plugins: [],
};
