module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}",],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#fdfdfd" },
        gray: { 200: "#e9e9e9", "500_02": "#a5a5a5" },
        black: { 900: "#0c0c0c", "900_01": "#000000" },
      },
      boxShadow: {},
      fontFamily: { manrope: "Manrope" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
