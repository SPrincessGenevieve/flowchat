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
import { slugify } from "@/lib/slug";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconLink } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const module = [
  {
    module: "Getting Started",
    desc: "3 modules",
    lessons: [
      {
        label: "Strategic Roadmap",
        desc_label:
          "Client Walkthrough & VA Management Guide. This document covers everything the VA needs to set up FlowChat correctly, run daily operations, manage conversations, maintain account health, and optimize performance monthly.",
        href: "/docs/overview",
      },
      {
        label: "Operational System",
        desc_label:
          "The VA is not just sending messages. The VA is managing a lead pipeline and a client relationship every single day.",
        href: "/docs/va-role",
      },
      {
        label: "The Playbook",
        desc_label:
          "Automation reduces workload. Conversion requires human skill. Day 3 covers everything that happens once a lead replies from first response through booking a call.",
        href: "/docs/day/3",
      },
    ],
  },
  {
    module: "Client Walkthrough",
    desc: "4 modules",
    lessons: [
      {
        label: "Day 1: Overview & Strategy",
        desc_label:
          "The objective of Day 1 is to align the client with the 4-step FlowChat system before any technical setup begins.",
        href: "",
      },
      {
        label: "Day 2: Lead Import",
        desc_label:
          "Set up the lead pipeline from scratch. Define who you are targeting, where you are finding them, and how the automation handles each stage of the friend request and first message flow.",
        href: "",
      },
      {
        label: "Day 3: Manual Messaging",
        desc_label:
          "Automation reduces workload. Conversion requires human skill. Day 3 covers everything that happens once a lead replies from first response through booking a call.",
        href: "",
      },
      {
        label: "Day 4: Automation & Scaling",
        desc_label:
          "With the foundation set, Day 4 focuses on configuring automation correctly, understanding how the pipeline scales, and connecting outreach volume directly to revenue outcomes.",
        href: "",
      },
    ],
  },
  {
    module: "Operations",
    desc: "4 modules",
    lessons: [
      {
        label: "Lead Qualification Logic",
        desc_label:
          "After the first 30 days of running FlowChat, conduct a structured review of every key metric. Use this review to identify exactly where the pipeline is leaking and make targeted adjustments.",
        href: "",
      },
      {
        label: "Ghosting Protocols",
        desc_label:
          "FlowChat operates within platform rules. Violating these rules risks temporary blocks, messaging restrictions, or a permanent ban. The VA is responsible for maintaining account health at all times.",
        href: "",
      },
      {
        label: "Appointment Setting Flows",
        desc_label:
          "Complete every item in this checklist before the client session and before any automation is turned on.",
        href: "",
      },
      {
        label: "Reporting & Analytics",
        desc_label: "",
        href: "",
      },
    ],
  },
  {
    module: "Management",
    desc: "1 modules",
    lessons: [
      {
        label: "VA Management Best Practices",
        desc_label:
          "The VA is not just sending messages. The VA is managing a lead pipeline and a client relationship every single day.",
        href: "",
      },
    ],
  },
  {
    module: "Safety",
    desc: "2 modules",
    lessons: [
      {
        label: "Crisis Management Protocols",
        desc_label:
          "FlowChat operates within platform rules. Violating these rules risks temporary blocks, messaging restrictions, or a permanent ban. The VA is responsible for maintaining account health at all times.",
        href: "",
      },
      {
        label: "Account Safety & Compliance",
        desc_label:
          "Complete every item in this checklist before the client session and before any automation is turned on.",
        href: "",
      },
    ],
  },
  {
    module: "Tech",
    desc: "1 modules",
    lessons: [
      {
        label: "Custom CRM Integrations",
        desc_label:
          "After the first 30 days of running FlowChat, conduct a structured review of every key metric. Use this review to identify exactly where the pipeline is leaking and make targeted adjustments.",
        href: "",
      },
    ],
  },
  {
    module: "Communication",
    desc: "1 modules",
    lessons: [
      {
        label: "Rebuttal Mastery",
        desc_label:
          "After the first 30 days of running FlowChat, conduct a structured review of every key metric. Use this review to identify exactly where the pipeline is leaking and make targeted adjustments.",
        href: "",
      },
    ],
  },
  {
    module: "Certification",
    desc: "1 modules",
    lessons: [
      {
        label: "Certification Final Review",
        desc_label:
          "Complete every item in this checklist before the client session and before any automation is turned on.",
        href: "",
      },
    ],
  },
];

export default function Modules() {
  const router = useRouter();
  const { modules } = useModule();
  const [collapse, setCollapse] = useState<number | null>(null);
  const getProgress = (lessons: any[]) => {
    const completed = lessons.filter((l) => l.isCompleted).length;
    return Math.round((completed / lessons.length) * 100);
  };

  useEffect(() => {
    localStorage.setItem("is_open", JSON.stringify(false));
  }, []);

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

  return (
    <div className="flex flex-col gap-8 mb-8">
      <Label className="text-xl">Core Modules</Label>
      <div className="flex flex-col gap-4 w-full">
        {modules.map((item, i) => {
          const isOpen = collapse === i;

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
                      <div className="w-30 h-2 rounded-full bg-primary-blue-100/20"></div>
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
                          className={`${lesson.isLocked ? "bg-primary-blue-100/10" : "bg-primary-blue-100/20 hover:bg-primary-blue-100/50"}    transition ease-in-out p-0`}
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
                                  disabled={lesson.isLocked ? true : false}
                                >
                                  <Button
                                    disabled={lesson.isLocked ? true : false}
                                    className="w-40 cursor-pointer"
                                  >
                                    {lesson.isLocked ? "Locked" : "Take Quiz"}
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
                                    <DialogDescription>
                                      <Label className="text-white/70 font-normal leading-5">
                                        You’re about to begin this certification
                                        exam. Make sure you’re ready, as your
                                        progress will be recorded once you
                                        start.
                                      </Label>
                                    </DialogDescription>
                                  </DialogHeader>
                                  <DialogFooter>
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
