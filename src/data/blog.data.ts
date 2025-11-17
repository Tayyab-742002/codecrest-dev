export interface BlogSection {
  heading: string;
  summary: string;
  image?: string;
  points: string[];
  insight?: string;
}

export interface BlogResource {
  label: string;
  href: string;
  type: "report" | "podcast" | "webinar" | "case-study";
}

export interface BlogStat {
  metric: string;
  value: string;
  context: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTimeMinutes: number;
  heroImage: string;
  coverImage: string;
  tags: string[];
  sections: BlogSection[];
  stats: BlogStat[];
  keyTakeaways: string[];
  relatedResources: BlogResource[];
  metaTitle: string;
  metaDescription: string;
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "ai-operating-model-2025",
    slug: "ai-operating-model-2025",
    title: "AI Frontiers 2025: Building a Trustworthy GenAI Operating Model",
    subtitle:
      "How leading enterprises move from pilot purgatory to production-grade value in twelve weeks.",
    category: "Artificial Intelligence",
    excerpt:
      "GenAI hype has cooled, but the companies that learned fastest are now operationalizing AI with governance, data rigor, and measurable KPIs. This playbook distills how top performers structure teams, train foundation models responsibly, and track ROI.",
    publishedAt: "2025-02-10T08:00:00.000Z",
    readTimeMinutes: 14,
    heroImage:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=2000&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    tags: [
      "GenAI",
      "MLOps",
      "AI Governance",
      "Prompt Engineering",
      "Responsible AI",
    ],
    sections: [
      {
        heading: "The 2025 Reality Check",
        summary:
          "Budget holders now demand accountability. Gartner reports that only 12% of GenAI pilots reached sustained production in 2024. We break down the three blockers: hallucination risk, brittle data contracts, and scattered ownership.",
        image:
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80",
        points: [
          "CEO expectations shifted from experimentation to EBITDA contribution.",
          "Security teams now require lineage tracking for every generated artifact.",
          "Finance partners want AI initiatives mapped to cost-center P&L within 90 days.",
        ],
        insight:
          "The GenAI narrative is moving from creative demos to system reliability. Without a clear operating model, programs stall under compliance and budget pressure.",
      },
      {
        heading: "Designing the AI Operating Spine",
        summary:
          "High-performing teams align people, process, and platforms before writing a single prompt. The operating spine defines how models are sourced, evaluated, deployed, and monitored across business lines.",
        image:
          "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Establish a dual-track architecture: rapid experimentation pods plus hardened production services.",
          "Codify a Model Review Board charter with shared KPIs for Legal, Risk, and Engineering.",
          "Instrument data contracts with drift alerts feeding directly into incident management tooling.",
        ],
        insight:
          "When teams share a canonical playbook, onboarding accelerates and compliance conversations shift from redlines to fast approvals.",
      },
      {
        heading: "Data Readiness and Guardrails",
        summary:
          "Robust GenAI starts with curated knowledge bases. Leading enterprises invest more in retrieval pipelines and policy automation than in bespoke LLM training.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Pair semantic search with structured policy rules to prevent leaky responses.",
          "Adopt synthetic data generation for edge cases but require watermarking for traceability.",
          "Document provenance and consent metadata at the chunk level to satisfy audits.",
        ],
        insight:
          "Guardrails embedded at the data layer reduce downstream prompt patching and make regulatory reviews dramatically faster.",
      },
      {
        heading: "Measuring What Matters",
        summary:
          "Vanity metrics such as # of prompts or chat sessions mislead executives. Instead, teams track three lenses: reliability, productivity lift, and risk posture.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Reliability: response accuracy, latency budgets, and intervention rate.",
          "Productivity: human-in-the-loop savings measured in hours or throughput.",
          "Risk: policy violations per 1K generations, plus automated redaction success rate.",
        ],
        insight:
          "When KPIs tie directly to business outcomes, CFO sponsorship increases and reinvestment conversations begin earlier.",
      },
    ],
    stats: [
      {
        metric: "Production Success Rate",
        value: "68%",
        context:
          "Share of Codecrest clients moving from pilot to production in ≤16 weeks.",
      },
      {
        metric: "Guardrail Coverage",
        value: "92%",
        context: "Average automation of policy checks across knowledge bases.",
      },
      {
        metric: "Productivity Lift",
        value: "2.8x",
        context:
          "Median gain in analyst throughput after deploying retrieval-augmented workflows.",
      },
    ],
    keyTakeaways: [
      "Codify an AI operating spine that blends experimentation pods with production-grade services.",
      "Invest in retrieval pipelines, provenance metadata, and automated guardrails before scaling prompts.",
      "Tie GenAI programs to CFO-approved KPIs that track reliability, productivity, and risk posture.",
    ],
    relatedResources: [
      {
        label: "Responsible GenAI Governance Checklist",
        href: "/insights/responsible-genai-governance",
        type: "report",
      },
      {
        label: "Podcast: Shipping AI Agents with Guardrails",
        href: "/podcast/ai-agents-guardrails",
        type: "podcast",
      },
      {
        label: "Webinar: Data Contracts for Retrieval-Augmented Generation",
        href: "/webinars/rag-data-contracts",
        type: "webinar",
      },
    ],
    metaTitle: "AI Frontiers 2025: GenAI Operating Model Playbook | Codecrest",
    metaDescription:
      "Learn how leading enterprises operationalize GenAI with governance, data rigor, and measurable KPIs. A detailed 2025 playbook from Codecrest.",
  },
  {
    id: "designing-rag-factories",
    slug: "designing-rag-factories",
    title: "Designing Retrieval Factories for Enterprise Knowledge",
    subtitle:
      "A blueprint for building resilient RAG pipelines that satisfy security, scale, and search relevance across thousands of data sources.",
    category: "Knowledge Systems",
    excerpt:
      "Most RAG initiatives fail at ingestion. We unpack the system design required to turn messy knowledge bases into trusted, query-ready corpora—covering chunking, governance, ops, and monitoring.",
    publishedAt: "2025-01-22T07:30:00.000Z",
    readTimeMinutes: 12,
    heroImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2000&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=2000&q=80",
    tags: ["RAG", "Vector Search", "Data Contracts", "Observability"],
    sections: [
      {
        heading: "The Ingestion Contract",
        summary:
          "Before prompts, get rigorous about feeds. We share the checklist we run on every repository before it touches an embedding model.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Automated scanners for PII, secrets, and policy tags.",
          "Chunking heuristics tuned by document intent, not token count.",
          "Versioned manifests so rollback is a CLI command, not a prayer.",
        ],
      },
      {
        heading: "Feature Stores for Text",
        summary:
          "Treat embeddings like numeric features. That means lineage, cataloging, and drift alerts baked into the pipeline.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Canonical schemas describing source, chunk policy, embedding model, and hash.",
          "Segment-level quality scores stored alongside vectors for retrieval weighting.",
          "Automated A/B harness to compare new embedding models before rollout.",
        ],
      },
      {
        heading: "Observability, Not Guesswork",
        summary:
          "Once live, everything must be measurable: recall, accuracy, latency, rejection reasons. We share our ‘RAG SLO stack’.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Human eval tooling with structured scoring rubrics per use case.",
          "Cold/warm cache split metrics to surface embedding store hotspots.",
          "Feedback plumbing that syncs product telemetry back to data stewards.",
        ],
      },
    ],
    stats: [
      {
        metric: "Sources Unified",
        value: "1,800+",
        context: "Average repositories onboarded per client knowledge mesh.",
      },
      {
        metric: "Answer Accuracy Boost",
        value: "34%",
        context: "Median lift after adopting contract-based ingestion.",
      },
      {
        metric: "Rollback Time",
        value: "11 min",
        context: "Mean time to revert a faulty ingestion batch.",
      },
    ],
    keyTakeaways: [
      "Codify ingestion contracts with automated policy scanners before chunking anything.",
      "Run embeddings like a feature store: versioned, cataloged, and observable.",
      "Instrument RAG systems with explicit SLOs so you can prove when they drift.",
    ],
    relatedResources: [
      {
        label: "Checklist: Data Contracts for RAG",
        href: "/insights/rag-data-contracts",
        type: "report",
      },
      {
        label: "Webinar: Embedding Stores in Production",
        href: "/webinars/embedding-stores",
        type: "webinar",
      },
    ],
    metaTitle:
      "Designing Retrieval Factories for Enterprise Knowledge | Codecrest",
    metaDescription:
      "Learn how Codecrest architects repeatable, observable RAG pipelines for regulated enterprises. From ingestion contracts to embedding observability.",
  },
  {
    id: "human-centered-automation",
    slug: "human-centered-automation",
    title: "Human-Centered Automation: The 6-Week Playbook",
    subtitle:
      "Automation doesn’t stick unless the humans who inherit it feel trusted. We show how to structure six weeks that blend ops, change, and design.",
    category: "Operations",
    excerpt:
      "Automation programs fail when they ship bots before belief. This field guide breaks down the rituals, artifacts, and metrics we’ve seen move frontline teams from suspicion to advocacy.",
    publishedAt: "2024-12-05T09:00:00.000Z",
    readTimeMinutes: 10,
    heroImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=2000&q=80",
    tags: ["Automation", "Change Management", "Service Design", "Playbooks"],
    sections: [
      {
        heading: "Week 1: Listen Before Scripts",
        summary:
          "Embed with teams, map friction, and collect context before architecting flows.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Shadow days + service-blueprint exercises with frontline staff.",
          "Success statements co-written with the humans who will own the bot.",
          "Risk ledger capturing cultural, policy, and tech constraints.",
        ],
      },
      {
        heading: "Week 3: Co-Design Builds Trust",
        summary:
          "Prototype automations with the same people who will escalate them.",
        image:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Clickable journey mock-ups to align expectations before engineering.",
          "Red-team rehearsals on failure modes, not just happy paths.",
          "Training plans that make human override a celebrated skill.",
        ],
      },
      {
        heading: "Week 6: Publish the Social Contract",
        summary:
          "Ship with narrative: what changed, why, and how people report issues.",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Visible success dashboards showing human + automated throughput.",
          "Office hours for every stakeholder group during hypercare.",
          "Playbooks for continuous improvement loops owned by ops, not IT.",
        ],
      },
    ],
    stats: [
      {
        metric: "Adoption Confidence",
        value: "4.6/5",
        context: "Average readiness score from frontline surveys post-launch.",
      },
      {
        metric: "Manual Steps Eliminated",
        value: "42%",
        context: "Median reduction across finance + CX teams we piloted.",
      },
      {
        metric: "Escalation Volume",
        value: "-58%",
        context:
          "Drop in automation-related incidents after co-design rituals.",
      },
    ],
    keyTakeaways: [
      "Automation credibility is earned through immersion, not decks.",
      "Co-design prototypes expose policy gaps before code is written.",
      "Ship with human-facing narratives and metrics so teams know how to trust the system.",
    ],
    relatedResources: [
      {
        label: "Field Guide: Designing Automation Rituals",
        href: "/guides/automation-rituals",
        type: "report",
      },
      {
        label: "Podcast: Ops Leaders on Co-Design",
        href: "/podcast/ops-codesign",
        type: "podcast",
      },
    ],
    metaTitle: "Human-Centered Automation Playbook | Codecrest",
    metaDescription:
      "Use Codecrest’s six-week playbook to launch automation programs people trust. Includes rituals, artifacts, and metrics that stick.",
  },
  {
    id: "climate-saas-observability",
    slug: "climate-saas-observability",
    title: "Observability Patterns for Climate SaaS Platforms",
    subtitle:
      "Tracking carbon impact is only as good as your telemetry. We break down the observability stack powering sustainability dashboards at scale.",
    category: "Climate Tech",
    excerpt:
      "Climate SaaS vendors juggle satellite feeds, IoT sensors, and third-party registries. We share the instrumentation patterns required to make auditors, customers, and engineers trust the same dashboards.",
    publishedAt: "2024-11-14T10:00:00.000Z",
    readTimeMinutes: 11,
    heroImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80",
    tags: ["Observability", "Climate", "Data Pipelines", "Dashboards"],
    sections: [
      {
        heading: "Why Emissions Data Is Spiky",
        summary:
          "Satellite cycles, offset registries, and manual uploads all create observability gaps unless you treat them as explicit signals.",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Partition telemetry by source trust tier for fast triage.",
          "Alert on divergence between internal models and external registries.",
          "Use synthetic transactions to ensure offsets display even when APIs lag.",
        ],
      },
      {
        heading: "Telemetry Stack Blueprint",
        summary:
          "How we architected a multi-layer stack mixing stream processing, OLAP cubes, and customer-facing tiles.",
        image:
          "https://images.unsplash.com/photo-1503796964332-3e0a1f9929d6?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Kafka for raw feeds, Flink for enrichment, DuckDB for ad-hoc validation.",
          "Domain-oriented metrics catalogs with auditor notes inline.",
          "API-level SLOs tied to dashboard tile refresh commitments.",
        ],
      },
      {
        heading: "Credibility Features Customers Notice",
        summary:
          "From audit trails to explainability overlays, certain UI patterns are table stakes for sustainability platforms.",
        image:
          "https://images.unsplash.com/photo-1445620466293-d6316372ab59?auto=format&fit=crop&w=1600&q=80",
        points: [
          "Per-data-point provenance with registrar IDs and timestamped proofs.",
          "Toggleable confidence bands around emissions estimates.",
          "Customer-facing changelogs showing when methodologies update.",
        ],
      },
    ],
    stats: [
      {
        metric: "Data Freshness SLO",
        value: "< 8m",
        context:
          "Average tile refresh window we guarantee for Scope 1 metrics.",
      },
      {
        metric: "Audit Prep Time",
        value: "-63%",
        context: "Reduction in hours finance teams spend exporting evidence.",
      },
      {
        metric: "Customer Trust Score",
        value: "92%",
        context: "Net confidence rating after adding provenance overlays.",
      },
    ],
    keyTakeaways: [
      "Classify emissions telemetry by trust tier and alert on divergence fast.",
      "Blend streams + OLAP to satisfy product teams and auditors simultaneously.",
      "Expose provenance and methodology updates directly in customer UI to boost confidence.",
    ],
    relatedResources: [
      {
        label: "Case Study: Carbon Dashboards at Scale",
        href: "/case-studies/climate-observability",
        type: "case-study",
      },
      {
        label: "Guide: Building Trust in Sustainability APIs",
        href: "/guides/sustainability-apis",
        type: "report",
      },
    ],
    metaTitle: "Observability Patterns for Climate SaaS | Codecrest",
    metaDescription:
      "Explore Codecrest’s observability blueprint for climate and sustainability SaaS platforms—covering telemetry, dashboards, and provenance UX.",
  },
];

export const getAllBlogs = () => BLOGS_DATA;

export const getBlogBySlug = (slug: string) =>
  BLOGS_DATA.find((blog) => blog.slug === slug);

export const getFeaturedBlogs = (limit = 3) => BLOGS_DATA.slice(0, limit);
