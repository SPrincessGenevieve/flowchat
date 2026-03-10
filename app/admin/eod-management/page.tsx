import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import {
  IconArrowBackUp,
  IconMessage,
  IconPhone,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";

export default function EODAdmin() {
  const cardSummary = [
    {
      label: "Total Leads",
      value: 0,
      icon: IconUsers,
      bg: "bg-blue-600/20 ",
      color: "text-blue-400",
    },
    {
      label: "Total Invites",
      value: 0,
      icon: IconUserPlus,
      bg: "bg-purple-600/20",
      color: "text-purple-400",
    },
    {
      label: "Total Convos",
      value: 0,
      icon: IconMessage,
      bg: "bg-green-600/20",
      color: "text-green-400",
    },
    {
      label: "Total Booked",
      value: 0,
      icon: IconPhone,
      bg: "bg-amber-600/20 ",
      color: "text-amber-400",
    },
    {
      label: "Total Replies",
      value: 0,
      icon: IconArrowBackUp,
      bg: "bg-pink-600/20",
      color: "text-pink-400",
    },
  ];

  return (
    <div className="flex flex-col gap-8 dashboard-admin-cont">
      <div className="grid grid-cols-5 daily-summary-cont gap-4 h-full">
        {cardSummary.map((item, i) => (
          <Card key={i} className="w-full bg-primary-blue-100/20">
            <CardContent className="flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <Label className="text-[11px]">{item.label}</Label>
                <div
                  className={`${item.bg} p-1 rounded-[5px] flex items-center justify-center`}
                >
                  <item.icon className={`${item.color}`} size={15}></item.icon>
                </div>
              </div>
              <div>
                <Label className="text-2xl font-bold">{item.value}</Label>
                <Label className="text-[10px] font-light">From 1 reports</Label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
