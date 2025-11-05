"use client";

import { Button } from "@/components/ui/button";
import { svgsLinks } from "@/public/assetLinks";
import { routes } from "@/utils/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const cards = [
  {
    id: "tesa",
    programme: "T E S A",
    description:
      "For beginners who need intensive courses in specialized skills",
    icon: svgsLinks.education,
  },
  {
    id: "startup-accelerator",
    programme: "Startup Accelerator",
    description: "For founders who want to scale their startups efficiently",
    icon: svgsLinks.startup,
  },
  {
    id: "empowa",
    programme: "Empowa",
    description: "Empowering learners through mentorship and training",
    icon: svgsLinks.brain,
  },
  {
    id: "global-empowa",
    programme: "Global Empowa",
    description: "For global learners interested in specialized skills",
    icon: svgsLinks.world,
  },
];

export const Cards = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((item) => (
          <div
            key={item.id}
            className="bg-[#146082] rounded-lg p-5 flex flex-col justify-between text-start"
          >
            <div>
              <div className="flex flex-row justify-between items-start">
                <p className="font-bold text-white">{item.programme}</p>
                <Image src={item.icon} width={65} height={65} alt="icon" />
              </div>
              <p className="text-sm my-10 text-gray-300">{item.description}</p>
            </div>

            <div className="flex justify-end">
              <Button
                size="sm"
                onClick={() =>
                  router.push(routes.public.programmesDetail.path(item.id))
                }
                className="rounded-full border-[0.5px] text-white bg-[#0098DA]"
                variant="secondary"
              >
                More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
