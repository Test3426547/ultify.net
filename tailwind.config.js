/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}