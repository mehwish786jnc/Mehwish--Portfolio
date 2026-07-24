/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue:   "rgb(var(--brand-blue) / <alpha-value>)",
          purple: "rgb(var(--brand-purple) / <alpha-value>)",
          teal:   "rgb(var(--brand-teal) / <alpha-value>)",
        },
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, rgb(var(--brand-blue)) 0%, rgb(var(--brand-purple)) 50%, rgb(var(--brand-teal)) 100%)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        float: "float 6s infinite ease-in-out",
        "gradient-x": "gradient-x 6s ease infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 24s linear infinite",
      },
    },
  },
  plugins: [],
}

