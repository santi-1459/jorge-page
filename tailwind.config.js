
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        serene: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc5fb',
          400: '#36a7f8',
          500: '#0c8ce9',
          600: '#006fc8',
          700: '#0058a3',
          800: '#004a87',
          900: '#053e6f',
        }
      }
    },
  },
  plugins: [],
}
