import React from "react";
import { LampContainer } from "../ui/lamp";
import * as motion from "motion/react-client";
import GlowingCover from "./glowingCover";

export default function Courses() {
  return (
    <GlowingCover>
      <div className="w-full h-full min-h-40 relative overflow-hidden">
        <LampContainer className="absolute pt-60 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 text-5xl bg-linear-to-br from-purple-300 to-primary-blue-200 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
          >
            Inside the Operating System
          </motion.h1>
          <motion.p
            className="text-xl font-thin text-white text-center"
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            Everything organized, nothing overlooked
          </motion.p>
        </LampContainer>
      </div>
    </GlowingCover>
  );
}
