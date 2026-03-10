import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  IconAward,
  IconNote,
  IconTrendingDown,
  IconTrendingUp,
  IconUserCheck,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";

const mockData = [
  {
    label: "Total Virtual Assistants",
    value: 124,
    performance: 4,
    icon: IconUsers,
  },
  {
    label: "Active Trainees",
    value: 18,
    performance: 6,
    icon: IconUserCheck,
  },
  {
    label: "Completed Certs",
    value: 342,
    performance: 12,
    icon: IconAward,
  },
  {
    label: "Daily Reports",
    value: 98,
    performance: 98,
    icon: IconNote,
  },
];

export default function CardSummaryAdmin() {
  return (
    <div className="grid grid-cols-4 card-summmary-admin gap-4 ">
      {mockData.map((item, i) => (
        <Card
          key={i}
          className="p-0 w-full border border-primary-blue-100 bg-primary-blue-100/20"
        >
          <CardContent className="p-4">
            <CardHeader className="flex p-0 items-center justify-between">
              <Label className="">{item.label}</Label>
              <div className="flex items-center justify-center bg-blue-600/50 p-2 rounded-[5px]">
                <item.icon className="text-white"></item.icon>
              </div>
            </CardHeader>
            <div className="flex flex-col gap-4">
              <Label className="font-bold text-2xl">{item.value}</Label>
              <div className="flex gap-2 items-center">
                {item.performance > 0 ? (
                  <IconTrendingUp
                    size={18}
                    className="text-green-500"
                  ></IconTrendingUp>
                ) : (
                  <IconTrendingDown
                    className="text-red-500"
                    size={18}
                  ></IconTrendingDown>
                )}
                <Label
                  className={`${item.performance > 0 ? "text-green-500" : "text-red-500"}`}
                >
                  {item.performance > 0 ? "+" : "-"} {item.performance} this
                  week
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
