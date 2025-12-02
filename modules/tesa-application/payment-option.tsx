"use client";
import { PaymentCard } from "@/components/shared/payment-card";
import NiceModal from "@ebay/nice-modal-react";
import { ModalConstant } from "@/components/modals/register";
import { usePayNowMutation } from "@/service/payment";
import { useProfileStore } from "@/store/profile";
import { toast } from "sonner";
import { ErrorHandler } from "@/service/httpClient/errorHandler";
import { useState } from "react";

export default function PaymentOptions() {
  const [payNow] = usePayNowMutation();
  const { email, firstName, lastName } = useProfileStore();

  // Local loading states for each plan
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handlePayNow = async (amount: string, plan: string) => {
    try {
      setLoadingPlan(plan);

      const res = await payNow({
        email,
        first_name: firstName,
        last_name: lastName,
        amount,
      }).unwrap();

      NiceModal.show(ModalConstant.PaymentModal, {
        accountName: res.data.accountName,
        accountNumber: res.data.accountNumber,
        amount,
        reference: res.data.reference,
      });
    } catch (error) {
      toast.error(ErrorHandler.extractMessage(error));
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 py-10 ">
      <PaymentCard
        title="Pay Now"
        price="₦1,000,000"
        description="One-time full payment."
        details={[
          "Instant activation",
          "No extra fees",
          "Full access immediately",
        ]}
        buttonLabel="Pay Now"
        isLoading={loadingPlan === "pay-now"}
        buttonAction={() => handlePayNow("100", "pay-now")}
      />

      <PaymentCard
        title="2-Month Installment"
        price="₦500,000 × 2 months"
        description="Split your payment across two months."
        details={[
          "50% upfront payment",
          "Remaining 50% next month",
          "Access after first payment",
        ]}
        buttonLabel="Choose 2-Month Plan"
        isLoading={loadingPlan === "2-month"}
        buttonAction={() => handlePayNow("500", "2-month")}
      />

      <PaymentCard
        title="12-Month Pay Later"
        price="₦83,000 / month"
        description="Spread payments across 1 year."
        details={[
          "Lowest monthly cost",
          "Interest may apply",
          "Access after first payment",
        ]}
        highlighted
        buttonLabel="Choose 12-Month Plan"
        isLoading={loadingPlan === "12-month"}
        buttonAction={() => handlePayNow("83000", "12-month")}
      />

      <PaymentCard
        title="Loan Option"
        price="Flexible"
        inactive
        description="Finance through partner lenders."
        details={["Coming soon"]}
        buttonLabel="Apply for Loan"
      />
    </div>
  );
}
