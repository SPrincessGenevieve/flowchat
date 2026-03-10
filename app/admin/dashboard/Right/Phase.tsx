"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import React from "react";

export default function Phase() {
  const progress = [
    {
      label: "Phase 1 - Onboarding",
      value: 85,
    },
    {
      label: "Phase 2 - Tech Review",
      value: 62,
    },
    {
      label: "Phase 3 - Live Performance",
      value: 30,
    },
  ];

  return (
    <Card className="w-full bg-black/20 border border-primary-blue-100/50">
      <CardContent className="flex flex-col gap-4">
        <Label className="font-semibold">Phase Completion</Label>
        <div className="flex flex-col gap-4 mt-4">
          {progress.map((item, i) => (
            <div className="flex flex-col gap-4">
              <div className="w-full flex items-center justify-between">
                <Label>{item.label}</Label>
                <Label>{item.value}%</Label>
              </div>
              <Progress
                value={item.value}
                className="bg-blue-400/20"
              ></Progress>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
