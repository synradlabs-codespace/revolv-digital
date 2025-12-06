import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0A392B",
          dark: "#06261D",
          light: "#10543F",
          tint: "#E8F2EE",
        },
        base: {
          white: "#F9FBFC",
        },
      },
      backgroundColor: {
        page: "#F9FBFC",
      },
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        display: ["Manrope Variable", "sans-serif"],
      },
      boxShadow: {
        soft: "0px 8px 32px rgba(10, 57, 43, 0.08)",
        medium: "0px 12px 40px rgba(10, 57, 43, 0.12)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0A392B 0%, #10543F 50%, #0A392B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
