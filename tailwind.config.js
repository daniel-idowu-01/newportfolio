/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1000px",
      xl: "1111px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // core palette — warm ink & phosphor amber
      ink: "hsl(26, 18%, 6%)",
      surface: "hsl(26, 14%, 9%)",
      line: "hsl(30, 12%, 17%)",
      bone: "hsl(37, 31%, 88%)",
      dim: "hsl(33, 10%, 62%)",
      amber: "hsl(36, 97%, 58%)",
      ember: "hsl(22, 92%, 54%)",
      moss: "hsl(140, 40%, 52%)",
      // legacy aliases (kept so any stray class stays on-theme)
      body: "hsl(26, 18%, 6%)",
      white: "hsl(37, 31%, 92%)",
      text: "hsl(37, 20%, 80%)",
      text_Light: "hsla(33, 10%, 62%, 0.95)",
      buttonBg: "hsl(26, 14%, 12%)",
      cyan: "hsl(36, 97%, 58%)",
      cyan_dark: "hsla(36, 97%, 58%, 0.35)",
      veryDark: "hsl(26, 20%, 4%)",
      gray: "hsl(28, 12%, 14%)",
    },
    fontFamily: {
      serif: ["var(--font-serif)", "Georgia", "serif"],
      mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      // legacy alias
      pop: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
    },
    extend: {
      letterSpacing: {
        label: "0.18em",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 hsla(140, 40%, 52%, 0.5)" },
          "70%": { boxShadow: "0 0 0 6px hsla(140, 40%, 52%, 0)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "pulse-dot": "pulseDot 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
}
