/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: "#7d7987",
        primary: "#458ff6",
        dark: "#1f1534",
      },
      fontFamily: {
        mulish: "Mulish",
      },
      fontSize: {
        // xl: "12px",
      },
      boxShadow: {
        sm: "10px 40px 50px rgba(229, 233, 246, 0.4)",
      },
    },
  },
  plugins: [],
};
