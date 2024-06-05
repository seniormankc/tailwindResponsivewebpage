/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*.js'],
  theme: {
       extend: {
         keyframes: {
          bounce: {
            '0%':  {transform: 'scaleY(0)' },
            '80%':  {transform: 'scaleY(1.1)' },
            '100%':  {transform: 'scaleY(1)' },
          },
         },
         animation: {
          'bounceo-off':'bounce 0.5s ease-in-out 1'
         },
       },
  },
  plugins:[],
}

