import {
  IconBook,
  IconChartBar,
  IconClipboard,
  IconDashboard,
  IconLayoutDashboard,
  IconMap,
  IconMedal,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

export interface NavItem {
  title: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navVA = [
  {
    label: "Dashboard",
    href: "/virtual-assistant/dashboard",
    icon: IconDashboard,
  },
  {
    label: "Certification",
    href: "/virtual-assistant/certifications",
    icon: IconMap,
  },
  {
    label: "EOD Reports",
    href: "/virtual-assistant/eod-reports",
    icon: IconClipboard,
  },
  {
    label: "Settings",
    href: "/virtual-assistant/settings",
    icon: IconSettings,
  },
];

export const navAdmin = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: IconLayoutDashboard,
  },
  {
    label: "Virtual Assistants",
    href: "/admin/virtual-assistant",
    icon: IconUsers,
  },
  {
    label: "Certifications",
    href: "/admin/certifications",
    icon: IconClipboard,
  },
  {
    label: "EOD Management",
    href: "/admin/eod-management",
    icon: IconChartBar,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: IconSettings,
  },
];

export const navConfig: NavGroup[] = [
  {
    label: "Getting Started",
    items: [
      { title: "SOP Growth Blueprint", href: "/docs/blueprint" },
      { title: "VA Role & Daily Rhythm", href: "/docs/va-role" },
      { title: "Platform Limits & Safety", href: "/docs/limitations" },
    ],
  },
  {
    label: "Client Walkthrough",
    items: [{ title: "Overview & Purpose", href: "/docs/overview" }],
  },
  {
    label: "VA Readiness",
    items: [
      { title: "Pre-Call Protocol", href: "/docs/setup" },
      { title: "Compliance & Limits", href: "/docs/compliance" },
    ],
  },
  {
    label: "Daily Walkthrough",
    items: [
      { title: "Day 1 Overview & Strategy", href: "/docs/day/1" },
      { title: "Day 2 Lead Import & Logic", href: "/docs/day/2" },
      { title: "Day 3 Messaging & Nurturing", href: "/docs/day/3" },
      { title: "Day 4 Automation & Scaling", href: "/docs/day/4" },
    ],
  },
  {
    label: "Growth System",
    items: [
      { title: "Maturity Roadmap", href: "/docs/maturity" },
      { title: "Weekly Growth Audit", href: "/docs/audit" },
    ],
  },
  {
    label: "Playbooks",
    items: [
      { title: "Script Playbook", href: "/docs/scripts" },
      { title: "Daily Operations Report", href: "/docs/report" },
      { title: "Lead Imports", href: "/docs/lead-imports" },
    ],
  },
  {
    label: "Quality & Compliance",
    items: [
      { title: "VA Certification Checklist", href: "/docs/certification" },
    ],
  },
  {
    label: "Client Resources",
    items: [{ title: "Client Quick-Start Guide", href: "/docs/client-guide" }],
  },
  {
    label: "Operations",
    items: [
      { title: "30-Day Optimization Review", href: "/docs/optimization" },
      { title: "Best Practices & Skills", href: "/docs/best-practices" },
    ],
  },
];
