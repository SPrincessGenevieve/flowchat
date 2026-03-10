"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { IconMessage, IconUserPlus, IconUsers } from "@tabler/icons-react";
import React from "react";

export default function LeftSummary() {
  const summary = [
    {
      label: "Total Leads Generated",
      value: 1240,
      icon: IconUserPlus,
    },
    {
      label: "Friend Requests Sent",
      value: 8450,
      icon: IconUsers,
    },
    {
      label: "Conversations Started",
      value: 3210,
      icon: IconMessage,
    },
    {
      label: "Total Replies",
      value: 1890,
      icon: IconMessage,
    },
    {
      label: "Calls Booked",
      value: 142,
      icon: IconMessage,
    },
  ];
  return (
    <Card className="w-full h-full bg-black/20 border border-primary-blue-100/50">
      <CardContent>
        <Label className="font-semibold mb-4">Daily Outreach Summary</Label>
        <div className="grid grid-cols-5 daily-summary-cont gap-4 h-full">
          {summary.map((item, i) => (
            <Card key={i} className="w-full bg-primary-blue-100/20">
              <CardContent className="flex flex-col gap-2">
                <item.icon className="text-white" size={15}></item.icon>
                <Label className="text-xl font-bold">{item.value}</Label>
                <Label className="text-[11px] font-light">{item.label}</Label>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
