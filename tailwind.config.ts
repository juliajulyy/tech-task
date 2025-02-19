import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        "primary-hover": "var(--primary-color-hover)",
        "french-gray": "var(--french-gray)",
        "cool-gray": "var(--cool-gray)",
      },
      fontFamily: {
        "proxima-nova": "var(--font-proxima-nova)",
      },
    },
  },
  plugins: [],
} satisfies Config;
