const { colors } = require('@mui/material')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)', 
        secondary: 'var(--secondary-color)',
        highlight: 'var(--highlight-color)',
        text_color_primary: 'var(--primary-text-color)',
        text_color_secondary: 'var(--secondary-text-color)',
        text_color_tertiary: 'var(--tertiary-text-color)',
        color_magenta:'var(--brand-magenta)',
        color_blue:'var(--brand-blue)',
        color_purple:'var(--brand-purple)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
