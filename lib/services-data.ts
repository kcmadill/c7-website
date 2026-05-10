export type Service = {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  metaDescription: string;
  problem: string;
  approach: string;
  outcomes: string[];
  whoFor: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "business-process-improvement",
    num: "01",
    title: "Business Process Improvement",
    tagline: "Fix how your business operates — then build a better version of it.",
    metaDescription:
      "C7 helps businesses identify waste, eliminate inefficiency, and build better operating processes. Hands-on business process improvement consulting built to execute.",
    problem:
      "Most businesses don't have a strategy problem — they have an execution problem. Broken workflows, redundant steps, unclear ownership, and manual work that should have been automated years ago. The result is wasted time, rising costs, and a team that's always putting out fires instead of building something.",
    approach:
      "We start by mapping how your business actually operates — not how you think it does. We interview your team, observe your workflows, and document the current state in detail. Then we identify exactly where the waste is, where the bottlenecks are, and where the risk lives. From there we build a clear, prioritized improvement plan and stay in the work to implement it alongside you.",
    outcomes: [
      "Documented current-state process maps across all key functions",
      "Identified waste, redundancy, and bottlenecks with root cause analysis",
      "Prioritized improvement roadmap with clear ROI",
      "Redesigned workflows and standard operating procedures",
      "Implementation support — we don't hand off and disappear",
    ],
    whoFor:
      "Growing businesses that have outgrown their original processes. Companies coming out of a merger or acquisition. Organizations where the same problems keep recurring despite repeated attempts to fix them.",
    details: [
      "Process mapping and current-state documentation",
      "Waste and inefficiency analysis (time, cost, quality, risk)",
      "Future-state process design",
      "Standard operating procedure development",
      "Change management and team adoption support",
      "KPI definition and measurement framework",
    ],
  },
  {
    slug: "strategic-planning",
    num: "02",
    title: "Strategic Planning & Roadmapping",
    tagline: "Define where you're going. Build the plan to get there. Execute with discipline.",
    metaDescription:
      "C7 helps businesses build clear strategic plans and executable roadmaps. Strategic planning consulting that stays in the work through implementation — not just advice.",
    problem:
      "Most strategic plans fail not because they're bad plans, but because no one executes them. Leadership teams spend a weekend offsite, fill a whiteboard, and leave with a deck full of good ideas — and three months later nothing has changed. The problem isn't strategy. It's the gap between deciding and doing.",
    approach:
      "We work with your leadership team to define clear, measurable goals and build a realistic roadmap to achieve them. We challenge assumptions, push back on wishful thinking, and help you prioritize ruthlessly. Then we build the operating cadence — the meetings, metrics, and accountability structures — that actually keep the plan alive after we leave.",
    outcomes: [
      "Clear 12-month and 3-year strategic priorities",
      "Executable roadmap with milestones, owners, and timelines",
      "Resource and capacity alignment",
      "Quarterly review and course-correction framework",
      "Team alignment and buy-in across leadership",
    ],
    whoFor:
      "Business owners and leadership teams that are ready to move from reactive to intentional. Companies entering a new phase of growth, a market pivot, or a major operational change. Organizations where everyone is busy but no one is sure if they're working on the right things.",
    details: [
      "Leadership team facilitation and goal alignment",
      "Market and competitive landscape analysis",
      "SWOT and gap analysis",
      "Strategic priority setting and trade-off decisions",
      "Roadmap development with quarterly milestones",
      "OKR or KPI framework implementation",
      "Executive operating cadence design",
    ],
  },
  {
    slug: "technology-it-services",
    num: "03",
    title: "Technology & IT Services",
    tagline: "The right technology, implemented correctly, running the way it should.",
    metaDescription:
      "C7 provides hands-on IT consulting and technology implementation services. We assess your current tech stack, identify gaps, and build or source the right solutions for your business.",
    problem:
      "Technology should make your business faster and simpler. For most businesses it does the opposite — disconnected systems, tools your team doesn't use, security gaps you don't know about, and a growing list of IT problems that nobody owns. Every tool purchased to solve a problem creates two new ones.",
    approach:
      "We start with an honest assessment of your current technology landscape — what you have, what it costs, how it's actually being used, and where the risks are. No vendor bias. No upsell. Just a clear picture of what's working, what isn't, and what needs to change. Then we build or source the right solutions and stay in the implementation until it's actually working.",
    outcomes: [
      "Full technology stack audit and assessment",
      "Identified security gaps and remediation plan",
      "Technology consolidation and cost reduction opportunities",
      "Implementation of new systems with full team adoption",
      "Ongoing IT support and management as needed",
    ],
    whoFor:
      "Small and mid-size businesses without a dedicated IT team or CTO. Companies that have grown quickly and accumulated tech debt. Organizations facing a specific IT challenge — a new system implementation, a security concern, or a major technology transition.",
    details: [
      "Technology stack audit and inventory",
      "Security assessment and vulnerability identification",
      "Software and infrastructure recommendations",
      "System implementation and configuration",
      "Team training and adoption support",
      "IT vendor selection and management",
      "Ongoing IT support and managed services",
    ],
  },
  {
    slug: "project-planning-execution",
    num: "04",
    title: "Project Planning & Execution",
    tagline: "Projects that actually finish — on time, on budget, and delivering what they promised.",
    metaDescription:
      "C7 provides hands-on project planning and execution management. We don't just build the plan — we stay in the work and manage delivery from kickoff to completion.",
    problem:
      "Most projects fail for the same reasons: unclear scope, no real accountability, poor communication, and a project manager who tracks status but doesn't solve problems. By the time everyone realizes the project is off track, it's already too late to recover without significant pain.",
    approach:
      "We build the project structure from the ground up — scope, timeline, dependencies, risks, and resource requirements — and then we stay in it to manage execution. We run the project meetings, track the milestones, escalate the right issues at the right time, and keep the team moving. We're not a status reporter. We're a problem solver embedded in your team.",
    outcomes: [
      "Clearly defined project scope, timeline, and success criteria",
      "Full project plan with dependencies, milestones, and owners",
      "Risk identification and mitigation planning",
      "Active execution management through delivery",
      "Stakeholder communication and reporting",
      "Post-project review and lessons learned",
    ],
    whoFor:
      "Businesses managing a major initiative without dedicated project management capacity. Teams that have tried and failed to deliver a project internally. Organizations facing a high-stakes implementation — a system launch, a process overhaul, or a business transformation.",
    details: [
      "Project charter and scope definition",
      "Work breakdown structure and timeline development",
      "Resource planning and capacity alignment",
      "Risk register and issue management",
      "Stakeholder management and communication planning",
      "Agile or waterfall delivery management",
      "Project closeout and transition support",
    ],
  },
  {
    slug: "operations-consulting",
    num: "05",
    title: "Operations Consulting",
    tagline: "Build a business that runs the way it should — across every function.",
    metaDescription:
      "C7 operations consulting covers finance, HR, sales, marketing, and every other function that needs to work better. We assess how your business operates and build a better version of it.",
    problem:
      "As businesses grow, the informal ways of operating that worked at 5 people break down at 25, and collapse at 50. Finance is running on spreadsheets, HR is reactive, sales has no process, and marketing is guessing. Every function is doing its best — but none of them are operating the way they need to for the business to scale.",
    approach:
      "We look at your business as a system — how each function operates, how they connect to each other, and where the friction is. We assess honestly, prioritize by impact, and build better operating models across whatever functions need the most attention. We don't just write playbooks. We help you implement them.",
    outcomes: [
      "Cross-functional operational assessment",
      "Prioritized list of highest-impact improvements",
      "Redesigned operating models for target functions",
      "Clear roles, responsibilities, and accountability structures",
      "Scalable processes built for your next stage of growth",
    ],
    whoFor:
      "Businesses that are growing faster than their operations can handle. Companies where leadership is spending too much time on operational firefighting. Organizations that know something is wrong but can't pinpoint exactly what needs to change.",
    details: [
      "Finance and accounting operations",
      "HR and people operations",
      "Sales process and pipeline management",
      "Marketing operations and planning",
      "Customer success and support operations",
      "Cross-functional workflow design",
      "Operating model documentation and training",
    ],
  },
  {
    slug: "procurement-vendor-solutions",
    num: "06",
    title: "Procurement & Vendor Solutions",
    tagline: "The right vendors, at the right price, without the guesswork.",
    metaDescription:
      "C7 manages the vendor selection and procurement process for business and technology solutions. We find, evaluate, and onboard the right fit — so you don't overpay or underperform.",
    problem:
      "Most businesses make vendor decisions under pressure — a contract is expiring, a new need has emerged, or someone in leadership heard about a tool and wants to try it. The result is overpaying for solutions that don't fit, getting locked into bad contracts, and spending months cleaning up a decision that took two weeks to make.",
    approach:
      "We run the procurement process the right way. We start with a clear definition of what you actually need — not what a vendor is telling you that you need. We build the requirements, evaluate the market, issue RFPs where appropriate, and score vendors against your real criteria. Then we support contract negotiation and implementation handoff.",
    outcomes: [
      "Clear requirements definition before any vendor conversations",
      "Market landscape review and vendor shortlist",
      "Structured evaluation with scoring criteria",
      "RFP development and vendor response management",
      "Contract negotiation support",
      "Implementation and onboarding oversight",
    ],
    whoFor:
      "Businesses making a significant technology or services purchase. Organizations replacing a major vendor or platform. Companies that have been burned by bad vendor decisions and want a structured process this time.",
    details: [
      "Needs assessment and requirements documentation",
      "Vendor market research and landscaping",
      "RFP development and management",
      "Vendor evaluation and scoring",
      "Reference checks and due diligence",
      "Contract review and negotiation support",
      "Onboarding and implementation oversight",
    ],
  },
  {
    slug: "asset-systems-integration",
    num: "07",
    title: "Asset & Systems Integration",
    tagline: "Bring your systems and teams together so nothing falls through the cracks.",
    metaDescription:
      "C7 manages business and technology integration projects — acquisitions, platform consolidations, and system migrations. We ensure your data, workflows, and teams work as one.",
    problem:
      "Integration projects are where good businesses go to lose time and money. Whether you've acquired a new company, merged two platforms, or outgrown a system you've been on for years — the work of bringing systems and teams together is complex, high-risk, and easy to underestimate. Without someone managing the full picture, things fall through the cracks.",
    approach:
      "We take ownership of the integration process from planning through completion. We map what exists on both sides, design the future-state architecture, sequence the work to minimize disruption, and manage execution. We coordinate across technical teams, business stakeholders, and vendors — keeping the project moving and the risks visible.",
    outcomes: [
      "Full integration assessment and scope definition",
      "Data migration planning and execution",
      "System configuration and workflow alignment",
      "Team transition and change management",
      "Integration testing and validation",
      "Post-integration stabilization and support",
    ],
    whoFor:
      "Companies that have completed an acquisition and need to integrate the new business. Organizations consolidating platforms or migrating off a legacy system. Businesses managing a major technology transition with significant data and workflow implications.",
    details: [
      "Current-state mapping across both environments",
      "Integration architecture and sequencing",
      "Data migration strategy and execution",
      "API and systems connectivity",
      "Workflow redesign for the combined environment",
      "Team training and transition support",
      "Post-integration monitoring and stabilization",
    ],
  },
  {
    slug: "ai-integration-adoption",
    num: "08",
    title: "AI Integration & Adoption",
    tagline: "AI that actually works inside your business — not just a demo that impresses nobody.",
    metaDescription:
      "C7 helps businesses identify where AI creates real value and implement it practically. We build AI agents and workflows that run inside your business — handling research, analysis, drafting, and operations.",
    problem:
      "Every business is being told they need to use AI. Most are either doing nothing — waiting to see how it shakes out — or throwing money at tools that look impressive in a demo and sit unused six months later. The businesses that will win with AI aren't the ones who move fastest. They're the ones who implement it in the right places, the right way.",
    approach:
      "We start by assessing your business for genuine AI leverage — the specific workflows, decisions, and tasks where AI can reduce time, improve quality, or eliminate work entirely. We don't recommend tools. We build solutions. That means custom AI agents, automated workflows, and integrated systems that run inside your business every day — not experiments sitting in a sandbox.",
    outcomes: [
      "AI opportunity assessment across all key business functions",
      "Prioritized implementation roadmap by ROI",
      "Custom AI agents built for your specific workflows",
      "Automated pipelines connecting AI to your existing systems",
      "Team training and adoption support",
      "Ongoing optimization as AI capabilities evolve",
    ],
    whoFor:
      "Business owners who know AI matters but aren't sure where to start. Companies that have tried AI tools and gotten underwhelming results. Organizations with repetitive, high-volume work that could be automated. Leadership teams that want a practical, no-hype assessment of where AI fits in their business.",
    details: [
      "AI readiness and opportunity assessment",
      "Use case identification and prioritization",
      "Custom AI agent development",
      "Workflow automation and integration",
      "LLM selection and prompt engineering",
      "Data pipeline and knowledge base setup",
      "Team training and AI adoption support",
      "Ongoing monitoring and optimization",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
