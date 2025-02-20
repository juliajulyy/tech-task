import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "headline-large": ["48px", { lineHeight: "56px" }],
        "headline-medium": ["32px", { lineHeight: "45px" }],
        "headline-small": ["24px", { lineHeight: "32px" }],
        "title-large": ["24px", { lineHeight: "40px" }],
        "title-medium": ["20px", { lineHeight: "32px" }],
        "title-small": ["18px", { lineHeight: "28px" }],
        "label-large": ["20px", { lineHeight: "28px" }],
        "label-medium": ["16px", { lineHeight: "24px" }],
        "label-small": ["14px", { lineHeight: "20px" }],
        "body-large": ["16px", { lineHeight: "24px" }],
        "body-medium": ["14px", { lineHeight: "20px" }],
        "body-small": ["12px", { lineHeight: "16px" }],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)",
        "primary-active": "var(--primary-active-color)",
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
