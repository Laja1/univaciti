import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactNode } from "react";

interface CardItem {
  programme: string;
  description: string;
  icon?: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

interface ReusableCardsProps {
  cards: CardItem[];
  columns?: number;
  className?: string;
  buttonVariant?: "default" | "secondary" | "outline" | "ghost" | "link";
  buttonColor?: string;
  renderExtra?: (item: CardItem) => ReactNode;
}

export const ReusableCards: React.FC<ReusableCardsProps> = ({
  cards,
  columns = 4,
  className = "",
  buttonVariant = "secondary",
  buttonColor = "#0098DA",
  renderExtra,
}) => {
  return (
    <div className={`max-w-7xl mt-10 px-4 ${className}`}>
      <div
        className={`
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          xl:grid-cols-${columns}
        `}
      >
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-[#146082] rounded-lg p-5 flex flex-col justify-between text-start transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Header */}
            <div>
              <div className="flex flex-row justify-between items-start">
                <p className="font-bold text-white text-lg">{item.programme}</p>
                {item.icon && (
                  <Image
                    src={item.icon}
                    width={65}
                    height={65}
                    alt={`${item.programme} icon`}
                  />
                )}
              </div>

              <p className="text-sm my-6 text-gray-300 leading-relaxed">
                {item.description}
              </p>
              {renderExtra && renderExtra(item)}
            </div>

            {/* Action Button */}
            <div className="flex justify-end mt-4">
              <Button
                size="sm"
                variant={buttonVariant}
                className="rounded-full border border-white text-white"
                style={{ backgroundColor: buttonColor }}
                onClick={item.onActionClick}
              >
                {item.actionLabel || "More"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
