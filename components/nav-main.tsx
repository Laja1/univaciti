/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
  title,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactElement;
    color?: string;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: React.ReactElement;
    }[];
  }[];
  title?: string;
}) {
  const navigate = useRouter();
  const location = usePathname();

  const isItemActive = (item: any) => {
    const currentPath = location;

    if (currentPath === item.url) return true;

    if (item.items?.length > 0) {
      return item.items.some(
        (child: { url: string }) => currentPath === child.url
      );
    }

    return false;
  };

  return (
    <SidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarMenu className="space-y-1">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  isActive={isItemActive(item)}
                  onClick={() => navigate.push(item.url)}
                  tooltip={item.title}
                >
                  {item.icon && <span className="shrink-0">{item.icon}</span>}
                  <span className="text-xs">{item.title}</span>
                  {item.items && item.items.length > 0 && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>

              {item.items && item.items.length > 0 && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <button
                            type="button"
                            onClick={() => navigate.push(subItem.url)}
                            className="w-full flex items-center gap-2 text-left"
                          >
                            {subItem.icon && <span>{subItem.icon}</span>}
                            <span className="text-xs">{subItem.title}</span>
                          </button>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
