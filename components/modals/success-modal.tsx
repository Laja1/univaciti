import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NiceModal, { create, useModal } from "@ebay/nice-modal-react";
import { ModalConstant } from "./register";
import { ErrorHandler } from "@/service/httpClient/errorHandler";
import { toast } from "sonner";
import { usePaymentStatusMutation } from "@/service/payment";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import loadingAnim from "@/public/animation/loading.json";
import confettiAnim from "@/public/animation/confetti.json";
import errorAnim from "@/public/animation/loading.json";

export const ConfirmModal = create(() => {
  const modal = useModal();
  const [paymentStatus, { isLoading }] = usePaymentStatusMutation();

  const { status, reference, email } = modal.args as {
    status: "pending" | "complete" | "partial";
    reference: string;
    email: string;
  };

  // Polling state
  const [tries, setTries] = useState(0);
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const pollPayment = async () => {
    try {
      const res = await paymentStatus({ email, reference }).unwrap();

      if (res?.data?.status !== status) {
        // Stop polling when status changes
        pollingRef.current && clearInterval(pollingRef.current);

        NiceModal.show(ModalConstant.ConfirmModal, {
          status: res?.data?.status,
          reference,
          email,
        });
      }

      setTries((prev) => prev + 1);
    } catch (error) {
      toast.error(ErrorHandler.extractMessage(error));
      setTries((prev) => prev + 1);
    }
  };

  // AUTO POLLING (3 seconds, max 5 tries)
  useEffect(() => {
    if (status === "complete") return; // Stop polling once complete

    pollingRef.current = setInterval(() => {
      if (tries >= 5) {
        clearInterval(pollingRef.current!);
        return;
      }
      pollPayment();
    }, 5000);

    return () => {
      pollingRef.current && clearInterval(pollingRef.current);
    };
  }, [tries, status]);

  const getAnimation = () => {
    if (status === "pending") return loadingAnim;
    if (status === "partial") return errorAnim;
    return confettiAnim;
  };

  const getTitle = () => {
    switch (status) {
      case "pending":
        return "Payment Pending ⏳";
      case "partial":
        return "Partial Payment Received ⚠️";
      case "complete":
      default:
        return "Payment Confirmed 🎉";
    }
  };

  const getMessage = () => {
    switch (status) {
      case "pending":
        return "Your payment is being verified. This may take a moment.";
      case "partial":
        return "Part of your payment was received. Please complete the remaining amount.";
      case "complete":
      default:
        return "Your payment is confirmed! Continue to the next stage.";
    }
  };

  if (status === "complete") {
    localStorage.clear();
  }

  return (
    <Dialog open={modal.visible} onOpenChange={(open) => !open && modal.hide()}>
      <DialogContent className="sm:max-w-[360px] rounded-xl text-center" showCloseButton={false}>
        <DialogHeader>
          <div className="flex justify-center items-center flex-col mb-2">
            <Lottie
              animationData={getAnimation()}
              loop={status !== "complete"}
              className="h-32 w-32"
            />
          </div>

          <DialogTitle className="text-xl font-semibold text-center">
            {getTitle()}
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground mt-2 px-4 text-center">
          {getMessage()}
        </p>

        {(status === "pending" || status === "partial") && (
          <Button
            loading={isLoading}
            className="bg-primary text-white w-full mt-4 disabled:opacity-40"
            onClick={() => pollPayment()}
          >
            Retry Payment
          </Button>
        )}

        {status === "complete" && (
          <DialogFooter className="mt-6 justify-center w-full">
            <Button className="px-6 bg-primary text-white w-full" onClick={() => modal.hide()}>
              Continue
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
});
