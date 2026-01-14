/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B0606",
        secondary: "#F3E2D5",
        footer: "#DFBFA8",
        white: "#FFFFFF",
      },
      fontFamily: {
        inet: ["Inter", "sans-serif"],
        abhaya: ["Abhaya Libre", "serif"],
        imperial: ["Imperial Script", "regular"],
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
}
