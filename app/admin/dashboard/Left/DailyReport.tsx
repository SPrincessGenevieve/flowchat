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

export default function DailyReport() {
  const mockData = [
    {
      date: "Today",
      name: "Jessica Alba",
      leads: 40,
      calls: 2,
      health: "Healthy",
    },
    {
      date: "Today",
      name: "Robert Ford",
      leads: 12,
      calls: 0,
      health: "Warning",
    },
    {
      date: "Today",
      name: "Emily Blunt",
      leads: 58,
      calls: 4,
      health: "Healthy",
    },
    {
      date: "Yesterday",
      name: "Tom Cruise",
      leads: 0,
      calls: 0,
      health: "Blocked",
    },
  ];

  return (
    <Card className="w-full h-full bg-black/20 border border-primary-blue-100/20">
      <CardContent>
        <Label className="font-semibold mb-4">Recent Daily Reports</Label>
        <Table>
          <TableHeader>
            <TableRow>
              {["Date", "VA", "Leads", "Calls", "Health"].map((item, i) => (
                <TableCell key={i}>
                  <Label>{item}</Label>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((item, i) => (
              <TableRow className="border-none">
                <TableCell>
                  <Label>{item.date}</Label>
                </TableCell>
                <TableCell>
                  <Label>{item.name}</Label>
                </TableCell>
                <TableCell>
                  <Label>{item.leads}</Label>
                </TableCell>
                <TableCell>
                  <Label>{item.calls}</Label>
                </TableCell>
                <TableCell className="">
                  <div className="flex">
                    <div
                      className={`p-2 rounded-sm ${item.health === "Healthy" ? "bg-green-500/20" : item.health === "Warning" ? "bg-yellow-500/20" : "bg-red-500/30"}`}
                    >
                      <Label
                        className={`${item.health === "Healthy" ? "text-green-400" : item.health === "Warning" ? "text-yellow-400" : "text-red-400"}`}
                      >
                        {item.health}
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
