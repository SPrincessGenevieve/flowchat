"use client";

import { forwardRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import * as motion from "motion/react-client";
import { Label } from "../ui/label";
import Link from "next/link";
import { Button } from "../ui/button";

interface CarouselContentProps {
  slides?: number;
}

const content = [
  {
    title: "Getting Started",
    desc: "3 resources",
    lesson: [
      {
        title: "SOP Growth Blueprint",
        link: "/docs/blueprint",
      },
      {
        title: "VA Role & Daily Rhythm",
        link: "/docs/va-role",
      },
      {
        title: "Platform Limits & Safety",
        link: "/docs/limitations",
      },
    ],
  },
  {
    title: "Client Walkthrough",
    desc: "2 resources",
    lesson: [
      {
        title: "Overview & Purpose",
        link: "/docs/overview",
      },
      {
        title: "Client Quick-Start Guide",
        link: "/docs/client-guide",
      },
    ],
  },
  {
    title: "Growth System",
    desc: "3 resources",
    lesson: [
      {
        title: "Maturity Roadmap",
        link: "/docs/maturity",
      },
      {
        title: "Weekly Growth Audit",
        link: "/docs/audit",
      },
      {
        title: "30-Day Optimization Review",
        link: "/docs/optimization",
      },
    ],
  },
  {
    title: "Playbooks & Reports",
    desc: "3 resouces",
    lesson: [
      {
        title: "Script Library",
        link: "/docs/scripts",
      },
      {
        title: "Daily Operations Report",
        link: "/docs/report",
      },
      {
        title: "Best Practices & Skills",
        link: "/docs/best-practices",
      },
    ],
  },
  {
    title: "VA Setup & Compliance",
    desc: "3 resources",
    lesson: [
      {
        title: "Pre-Call Protocol",
        link: "/docs/setup",
      },
      {
        title: "Compliance & Limits",
        link: "/docs/compliance",
      },
      {
        title: "VA Certification Checklist",
        link: "/docs/certification",
      },
    ],
  },
];

import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

export default function CoursesContent() {
  return (
    <div className="grid grid-cols-3 course-cont gap-8 p-8">
      {content.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex"
        >
          <Card className="h-auto w-full  bg-primary-blue-100/10">
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label className="font-bold">{item.title}</Label>
                <Label className="font-normal text-[12px] text-white/30">
                  {item.desc}
                </Label>
              </div>

              <div className="flex flex-col gap-2">
                {item.lesson.map((item2, ii) => (
                  <div
                    key={ii}
                    className="flex justify-between gap-2 py-2  border-b-2 border-transparent hover:border-primary-blue-100 transition ease-in-out"
                  >
                    <Label>{item2.title}</Label>
                    <IconArrowRight
                      className="text-white"
                      size={16}
                    ></IconArrowRight>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
