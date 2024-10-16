/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: '#343A40',
        gray: '#2C3136'
      },
      fontFamily:{
        serif: ['"Noto Serif JP"', 'serif'], 
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

