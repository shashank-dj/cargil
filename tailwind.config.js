/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#061410',
          900: '#0A2218',
          800: '#112D1E',
          700: '#1A3D28',
          600: '#1E4A32',
          500: '#2D6A4F',
        },
        lime: {
          400: '#4ADE80',
          300: '#86EFAC',
          500: '#22C55E',
        },
        gold: {
          400: '#F5C842',
          300: '#FDE68A',
          500: '#D4A017',
        },
        soil: {
          400: '#C4763A',
          300: '#D4956A',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Lato"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'count': 'count 2s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
