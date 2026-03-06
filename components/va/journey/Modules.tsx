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
import { useModule } from "@/context/ModuleContext";
import { useUserContext } from "@/context/UserContext";
import { slugify } from "@/lib/slug";
import { ModuleT } from "@/lib/type";
import { cn } from "@/lib/utils";
import { IconBulb, IconChevronDown, IconLink } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const getTotalCompleted = (modules: ModuleT[]) => {
  return modules.reduce((acc, module) => {
    return (
      acc +
      module.lessons.filter((lesson) => lesson.status === "Complete").length
    );
  }, 0);
};

export default function Modules() {
  const router = useRouter();
  const { modules } = useModule();
  const { setUserDetails } = useUserContext();
  const [collapse, setCollapse] = useState<number | null>(null);
  const [waiting, setWaiting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const getProgress = (lessons: any[]) => {
    const completed = lessons.filter((l) => l.status === "Complete").length;
    return Math.round((completed / lessons.length) * 100);
  };

  useEffect(() => {
    localStorage.setItem("is_open", JSON.stringify(false));

    const waitStart = localStorage.getItem("quiz_wait_start");

    if (waitStart) {
      const start = Number(waitStart);
      const now = Date.now();
      const diff = now - start;

      const waitDuration = 15 * 60 * 1000; // 15 minutes

      if (diff < waitDuration) {
        setWaiting(true);
        setTimeLeft(waitDuration - diff);
      } else {
        localStorage.removeItem("quiz_wait_start");
        setWaiting(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!waiting) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(timer);
          setWaiting(false);
          localStorage.removeItem("quiz_wait_start");
          return 0;
        }

        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [waiting]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggle = (index: number) => {
    setCollapse(collapse === index ? null : index);
  };

  const handleStart = (module: string, lesson: string) => {
    const url = `/virtual-assistant/certifications/${module}/lesson/${lesson}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const navResources = (href: string) => {
    router.push(href);
    // window.open(href, "_blank", "noopener,noreferrer");
  };



  const mod = modules.find((i) => i.status === "Pending");
  const less = mod?.lessons.find((i) => i.status === "Pending");

  useEffect(() => {
    setUserDetails({
      currentLesson: `/virtual-assistant/certifications/${mod?.id}/lesson/${less?.id}`,
    });
  }, [modules]);

  return (
    <div className="flex flex-col gap-8 mb-8">
      <Label className="text-xl">Core Modules</Label>
      <div className="flex flex-col gap-4 w-full">
        {modules.map((item, i) => {
          const isOpen = collapse === i;
          const progress = getProgress(item.lessons);

          return (
            <Card
              key={i}
              className={`w-full bg-black/20 border border-primary-blue-100/40 overflow-hidden cursor-pointer p-2 py-4`}
            >
              <CardContent className="p-0">
                {/* Header (Always Visible - 40px) */}
                <div
                  onClick={() => toggle(i)}
                  className="min-h-10 w-full px-4 flex flex-wrap-reverse gap-4 items-center justify-between"
                >
                  <div className="flex flex-col">
                    <Label className="text-[14px] font-semibold">
                      {item.title}
                    </Label>
                    <Label className="font-normal text-white/40 text-sm block">
                      {item.desc}
                    </Label>
                  </div>

                  <div className="flex w-full items-center justify-center gap-4">
                    <div className="flex flex-col gap-2 justify-center items-end w-full">
                      <Label>{getProgress(item.lessons)}%</Label>
                      <div className="w-30 h-2 rounded-full overflow-hidden bg-primary-blue-100/20">
                        <div
                          style={{ width: `${progress}%` }}
                          className={` bg-primary-blue-100 h-full`}
                        ></div>
                      </div>
                    </div>

                    <IconChevronDown
                      className={`text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-400 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 py-8">
                    <div className="grid grid-cols-2 gap-4 module-cont">
                      {item.lessons.map((lesson, idx) => (
                        <Card
                          key={idx}
                          className={`${lesson.isLocked ? "bg-primary-blue-100/10" : "bg-primary-blue-100/20 hover:bg-primary-blue-100/40"}    transition ease-in-out p-0`}
                        >
                          <CardContent className="p-4 flex flex-col justify-between h-full">
                            <div className="py-2 flex flex-col gap-2">
                              <Label className="font-bold">
                                {lesson.title}
                              </Label>
                            </div>
                            <div className="w-full flex flex-wrap justify-end mt-4 gap-4">
                              <Button
                                onClick={() => navResources(lesson.href)}
                                className="w-40 cursor-pointer bg-transparent text-primary-blue-100 border-primary-blue-100 hover:bg-purple-400/30 hover:text-white"
                                variant={"outline"}
                              >
                                View Resouces <IconLink></IconLink>
                              </Button>
                              <Dialog>
                                <DialogTrigger
                                  disabled={
                                    lesson.isLocked
                                      ? true
                                      : lesson.status === "Complete"
                                        ? true
                                        : waiting
                                  }
                                >
                                  <Button
                                    disabled={
                                      lesson.isLocked
                                        ? true
                                        : lesson.status === "Complete"
                                          ? false
                                          : waiting
                                    }
                                    variant={
                                      lesson.status === "Complete"
                                        ? "ghost"
                                        : "default"
                                    }
                                    className={`w-40 cursor-pointer ${lesson.status === "Complete" ? "bg-linear-90 from-green-500 hover:text-white to-green-700 text-white" : ""}`}
                                  >
                                    {lesson.isLocked
                                      ? "Locked"
                                      : lesson.status === "Complete"
                                        ? "Completed"
                                        : waiting
                                          ? `Retry in ${formatTime(timeLeft)}`
                                          : "Take Quiz"}
                                  </Button>
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
                                        You’re about to begin this certification
                                        exam. Make sure you’re ready, as your
                                        progress will be recorded once you
                                        start.
                                      </Label>
                                      <div className="bg-primary-blue-200/20 rounded-xl p-2 flex items-center gap-4">
                                        <IconBulb
                                          className="text-white"
                                          size={40}
                                        ></IconBulb>
                                        <Label className="leading-5 font-normal ">
                                          Complete the quiz with 80% or higher
                                          to mark this lesson complete and
                                          unlock the next lesson.
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
                                        <Button
                                          onClick={() =>
                                            handleStart(
                                              slugify(item.title),
                                              slugify(lesson.title),
                                            )
                                          }
                                        >
                                          Start Exam
                                        </Button>
                                      </DialogClose>
                                    </div>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
