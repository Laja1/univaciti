import { Send } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Learning",
      description:
        "Hop on any of the specialization course and learn on your own terms",
      route: "",
    },
    {
      title: "Certification",
      description:
        "Get validated to receive validation recruiters are looking for",
      route: "",
    },
    {
      title: "Recruitment",
      description: "Get access to the pool of certified professionals",
      route: "",
    },
  ];
  return (
    <div className="items-center flex justify-center w-full">
      <div className="grid grid-cols-3 gap-10 mt-10 lg:mt-20 mx-10">
        {features.map((item, index) => (
          <div key={index} className="flex items-center justify-center  gap-5">
            <div className="flex text-left flex-col">
              <p className="font-semibold text-3xl">{item.title}</p>
              <p>{item.description}</p>
            </div>
            <div className="bg-black border gap-1 border-[#2563EB] text-xs p-3 items-center text-white flex rounded-3xl  justify-center text-center">
              Explore <Send size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
