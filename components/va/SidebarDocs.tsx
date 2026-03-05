"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navVA } from "@/lib/docs/nav-config";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Label } from "../ui/label";
import { useState } from "react";
import { Spinner } from "../ui/spinner";
import { useTransition } from "react";

export default function SidebarVA() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [loadingID, setLoadingID] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleNav = (id: string, href: string) => {
    if (!id) return;

    setLoadingID(id);

    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <Sidebar className="border-none shadow-[0px_0px_50px_1px_rgb(0,122,122)]">
      <SidebarHeader className="bg-primary-blue-500 border-b border-primary-blue-100">
        <div className="flex flex-col gap-2 items-start p-4">
          <Label className="font-bold">FlowChat Core</Label>
          <Label className="font-normal">Training Portal</Label>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-primary-blue-500 gap-2">
        {navVA.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <div
              onClick={() => handleNav(String(i), item.href)}
              className="flex flex-col"
              key={i}
            >
              <SidebarMenuItem className="">
                <div
                  className={cn(
                    "flex relative items-center gap-4 rounded-md px-4 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-linear-90 from-primary-blue-100  border-none rounded-none font-medium text-accent-foreground"
                      : "text-muted-foreground rounded-[5px] hover:bg-primary-blue-100/20",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="text-white"></item.icon>
                    <Label>{item.label}</Label>
                  </div>
                  {loadingID === String(i) && isPending && (
                    <div className="absolute left-0 w-full h-full flex items-center justify-center bg-primary-blue-100/20">
                      <Spinner className="text-white" />
                    </div>
                  )}
                </div>
              </SidebarMenuItem>
            </div>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
