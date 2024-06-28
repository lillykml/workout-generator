/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        DEFAULT: '1.5',
      },
      fontWeight: {
        DEFAULT: '400',
      },
      fontFamily: {
        "anton": ['Anton', 'sans-serif'],
        "chakra": ["Chakra Petch", 'sans-serif']
      },
      colors: {
        'bright-yellow': '#F1FB6A',
        'strong-purple': '#989CE3',
        'cold-blue': '#6E91EF',
        'dark-purple': '#2A2841'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(110deg, #F1FB6A, #E0C89D, #989CE3, #6E91EF)',
      }
    },
  },
  plugins: [],
}