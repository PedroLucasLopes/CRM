/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "80rem",
      },
      height: {
        128: "35.55rem",
      },
      borderColor: {
        midorange: "#DB4A2B",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      borderColor: ["focus", "disabled"],
      outline: ["focus"],
    },
  },
  plugins: [],
};
