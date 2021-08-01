module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],

  theme: {
    colors: {
      pink: "#D18181",
    },
    borderRadius: {
      DEFAULT: "50px",
    },
    borderColor: {
      DEFAULT: "rgba(204, 187, 155, 0.48)",
    },
    fontFamily: {
      base: ["NagomiGokubosoGothic-ExtraLight", "AppleGothic", "Candara"],
    },
  },
};
