import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F9FC",
        "paper-dark": "#0B1220",
        royal: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#7C8CF8",
          500: "#4C5CF0",
          600: "#3348E8",
          700: "#2A3AD6",
          800: "#1F2CA8",
          900: "#0B1E3D",
        },
        navy: {
          DEFAULT: "#0B1E3D",
          50: "#EBEEF4",
          100: "#D2D9E8",
          400: "#233A63",
          600: "#152A50",
          800: "#0B1E3D",
          900: "#060F1F",
        },
        ink: "#0F1A2E",
        mist: "#5B6B8C",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(at 20% 0%, rgba(76,92,240,0.14) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(11,30,61,0.10) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(76,92,240,0.08) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 20% 0%, rgba(76,92,240,0.25) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(124,140,248,0.15) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(76,92,240,0.12) 0px, transparent 50%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(11, 30, 61, 0.08)",
        "glass-lg": "0 20px 60px rgba(11, 30, 61, 0.12)",
        "glow-royal": "0 0 40px rgba(76, 92, 240, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(4deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
        marquee: "marquee 28s linear infinite",
        orbit: "orbit 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
