module.exports = {
  purge: {
    enabled: false,
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
    ],
  },

  theme: {
    extend: {
      fontFamily: {
        metro: ["MetropolisRegular"],
        nunito: ["Nunito"],
      },
    },
  },
  variants: {},
  plugins: [],
};
