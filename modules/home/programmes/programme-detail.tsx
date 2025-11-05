import { ReusableHero } from "@/components/shared/reusable-hero";
import { ReusableCards } from "@/components/shared/reusable-programme-card";
import { svgsLinks } from "@/public/assetLinks";
import { cards } from "./cards";

export const ProgrammesDetail = ({ programme }: { programme: string }) => {
  const cardData = [
    {
      programme: "Cloud Engineering & Architecture.",
      description:
        "Choose from the key Hyperscalers and achieve advanced skills.",
      icon: svgsLinks.education,
    },
    {
      programme: "Software Engineering - Backend.",
      description:
        "Achieve software engineering mastery with a specialization in React, Java and .Net Skills",
      icon: svgsLinks.startup,
    },
    {
      programme: "Data Analytics.",
      description:
        "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance Manufacturing, etc",
      icon: svgsLinks.brain,
    },
    {
      programme: "AI & Machine Learning.",
      description:
        "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance Manufacturing, etc",
      icon: svgsLinks.brain,
    },
    {
      programme: " Software Engineering - Frontend.",
      description:
        "For beginners who need intensive courses in specialized skills",
      icon: svgsLinks.brain,
    },
  ];
  console.log(programme);
  const data = cards.find((item) => item.id === programme) as {
    programme: string;
    description: string;
    icon: string;
  };
  return (
    <ReusableHero title={data?.programme} subtitle={data?.description}>
      <ReusableCards
        cards={cardData}
        columns={4}
        buttonColor="#0098DA"
        buttonVariant="secondary"
      />
    </ReusableHero>
  );
};
