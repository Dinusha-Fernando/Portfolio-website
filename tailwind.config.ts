import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: '#06060c',
        darkSurface: '#0c0c16',
        darkCard: '#121124',
        darkBorder: 'rgba(255, 255, 255, 0.08)',
        accent: {
          light: '#a78bfa',
          DEFAULT: '#7c3aed',
          dark: '#5b21b6',
          glow: 'rgba(124, 58, 237, 0.35)',
        },
        neon: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          emerald: '#10b981',
          rose: '#f43f5e',
          amber: '#f59e0b',
        },
        lightHover: '#f5f3ff',
        darkHover: '#1c1a35',
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        space: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        ovo: ["var(--font-ovo)", "serif"],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-glow': '0 0 35px -5px rgba(124, 58, 237, 0.3)',
        'neon-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'specular': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'border-beam': 'borderBeam 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderBeam: {
          '100%': { offsetDistance: '100%' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(124, 58, 237, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.05) 1px, transparent 1px)',
        'cyber-grid-dense': 'linear-gradient(to right, rgba(124, 58, 237, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.08) 1px, transparent 1px)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
