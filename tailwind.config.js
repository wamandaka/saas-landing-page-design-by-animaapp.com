/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFDF90",

          secondary: "#BFAFF2",

          accent: "#fa7000",

          neutral: "#032e23",

          "base-100": "#2B2B2B",

          info: "#0089c6",

          success: "#009249",

          warning: "#e48800",

          error: "#c9002d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
