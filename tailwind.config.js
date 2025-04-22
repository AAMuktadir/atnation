/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   buzz: {
      //     "0%, 100%": { transform: "translate(0, 0)" },
      //     "10%": { transform: "translate(-2px, -2px)" },
      //     "20%": { transform: "translate(2px, 2px)" },
      //     "30%": { transform: "translate(-3px, 1px)" },
      //     "40%": { transform: "translate(3px, -1px)" },
      //     "50%": { transform: "translate(-2px, 2px)" },
      //     "60%": { transform: "translate(2px, -2px)" },
      //     "70%": { transform: "translate(-1px, 3px)" },
      //     "80%": { transform: "translate(1px, -3px)" },
      //     "90%": { transform: "translate(-1px, 1px)" },
      //   },
      // },
      // animation: {
      //   buzz: "buzz 0.2s infinite",
      // },

      colors: {
        background: "#121212",
        footer: "#C606FF",
        whiteBG: "#F1F1F1",
        darkBG: "#1B1B1B",
      },
    },
  },
  plugins: [],
};
