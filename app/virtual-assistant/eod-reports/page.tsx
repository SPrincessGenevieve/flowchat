"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import { getTotalCompleted } from "@/components/va/journey/Modules";
import CardSummary from "@/components/va/report/CardSummary";
import ReportTable from "@/components/va/report/ReportTable";
import SubmitReportDialog from "@/components/va/report/SubmitReportDialog";
import { useModule } from "@/context/ModuleContext";
import { useUserContext } from "@/context/UserContext";
import { IconLock } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export default function EODReports() {
  const { closeDialogReport, setUserDetails } = useUserContext();
  const { modules } = useModule();
  const completedCount = getTotalCompleted(modules);
  const [open, setOpen] = useState(closeDialogReport);

  useEffect(() => {
    setOpen(closeDialogReport);
  }, [closeDialogReport]);

  useEffect(() => {
    setUserDetails({
      closeDialogReport: open,
    });
  }, [open]);

  return (
    <div className="flex flex-col gap-8">
      <WelcomeSection
        title={"EOD Reports"}
        desc={"Submit your End of Day report and track your daily performance."}
      ></WelcomeSection>
      <div className="w-full flex items-center justify-end">
        {completedCount !== 17 ? (
          <Button onClick={() => setOpen(true)}>Submit EOD Report</Button>
        ) : (
          <Tooltip>
            <TooltipTrigger>
              <Button>
                <IconLock></IconLock> Submit EOD Report
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-primary-blue-100 border-primary-blue-100">
              <Label className="leading-5">
                Complete your certification to submit reports
              </Label>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <SubmitReportDialog open={open} setOpen={setOpen}></SubmitReportDialog>
      <CardSummary></CardSummary>
      <ReportTable></ReportTable>
    </div>
  );
}
