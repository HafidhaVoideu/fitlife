/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        blackfogra_1: "hsla(210, 26%, 11%, 0.5)",
        blackfogra_2: "hsl(210, 26%, 11%)",
        blackfogra_3: "hsl(210, 50%, 4%)",
        silvermetallic: "hsl(212, 9%, 67%)",
        coquelicot_1: "hsla(12, 98%, 52%, 0.2)",
        coquelicot_2: "hsla(12, 98%, 52%, 0.1)",
        sonicsilver: " hsl(0, 0%, 47%)",
        cadetgray: "hsl(214, 15%, 62%)",
        lightgray: "hsl(0, 0%, 80%)",
        coquelicot: "hsl(12, 98%, 52%)",
        gainsboro: "hsl(0, 0%, 88%)",
        white: "hsl(0, 0%, 100%)",
        white_1: "hsla(0, 0%, 100%, 0.2)",
        white_2: "hsla(0, 0%, 100%, 0.1)",
        black: "hsla(0, 0%, 0%, 0.1)",
        overlay: "rgba(0, 0%, 0%, 0.9)",
      },

      fontFamily: {
        primary: ["Rubik", "sans-serif"],
        secondary: ["Catamaran", "sans-serif"],
      },

      backgroundImage: {
        "hero-bg": "url('./assets/hero-bg.png')",
        "footer-bg": "url('./assets/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
