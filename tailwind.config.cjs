/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pry: '#133E53',
        text: '#959DA1',
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        algre: ['Alegreya Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
