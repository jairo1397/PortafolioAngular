/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FEDCC8',
      },
      fontFamily: {
        'body': ['Nunito']
      }
    },
  },
  plugins: [],
}