module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './layout/**/*.{js,ts,jsx,tsx}',
  './helpers/**/*.{js,ts,jsx,tsx}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: ['hover'],
      backgroundColor: ['active'],
      borderColor: ['focus-visible', 'first'],
      textColor: ['visited'],
      screens:{
        "3xl": "200px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
  plugins: [require("@tailwindcss/line-clamp")],
  
};
