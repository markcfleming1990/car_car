/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["/public/*.html", "./src/components/**/*.{jsx,js}"],
  theme: {
    colors: {
      blue: "#0C2340",
      gold: "#C99700",
      green: "#00843D",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
