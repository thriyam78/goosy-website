/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        105: "1.05",
        110: "1.10",
        100: "1.00",
        115: "1.15",
      },
    },
  },
  plugins: [],
};
