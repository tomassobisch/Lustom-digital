/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#FAF9F6", // Elegant Off-White / Cream
        textPrimary: "#111111", // Deep Charcoal
        accent: "#D4CBB3", // Warm Beige
        accentDark: "#A89F91", // Muted Taupe
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'super-widest': '0.4em',
        'mega-widest': '0.6em',
      }
    },
  },
  plugins: [],
}
