/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html", "index.js", "./pages/testing.html", "./pages/testing.js", "./pages/ending.html", "./pages/ending.js"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),],
}
