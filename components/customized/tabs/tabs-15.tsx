import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Home from "@/modules/course/home";
import { Bot, House, Settings, User } from "lucide-react";

const tabs = [
  { name: "Home", value: "home", icon: House, content: <Home /> },
  {
    name: "Profile",
    value: "profile",
    icon: User,
    content: <div>Profile Page</div>,
  },
  {
    name: "Messages",
    value: "messages",
    icon: Bot,
    content: <div>Messages Page</div>,
  },
  {
    name: "Settings",
    value: "settings",
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
              className="data-[state=active]:bg-[#000212] border-r border   data-[state=active]:text-primary-foreground justify-start px-3 py-1.5"
            >
              <tab.icon className="h-5 w-5 me-2" /> {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <div className="flex-1 ">
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="m-0 w-full">
            {tab.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
