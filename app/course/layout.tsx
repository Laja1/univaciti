import VerticalSeparatedTabsDemo from "@/components/customized/tabs/tabs-15";
import { Box } from "lucide-react";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full">
      <div className="w-full flex items-center p-3 gap-2 bg-[#000212] ">
        <div className="bg-[#000212] border border-white  text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
          <Box className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium text-white">
            Cloud Engineering
          </span>
        </div>
      </div>
      <div className="m-5">
        <VerticalSeparatedTabsDemo />
      </div>
    </div>
  );
}
