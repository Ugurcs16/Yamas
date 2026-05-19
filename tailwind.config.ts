import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0A0C0A",
          light: "#141810",
          dark: "#060806",
        },
        charcoal: {
          DEFAULT: "#0B0B0B",
          light: "#161412",
        },
        ivory: {
          DEFAULT: "#F8F1E7",
          warm: "#FDF8F0",
          muted: "#D4C9B8",
          dim: "#A89E8E",
        },
        champagne: {
          DEFAULT: "#C9A45C",
          light: "#E2C88A",
          dark: "#A88642",
        },
        bronze: {
          DEFAULT: "#8B6914",
          light: "#A67C3D",
          dark: "#5C4510",
        },
        olive: {
          DEFAULT: "#6F7D45",
          light: "#8A9A5A",
          dark: "#4A5530",
        },
        terracotta: {
          DEFAULT: "#B85C38",
          light: "#D4754F",
          dark: "#8F4528",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mediterranean-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A45C' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "stone-texture":
          "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")",
        "gold-gradient":
          "linear-gradient(135deg, #E2C88A 0%, #C9A45C 45%, #A88642 100%)",
        "warm-glow":
          "radial-gradient(ellipse 70% 55% at 40% 35%, rgba(201,164,92,0.22) 0%, rgba(184,92,56,0.06) 40%, transparent 70%)",
        "hospitality-wash":
          "linear-gradient(165deg, #0A0C0A 0%, #12100E 35%, #0F1210 70%, #0A0C0A 100%)",
      },
      boxShadow: {
        luxury: "0 40px 80px -20px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(201,164,92,0.06)",
        glass: "0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 0 60px rgba(201, 164, 92, 0.28)",
        "glow-sm": "0 0 28px rgba(201, 164, 92, 0.2)",
        "glow-warm": "0 8px 32px rgba(184, 92, 56, 0.15), 0 0 48px rgba(201, 164, 92, 0.12)",
        editorial: "0 24px 48px -12px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,164,92,0.12)",
      },
      animation: {
        "fade-up": "fadeUp 1s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 1.5s ease-in-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
