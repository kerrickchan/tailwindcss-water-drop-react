/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'water': 'inset 20px 10px 20px rgba(0, 0, 0, 0.1), 15px 20px 10px rgba(0, 0, 0, 0.1), 15px 20px 20px rgba(0, 0, 0, 0.1), inset -10px -10px 15px rgba(255, 255, 255, 0.6)',
        'water-invert': 'inset 20px 10px 20px rgba(255, 255, 255, 0.9), 15px 20px 10px rgba(0, 255, 0, 0.9), 15px 20px 20px rgba(0, 0, 255, 0.9), inset -10px -10px 15px rgba(255, 255, 255, 0.6)',
      },
      borderRadius: {
        'water': '57% 43% 37% 63% / 45% 52% 48% 55%',
      },
    },
  },
  plugins: [],
}
