/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
       kumbh: ["Kumbh-Sans","sans-serif"]
      }
    },
  },
  plugins: [],
};

