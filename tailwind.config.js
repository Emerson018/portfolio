/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0C22",
        secondary: "#0B0B0F",
        card: "#151550",
        accent: "#272835",
        border: "#44444A",
      }
    },
  },
  plugins: [],
}
