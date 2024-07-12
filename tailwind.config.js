/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    borderColor:{
      'primary': 'rgb(40, 102, 247)',
      'secondary':'rgb(0,0,255)'
    },


    fontFamily:{'main-font':'Ubuntu'  }
  },
  plugins: [],
}

