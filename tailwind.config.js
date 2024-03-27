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
      require('daisyui')
  ],
  daisyui:{
    themes: ["retro", "sunset"],
    darkTheme: "sunset",
    base: true,
    styled: true,
    utils: true,
    prefix:"",
    logs: true,
    themeRoot: ":root",
  }
}

