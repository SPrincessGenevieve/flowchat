import { PageHeader } from "@/components/ui/PageHeader";
import { Callout } from "@/components/ui/CallOut";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const thresholds = [
  {
    action: "Friend Requests",
    warm: "20–40 / day",
    cold: "5–10 / day",
  },
  {
    action: "Outbound Messages",
    warm: "30–50 / day",
    cold: "10–15 / day",
  },
  {
    action: "Inbound Replies",
    warm: "Unlimited",
    cold: "Unlimited",
  },
];

const auditChecks = [
  {
    label: "Tone Check",
    desc: "Does the VA sound like the client? or like a robot? Every message should feel like it came from a real person who knows the business.",
  },
  {
    label: "Speed-to-Lead",
    desc: "Are replies happening within 4 hours during business windows? Slow responses kill warm conversations.",
  },
  {
    label: "Qualification",
    desc: "Are we booking qualified prospects, or just anyone who replies? Review whether booked calls are converting on the client side.",
  },
];

export default function LimitationsPage() {
  return (
    <div>
      <PageHeader
        tag="Getting Started"
        title="Platform Limits & Safety"
        description="FlowChat operates inside Facebook and other social platforms. Understanding their rules is not optional, it is the foundation of a scalable, sustainable operation."
      />

      <section className="space-y-10">
        {/* Overview */}
        <div>
          <p className="text-sm text-white/70 leading-relaxed">
            Social platforms use automated systems to detect high-volume,
            repetitive, or suspicious activity. A VA who ignores these limits
            does not just risk a temporary block, they risk the entire account,
            including all existing conversations and leads.
          </p>
        </div>

        {/* Safe Thresholds Table */}
        <div>
          <h2 className="text-xl text-white font-semibold tracking-tight mb-3">
            Safe Scaling Thresholds
          </h2>
          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            These are per-profile daily limits. A warm account is one that has
            been actively used for 3 or more months with consistent, compliant
            activity. A cold or new account must be warmed up gradually.
          </p>

          <div className="rounded-lg border border-primary-blue-100/70 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary-blue-100/70 bg-primary-blue-100/20">
                  <th className="px-4 py-3 text-left font-semibold text-white">
                    Action
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-white">
                    Warm Account
                    <span className="ml-1.5 text-xs font-normal text-white/70">
                      (3 mo+)
                    </span>
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-white">
                    New / Cold Account
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-blue-100">
                {thresholds.map((row) => (
                  <tr
                    key={row.action}
                    className="hover:bg-primary-blue-100/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      {row.action}
                    </td>
                    <td className="px-4 py-3 text-white/70">{row.warm}</td>
                    <td className="px-4 py-3 text-white/70">{row.cold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Callout type="danger" title="Red Flag Rule">
            If you receive a &ldquo;Please slow down&rdquo; notification from
            Facebook, stop all outbound activity immediately. Wait 24 full hours
            before resuming. Notify the client right away, do not wait until the
            daily report.
          </Callout>
        </div>

        {/* Warming Up New Accounts */}
        <div>
          <h2 className="text-xl text-white font-semibold tracking-tight mb-3">
            Warming Up a New Account
          </h2>
          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            New accounts must build trust with the platform before operating at
            full volume. Skipping the warmup is the most common cause of early
            restrictions.
          </p>

          <div className="space-y-2.5">
            {[
              {
                week: "Week 1",
                action:
                  "5–10 friend requests per day. No automation. All activity manual.",
              },
              {
                week: "Week 2",
                action:
                  "10–15 friend requests per day. Begin testing one message template manually.",
              },
              {
                week: "Week 3–4",
                action:
                  "Gradually increase to 20 per day. Enable automation only after no restrictions.",
              },
              {
                week: "Month 2+",
                action:
                  "Scale toward warm account thresholds. Monitor daily for any warning signals.",
              },
            ].map((item) => (
              <div
                key={item.week}
                className="flex items-start gap-4 rounded-lg border border-primary-blue-100/70 p-3.5"
              >
                <span className="shrink-0 w-20 text-center rounded-md bg-primary-blue-100 px-2 py-0.5 text-xs font-bold text-white">
                  {item.week}
                </span>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Lead Audit */}
        <div>
          <h2 className="text-xl text-white font-semibold tracking-tight mb-1">
            The Weekly Lead Audit
          </h2>
          <p className="text-xs text-white/70 mb-4">Run every Friday</p>
          <p className="text-sm text-white/70 mb-4 leading-relaxed">
            Every Friday, review 10 random conversations from the current week.
            This is a quality control check, not a performance review. The goal
            is to catch patterns before they become problems.
          </p>

          <div className="space-y-3">
            {auditChecks.map((c, i) => (
              <Card
                key={i}
                className="group bg-primary-blue-400 border hover:bg-primary-blue-100/30 transition ease-in-out border-primary-blue-100/70 hover:border-primary-blue-100/70"
              >
                <CardContent>
                  <div className="flex flex-col items-start gap-3">
                    <Label className="font-semibold text-white text-sm">
                      {c.label}
                    </Label>
                    <Label className="text-xs text-white/70 mt-1.5 leading-relaxed">
                      {c.desc}
                    </Label>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Callout type="info" title="What to Do With Audit Findings">
            Document anything that appears in more than 2 of the 10
            conversations reviewed. If tone is robotic across multiple
            conversations, rewrite the templates before the next week begins. If
            unqualified leads are being booked, tighten the qualification
            questions in Stage 08.
          </Callout>
        </div>
      </section>
    </div>
  );
}
