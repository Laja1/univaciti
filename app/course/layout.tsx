import VerticalSeparatedTabsDemo from "@/components/customized/tabs/tabs-15";
import NavbarDemo from "@/components/shared/navbar";
import { Navbar } from "@/components/ui/resizable-navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectField } from "@/components/ui/selectfield";
import { Box } from "lucide-react";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full bg-[#FFFFFF]  ">
      <NavbarDemo>
        <div className="w-2/4 m-5 p-5 rounded-2xl bg-white shadow-sm flex flex-col gap-6">
          <p className="text-xl font-semibold text-gray-800 text-left">
            Programme
          </p>

          <div className="flex w-full items-center flex-row gap-2">
            <label className="text-gray-600 text-sm">Select Programme</label>
            <SelectField
              name="programme"
              label=""
              options={[]}
              className="w-1/2"
            />
          </div>

          <div className="flex flex-row items-center gap-2">
            <label className="text-gray-600 text-sm">Specialization</label>
            <SelectField
              name="specialization"
              label=""
              options={[]}
              className="w-1/2"
            />
          </div>
        </div>

        <div className="m-5 w-full flex ">
          <VerticalSeparatedTabsDemo />
        </div>
      </NavbarDemo>
    </div>
  );
}
