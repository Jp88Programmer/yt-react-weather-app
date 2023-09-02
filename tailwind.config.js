const plugin = require("tailwindcss/plugin");
// import plugin from "tailwindcss/plugin";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xd: "1200px",
      xl: "1440px",
    },
    fontSize: {
      sm: "12px",
      xs: "14px",
      base: "18px",
      md: "20px",
      h: "24px",
      lg: "2.5rem",
    },
    borderRadius: {
      none: "0",
      sm: "10px",
      DEFAULT: "20px",
      lg: "30px",
      full: "9999px",
    },
    extend: {
      maxWidth: {
        "1/2": "50%",
        md: "1400px",
      },
    },
  },
  plugins: [],
};
