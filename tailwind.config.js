/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        firebrick: "#c92a2a",
        orange: "#f99a0e",
        skyblue: "#99d2f5",
        whitesmoke: "#eaeaea",
      },
      fontFamily: {
        montserrat: "Montserrat",
        "components-button-large": "Roboto",
        comfortaa: "Comfortaa",
      },
    },
    fontSize: {
      mini: "15px",
      "17xl": "36px",
    },
    screens: {
      sm: {
        max: "428px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
