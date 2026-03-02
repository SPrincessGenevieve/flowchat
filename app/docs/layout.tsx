import SidebarDocs from "@/components/docs/SidebarDocs";
import HeaderMenu from "@/components/header/HeaderMenu";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col w-full h-screen">
        <div className="flex w-full h-full ">
          <SidebarDocs></SidebarDocs>
          <div className="w-full flex justify-end">
            <div className="w-[98%] h-full ">{children}</div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
