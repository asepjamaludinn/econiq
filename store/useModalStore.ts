import { create } from "zustand";

interface FormErrors {
  name?: string;
  email?: string;
}

interface ModalState {
  isFormOpen: boolean;
  isContactOpen: boolean;
  formErrors: FormErrors;
  openFormModal: () => void;
  closeFormModal: () => void;
  openContactModal: () => void;
  closeContactModal: () => void;
  setFormErrors: (errors: FormErrors) => void;
  clearFormErrors: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isFormOpen: false,
  isContactOpen: false,
  formErrors: {},
  openFormModal: () => set({ isFormOpen: true, formErrors: {} }),
  closeFormModal: () => set({ isFormOpen: false, formErrors: {} }),
  openContactModal: () => set({ isContactOpen: true }),
  closeContactModal: () => set({ isContactOpen: false }),
  setFormErrors: (errors) => set({ formErrors: errors }),
  clearFormErrors: () => set({ formErrors: {} }),
}));
