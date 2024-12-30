/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        "sm":"5px",
      },
      boxShadow: {
        custom: '0px 1px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      colors:{
        primary:{
          default:"#2C5E9D",
          secondary:"#2C89FF",
          accent:"#5A769B"
        },
        accent:{
          default:"#939393",
          secondary:"#2D425D"
        },
        color:"#4D4D4D"
      },
      fontFamily: {
        'istok': ['Istok Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

