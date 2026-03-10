"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import React from "react";
import { formatDistanceToNow } from "date-fns";

export default function RecentAlert() {
  const mockData = [
    {
      name: "Mike Thompson",
      action: "Completed Phase 1",
      date: "2026-03-09T06:10:00Z",
    },
    {
      name: "Sarah Williams",
      action: "Completed Phase 2",
      date: "2026-03-09T07:00:00Z",
    },
    {
      name: "David Rodriguez",
      action: "Completed Phase 3",
      date: "2026-03-09T07:45:00Z",
    },
    {
      name: "Emily Johnson",
      action: "Completed Phase 2",
      date: "2026-03-09T08:15:00Z",
    },
  ];

  return (
    <Card className="w-full bg-black/20 border border-primary-blue-100/50">
      <CardContent className="flex flex-col gap-4">
        <Label className="font-semibold">Recent Alerts</Label>
        <div className="flex flex-col gap-4 mt-4">
          {mockData.map((item, i) => {
            return (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 bg-primary-blue-100 rounded-full"></div>
                <div className="flex flex-col gap-2">
                  <Label className="font-bold">
                    {item.name} - {item.action}
                  </Label>
                  <Label className="font-normal text-white/70">
                    {formatDistanceToNow(new Date(item.date), {
                      addSuffix: true,
                    })}
                  </Label>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
