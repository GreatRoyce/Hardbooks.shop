/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#EAE7E7",
        inverted: "#313030",
        primary: "#765A10",
        tertiary: "#78350F",
        offwhite: "#EAE7E7",
        headline: "#1B1B1B",
        body: "#4D4638",
      },
      fontFamily: {
        code: ['"Google Sans Code"', "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "20px", // largest as requested
      },
    },
  },
  plugins: [],
};
