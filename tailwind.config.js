/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ["EB Garamond", "sans-serif"],
        cafe: ["Dancing Script", "cursive"],
      },
      colors: {
        primary:"#704d32",
        secondary : "#6e523f",
        brandDark: "#38170f"
      },
      container: {
            center: true,
      padding: {
        default: "1rem",
        sm: "2rem"
      },
    },
    },
  },
  plugins: [],
}

