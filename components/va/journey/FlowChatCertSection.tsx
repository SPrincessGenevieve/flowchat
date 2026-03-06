"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useUserContext } from "@/context/UserContext";
import { IconAward, IconDownload, IconLock } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import DownloadCertificate from "../certifications/DownloadCertiticate";

export default function FlowChatCertSection() {
  const { module_completed } = useUserContext();
  const [isComplete, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(module_completed === 17 ? true : false);
  }, [module_completed]);

  return (
    <Card className={`w-full bg-primary-blue-100/30 border-primary-blue-100`}>
      <CardContent className="flex gap-4">
        <div className="course-icon">
          <div className="bg-blue-500/40 p-2 rounded-xl">
            <IconAward className="text-white" size={40}></IconAward>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Label className="text-xl font-semibold">
                  FlowChat Core Certification
                </Label>
                {!isComplete && (
                  <div className="flex gap-2 items-center justify-center border rounded-full p-1 px-2 opacity-40">
                    <IconLock className="text-white" size={15}></IconLock>
                    <Label className="font-normal">Locked</Label>
                  </div>
                )}
              </div>
              <Label className="font-normal leading-5">
                {isComplete
                  ? "Congratulations! You've officially completed all milestone modules and unlocked your certification."
                  : "Complete all milestone modules to unlock certification."}
              </Label>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* <Button>Start Certification</Button> */}
            {isComplete ? (
              <DownloadCertificate></DownloadCertificate>
            ) : (
              <Button
                variant={"outline"}
                className="bg-transparent hover:bg-primary-blue-100/20 hover:text-white border text-white border-primary-blue-100"
              >
                <IconLock></IconLock>
                Complete Modules
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
