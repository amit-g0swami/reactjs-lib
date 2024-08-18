/** @type {import('tailwindcss').Config} */

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
  variants: {}
}
