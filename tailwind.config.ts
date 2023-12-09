import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mosk: ["var(--font-mosk)"],
      },
      screens: {
        "3xl": "1600px",
        "4xl": "2000px",
      },
      colors: {
        primary: {
          light: "#852EDC",
          base: "#7222C2",
          dark: "#52188B",
        },
        secondary: "#F7D460",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
