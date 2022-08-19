/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        orange:{
          600 : '#FF6F43'
        },
        cyan: {
          100 :  '#f8fafc',
          200 : '#f8fafc',
          300 : '#F8F8FF',
          400 : '#A1A5CE',
          500 : '#42456C',
          600 : '#42456C',
          700 :'#42456C',
          800 : '#21233F'
        },
      },
      fontFamily: {
        Foco: ["Foco", "sans-serif"],
        Focobold: ["Foco bold", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  content: ["./src/**/*.{html,js}"],
  plugins: [
    // ...
    //require("@tailwindcss/forms"),
    //require("@tailwindcss/aspect-ratio"),
  ],
};
