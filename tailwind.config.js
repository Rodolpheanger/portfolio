/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F182C',
        secondary: '#FED766',
        tertiary: '#FE4A49',
        'tertiary-dark': '#7f1f1d',
        'text-light': '#BEC7D6',
        'text-dark': '#628592',
        'text-white': '#ffffff',
      },
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        'appear-left': {
          '0%': { transform: 'translateX(-50vw) scale(0)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        'appear-right': {
          '0%': { transform: 'translateX(50vw) scale(0)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '1' },
        },
        'appear-spin-left': {
          '0%': { transform: 'rotate(0deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(-1800deg) scale(1)', opacity: '1' },
        },
        'appear-spin-right': {
          '0%': { transform: 'rotate(0deg) scale(0)', opacity: '0' },
          '100%': { transform: 'rotate(1800deg) scale(1)', opacity: '1' },
        },
        'appear-scale': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '75%': { transform: 'scale(0.75)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'appear-left': 'appear-left 1000ms 100ms  forwards',
        'appear-right': 'appear-right 1000ms 100ms  forwards',
        'appear-spin-left':
          'appear-spin-left 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'appear-spin-right':
          'appear-spin-right 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'appear-scale': 'appear-scale 1000ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
};
