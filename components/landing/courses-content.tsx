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

const CarouselContent = forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ slides = 4 }, ref) => {
    return (
      <div ref={ref} className="flex w-[500vw] h-screen bg-transparent">
        {content.map((item, i) => (
          <div
            key={i}
            className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-start p-8"
          >
            <div className="max-w-300 w-full min-h-20 relative flex flex-col items-center justify-center">
              <div className="w-full h-20 rounded-full shadow-[0_0_100px_20px_rgb(12,123,121)] absolute bg-white"></div>

              <Card className="w-full overflow-hidden relative bg-primary-blue-400">
                <CardContent className="w-full">
                  <Meteors number={80} />

                  <motion.h1 className="text-2xl bg-linear-to-br from-purple-100 to-primary-blue-100 bg-clip-text text-left font-medium tracking-tight text-transparent">
                    {item.title}
                  </motion.h1>

                  <motion.p className="text-sm text-white font-thin text-left">
                    {item.desc}
                  </motion.p>
                </CardContent>
              </Card>
            </div>
            <div className="w-full flex flex-col gap-4 mt-8">
              {item.lesson.map((item2, ii) => (
                <Link
                  key={ii}
                  href={item2.link}
                  className="w-full flex items-center justify-center"
                >
                  <Card className="w-full max-w-300 bg-linear-90 p-1 rounded-sm from-violet-300 via-blue-100 to-primary-blue-100 shadow-[0_0_20px_0px_rgb(12,123,121)]">
                    <CardContent className="bg-primary-blue-500 p-4 rounded-sm h-full flex gap-2 justify-between items-center">
                      <Label>{item2.title}</Label>
                      <Button className="bg-linear-90 h-8 from-primary-blue-200 to-primary-blue-100">
                        View SOP
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
);

CarouselContent.displayName = "CarouselContent";

export default CarouselContent;
