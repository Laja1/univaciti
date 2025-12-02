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
import { usePaymentStatusMutation } from "@/service/payment";
import { useProfileStore } from "@/store/profile";
import { toast } from "sonner";
import { ErrorHandler } from "@/service/httpClient/errorHandler";
  type paymentType = {
    accountName:string
    accountNumber:string
    amount:string
    reference:string
  }

  export const PaymentModal = create<paymentType>(() => {
    const modal = useModal(ModalConstant.PaymentModal);
    const {email} = useProfileStore()
    const { accountName, accountNumber, amount,reference } = modal.args as paymentType;
    const [paymentStatus,{isLoading}] = usePaymentStatusMutation()
    const [confirmed, setConfirmed] = useState(false);
    const handleCheckStatus = async()=>{
    try{
      const res = await paymentStatus({email:email,reference:reference}).unwrap()
      toast.success(res?.message)
    
     NiceModal.show(ModalConstant.ConfirmModal,{
      status:res?.data?.status,
      email:email,
      reference:reference
    })      
    }
    catch(error){
      toast.error(ErrorHandler.extractMessage(error))
    }
    }
    return (
      <Dialog open={modal.visible} >
        <DialogContent showCloseButton={false} className="sm:max-w-[420px] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Payment Instructions
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              Please send the payment using the details below.
            </p>
          </DialogHeader>
  
          <div className="space-y-4 mt-4">
            <div className="rounded-lg border bg-muted/30 p-4 space-y-3">
              <Item label="Account Name" value={accountName} />
              <Item label="Account Number" value={accountNumber} />
              <Item label="Amount" value={`₦${amount}`} />
              <Item label="Payment Method" value="Bank Transfer" />
            </div>
  
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
              loading={isLoading}
              className="bg-primary text-white disabled:opacity-40"
              onClick={() => {
                modal.hide();
               handleCheckStatus()
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
  