/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      dark: {
      }
    }
  },
  variants: {},
  plugins: [plugin(fontSizePlugin)]
}
