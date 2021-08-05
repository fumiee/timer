module.exports = {
  purge: ["./src/**/*.{js,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        base: ["Kiwi Maru"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
