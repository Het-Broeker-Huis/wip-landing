import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Switzer, system-ui, sans-serif",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "swamp-green": {
          50: "#f4f5f0",
          100: "#e6e9de",
          200: "#ced6c0",
          300: "#a3b18a",
          400: "#93a279",
          500: "#75875b",
          600: "#5b6a46",
          700: "#475239",
          800: "#3b4331",
          900: "#343b2c",
          950: "#1a1e15",
        },
      },
    },
  },
  plugins: [],
};
