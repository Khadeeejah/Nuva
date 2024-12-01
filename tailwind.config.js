/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#8E7AFC",
          100: "#AFA0FD",
          200: "#BBAFFD",
        },

        black: {
          50: "#1A1A1A",
          100: "#1C1C1C",
          200: "#212121",
          300: "#2B2B2B",
          400: "#3F3F3F",
        },
        neutral: {
          50: "#F4F4F4",
          100: "#CCCCCC",
          200: "#9F9F9F",
          300: "#8F8F8F",
          400: "#5F5F5F",
        },
      },
      backgroundImage: {
        "neutral-gradient":
          "linear-gradient(135deg, #3f3f3f 100%, #2b2b2b 50%)",
      },
      boxShadow: {
        neutral: "0px 20px 40px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
