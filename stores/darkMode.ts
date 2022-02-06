import { defineStore } from "pinia";

export const useDarkMode = defineStore("darkMode", {
  state: () => ({
    dark: true as boolean,
  }),
  getters: {
    isDark(state): boolean {
      return state.dark;
    },
  },
  actions: {
    toggle() {
      this.dark = !this.dark;
    },
  },
});
