import React from "react";
import * as motion from "motion/react-client";
import { AuroraBackground } from "../ui/aurora-background";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import BackgroundGradientAnimationDemo from "../background-gradient-animation-demo";
import "./../ui/component.css";

export default function Footer() {
  const analytics = [
    {
      title: "Batle-Tested SOPs",
      value: "50+",
    },
    {
      title: "Certified VAs",
      value: "200+",
    },
    {
      title: "Success Rate",
      value: "98%",
    },
    {
      title: "Support Access",
      value: "24/7",
    },
  ];

  return (
    <div className="relative bg-linear from-transparent to-primary-blue-200 w-full h-full overflow-hidden">
      <div className="p-4">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 text-5xl bg-linear-to-br from-primary-blue-200 to-purple-500  py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
          Run FlowChat Like a System — Not Guesswork
        </motion.h1>
        <motion.p
          className="text-xl font-light text-white text-center"
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          Join hundreds of VAs and agencies using the FlowChat Operating System
          to deliver consistent, scalable, and exceptional results.
        </motion.p>
      </div>

      <div className="flex gap-8 w-full items-center justify-center">
        {analytics.map((item, i) => (
          <div key={i}>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 text-5xl bg-linear-to-br from-primary-blue-200 to-purple-500 py-4 bg-clip-text text-center font-bold tracking-tight text-transparent"
            >
              {item.value}
            </motion.h1>
            <motion.p
              className="text-sm font-light text-white text-center"
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {item.title}
            </motion.p>
          </div>
        ))}
      </div>
      <div
        className="absolute -bottom-30 w-full h-50 rounded-full 
bg-gradient-to-r from-blue-500 via-blue-600 to-blue-50 
blur-3xl opacity-60 animate-gradient-move"
      />
    </div>
  );
}
