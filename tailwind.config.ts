import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./types/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-navy)",
        teal: "var(--color-blue-green)",
        accent: "var(--color-orange)",
        ink: "var(--color-text)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        surface: "var(--color-surface)",
        soft: "var(--color-soft)"
      },
      boxShadow: {
        soft: "0 20px 48px rgba(8, 39, 68, 0.14)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
