/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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
  plugins: [],
}