import { ServiceItem, CaseStudy, ProcessStep } from '../types';

export const COMPANY_NAME = "Codecraft";
export const TAGLINE = "The Art of Intelligent Software";
export const CONTACT_EMAIL = "codecraftventures@gmail.com";
export const CONTACT_PHONE = "8301053212";
export const FORMATTED_PHONE = "+91 83010 53212";

export const SERVICES: ServiceItem[] = [
  // --- AGENTIC SERVICES & AUTOMATIONS (50%) ---
  {
    id: "autonomous-agents",
    category: "agentic",
    title: "Autonomous Agent Swarms",
    subtitle: "Self-coordinating Multi-Agent Systems",
    description: "Architect specialized agent networks that collaborate, reason across complex business logic, call enterprise tools, and execute multi-step objectives with deterministic accuracy.",
    iconName: "Bot",
    capabilities: [
      "Hierarchical agent orchestration & routing",
      "Dynamic tool-calling & external API action loop",
      "Long-term vector memory & cognitive state persistence",
      "Human-in-the-loop governance & audit trails"
    ],
    metrics: "10x Operational Velocity",
    accentColor: "from-cyan-500/20 to-indigo-500/10"
  },
  {
    id: "cognitive-automation",
    category: "agentic",
    title: "Cognitive Process Automation",
    subtitle: "End-to-End Enterprise Workflow Autonomy",
    description: "Transform manual operational bottlenecks into autonomous pipelines. Ingest unstructured documents, perform contextual validation, and trigger system-wide state changes.",
    iconName: "Cpu",
    capabilities: [
      "Multimodal document & invoice intelligence",
      "Automated cross-system reconciliation",
      "Adaptive RPA with self-healing selectors",
      "Real-time anomaly & compliance detection"
    ],
    metrics: "94% Human Labor Reduction",
    accentColor: "from-emerald-500/20 to-cyan-500/10"
  },
  {
    id: "enterprise-rag-tooling",
    category: "agentic",
    title: "Domain LLMs & Custom Tooling",
    subtitle: "Secure Enterprise Intelligence Layer",
    description: "Deploy private, fine-tuned agentic models tailored to your internal knowledge graph. Zero data leaks, enterprise RBAC integration, and verifiable citation chains.",
    iconName: "Sparkles",
    capabilities: [
      "Hybrid dense/sparse hybrid vector search (RAG)",
      "Role-based knowledge access isolation",
      "Sub-second semantic search & graph indexing",
      "Custom function execution sandboxes"
    ],
    metrics: "Sub-150ms Semantic Lookups",
    accentColor: "from-violet-500/20 to-cyan-500/10"
  },
  {
    id: "autonomous-devops-qa",
    category: "agentic",
    title: "Self-Healing DevOps & QA",
    subtitle: "Continuous Autonomous Observability",
    description: "Agentic sentinels that execute continuous synthetic user journeys, detect regressions before users do, and automatically generate pull requests with corrective patches.",
    iconName: "Terminal",
    capabilities: [
      "Autonomous synthetic user journey simulation",
      "Automated root-cause telemetry diagnosis",
      "Self-generating test suite adaptation",
      "Intelligent rollback & canary governance"
    ],
    metrics: "99.99% Autonomous Defense",
    accentColor: "from-blue-500/20 to-emerald-500/10"
  },

  // --- FULL-STACK WEB & SOFTWARE ENGINEERING (50%) ---
  {
    id: "bespoke-web-platforms",
    category: "engineering",
    title: "Next-Gen Web Applications",
    subtitle: "High-Performance Modern Frontend Architecture",
    description: "Handcrafted, ultra-responsive digital applications built on modern React, Next.js, and TypeScript. Designed for instantaneous load speeds, fluid interactions, and conversion.",
    iconName: "Globe",
    capabilities: [
      "Server-side rendering & edge computing optimization",
      "Fluid 60fps micro-interactions & WebGL/3D integration",
      "Comprehensive accessibility (WCAG 2.1 AA compliant)",
      "Scalable atomic design systems & UI components"
    ],
    metrics: "Sub-500ms First Contentful Paint",
    accentColor: "from-indigo-500/20 to-blue-500/10"
  },
  {
    id: "distributed-backends",
    category: "engineering",
    title: "Distributed Cloud Backends",
    subtitle: "Low-Latency & Resilient System Architecture",
    description: "Fault-tolerant, distributed cloud systems engineered to process massive concurrent throughput. Powered by modern Go, Node.js, Rust, and event-driven architectures.",
    iconName: "Server",
    capabilities: [
      "High-throughput WebSocket & gRPC streaming",
      "Event-driven architecture with Kafka & Redis",
      "Relational & NoSQL database sharding & caching",
      "Zero-downtime rolling deployment strategies"
    ],
    metrics: "50,000+ Concurrent Req/Sec",
    accentColor: "from-cyan-500/20 to-teal-500/10"
  },
  {
    id: "cloud-infrastructure",
    category: "engineering",
    title: "Cloud Native & DevOps",
    subtitle: "Infrastructure as Code & Zero-Trust Security",
    description: "Enterprise cloud orchestration built on AWS, GCP, and Kubernetes. Immutable infrastructure, automated scaling, and military-grade encryption in transit and at rest.",
    iconName: "ShieldCheck",
    capabilities: [
      "Kubernetes & containerized microservices",
      "Terraform & Pulumi declarative IaaC",
      "SOC-2 compliant secrets & identity federation",
      "Global CDN edge distribution & WAF protection"
    ],
    metrics: "99.99% Availability SLA",
    accentColor: "from-emerald-500/20 to-indigo-500/10"
  },
  {
    id: "bespoke-software-apis",
    category: "engineering",
    title: "Custom APIs & Integrations",
    subtitle: "Seamless Data Pipelines & Partner Gateways",
    description: "Secure, developer-delighting public and internal APIs built with OpenAPI 3.0 standards, rate-limiting algorithms, robust idempotency keys, and real-time webhooks.",
    iconName: "Layers",
    capabilities: [
      "RESTful & GraphQL federation gateways",
      "Deterministic idempotency & distributed locks",
      "Automated SDK generation (TypeScript, Python, Go)",
      "Granular developer telemetry & analytics"
    ],
    metrics: "Zero-Downtime Migration",
    accentColor: "from-purple-500/20 to-cyan-500/10"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "plusone",
    title: "PlusOne — Social Discovery & Live Event Companion",
    subtitle: "Find your plus one for the night",
    category: "In-House Product",
    pillar: "Hybrid Architecture",
    isFlagship: true,
    url: "http://www.plusone.today",
    badge: "Flagship Product",
    summary: "Built and operated by Codecraft, PlusOne is a next-generation real-time social discovery platform that connects people for events, nightlife, and spontaneous plans. Engineered with low-latency intent-matching, verified member onboarding, and reactive real-time messaging.",
    techStack: ["Next.js", "React", "TypeScript", "Real-Time WebSockets", "Tailwind CSS", "Location Intelligence", "Edge API"],
    metrics: [
      { label: "Intent Matching Latency", value: "< 90ms" },
      { label: "Uptime Reliability", value: "99.98%" },
      { label: "Member Onboarding Flow", value: "Under 60s" }
    ],
    accentColor: "from-cyan-500 via-indigo-500 to-emerald-400"
  },
  {
    id: "aetherflow",
    title: "AetherFlow — Autonomous Supply Chain Agent Hub",
    subtitle: "Enterprise Document Intelligence & Cross-System Actions",
    category: "Enterprise Client",
    pillar: "Agentic System",
    summary: "A multi-agent autonomous system that parses thousands of customs declarations, invoices, and manifests every hour. Agents independently flag discrepancies, reconcile ERP databases, and draft vendor notices with zero human latency.",
    techStack: ["Autonomous Agents", "Python", "FastAPI", "Vector Store", "PostgreSQL", "Kafka", "Docker"],
    metrics: [
      { label: "Processing Speedup", value: "14x" },
      { label: "Manual Review Needed", value: "< 4.2%" },
      { label: "Audit Accuracy", value: "99.94%" }
    ],
    accentColor: "from-emerald-500 via-teal-400 to-cyan-500"
  },
  {
    id: "synthetix",
    title: "Synthetix — High-Frequency Financial Intelligence Platform",
    subtitle: "Real-Time Algorithmic Execution Dashboard",
    category: "Fintech System",
    pillar: "Web Platform",
    summary: "A bespoke institutional trading and portfolio surveillance dashboard. Features 60fps canvas charts, sub-millisecond market feed ingestion, and role-based portfolio risk alerts.",
    techStack: ["React", "TypeScript", "Go Backplane", "WebSockets", "TimescaleDB", "Tailwind"],
    metrics: [
      { label: "Live Tick Throughput", value: "85K/sec" },
      { label: "UI Frame Rate", value: "Solid 60fps" },
      { label: "Data Pipeline Delay", value: "< 12ms" }
    ],
    accentColor: "from-indigo-500 via-purple-500 to-cyan-400"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    phase: "Architecture & Blueprint",
    title: "Deep Cognitive & Technical Mapping",
    description: "We deconstruct your operational bottlenecks and system architecture. We define data boundaries, interface contracts, and determine where deterministic software vs autonomous agents deliver maximum impact.",
    deliverables: ["System Architecture RFC", "Agent Capability Spec", "Security & Data Governance Blueprint"],
    icon: "Compass"
  },
  {
    step: "02",
    phase: "Autonomous Prototyping",
    title: "Sandboxed Agents & UI Prototypes",
    description: "Rapid iteration in isolated sandbox environments. We validate multi-agent decision chains against synthetic scenarios while crafting high-fidelity reactive UI components.",
    deliverables: ["Interactive Prototype", "Agent Verification Logs", "Latency & Cost Projections"],
    icon: "Code2"
  },
  {
    step: "03",
    phase: "Precision Engineering",
    title: "Production-Grade Full-Stack Construction",
    description: "We build with strict software craftsmanship: type-safe schemas, automated regression tests, fault-tolerant retries, rate-limiting safeguards, and polished design systems.",
    deliverables: ["Production Web & API Codebase", "Zero-Trust Infrastructure as Code", "Full CI/CD Pipeline"],
    icon: "Cpu"
  },
  {
    step: "04",
    phase: "Autonomous Evolution",
    title: "Deployment, Telemetry & Self-Optimization",
    description: "Seamless cutover with zero downtime. Automated telemetry agents monitor system health, latency, and model drift, continuously optimizing queries and prompt efficacy.",
    deliverables: ["Live Production Cutover", "Real-Time Telemetry Dashboard", "Ongoing Autonomous Health Audits"],
    icon: "Activity"
  }
];
