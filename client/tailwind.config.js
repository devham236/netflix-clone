/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "250px",
        md: "600px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
