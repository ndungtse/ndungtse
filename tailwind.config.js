const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ['var(--font-poppins)']
      // },
      colors: {
        grey: {
          800: '#18141c',
          900: '#120f16'
        },
        yellow: {
          400: '#FEDE00',
        }
      },
      backgroundImage: {
        heropattern: "url(/herobgc.jpg)",
      }
    },
    plugins: [addVariablesForColors],
  }
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}