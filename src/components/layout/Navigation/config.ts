import { NavItem } from "./types";
import { TabItem } from "./types";

export const TAB_ITEMS: TabItem[] = [
  { id: 1, title: "Overview" },
  { id: 2, title: "Services" },
  { id: 3, title: "Projects" },
  { id: 4, title: "Blog" },
  { id: 5, title: "Team" },
  { id: 6, title: "Contact" },
];

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "1",
    label: "Overview",
    hero: {
      title: "Platform Overview",
      description:
        "Get a comprehensive view of your entire platform with real-time insights and analytics.",
    },
    columns: [
      {
        title: "Dashboard",
        links: [
          { label: "Analytics Dashboard", href: "#" },
          { label: "Performance Metrics", href: "#" },
          { label: "System Health", href: "#" },
          { label: "Reports", href: "#" },
        ],
      },
      {
        title: "Insights",
        links: [
          { label: "User Analytics", href: "#" },
          { label: "Traffic Sources", href: "#" },
          { label: "Conversion Rates", href: "#" },
          { label: "ROI Tracking", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Getting Started", href: "#" },
          { label: "Documentation", href: "#" },
          { label: "Video Tutorials", href: "#" },
          { label: "Best Practices", href: "#" },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Services",
    hero: {
      title: "Our Services",
      description:
        "We offer a wide range of services to help you grow your business.",
    },
    columns: [
      {
        title: "Digital",
        links: [
          { label: "Digital Consulting & Strategy", href: "/services/digital-consulting-strategy" },
          { label: "Digital Commerce", href: "/services/digital-commerce" },
          { label: "Business Applications", href: "/services/business-applications" },
        ],
      },
      {
        title: "Data & Analytics",
        links: [
          { label: "Data Modernization", href: "/services/data-modernization" },
          { label: "Advanced Analytics", href: "/services/advanced-analytics" },
          { label: "Connected Intelligence", href: "/services/connected-intelligence" },
          { label: "Data Management", href: "/services/data-management" },
          { label: "Generative AI", href: "/services/generative-ai" },
        ],
      },
      {
        title: "Cloud",
        links: [
          { label: "Cloud Operations & Migration", href: "/services/cloud-operations-migration" },
          { label: "Cloud Application Development & Integration", href: "/services/cloud-application-development-integration" },
          { label: "Managed Services", href: "/services/managed-services" },
        ],
      },
      {
        title: "Digital Infrastructure Services",
        links: [],
      },
      {
        title: "Security",
        links: [],
      },
      {
        title: "Emerging Technologies",
        links: [],
      },
      {
        title: "Business Process Services",
        links: [
          { label: "Contact Center", href: "/services/contact-center" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
          { label: "Finance & Accounting", href: "/services/finance-accounting" },
          { label: "Staff Augmentation", href: "/services/staff-augmentation" },
          { label: "Legal Process Outsourcing", href: "/services/legal-process-outsourcing" },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Projects",
    hero: {
      title: "Our Projects",
      description:
        "We have worked on a wide range of projects to help our clients grow their business.",
    },
    columns: [
      {
        title: "Recent",
        links: [
          { label: "Project 1", href: "#" },
          { label: "Project 2", href: "#" },
          { label: "Project 3", href: "#" },
          { label: "Project 4", href: "#" },
        ],
      },
      {
        title: "Monitoring",
        links: [
          { label: "Project 5", href: "#" },
          { label: "Project 6", href: "#" },
          { label: "Project 7", href: "#" },
          { label: "Project 8", href: "#" },
        ],
      },
      {
        title: "Reports",
        links: [
          { label: "Project 9", href: "#" },
          { label: "Project 10", href: "#" },
          { label: "Project 11", href: "#" },
          { label: "Project 12", href: "#" },
        ],
      },
    ],
  },
  {
    id: "4",
    label: "Blog",
    hero: {
      title: "Our Blog",
      description:
        "We have a wide range of blog posts to help you learn more about our services and products.",
    },
    columns: [
      {
        title: "Management",
        links: [
          { label: "Blog Post 1", href: "#" },
          { label: "Blog Post 2", href: "#" },
          { label: "Blog Post 3", href: "#" },
          { label: "Blog Post 4", href: "#" },
        ],
      },
      {
        title: "Security",
        links: [
          { label: "Blog Post 5", href: "#" },
          { label: "Blog Post 6", href: "#" },
          { label: "Blog Post 7", href: "#" },
          { label: "Blog Post 8", href: "#" },
        ],
      },
      {
        title: "Configuration",
        links: [
          { label: "Blog Post 9", href: "#" },
          { label: "Blog Post 10", href: "#" },
          { label: "Blog Post 11", href: "#" },
          { label: "Blog Post 12", href: "#" },
        ],
      },
    ],
  },
  {
    id: "5",
    label: "Usage",
    hero: {
      title: "Usage & Billing",
      description:
        "Track your resource usage, manage billing, and optimize your spending.",
    },
    columns: [
      {
        title: "Overview",
        links: [
          { label: "Current Usage", href: "#" },
          { label: "Billing History", href: "#" },
          { label: "Cost Analysis", href: "#" },
          { label: "Invoices", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Storage Usage", href: "#" },
          { label: "Bandwidth", href: "#" },
          { label: "API Calls", href: "#" },
          { label: "Compute Hours", href: "#" },
        ],
      },
      {
        title: "Management",
        links: [
          { label: "Payment Methods", href: "#" },
          { label: "Plans & Pricing", href: "#" },
          { label: "Usage Alerts", href: "#" },
          { label: "Optimize Costs", href: "#" },
        ],
      },
    ],
  },
  {
    id: "6",
    label: "AI",
    hero: {
      title: "AI-Powered Features",
      description:
        "Leverage artificial intelligence to automate tasks and gain deeper insights.",
    },
    columns: [
      {
        title: "Tools",
        links: [
          { label: "AI Assistant", href: "#" },
          { label: "Smart Automation", href: "#" },
          { label: "Predictive Analytics", href: "#" },
          { label: "Content Generation", href: "#" },
        ],
      },
      {
        title: "Models",
        links: [
          { label: "Custom Models", href: "#" },
          { label: "Model Training", href: "#" },
          { label: "Model Library", href: "#" },
          { label: "API Access", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "AI Documentation", href: "#" },
          { label: "Use Cases", href: "#" },
          { label: "Best Practices", href: "#" },
          { label: "Community Forum", href: "#" },
        ],
      },
    ],
  },
  {
    id: "7",
    label: "Settings",
    hero: {
      title: "System Settings",
      description:
        "Configure your account, team permissions, and platform preferences.",
    },
    columns: [
      {
        title: "Account",
        links: [
          { label: "Profile Settings", href: "#" },
          { label: "Security", href: "#" },
          { label: "Notifications", href: "#" },
          { label: "Preferences", href: "#" },
        ],
      },
      {
        title: "Team",
        links: [
          { label: "Team Members", href: "#" },
          { label: "Roles & Permissions", href: "#" },
          { label: "Invite Users", href: "#" },
          { label: "Team Settings", href: "#" },
        ],
      },
      {
        title: "System",
        links: [
          { label: "API Keys", href: "#" },
          { label: "Webhooks", href: "#" },
          { label: "Integrations", href: "#" },
          { label: "Advanced Settings", href: "#" },
        ],
      },
    ],
  },
];
