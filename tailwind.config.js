/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "sky" : "#F2F9FB",
      "sky-blue": "#458BBC", 
      "rose": "#FDF3F9",
      "red": "#DF3F40",
      "brown": "#FAF6F3",
      "purple": "#800080",
      "light-purple": "#F2E5F2",
      "black": "#000",
      "white": "#fff",
      "gd-first": "#FA2B48",
      "gd-second": "#EE6A70"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

