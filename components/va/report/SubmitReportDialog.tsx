import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { StepOneForm } from "./StepOneForm";
import { useRouter } from "next/navigation";
import { StepTwoForm } from "./StepTwoForm";
import { StepThreeForm } from "./StepThreeForm";
import { StepFourForm } from "./StepFourForm";
import { useUserContext } from "@/context/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toastUI } from "@/components/ui/Toaster";

interface ReportT {
  open: boolean;
  setOpen: (e: boolean) => void;
}

export const formSchema = z.object({
  topGroup: z.string().min(1, "Top Performing Group is required"),
  commonObj: z.string().min(1, "Common Objection is required"),
  winningHook: z.string().min(1, "Winning Hook is required"),
  recommendations: z.string().min(1, "Recommendations is required"),
  blockers: z.string().optional(),
});

export default function SubmitReportDialog({ open = false, setOpen }: ReportT) {
  const [progressStatus, setProgressStatus] = useState(0);
  const { setUserDetails } = useUserContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topGroup: "",
      commonObj: "",
      winningHook: "",
      recommendations: "",
      blockers: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setUserDetails({
      closeDialogReport: !open,
    });
    setProgressStatus(0);
    toastUI.success({
      title: "Succesfully submitted report.",
    });
  }

  const handleNext = () => {
    setProgressStatus(progressStatus + 1);
  };

  const handleBack = () => {
    setProgressStatus(progressStatus - 1);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col min-w-93.75 overflow-y-auto h-full max-h-170 bg-primary-blue-400 border border-primary-blue-100/30">
        <div className="flex flex-col gap-2">
          <Label className="text-xl">Daily Numbers</Label>
          <Label className="font-normal">Step {progressStatus + 1} of 4</Label>
          <div className="flex gap-2 my-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                className={`h-2 w-full 
                    ${progressStatus < index ? "bg-white/20" : "bg-white"}
                    rounded-full`}
                key={index}
              ></div>
            ))}
          </div>
        </div>
        {progressStatus === 0 ? (
          <StepOneForm onClick={handleNext}></StepOneForm>
        ) : progressStatus === 1 ? (
          <StepTwoForm
            onClick={handleNext}
            onClickBack={handleBack}
          ></StepTwoForm>
        ) : progressStatus === 2 ? (
          <StepThreeForm
            onClickBack={handleBack}
            onClick={handleNext}
          ></StepThreeForm>
        ) : (
          <StepFourForm
            onSubmit={onSubmit}
            form={form}
            onClickBack={handleBack}
          ></StepFourForm>
        )}
      </DialogContent>
    </Dialog>
  );
}
