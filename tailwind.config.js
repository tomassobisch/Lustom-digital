/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#FAF9F6", // Elegant Off-White
        textPrimary: "#111111", // Deep Charcoal
        accent: "#D4CBB3", // Warm Beige/Sand
        accentDark: "#A89F91", // Muted Taupe
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
