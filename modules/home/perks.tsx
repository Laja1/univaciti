import { imgLinks } from "@/public/assetLinks";
import {
  Box,
  Rocket,
  GraduationCap,
  Users,
  Award,
  Briefcase,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export const Perks = () => {
  const data = [
    {
      id: 1,
      title: "Hands-On Projects 🚀",
      image: imgLinks.project,
      description:
        "Build real-world projects that showcase your skills. Work on industry-relevant assignments designed to prepare you for actual workplace scenarios and build an impressive portfolio.",
      perks: [
        {
          description:
            "Industry-standard projects that mirror real workplace challenges",
          icon: <Rocket className="w-5 h-5" />,
        },
        {
          description:
            "Build a professional portfolio to showcase to potential employers",
          icon: <Briefcase className="w-5 h-5" />,
        },
        {
          description:
            "Practical experience with tools and technologies used by leading companies",
          icon: <Box className="w-5 h-5" />,
        },
      ],
    },
    {
      id: 2,
      title: "Certified Courses 🎓",
      image: imgLinks.academy,
      description:
        "Learn at your own pace with self-paced courses across diverse tech domains. Earn industry-recognized certifications that validate your expertise and boost your career prospects.",
      perks: [
        {
          description:
            "Flexible, self-paced learning that fits your schedule and lifestyle",
          icon: <BookOpen className="w-5 h-5" />,
        },
        {
          description:
            "Industry-recognized certifications valued by top employers worldwide",
          icon: <Award className="w-5 h-5" />,
        },
        {
          description:
            "Comprehensive curriculum covering in-demand tech skills and emerging technologies",
          icon: <GraduationCap className="w-5 h-5" />,
        },
      ],
    },
    {
      id: 3,
      title: "Career Opportunities 💎",
      image: imgLinks.recruiters,
      description:
        "Connect with top recruiters and unlock career opportunities. Access a curated job board where leading companies actively seek talented professionals like you.",
      perks: [
        {
          description:
            "Direct access to vetted recruiters from leading tech companies",
          icon: <Users className="w-5 h-5" />,
        },
        {
          description:
            "Personalized job matches based on your skills and career goals",
          icon: <Briefcase className="w-5 h-5" />,
        },
        {
          description:
            "Career support including resume reviews, interview prep, and mentorship",
          icon: <Award className="w-5 h-5" />,
        },
      ],
    },
  ];

  return (
    <div className="bg-[#000212] w-full my-10 p-5 md:p-10 lg:p-20 rounded-lg">
      <div className="space-y-16 md:space-y-20">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`grid lg:grid-cols-2 grid-cols-1 items-center text-left text-white gap-8 lg:gap-12 ${
              index === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            <div
              className={`space-y-4 ${
                index === 1 ? "lg:order-2" : ""
              } max-w-xl mx-auto lg:mx-0`}
            >
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
              <div className="space-y-4 pt-2">
                {item.perks.map((perk, perkIndex) => (
                  <div key={perkIndex} className="flex gap-3 items-start">
                    <div className="flex-shrink-0">
                      <div className="border inline-flex p-2 rounded-lg bg-neutral-900 text-white border-neutral-800">
                        {perk.icon}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base flex-1">
                      {perk.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`flex items-center justify-center ${
                index === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src={item.image}
                  width={500}
                  height={400}
                  alt={item.title}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
