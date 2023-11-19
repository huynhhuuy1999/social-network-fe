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
      line: "#393a3b",
    },
  },
  plugins: [],
};
export default config;
