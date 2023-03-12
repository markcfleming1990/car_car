module.exports = {
  important: true,
  content: [
    "/public/*.html",
    "./src/components/**/*.{jsx,js}",
    "./src/pages/**/*.{jsx,js}",
    "./src/App.js.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0C2340",
        gold: "#C99700",
        green: "#00843D",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      // Add support for the appearance property
      appearance: ["responsive"],

      // Add support for the -webkit-font-smoothing property
      webkitFontSmoothing: ["responsive", "hover"],
      mozOsxFontSmoothing: ["responsive", "hover"],
    },
  },
  variants: {
    // Add variants for the appearance and -webkit-font-smoothing properties
    appearance: ["responsive"],
    webkitFontSmoothing: ["responsive", "hover"],
    mozOsxFontSmoothing: ["responsive", "hover"],
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),

    // Generate the new utility classes for -webkit-font-smoothing
    function ({ addUtilities }) {
      const newUtilities = {
        ".antialiased": {
          webkitFontSmoothing: "antialiased",
          mozOsxFontSmoothing: "grayscale",
        },
        ".subpixel-antialiased": {
          webkitFontSmoothing: "subpixel-antialiased",
          mozOsxFontSmoothing: "auto",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
