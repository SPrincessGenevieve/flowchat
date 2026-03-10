"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useModule } from "@/context/ModuleContext";
import { IconAward, IconBook, IconTimeline } from "@tabler/icons-react";
import { style } from "motion/react-client";
import React from "react";
import { getTotalCompleted } from "../journey/Modules";

export default function PerformanceSection() {
  const { modules } = useModule();
  const completedCount = getTotalCompleted(modules);
  const percent = ((completedCount / 17) * 100).toFixed(0);

  const performance = [
    {
      label: "Overall Progress",
      icon: IconTimeline,
      value: `${percent}%`,
      style: "bg-primary-blue-100/30 border border-primary-blue-100",
    },
    {
      label: "Total Modules",
      icon: IconBook,
      value: "17",
      style: "bg-green-400/30 border border-green-400",
    },
    {
      label: "Certification Status",
      icon: IconAward,
      value: "Locked",
      style: "bg-purple-400/30 border border-purple-400",
    },
  ];

  return (
    <div className="flex gap-4 row-to-col">
      {performance.map((item, i) => (
        <Card className={`w-full h-40   ${item.style}`} key={i}>
          <CardContent className="h-full flex flex-col justify-between">
            <item.icon className="text-white" size={40}></item.icon>
            <div className="flex flex-col gap-2">
              <Label className="text-2xl font-semibold">{item.value}</Label>
              <Label className="font-normal">{item.label}</Label>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
