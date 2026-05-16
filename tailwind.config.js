/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#FFFFFF", // Clean white background
        textPrimary: "#000000", // Stark black text
        accent: "#000000", // Primary action color
        muted: "#666666", // Muted text/elements
        borderLight: "#EEEEEE", // Light border
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'button': '4px', // OptimoClick uses sharper or very slightly rounded corners
      }
    },
  },
  plugins: [],
}
