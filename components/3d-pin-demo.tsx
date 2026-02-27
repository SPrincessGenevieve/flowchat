"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AnimatedPinDemo() {
  return (
    <div className="w-full flex items-center justify-center ">
      <PinContainer title="View SOP" href="https://twitter.com/mannupaaji">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
