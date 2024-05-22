module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  theme: {
    extend: {
      fontFamily: { manrope: "Manrope" },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(+100%)" },
        },
      },
      backgroundImage: (theme) => ({
        "login-bg": "url('src/assets/images/login-image-small.jpg')",
        "register-bg": "url('src/assets/images/registration-image.jpg')",
      }),
    },
  },
  plugins: [],
};
