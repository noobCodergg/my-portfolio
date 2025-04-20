/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundColor: {
        navbg: "#270D15",
        herobg: "#0F0F0F",
        socialbg: "#1E1E1E",
        servicebg: "#060606",
      },
      backgroundImage: {
        gradiant1: 'linear-gradient(70deg, #161414, #750C2D)',
      },
      colors: {
        text1: "#FF014F",
      },
      borderWidth: {
        '0.5': "0.5px",
      },
    },
  },
  plugins: [],
}
