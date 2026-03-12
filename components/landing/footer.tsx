import React from "react";
import * as motion from "motion/react-client";
import { AuroraBackground } from "../ui/aurora-background";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import BackgroundGradientAnimationDemo from "../background-gradient-animation-demo";
import "./../ui/component.css";
import { Label } from "../ui/label";

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
    <div className="relative flex flex-col items-center py-8 justify-start bg-linear from-transparent to-primary-blue-200 w-full h-full overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 border border-blue-400 rounded-full p-2 px-4"
          >
            <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
            <Label className="font-light text-sm text-blue-400">
              Transform Your Operations Today
            </Label>
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-5xl bg-linear-to-br from-primary-blue-200 to-purple-500  py-4 bg-clip-text text-center font-medium tracking-tight text-transparent"
        >
          Run FlowChat Like a
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-5xl bg-linear-to-br from-primary-blue-100 to-blue-500  py-4 bg-clip-text text-center font-bold tracking-tight text-transparent"
        >
          System — Not Guesswork
        </motion.h1>
        <motion.p
          className="text-sm font-light text-primary-blue-300 text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          Join hundreds of VAs and agencies using the FlowChat Operating System
          to deliver<br></br>consistent, scalable, and exceptional results.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-8 w-full items-center justify-center">
        {analytics.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
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
              className="text-sm font-light text-primary-blue-400 text-center"
              initial={{ opacity: 0, y: 40 }}
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
    </div>
  );
}
