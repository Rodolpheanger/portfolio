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
    },
  },
  plugins: [],
};
