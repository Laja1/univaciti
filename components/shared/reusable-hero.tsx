import { Pill } from "@/components/pill";
import { format } from "date-fns";
import { ReactNode } from "react";

interface ReusableHeroProps {
  title: string;
  subtitle?: string;
  showDate?: boolean;
  className?: string;
  pillText?: string;
  children?: ReactNode;
}

export const ReusableHero: React.FC<ReusableHeroProps> = ({
  title,
  subtitle,
  showDate = true,
  className = "",
  children,
  pillText,
}) => {
  return (
    <div className={`flex flex-col items-start m-10 ${className}`}>
      {/* Optional Date Pill */}
      {showDate && (
        <Pill className="mb-6">
          {pillText ? (
            pillText
          ) : (
            <p className="text-white">
              {format(new Date(), "EEE, MMM d, yyyy")}
            </p>
          )}
        </Pill>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl  lg:text-[80px] max-w-5xl font-bold text-left text-black z-10">
        {title}
      </h1>

      {/* Subtitle */}
      {subtitle && <p className="mt-2 text-gray-700 text-left">{subtitle}</p>}

      {/* Custom content */}
      {children}
    </div>
  );
};
