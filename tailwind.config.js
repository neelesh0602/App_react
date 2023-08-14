/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orange: "#f99a0e",
        skyblue: "#99d2f5",
        whitesmoke: "#eaeaea",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        firebrick: "#c92a2a",
        black: "#000",
      },
      fontFamily: {
        "components-button-large": "Roboto",
        montserrat: "Montserrat",
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
