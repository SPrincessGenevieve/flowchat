import { Label } from "@/components/ui/label";
import JourneyCertSection from "@/components/va/dashboard/JourneyCertSection";
import PerformanceSection from "@/components/va/dashboard/PerformanceSection";
import ProgressSection from "@/components/va/dashboard/ProgressSection";
import RecentActivitySection from "@/components/va/dashboard/RecentActivitySection";
import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import React from "react";

export default function VirtualAssistant() {
  return (
    <div className="w-full flex flex-col gap-8">
      <WelcomeSection
        title={"Welcome Back!"}
        desc={"Track your progress and continue your learning journey."}
      ></WelcomeSection>
      <PerformanceSection></PerformanceSection>
      <ProgressSection></ProgressSection>
      <JourneyCertSection></JourneyCertSection>
      <RecentActivitySection></RecentActivitySection>
    </div>
  );
}
