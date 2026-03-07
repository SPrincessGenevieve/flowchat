"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { getTotalCompleted } from "@/components/va/journey/Modules";
import { useModule } from "@/context/ModuleContext";
import { useUserContext } from "@/context/UserContext";
import {
  IconArrowUpRight,
  IconLock,
  IconMessage,
  IconPhone,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";

export default function CardSummary() {
  const card = [
    {
      title: "New Leads",
      icon: IconUsers,
      value: "10",
    },
    {
      title: "Friend Requests",
      icon: IconUserPlus,
      value: "3",
    },
    {
      title: "Conversations",
      icon: IconMessage,
      value: "12",
    },
    {
      title: "Calls Booked",
      icon: IconPhone,
      value: "2",
    },
  ];

  return (
    <div className="flex gap-4 w-full grid grid-cols-4 report-card-cont">
      {card.map((item, i) => (
        <Card
          key={i}
          className="bg-black/20 border border-primary-blue-100/30 w-full"
        >
          <CardContent className="flex flex-col gap-2">
            <div className="flex justify-between w-full items-center">
              <Label>{item.title}</Label>
              <div className="bg-primary-blue-100/30 p-2 rounded-[5px] flex items-center justify-center">
                <item.icon className="text-white" size={18}></item.icon>
              </div>
            </div>
            <Label className="text-2xl font-bold">{item.value}</Label>
            <div className="flex gap-2 items-center">
              <IconArrowUpRight
                className="text-green-400"
                size={18}
              ></IconArrowUpRight>
              <Label>From last report</Label>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
