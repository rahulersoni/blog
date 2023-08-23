/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#ff4e6a',
        'secondary': '#12293e',
        'body': '#f8f8f8',
        'sub-menu': '#eeeeee',
        'light': '#ffe4e9',
        'commnets': '#0D9488',
        'commnets-light': '#F0FDFA',
      },
      boxShadow: {
        'primary-shadow': '0px 10px 40px 0px rgba(255, 78, 105.99999999999999, .4)',
        'secondary-shadow': '0px 10px 40px 0px rgba(18.00000000000001,41.00000000000007,62.00000000000007,.28)',
        'card': '0px 20px 80px 0px rgba(178.00000000000003, 188.00000000000003, 197.00000000000003, .46)',
        'sub-menu': '0 15px 50px 0 rgba(0,0,0, .16)',
        'input': 'inset 0 -1px 1px rgba(0,0,0,.075)',
        'card-hover': '0 20px 80px 0 rgba(178.00000000000003,188.00000000000003,197.00000000000003,.4)'
      },
      minWidth: {
        '150': '150px',
        '250': '250px',
        'half': '50%',
      },
      fontSize: {
        recommended: '9px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
