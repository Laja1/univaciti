"use client";
import { QucoonAcademyLogo } from "@/public/svgs/qucoon-academy";
import { QucoonFaded } from "@/public/svgs/qucoon-faded";
import { useStepper } from "@/store/stepper";
import { BadgeCheck, Check } from "lucide-react";

export const StepIndicator = ({
  steps,
}: {
  steps: { id: number; title: string }[];
}) => {
  const { step } = useStepper();

  const isActive = (id: number) => id === step;
  const isCompleted = (id: number) => id < step;

  return (
    <div className="relative w-[30%] min-w-[320px] bg-[#F6F7FA] hidden lg:flex flex-col overflow-hidden">
      <div className="p-6 lg:p-8">
        <QucoonAcademyLogo />

        {step !== 0 && (
          <div className="mt-8">
            <ol className="relative space-y-2">
              {steps.map((s, index) => (
                <li key={s.id} className="flex items-start gap-4">
                  {/* STEP INDICATOR */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`
                        flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 flex-shrink-0
                        ${
                          isActive(s.id)
                            ? "bg-black text-white shadow-md"
                            : isCompleted(s.id)
                            ? "bg-[#10B981] text-white"
                            : "bg-white border-2 border-gray-300 text-gray-400"
                        }
                      `}
                    >
                      {isCompleted(s.id) ? (
                        <Check className="w-4 h-4" strokeWidth={3} />
                      ) : (
                        <span className="text-sm font-bold">{s.id}</span>
                      )}
                    </div>

                    {/* CONNECTING LINE */}
                    {index < steps.length - 1 && (
                      <div
                        className={`
                          w-[1px] h-4 mt-2 transition-colors duration-200
                          ${isCompleted(s.id) ? "bg-[#12B981]" : "bg-gray-300"}
                        `}
                      />
                    )}
                  </div>

                  {/* STEP TITLE */}
                  <div className="flex-1 pt-2">
                    <h3
                      className={`
                        text-sm leading-tight transition-all duration-200
                        ${
                          isActive(s.id)
                            ? "text-black font-semibold"
                            : isCompleted(s.id)
                            ? "text-[#12B981] font-medium"
                            : "text-gray-400 font-normal"
                        }
                      `}
                    >
                      {s.title}
                    </h3>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* DECORATIVE LOGO */}
      <div className="absolute bottom-0 -right-10 pointer-events-none opacity-50">
        <QucoonFaded />
      </div>
    </div>
  );
};
