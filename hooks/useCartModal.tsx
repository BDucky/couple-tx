import { create } from "zustand";

interface CartModalStore {
  cartQuantity: number;
  isOpen: boolean;
  isReload: number;
  onOpen: () => void;
  onClose: () => void;
  onLoad: () => void;
  setCart: (value: number) => void;
}
const useCartModal = create<CartModalStore>((set) => ({
  cartQuantity: 0,
  isReload: 0,
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setCart: (value: number) => set({ cartQuantity: value }),
  onLoad: () =>
    set({ isReload: Math.floor(Math.random() * (2020 - 1 + 1)) + 1 }),
}));

export default useCartModal;
