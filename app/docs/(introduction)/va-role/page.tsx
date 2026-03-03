import { PageHeader } from "@/components/ui/PageHeader";
import { Callout } from "@/components/ui/CallOut";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  {
    title: "Guide",
    desc: "Walk the client through each stage of the FlowChat system. Ensure they understand the purpose of every action before it is taken.",
  },
  {
    title: "Demonstrator",
    desc: "Show how the system works in practice. Run live walkthroughs, test the flow, and demonstrate expected outcomes.",
  },
  {
    title: "Operator",
    desc: "Run the system daily. Manage leads, respond to messages, move conversations through the pipeline, and maintain data hygiene.",
  },
  {
    title: "Checkpoint",
    desc: "Catch problems before they escalate. Monitor account health, flag restrictions, and report KPIs to the client every day.",
  },
];

const rhythm = [
  {
    block: "First 30 Minutes",
    label: "Inbox Cleanup",
    color:
      "bg-blue-400/30 text-blue-400 dark:bg-blue-950/40 dark:text-blue-400",
    tasks: [
      "Respond to all Stage 07 (Messages Received) leads from overnight",
      "Check the account for any active Action Blocks or warnings",
      "Flag anything unusual to the client before proceeding",
    ],
  },
  {
    block: "Middle 60 Minutes",
    label: "Lead Gen & Movement",
    color:
      "bg-emerald-400/30 text-emerald-400 dark:bg-emerald-950/40 dark:text-emerald-400",
    tasks: [
      "Import new leads from target Facebook groups",
      "Send the daily quota of Friend Requests (within safe thresholds)",
      "Move qualified leads forward through the pipeline stages",
    ],
  },
  {
    block: "Final 30 Minutes",
    label: "Data Hygiene",
    color:
      "bg-orange-400/30 text-orange-400 dark:bg-orange-950/40 dark:text-orange-400",
    tasks: [
      "Clear out stale or unresponsive leads from the active pipeline",
      "Update the Tracking Sheet with today's activity",
      "Report daily KPIs to the client, acceptance rate, replies, bookings",
    ],
  },
];

const skills = [
  {
    skill: "Rapport Building",
    desc: "Use conversational language to blend in naturally. Match the tone and style of the lead. People respond when they feel understood, not sold to.",
  },
  {
    skill: "Pattern Recognition",
    desc: "Identify which groups, messages, and audiences produce the highest-quality leads. Eliminate what does not work. Double down on what does.",
  },
  {
    skill: "Friction Reduction",
    desc: "Know when to stop asking questions and simply send the booking link. Over-qualifying kills momentum. Read the signal and act.",
  },
  {
    skill: "Active Listening",
    desc: "Read what the lead actually writes, not what you expect them to say. Adjust the direction of every conversation based on their words.",
  },
];

export default function VaRolePage() {
  return (
    <div className="flex justify-center overflow-auto w-full ">
      <div className="h-full">
        <PageHeader
          tag="Getting Started"
          title="VA Role & Daily Rhythm"
          description="The VA is not just sending messages. The VA is managing a lead pipeline and a client relationship every single day."
        />

        <section className="space-y-10">
          {/* VA Roles */}
          <div>
            <Label className="text-xl font-semibold tracking-tight mb-3">
              The Four Hats of the VA
            </Label>
            <Label className="text-sm text-white/70 mb-4 leading-relaxed">
              At different points in the day and across the client relationship,
              the VA operates in four distinct capacities. Each requires a
              different skill and mindset.
            </Label>

            <div className="grid gap-3 sm:grid-cols-2">
              {roles.map((r, i) => (
                <Card
                  key={i}
                  className="group bg-primary-blue-400 border hover:bg-primary-blue-100/30 transition ease-in-out border-primary-blue-100/70 hover:border-primary-blue-100/70"
                >
                  <CardContent>
                    <div className="flex flex-col items-start gap-3">
                      <Label className="font-semibold text-white text-sm">
                        {r.title}
                      </Label>
                      <Label className="text-xs text-white/70 mt-1.5 leading-relaxed">
                        {r.desc}
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 30-60-90 Rhythm */}
          <div>
            <Label className="text-xl font-semibold tracking-tight mb-1">
              The 30-60-90 Daily Operating Rhythm
            </Label>
            <Label className="text-sm text-white/70 mb-5 leading-relaxed">
              Every working day is structured into three blocks. This keeps
              momentum consistent and ensures nothing — especially data hygiene
              — gets skipped.
            </Label>

            <div className="space-y-4">
              {rhythm.map((block) => (
                <div
                  key={block.block}
                  className="rounded-lg border border-primary-blue-100/70 overflow-hidden"
                >
                  <div
                    className={`flex items-center justify-between px-4 py-2.5 ${block.color}`}
                  >
                    <p className={`text-sm font-bold `}>{block.block}</p>
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                      {block.label}
                    </span>
                  </div>
                  <ul className="divide-y divide-primary-blue-100">
                    {block.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 px-4 py-3 text-sm text-white/70"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white/50 shrink-0 mt-1.5" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Callout type="info" title="Why This Structure Matters">
              The 30-60-90 rhythm prevents inbox pile-ups, ensures lead
              generation happens daily, and keeps the client informed. Skipping
              any block, especially data hygiene, compounds problems within a
              week.
            </Callout>
          </div>

          {/* VA Skills */}
          <div>
            <Label className="text-xl font-semibold tracking-tight mb-3">
              VA Skill Focus Areas
            </Label>
            <Label className="text-sm text-white/70 mb-4 leading-relaxed">
              These skills separate a VA who fills the pipeline from one who
              converts it. Technical setup can be learned in a day. These take
              intentional practice.
            </Label>

            <div className="rounded-lg border border-primary-blue-100/70 divide-primary-blue-100 divide-y">
              {skills.map((s) => (
                <div key={s.skill} className="px-4 py-4 flex gap-4">
                  <Label className="w-44 shrink-0 text-sm font-semibold text-white">
                    {s.skill}
                  </Label>
                  <Label className="text-sm text-white/70 leading-relaxed">
                    {s.desc}
                  </Label>
                </div>
              ))}
            </div>

            <Callout type="tip" title="The Core Distinction">
              Automation fills the pipeline. Human communication is the
              conversion mechanism. The VA&apos;s technical setup creates the
              opportunity, the VA&apos;s conversational skill closes it.
            </Callout>
          </div>
        </section>
      </div>
    </div>
  );
}
