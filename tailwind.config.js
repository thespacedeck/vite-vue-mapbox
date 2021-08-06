const theme = require("@trooptravel/tt-ui-comp-lib/src/themes/default");
module.exports = {
  mode: "jit",
  purge: {
    enabled: false, //process.env.NODE_ENV === "production",
    content: [
      "./index.html",
      "./src/**/*.{vue,ts}",
      "./node_modules/@trooptravel/tt-ui-comp-lib/src/themes/default/safelist.txt",
    ],
    options: {
      safelist: [/tt-/],
    },
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      ...theme,
      colors: {
        ...theme.colors,
        "red-main": "#FC260C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    // require("@trooptravel/tt-ui-comp-lib/themes/default"),
  ],
};
