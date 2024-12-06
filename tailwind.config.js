/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f7ff',
          orange: '#ff4d00',
          purple: '#9900ff'
        }
      }
    },
  },
  plugins: [],
}