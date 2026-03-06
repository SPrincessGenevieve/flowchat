"use client";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import SidebarVA from "@/components/va/SidebarDocs";
import { IconMenu2 } from "@tabler/icons-react";
import React from "react";
import { usePathname } from "next/navigation";

function VAContent({ children }: { children: React.ReactNode }) {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();

  const showSidebar = !pathname.includes("/lesson");

  return (
    <div className="flex relative w-full h-screen">
      {showSidebar && <SidebarVA />}

      <div className="w-full">
        <div className="menubar-doc w-full hidden items-center gap-2 bg-primary-blue-500 h-14 px-4 shadow-[0_2px_40px_0_rgb(0,122,122)]">
          <IconMenu2
            onClick={toggleSidebar}
            className="text-white cursor-pointer"
          />
        </div>

        <div className="w-full h-full flex justify-center ">
          <div className="w-full p-8 ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <VAContent>{children}</VAContent>
    </SidebarProvider>
  );
}
