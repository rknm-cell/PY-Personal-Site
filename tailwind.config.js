/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {

      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      letterSpacing: {
        '10': '10px',
      },
      lineHeight: {
        '0.8': '0.8',
      },
      colors: {
        primary: "#040D12",
        secondary: "#183D3D",
        tertiary: "#5C8374",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "20px 20px 60px #bebebe",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};