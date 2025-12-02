import NiceModal from "@ebay/nice-modal-react";
import { PaymentModal } from "./paymentModal";
import { ConfirmModal } from "./success-modal";

export const ModalConstant = {
    PaymentModal:'PaymentModal',
    ConfirmModal:'ConfirmModal'
  };

const registerSheets = {
    [ModalConstant.PaymentModal]:PaymentModal,
    [ModalConstant.ConfirmModal]:ConfirmModal
}

Object.entries(registerSheets).forEach(([sheetId, SheetComponent]) => {
    NiceModal.register(sheetId, SheetComponent);
})

export {};

