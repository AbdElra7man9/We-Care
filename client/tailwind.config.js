
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2px',
    },
    extend: {},
    screens: {
      ss: '360px',
      sm: '500px',
      md: '680px',
      lg: '952px',
      xl: '1150px',
      xxl: '1300px',
      xxxl: '1500px',
    },
  },
  plugins: [
    // require('flowbite/plugin'),
  ]
};