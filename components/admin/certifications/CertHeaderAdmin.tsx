"use client";

import {
  CertificationT,
  mockDataCertAdmin,
} from "@/app/admin/certifications/page";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { IconChevronDown } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface CertHeaderT {
  data: CertificationT[];
}

export default function CertHeaderAdmin({ data }: CertHeaderT) {
  const [selectedUser, setSelectedUser] = useState(data[0].email);
  const [filterText, setFilterText] = useState("");
  const [progress, setProgress] = useState(0);
  const [item, setItem] = useState<CertificationT>();

  const filteredList = data.filter((i) =>
    i.email.toLowerCase().includes(filterText.toLowerCase()),
  );

  useEffect(() => {
    const dataFiltered = data.find((i) => i.email === selectedUser);
    if (dataFiltered) {
      setItem(dataFiltered);
      const prog = dataFiltered.progress.filter(
        (i) => i.status === "Completed",
      ).length;
      setProgress(prog ?? 0);
    }
  }, [selectedUser, data]);

  return (
    <Card className="bg-black/20 border border-primary-blue-100/70">
      <CardContent className="flex justify-between items-start gap-4">
        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-col gap-2">
            <Label>Select Virtual Assistant</Label>
            <div className="flex justify-between items-center p-2 border border-primary-blue-100/50 rounded-sm w-80">
              <Label className="truncate">{selectedUser}</Label>
              <IconChevronDown size={18} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 p-2">
            {/* Input for filtering */}
            <Input
              type="text"
              placeholder="Type to filter..."
              className="p-2 mb-2 w-full border border-black/20 rounded-sm bg-black/20 text-black"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            {/* Filtered items */}
            {filteredList.map((user) => (
              <DropdownMenuItem
                key={user.email}
                onClick={() => {
                  setSelectedUser(user.email);
                  setFilterText("");
                }}
              >
                {user.email}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Progress & Status */}
        <div className="flex flex-col items-end gap-2">
          <Label className="text-right font-semibold">
            {progress}/{item?.progress.length ?? 0}
          </Label>
          <Label
            className={`text-right text-[12px] p-1 px-2 rounded-full ${
              progress === 0
                ? "bg-amber-500/40 text-amber-400"
                : progress === item?.progress.length
                  ? "bg-green-500/40 text-green-400"
                  : "bg-blue-600/30 text-blue-400"
            }`}
          >
            {progress === 0
              ? "Idle"
              : progress === item?.progress.length
                ? "Completed"
                : "In Progress"}
          </Label>
        </div>
      </CardContent>
    </Card>
  );
}
