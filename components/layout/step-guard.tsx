import { useEffect } from "react";
import { useStepper } from "@/store/stepper";

export default function StepGuard({ children }: { children: React.ReactNode }) {
  const { setStep } = useStepper();

  useEffect(() => {
    const token = localStorage.getItem("profile-storage");

    if (token) {
      // user has started before, skip to step 5
      setStep(5);
    }
  }, [setStep,]);

  return <>{children}</>;
}
