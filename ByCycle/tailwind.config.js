module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}",],
  theme: {
    extend: {
      fontFamily: { manrope: "Manrope" },
      backgroundImage: theme => ({
        'register-bg': "url('src/assets/images/registration-image.jpg')",
      }),
    },
  },
  plugins: [],
}



