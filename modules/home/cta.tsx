import { Button } from "@/components/ui/button";
import React from "react";

export const CTA = () => {
  return (
    <div className="items-center flex justify-center w-full mt-10 lg:mt-20">
      <div className="bg-[#000212] rounded-3xl max-w-5xl lg:h-[300px] items-center justify-center w-full gap-3 flex-col flex text-white p-10">
        <p className="lg:text-3xl text-lg md:text-xl font-bold">
          Ready to Start Learning?
        </p>
        <p className="lg:text-xl text-sm md:text-md">
          Join thousands of learners advancing their careers with Qucoon Tesa ⚡
        </p>
        <div>
          <Button>Get Started{""}🕹️</Button>
        </div>
      </div>
    </div>
  );
};
