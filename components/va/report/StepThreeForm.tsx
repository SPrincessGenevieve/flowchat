"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

interface StepThreeFormT {
  onClick: () => void;
  onClickBack: () => void;
}

export function StepThreeForm({ onClick, onClickBack }: StepThreeFormT) {
  const [value, setValue] = React.useState("");
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <Input
              value={value}
              className="w-full"
              label="Account Status"
            ></Input>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setValue("Health")}>
              Health
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setValue("Warning")}>
              Warning
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setValue("Blocked")}>
              Blocked
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="col-span-2 flex justify-between gap-2 mt-4">
        <Button onClick={onClickBack} className="w-30" type="submit">
          <IconChevronLeft className="text-white" size={18}></IconChevronLeft>{" "}
          Back
        </Button>
        <Button onClick={onClick} className="w-30" type="submit">
          Next
          <IconChevronRight
            className="text-white"
            size={18}
          ></IconChevronRight>{" "}
        </Button>
      </div>
    </div>
  );
}
