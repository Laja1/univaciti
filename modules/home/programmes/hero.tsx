import { Pill } from "@/components/pill";
import { format } from "date-fns";
import { Cards } from "./cards";

export const Hero = () => {
  return (
    <div className="items-start m-10 flex flex-col ">
      <Pill className="mb-6">
        <p className="text-white">{format(new Date(), "EEE, MMM d, yyyy")}</p>
      </Pill>
      <h1 className="text-4xl md:text-5xl lg:text-[80px] max-w-5xl font-bold text-center text-black z-10">
        Learning Program
      </h1>
      <p>
        Choose from the pool of Univaciti programs and start learning when and
        how you choose to
      </p>
      <Cards />
    </div>
  );
};
