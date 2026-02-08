/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raja': {
          white: '#FFFFFF',
          navy: '#1A237E',
          blue: '#2563EB',
          'blue-light': '#4285F4',
          'blue-dark': '#1E3A8A',
        },
        accent: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
