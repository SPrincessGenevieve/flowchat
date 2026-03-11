import EODMangementTable from "@/components/admin/eod-management/EODMangementTable";
import EODSummary from "@/components/admin/eod-management/EODSummary";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import {
  IconArrowBackUp,
  IconMessage,
  IconPhone,
  IconProps,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";

export type EODDataT = {
  date: string;
  virtualAssistantName: string;
  email: string;
  accountHealth: string;
  dailyPerformanceNumbers: {
    newLeads: number;
    friendRequests: number;
    conversations: number;
    callsBooked: number;
  };
  accountInsights: {
    topGroup: string;
    commonObjection: string;
    winningHook: string;
  };
  warningsAndBlockers: {
    healthComments: string;
    actionTaken: string;
    criticalBlockers: string;
  };
  vaRecommendations: string;
};

const mockData = [
  {
    date: "2026-03-08",
    virtualAssistantName: "Michael Torres",
    email: "michael.t@flowchat.io",
    accountHealth: "Healthy",
    dailyPerformanceNumbers: {
      newLeads: 38,
      friendRequests: 30,
      conversations: 24,
      callsBooked: 6,
    },
    accountInsights: {
      topGroup: "Startup Founders Hub",
      commonObjection: "Is this automated?",
      winningHook: "Quick question about your client acquisition strategy...",
    },
    warningsAndBlockers: {
      healthComments: "No warnings reported",
      actionTaken: "None required",
      criticalBlockers: "None",
    },
    vaRecommendations:
      "Test follow-up messages after 24 hours for inactive leads.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Emily Carter",
    email: "emily.c@flowchat.io",
    accountHealth: "Warning",
    dailyPerformanceNumbers: {
      newLeads: 29,
      friendRequests: 25,
      conversations: 19,
      callsBooked: 4,
    },
    accountInsights: {
      topGroup: "Digital Marketing Experts",
      commonObjection: "I'm too busy right now.",
      winningHook: "Curious how you're currently generating leads...",
    },
    warningsAndBlockers: {
      healthComments: "Friend request limit approaching",
      actionTaken: "Reduced request frequency",
      criticalBlockers: "None",
    },
    vaRecommendations:
      "Slow down outreach and increase conversation nurturing.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Daniel Kim",
    email: "daniel.k@flowchat.io",
    accountHealth: "Healthy",
    dailyPerformanceNumbers: {
      newLeads: 47,
      friendRequests: 39,
      conversations: 31,
      callsBooked: 9,
    },
    accountInsights: {
      topGroup: "SaaS Growth Community",
      commonObjection: "Send me more info.",
      winningHook: "Quick thought on scaling your SaaS outreach...",
    },
    warningsAndBlockers: {
      healthComments: "No warnings reported",
      actionTaken: "None required",
      criticalBlockers: "None",
    },
    vaRecommendations:
      "Create a short info packet to send when leads request details.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Olivia Martinez",
    email: "olivia.m@flowchat.io",
    accountHealth: "Healthy",
    dailyPerformanceNumbers: {
      newLeads: 41,
      friendRequests: 33,
      conversations: 26,
      callsBooked: 5,
    },
    accountInsights: {
      topGroup: "Real Estate Investors Network",
      commonObjection: "How does this work?",
      winningHook: "Quick question about how you're finding deals lately...",
    },
    warningsAndBlockers: {
      healthComments: "No warnings reported",
      actionTaken: "None required",
      criticalBlockers: "None",
    },
    vaRecommendations: "Add a short explanation message after the first reply.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "James Patel",
    email: "james.p@flowchat.io",
    accountHealth: "Healthy",
    dailyPerformanceNumbers: {
      newLeads: 36,
      friendRequests: 29,
      conversations: 22,
      callsBooked: 6,
    },
    accountInsights: {
      topGroup: "Business Coaching Community",
      commonObjection: "What results can I expect?",
      winningHook:
        "Curious what your biggest growth challenge is this quarter...",
    },
    warningsAndBlockers: {
      healthComments: "No warnings reported",
      actionTaken: "None required",
      criticalBlockers: "None",
    },
    vaRecommendations: "Collect testimonials to address the results objection.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Sophia Nguyen",
    email: "sophia.n@flowchat.io",
    accountHealth: "Healthy",
    dailyPerformanceNumbers: {
      newLeads: 44,
      friendRequests: 37,
      conversations: 29,
      callsBooked: 8,
    },
    accountInsights: {
      topGroup: "Entrepreneurs Circle",
      commonObjection: "I'm already using another tool.",
      winningHook: "Quick question about how you're managing outreach...",
    },
    warningsAndBlockers: {
      healthComments: "No warnings reported",
      actionTaken: "None required",
      criticalBlockers: "None",
    },
    vaRecommendations: "Prepare a comparison message for competing tools.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Lucas Bennett",
    email: "lucas.b@flowchat.io",
    accountHealth: "Critical",
    dailyPerformanceNumbers: {
      newLeads: 18,
      friendRequests: 14,
      conversations: 9,
      callsBooked: 2,
    },
    accountInsights: {
      topGroup: "Freelancers Growth Group",
      commonObjection: "Not interested.",
      winningHook: "Hey! Quick networking question...",
    },
    warningsAndBlockers: {
      healthComments: "Low engagement rate",
      actionTaken: "Paused automation",
      criticalBlockers: "Possible account restriction risk",
    },
    vaRecommendations: "Revise opening hooks and manually engage with leads.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Ava Robinson",
    email: "ava.r@flowchat.io",
    accountHealth: "Healthy",
    dailyPerformanceNumbers: {
      newLeads: 40,
      friendRequests: 34,
      conversations: 27,
      callsBooked: 7,
    },
    accountInsights: {
      topGroup: "Online Coaches Network",
      commonObjection: "Can you send details?",
      winningHook:
        "Quick question about how you're scaling your coaching business...",
    },
    warningsAndBlockers: {
      healthComments: "No warnings reported",
      actionTaken: "None required",
      criticalBlockers: "None",
    },
    vaRecommendations: "Send a short case study when leads request details.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Noah Garcia",
    email: "noah.g@flowchat.io",
    accountHealth: "Warning",
    dailyPerformanceNumbers: {
      newLeads: 31,
      friendRequests: 27,
      conversations: 20,
      callsBooked: 4,
    },
    accountInsights: {
      topGroup: "Agency Owners Collective",
      commonObjection: "What's the pricing?",
      winningHook: "Quick question about your agency growth strategy...",
    },
    warningsAndBlockers: {
      healthComments: "Message response rate declining",
      actionTaken: "Adjusted follow-up timing",
      criticalBlockers: "None",
    },
    vaRecommendations: "Improve value explanation before mentioning pricing.",
  },
  {
    date: "2026-03-08",
    virtualAssistantName: "Isabella Clark",
    email: "isabella.c@flowchat.io",
    accountHealth: "Healthy",
    dailyPerformanceNumbers: {
      newLeads: 45,
      friendRequests: 38,
      conversations: 30,
      callsBooked: 9,
    },
    accountInsights: {
      topGroup: "Ecommerce Founders Community",
      commonObjection: "I'm good for now.",
      winningHook:
        "Quick question about how you're handling customer acquisition...",
    },
    warningsAndBlockers: {
      healthComments: "No warnings reported",
      actionTaken: "None required",
      criticalBlockers: "None",
    },
    vaRecommendations:
      "Create a nurture message for leads who decline initially.",
  },
];

export type EODT = {
  label: string;
  value: number;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  bg: string;
  color: string;
};

export default function EODAdmin() {
  const cardSummary: EODT[] = [
    {
      label: "Total Leads",
      value: 0,
      icon: IconUsers,
      bg: "bg-blue-600/20 ",
      color: "text-blue-400",
    },
    {
      label: "Total Invites",
      value: 0,
      icon: IconUserPlus,
      bg: "bg-purple-600/20",
      color: "text-purple-400",
    },
    {
      label: "Total Convos",
      value: 0,
      icon: IconMessage,
      bg: "bg-green-600/20",
      color: "text-green-400",
    },
    {
      label: "Total Booked",
      value: 0,
      icon: IconPhone,
      bg: "bg-amber-600/20 ",
      color: "text-amber-400",
    },
    {
      label: "Total Replies",
      value: 0,
      icon: IconArrowBackUp,
      bg: "bg-pink-600/20",
      color: "text-pink-400",
    },
  ];

  return (
    <div className="flex flex-col gap-8 dashboard-admin-cont">
      <div className="grid grid-cols-5 daily-summary-cont gap-4 h-full">
        {cardSummary.map((item, i) => (
          <EODSummary key={i} item={item}></EODSummary>
        ))}
      </div>
      <EODMangementTable item={mockData}></EODMangementTable>
    </div>
  );
}
