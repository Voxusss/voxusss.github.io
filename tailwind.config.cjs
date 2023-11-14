/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ff8800",
        secondary: "#fcb562",
        tertiary: "#301c10",
        "black-100": "#25170d",
        "black-200": "#251003",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #301c10",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        'cozy': ['Cozy Space', 'sans-serif']
      },
    },
  },
  plugins: [],
};