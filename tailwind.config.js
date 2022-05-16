const colors = require("tailwindcss/colors");

module.exports = {
  //   purge: [
  //       './index.html',
  //       './src/**/*.{vue,js,ts,jsx,tsx}'
  //     ],
  content: [
    // Example content paths...
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Inter", "Sans-serif"],
    },
    extend: {
      colors: {
        primary: colors.purple[500],
        secondary: colors.purple[800]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
