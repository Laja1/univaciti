"use client";

import * as React from "react";
import { Box, LayoutList, Link, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  interface SidebarItem {
    title: string;
    icon: React.ReactElement;
    href: string;
    isActive: boolean;
  }

  const sidebarItems: SidebarItem[] = [
    // {
    //   title: "Build with Qoonity AI",
    //   icon: <Bot className="text-black dark:text-gray-800" />,
    //   href: "/identity-center",
    //   isActive: false,
    // },
    {
      title: "Switch workspace",
      icon: <LayoutList className="text-black dark:text-red-400" />,
      href: "/console",
      isActive: false,
    },
    {
      title: "Settings",
      icon: <Settings className="text-black dark:text-red-400" />,
      href: "/settings",
      isActive: false,
    },
  ];
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent bg-black data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-[#000212] text-sidebar-primary-foreground border-gray-300 border flex aspect-square size-8 items-center justify-center rounded-lg">
            <Box className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-gray-300 text-sm leading-tight">
            <span className="truncate font-medium">Cloud Engineering</span>
          </div>
          {/* <ChevronsUpDown className="ml-auto" /> */}
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={item.isActive} asChild>
                    <Link to={item.href}>
                      {item.icon}
                      <span className="text-xs">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
