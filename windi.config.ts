import typography from "windicss/plugin/typography";
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  darkMode: "class",
  plugins: [
    typography({
      dark: true,
    }),
  ],
  theme: {
    extend: {
      colors: {
        twitter: "#1DA1F2",
        github: "#181717",
        polywork: "#543DE0",
      },
    },
  },
});
