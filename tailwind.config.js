/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary": "#01051e",
        "color-primary-light": "#010417",
        "color-secondary": "#ff7deb",
        "color-gray": "#333",
        "color-blob": "#A427DF",
        "color-white": "#fff",
      }
    },
    container: {
      center: true,
      padding: {
        default: '20px',
        md: '50px',
      }
    }
  },
  plugins: [],
}

