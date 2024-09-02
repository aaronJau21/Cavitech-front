/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09BE8B",
        secundary: "#103E3D",
        tercero: "#1E2738",
        fondo: "#1E2738",
      },
    },
  },
  plugins: [],
};
