"use client";
import { Callout } from "@/components/ui/CallOut";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/ui/PageHeader";
import Link from "next/link";
import React from "react";

const modules = [
  {
    number: "01",
    title: "Strategic Roadmap",
    subtitle: "FlowChat Client Walkthrough & VA Management Guide",
    href: "/docs/overview",
  },
  {
    number: "02",
    title: "Operational System",
    subtitle: "The 30-60-90 Daily Schedule & Weekly Audits",
    href: "/docs/va-role",
  },
  {
    number: "03",
    title: "The Playbook",
    subtitle: "Messaging Scripts, Rebuttals, and Pivot Language",
    href: "/docs/day/3",
  },
  {
    number: "04",
    title: "Reporting Hub",
    subtitle: "Daily Operations Report Template",
    href: "/docs/optimization",
  },
  {
    number: "05",
    title: "Quality Control",
    subtitle: "VA Readiness & Certification Checklist",
    href: "/docs/setup",
  },
  {
    number: "06",
    title: "Client Relations",
    subtitle: "Quick-Start Guide & Crisis Protocols",
    href: "/docs/compliance",
  },
];

const days = [
  {
    day: "Day 1",
    title: "FlowChat Overview & Strategy Alignment",
    summary:
      "Align the client with the 4-step system. Confirm understanding before any technical setup begins.",
    href: "/docs/day/1",
  },
  {
    day: "Day 2",
    title: "Lead Import & Conversation Logic",
    summary:
      "Identify target groups, set up qualification filters, and configure the friend request and first message flow.",
    href: "/docs/day/2",
  },
  {
    day: "Day 3",
    title: "Manual Messaging & Nurturing",
    summary:
      "Handle replies manually, run the ghosting protocol, and use the double-tap booking method.",
    href: "/docs/day/3",
  },
  {
    day: "Day 4",
    title: "Automation, Scaling & Revenue Logic",
    summary:
      "Configure pipeline triggers, scale with fresh lead sources, and connect outreach volume to weekly call targets.",
    href: "/docs/day/4",
  },
];

export default function SopGrowthBlueprint() {
  return (
    <div className="flex justify-center overflow-auto w-full ">
      <div className="h-full">
        <PageHeader
          tag="Getting Started"
          title="The FlowChat VA SOP Growth Blueprint"
          description="A complete operating system for Virtual Assistants managing FlowChat for clients. Six modules covering every stage from setup to scale."
        />
        <section className="space-y-10">
          {/* 6 Modules */}
          <div>
            <Label className="text-xl font-semibold tracking-tight mb-4">
              The Six Modules
            </Label>
            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map((m) => (
                <Link key={m.number} href={m.href} className="">
                  <Card className="group h-full bg-primary-blue-400 border hover:bg-primary-blue-100/30 transition ease-in-out border-primary-blue-100/70 hover:border-primary-blue-100/70">
                    <CardContent>
                      <div className="flex items-start gap-3">
                        <Label className="text-2xl  font-bold text-white/40 leading-none group-hover:text-primary-blue-200 transition-colors">
                          {m.number}
                        </Label>
                        <div>
                          <Label className="font-semibold text-sm">
                            {m.title}
                          </Label>
                          <Label className="font-normal text-xs text-white/40 mt-0.5 leading-relaxed">
                            {m.subtitle}
                          </Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Purpose */}
          <div>
            <Label className="text-xl font-semibold tracking-tight mb-3">
              Purpose
            </Label>
            <Label className="font-normal text-sm text-white/40 leading-relaxed mb-4">
              This SOP guides Virtual Assistants to do three things correctly
              and consistently:
            </Label>
            <div className="space-y-2.5">
              {[
                "Explain and demonstrate FlowChat to clients with confidence.",
                "Implement and manage FlowChat for a business as a daily operator.",
                "Maintain, optimize, and scale the system responsibly over time.",
              ].map((item, i) => (
                <Card
                  key={i}
                  className="group py-4 bg-primary-blue-400 border border-primary-blue-100/70 "
                >
                  <CardContent className="flex items-center gap-2">
                    <Label className="flex bg-primary-blue-100 h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold">
                      {i + 1}
                    </Label>
                    <Label className="text-sm text-white font-normal leading-relaxed">
                      {item}
                    </Label>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Callout type="tip" title="Core Objective">
              Structured lead generation, efficient conversations, and
              predictable booked calls — every week, at scale.
            </Callout>
          </div>

          {/* Day-by-Day Quick Reference */}
          <div>
            <Label className="text-xl font-semibold tracking-tight mb-4">
              Daily Walkthrough At a Glance
            </Label>
            <Label className="text-sm font-normal text-white/40 mb-4 leading-relaxed">
              The client walkthrough spans four days. Each day has a specific
              objective. Click any day to read the full guide.
            </Label>
            <div className="space-y-3">
              {days.map((d) => (
                <Link
                  key={d.day}
                  href={d.href}
                  className="group flex items-start gap-4 rounded-lg border p-4 transition-colors  border-primary-blue-100/70 hover:bg-primary-blue-100/40"
                >
                  <div className="shrink-0 rounded-md bg-primary-blue-100/30 px-2 py-1 text-xs font-bold text-primary group-hover:bg-primary-blue-100 group-hover:text-primary-foreground transition-colors">
                    <Label>{d.day}</Label>
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-white">
                      {d.title}
                    </Label>
                    <Label className="text-xs text-white/40 mt-0.5 leading-relaxed">
                      {d.summary}
                    </Label>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
