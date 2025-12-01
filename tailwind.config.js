/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd57d",
        "primary-pressed": "#e9c06b",

        secondary: "#fff8f2",
        "secondary-button": "#f3dcb8",

        "bottom-bar": "#f8ece0",
        border: "#aca8a1",

        icon: "#342e28",
      },
    },
  },
  plugins: [],
};
