"use client";

import { EODDataT } from "@/app/admin/eod-management/page";
import DynamicTable, { Column } from "@/components/DynamicTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  IconCell,
  IconMessage,
  IconPhone,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

interface EODTableT {
  item: EODDataT[];
}

export const healthStyles: Record<string, string> = {
  Healthy: "bg-green-600/40 text-green-400",
  Warning: "bg-yellow-600/40 text-yellow-400",
  Critical: "bg-red-600/40 text-red-400",
};

export default function EODMangementTable({ item }: EODTableT) {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<EODDataT | null>(null);

  const columns: Column<EODDataT>[] = [
    {
      key: "date",
      title: <Label className="text-white/40">Date</Label>,
      render: (row) => <Label className="h-8">{row.date}</Label>,
    },
    {
      key: "virtualAssistantName",
      title: <Label className="text-white/40">Virtual Assistant</Label>,
      render: (row) => <Label>{row.virtualAssistantName}</Label>,
    },
    {
      key: "newLeads",
      title: (
        <Label className="text-white/40 text-center w-full flex items-center justify-center">
          Leads
        </Label>
      ),
      render: (row) => (
        <Label className="text-center w-full flex items-center justify-center">
          {row.dailyPerformanceNumbers.newLeads}
        </Label>
      ),
    },
    {
      key: "conversations",
      title: (
        <Label className="text-white/40 text-center w-full flex items-center justify-center">
          Conversations
        </Label>
      ),
      render: (row) => (
        <Label className="text-center w-full flex items-center justify-center">
          {row.dailyPerformanceNumbers.conversations}
        </Label>
      ),
    },
    {
      key: "callsBooked",
      title: (
        <Label className="text-white/40 text-center w-full flex items-center justify-center">
          Booked Calls
        </Label>
      ),
      render: (row) => (
        <Label className="text-center w-full flex items-center justify-center">
          {row.dailyPerformanceNumbers.callsBooked}
        </Label>
      ),
    },
    {
      key: "accountHealth",
      title: (
        <Label className="text-white/40 text-center w-full flex items-center justify-center">
          Account Health
        </Label>
      ),
      render: (row) => (
        <div className="flex items-center justify-center">
          <Label
            className={`${healthStyles[row.accountHealth]} text-center px-2 rounded-full py-1 flex items-center justify-center`}
          >
            {row.accountHealth}
          </Label>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Card className="bg-primary-blue-100/20 border border-primary-blue-100/40">
        <CardContent>
          <Label className="mb-4 text-xl">EOD Reports</Label>
          <DynamicTable
            itemsPerPage={10}
            onClickRowBody={(row) => {
              setSelectedRow(row);
              setOpen(true);
            }}
            data={item}
            columns={columns}
          />
        </CardContent>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={`overflow-y-auto virtual-info-cont w-full min-w-200 bg-primary-blue-500 shadow-[0_0_10px_0px_#ffffff]`}
        >
          <DialogHeader className="flex border-b border-primary-blue-100/70 pb-4">
            <DialogTitle className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <Label className="text-xl">Daily Report Audit</Label>
                <Label
                  className={`rounded-[5px] p-1 px-2 ${healthStyles[selectedRow?.accountHealth ?? ""] ?? ""}`}
                >
                  {selectedRow?.accountHealth}
                </Label>
              </div>
              <div>
                <Label className="font-light">
                  {selectedRow?.virtualAssistantName}
                </Label>
                <Label className="font-light">{selectedRow?.email}</Label>
                <Label className="font-light">
                  Report Date: {selectedRow?.date}
                </Label>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 mb-4">
              <Label className="text-[16px]">Daily Performance Numbers</Label>
              <div className="grid grid-cols-4 gap-4 eod-report-dialog">
                <Card className="bg-primary-blue-100/40 p-4 flex flex-col justify-between">
                  <div className="flex  gap-4">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <IconUsers size={18} className="text-white"></IconUsers>
                    </div>
                    <Label>New Leads</Label>
                  </div>
                  <Label className="text-2xl">
                    {selectedRow?.dailyPerformanceNumbers.newLeads}
                  </Label>
                </Card>
                <Card className="bg-primary-blue-100/40 p-4 flex flex-col justify-between">
                  <div className="flex  gap-4">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <IconUserPlus
                        size={18}
                        className="text-white"
                      ></IconUserPlus>
                    </div>

                    <Label>Friend Requests</Label>
                  </div>
                  <Label className="text-2xl">
                    {selectedRow?.dailyPerformanceNumbers.friendRequests}
                  </Label>
                </Card>
                <Card className="bg-primary-blue-100/40 p-4 flex flex-col justify-between">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <IconMessage
                        size={18}
                        className="text-white"
                      ></IconMessage>
                    </div>
                    <Label>Converstations</Label>
                  </div>
                  <Label className="text-2xl">
                    {selectedRow?.dailyPerformanceNumbers.conversations}
                  </Label>
                </Card>
                <Card className="bg-primary-blue-100/40 p-4 flex flex-col justify-between">
                  <div className="flex gap-4">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <IconPhone size={18} className="text-white"></IconPhone>
                    </div>
                    <Label>Calls Booked</Label>
                  </div>
                  <Label
                    className={`text-2xl ${(selectedRow?.dailyPerformanceNumbers.callsBooked ?? 0 > 0) ? "text-green-300" : "text-red-500"}`}
                  >
                    {selectedRow?.dailyPerformanceNumbers.callsBooked}
                  </Label>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-primary-blue-100/70 py-4">
              <Label className="text-[16px]">Account Insights</Label>
              <div className="grid grid-cols-3 gap-4 card-account-cont">
                <Card className="bg-primary-blue-100/20 p-4">
                  <CardContent className="w-full p-0 flex flex-col gap-2">
                    <Label className="text-[12px] font-light text-white/70">
                      Top Group
                    </Label>
                    <Label>{selectedRow?.accountInsights.topGroup}</Label>
                  </CardContent>
                </Card>
                <Card className="bg-primary-blue-100/20 p-4">
                  <CardContent className="w-full p-0 flex flex-col gap-2">
                    <Label className="text-[12px] font-light text-white/70">
                      Common Objection
                    </Label>
                    <Label>
                      {selectedRow?.accountInsights.commonObjection}
                    </Label>
                  </CardContent>
                </Card>
                <Card className="bg-primary-blue-100/20 p-4">
                  <CardContent className="w-full p-0 flex flex-col gap-2">
                    <Label className="text-[12px] font-light text-white/70">
                      Winning Hook
                    </Label>
                    <Label className="italic">
                      {selectedRow?.accountInsights.winningHook}
                    </Label>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-primary-blue-100/70 py-4">
              <Label className="text-[16px]">Warnings & Blockers</Label>
              <div className="grid grid-cols-3 gap-4 card-account-cont">
                <Card className="bg-primary-blue-100/20 p-4">
                  <CardContent className="w-full p-0 flex flex-col gap-2">
                    <Label className="text-[12px] font-light text-white/70">
                      Health Comments
                    </Label>
                    <Label>
                      {selectedRow?.warningsAndBlockers.healthComments}
                    </Label>
                  </CardContent>
                </Card>
                <Card className="bg-primary-blue-100/20 p-4">
                  <CardContent className="w-full p-0 flex flex-col gap-2">
                    <Label className="text-[12px] font-light text-white/70">
                      Action Taken
                    </Label>
                    <Label>
                      {selectedRow?.warningsAndBlockers.actionTaken}
                    </Label>
                  </CardContent>
                </Card>
                <Card className="bg-primary-blue-100/20 p-4">
                  <CardContent className="w-full p-0 flex flex-col gap-2">
                    <Label className="text-[12px] font-light text-white/70">
                      Winning Hook
                    </Label>
                    <Label className="">
                      {selectedRow?.warningsAndBlockers.criticalBlockers}
                    </Label>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-primary-blue-100/70 py-4">
              <Label className="text-[16px]">VA Recommendations</Label>
              <div className="">
                <Card className="bg-primary-blue-100/20 p-4">
                  <CardContent className="w-full p-0 flex flex-col gap-2">
                    <Label>{selectedRow?.vaRecommendations}</Label>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
