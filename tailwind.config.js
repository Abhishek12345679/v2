/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#0f0d0c",
        },
        secondary: {
          main: "#262626",
        },
      },
    },
  },
  plugins: [],
  mode: "jit",
};
