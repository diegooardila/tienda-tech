import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070a11",
        surface: "#0f172a",
        surface2: "#1e293b",
        paper: "#f1f5f9",
        magenta: "#0284c7", // Cobalt Cyber Cyan
        violet: "#2563eb",  // Electric Royal Blue
        lime: "#10b981",    // Neon Emerald
        amber: "#f59e0b",   // Metallic Gold
        muted: "#94a3b8",   // Slate Neutral
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "glow-magenta":
          "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(2,132,199,0.18), transparent 60%)",
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 12px 40px rgba(2,132,199,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
