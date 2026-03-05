import { ModuleT } from "../type";

export const modulesData: ModuleT[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    desc: "3 modules",
    status: "Locked",
    lessons: [
      {
        id: "sop-growth-blueprint",
        title: "SOP Growth Blueprint",
        content: ``,
        status: "Locked",
        href: "",
        isLocked: false,
        quiz: [
          {
            id: "q1",
            question: "What is the main purpose of the FlowChat SOP?",
            options: [
              "To automate all conversations",
              "To ensure the VA executes the system consistently and clearly",
              "To replace the client in sales calls",
              "To generate leads without human interaction",
            ],
            correctAnswer:
              "To ensure the VA executes the system consistently and clearly",
          },
          {
            id: "q2",
            question: "What is the VA’s primary operational responsibility?",
            options: [
              "Sending messages only",
              "Managing the lead pipeline and client relationship daily",
              "Designing marketing funnels",
              "Running paid advertisements",
            ],
            correctAnswer:
              "Managing the lead pipeline and client relationship daily",
          },
          {
            id: "q3",
            question:
              "Before outreach begins, what must be configured properly?",
            options: [
              "Social media profile aesthetics",
              "FlowChat system, integrations, and pipeline structure",
              "Sales closing scripts",
              "Client branding materials",
            ],
            correctAnswer:
              "FlowChat system, integrations, and pipeline structure",
          },
          {
            id: "q4",
            question: "What should the VA monitor daily during operations?",
            options: [
              "Automation queues and account health status",
              "Website traffic analytics",
              "Graphic content performance",
              "Competitor advertisements",
            ],
            correctAnswer: "Automation queues and account health status",
          },
          {
            id: "q5",
            question:
              "Why is weekly tracking of acceptance, reply, and booking rates important?",
            options: [
              "To create social media posts",
              "To identify pipeline drop-off points and optimize performance",
              "To change client branding",
              "To increase follower count",
            ],
            correctAnswer:
              "To identify pipeline drop-off points and optimize performance",
          },
          {
            id: "q6",
            question:
              "Who is responsible for closing the deal in the FlowChat system?",
            options: [
              "The VA",
              "The automation system",
              "The client during the sales call",
              "The training team",
            ],
            correctAnswer: "The client during the sales call",
          },
          {
            id: "q7",
            question: "What is the core principle of the system?",
            options: [
              "Mass spam messaging",
              "Human-like personalized communication",
              "Automated closing scripts only",
              "Follower growth strategy",
            ],
            correctAnswer: "Human-like personalized communication",
          },
          {
            id: "q8",
            question:
              "What is the long-term goal of running the FlowChat system correctly?",
            options: [
              "Increase random messaging volume",
              "Generate qualified conversations and booked calls consistently",
              "Replace human VA work completely",
              "Focus only on lead import",
            ],
            correctAnswer:
              "Generate qualified conversations and booked calls consistently",
          },
        ],
      },
      {
        id: "operational-system",
        title: "Operational System",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question: "Which of the following best describes the VA’s role?",
            options: [
              "Only sending automated messages",
              "Managing a lead pipeline and client relationship daily",
              "Running paid ads",
              "Closing sales calls personally",
            ],
            correctAnswer:
              "Managing a lead pipeline and client relationship daily",
          },
          {
            id: "q2",
            question: "What is the purpose of the 30-60-90 daily rhythm?",
            options: [
              "To increase automation speed",
              "To structure the day for consistency and prevent skipped tasks",
              "To reduce workload",
              "To focus only on lead generation",
            ],
            correctAnswer:
              "To structure the day for consistency and prevent skipped tasks",
          },
          {
            id: "q3",
            question: "What should be completed in the first 30 minutes?",
            options: [
              "Import new leads",
              "Send booking links immediately",
              "Inbox cleanup and account health check",
              "Remove stale leads from pipeline",
            ],
            correctAnswer: "Inbox cleanup and account health check",
          },
          {
            id: "q4",
            question: "What is the main focus of the final 30 minutes?",
            options: [
              "Sending friend requests",
              "Data hygiene and KPI reporting",
              "Running ads",
              "Testing automation flows",
            ],
            correctAnswer: "Data hygiene and KPI reporting",
          },
          {
            id: "q5",
            question: "What is the core distinction in the FlowChat system?",
            options: [
              "Automation closes deals",
              "The client handles all messaging",
              "Automation fills the pipeline, human communication converts it",
              "The VA replaces the sales team",
            ],
            correctAnswer:
              "Automation fills the pipeline, human communication converts it",
          },
        ],
      },
      {
        id: "the-playbook",
        title: "The Playbook",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What is the VA's most important skill in manual messaging?",
            options: [
              "Using scripts exactly as written",
              "Personalizing responses and adjusting conversation tone in real time",
              "Sending messages automatically",
              "Avoiding replies to leads",
            ],
            correctAnswer:
              "Personalizing responses and adjusting conversation tone in real time",
          },
          {
            id: "q2",
            question: "When a lead replies at Stage 7, what should the VA do?",
            options: [
              "Let automation continue",
              "Reply manually and build initial rapport",
              "Send the booking link immediately",
              "Move the lead to Closed/Lost",
            ],
            correctAnswer: "Reply manually and build initial rapport",
          },
          {
            id: "q3",
            question:
              "How many qualifying questions should be asked during the nurture stage (Stage 8)?",
            options: [
              "1–2 questions",
              "2–3 targeted qualifying questions",
              "5 or more questions",
              "No questions are needed",
            ],
            correctAnswer: "2–3 targeted qualifying questions",
          },
          {
            id: "q4",
            question:
              "What should the VA do if a lead goes silent after Stage 08 or 09?",
            options: [
              "Send multiple follow-ups immediately",
              "Apply the ghosting protocol sequence",
              "Archive the lead instantly",
              "Switch to automated messaging",
            ],
            correctAnswer: "Apply the ghosting protocol sequence",
          },
          {
            id: "q5",
            question: "What is the purpose of the Double-Tap Booking Method?",
            options: [
              "To pressure leads to book calls",
              "To reduce no-shows and increase calendar confirmations",
              "To automate sales closing",
              "To send mass booking links",
            ],
            correctAnswer:
              "To reduce no-shows and increase calendar confirmations",
          },
          {
            id: "q6",
            question:
              "What is the conversation standard regarding question stacking?",
            options: [
              "Ask multiple questions in one message",
              "Ask one question at a time to improve reply rate",
              "Ask at least five qualifying questions",
              "Avoid asking questions entirely",
            ],
            correctAnswer: "Ask one question at a time to improve reply rate",
          },
          {
            id: "q7",
            question:
              "What is the correct approach when a lead becomes silent after two follow-ups?",
            options: [
              "Continue chasing the lead",
              "Stop follow-ups and shift focus to active leads",
              "Send daily reminders",
              "Escalate to the client immediately",
            ],
            correctAnswer: "Stop follow-ups and shift focus to active leads",
          },
          {
            id: "q8",
            question:
              "What is the core conversion principle of the FlowChat system?",
            options: [
              "Automation closes deals automatically",
              "Human conversation is the main conversion mechanism",
              "The VA replaces the client in sales calls",
              "Lead volume alone guarantees bookings",
            ],
            correctAnswer:
              "Human conversation is the main conversion mechanism",
          },
        ],
      },
    ],
  },
  {
    id: "client-walkthrough",
    title: "Client Walkthrough",
    status: "Locked",
    desc: "4 modules",
    lessons: [
      {
        id: "day-1-overview--strategy",
        title: "Day 1: Overview & Strategy",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question: "What is the main objective of Day 1?",
            options: [
              "To immediately configure automation",
              "To align the client with the 4-step FlowChat system before setup",
              "To start sending friend requests",
              "To generate leads automatically",
            ],
            correctAnswer:
              "To align the client with the 4-step FlowChat system before setup",
          },
          {
            id: "q2",
            question: "How should FlowChat be introduced to the client?",
            options: [
              "As a mass spam messaging tool",
              "As a structured system that turns conversations into booked calls",
              "As an automated closing engine",
              "As a follower growth strategy",
            ],
            correctAnswer:
              "As a structured system that turns conversations into booked calls",
          },
          {
            id: "q3",
            question: "What is the first step in the 4-Step FlowChat Map?",
            options: [
              "Start Conversations",
              "Import Leads",
              "Close Deals",
              "Book Calls",
            ],
            correctAnswer: "Import Leads",
          },
          {
            id: "q4",
            question:
              "What should the VA do after presenting the 4-step system?",
            options: [
              "Begin technical setup immediately",
              "Ask the client to explain the flow back in their own words",
              "Send friend requests",
              "Create automation sequences",
            ],
            correctAnswer:
              "Ask the client to explain the flow back in their own words",
          },
          {
            id: "q5",
            question: "Why is the 4-step gate requirement important?",
            options: [
              "To delay the project timeline",
              "To ensure the client understands and commits to the system logic",
              "To increase VA workload",
              "To test client memory only",
            ],
            correctAnswer:
              "To ensure the client understands and commits to the system logic",
          },
          {
            id: "q6",
            question:
              "What determines the quality of conversations in the FlowChat system?",
            options: [
              "Number of messages sent",
              "Quality of imported leads",
              "Client branding colors",
              "Automation speed",
            ],
            correctAnswer: "Quality of imported leads",
          },
          {
            id: "q7",
            question:
              "What happens if the client cannot explain the 4-step flow back correctly?",
            options: [
              "Proceed with technical setup anyway",
              "Do not move forward to Day 2 setup",
              "Cancel the client project immediately",
              "Switch to automated messaging only",
            ],
            correctAnswer: "Do not move forward to Day 2 setup",
          },
          {
            id: "q8",
            question: "What is the long-term goal of the FlowChat strategy?",
            options: [
              "Increase random messaging volume",
              "Generate qualified conversations and booked calls consistently",
              "Focus only on follower growth",
              "Automate sales calls completely",
            ],
            correctAnswer:
              "Generate qualified conversations and booked calls consistently",
          },
        ],
      },
      {
        id: "day-2-lead-import",
        title: "Day 2: Lead Import",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What is the primary source of leads in the FlowChat pipeline?",
            options: [
              "Random social media profiles",
              "Facebook groups where the ICP is active and engaged",
              "Purchased lead lists",
              "Any available online directory",
            ],
            correctAnswer:
              "Facebook groups where the ICP is active and engaged",
          },
          {
            id: "q2",
            question: "What should determine the quality of the pipeline?",
            options: [
              "Group membership size only",
              "Lead engagement and ICP relevance",
              "Number of messages sent",
              "Automation speed",
            ],
            correctAnswer: "Lead engagement and ICP relevance",
          },
          {
            id: "q3",
            question: "How often should lead sources be reviewed and updated?",
            options: ["Daily", "Weekly", "Monthly", "Never once set"],
            correctAnswer: "Weekly",
          },
          {
            id: "q4",
            question:
              "What should the VA monitor to evaluate targeting accuracy?",
            options: [
              "Acceptance and reply rates",
              "Website traffic",
              "Follower count",
              "Advertisement impressions",
            ],
            correctAnswer: "Acceptance and reply rates",
          },
          {
            id: "q5",
            question:
              "What is the purpose of updating ICP qualification filters?",
            options: [
              "To increase message volume",
              "To ensure outreach targets the correct audience",
              "To reduce VA workload",
              "To automate closing calls",
            ],
            correctAnswer: "To ensure outreach targets the correct audience",
          },
          {
            id: "q6",
            question:
              "What happens to friend requests that are not accepted within the system timeframe?",
            options: [
              "They are manually chased",
              "They are automatically removed after 3 weeks",
              "They are resent daily",
              "They are escalated to the client",
            ],
            correctAnswer: "They are automatically removed after 3 weeks",
          },
          {
            id: "q7",
            question:
              "What should be prepared before enabling first message automation?",
            options: [
              "At least 3–4 opening message template variations",
              "Only one template is needed",
              "Sales closing scripts",
              "Graphic assets",
            ],
            correctAnswer: "At least 3–4 opening message template variations",
          },
          {
            id: "q8",
            question:
              "Why is template rotation important in the outreach system?",
            options: [
              "To increase typing speed",
              "To avoid platform restrictions caused by repeated identical messages",
              "To reduce VA communication",
              "To automate closing conversations",
            ],
            correctAnswer:
              "To avoid platform restrictions caused by repeated identical messages",
          },
        ],
      },
      {
        id: "day-3-manual-messaging",
        title: "Day 3: Manual Messaging",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What is the most important skill of the VA in manual messaging?",
            options: [
              "Following templates exactly without changes",
              "Personalizing responses and adjusting conversation tone in real time",
              "Sending automated messages only",
              "Avoiding conversation with leads",
            ],
            correctAnswer:
              "Personalizing responses and adjusting conversation tone in real time",
          },
          {
            id: "q2",
            question: "What should the VA do when a lead replies at Stage 7?",
            options: [
              "Let automation continue",
              "Reply manually and build initial rapport",
              "Send booking link immediately",
              "Move the lead to Closed/Lost",
            ],
            correctAnswer: "Reply manually and build initial rapport",
          },
          {
            id: "q3",
            question:
              "How many qualifying questions should be asked during the nurture sequence at Stage 8?",
            options: [
              "1–2 questions",
              "2–3 targeted qualifying questions",
              "5 or more questions",
              "No questions are needed",
            ],
            correctAnswer: "2–3 targeted qualifying questions",
          },
          {
            id: "q4",
            question:
              "What should the VA do if a lead becomes silent after Stage 08 or 09?",
            options: [
              "Send multiple follow-ups immediately",
              "Apply the ghosting protocol sequence",
              "Archive the lead instantly",
              "Switch to automated messaging only",
            ],
            correctAnswer: "Apply the ghosting protocol sequence",
          },
          {
            id: "q5",
            question: "What is the purpose of the Double-Tap Booking Method?",
            options: [
              "To pressure leads to book calls aggressively",
              "To reduce no-shows and increase calendar confirmations",
              "To automate closing conversations",
              "To send mass booking links",
            ],
            correctAnswer:
              "To reduce no-shows and increase calendar confirmations",
          },
          {
            id: "q6",
            question:
              "Why should the VA avoid stacking multiple questions in one message?",
            options: [
              "To increase message length",
              "To improve reply rate and avoid overwhelming the lead",
              "To reduce typing effort",
              "To automate responses",
            ],
            correctAnswer:
              "To improve reply rate and avoid overwhelming the lead",
          },
          {
            id: "q7",
            question:
              "What should the VA do after two follow-ups when a lead remains silent?",
            options: [
              "Continue sending follow-ups",
              "Stop chasing and focus on active leads",
              "Send daily reminders",
              "Escalate immediately to the client",
            ],
            correctAnswer: "Stop chasing and focus on active leads",
          },
          {
            id: "q8",
            question:
              "What is the core conversion mechanism in the FlowChat system?",
            options: [
              "Automation closes the deal",
              "Human conversation builds rapport and converts leads",
              "Follower growth alone",
              "Mass messaging volume",
            ],
            correctAnswer:
              "Human conversation builds rapport and converts leads",
          },
        ],
      },
      {
        id: "day-4-automation--scaling",
        title: "Day 4: Automation & Scaling",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What should be confirmed before scaling outreach volume?",
            options: [
              "Only message count",
              "Foundation elements such as audience, messaging, and pipeline logic",
              "Follower growth metrics",
              "Advertising performance",
            ],
            correctAnswer:
              "Foundation elements such as audience, messaging, and pipeline logic",
          },
          {
            id: "q2",
            question:
              "What happens if scaling is applied to a weak foundation?",
            options: [
              "Pipeline improves immediately",
              "It produces more poor-quality results faster",
              "Lead quality automatically increases",
              "Account restrictions are removed",
            ],
            correctAnswer: "It produces more poor-quality results faster",
          },
          {
            id: "q3",
            question:
              "Where should automation primarily be applied in the FlowChat system?",
            options: [
              "Nurture and qualification stages",
              "Top-of-funnel actions such as friend requests and opening messages",
              "Call closing conversations",
              "Manual response handling",
            ],
            correctAnswer:
              "Top-of-funnel actions such as friend requests and opening messages",
          },
          {
            id: "q4",
            question: "What should the VA handle instead of automation?",
            options: [
              "High-sensitivity actions that require judgment",
              "Sending friend requests",
              "Message imports",
              "Lead scraping",
            ],
            correctAnswer: "High-sensitivity actions that require judgment",
          },
          {
            id: "q5",
            question: "What is the correct principle when scaling the system?",
            options: [
              "Increase message volume regardless of pipeline performance",
              "More leads should follow the same structured pipeline",
              "Change pipeline structure when scaling",
              "Remove manual conversation steps",
            ],
            correctAnswer:
              "More leads should follow the same structured pipeline",
          },
          {
            id: "q6",
            question:
              "Why are rotating message templates important during scaling?",
            options: [
              "To confuse leads",
              "To avoid platform detection from repeated identical messages",
              "To reduce VA workload",
              "To automate closing calls",
            ],
            correctAnswer:
              "To avoid platform detection from repeated identical messages",
          },
          {
            id: "q7",
            question:
              "What should be continuously searched when scaling outreach?",
            options: [
              "New lead sources such as fresh relevant groups",
              "Random social media profiles",
              "Advertising audiences only",
              "Inactive group members",
            ],
            correctAnswer: "New lead sources such as fresh relevant groups",
          },
          {
            id: "q8",
            question: "What is the main focus when expanding system volume?",
            options: [
              "Changing pipeline logic",
              "Doing more of what already works while maintaining structure",
              "Removing manual conversation stages",
              "Increasing automation triggers",
            ],
            correctAnswer:
              "Doing more of what already works while maintaining structure",
          },
        ],
      },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    status: "Locked",
    desc: "4 modules",
    lessons: [
      {
        id: "lead-qualification-logic",
        title: "Lead Qualification Logic",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question: "When should a full pipeline review be conducted?",
            options: [
              "Every day",
              "At the end of each 30-day cycle",
              "Only when the client complains",
              "When lead volume increases",
            ],
            correctAnswer: "At the end of each 30-day cycle",
          },
          {
            id: "q2",
            question: "What is considered a healthy acceptance rate?",
            options: ["Above 5%", "Above 20%", "Above 50%", "Above 80%"],
            correctAnswer: "Above 20%",
          },
          {
            id: "q3",
            question:
              "If the reply rate is low, what should be adjusted first?",
            options: [
              "Increase message volume",
              "Rewrite the opening message hook",
              "Change pipeline stages",
              "Remove qualification questions",
            ],
            correctAnswer: "Rewrite the opening message hook",
          },
          {
            id: "q4",
            question: "What should be reviewed if the booking rate is low?",
            options: [
              "Pipeline stage colors",
              "Nurture conversation and qualification logic",
              "Client branding",
              "Follower count",
            ],
            correctAnswer: "Nurture conversation and qualification logic",
          },
          {
            id: "q5",
            question:
              "Which pipeline stage should be improved if leads drop off excessively?",
            options: [
              "The stage with the highest drop-off rate",
              "The first pipeline stage only",
              "The closing stage only",
              "Randomly selected stages",
            ],
            correctAnswer: "The stage with the highest drop-off rate",
          },
          {
            id: "q6",
            question:
              "What is the correct approach when optimizing pipeline performance?",
            options: [
              "Change multiple variables at once",
              "Adjust one metric-related factor at a time",
              "Increase automation triggers immediately",
              "Ignore weak metrics",
            ],
            correctAnswer: "Adjust one metric-related factor at a time",
          },
          {
            id: "q7",
            question: "What does declining acceptance rate indicate?",
            options: [
              "Wrong audience targeting or irrelevant lead sources",
              "Too many follow-ups",
              "High-quality messaging",
              "Automation failure",
            ],
            correctAnswer:
              "Wrong audience targeting or irrelevant lead sources",
          },
          {
            id: "q8",
            question: "What is the main philosophy of pipeline optimization?",
            options: [
              "Focus on lead quantity only",
              "Every metric points to a specific system improvement lever",
              "Increase outreach speed only",
              "Remove manual conversation stages",
            ],
            correctAnswer:
              "Every metric points to a specific system improvement lever",
          },
        ],
      },
      {
        id: "ghosting-protocols",
        title: "Ghosting Protocols",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What is the most important long-term asset in the FlowChat system?",
            options: [
              "Message volume",
              "Account health and compliance",
              "Number of leads imported",
              "Template variety only",
            ],
            correctAnswer: "Account health and compliance",
          },
          {
            id: "q2",
            question:
              "What should be prioritized when running outreach operations?",
            options: [
              "Maximum messaging speed",
              "Compliance and platform safety over volume",
              "Aggressive follow-up frequency",
              "Bulk friend request sending",
            ],
            correctAnswer: "Compliance and platform safety over volume",
          },
          {
            id: "q3",
            question:
              "What is the correct action when acceptance rate starts dropping?",
            options: [
              "Increase friend request volume",
              "Pause and review audience targeting",
              "Send more messages to existing leads",
              "Ignore the metric",
            ],
            correctAnswer: "Pause and review audience targeting",
          },
          {
            id: "q4",
            question: "What should be done if messaging restrictions occur?",
            options: [
              "Continue automation normally",
              "Stop automation and rewrite messaging scripts",
              "Increase outreach volume",
              "Send identical messages less frequently without changes",
            ],
            correctAnswer: "Stop automation and rewrite messaging scripts",
          },
          {
            id: "q5",
            question:
              "How should template messaging be handled to avoid platform detection?",
            options: [
              "Use identical scripts repeatedly",
              "Rotate templates and personalize opening lines",
              "Send long sales pitches in the first message",
              "Automate all replies",
            ],
            correctAnswer: "Rotate templates and personalize opening lines",
          },
          {
            id: "q6",
            question:
              "What is the first step when a temporary action block is detected?",
            options: [
              "Ignore and continue outreach",
              "Pause all activity immediately",
              "Increase messaging frequency",
              "Remove pipeline leads",
            ],
            correctAnswer: "Pause all activity immediately",
          },
          {
            id: "q7",
            question:
              "How should the account be warmed up after restrictions are lifted?",
            options: [
              "Return immediately to previous outreach volume",
              "Restart outreach gradually",
              "Send bulk requests to compensate",
              "Automate maximum messaging speed",
            ],
            correctAnswer: "Restart outreach gradually",
          },
          {
            id: "q8",
            question:
              "Why is maintaining account health more important than maximizing outreach volume?",
            options: [
              "High volume guarantees bookings",
              "A healthy account sustains long-term pipeline performance",
              "It reduces VA work",
              "It increases follower count",
            ],
            correctAnswer:
              "A healthy account sustains long-term pipeline performance",
          },
        ],
      },
      {
        id: "appointment-setting-flows",
        title: "Appointment Setting Flows",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What must be verified before running any campaign or client walkthrough?",
            options: [
              "Client branding design",
              "Technical readiness of the account",
              "Number of social media followers",
              "Advertising budget",
            ],
            correctAnswer: "Technical readiness of the account",
          },
          {
            id: "q2",
            question:
              "What is the first thing to confirm regarding FlowChat access?",
            options: [
              "That the client has enough leads",
              "Login is active and there are no pending restrictions",
              "Campaign budget allocation",
              "Graphic assets upload",
            ],
            correctAnswer:
              "Login is active and there are no pending restrictions",
          },
          {
            id: "q3",
            question:
              "Why must the booking link be tested before client sessions?",
            options: [
              "To check website design only",
              "To ensure it loads correctly and sends confirmations",
              "To increase conversion rate automatically",
              "To verify client branding",
            ],
            correctAnswer:
              "To ensure it loads correctly and sends confirmations",
          },
          {
            id: "q4",
            question:
              "What must be documented and confirmed with the client before setup?",
            options: [
              "Only campaign duration",
              "Target niche, ICP, offer, pricing, and goals",
              "Social media page followers",
              "Number of templates available",
            ],
            correctAnswer: "Target niche, ICP, offer, pricing, and goals",
          },
          {
            id: "q5",
            question: "What drives outreach volume and messaging strategy?",
            options: [
              "Client revenue and call goals",
              "Color theme of client branding",
              "VA working speed",
              "Automation software version",
            ],
            correctAnswer: "Client revenue and call goals",
          },
          {
            id: "q6",
            question: "What should the VA do after every strategy call?",
            options: [
              "Start automation immediately",
              "Update the shared documentation with confirmed inputs",
              "Increase messaging volume",
              "Create new social media accounts",
            ],
            correctAnswer:
              "Update the shared documentation with confirmed inputs",
          },
          {
            id: "q7",
            question: "Why should campaigns never be run based on assumptions?",
            options: [
              "It reduces VA workload",
              "It can cause targeting, messaging, and conversion errors",
              "It speeds up setup time",
              "It eliminates manual tasks",
            ],
            correctAnswer:
              "It can cause targeting, messaging, and conversion errors",
          },
          {
            id: "q8",
            question:
              "What is the main purpose of VA onboarding checklist completion?",
            options: [
              "To allow automation to run safely and correctly",
              "To increase platform follower count",
              "To shorten campaign duration",
              "To remove manual messaging",
            ],
            correctAnswer: "To allow automation to run safely and correctly",
          },
        ],
      },
      {
        id: "reporting--analytics",
        title: "Reporting & Analytics",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "When should a full pipeline optimization review be conducted?",
            options: [
              "Every day",
              "At the end of each 30-day campaign cycle",
              "Only when lead volume increases",
              "When the client requests changes",
            ],
            correctAnswer: "At the end of each 30-day campaign cycle",
          },
          {
            id: "q2",
            question:
              "What is considered a healthy acceptance rate in the pipeline?",
            options: ["Above 5%", "Above 20%", "Above 50%", "Above 80%"],
            correctAnswer: "Above 20%",
          },
          {
            id: "q3",
            question: "What should be done if reply rate is below target?",
            options: [
              "Increase messaging volume immediately",
              "Rewrite and test a new opening message hook",
              "Ignore the metric",
              "Change pipeline stages randomly",
            ],
            correctAnswer: "Rewrite and test a new opening message hook",
          },
          {
            id: "q4",
            question: "What should be reviewed when booking rate is low?",
            options: [
              "Client branding colors",
              "Nurture conversation flow and qualification logic",
              "Number of social media posts",
              "Follower growth rate",
            ],
            correctAnswer: "Nurture conversation flow and qualification logic",
          },
          {
            id: "q5",
            question:
              "What is the correct optimization principle when adjusting pipeline performance?",
            options: [
              "Change multiple variables at once",
              "Adjust one metric-related factor at a time",
              "Increase automation triggers immediately",
              "Ignore weak metrics",
            ],
            correctAnswer: "Adjust one metric-related factor at a time",
          },
          {
            id: "q6",
            question: "What does declining acceptance rate indicate?",
            options: [
              "Wrong audience targeting or irrelevant lead sources",
              "Too many follow-ups",
              "High-quality messaging",
              "Automation failure",
            ],
            correctAnswer:
              "Wrong audience targeting or irrelevant lead sources",
          },
          {
            id: "q7",
            question:
              "Which pipeline stage should be prioritized if leads are dropping off excessively?",
            options: [
              "Random stage selection",
              "The stage with the highest drop-off rate",
              "The closing stage only",
              "The first pipeline stage only",
            ],
            correctAnswer: "The stage with the highest drop-off rate",
          },
          {
            id: "q8",
            question: "What is the main philosophy behind pipeline analytics?",
            options: [
              "Focus on lead quantity only",
              "Every metric represents a specific system improvement lever",
              "Increase outreach speed regardless of performance",
              "Remove manual conversation steps",
            ],
            correctAnswer:
              "Every metric represents a specific system improvement lever",
          },
        ],
      },
    ],
  },
  {
    id: "management",
    title: "Management",
    status: "Locked",
    desc: "1 module",
    lessons: [
      {
        id: "va-management-best-practices",
        title: "VA Management Best Practices",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What is the primary responsibility of the VA in the FlowChat system?",
            options: [
              "Only sending messages",
              "Managing the lead pipeline and client relationship daily",
              "Running advertisements",
              "Designing graphics",
            ],
            correctAnswer:
              "Managing the lead pipeline and client relationship daily",
          },
          {
            id: "q2",
            question: "What are the four operational roles the VA performs?",
            options: [
              "Guide, Demonstrator, Operator, and Checkpoint",
              "Sender, Designer, Marketer, and Analyst",
              "Closer, Advertiser, Writer, and Manager",
              "Trainer, Developer, Recruiter, and Salesperson",
            ],
            correctAnswer: "Guide, Demonstrator, Operator, and Checkpoint",
          },
          {
            id: "q3",
            question:
              "What should be done during the first 30 minutes of the daily rhythm?",
            options: [
              "Run advertising campaigns",
              "Inbox cleanup and check Stage 07 replies",
              "Increase outreach volume",
              "Design new templates",
            ],
            correctAnswer: "Inbox cleanup and check Stage 07 replies",
          },
          {
            id: "q4",
            question:
              "What is the main activity during the middle 60-minute block?",
            options: [
              "Lead generation and pipeline movement",
              "Client branding updates",
              "Sales closing calls",
              "Social media posting",
            ],
            correctAnswer: "Lead generation and pipeline movement",
          },
          {
            id: "q5",
            question:
              "What should be done during the final 30 minutes of work?",
            options: [
              "Focus only on messaging volume",
              "Perform data hygiene and report KPIs",
              "Create new automation flows",
              "Design marketing content",
            ],
            correctAnswer: "Perform data hygiene and report KPIs",
          },
          {
            id: "q6",
            question:
              "Which skill helps improve reply rate by making conversations natural?",
            options: [
              "Rapport building using conversational language",
              "Using formal scripted responses only",
              "Sending automated messages",
              "Avoiding personalization",
            ],
            correctAnswer: "Rapport building using conversational language",
          },
          {
            id: "q7",
            question:
              "What should the VA do when a lead shows interest but is not ready to book?",
            options: [
              "Over-qualify and push aggressively",
              "Reduce pressure and read the lead’s signal",
              "Send repeated follow-ups",
              "Move the lead to lost pipeline",
            ],
            correctAnswer: "Reduce pressure and read the lead’s signal",
          },
          {
            id: "q8",
            question:
              "What is the core distinction between automation and human conversation in FlowChat?",
            options: [
              "Automation closes deals faster",
              "Automation fills the pipeline while human conversation converts leads",
              "Human conversation is optional",
              "Automation replaces VA communication",
            ],
            correctAnswer:
              "Automation fills the pipeline while human conversation converts leads",
          },
        ],
      },
    ],
  },
  {
    id: "safety",
    title: "Safety",
    status: "Locked",
    desc: "2 modules",
    lessons: [
      {
        id: "crisis-management-protocols",
        title: "Crisis Management Protocols",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What should always be prioritized in FlowChat operations?",
            options: [
              "Maximum messaging volume",
              "Account health and platform compliance",
              "Fastest automation speed",
              "Number of leads imported daily",
            ],
            correctAnswer: "Account health and platform compliance",
          },
          {
            id: "q2",
            question:
              "What is the long-term value of maintaining account compliance?",
            options: [
              "Higher short-term outreach volume",
              "Sustainable pipeline performance over time",
              "Eliminating manual messaging",
              "Increasing follower count",
            ],
            correctAnswer: "Sustainable pipeline performance over time",
          },
          {
            id: "q3",
            question:
              "What should be done when acceptance rate consistently drops?",
            options: [
              "Increase friend request volume",
              "Pause outreach and review targeting criteria",
              "Send more identical messages",
              "Ignore the metric",
            ],
            correctAnswer: "Pause outreach and review targeting criteria",
          },
          {
            id: "q4",
            question:
              "What is the correct response when messaging restrictions occur?",
            options: [
              "Continue automation normally",
              "Pause automation and rewrite messaging scripts",
              "Increase messaging frequency",
              "Send bulk friend requests",
            ],
            correctAnswer: "Pause automation and rewrite messaging scripts",
          },
          {
            id: "q5",
            question:
              "How should template messaging be handled to avoid platform detection?",
            options: [
              "Use identical scripts repeatedly",
              "Rotate templates and maintain conversational tone",
              "Send long sales pitches in the first message",
              "Automate all replies without personalization",
            ],
            correctAnswer: "Rotate templates and maintain conversational tone",
          },
          {
            id: "q6",
            question:
              "What is the first action when a temporary action block is detected?",
            options: [
              "Continue outreach activity",
              "Pause all automation activity",
              "Increase messaging volume",
              "Delete pipeline data",
            ],
            correctAnswer: "Pause all automation activity",
          },
          {
            id: "q7",
            question:
              "How should the account be warmed up after restrictions are lifted?",
            options: [
              "Return immediately to previous activity level",
              "Restart outreach gradually",
              "Send bulk messages to compensate",
              "Enable maximum automation speed",
            ],
            correctAnswer: "Restart outreach gradually",
          },
          {
            id: "q8",
            question:
              "What is the main philosophy behind crisis and compliance management?",
            options: [
              "Prioritize volume over safety",
              "Account health enables long-term scalability",
              "Ignore minor metric changes",
              "Focus only on lead import",
            ],
            correctAnswer: "Account health enables long-term scalability",
          },
        ],
      },
      {
        id: "account-safety--compliance",
        title: "Account Safety & Compliance",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What is the primary purpose of account safety and compliance in FlowChat operations?",
            options: [
              "To maximize messaging speed",
              "To protect long-term pipeline performance and prevent platform restrictions",
              "To increase friend request volume",
              "To automate closing conversations",
            ],
            correctAnswer:
              "To protect long-term pipeline performance and prevent platform restrictions",
          },
          {
            id: "q2",
            question:
              "What should be prioritized when running outreach campaigns?",
            options: [
              "Lead volume only",
              "Compliance and account health",
              "Message automation speed",
              "Follower growth",
            ],
            correctAnswer: "Compliance and account health",
          },
          {
            id: "q3",
            question: "What is the recommended acceptance rate target?",
            options: [
              "Below 10%",
              "Around 20% or higher",
              "Above 70%",
              "Exactly 50%",
            ],
            correctAnswer: "Around 20% or higher",
          },
          {
            id: "q4",
            question:
              "What should the VA do if outreach performance begins to trigger platform warnings?",
            options: [
              "Increase activity immediately",
              "Pause automation and review targeting and messaging",
              "Ignore the warning",
              "Send bulk messages to recover performance",
            ],
            correctAnswer:
              "Pause automation and review targeting and messaging",
          },
          {
            id: "q5",
            question:
              "Why is gradual activity warm-up important after a restriction is lifted?",
            options: [
              "To test new designs",
              "To prevent triggering algorithmic spam detection",
              "To increase message count quickly",
              "To reduce VA workload",
            ],
            correctAnswer: "To prevent triggering algorithmic spam detection",
          },
          {
            id: "q6",
            question:
              "What is the correct outreach philosophy for scalable pipeline operations?",
            options: [
              "Maximum outreach volume at all times",
              "Maintain system structure while scaling inputs",
              "Remove manual conversation stages",
              "Automate all messaging",
            ],
            correctAnswer: "Maintain system structure while scaling inputs",
          },
          {
            id: "q7",
            question:
              "What is the biggest operational risk in ignoring compliance rules?",
            options: [
              "Higher conversion rate",
              "Temporary or permanent account restrictions",
              "Increased lead quality",
              "Faster automation setup",
            ],
            correctAnswer: "Temporary or permanent account restrictions",
          },
          {
            id: "q8",
            question:
              "What should guide VA decision-making in outreach operations?",
            options: [
              "Short-term messaging volume",
              "Long-term account sustainability and pipeline health",
              "Client branding style",
              "Social media popularity metrics",
            ],
            correctAnswer:
              "Long-term account sustainability and pipeline health",
          },
        ],
      },
    ],
  },
  {
    id: "tech",
    title: "Tech",
    status: "Locked",
    desc: "1 module",
    lessons: [
      {
        id: "custom-crm-integrations",
        title: "Custom CRM Integrations",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "When should a full pipeline optimization review be conducted?",
            options: [
              "Every day",
              "At the end of each 30-day campaign cycle",
              "Only when lead volume increases",
              "When the client requests changes",
            ],
            correctAnswer: "At the end of each 30-day campaign cycle",
          },
          {
            id: "q2",
            question:
              "What is considered a healthy acceptance rate in FlowChat operations?",
            options: ["Above 5%", "Above 20%", "Above 50%", "Above 80%"],
            correctAnswer: "Above 20%",
          },
          {
            id: "q3",
            question: "What should be done if reply rate is below target?",
            options: [
              "Increase messaging volume immediately",
              "Rewrite the opening message hook",
              "Change pipeline stages randomly",
              "Ignore the metric",
            ],
            correctAnswer: "Rewrite the opening message hook",
          },
          {
            id: "q4",
            question: "What should be reviewed when booking rate is low?",
            options: [
              "Client branding colors",
              "Nurture conversation flow and qualification logic",
              "Number of social media posts",
              "Follower growth rate",
            ],
            correctAnswer: "Nurture conversation flow and qualification logic",
          },
          {
            id: "q5",
            question:
              "Which pipeline stage should be prioritized if leads drop off excessively?",
            options: [
              "Random stage selection",
              "The stage with the highest drop-off rate",
              "The closing stage only",
              "The first pipeline stage only",
            ],
            correctAnswer: "The stage with the highest drop-off rate",
          },
          {
            id: "q6",
            question:
              "What is the correct optimization strategy when adjusting pipeline performance?",
            options: [
              "Change multiple variables at once",
              "Adjust one metric-related factor at a time",
              "Increase automation triggers immediately",
              "Ignore weak metrics",
            ],
            correctAnswer: "Adjust one metric-related factor at a time",
          },
          {
            id: "q7",
            question: "What does declining acceptance rate usually indicate?",
            options: [
              "Wrong audience targeting or irrelevant lead sources",
              "Too many follow-ups",
              "High-quality messaging",
              "Automation failure",
            ],
            correctAnswer:
              "Wrong audience targeting or irrelevant lead sources",
          },
          {
            id: "q8",
            question: "What is the main philosophy behind pipeline analytics?",
            options: [
              "Focus on lead quantity only",
              "Each metric represents a specific system improvement lever",
              "Increase outreach speed regardless of performance",
              "Remove manual conversation stages",
            ],
            correctAnswer:
              "Each metric represents a specific system improvement lever",
          },
        ],
      },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    desc: "1 module",
    status: "Locked",
    lessons: [
      {
        id: "rebuttal-mastery",
        title: "Rebuttal Mastery",
        content: ``,
        status: "Locked",
        href: "",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What should guide communication and rebuttal handling in FlowChat operations?",
            options: [
              "Script memorization only",
              "Lead behavior, conversation context, and system logic",
              "Client branding design",
              "Message volume alone",
            ],
            correctAnswer:
              "Lead behavior, conversation context, and system logic",
          },
          {
            id: "q2",
            question:
              "When a lead expresses hesitation, what is the best VA response approach?",
            options: [
              "Push aggressively for booking",
              "Listen, reduce pressure, and address the concern naturally",
              "Send multiple follow-up messages",
              "Switch to automated responses",
            ],
            correctAnswer:
              "Listen, reduce pressure, and address the concern naturally",
          },
          {
            id: "q3",
            question: "How should objections be handled during conversation?",
            options: [
              "Argue with the lead",
              "Understand the concern before responding",
              "Ignore the objection",
              "Immediately send booking link",
            ],
            correctAnswer: "Understand the concern before responding",
          },
          {
            id: "q4",
            question:
              "What is the most effective rebuttal strategy in the FlowChat system?",
            options: [
              "Over-explaining product features",
              "Matching lead energy and addressing the underlying concern",
              "Using aggressive closing lines",
              "Repeating the same script",
            ],
            correctAnswer:
              "Matching lead energy and addressing the underlying concern",
          },
          {
            id: "q5",
            question:
              "What should the VA do if a lead is interested but not ready to book?",
            options: [
              "Over-qualify and pressure the lead",
              "Lower pressure and read buying signals",
              "Send repeated closing messages",
              "Move the lead to lost pipeline immediately",
            ],
            correctAnswer: "Lower pressure and read buying signals",
          },
          {
            id: "q6",
            question:
              "Why is rapport building important before rebutting objections?",
            options: [
              "To increase message length",
              "To create trust and reduce resistance",
              "To automate responses",
              "To increase outreach speed",
            ],
            correctAnswer: "To create trust and reduce resistance",
          },
          {
            id: "q7",
            question: "What is the biggest mistake when handling objections?",
            options: [
              "Listening to the lead",
              "Responding without understanding the concern",
              "Being polite",
              "Matching conversation tone",
            ],
            correctAnswer: "Responding without understanding the concern",
          },
          {
            id: "q8",
            question: "What is the primary goal of rebuttal communication?",
            options: [
              "To win the argument",
              "To maintain conversation momentum and trust",
              "To send more scripts",
              "To close immediately regardless of interest",
            ],
            correctAnswer: "To maintain conversation momentum and trust",
          },
        ],
      },
    ],
  },
  {
    id: "certification",
    title: "Certification",
    status: "Locked",
    desc: "1 module",
    lessons: [
      {
        id: "certification-final-review",
        title: "Certification - Final Review",
        href: "",
        content: ``,
        status: "Locked",
        isLocked: true,
        quiz: [
          {
            id: "q1",
            question:
              "What must be completed before running any automation or client session setup?",
            options: [
              "Marketing content preparation",
              "Technical account readiness and platform access verification",
              "Follower growth optimization",
              "Social media posting schedule",
            ],
            correctAnswer:
              "Technical account readiness and platform access verification",
          },
          {
            id: "q2",
            question:
              "What should be tested regarding the booking system before client sessions?",
            options: [
              "Only UI appearance",
              "End-to-end booking link functionality and confirmation flow",
              "Client branding design",
              "Message template count",
            ],
            correctAnswer:
              "End-to-end booking link functionality and confirmation flow",
          },
          {
            id: "q3",
            question:
              "What is the most important strategy step before campaign execution?",
            options: [
              "Start automation immediately",
              "Confirm and document target niche, ICP, offer, pricing, and goals",
              "Increase outreach volume",
              "Create more templates",
            ],
            correctAnswer:
              "Confirm and document target niche, ICP, offer, pricing, and goals",
          },
          {
            id: "q4",
            question: "Why must client assumptions be avoided during setup?",
            options: [
              "To reduce documentation work",
              "Because campaigns should not run without confirmed strategic inputs",
              "To increase VA speed",
              "To simplify client communication",
            ],
            correctAnswer:
              "Because campaigns should not run without confirmed strategic inputs",
          },
          {
            id: "q5",
            question:
              "What drives outreach volume and messaging tone in the system?",
            options: [
              "Client revenue and call goals",
              "Social media popularity",
              "Graphic design quality",
              "Automation software version",
            ],
            correctAnswer: "Client revenue and call goals",
          },
          {
            id: "q6",
            question:
              "What should the VA do after every strategy or planning session?",
            options: [
              "Start automation immediately",
              "Update shared documentation with confirmed details",
              "Increase friend request volume",
              "Create new social media accounts",
            ],
            correctAnswer: "Update shared documentation with confirmed details",
          },
          {
            id: "q7",
            question:
              "What is the most important principle in certification-level VA operations?",
            options: [
              "Speed of messaging",
              "System accuracy, compliance, and pipeline sustainability",
              "Follower count growth",
              "Template quantity",
            ],
            correctAnswer:
              "System accuracy, compliance, and pipeline sustainability",
          },
          {
            id: "q8",
            question: "What defines successful FlowChat certification mastery?",
            options: [
              "Ability to read SOPs only",
              "Understanding and applying operational, communication, and compliance logic",
              "Memorizing scripts",
              "Increasing outreach volume",
            ],
            correctAnswer:
              "Understanding and applying operational, communication, and compliance logic",
          },
        ],
      },
    ],
  },
];
