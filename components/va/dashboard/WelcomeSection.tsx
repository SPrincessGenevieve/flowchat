import { Label } from "@/components/ui/label";
import React from "react";

interface WelcomeT {
  title: string;
  desc: string;
}

export default function WelcomeSection({ title, desc }: WelcomeT) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-3xl font-bold">{title}</Label>
      <Label className="font-normal text-white/70">{desc}</Label>
    </div>
  );
}
