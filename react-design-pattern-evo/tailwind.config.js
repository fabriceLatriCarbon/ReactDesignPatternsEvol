import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
export default withMT({
  darkMode: 'class',
  content: {
    relative: true,
    files: ['./index.html', './src/**/*.{ts,tsx}'],
  },
  theme: {
    extend: {
      colors: {
        ardoise: '#1e2027',
        cardinal: '#bd2130',
        easternBlue: '#17A2B8',
        athensGray: '#E9ECEF',
        trout: '#495057',
      },
    },
  },
  plugins: [],
});
