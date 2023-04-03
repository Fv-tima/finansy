/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        deepBlue: "hsl(197, 49%, 41%)",
        lgBlue: " hsl(198, 71%, 81%)",
        tintBlue: " hsl(198, 73%, 93%)",
        dRed: "hsl(0, 100%, 43%)",
        dBlack: "hsl(0, 0%, 12%)",
        lgBlack: "hsl(280, 1%, 50%)",
        dWhite: "hsl(0, 0%, 100%)",
        ash: " hsl(0, 0%, 82%)",
      },
    },
  },
  plugins: [],
};
