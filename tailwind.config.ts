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
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#0b0118',
        accent: {
          light: '#7c3aed',
          DEFAULT: '#6d28d9',
          dark: '#5b21b6',
        },
        muted: {
          light: '#f1f5f9',
          DEFAULT: '#94a3b8',
          dark: '#1e293b',
        }
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "serif"]
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'accent': '0 0 20px rgba(109, 40, 217, 0.3)',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit,minmax(200px,1fr))'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
} satisfies Config;
