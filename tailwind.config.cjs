/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Añadir color de las web, dentro de theme
    colors: {
      web: {
        boton: "#56B6CB",
        fondo: "#C9D5E0",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
    },

    extend: {
      fontFamily: {
        bodyFont: ["Bluetea Regular", "cursive"],
      }
    },
  },
  plugins: [],
};
