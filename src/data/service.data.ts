export interface IndustryOffering {
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface UseCase {
  title: string;
  description: string;
  image: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  category: string;

  // Hero Section
  heroImage: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroDescription: string;

  // Overview
  overview: string;
  overviewImage?: string;

  // Industry Offerings (like the Generative AI example)
  industryOfferings?: IndustryOffering[];

  // Features/Benefits
  features: ServiceFeature[];

  // Use Cases
  useCases?: UseCase[];

  // Additional Content
  benefits?: string[];
  technologies?: string[];
  relatedServices?: string[];

  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  ctaVideo?: string;

  // Metadata
  metaTitle?: string;
  metaDescription?: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  // Digital Services
  {
    id: "digital-consulting-strategy",
    slug: "digital-consulting-strategy",
    category: "Digital",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Digital Consulting & Strategy",
    heroSubtitle: "Transform your business with strategic digital innovation",
    heroDescription:
      "We help organizations navigate digital transformation with comprehensive consulting and strategic planning that aligns technology with business objectives.",
    overview:
      "Our digital consulting services provide end-to-end strategic guidance to help businesses leverage technology for competitive advantage. We analyze your current state, identify opportunities, and create actionable roadmaps for digital transformation.",
    overviewImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    features: [
      {
        title: "Digital Strategy Development",
        description:
          "Comprehensive digital strategy aligned with your business goals and market opportunities.",
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Technology Assessment",
        description:
          "Evaluate your current technology stack and identify gaps and improvement areas.",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Transformation Roadmap",
        description:
          "Detailed, phased approach to digital transformation with clear milestones.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Change Management",
        description:
          "Support organizational change to ensure successful adoption of new technologies.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Digital Transformation Planning",
        description:
          "Develop comprehensive strategies for organizations looking to modernize their operations.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Technology Stack Optimization",
        description:
          "Evaluate and optimize existing technology infrastructure for better performance.",
        image:
          "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Innovation Consulting",
        description:
          "Identify and implement innovative solutions to drive business growth.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Increased competitive advantage",
      "Better decision-making through data insights",
    ],
    technologies: [
      "Cloud Platforms",
      "AI/ML",
      "Data Analytics",
      "Enterprise Software",
    ],
    relatedServices: ["digital-commerce", "business-applications"],
    ctaTitle: "Ready to transform your digital strategy?",
    ctaDescription:
      "Let's discuss how we can help you achieve your digital transformation goals.",
    ctaButtonText: "Get Started",
    ctaButtonHref: "/contact",
    metaTitle: "Digital Consulting & Strategy Services | Codecrest",
    metaDescription:
      "Expert digital consulting and strategy services to transform your business with innovative technology solutions.",
  },

  {
    id: "digital-commerce",
    slug: "digital-commerce",
    category: "Digital",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Digital Commerce",
    heroSubtitle: "Build powerful e-commerce experiences",
    heroDescription:
      "Create seamless, scalable digital commerce solutions that drive sales and enhance customer experiences across all channels.",
    overview:
      "Our digital commerce solutions enable businesses to sell products and services online with powerful, scalable platforms. We design and implement e-commerce systems that provide exceptional user experiences and drive revenue growth.",
    features: [
      {
        title: "E-commerce Platform Development",
        description:
          "Custom e-commerce solutions built on modern, scalable architectures.",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Multi-channel Commerce",
        description:
          "Unified commerce experiences across web, mobile, and social platforms.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Payment Integration",
        description: "Secure payment processing with multiple gateway options.",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking and management systems.",
        image:
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "B2C E-commerce",
        description:
          "Complete online retail solutions for consumer-facing businesses.",
        image:
          "https://images.unsplash.com/photo-1515165562835-c4c1bfa1f1c9?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "B2B Commerce",
        description:
          "Enterprise-grade commerce platforms for business-to-business transactions.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Marketplace Development",
        description:
          "Multi-vendor marketplace platforms connecting buyers and sellers.",
        image:
          "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Increased online sales",
      "Improved customer experience",
      "24/7 availability",
      "Global reach and scalability",
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"],
    relatedServices: ["digital-consulting-strategy", "business-applications"],
    ctaTitle: "Launch your digital commerce platform",
    ctaDescription:
      "Transform your business with a powerful e-commerce solution.",
    ctaButtonText: "Start Your Project",
    ctaButtonHref: "/contact",
  },

  {
    id: "business-applications",
    slug: "business-applications",
    category: "Digital",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Business Applications",
    heroSubtitle: "Custom applications that power your business",
    heroDescription:
      "Develop custom business applications tailored to your unique processes and requirements, improving efficiency and productivity.",
    overview:
      "We build custom business applications that streamline operations, automate processes, and provide real-time insights. Our solutions integrate seamlessly with your existing systems and scale with your business.",
    features: [
      {
        title: "Custom Application Development",
        description:
          "Tailored applications designed for your specific business needs.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Process Automation",
        description:
          "Automate repetitive tasks and workflows to increase efficiency.",
        image:
          "https://images.unsplash.com/photo-1503389152951-9f343605f61d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "System Integration",
        description:
          "Connect disparate systems for unified data and workflows.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Mobile Applications",
        description:
          "Native and cross-platform mobile apps for business operations.",
        image:
          "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Enterprise Resource Planning",
        description:
          "Custom ERP solutions to manage business resources and operations.",
        image:
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Customer Relationship Management",
        description:
          "Tailored CRM systems to manage customer interactions and data.",
        image:
          "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate business processes to reduce manual work and errors.",
        image:
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Improved operational efficiency",
      "Reduced manual errors",
      "Better data visibility",
      "Enhanced collaboration",
    ],
    technologies: [".NET", "Java", "Python", "React", "Node.js"],
    relatedServices: [
      "digital-consulting-strategy",
      "cloud-application-development",
    ],
    ctaTitle: "Build your custom business application",
    ctaDescription:
      "Let's create a solution that perfectly fits your business needs.",
    ctaButtonText: "Get Started",
    ctaButtonHref: "/contact",
  },

  // Data & Analytics Services
  {
    id: "data-modernization",
    slug: "data-modernization",
    category: "Data & Analytics",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Data Modernization",
    heroSubtitle: "Transform your data infrastructure",
    heroDescription:
      "Modernize your data architecture to unlock insights, improve performance, and enable data-driven decision-making across your organization.",
    overview:
      "Data modernization involves upgrading legacy data systems to modern, cloud-based architectures. We help organizations migrate, transform, and optimize their data infrastructure for better performance, scalability, and accessibility.",
    features: [
      {
        title: "Legacy System Migration",
        description:
          "Safely migrate data from legacy systems to modern platforms.",
        image:
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Cloud Data Architecture",
        description:
          "Design and implement scalable cloud-based data architectures.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Data Quality Improvement",
        description:
          "Clean, validate, and enrich data for better accuracy and reliability.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Real-time Data Processing",
        description:
          "Implement streaming data pipelines for real-time insights.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Cloud Migration",
        description:
          "Move on-premises data systems to cloud platforms for scalability.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Data Warehouse Modernization",
        description:
          "Upgrade traditional data warehouses to modern data lake architectures.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "API-First Data Access",
        description: "Enable programmatic access to data through modern APIs.",
        image:
          "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Improved data accessibility",
      "Enhanced scalability",
      "Reduced infrastructure costs",
      "Faster time to insights",
    ],
    technologies: ["AWS", "Azure", "GCP", "Snowflake", "Databricks"],
    relatedServices: ["advanced-analytics", "data-management"],
    ctaTitle: "Modernize your data infrastructure",
    ctaDescription: "Transform your data systems for the modern era.",
    ctaButtonText: "Learn More",
    ctaButtonHref: "/contact",
  },

  {
    id: "advanced-analytics",
    slug: "advanced-analytics",
    category: "Data & Analytics",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Advanced Analytics",
    heroSubtitle: "Turn data into actionable insights",
    heroDescription:
      "Leverage advanced analytics and machine learning to uncover patterns, predict trends, and make data-driven decisions that drive business growth.",
    overview:
      "Our advanced analytics services help organizations extract meaningful insights from complex data. We use statistical analysis, machine learning, and predictive modeling to solve business challenges and identify opportunities.",
    features: [
      {
        title: "Predictive Analytics",
        description:
          "Forecast future trends and behaviors using machine learning models.",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Statistical Analysis",
        description:
          "Deep statistical analysis to understand patterns and relationships.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Data Visualization",
        description:
          "Interactive dashboards and visualizations for data exploration.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Machine Learning Models",
        description:
          "Custom ML models tailored to your specific business needs.",
        image:
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Customer Behavior Analysis",
        description:
          "Understand customer patterns to improve engagement and retention.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Demand Forecasting",
        description:
          "Predict future demand to optimize inventory and supply chains.",
        image:
          "https://images.unsplash.com/photo-1517142089942-ba376ce32a0e?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Risk Assessment",
        description: "Identify and mitigate risks through predictive modeling.",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Data-driven decision making",
      "Improved forecasting accuracy",
      "Better customer understanding",
      "Competitive advantage",
    ],
    technologies: [
      "Python",
      "R",
      "TensorFlow",
      "PyTorch",
      "Tableau",
      "Power BI",
    ],
    relatedServices: ["data-modernization", "generative-ai"],
    ctaTitle: "Unlock the power of your data",
    ctaDescription: "Discover insights that drive business success.",
    ctaButtonText: "Get Started",
    ctaButtonHref: "/contact",
  },

  {
    id: "connected-intelligence",
    slug: "connected-intelligence",
    category: "Data & Analytics",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Connected Intelligence",
    heroSubtitle: "Connect and unify your data ecosystem",
    heroDescription:
      "Create a unified intelligence platform that connects data sources, systems, and insights across your entire organization for comprehensive visibility.",
    overview:
      "Connected Intelligence integrates disparate data sources and systems to create a unified view of your business. We help organizations break down data silos and create connected ecosystems that enable real-time insights and decision-making.",
    features: [
      {
        title: "Data Integration",
        description:
          "Connect and integrate data from multiple sources and systems.",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Unified Data Platform",
        description:
          "Single platform to access and analyze all your business data.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Real-time Dashboards",
        description:
          "Live dashboards that update in real-time across all data sources.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Cross-system Analytics",
        description:
          "Analyze data across systems to uncover cross-functional insights.",
        image:
          "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Enterprise Data Integration",
        description: "Unify data from multiple business units and systems.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Real-time Business Intelligence",
        description: "Access real-time insights across all business functions.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "360-Degree Customer View",
        description: "Comprehensive view of customers across all touchpoints.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Unified data view",
      "Real-time insights",
      "Better collaboration",
      "Reduced data silos",
    ],
    technologies: [
      "Apache Kafka",
      "ETL Tools",
      "Data Lakes",
      "API Integration",
    ],
    relatedServices: ["data-modernization", "advanced-analytics"],
    ctaTitle: "Connect your data ecosystem",
    ctaDescription: "Unify your data for comprehensive business intelligence.",
    ctaButtonText: "Learn More",
    ctaButtonHref: "/contact",
  },

  {
    id: "data-management",
    slug: "data-management",
    category: "Data & Analytics",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Data Management",
    heroSubtitle: "Govern, protect, and optimize your data",
    heroDescription:
      "Comprehensive data management services to ensure data quality, security, compliance, and optimal performance across your organization.",
    overview:
      "Effective data management is critical for business success. We provide end-to-end data management services including governance, quality assurance, security, and lifecycle management to ensure your data is reliable, secure, and accessible.",
    features: [
      {
        title: "Data Governance",
        description:
          "Establish policies and processes for data management and compliance.",
        image:
          "https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Data Quality Assurance",
        description: "Ensure data accuracy, completeness, and consistency.",
        image:
          "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Data Security",
        description:
          "Protect sensitive data with robust security measures and access controls.",
        image:
          "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Data Lifecycle Management",
        description:
          "Manage data from creation to archival with automated policies.",
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Compliance Management",
        description:
          "Ensure data compliance with regulations like GDPR, HIPAA, and CCPA.",
        image:
          "https://images.unsplash.com/photo-1503389152951-9f343605f61d?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Data Quality Improvement",
        description:
          "Improve data quality across systems for better decision-making.",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Master Data Management",
        description:
          "Create single source of truth for critical business data.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Improved data quality",
      "Regulatory compliance",
      "Enhanced security",
      "Better data accessibility",
    ],
    technologies: [
      "Collibra",
      "Informatica",
      "Talend",
      "Data Governance Tools",
    ],
    relatedServices: ["data-modernization", "connected-intelligence"],
    ctaTitle: "Optimize your data management",
    ctaDescription: "Ensure your data is secure, compliant, and high-quality.",
    ctaButtonText: "Get Started",
    ctaButtonHref: "/contact",
  },

  {
    id: "generative-ai",
    slug: "generative-ai",
    category: "Data & Analytics",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Generative AI",
    heroSubtitle:
      "Revolutionizing industries, uplifting businesses with generative AI",
    heroDescription:
      "Harness the power of generative AI to transform your business operations, enhance customer experiences, and drive innovation across all industries.",
    overview:
      "Our generative AI services harness advanced machine learning technologies to provide customized solutions through user-friendly interfaces. We support clients in adoption, simplification, solution design, implementation, and seamless integration of generative AI capabilities.",
    overviewImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    features: [
      {
        title: "Custom AI Solutions",
        description:
          "Tailored generative AI models designed for your specific business needs.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Natural Language Processing",
        description:
          "Advanced NLP capabilities for content generation, translation, and analysis.",
        image:
          "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Content Generation",
        description:
          "Automate content creation for marketing, documentation, and communications.",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Intelligent Automation",
        description:
          "Automate complex tasks and workflows with AI-powered solutions.",
        image:
          "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Customer Service Automation",
        description:
          "AI-powered chatbots and virtual assistants for 24/7 customer support.",
        image:
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Content Creation",
        description:
          "Generate marketing content, documentation, and communications automatically.",
        image:
          "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Code Generation",
        description:
          "Assist developers with code generation, migration, and test case creation.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Improved efficiency and productivity",
      "Cost savings through automation",
      "Enhanced customer satisfaction",
      "Faster innovation and decision-making",
    ],
    technologies: [
      "OpenAI",
      "Anthropic",
      "Google AI",
      "Azure OpenAI",
      "Custom Models",
    ],
    relatedServices: ["advanced-analytics", "data-modernization"],
    ctaTitle: "Transform your business with Generative AI",
    ctaDescription:
      "Discover how generative AI can revolutionize your operations and drive innovation.",
    ctaButtonText: "Get In Touch",
    ctaButtonHref: "/contact",
    metaTitle: "Generative AI Services | Codecrest",
    metaDescription:
      "Revolutionize your business with cutting-edge generative AI solutions across industries.",
  },

  // Cloud Services
  {
    id: "cloud-operations-migration",
    slug: "cloud-operations-migration",
    category: "Cloud",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Cloud Operations & Migration",
    heroSubtitle: "Seamless cloud transformation",
    heroDescription:
      "Expert cloud migration and operations services to help you move to the cloud efficiently and manage your cloud infrastructure effectively.",
    overview:
      "We provide comprehensive cloud migration and operations services to help organizations transition to the cloud smoothly. Our team handles everything from planning and migration to ongoing operations and optimization.",
    features: [
      {
        title: "Cloud Migration Planning",
        description:
          "Strategic planning for smooth and efficient cloud migration.",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Infrastructure Migration",
        description:
          "Migrate applications, data, and infrastructure to cloud platforms.",
        image:
          "https://images.unsplash.com/photo-1478479474071-8a3014d422c8?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Cloud Operations",
        description:
          "24/7 monitoring, management, and optimization of cloud resources.",
        image:
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Cost Optimization",
        description:
          "Optimize cloud spending while maintaining performance and reliability.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Lift and Shift Migration",
        description:
          "Move existing applications to the cloud with minimal changes.",
        image:
          "https://images.unsplash.com/photo-1478479474071-8a3014d422c8?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Cloud-Native Transformation",
        description: "Refactor applications for cloud-native architectures.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Multi-Cloud Operations",
        description: "Manage workloads across multiple cloud providers.",
        image:
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced reliability",
      "Faster time to market",
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
    relatedServices: ["cloud-application-development", "managed-services"],
    ctaTitle: "Migrate to the cloud with confidence",
    ctaDescription: "Let us handle your cloud migration and operations.",
    ctaButtonText: "Start Migration",
    ctaButtonHref: "/contact",
  },

  {
    id: "cloud-application-development",
    slug: "cloud-application-development-integration",
    category: "Cloud",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Cloud Application Development & Integration",
    heroSubtitle: "Build scalable cloud-native applications",
    heroDescription:
      "Develop and integrate cloud-native applications that leverage the full power of cloud platforms for scalability, reliability, and performance.",
    overview:
      "We build cloud-native applications from the ground up, designed to take full advantage of cloud capabilities. Our solutions are scalable, resilient, and integrate seamlessly with existing systems and services.",
    features: [
      {
        title: "Cloud-Native Development",
        description:
          "Build applications using cloud-native architectures and best practices.",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Microservices Architecture",
        description:
          "Design and implement scalable microservices-based applications.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "API Development & Integration",
        description:
          "Create and integrate APIs for seamless system connectivity.",
        image:
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Serverless Solutions",
        description:
          "Leverage serverless technologies for cost-effective, scalable solutions.",
        image:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "SaaS Application Development",
        description: "Build scalable Software-as-a-Service applications.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "API-First Integration",
        description: "Create APIs to connect disparate systems and services.",
        image:
          "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Event-Driven Applications",
        description:
          "Build reactive applications using event-driven architectures.",
        image:
          "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Unlimited scalability",
      "Reduced operational overhead",
      "Faster development cycles",
      "Better resource utilization",
    ],
    technologies: [
      "AWS Lambda",
      "Azure Functions",
      "Kubernetes",
      "Docker",
      "API Gateway",
    ],
    relatedServices: ["cloud-operations-migration", "business-applications"],
    ctaTitle: "Build your cloud-native application",
    ctaDescription:
      "Create scalable applications that grow with your business.",
    ctaButtonText: "Get Started",
    ctaButtonHref: "/contact",
  },

  {
    id: "managed-services",
    slug: "managed-services",
    category: "Cloud",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Managed Services",
    heroSubtitle: "Focus on your business, we'll handle the technology",
    heroDescription:
      "Comprehensive managed services to keep your IT infrastructure running smoothly, allowing you to focus on core business activities.",
    overview:
      "Our managed services provide ongoing support, monitoring, and management of your IT infrastructure. We handle day-to-day operations, maintenance, and optimization so you can focus on growing your business.",
    features: [
      {
        title: "24/7 Monitoring",
        description:
          "Round-the-clock monitoring of your systems and infrastructure.",
        image:
          "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Proactive Maintenance",
        description: "Prevent issues before they impact your business.",
        image:
          "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Incident Management",
        description: "Rapid response and resolution of technical issues.",
        image:
          "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Performance Optimization",
        description:
          "Continuous optimization for better performance and efficiency.",
        image:
          "https://images.unsplash.com/photo-1478358161113-b0e11994a36b?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Infrastructure Management",
        description:
          "Complete management of cloud and on-premises infrastructure.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Application Support",
        description:
          "Ongoing support and maintenance for business applications.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Security Management",
        description: "Comprehensive security monitoring and threat management.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Reduced IT overhead",
      "Improved reliability",
      "Faster issue resolution",
      "Access to expertise",
    ],
    technologies: [
      "Monitoring Tools",
      "Automation Platforms",
      "Security Tools",
    ],
    relatedServices: ["cloud-operations-migration", "security"],
    ctaTitle: "Let us manage your IT infrastructure",
    ctaDescription: "Free up your team to focus on what matters most.",
    ctaButtonText: "Learn More",
    ctaButtonHref: "/contact",
  },

  // Business Process Services
  {
    id: "contact-center",
    slug: "contact-center",
    category: "Business Process Services",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Contact Center",
    heroSubtitle: "Exceptional customer support solutions",
    heroDescription:
      "Deliver outstanding customer experiences with our comprehensive contact center services, combining technology and expertise.",
    overview:
      "Our contact center services provide end-to-end customer support solutions, from technology implementation to agent training and performance management. We help you deliver exceptional customer experiences at scale.",
    features: [
      {
        title: "Omnichannel Support",
        description:
          "Unified customer support across phone, email, chat, and social media.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "AI-Powered Automation",
        description:
          "Intelligent chatbots and automation to handle routine inquiries.",
        image:
          "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Performance Analytics",
        description:
          "Comprehensive analytics to measure and improve customer satisfaction.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Agent Training & Support",
        description:
          "Training programs and tools to enhance agent performance.",
        image:
          "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Customer Support Outsourcing",
        description: "Complete contact center operations managed by our team.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Technology Implementation",
        description:
          "Deploy and integrate contact center technology platforms.",
        image:
          "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Performance Optimization",
        description:
          "Improve contact center efficiency and customer satisfaction.",
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Improved customer satisfaction",
      "Reduced operational costs",
      "24/7 availability",
      "Scalable operations",
    ],
    technologies: ["CRM Systems", "Contact Center Platforms", "AI Chatbots"],
    relatedServices: ["digital-marketing", "staff-augmentation"],
    ctaTitle: "Transform your customer support",
    ctaDescription:
      "Deliver exceptional customer experiences with our contact center solutions.",
    ctaButtonText: "Get Started",
    ctaButtonHref: "/contact",
  },

  {
    id: "digital-marketing",
    slug: "digital-marketing",
    category: "Business Process Services",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Digital Marketing",
    heroSubtitle: "Drive growth with data-driven marketing",
    heroDescription:
      "Comprehensive digital marketing services to increase brand awareness, generate leads, and drive revenue through strategic campaigns and optimization.",
    overview:
      "Our digital marketing services help businesses reach and engage their target audience through strategic campaigns across multiple channels. We combine creativity with data-driven insights to deliver measurable results.",
    features: [
      {
        title: "SEO & Content Marketing",
        description:
          "Improve search rankings and drive organic traffic with optimized content.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Social Media Marketing",
        description:
          "Engage audiences and build brand presence on social platforms.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Paid Advertising",
        description:
          "Strategic paid campaigns on Google, social media, and other platforms.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Marketing Analytics",
        description: "Track performance and optimize campaigns for better ROI.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Brand Awareness Campaigns",
        description:
          "Increase visibility and recognition in your target market.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Lead Generation",
        description: "Attract and convert prospects into qualified leads.",
        image:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "E-commerce Marketing",
        description: "Drive sales and revenue for online businesses.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Increased brand visibility",
      "Higher lead generation",
      "Better ROI on marketing spend",
      "Data-driven optimization",
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "Analytics Tools",
      "Marketing Automation",
    ],
    relatedServices: ["digital-commerce", "contact-center"],
    ctaTitle: "Grow your business with digital marketing",
    ctaDescription: "Let's create campaigns that drive real results.",
    ctaButtonText: "Start Campaign",
    ctaButtonHref: "/contact",
  },

  {
    id: "finance-accounting",
    slug: "finance-accounting",
    category: "Business Process Services",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Finance & Accounting",
    heroSubtitle: "Streamline your financial operations",
    heroDescription:
      "Comprehensive finance and accounting services to manage your financial processes efficiently and ensure compliance.",
    overview:
      "We provide end-to-end finance and accounting services, from bookkeeping and financial reporting to tax preparation and financial analysis. Our services help businesses maintain accurate financial records and make informed decisions.",
    features: [
      {
        title: "Bookkeeping & Accounting",
        description: "Accurate and timely recording of financial transactions.",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Financial Reporting",
        description:
          "Comprehensive financial statements and management reports.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Tax Preparation",
        description: "Tax planning, preparation, and compliance services.",
        image:
          "https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Financial Analysis",
        description: "In-depth analysis to support strategic decision-making.",
        image:
          "https://images.unsplash.com/photo-1554224155-14dab275d9fc?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Outsourced Accounting",
        description: "Complete accounting function managed by our team.",
        image:
          "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Financial System Implementation",
        description: "Deploy and configure accounting and ERP systems.",
        image:
          "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Compliance Management",
        description:
          "Ensure compliance with financial regulations and standards.",
        image:
          "https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Reduced accounting costs",
      "Improved accuracy",
      "Better financial visibility",
      "Regulatory compliance",
    ],
    technologies: ["QuickBooks", "Xero", "SAP", "Oracle Financials"],
    relatedServices: ["business-applications", "staff-augmentation"],
    ctaTitle: "Optimize your financial operations",
    ctaDescription: "Let us handle your finance and accounting needs.",
    ctaButtonText: "Learn More",
    ctaButtonHref: "/contact",
  },

  {
    id: "staff-augmentation",
    slug: "staff-augmentation",
    category: "Business Process Services",
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Staff Augmentation",
    heroSubtitle: "Scale your team with expert talent",
    heroDescription:
      "Extend your team with skilled professionals who integrate seamlessly into your workflow and deliver results from day one.",
    overview:
      "Our staff augmentation services provide access to experienced professionals across various domains. We help you scale your team quickly with talent that matches your needs and culture.",
    features: [
      {
        title: "Skilled Professionals",
        description:
          "Access to experienced professionals across multiple domains.",
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Flexible Engagement",
        description: "Short-term or long-term engagements based on your needs.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Quick Onboarding",
        description: "Rapid integration into your team and workflows.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Quality Assurance",
        description: "Rigorous screening to ensure high-quality talent.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Project-Based Augmentation",
        description: "Add specialized skills for specific projects.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Long-Term Team Extension",
        description: "Extend your team with dedicated professionals.",
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Skill Gap Filling",
        description: "Fill skill gaps in your existing team.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Faster time to market",
      "Access to specialized skills",
      "Flexible scaling",
      "Cost-effective solution",
    ],
    technologies: ["Various", "Based on requirements"],
    relatedServices: ["business-applications", "cloud-application-development"],
    ctaTitle: "Scale your team with expert talent",
    ctaDescription: "Find the right professionals for your projects.",
    ctaButtonText: "Get Started",
    ctaButtonHref: "/contact",
  },

  {
    id: "legal-process-outsourcing",
    slug: "legal-process-outsourcing",
    category: "Business Process Services",
    heroImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1740",
    heroTitle: "Legal Process Outsourcing",
    heroSubtitle: "Efficient legal support services",
    heroDescription:
      "Comprehensive legal process outsourcing services to support your legal operations with accuracy, efficiency, and cost-effectiveness.",
    overview:
      "We provide legal process outsourcing services to help law firms and corporate legal departments manage their workload efficiently. Our services include document review, contract management, legal research, and more.",
    features: [
      {
        title: "Document Review",
        description: "Comprehensive review and analysis of legal documents.",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Contract Management",
        description:
          "Drafting, review, and management of contracts and agreements.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Legal Research",
        description: "In-depth legal research and case law analysis.",
        image:
          "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Compliance Support",
        description: "Assistance with regulatory compliance and documentation.",
        image:
          "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    useCases: [
      {
        title: "Document Review Projects",
        description:
          "Large-scale document review for litigation and due diligence.",
        image:
          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Contract Processing",
        description: "High-volume contract drafting and review.",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
      },
      {
        title: "Legal Research",
        description:
          "Research support for case preparation and legal opinions.",
        image:
          "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    benefits: [
      "Reduced legal costs",
      "Faster turnaround times",
      "Access to legal expertise",
      "Scalable resources",
    ],
    technologies: ["Legal Tech Platforms", "Document Management Systems"],
    relatedServices: ["staff-augmentation", "business-applications"],
    ctaTitle: "Streamline your legal operations",
    ctaDescription:
      "Outsource your legal processes for efficiency and cost savings.",
    ctaButtonText: "Learn More",
    ctaButtonHref: "/contact",
  },
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}

// Helper function to get services by category
export function getServicesByCategory(category: string): ServiceDetail[] {
  return SERVICES_DATA.filter((service) => service.category === category);
}

// Helper function to get all categories
export function getAllCategories(): string[] {
  return Array.from(new Set(SERVICES_DATA.map((service) => service.category)));
}
