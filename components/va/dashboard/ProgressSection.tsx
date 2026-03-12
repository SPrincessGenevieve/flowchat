"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { getTotalCompleted } from "../journey/Modules";
import { useModule } from "@/context/ModuleContext";

export default function ProgressSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { modules } = useModule();
  const completedCount = getTotalCompleted(modules);

  const percent = ((completedCount / 17) * 100).toFixed(0);

  const handleJourney = () => {
    try {
      setLoading(true);
      router.push("/virtual-assistant/certifications");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-black/20 border border-primary-blue-200/70 h-auto">
      <CardContent className="flex flex-col gap-4">
        <Label className="text-xl font-semibold">Your Progress</Label>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <div className="w-full flex justify-between">
              <Label className="font-normal">Training Completion</Label>
              <Label className="font-normal text-sm">{percent}%</Label>
            </div>
            <div className="w-full overflow-hidden bg-primary-blue-100/20 h-4 rounded-full relataive">
              <div
                style={{
                  width: `${percent}%`,
                }}
                className="h-full bg-primary-blue-100 rounded-full"
              ></div>
            </div>
          </div>
          <div className="my-4">
            <Label>
              Keep going! Complete all modules to unlock your certification.
            </Label>
          </div>
          <div>
            <Button className="btn-w" onClick={handleJourney}>
              Continue Learning <IconArrowRight></IconArrowRight>{" "}
              {loading && <Spinner></Spinner>}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
