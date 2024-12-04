/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      bleck: "#000",
      a4: "#9F9FA4",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },
  plugins: [],
};
