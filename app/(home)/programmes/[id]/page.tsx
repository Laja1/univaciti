"use client";
import { useParams } from "next/navigation";
import NavbarDemo from "@/components/shared/navbar";
import { ProgrammesDetail } from "@/modules/home/programmes/programme-detail";
import { svgsLinks } from "@/public/assetLinks";
import Image from "next/image";

export default function ProgrammeDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col gap-10 min-h-screen bg-zinc-50 dark:bg-black">
      <NavbarDemo>
        <ProgrammesDetail programme={id} />

        <div className="items-end flex flex-col justify-end w-full right-0">
          <div className="items-center flex flex-col">
            <Image src={svgsLinks.bird} width={80} height={80} alt="bird" />
            <div className="flex gap-2">
              <Image
                src={svgsLinks.chess}
                width={100}
                height={100}
                alt="chess"
              />
              <Image
                src={svgsLinks.chess}
                width={100}
                height={100}
                alt="chess"
              />
            </div>
          </div>
        </div>
      </NavbarDemo>
    </div>
  );
}
