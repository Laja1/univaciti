"use client"
import { Button } from "@/components/ui/button";
import { QucoonLogo } from "@/public/svgs/qucoon-logo";
import { useStepper } from "@/store/stepper";
import { ArrowRight, InfoIcon } from "lucide-react";

export const Index = () => {
  const { setStep } = useStepper();

  return (
    <div className="items-center px-5 text-center w-full h-screen font-geist  flex flex-col justify-center gap-4">
      <div className="max-w-2xl flex flex-col items-center gap-5">
        <QucoonLogo />
        <h2 className="font-bold text-2xl">
          Qucoon Tech <br />
          Skills Accelerator Program
        </h2>
        <p>
          Qucoon Tech Academy&apos;s 3-month skilll accelerator program
          fast-tracks your tech career with hands-on training, real-world
          projects, and internship opportunities.
        </p>
        <div className="border-dashed  bg-[#EFF6FF] border-[#60A6FA] text-sm items-center gap-1 md:gap-2  flex border text-[#2536eb] rounded-xl p-2">
          <InfoIcon size={16} />
          <p className="text-xs ">
            This program requires physical presence in Lagos, Nigeria
          </p>
        </div>
        <Button suffixIcon={<ArrowRight />} onClick={() => setStep(1)}>
          Start Application
        </Button>
      </div>
    </div>
  );
};
