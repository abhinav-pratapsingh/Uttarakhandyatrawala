import forms from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "on-primary": "#ffffff", "primary": "#000f22", "primary-container": "#0a2540",
        "primary-fixed": "#d2e4ff", "primary-fixed-dim": "#b0c8eb",
        "secondary": "#006398", "secondary-fixed": "#cce5ff",
        "surface": "#faf8ff", "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3ff", "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "on-surface": "#131b2e", "on-surface-variant": "#43474d",
        "outline-variant": "#c4c6ce",
      },
      spacing: { margin: "1rem" },
      fontFamily: {
        "headline-sm": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "body-md": ["Inter"],
      },
      fontSize: {
        "headline-sm": ["1.25rem", { lineHeight: "1.625rem", fontWeight: "600" }],
        "headline-lg-mobile": ["1.625rem", { lineHeight: "2rem", letterSpacing: "-0.015em", fontWeight: "600" }],
        "body-md": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
      },
    },
  },
  plugins: [forms],
};
