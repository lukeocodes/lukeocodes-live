import { defineStore } from "pinia";

export const useDarkMode = defineStore("darkMode", {
  state: () => ({
    dark: null,
  }),
  getters: {
    isDark(state): boolean {
      return state.dark;
    },
    isNull(state): boolean {
      return state.dark === null;
    },
  },
  actions: {
    toggle() {
      this.dark = !this.dark;
    },
    setDark(dark: boolean) {
      this.dark = dark;
    },
  },
});
