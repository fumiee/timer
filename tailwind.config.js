/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  purge: ["./src/**/*.{js,ts,tsx}"],
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
