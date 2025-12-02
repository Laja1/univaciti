// components/PaymentCard.tsx
import { FC } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react"; // optional: for nice checkmarks
import clsx from "clsx";

interface PaymentCardProps {
  title: string;
  price: string;
  description: string;
  details: string[];
  inactive?: boolean;
  buttonLabel: string;
  highlighted?: boolean;
  isLoading?:boolean
  popular?: boolean; // optional: adds "Most Popular" badge
  buttonAction?: () => void;
}

export const PaymentCard: FC<PaymentCardProps> = ({
  title,
  price,
  description,
  details,
  inactive = false,
  isLoading,
  buttonLabel,
  popular = false,
  buttonAction,
}) => {
  return (
    <div
      className={clsx(
        "relative w-full max-w-xs border-neutral-800 overflow-hidden rounded-2xl border transition-all duration-300",
        "bg-[#0f0f0f] backdrop-blur-xl",
        {
          "cursor-not-allowed opacity-60 grayscale": inactive,
          
          "hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1": !inactive,
        
        }
      )}
    >
      {/* Popular Badge */}
      {popular && !inactive && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8">
        {/* Title */}
        <h2 className="text-sm  text-white mb-2">{title}</h2>

        {/* Price */}
        <div className="mb-6">
          <p
            className={clsx(
              "text-2xl font-bold tracking-tight",
              inactive ? "text-neutral-500 line-through" : "text-white"
            )}
          >
            {price}
          </p>
          {price !== "Free" && price !== "$0" && (
            <span className="text-neutral-500 text-sm">/month</span>
          )}
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-4 mb-10">
          {details.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-0.5">
                <Check
                  className={clsx(
                    "w-5 h-5 flex-shrink-0",
                    inactive
                      ? "text-neutral-600"
                      : 
                       "text-green-400"
                  )}
                />
              </div>
              <span
                className={clsx(
                  "text-sm leading-snug",
                  inactive ? "text-neutral-500" : "text-gray-300"
                )}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Button
          className={clsx(
            "w-full text-base font-medium py-3 rounded-xl transition-all bg-white text-black hover:bg-neutral-200",
            inactive && "opacity-50 cursor-not-allowed"
          )}
          variant={  !inactive ? "default" : "outline"}
          size="lg"
          onClick={inactive ? undefined : buttonAction}
          disabled={inactive}
          loading={isLoading}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};