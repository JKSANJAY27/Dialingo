import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("dialingo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("dialingo-theme", theme);
    set({ theme });
  },
}));