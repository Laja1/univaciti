import NavbarDemo from "@/components/shared/navbar";
import { Hero } from "@/modules/home/programmes/hero";
import { Recruiters } from "@/modules/home/recruiters";
import { svgsLinks } from "@/public/assetLinks";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 min-h-screen  bg-zinc-50  dark:bg-black">
      <NavbarDemo>
        <Recruiters />
        <div className="items-end flex flex-col justify-end  w-full right-0">
          <div className="items-center flex flex-col">
            <Image
              src={svgsLinks.bird || ""}
              width={80}
              height={80}
              alt="icon"
            />
            <div className="flex gap-2">
              <Image
                src={svgsLinks.chess || ""}
                width={100}
                height={100}
                alt="icon"
              />
              <Image
                src={svgsLinks.chess || ""}
                width={100}
                height={100}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </NavbarDemo>
    </div>
  );
}
