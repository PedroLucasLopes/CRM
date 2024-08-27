/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "80rem",
        "sm-fit-container": "calc(100vw - 40%)",
        "md-fit-container": "calc(100vw - 20%)",
        "xl-fit-container": "calc(100vw - 5%)",
      },
      height: {
        0.01: "1px",
        128: "35.55rem",
        "fit-container": "calc(100vh - 8rem)",
        "sm-fit-container": "calc(100% - 20rem)",
        "md-fit-container": "calc(100% - 18rem)",
        "xl-fit-container": "calc(100% - 12rem)",
        "xl-fit-column": "calc(100% - 2.5rem)",
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
        midorange: "#DB4A2B",
      },
      animation: {
        changeOpacity: "changeOpacity .5s ease-in-out",
        moveContainerRight: "moveContainerRight 1s ease-out",
        moveContainerLeft: "moveContainerLeft .7s ease-out",
        moveContainerUp: "moveContainerUp 1.5s ease-out",
        moveContainerDown: "moveContainerDown .4s ease-out",
        moveContainerDown100: "moveContainerDown .8s ease-out",
        moveContainerDown200: "moveContainerDown 1.2s ease-out",
        moveContainerDown300: "moveContainerDown 1.5s ease-out",
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
