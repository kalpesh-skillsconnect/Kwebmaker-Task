/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#8DC63F',
          dark: '#6da020',
          light: '#b5e06a',
        },
        navy: {
          DEFAULT: '#0D3B52',
          dark: '#092A3B',
          light: '#1A5470',
        },
        teal: '#0D3B4E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
