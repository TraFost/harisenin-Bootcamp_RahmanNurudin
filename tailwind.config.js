/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      spacing: {
        "card-width-1": "600px",
      },
      flex: {
        container: "flex-col justify-center items-center",
      },
    },
  },
  plugins: [require("daisyui")],
};
