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
      boxShadow: {
        custom: "8px 8px 8px rgba(0, 255, 255, 0.6)",
        newcustom: "3px 3px 3px rgba(0, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
