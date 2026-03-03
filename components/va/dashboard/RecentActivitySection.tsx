import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";

export default function RecentActivitySection() {
  return (
    <Card className="bg-black/20 border mb-4 border-primary-blue-200/70 h-auto min-h-40 w-full">
      <CardContent className="flex flex-col gap-4 w-full h-full">
        <div className="flex items-center gap-4">
          <Label className="text-xl">Recent Activity</Label>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <Label>No recent activity</Label>
        </div>
      </CardContent>
    </Card>
  );
}
