"use client";
import * as motion from "motion/react-client";
import { Label } from "../ui/label";
import {
  IconBook,
  IconChartArcs,
  IconMedal,
  IconRocket,
  IconTimeline,
  IconUsers,
} from "@tabler/icons-react";
import { NoiseBackground } from "../ui/noise-background";
import GlowCard from "../glow-card";
import Link from "next/link";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { LampContainer } from "../ui/lamp";
import GlowingCover from "./glowingCover";

const card = [
  {
    icon: IconRocket,
    title: "SOP Growth Blueprint",
    desc: "Complete system roadmap",
    link: "/docs/blueprint",
  },
  {
    icon: IconUsers,
    title: "VA Role & Daily Rhythm",
    desc: "Clear expectations & workflows",
    link: "/docs/va-role",
  },
  {
    icon: IconChartArcs,
    title: "Daily Operations Report",
    desc: "Track execution in real-time",
    link: "/docs/report",
  },
  {
    icon: IconTimeline,
    title: "Weekly Growth Audit",
    desc: "Optimize & improve continuously",
    link: "/docs/audit",
  },
  {
    icon: IconBook,
    title: "Script Playbook",
    desc: "Every scenario handled",
    link: "/docs/scripts",
  },
  {
    icon: IconMedal,
    title: "VA Certification",
    desc: "Verified expertise & standards",
    link: "/docs/certification",
  },
];

export default function QuickAccess() {
  return (
    <div className="w-full h-full ">
      <BackgroundBeamsWithCollision className="min-h-screen h-auto flex items-start bg-transparent">
        <div className="flex w-full min-h-screen h-full flex-col ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              mass: 0.8,
            }}
          >
            <BackgroundGradientAnimation className=" h-50 flex items-center justify-center">
              <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <motion.h1 className="mt-8 text-5xl bg-linear-to-br from-purple-300 to-primary-blue-200 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent">
                  Quick Access
                </motion.h1>
                <motion.p className="font-thin text-xl text-center">
                  Your essential tools and resources, one click away
                </motion.p>
              </div>
            </BackgroundGradientAnimation>
          </motion.div>
          <div className="w-full h-full p-8">
            <div className="p-4 w-full h-full quick-access  flex flex-col gap-12 items-center justify-center">
              <div className="flex justify-center"></div>
              <div className="grid grid-cols-3 gap-8 max-w-300 w-full quick-access-cont">
                {card.map((item, i) => (
                  <Link href={item.link} target="_blank" key={i}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.4,
                        delay: i / 4,
                        scale: {
                          type: "spring",
                          visualDuration: 0.4,
                          bounce: 0.5,
                        },
                      }}
                    >
                      <NoiseBackground className="h-full">
                        <GlowCard item={item}></GlowCard>
                      </NoiseBackground>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
