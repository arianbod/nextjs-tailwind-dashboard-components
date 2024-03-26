/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#23255C',
        secondary: '#2E2E2E',
        pGreen: '#5CBF54',
        pBlue: '#51BAE7',
        pRed: '#FF5353',
        pWhite: '#FFFFFF',
        pLightBlue: '#DBEDF4',
        pLightGreen: '#DBF4DE',
        pGrey: '#6E6E6E',
        pOrange: '#E39735',
        pLightOrange: '#FEEDCD',
        pLightGrey: '#F6F6F6'
      }, fontFamily: { poppins: ['poppins'] },

    },
  },
  plugins: [],
};
