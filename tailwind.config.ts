import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#0866FF",
      transparent: "transparent",
      white: "#FFF",
      "primary-text": "#E4E6EB",
      "second-text": "#B0B3B8",
      "dark-primary": "#242526",
      "dark-second": "#18191a",
      "hover-primary": "rgb(255 255 255 / 0.1)",
      "hover-second": "rgb(255 255 255 / 0.2)",
      line: "#393a3b",
      devider: "#3E4042",
    },
    fontSize: {
      12: "12px",
      13: "13px",
    },
    screens: {
      sm: { max: "700px" },

      md: { min: "701px", max: "1023px" },
      // => @media (min-width: 701px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
export default config;
