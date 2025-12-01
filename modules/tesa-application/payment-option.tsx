// Example: PaymentOptions.tsx
"use client"
import { PaymentCard } from "@/components/shared/payment-card";
import NiceModal from "@ebay/nice-modal-react";
import { ModalConstant } from "@/components/modals/register";


export default function PaymentOptions() {
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
        buttonAction={() => NiceModal.show(ModalConstant.PaymentModal)}
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
        buttonLabel="Choose 12-Month Plan"
        highlighted
      />

      <PaymentCard
        title="Loan Option"
        price="Flexible"
        inactive={true}
        description="Finance through partner lenders."
        details={[
          "Coming soon",
          // "Approval under 24 hours",
          // "Interest based on lender",
        ]}
        buttonLabel="Apply for Loan"
      />

    </div>
  );
}
