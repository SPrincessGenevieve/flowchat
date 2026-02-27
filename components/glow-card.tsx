"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { IconArrowRight } from "@tabler/icons-react";

export default function GlowCard({ item }: { item: any }) {
  const glowColor = "oklch(69.643% 0.1425 232.232)";
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  return (
    <Card className="w-full h-full p-0 bg-transparent relative">
      <CardContent
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
        className="relative overflow-hidden w-full h-full rounded-xl p-4 flex flex-col gap-4 bg-primary-blue-500"
      >
        {/* Glow */}
        <div
          className="z-10 pointer-events-none absolute w-96 h-96 rounded-full blur-[120px] opacity-40 transition-transform duration-75 ease-out"
          style={{
            background: glowColor,
            transform: `translate(${position.x - 192}px, ${position.y - 192}px)`,
          }}
        />

        {/* Content */}
        <div className="flex z-20">
          <div className="p-2 rounded-sm border border-primary-blue-200">
            <item.icon className="text-white" />
          </div>
        </div>

        <div className="z-20">
          <Label className="text-xl font-extrabold">{item.title}</Label>
          <Label className="text-sm font-light">{item.desc}</Label>
          <div className="flex items-center gap-4 mt-4">
            <Label>Explore</Label>{" "}
            <IconArrowRight className="text-white" size={16}></IconArrowRight>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
