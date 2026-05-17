/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#FAF9F6", // Mandatory Cream
        textPrimary: "#111111", // Mandatory Charcoal
        accent: "#D4CBB3", // Mandatory Beige
        accentDark: "#A89F91", // Mandatory Taupe
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'mega-widest': '0.8em',
      }
    },
  },
  plugins: [],
}
