import { defineStore } from "pinia";

export const useDarkMode = defineStore("darkMode", {
  state: () => ({
    dark: false as boolean,
  }),
  getters: {
    isDark(state): boolean {
      return state.dark;
    },
  },
});
