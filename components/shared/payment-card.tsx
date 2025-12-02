/* eslint-disable @typescript-eslint/no-explicit-any */
// components/PaymentCard.tsx
import { FC } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react"; // optional: for nice checkmarks
import clsx from "clsx";
import Image from "next/image";

interface PaymentCardProps {
  title: string;
  price: string;
  description: string;
  details: string[];
  image: any;
  showMonth?: boolean;
  inactive?: boolean;
  highlighted?: boolean;
  isLoading?: boolean;
  className?: string;
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
  image,
  showMonth,
  className,
  popular = false,
  buttonAction,
}) => {
  return (
    <div
      className={clsx(
        "relative w-full max-w-xs overflow-hidden rounded-xl transition-all duration-300",
        "bg-[#0f0f0f] backdrop-blur-xl flex flex-col",
        "min-h-[400px]", // 🔥 Ensures equal height
        {
          "cursor-not-allowed opacity-60 grayscale": inactive,
          "hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1":
            !inactive,
        },
        className
      )}
    >
      {/* Popular Badge */}
      {popular && !inactive && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Right Icon (fixed position) */}
        <div className="absolute right-3 top-3 opacity-40 pointer-events-none">
          <Image
            src={image}
            width={110}
            height={110}
            alt="laja"
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-sm text-white mb-2">{title}</h2>

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
          {showMonth && (
            <span className="text-neutral-500 text-sm">/month</span>
          )}
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Details */}
        <ul className="space-y-4 mb-8 flex-1">
          {details.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check
                className={clsx(
                  "w-5 h-5 flex-shrink-0",
                  inactive ? "text-neutral-600" : "text-green-400"
                )}
              />
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

        {/* Button (fixed bottom because of flex) */}
        <Button
          className={clsx(
            "w-full text-base font-medium py-3 rounded-xl transition-all bg-white text-black hover:bg-neutral-200",
            inactive && "opacity-50 cursor-not-allowed"
          )}
          variant={!inactive ? "default" : "outline"}
          size="lg"
          onClick={inactive ? undefined : buttonAction}
          disabled={inactive}
          loading={isLoading}
        >
          Choose Plan
        </Button>
      </div>
    </div>
  );
};
