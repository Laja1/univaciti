import NiceModal from "@ebay/nice-modal-react";
import { PaymentModal } from "./paymentModal";
import { ConfirmModal } from "./confirm-modal";
import { SuccessModal } from "./success-modal";

export const ModalConstant = {
    PaymentModal:'PaymentModal',
    ConfirmModal:'ConfirmModal',
    SuccessModal:'SuccessModal'
  };

const registerSheets = {
    [ModalConstant.PaymentModal]:PaymentModal,
    [ModalConstant.ConfirmModal]:ConfirmModal,
    [ModalConstant.SuccessModal]:SuccessModal

}

Object.entries(registerSheets).forEach(([sheetId, SheetComponent]) => {
    NiceModal.register(sheetId, SheetComponent);
})

export {};

