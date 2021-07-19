const colors = require('tailwindcss/colors')

// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  purge: [],
  theme: {
    inset: {
      '0': 0,
      'auto': 'auto',
      '1/2': '50%',
      '60px': '60px'
    },
    minWidth: {
      '0': '0',
      'middle': '200px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      'container': '1700px'
    },
    width: {
      'middle': '400px',
      '1/3': '25%',
      '4': '1rem',
      '20': '5rem',
      '40': '12rem',
      'full': '100%',
    },
    height: {
      'box': "330px",
      '4/5': "80%",
      '7/10': "70%"
    },
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        pink: colors.fuchsia,
      },
    },
  },
  variants: {},
  plugins: [],
}