"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navConfig } from "@/lib/docs/nav-config";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Label } from "../ui/label";
import { IconBolt } from "@tabler/icons-react";
import { useState } from "react";

export default function SidebarDocs() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <Sidebar className="border-none shadow-[0px_0px_50px_1px_rgb(0,122,122)]">
      <SidebarHeader className="bg-primary-blue-500">
        <Link href={"/"} className="flex gap-2 items-center py-4">
          <IconBolt className="text-white"></IconBolt>
          <Label>Flowchat SOP</Label>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-primary-blue-500 pb-12">
        {navConfig.map((group, i) => (
          <SidebarGroup key={i}>
            <div>
              <Label className="mb-1.5 px-2 font-bold uppercase tracking-widest text-muted-foreground">
                {group.label}
              </Label>
              <div className="flex flex-col gap-2">
                {group.items.map((item, ii) => {
                  const isActive = pathname === item.href;
                  return (
                    <SidebarMenuItem key={ii}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-2 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-transparent border-b-2 border-primary-blue-200 rounded-none font-medium text-accent-foreground"
                            : "text-muted-foreground rounded-[4px] hover:bg-primary-blue-200/70 hover:text-foreground",
                        )}
                      >
                        <Label>{item.title}</Label>
                      </Link>
                    </SidebarMenuItem>
                  );
                })}
              </div>
            </div>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
