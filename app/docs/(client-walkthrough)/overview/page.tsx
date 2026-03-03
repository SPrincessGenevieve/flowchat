import { PageHeader } from "@/components/ui/PageHeader";
import { Callout } from "@/components/ui/CallOut";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function OverviewPage() {
  return (
    <div>
      <PageHeader
        tag="Introduction"
        title="FlowChat Client Walkthrough & VA Management Guide"
        description="Client Walkthrough & VA Management Guide. This document covers everything the VA needs to set up FlowChat correctly, run daily operations, manage conversations, maintain account health, and optimize performance monthly."
      />

      <section className="space-y-4">
        <h2 className="text-xl text-white font-semibold tracking-tight">
          Purpose
        </h2>
        <p className="text-white/70 leading-relaxed">
          This SOP ensures that the VA can execute every phase of the FlowChat
          system with clarity and consistency. The goal is to generate qualified
          conversations and booked calls in a structured, scalable way.
        </p>

        <ul className="mt-3 space-y-2 text-sm text-white/70">
          {[
            "Set up FlowChat correctly",
            "Run daily lead generation operations",
            "Manage conversations properly",
            "Maintain account health",
            "Optimize performance monthly",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-blue-100 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl text-white font-semibold tracking-tight">
          VA Role
        </h2>
        <p className="text-white/70 leading-relaxed">
          The VA is not just sending messages. The VA is managing a full lead
          pipeline.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          {[
            {
              title: "System Setup",
              desc: "Configure FlowChat, integrations, and pipelines correctly before any outreach begins.",
            },
            {
              title: "Daily Automation Monitoring",
              desc: "Review automation queues, check for blocks, and ensure the system is running cleanly.",
            },
            {
              title: "Manual Messaging & Nurturing",
              desc: "Handle all replies personally to build rapport and move leads toward a booked call.",
            },
            {
              title: "Performance Tracking",
              desc: "Log acceptance rates, reply rates, and booking rates. Identify drop-off points weekly.",
            },
            {
              title: "Platform Compliance",
              desc: "Operate within social media rules. Protect the account from restrictions or bans.",
            },
          ].map((role, i) => (
            <Card
              key={i}
              className="group bg-primary-blue-400 border hover:bg-primary-blue-100/30 transition ease-in-out border-primary-blue-100/70 hover:border-primary-blue-100/70"
            >
              <CardContent>
                <div className="flex flex-col items-start gap-3">
                  <Label className="font-semibold text-white text-sm">
                    {role.title}
                  </Label>
                  <Label className="text-xs text-white/70 mt-1.5 leading-relaxed">
                    {role.desc}
                  </Label>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl text-white font-semibold tracking-tight">
          The 4-Step System
        </h2>
        <p className="text-white/70 leading-relaxed">
          FlowChat is a structured messaging system that turns conversations
          into booked calls and closed deals.
        </p>

        <div className="mt-4 flex flex-col gap-0">
          {[
            {
              step: "01",
              label: "Import Leads",
              desc: "Pull targeted prospects from Facebook groups and other sources.",
            },
            {
              step: "02",
              label: "Start Conversations",
              desc: "Send personalized friend requests and opening messages.",
            },
            {
              step: "03",
              label: "Book Calls",
              desc: "Qualify the lead through staged nurture questions and invite them to a call.",
            },
            {
              step: "04",
              label: "Close Deals",
              desc: "The client handles the sales call. VA ensures pipeline is full.",
            },
          ].map((s, i, arr) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-blue-100 text-white text-sm font-bold">
                  {s.step}
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px flex-1 bg-border my-1" />
                )}
              </div>
              <div className="pb-6">
                <p className="font-semibold text-white">{s.label}</p>
                <p className="text-sm text-white/70 mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted shadow-sm">
          <iframe
            src="https://www.loom.com/embed/7e51a49ba76d45359ac7ff000c604368"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </section>

      <Callout type="tip" title="Core Principle">
        This system is not spam. Every interaction is human-like, personalized
        outreach. Fully implementable within 30 days when followed consistently.
      </Callout>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl text-white font-semibold tracking-tight">
          SOP Ownership
        </h2>
        <div className="rounded-lg border border-primary-blue-300 bg-primary-blue-500/40 p-4 text-sm text-white/70 space-y-1">
          <p>
            <span className="font-medium text-white">Owner:</span> Operations /
            Training Team
          </p>
          <p>
            <span className="font-medium text-white">Review Frequency:</span>{" "}
            Quarterly, or when FlowChat updates occur
          </p>
        </div>
      </section>
    </div>
  );
}
