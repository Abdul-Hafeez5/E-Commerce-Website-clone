/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mxs: "375px",
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        quickSand: ["QuickSand", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#3bb77e",
        secondary: "#ADADAD",
      },
    },
  },
  plugins: [],
};
