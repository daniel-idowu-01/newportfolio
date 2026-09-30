/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        coal: "#161616",
        canvas: "#faf9f5",
        "c-blue": "#5fbee6",
        "c-yellow": "#e3a92f",
        "c-pink": "#d8365d",
        "c-green": "#5fb57f",
        "c-mint": "#a6d9bb",
        "c-cream": "#efdca4",
      },
      fontFamily: {
        sans: ["var(--font-body)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-mono-base)", "ui-monospace", "monospace"],
        hand: ["var(--font-hand)", "cursive"],
        pixel: ["var(--font-pixel)", "monospace"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "roll-360": { to: { transform: "rotate(360deg)" } },
        "status-pulse": { "0%,100%": { opacity: "1" }, "50%": { opacity: ".2" } },
        wiggle: {
          "0%,100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "float-y": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pill-drift-a": {
          "0%,100%": { transform: "translateY(0) rotate(-14deg)" },
          "50%": { transform: "translateY(48px) rotate(1deg)" },
        },
        "pill-drift-b": {
          "0%,100%": { transform: "translateY(0) rotate(9deg)" },
          "50%": { transform: "translateY(-42px) rotate(-3deg)" },
        },
        "arrow-through": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up .6s cubic-bezier(.16,1,.3,1) both",
        "roll-360": "roll-360 6s linear infinite",
        "status-pulse": "status-pulse 1.6s ease-in-out infinite",
        wiggle: "wiggle 3.2s ease-in-out infinite",
        float: "float-y 4s ease-in-out infinite",
        "pill-a": "pill-drift-a 7s ease-in-out infinite",
        "pill-b": "pill-drift-b 8s ease-in-out infinite",
        "arrow-through": "arrow-through .55s linear infinite paused",
      },
    },
  },
  plugins: [],
}
