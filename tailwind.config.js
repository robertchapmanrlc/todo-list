/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebfafa",
          100: "#d6f5f5",
          200: "#aeeaea",
          300: "#85e0e0",
          400: "#5dd5d5",
          500: "#34cbcb",
          600: "#2aa2a2",
          700: "#1f7a7a",
          800: "#155151",
          900: "#0a2929",
          950: "#051414",
        },
        secondary: {
          50: "#e8fcfc",
          100: "#d2f9f9",
          200: "#a5f3f3",
          300: "#78eded",
          400: "#4ae8e8",
          500: "#1de2e2",
          600: "#17b5b5",
          700: "#128787",
          800: "#0c5a5a",
          900: "#062d2d",
          950: "#031717",
        },
        accent: {
          50: "#e6fefe",
          100: "#cdfefe",
          200: "#9cfcfc",
          300: "#6afbfb",
          400: "#38fafa",
          500: "#06f9f9",
          600: "#05c7c7",
          700: "#049595",
          800: "#036363",
          900: "#013232",
          950: "#011919",
        },
      },
    },
  },
  plugins: [],
};

