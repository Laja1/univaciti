import { Pill } from "@/components/pill";
import { Button } from "@/components/ui/button";
import { imgLinks } from "@/public/assetLinks";
import Image from "next/image";
import { format } from "date-fns";

export const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imgLinks.home}
          fill
          alt="graduation"
          className="object-cover rounded-xl"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-xl" />
      </div>

      {/* Text Overlay */}
      <Pill className="mb-6">
        <p className="text-white">{format(new Date(), "EEE, MMM d, yyyy")}</p>
      </Pill>
      <h1 className="text-4xl md:text-5xl lg:text-[80px] max-w-5xl font-bold text-center text-white z-10">
        Get an accelerated skill, from Novice to Expertise. Get certified, get
        validated.
      </h1>

      <Button variant="secondary" className="mt-5 z-10">
        Get Started
      </Button>
    </div>
  );
};
