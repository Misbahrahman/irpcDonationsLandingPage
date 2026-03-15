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
          DEFAULT: '#1E4ED8',
          blue: '#1E4ED8',
        },
        secondary: {
          DEFAULT: '#3B82F6',
          blue: '#3B82F6',
        },
        background: '#F7FAFF',
        text: '#0F172A',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
