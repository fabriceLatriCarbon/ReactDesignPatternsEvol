const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js, ts, jsx, tsx}',
    './src/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      ardoise: '#1e2027',
    },
    extend: {},
  },
  plugins: [],
};
