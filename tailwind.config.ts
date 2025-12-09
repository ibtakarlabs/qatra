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
        maroon: {
          primary: '#8B1F23',     // Rich carpet maroon
          light: '#A65D63',       // Lighter maroon
          dark: '#4A0E12',        // Dark maroon/burgundy
        },
        navy: {
          carpet: '#1A2542',      // Navy from carpets
        },
        cream: {
          carpet: '#E8DCC8',      // Cream/beige from carpets
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
