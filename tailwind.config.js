/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-primary": "#C2B3A5",
      "bg-card": "#FFFFFF",
      "text-primary": "#323232",
      "text-secondary": "#FFFFFF",
      "like-icon": "#B20000",
    },
    extend: {
      fontSize: {
        h1: "clamp(2.25rem, 0.8361rem + 6.0328vw, 8rem)",
        hero_p: "clamp(0.75rem, 0.4426rem + 1.3115vw, 2rem)",
      },
    },
  },
  plugins: [require("daisyui")],
};
