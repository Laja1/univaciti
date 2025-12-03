import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { create, useModal } from "@ebay/nice-modal-react";
  import Lottie from "lottie-react";
  
  import { ModalConstant } from "./register";
  import confettiAnim from "@/public/animation/confetti.json";
  import { useProfileStore } from "@/store/profile";
  
  export const SuccessModal = create(() => {
    const modal = useModal(ModalConstant.SuccessModal);
    const { firstName } = useProfileStore();
  
    return (
      <Dialog
        open={modal.visible}
        onOpenChange={(open) => {
          if (!open) modal.hide();
        }}
      >
        <DialogContent
          className="sm:max-w-[360px] rounded-xl text-center"
          showCloseButton={false}
        >
          <DialogHeader>
            <div className="flex flex-col items-center justify-center mb-2">
              <Lottie animationData={confettiAnim} loop className="h-32 w-32" />
            </div>
  
            <DialogTitle className="text-base font-light text-center">
            Thank you for completing your application <span className="font-semibold">{firstName}</span>. We’re now reviewing your details and will update you shortly. 
            </DialogTitle>
          </DialogHeader>
  
         
  
          <DialogFooter className="mt-6 justify-center w-full">
            <Button
              className="w-full px-6 bg-primary text-white"
              onClick={() => modal.hide()}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  });
  