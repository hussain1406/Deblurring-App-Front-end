/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");
// eslint-disable-next-line no-undef
module.exports = withMT({
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
});
