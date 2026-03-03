"use client";

import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { IconArrowRight, IconBook, IconPoint } from "@tabler/icons-react";
import Gallery from "./gallery";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="w-full h-full section-l1 flex relative">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          mass: 0.8,
        }}
        className="w-full h-full p-8 section-l1-l flex flex-col justify-center"
      >
        <Card className="w-full min-w-auto bg-transparent shadow-none">
          <CardContent className="p-2 shadow-none flex flex-col gap-4">
            <div className="flex">
              <div className="flex items-center gap-2 border border-primary-blue-200 rounded-full p-2 px-4">
                <div className="h-2 w-2 bg-primary-blue-200 rounded-full"></div>
                <Label className="font-light text-sm text-blue-200">
                  System-Driven Excellence
                </Label>
              </div>
            </div>
            <div>
              <Label className="text-transparent bg-clip-text text-5xl font-extrabold bg-linear-to-r from-primary-blue-100 to-blue-300">
                The FlowChat
              </Label>
              <Label className="text-transparent bg-clip-text text-5xl font-extrabold bg-linear-to-r from-blue-500 to-purple-500 leading-tight">
                Operating System
              </Label>
            </div>
            <Label className="leading-7 text-sm font-light">
              Everything a Virtual Assistant and client needs to run a FlowChat
              account — from day-one setup to weekly audits, scripts, and
              reports.
            </Label>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-4 p-2">
          <Button
            onClick={() => router.push("/docs/blueprint")}
            className="btn-hero group p-4 h-10 bg-linear-90 from-primary-blue-100 to-primary-blue-200 
                        hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-primary-blue-200/70 hover:scale-105 
                        transition-all duration-300 ease-out"
          >
            <Label>Start with the Blueprint</Label>
            <IconArrowRight className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={() => router.push("/docs/va-role")}
            variant={"outline"}
            className="btn-hero group p-4 h-10 bg-transparent border-primary-blue-200 hover:bg-transparent hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-primary-blue-200/70 hover:scale-105 
                        transition-all duration-300 ease-out"
          >
            <IconBook color="white" className="" />
            <Label className="transition-transform duration-300 ease-out  group-hover:translate-x-1">
              VA Onboarding Guide
            </Label>
          </Button>
        </div>
        {/* <motion.section className="section-l1 p-8 w-1/2 h-full flex flex-col justify-center"></motion.section> */}
      </motion.div>
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
        className="w-full h-full section-l1-r overflow-hidden"
      >
        <Gallery></Gallery>
      </motion.div>
    </section>
  );
}
