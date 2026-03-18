import { create } from "zustand";

interface ModalState {
  isFormOpen: boolean;
  isContactOpen: boolean;
  openFormModal: () => void;
  closeFormModal: () => void;
  openContactModal: () => void;
  closeContactModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isFormOpen: false,
  isContactOpen: false,
  openFormModal: () => set({ isFormOpen: true }),
  closeFormModal: () => set({ isFormOpen: false }),
  openContactModal: () => set({ isContactOpen: true }),
  closeContactModal: () => set({ isContactOpen: false }),
}));
