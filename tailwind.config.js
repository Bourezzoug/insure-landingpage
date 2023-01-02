/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'dark-violet' : 'hsl(256, 26%, 20%)',
      'grayish-blue' : 'hsl(216, 30%, 68%)',
      'very-dark-violet' : 'hsl(270, 9%, 17%)',
      'dark-grayish-violet' : 'hsl(273, 4%, 51%)',
      'light-gray' : 'hsl(0, 0%, 98%)',
      'white' : '#fff'
    },
    screens : {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    minHeight : {
      '10' : '10vh',
    },
  },
  plugins: [],
}