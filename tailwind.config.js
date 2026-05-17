/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0D0D0D", // Deep dark background
        accent: "#D48B58", // Elegant Copper/Orange from image
        textSecondary: "#8A8A8A", // Muted text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
