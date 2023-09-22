/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        red:"#5df354"
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        '.content-auto' : {
          'content-visibility' : 'auto',
        },
        '.content-hidden':{
          'content-visibility' : 'hidden',
        },
        '.content-visible':{
          'content-visibility' : 'visible'
        }
      })
    })
  ],
}
