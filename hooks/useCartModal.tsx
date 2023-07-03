import { create } from "zustand";

interface CartModalStore {
  isOpen: boolean;
  isReload: number;
  onOpen: () => void;
  onClose: () => void;
  onLoad: () => void;
}
const useCartModal = create<CartModalStore>((set) => ({
  isReload: 0,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onLoad: () =>
    set({ isReload: Math.floor(Math.random() * (2020 - 1 + 1)) + 1 }),
}));

export default useCartModal;
