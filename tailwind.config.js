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
      textColor: {
        midorange: "#DB4A2B",
      },
      backgroundImage: {
        loginImage: "url('./src/assets/loginasset.svg')",
      },
      backgroundColor: {
        offwhite: "#F5F5F5",
        blanchedalmond: "#ffebcd",
      },
      animation: {
        changeOpacity: "changeOpacity .5s ease-in-out",
        moveContainerRight: "moveContainerRight 1s ease-out",
        moveContainerLeft: "moveContainerLeft .7s ease-out",
        moveContainerUp: "moveContainerUp 1.5s ease-out",
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
