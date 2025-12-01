import NiceModal from "@ebay/nice-modal-react";
import { PaymentModal } from "./paymentModal";
import { SuccessModal } from "./success-modal";

export const ModalConstant = {
    PaymentModal:'PaymentModal',
    SuccessModal:'SuccessModal'
  };

const registerSheets = {
    [ModalConstant.PaymentModal]:PaymentModal,
    [ModalConstant.SuccessModal]:SuccessModal
}

Object.entries(registerSheets).forEach(([sheetId, SheetComponent]) => {
    NiceModal.register(sheetId, SheetComponent);
})

export {};

