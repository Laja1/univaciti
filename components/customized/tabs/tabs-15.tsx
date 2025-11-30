import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from "@/modules/course/home";
import { Bot, House, Settings, User } from "lucide-react";

const tabs = [
  { name: "Home", value: "home", icon: House, content: <div>Home</div> },
  {
    name: "Courses",
    value: "courses",
    icon: User,
    content: <div>Profile Page</div>,
  },
  {
    name: "Structure",
    value: "structure",
    icon: Bot,
    content: <div>Messages Page</div>,
  },
  {
    name: "Time-Table",
    value: "time-table",
    icon: Settings,
    content: <div>Settings Page</div>,
  },
  {
    name: "Internship",
    value: "internship",
    icon: Settings,
    content: <div>Settings Page</div>,
  },
  {
    name: "Fees",
    value: "fees",
    icon: Settings,
    content: <div>Settings Page</div>,
  },
  {
    name: "Funding",
    value: "funding",
    icon: Settings,
    content: <div>Settings Page</div>,
  },
];

export default function VerticalSeparatedTabsDemo() {
  return (
    <Tabs
      orientation="vertical"
      defaultValue={tabs[0].value}
      className=" w-full flex   flex-row items-start gap-4 justify-center"
    >
      <div>
        <TabsList className="shrink-0 w-40    grid grid-cols-1 gap-1 p-0  h-full">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-[#0098DA] border-r border   data-[state=active]:text-primary-foreground justify-start px-3 py-1.5"
            >
              <tab.icon className="h-5 w-5 me-2" /> {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <ScrollArea className="h-screen w-full">
        <div className="flex-1 border-2 border-black p-5 rounded-2xl">
          {tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="m-0 w-full"
            >
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </ScrollArea>
    </Tabs>
  );
}
