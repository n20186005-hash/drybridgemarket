import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: "#b8860b",
        "light-bg": "#ffffff",
        "dark-bg": "#0a0a0a",
        "light-text": "#111827",
        "dark-text": "#e5e5e5",
        "muted-light": "#6b7280",
        "muted-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#374151",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
