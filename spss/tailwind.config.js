import { plugin } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mygray: "#999999",
        "light-mygray": "#EEEEEE",
        myblue: "#1488DB",
        "light-myblue": "#6DB9EF",
        "dark-myblue": "#032B91",
        green: "#14FF00",
        myred: "#FF0000",
        "light-yellow": "#F2EEE5",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
