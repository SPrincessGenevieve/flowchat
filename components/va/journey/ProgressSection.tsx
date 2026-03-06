"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useModule } from "@/context/ModuleContext";
import { useUserContext } from "@/context/UserContext";
import { IconArrowRight, IconBulb } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { getTotalCompleted } from "./Modules";

export default function ProgressSection() {
  const router = useRouter();
  const { modules } = useModule();
  const completedCount = getTotalCompleted(modules);
  const { currentLesson } = useUserContext();
  const [loading, setLoading] = useState(false);
  const percent = ((completedCount / 17) * 100).toFixed(0);

  console.log("LINK: ", currentLesson);
  return (
    <Card className="bg-black/20 border border-primary-blue-200/70 h-auto">
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full flex-wrap gap-4 justify-between items-center">
          <div className="flex flex-col gap-2">
            <Label className="text-xl font-semibold">Overall Progress</Label>
            <Label className="font-normal">
              Complete all modules to unlock certification
            </Label>
          </div>

          <Dialog>
            <DialogTrigger>
              <div className="bg-linear-90 cursor-pointer from-primary-blue-100 to-purple-400 rounded-[5px] h-8 flex items-center justify-center p-2 px-4">
                <Label>Continue Learning</Label>
              </div>
            </DialogTrigger>
            <DialogContent
              className={`bg-primary-blue-500 shadow-[0_0_10px_4px_#ffffff2c]`}
            >
              <DialogHeader>
                <DialogTitle>
                  <Label className="text-xl text-white">
                    Start Certification Exam
                  </Label>
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-4">
                  <Label className="text-white/70 font-normal leading-5">
                    You’re about to begin this certification exam. Make sure
                    you’re ready, as your progress will be recorded once you
                    start.
                  </Label>
                  <div className="bg-primary-blue-200/20 rounded-xl p-2 flex items-center gap-4">
                    <IconBulb className="text-white" size={40}></IconBulb>
                    <Label className="leading-5 font-normal ">
                      Complete the quiz with 80% or higher to mark this lesson
                      complete and unlock the next lesson.
                    </Label>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="">
                <div className="flex gap-2 justify-end">
                  <DialogClose>
                    <Button
                      className="bg-transparent border border-primary-blue-100 hover:bg-primary-blue-100/20 hover:text-white text-primary-blue-100"
                      variant={"ghost"}
                    >
                      Back
                    </Button>
                  </DialogClose>
                  <DialogClose>
                    <Link
                      href={currentLesson}
                      className="bg-linear-90 cursor-pointer from-primary-blue-100 to-purple-400 rounded-[5px] h-8 flex items-center justify-center p-2 px-4"
                    >
                      <Label>Start Exam</Label>
                    </Link>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
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
        </div>
      </CardContent>
    </Card>
  );
}
