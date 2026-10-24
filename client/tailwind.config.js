/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F7F6F2',
        main: '#1A1A1A',
        muted: '#77736D',
        accent: '#9A7B5B',
        surface: '#FFFFFF',
        borderWarm: '#DEDAD3'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}