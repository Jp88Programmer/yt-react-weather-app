// const plugin = require("tailwindcss/plugin");
// import plugin from "tailwindcss/plugin";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      sm:"12px",
      xs:"14px",
      base: "18px",
      h:"24px",
      lg: "2.5rem",
    },
    borderRadius: {
      none: "0",
      sm: "10px",
      DEFAULT: "20px",
      lg: "30px",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
