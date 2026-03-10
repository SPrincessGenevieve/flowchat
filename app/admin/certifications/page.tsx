import CertHeaderAdmin from "@/components/admin/certifications/CertHeaderAdmin";
import CertPhase from "@/components/admin/certifications/CertPhase";
import DynamicTable from "@/components/DynamicTable";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";

type LessonStatus = "Locked" | "Pending" | "Completed";
type Status = "Certified" | "Uncertified";

type LessonProgress = {
  lesson: string;
  status: LessonStatus;
  date: string;
};

export type CertificationT = {
  email: string;
  status: Status;
  progress: LessonProgress[];
  last_updated: string;
};

export const mockDataCertAdmin: CertificationT[] = [
  {
    email: "sarah.lopez@va.com",
    status: "Uncertified",
    last_updated: "Mar 10, 10:00 AM",
    progress: [
      {
        lesson: "Import 50 leads using a keyword filter",
        status: "Completed",
        date: "Mar 9, 9:00 AM",
      },
      {
        lesson: "Move a lead correctly through Stages 01–10",
        status: "Completed",
        date: "Mar 9, 9:30 AM",
      },
      {
        lesson: "Edit and rotate message templates in the Builder",
        status: "Pending",
        date: "",
      },
      {
        lesson: "Confirm booking link is active and working end-to-end",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Archive leads that have been inactive for 21+ days",
        status: "Locked",
        date: "",
      },
      {
        lesson:
          "Recite the safe daily limits for warm and cold accounts from memory",
        status: "Locked",
        date: "",
      },
      {
        lesson:
          "Identify and correctly respond to a Facebook 'Please slow down' warning",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Explain why template rotation matters for account health",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Demonstrate correct manual message spacing (not bulk-sending)",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Convert a 'How much does it cost?' message into a booking",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Execute the full Ghosting Protocol correctly",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Perform the Double-Tap booking method correctly",
        status: "Locked",
        date: "",
      },
      {
        lesson:
          "Rewrite a robotic message into a natural, human-sounding response",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Handle a 'Is this a bot?' reply correctly",
        status: "Locked",
        date: "",
      },
    ],
  },
  {
    email: "anne.bolyn@va.com",
    status: "Certified",
    last_updated: "Feb 24, 5:30 PM",
    progress: [
      {
        lesson: "Import 50 leads using a keyword filter",
        status: "Completed",
        date: "Feb 23, 9:00 AM",
      },
      {
        lesson: "Move a lead correctly through Stages 01–10",
        status: "Completed",
        date: "Feb 23, 9:20 AM",
      },
      {
        lesson: "Edit and rotate message templates in the Builder",
        status: "Completed",
        date: "Feb 23, 9:45 AM",
      },
      {
        lesson: "Confirm booking link is active and working end-to-end",
        status: "Completed",
        date: "Feb 23, 10:10 AM",
      },
      {
        lesson: "Archive leads that have been inactive for 21+ days",
        status: "Completed",
        date: "Feb 23, 10:35 AM",
      },
      {
        lesson:
          "Recite the safe daily limits for warm and cold accounts from memory",
        status: "Completed",
        date: "Feb 23, 11:00 AM",
      },
      {
        lesson:
          "Identify and correctly respond to a Facebook 'Please slow down' warning",
        status: "Completed",
        date: "Feb 23, 11:20 AM",
      },
      {
        lesson: "Explain why template rotation matters for account health",
        status: "Completed",
        date: "Feb 23, 11:40 AM",
      },
      {
        lesson: "Demonstrate correct manual message spacing (not bulk-sending)",
        status: "Completed",
        date: "Feb 23, 1:00 PM",
      },
      {
        lesson: "Convert a 'How much does it cost?' message into a booking",
        status: "Completed",
        date: "Feb 24, 2:00 PM",
      },
      {
        lesson: "Execute the full Ghosting Protocol correctly",
        status: "Completed",
        date: "Feb 24, 2:30 PM",
      },
      {
        lesson: "Perform the Double-Tap booking method correctly",
        status: "Completed",
        date: "Feb 24, 3:00 PM",
      },
      {
        lesson:
          "Rewrite a robotic message into a natural, human-sounding response",
        status: "Completed",
        date: "Feb 24, 4:00 PM",
      },
      {
        lesson: "Handle a 'Is this a bot?' reply correctly",
        status: "Completed",
        date: "Feb 24, 5:30 PM",
      },
    ],
  },
  {
    email: "lizabeth.tudor@va.com",
    status: "Uncertified",
    last_updated: "",
    progress: [
      {
        lesson: "Import 50 leads using a keyword filter",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Move a lead correctly through Stages 01–10",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Edit and rotate message templates in the Builder",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Confirm booking link is active and working end-to-end",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Archive leads that have been inactive for 21+ days",
        status: "Locked",
        date: "",
      },
      {
        lesson:
          "Recite the safe daily limits for warm and cold accounts from memory",
        status: "Locked",
        date: "",
      },
      {
        lesson:
          "Identify and correctly respond to a Facebook 'Please slow down' warning",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Explain why template rotation matters for account health",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Demonstrate correct manual message spacing (not bulk-sending)",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Convert a 'How much does it cost?' message into a booking",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Execute the full Ghosting Protocol correctly",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Perform the Double-Tap booking method correctly",
        status: "Locked",
        date: "",
      },
      {
        lesson:
          "Rewrite a robotic message into a natural, human-sounding response",
        status: "Locked",
        date: "",
      },
      {
        lesson: "Handle a 'Is this a bot?' reply correctly",
        status: "Locked",
        date: "",
      },
    ],
  },
];

export default function CertificationAdmin() {
  return (
    <div className="flex flex-col gap-8 dashboard-admin-cont">
      <WelcomeSection
        title={"VA Certifications"}
        desc={"Review and approve Virtual Assistants for live operations."}
      ></WelcomeSection>
      <div className="flex flex-col gap-4">
        <CertHeaderAdmin data={mockDataCertAdmin}></CertHeaderAdmin>
        <CertPhase></CertPhase>
      </div>
    </div>
  );
}
