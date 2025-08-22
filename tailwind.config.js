/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#225A73",   // azul del logo
        accent:  "#F37021",   // naranja del logo
        ink:     "#1F2937",   // texto gris oscuro útil
        soft:    "#F9FAFB",   // gris muy claro de fondo
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
