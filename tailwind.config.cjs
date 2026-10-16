/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d3b6e",
        "primary-dark": "#142a50",
        accent: "#c8963e",
        "accent-dark": "#a87a2c",
        "background-light": "#f5f6f9",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        heading: ["Merriweather", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
