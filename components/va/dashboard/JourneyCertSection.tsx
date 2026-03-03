"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { IconAward, IconBook } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function JourneyCertSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleJourney = () => {
    try {
      setLoading(true);
      router.push("/virtual-assistant/my-journey");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleJourney2 = () => {
    try {
      setLoading2(true);
      router.push("/virtual-assistant/my-journey");
    } catch (error) {
    } finally {
      setLoading2(false);
    }
  };

  return (
    <div className="flex gap-4 w-full row-to-col">
      <Card className="bg-black/20 border border-primary-blue-200/70 h-auto w-full">
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-primary-blue-100/40 p-4 rounded-xl">
                <IconBook className="text-primary-blue-200"></IconBook>
              </div>
              <div className="flex flex-col gap-2 w-full justify-center">
                <Label className="text-[16px] font-semibold">My Journey</Label>
                <Label className="font-normal">
                  View all modules and lessons
                </Label>
              </div>
            </div>
            <Button onClick={handleJourney}>
              Go to Journey {loading && <Spinner></Spinner>}
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-black/20 border border-primary-blue-200/70 h-auto w-full">
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="bg-green-400/30 p-4 rounded-xl">
                <IconAward className="text-green-200"></IconAward>
              </div>
              <div className="flex flex-col gap-2 w-full justify-center">
                <Label className="text-[16px] font-semibold">
                  Certifications
                </Label>
                <Label className="font-normal">
                  Track certification progress
                </Label>
              </div>
            </div>
            <Button onClick={handleJourney2}>
              Go to Journey {loading2 && <Spinner></Spinner>}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
