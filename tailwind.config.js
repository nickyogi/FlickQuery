/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "ssss" : "20px",
      "sss" : "320px",
      "ss" : "375px",
      "bb" : "425px",
      "tb" : "540px",
      "sm" : "640px",
      "md" : "850px",
      "lg" : "1024px",
      "xl" : "1280px",
      "2xl" : "1536px",
    },
    extend: {},
  },
  plugins: [],
}

