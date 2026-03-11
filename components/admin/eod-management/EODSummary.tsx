import { EODT } from "@/app/admin/eod-management/page";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

type EODSummaryT = {
  key: number;
  item: EODT;
};

export default function EODSummary({ item, key }: EODSummaryT) {
  return (
    <Card key={key} className="w-full bg-primary-blue-100/20">
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
  );
}
