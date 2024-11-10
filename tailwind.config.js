/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "black",
        accent : "#FEC800"
      },
      fontFamily: {
        vazirmatn: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
