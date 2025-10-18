import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f9',
          100: '#b3e6ed',
          200: '#80d5e0',
          300: '#4dc4d4',
          400: '#1ab3c8',
          500: '#0891b2',
          600: '#06748e',
          700: '#05576a',
          800: '#033a46',
          900: '#021d23',
        },
        accent: {
          orange: '#f97316',
          green: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

