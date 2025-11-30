import { Check } from "lucide-react";
import { Label } from "../ui/label";

type SegmentedProps = {
  value: string;
  label: string;
  options: string[];
  onChange: (val: string) => void;
};

export const SegmentedControl = ({
  value,
  options,
  onChange,
  label,
}: SegmentedProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div className="flex items-center justify-between">
          <Label>{label}</Label>
        </div>
      )}
      <div className="flex flex-row gap-3">
        {options.map((opt) => {
          const active = opt === value;

          return (
            <button
              key={opt}
              onClick={() => onChange(opt)}
              className={`
                rounded-lg px-2 py-2 border transition-all
                ${
                  active
                    ? "bg-black text-white border-black"
                    : "bg-white border-gray-300 text-black"
                }
              `}
            >
              <span className="flex text-xs items-center gap-2">
                {opt}
                {active && <Check size={16} />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
