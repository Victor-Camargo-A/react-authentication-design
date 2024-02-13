/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#EE6C4D",
        secundary:{
          100:"#1e1f25",
          900:"#131517",
        }
      }
    },
  },
  plugins: [],
}