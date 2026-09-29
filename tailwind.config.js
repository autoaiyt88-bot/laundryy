/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "#EFF6FF",
          dark: "#1E40AF",
        },
        secondary: {
          DEFAULT: "#38BDF8",
          light: "#E0F2FE",
        },
        background: "#F8FAFC",
        dark: "#0F172A",
        muted: "#64748B",
        success: "#22C55E",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 10px 30px -4px rgba(37, 99, 235, 0.12)",
      },
    },
  },
  plugins: [],
};
