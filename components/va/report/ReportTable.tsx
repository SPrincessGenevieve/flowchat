"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  IconAlertTriangle,
  IconCheck,
  IconCircleCheck,
  IconForbid,
} from "@tabler/icons-react";
import React, { useState } from "react";

type ReportT = {
  date: string;
  status: string;
  lead_imported: number;
  request_sent: number;
  convos_started: number;
  nurture_response: number;
  top_group: string;
  winning_hook: string;
  new_replies: number;
  pending_bookings: number;
  qualified_added: number;
}[];

const mockData: ReportT = [
  {
    date: "2026-03-01",
    status: "Healthy",
    lead_imported: 120,
    request_sent: 88,
    convos_started: 54,
    nurture_response: 40,
    top_group: "Group Alpha",
    winning_hook: "Free Strategy Call",
    new_replies: 33,
    pending_bookings: 12,
    qualified_added: 9,
  },
  {
    date: "2026-03-02",
    status: "Warning",
    lead_imported: 105,
    request_sent: 69,
    convos_started: 41,
    nurture_response: 28,
    top_group: "Group Beta",
    winning_hook: "Limited Offer",
    new_replies: 26,
    pending_bookings: 9,
    qualified_added: 7,
  },
  {
    date: "2026-03-03",
    status: "Blocked",
    lead_imported: 60,
    request_sent: 18,
    convos_started: 12,
    nurture_response: 9,
    top_group: "Group Gamma",
    winning_hook: "Case Study Proof",
    new_replies: 10,
    pending_bookings: 3,
    qualified_added: 2,
  },
  {
    date: "2026-03-04",
    status: "Healthy",
    lead_imported: 160,
    request_sent: 110,
    convos_started: 75,
    nurture_response: 58,
    top_group: "Group Alpha",
    winning_hook: "Automation Demo",
    new_replies: 48,
    pending_bookings: 16,
    qualified_added: 12,
  },
  {
    date: "2026-03-05",
    status: "Warning",
    lead_imported: 115,
    request_sent: 80,
    convos_started: 57,
    nurture_response: 39,
    top_group: "Group Delta",
    winning_hook: "Free Guide",
    new_replies: 31,
    pending_bookings: 11,
    qualified_added: 8,
  },
];

export default function ReportTable() {
  const header = ["Date", "Status", "Leads", "Requests", "Convos", "Calls"];
  const [selectedRow, setSelectedRow] = useState<(typeof mockData)[0] | null>(
    null,
  );

  return (
    <Card className="bg-primary-blue-100/20">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {header.map((item, i) => (
                <TableCell key={i}>
                  <Label
                    className={`w-full flex  items-center ${item !== "Date" && "justify-center"} text-center`}
                  >
                    {item}
                  </Label>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {mockData.map((item, i) => (
              <TableRow key={i} onClick={() => setSelectedRow(item)}>
                <TableCell>
                  <Label className="font-normal py-2 w-full">{item.date}</Label>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 justify-center">
                    {item.status === "Healthy" ? (
                      <div className="flex items-center gap-2">
                        <IconCircleCheck
                          className="text-green-400"
                          size={16}
                        ></IconCircleCheck>
                        <Label className="font-normal rounded-full px-2 py-1 text-green-400 bg-green-700/50">
                          {item.status}
                        </Label>
                      </div>
                    ) : item.status === "Warning" ? (
                      <div className="flex items-center gap-2">
                        <IconAlertTriangle
                          className="text-orange-400"
                          size={16}
                        ></IconAlertTriangle>
                        <Label className="font-normal rounded-full px-2 py-1 text-orange-400 bg-orange-700/50">
                          {item.status}
                        </Label>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <IconForbid
                          className="text-red-500"
                          size={16}
                        ></IconForbid>
                        <Label className="font-normal rounded-full px-2 py-1 text-red-400 bg-red-700/50">
                          {item.status}
                        </Label>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <Label className="font-normal py-2 text-center w-full flex justify-center items-center">
                    {item.lead_imported}
                  </Label>
                </TableCell>
                <TableCell>
                  <Label className="font-normal py-2 text-center w-full flex justify-center items-center">
                    {item.request_sent}
                  </Label>
                </TableCell>
                <TableCell>
                  <Label className="font-normal py-2 text-center w-full flex justify-center items-center">
                    {item.convos_started}
                  </Label>
                </TableCell>
                <TableCell>
                  <Label className="font-normal py-2 text-center w-full flex justify-center items-center">
                    {item.nurture_response}
                  </Label>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Dialog open={!!selectedRow} onOpenChange={() => setSelectedRow(null)}>
          <DialogContent className="overflow-y-auto bg-primary-blue-500 shadow-[0_0_10px_2px_#217bec]">
            <DialogHeader>
              <Label className="font-bold text-xl">
                EOD Report - {selectedRow?.date}
              </Label>
            </DialogHeader>

            <div className="flex flex-col gap-4">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={2} className="">
                      <Label className="font-bold text-primary-blue-100">
                        Daily Numbers
                      </Label>
                    </TableCell>
                  </TableRow>

                  <TableRow className="border-0">
                    <TableCell>
                      <Label className="font-normal text-white/50">
                        Leads Imported
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label className="w-full flex justify-end">
                        {selectedRow?.lead_imported}
                      </Label>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell>
                      <Label className="font-normal text-white/50">
                        Requests Sent
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label className="w-full flex justify-end">
                        {selectedRow?.request_sent}
                      </Label>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell>
                      <Label className="font-normal text-white/50">
                        Convos Started
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label className="w-full flex justify-end">
                        {selectedRow?.convos_started}
                      </Label>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell>
                      <Label className="font-normal text-white/50">
                        Nurture Responses
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label className="w-full flex justify-end">
                        {selectedRow?.nurture_response}
                      </Label>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-0">
                    <TableCell>
                      <Label className="font-normal text-white/50">
                        Calls Booked
                      </Label>
                    </TableCell>
                    <TableCell>
                      <Label className="w-full flex justify-end">
                        {selectedRow?.convos_started}
                      </Label>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table>
                <TableBody>
                  <Table>
                    <TableBody>
                      <TableRow className="border-b border-primary-blue-100">
                        <TableCell
                          className="border-b border-primary-blue-100"
                          colSpan={2}
                        >
                          <Label className="font-bold text-primary-blue-100">
                            Account Health
                          </Label>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0">
                        <TableCell>
                          <Label className="font-normal text-white/50">
                            Status
                          </Label>
                        </TableCell>
                        <TableCell>
                          <Label className="w-full flex justify-end">
                            {selectedRow?.status}
                          </Label>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableBody>
              </Table>
              <Table>
                <TableBody>
                  <Table>
                    <TableBody>
                      <TableRow className="border-b border-primary-blue-100">
                        <TableCell
                          className="border-b border-primary-blue-100"
                          colSpan={2}
                        >
                          <Label className="font-bold text-primary-blue-100">
                            Insights
                          </Label>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0">
                        <TableCell>
                          <Label className="font-normal text-white/50">
                            Top Group
                          </Label>
                        </TableCell>
                        <TableCell>
                          <Label className="w-full flex justify-end">
                            {selectedRow?.top_group}
                          </Label>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0">
                        <TableCell>
                          <Label className="font-normal text-white/50">
                            Winning Hook
                          </Label>
                        </TableCell>
                        <TableCell>
                          <Label className="w-full flex justify-end">
                            {selectedRow?.winning_hook}
                          </Label>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableBody>
              </Table>
              <Table>
                <TableBody>
                  <Table>
                    <TableBody>
                      <TableRow className="border-b border-primary-blue-100">
                        <TableCell
                          className="border-b border-primary-blue-100"
                          colSpan={2}
                        >
                          <Label className="font-bold text-primary-blue-100">
                            Pipeline Movement
                          </Label>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0">
                        <TableCell>
                          <Label className="font-normal text-white/50">
                            New Replies
                          </Label>
                        </TableCell>
                        <TableCell>
                          <Label className="w-full flex justify-end">
                            {selectedRow?.new_replies}
                          </Label>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0">
                        <TableCell>
                          <Label className="font-normal text-white/50">
                            Pending Bookings
                          </Label>
                        </TableCell>
                        <TableCell>
                          <Label className="w-full flex justify-end">
                            {selectedRow?.pending_bookings}
                          </Label>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-0">
                        <TableCell>
                          <Label className="font-normal text-white/50">
                            Qualified Added
                          </Label>
                        </TableCell>
                        <TableCell>
                          <Label className="w-full flex justify-end">
                            {selectedRow?.qualified_added}
                          </Label>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableBody>
              </Table>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
