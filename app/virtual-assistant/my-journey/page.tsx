import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import FlowChatCertSection from "@/components/va/journey/FlowChatCertSection";
import ProgressSection from "@/components/va/journey/ProgressSection";
import React from "react";

export default function MyJourney() {
  return (
    <div className="flex flex-col gap-8">
      <WelcomeSection
        title={"My FlowChat Journey"}
        desc={"Track your progress through the FlowChat Core Training Program"}
      ></WelcomeSection>
      <ProgressSection></ProgressSection>
      <FlowChatCertSection></FlowChatCertSection>
    </div>
  );
}
