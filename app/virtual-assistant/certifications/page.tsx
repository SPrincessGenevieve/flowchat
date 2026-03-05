import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import FlowChatCertSection from "@/components/va/journey/FlowChatCertSection";
import Modules from "@/components/va/journey/Modules";
import ProgressSection from "@/components/va/journey/ProgressSection";
import React from "react";

export default function Certifications() {
  return (
    <div className="flex flex-col gap-8">
      <WelcomeSection
        title={"My FlowChat Journey"}
        desc={"Track your progress through the FlowChat Core Training Program"}
      ></WelcomeSection>
      <ProgressSection></ProgressSection>
      <FlowChatCertSection></FlowChatCertSection>
      <Modules></Modules>
    </div>
  );
}
