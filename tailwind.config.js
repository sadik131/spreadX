/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          default:"#2C5E9D",
          secondary:"#2C89FF"
        },
        accent:"#939393",
        color:"#4D4D4D"
      },
      fontFamily: {
        'istok': ['Istok Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

