"use client";

import { QucoonLogo } from "@/public/svgs/qucoon-logo";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const StepperLayout = ({
  title,
  subtitle,
  handleNext,
  handlePrevious,
  children,
  showPrevious,
  disabled,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  handleNext: () => void;
  handlePrevious: () => void;
  showPrevious?: boolean;
  disabled: boolean;
}) => {
  return (
    <div className="flex flex-col w-full h-screen">
      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-3xl mx-auto px-6 lg:px-10 py-8 mt-10 lg:pt-10 lg:mb-32 pb-32">
          {/* HEADER */}
          <div className="flex justify-between items-start gap-6 mb-8 lg:mb-12">
            <div className="flex-1">
              <h1 className="font-bold text-2xl lg:text-3xl text-gray-900 mb-2">
                {title}
              </h1>
              <p className="text-gray-600 text-sm lg:text-base">{subtitle}</p>
            </div>
            <div className="flex-shrink-0">
              <QucoonLogo />
            </div>
          </div>

          {/* FORM CONTENT */}
          <div className="w-full">{children}</div>
        </div>
      </div>

      {/* FIXED NAVIGATION FOOTER */}
      <div className="fixed bottom-0 left-0 lg:left-[30%] right-0 bg-white border-t border-gray-200 ">
        <div className="w-full  mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center">
            {showPrevious ? (
              <Button
                onClick={handlePrevious}
                variant={"secondary"}
                prefixIcon={<ArrowLeft />}
              >
                Previous
              </Button>
            ) : (
              <div />
            )}
            <Button
              onClick={handleNext}
              disabled={disabled}
              suffixIcon={<ArrowRight />}
            >
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
