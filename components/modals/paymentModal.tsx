import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import NiceModal, { create, useModal } from "@ebay/nice-modal-react";
  
  import { ModalConstant } from "./register";
  import { useState } from "react";
  
  export const PaymentModal = create(() => {
    const modal = useModal(ModalConstant.PaymentModal);
    const row = modal.args;
  
    const [confirmed, setConfirmed] = useState(false);
  
    return (
      <Dialog open={modal.visible}>
        <DialogContent className="sm:max-w-[420px] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Payment Instructions
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Please send the payment using the details below.
            </p>
          </DialogHeader>
  
          <div className="space-y-4 mt-4">
            {/* PAYMENT INFO BOX */}
            <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
              <Item label="Account Name" value="John Doe" />
              <Item label="Account Number" value="1234567890" />
              <Item label="Bank" value="Bank of America" />
              <Item label="Amount" value="₦120,000" />
              <Item label="Payment Method" value="Bank Transfer" />
            </div>
  
            {/* TOGGLE BUTTON */}
            <div
              onClick={() => setConfirmed(!confirmed)}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition
                ${confirmed ? "bg-primary/10 border-primary" : "hover:bg-muted/40"}
              `}
            >
              <div className="h-5 w-5 border rounded-md flex items-center justify-center">
                {confirmed && <div className="h-3 w-3 bg-primary rounded-sm" />}
              </div>
              <p className="text-sm">I have made the payment</p>
            </div>
          </div>
  
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => modal.hide()}>
              Close
            </Button>
  
            <Button
              disabled={!confirmed}
              className="bg-primary text-white disabled:opacity-40"
              onClick={() => {
                // handle submit action here
                modal.hide();
                NiceModal.show(ModalConstant.SuccessModal);
              }}
            >
              Confirm Payment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  });
  
  // SMALL SUB-COMPONENT FOR CLEAN DISPLAY
  const Item = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
  