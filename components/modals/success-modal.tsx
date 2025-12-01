import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { create, useModal } from "@ebay/nice-modal-react";
  import { CheckCircle } from "lucide-react";
  
  export const SuccessModal = create(() => {
    const modal = useModal();
  
    return (
      <Dialog open={modal.visible}>
        <DialogContent className="sm:max-w-[360px] rounded-xl text-center" showCloseButton={false}>
          <DialogHeader>
            <div className="flex justify-center items-center flex-col mb-2">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
  
            <DialogTitle className="text-xl text-center font-semibold">
              Payment Confirmed 🎉
            </DialogTitle>
          </DialogHeader>
  
          <p className="text-sm text-muted-foreground mt-2 px-4">
            Thank you! Your payment has been received.  
            Your TESA application now awaits the next stage.
          </p>
  
          <DialogFooter className="mt-6 justify-center w-full">
            <Button
              className="px-6 bg-primary text-white w-full"
              onClick={() => modal.hide()}
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  });
  