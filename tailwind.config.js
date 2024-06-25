/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "anton": ['Anton', 'sans-serif'],
        "chakra": ["Chakra Petch", 'sans-serif']
      },
      colors: {
        'bright-yellow': '#F1FB6A',
        'strong-purple': '#989CE3'
      },
    },
  },
  plugins: [],
}