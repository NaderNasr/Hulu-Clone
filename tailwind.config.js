module.exports = {
  // mode: "jit",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
