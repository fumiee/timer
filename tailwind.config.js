module.exports = {
  purge: ["./src/**/*.{js,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        startstop: "#D18181",
        startstoped: "#F9A8A8",
        pushed: "#E4C78C",
        footer: "#F1D9D9",
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
    extend: {
      backgroundColor: ["active"],
      maxHeight: ["focus"],
    },
  },
};
