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
        primary: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f5a8b8',
          400: '#ee7791',
          500: '#e3486f',
          600: '#cf2c5c',
          700: '#af1e4a',
          800: '#921c43',
          900: '#7d1b3d',
          950: '#460a1e',
        },
        wine: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#fad5d2',
          300: '#f5b5af',
          400: '#ed8883',
          500: '#e1635b',
          600: '#cc443a',
          700: '#ab3630',
          800: '#8d302b',
          900: '#752d29',
          950: '#3f1311',
        },
        cream: {
          50: '#fdfcf8',
          100: '#faf7ed',
          200: '#f4ecd2',
          300: '#ebddad',
          400: '#dfc67f',
          500: '#d4ae5f',
          600: '#c69449',
          700: '#a6763d',
          800: '#895e37',
          900: '#724e30',
          950: '#3e2718',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
