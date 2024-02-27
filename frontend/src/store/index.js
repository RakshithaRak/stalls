import { create } from "zustand";

export default create((set) => ({
  isScrolled: false,
  setIsScrolled: (state) => set(() => ({ isScrolled: state })),
}));
