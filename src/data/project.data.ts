export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectSolution {
  title: string;
  description: string;
  image?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  context: string;
}

export interface ProjectTechnology {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Cloud"
    | "AI/ML"
    | "Other";
  description?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  type: "hero" | "screenshot" | "diagram" | "mockup" | "gallery";
}

export interface ProjectTimeline {
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  status: "completed" | "in-progress" | "on-hold";
  completedAt?: string;
  startedAt: string;
  duration: string;

  // Hero Section
  heroImage: string;
  heroTitle: string;
  heroDescription: string;

  // Overview
  overview: string;
  overviewImage?: string;

  // Project Details
  objectives: string[];
  challenges: ProjectChallenge[];
  solutions: ProjectSolution[];

  // Visuals
  images: ProjectImage[];

  // Technical Details
  technologies: ProjectTechnology[];
  architecture?: string;

  // Results
  metrics: ProjectMetric[];
  keyResults: string[];

  // Timeline
  timeline: ProjectTimeline[];

  // Team
  teamSize?: number;
  roles?: string[];

  // Additional
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  // Metadata
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "enterprise-ai-platform",
    slug: "enterprise-ai-platform",
    title: "Enterprise AI Platform for Financial Services",
    subtitle:
      "Building a production-grade GenAI platform that processes 2M+ transactions daily with 99.9% accuracy",
    category: "Artificial Intelligence",
    industry: "Financial Services",
    status: "completed",
    completedAt: "2024-11-15T00:00:00.000Z",
    startedAt: "2024-03-01T00:00:00.000Z",
    duration: "8 months",

    // Hero Section
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    heroTitle: "Enterprise AI Platform",
    heroDescription:
      "A comprehensive GenAI platform that automates document processing, fraud detection, and customer service for one of the world's largest financial institutions.",

    // Overview
    overview:
      "We built a production-grade AI platform capable of processing millions of financial documents daily for a leading financial services institution. The platform integrates multiple GenAI models, real-time data pipelines, and enterprise-grade security to automate critical banking operations while maintaining regulatory compliance. The solution reduced manual processing time by 85% and improved accuracy rates from 92% to 99.9%.",
    overviewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",

    // Objectives
    objectives: [
      "Automate document processing for loan applications, KYC documents, and compliance reports",
      "Implement real-time fraud detection using advanced ML models",
      "Build a scalable AI infrastructure capable of handling 2M+ transactions daily",
      "Ensure 99.9% accuracy while maintaining regulatory compliance",
      "Reduce manual processing time by 80%+",
      "Create a unified platform for multiple AI use cases across the organization",
    ],

    // Challenges
    challenges: [
      {
        title: "Regulatory Compliance",
        description:
          "Financial services require strict adherence to regulations like GDPR, PCI-DSS, and banking regulations. Every AI decision needed to be explainable, auditable, and compliant with data privacy laws.",
      },
      {
        title: "Scale and Performance",
        description:
          "The platform needed to process 2 million+ documents daily with sub-second latency for real-time fraud detection. Traditional architectures couldn't handle this volume.",
      },
      {
        title: "Data Quality and Integration",
        description:
          "Integrating data from 15+ legacy systems with varying formats, quality, and update frequencies required sophisticated ETL pipelines and data validation.",
      },
      {
        title: "Model Accuracy and Reliability",
        description:
          "Financial decisions require extremely high accuracy. We needed to achieve 99.9% accuracy while handling edge cases and maintaining consistency across different document types.",
      },
    ],

    // Solutions
    solutions: [
      {
        title: "Multi-Model Architecture",
        description:
          "Implemented a hybrid architecture combining specialized models for different document types, with a unified orchestration layer that routes requests to the appropriate model based on document classification.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Real-Time Data Pipeline",
        description:
          "Built a Kafka-based streaming pipeline that processes documents in real-time, with automatic scaling to handle peak loads. The pipeline includes data validation, enrichment, and quality checks at each stage.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Explainable AI Framework",
        description:
          "Developed a comprehensive explainability framework that provides detailed reasoning for every AI decision, enabling auditors to understand and validate model outputs. This includes attention visualizations, feature importance scores, and decision trees.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Enterprise Security & Governance",
        description:
          "Implemented end-to-end encryption, role-based access control, comprehensive audit logging, and automated compliance checks. All data processing happens within the client's secure infrastructure with no external API calls.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      },
    ],

    // Images
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
        alt: "AI Platform Dashboard",
        caption:
          "Real-time monitoring dashboard showing transaction processing metrics",
        type: "screenshot",
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80",
        alt: "System Architecture",
        caption: "High-level system architecture diagram",
        type: "diagram",
      },
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
        alt: "Document Processing Interface",
        caption: "User interface for document review and validation",
        type: "screenshot",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
        alt: "Fraud Detection Analytics",
        caption: "Analytics dashboard for fraud detection patterns",
        type: "screenshot",
      },
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80",
        alt: "Model Training Pipeline",
        caption: "ML model training and deployment pipeline",
        type: "diagram",
      },
    ],

    // Technologies
    technologies: [
      {
        name: "Python",
        category: "Backend",
        description: "Core language for ML models and data processing",
      },
      {
        name: "TensorFlow",
        category: "AI/ML",
        description: "Deep learning framework for custom models",
      },
      {
        name: "OpenAI GPT-4",
        category: "AI/ML",
        description: "Foundation model for document understanding",
      },
      {
        name: "Apache Kafka",
        category: "Backend",
        description: "Real-time streaming data pipeline",
      },
      {
        name: "Kubernetes",
        category: "DevOps",
        description: "Container orchestration for scalable deployment",
      },
      {
        name: "PostgreSQL",
        category: "Database",
        description: "Primary transactional database",
      },
      {
        name: "Redis",
        category: "Database",
        description: "Caching and session management",
      },
      {
        name: "React",
        category: "Frontend",
        description: "User interface framework",
      },
      {
        name: "TypeScript",
        category: "Frontend",
        description: "Type-safe frontend development",
      },
      {
        name: "AWS",
        category: "Cloud",
        description: "Cloud infrastructure (EC2, S3, RDS, EKS)",
      },
      {
        name: "Docker",
        category: "DevOps",
        description: "Containerization for consistent deployments",
      },
      {
        name: "Terraform",
        category: "DevOps",
        description: "Infrastructure as code",
      },
    ],

    architecture:
      "The platform follows a microservices architecture with clear separation between data ingestion, processing, ML inference, and API layers. Services communicate via Kafka for async processing and REST APIs for synchronous requests. The ML models are deployed as containerized services that auto-scale based on load.",

    // Metrics
    metrics: [
      {
        label: "Processing Volume",
        value: "2M+",
        context: "Documents processed daily",
      },
      {
        label: "Accuracy Rate",
        value: "99.9%",
        context: "Document classification and extraction accuracy",
      },
      {
        label: "Processing Time Reduction",
        value: "85%",
        context: "Reduction in manual processing time",
      },
      {
        label: "Cost Savings",
        value: "$12M",
        context: "Annual operational cost savings",
      },
      {
        label: "Uptime",
        value: "99.95%",
        context: "Platform availability SLA",
      },
      {
        label: "Latency",
        value: "< 500ms",
        context: "Average response time for real-time processing",
      },
    ],

    // Key Results
    keyResults: [
      "Reduced document processing time from 3 hours to 15 minutes per document",
      "Achieved 99.9% accuracy rate, exceeding the 99% target",
      "Processed 2.3 million documents in the first month of production",
      "Eliminated 85% of manual review requirements",
      "Reduced operational costs by $12M annually",
      "Maintained 99.95% uptime with zero security incidents",
      "Enabled real-time fraud detection with 500ms average latency",
      "Successfully passed all regulatory audits on first attempt",
    ],

    // Timeline
    timeline: [
      {
        phase: "Discovery & Planning",
        duration: "4 weeks",
        description:
          "Requirements gathering, architecture design, and project planning",
        deliverables: [
          "Technical architecture document",
          "Project roadmap and timeline",
          "Risk assessment and mitigation plan",
          "Compliance requirements documentation",
        ],
      },
      {
        phase: "Foundation & Infrastructure",
        duration: "8 weeks",
        description:
          "Setting up cloud infrastructure, CI/CD pipelines, and development environments",
        deliverables: [
          "Kubernetes cluster setup",
          "CI/CD pipeline implementation",
          "Monitoring and logging infrastructure",
          "Security framework implementation",
        ],
      },
      {
        phase: "Data Pipeline Development",
        duration: "10 weeks",
        description:
          "Building ETL pipelines, data validation, and integration with legacy systems",
        deliverables: [
          "Kafka streaming pipeline",
          "Data validation framework",
          "Integration with 15+ legacy systems",
          "Data quality monitoring dashboard",
        ],
      },
      {
        phase: "ML Model Development",
        duration: "12 weeks",
        description:
          "Training, fine-tuning, and validating ML models for document processing and fraud detection",
        deliverables: [
          "Document classification models",
          "Fraud detection models",
          "Model evaluation reports",
          "Explainability framework",
        ],
      },
      {
        phase: "Platform Development",
        duration: "14 weeks",
        description: "Building APIs, user interfaces, and orchestration layer",
        deliverables: [
          "RESTful API layer",
          "Admin dashboard",
          "Document review interface",
          "Analytics and reporting tools",
        ],
      },
      {
        phase: "Testing & Validation",
        duration: "6 weeks",
        description:
          "Comprehensive testing, security audits, and compliance validation",
        deliverables: [
          "Test coverage reports",
          "Security audit results",
          "Compliance validation documentation",
          "Performance test results",
        ],
      },
      {
        phase: "Deployment & Launch",
        duration: "4 weeks",
        description:
          "Production deployment, monitoring setup, and team training",
        deliverables: [
          "Production deployment",
          "Monitoring dashboards",
          "Documentation and runbooks",
          "Team training completion",
        ],
      },
    ],

    // Team
    teamSize: 18,
    roles: [
      "2 Solution Architects",
      "4 ML Engineers",
      "3 Backend Engineers",
      "2 Frontend Engineers",
      "2 DevOps Engineers",
      "2 Data Engineers",
      "1 Security Specialist",
      "1 Project Manager",
      "1 QA Lead",
    ],

    // Testimonial
    testimonial: {
      quote:
        "Codecrest delivered a world-class AI platform that transformed our operations. The team's expertise in both AI and financial services regulations was evident throughout the project. We've seen incredible results—85% reduction in processing time and $12M in annual savings.",
      author: "Sarah Chen",
      role: "Chief Technology Officer",
    },

    // Tags
    tags: [
      "AI/ML",
      "GenAI",
      "Financial Services",
      "Document Processing",
      "Fraud Detection",
      "Enterprise",
      "Kubernetes",
      "Real-time Processing",
    ],

    // Metadata
    metaTitle: "Enterprise AI Platform for Financial Services | Codecrest",
    metaDescription:
      "Built a production-grade GenAI platform processing 2M+ transactions daily with 99.9% accuracy for a leading financial services institution. Reduced processing time by 85% and saved $12M annually.",
  },
];

export const getAllProjects = () => PROJECTS_DATA;

export const getProjectBySlug = (slug: string) =>
  PROJECTS_DATA.find((project) => project.slug === slug);

export const getFeaturedProjects = (limit = 3) => PROJECTS_DATA.slice(0, limit);

export const getProjectsByCategory = (category: string) =>
  PROJECTS_DATA.filter((project) => project.category === category);

export const getProjectsByIndustry = (industry: string) =>
  PROJECTS_DATA.filter((project) => project.industry === industry);
