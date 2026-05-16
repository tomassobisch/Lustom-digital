/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#020617", // Deep Obsidian
        textPrimary: "#F8FAFC", // Ghost White
        accent: "#06B6D4", // Electric Cyan
        accentDark: "#8B5CF6", // Cyber Violet
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
