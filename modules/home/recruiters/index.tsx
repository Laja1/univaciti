import { ReusableHero } from "@/components/shared/reusable-hero";
import { imgLinks, svgsLinks } from "@/public/assetLinks";
import { Send } from "lucide-react";
import Image from "next/image";

export const Recruiters = () => {
  const recruitersData = [
    {
      name: "Pepsi",
      logo: imgLinks.pepsi,
      width: 100,
      height: 70,
    },
    {
      name: "Stanbic",
      logo: imgLinks.stanbic,
      width: 150,
      height: 70,
    },
    {
      name: "Citi-Bank",
      logo: svgsLinks.citibank,
      width: 150,
      height: 70,
    },
    {
      name: "Union Bank",
      logo: imgLinks.union,
      width: 150,
      height: 70,
    },
  ];

  return (
    <ReusableHero
      title={"Recruiters"}
      pillText="Hire & manage resources easily"
      subtitle={
        "Join the growing list of recruiters, have access to the pool of exceptional Univaciti graduates, get alerted by new additions to the pool. Track talents of interest, track skills of interest"
      }
    >
      <div className="mt-5">
        <div className="bg-black border gap-1 border-[#2563EB] text-xs p-3 items-center text-white flex rounded-3xl  justify-center text-center">
          Register
        </div>
      </div>
      <div className="flex flex-row mt-10 items-center gap-5">
        {recruitersData.map((item) => (
          <div key={item.name}>
            <Image
              src={item.logo}
              width={item.width}
              height={item.height}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </ReusableHero>
  );
};
