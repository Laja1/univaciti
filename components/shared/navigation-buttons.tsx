import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const NavigationButtons = ({
  showPrevious = true,
  handleNext,
  handlePrevious,
}: {
  showPrevious?: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
}) => (
  <div className="flex justify-between items-center py-5">
    {showPrevious ? (
      <Button
        variant="outline"
        onClick={handlePrevious}
        className="flex items-center gap-2 px-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </Button>
    ) : (
      <div />
    )}
    <Button
      onClick={handleNext}
      className="flex items-center gap-2 px-8 bg-gray-800 hover:bg-gray-900"
    >
      Proceed
      <ArrowRight className="w-4 h-4" />
    </Button>
  </div>
);
