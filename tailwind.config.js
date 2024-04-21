/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '30pt': '30%'
      },
      minHeight: {
        '50vh': '50vh',
        '40vh': '40vh',
      }
    },
  },
  plugins: [],
}

