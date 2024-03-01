/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
          changa : ['Changa'],
          ArefRuqaa : ['Aref Ruqaa']
      }
    },
    colors:{
      'blue1':'#200E3A',
      'blue2':'#38419D',
      'blue3':'#3887BE',
      'blue4':'#52D3D8',
    }
  },
  plugins: [],
  darkMode:"class",
};

