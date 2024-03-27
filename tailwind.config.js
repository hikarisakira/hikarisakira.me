/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('daisyui')
  ],
  daisyui:{
    themes: ["retro", "wireframe"],
    darkTheme: "dim",
    base: true,
    styled: true,
    utils: true,
    prefix:"",
    logs: true,
    themeRoot: ":root",
  }
}

