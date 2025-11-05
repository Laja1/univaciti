import { ReusableHero } from "@/components/shared/reusable-hero";
import { ReusableCards } from "@/components/shared/reusable-programme-card";
import { svgsLinks } from "@/public/assetLinks";

export const Hero = () => {
  const cardData = [
    {
      programme: "Cloud Engineering & Architecture.",
      description:
        "Choose from the key Hyperscalers and achieve advanced skills.",
      // icon: svgsLinks.education,
    },
    {
      programme: "Software Engineering - Backend.",
      description:
        "Achieve software engineering mastery with a specialization in React, Java and .Net Skills",
      // icon: svgsLinks.startup,
    },
    {
      programme: "Data Analytics.",
      description:
        "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance Manufacturing, etc",
      // icon: svgsLinks.brain,
    },
    {
      programme: "AI & Machine Learning.",
      description:
        "Acquire problem solving skills, with specialization in a domain: Banking, Telecoms, Finance Manufacturing, etc",
      // icon: svgsLinks.brain,
    },
    {
      programme: " Software Engineering - Frontend.",
      description:
        "For beginners who need intensive courses in specialized skills",
      // icon: svgsLinks.brain,
    },
  ];

  return (
    <ReusableHero
      title={"Certifications"}
      subtitle={
        "Validate your skillset with Univaciti certification courses. Specializations are in Cloud Engineering, Cloud Solutions Architecture, Software Engineering, AI Solution Architecture & Engineering and Data Analytics."
      }
    >
      <ReusableCards
        cards={cardData}
        columns={5}
        buttonColor="#0098DA"
        buttonVariant="secondary"
      />
    </ReusableHero>
  );
};
