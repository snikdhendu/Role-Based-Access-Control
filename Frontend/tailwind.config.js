/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textmain: '#0d9488',
        textsecond: '#eab308',
        textthird: '#034078',
        textfourth: '#001F54',
        mainbg: '#FEFCFB',
        secondbg: '#f9fafb',
        thirdbg: '#f7f7f7',
      },
      fontFamily: {
        'royal1': ['"Cormorant Garamond"', 'serif'],
        'royal2': ['"Anton SC", sans-serif'],
        'royal3': ['"Ubuntu", sans-serif'],
        'royal4': ['"Nunito", sans-serif'],
      },
    },
  },
  plugins: [],
}