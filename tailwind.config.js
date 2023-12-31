/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/bg1.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}

