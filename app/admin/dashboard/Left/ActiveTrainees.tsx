import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

export default function ActiveTrainees() {
  const mockData = [
    {
      name: "John Doe",
      phase_status: "Phase 1 - Onboarding",
      progress: 40,
      status: "In Progress",
    },
    {
      name: "Mike Thompson",
      phase_status: "Phase 2 - Tech Review",
      progress: 100,
      status: "Passed",
    },
    {
      name: "Elena Rodriguez",
      phase_status: "Phase 3 - Live Perf",
      progress: 40,
      status: "In Progress",
    },
    {
      name: "David Chen",
      phase_status: "Phase 1 - Onboarding",
      progress: 100,
      status: "Passed",
    },
  ];

  return (
    <Card className="w-full h-full bg-black/20 border border-primary-blue-100/50">
      <CardContent>
        <Label className="font-semibold mb-4">Active Trainees</Label>
        <Table>
          <TableHeader>
            <TableRow>
              {["Virtual Assistant", "Phase", "Progress", "Status"].map(
                (item, i) => (
                  <TableCell key={i}>
                    <Label>{item}</Label>
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((item, i) => (
              <TableRow className="border-none">
                <TableCell>
                  <Label>{item.name}</Label>
                </TableCell>
                <TableCell>
                  <Label>{item.phase_status}</Label>
                </TableCell>
                <TableCell className="">
                  <div className="flex items-center gap-2">
                    <Progress
                      value={item.progress}
                      className="bg-blue-200/10 w-40"
                    ></Progress>
                    <div className="w-10">
                      <Label className="text-[12px] text-right">
                        {item.progress}%
                      </Label>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <div
                      className={`p-2 rounded-sm ${item.status === "Passed" ? "bg-green-600/40" : "bg-primary-blue-100/20"}`}
                    >
                      <Label
                        className={`${item.status === "Passed" ? "text-green-400" : "text-blue-300"}`}
                      >
                        {item.status}
                      </Label>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
