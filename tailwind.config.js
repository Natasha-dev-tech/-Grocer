/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          'iconcolor':"#00B2EA",
          'menucolor':"#000000",
        },
      backgroundImage:{

        'banner': "url('./src/assets/banner.png')",
      }
    },
  },
  plugins: [],
}

