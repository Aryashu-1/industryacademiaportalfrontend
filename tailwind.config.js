/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  
    "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        
        // Define other custom fonts as needed
      },
      colors: {
        'navy-blue': '#003366',
        'slate-gray': '#708090',
        'teal': '#008080',
        'light-gray': '#D3D3D3',
        'sky-blue': '#87CEEB',
        'amber': '#FFBF00',
        'forest-green': '#228B22',
        'zoop':"#38bdf8",
        'open':"#1da042",
        'gray': {
          '300': '#b0b0b0',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      dropShadow: {
        '3xl': '0 6px 2px rgba(0, 0, 10, 0.25)'
      },
      boxShadow: {
        '3xl': '2px 2px 2px rgba(10, 10, 10, 0.55 )'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-out 1',
      },
      
       
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.outfit-100': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 100,
          fontStyle: 'normal',
        },
        '.outfit-200': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 200,
          fontStyle: 'normal',
        },
        '.outfit-300': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 300,
          fontStyle: 'normal',
        },
        '.outfit-400': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 400,
          fontStyle: 'normal',
        },
        '.outfit-500': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 500,
          fontStyle: 'normal',
        },
        '.outfit-600': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 600,
          fontStyle: 'normal',
        },
        '.outfit-700': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 700,
          fontStyle: 'normal',
        },
        '.outfit-800': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 800,
          fontStyle: 'normal',
        },
        '.outfit-900': {
          fontFamily: '"Outfit", sans-serif',
          fontOpticalSizing: 'auto',
          fontWeight: 900,
          fontStyle: 'normal',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}