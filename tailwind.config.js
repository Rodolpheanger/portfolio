/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#0F182C',
      secondary: '#FED766',
      tertiary: '#FE4A49',
      'text-light': '#BEC7D6',
      'text-dark': '#628592',
    },
    fontFamily: {
      'bebas-neue': ['Bebas Neue', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
