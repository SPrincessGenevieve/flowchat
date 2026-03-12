"use client";
import SidebarDocs from "@/components/docs/SidebarDocs";
import { Label } from "@/components/ui/label";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { IconBolt, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function DocsContent({ children }: { children: React.ReactNode }) {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex relative w-full h-full">
      <SidebarDocs />

      <div className="w-full">
        <div className="menubar-doc w-full hidden items-center gap-2 fixed bg-primary-blue-500 h-14 px-4 shadow-[0_2px_40px_0_rgb(0,122,122)]">
          <IconMenu2
            onClick={toggleSidebar}
            className="text-white cursor-pointer"
          />
          <IconBolt className="text-white" />
          <Label>Flowchat SOP</Label>
        </div>

        <div className="w-full doc-childen-cont flex justify-center">
          <div className="doc-width w-[80%]  my-20 p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DocsContent>{children}</DocsContent>
    </SidebarProvider>
  );
}
