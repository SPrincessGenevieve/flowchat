"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProgressSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <Card className="bg-black/20 border border-primary-blue-200/70 h-auto">
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col gap-2">
            <Label className="text-xl font-semibold">Overall Progress</Label>
            <Label className="font-normal">
              Complete all modules to unlock certification
            </Label>
          </div>
          <Button>Continue Learning</Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <Label className="font-normal">Training Completion</Label>
              <Label className="font-normal text-sm">0%</Label>
            </div>
            <div className="w-full bg-primary-blue-100/20 h-4 rounded-full relataive"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
