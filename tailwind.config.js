/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.blue
    ,
      accent: colors.red,
      base: colors.slate,
    },
    fontFamily: {
      'sans': ['Montserrat', ...defaultTheme.fontFamily.sans,],
    },
    extend: {},
  },
  plugins: [
    
  ],
}
