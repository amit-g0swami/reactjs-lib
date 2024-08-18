/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
import { theme } from './src/theme'

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      ...theme.baseTheme,
      dark: {
        ...theme.darkTheme
      }
    }
  },
  variants: {},
  plugins: [plugin(fontSizePlugin)]
}
