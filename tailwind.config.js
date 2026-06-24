/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Sans"', "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#1C2741",
          dark: "#131D2E",
          light: "#253354",
        },
        gold: {
          DEFAULT: "#C9A338",
          light: "#E8D5A0",
          dark: "#9E7F25",
        },
        cream: "#FAF7F0",
      },
    },
  },
  plugins: [],
}
