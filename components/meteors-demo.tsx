import React from "react";
import { Meteors } from "@/components/ui/meteors";

export default function MeteorsDemo() {
  return (
    <div className="">
      <div className="relative w-full max-w-xl">
        {/* <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" /> */}
        <div className="relative flex h-[400px] flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-transparent px-4 py-8 shadow-xl">
          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
            Meteors because they&apos;re cool
          </h1>

          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
            Sample text here.
          </p>

          <button className="relative z-50 rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
            Explore
          </button>

          <div className="absolute inset-0">
            <Meteors number={70} />
          </div>
        </div>
      </div>
    </div>
  );
}
