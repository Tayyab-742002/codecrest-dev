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
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
        links: [
          {
            label: "Digital Consulting & Strategy",
            href: "/services/digital-consulting-strategy",
          },
          { label: "Digital Commerce", href: "/services/digital-commerce" },
          {
            label: "Business Applications",
            href: "/services/business-applications",
          },
        ],
      },
      {
        title: "Data & Analytics",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Data Modernization", href: "/services/data-modernization" },
          { label: "Advanced Analytics", href: "/services/advanced-analytics" },
          {
            label: "Connected Intelligence",
            href: "/services/connected-intelligence",
          },
          { label: "Data Management", href: "/services/data-management" },
          { label: "Generative AI", href: "/services/generative-ai" },
        ],
      },
      {
        title: "Cloud",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        links: [
          {
            label: "Cloud Operations & Migration",
            href: "/services/cloud-operations-migration",
          },
          {
            label: "Cloud Application Development & Integration",
            href: "/services/cloud-application-development-integration",
          },
          { label: "Managed Services", href: "/services/managed-services" },
        ],
      },
      {
        title: "Digital Infrastructure Services",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        links: [],
      },
      {
        title: "Security",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        links: [],
      },
      {
        title: "Emerging Technologies",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        links: [],
      },
      {
        title: "Business Process Services",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Contact Center", href: "/services/contact-center" },
          { label: "Digital Marketing", href: "/services/digital-marketing" },
          {
            label: "Finance & Accounting",
            href: "/services/finance-accounting",
          },
          { label: "Staff Augmentation", href: "/services/staff-augmentation" },
          {
            label: "Legal Process Outsourcing",
            href: "/services/legal-process-outsourcing",
          },
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
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Project 1", href: "#" },
          { label: "Project 2", href: "#" },
          { label: "Project 3", href: "#" },
          { label: "Project 4", href: "#" },
        ],
      },
      {
        title: "Monitoring",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Project 5", href: "#" },
          { label: "Project 6", href: "#" },
          { label: "Project 7", href: "#" },
          { label: "Project 8", href: "#" },
        ],
      },
      {
        title: "Reports",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
        image:
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Blog Post 1", href: "#" },
          { label: "Blog Post 2", href: "#" },
          { label: "Blog Post 3", href: "#" },
          { label: "Blog Post 4", href: "#" },
        ],
      },
      {
        title: "Security",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Blog Post 5", href: "#" },
          { label: "Blog Post 6", href: "#" },
          { label: "Blog Post 7", href: "#" },
          { label: "Blog Post 8", href: "#" },
        ],
      },
      {
        title: "Configuration",
        image:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
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
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Current Usage", href: "#" },
          { label: "Billing History", href: "#" },
          { label: "Cost Analysis", href: "#" },
          { label: "Invoices", href: "#" },
        ],
      },
      {
        title: "Resources",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Storage Usage", href: "#" },
          { label: "Bandwidth", href: "#" },
          { label: "API Calls", href: "#" },
          { label: "Compute Hours", href: "#" },
        ],
      },
      {
        title: "Management",
        image:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
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
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "AI Assistant", href: "#" },
          { label: "Smart Automation", href: "#" },
          { label: "Predictive Analytics", href: "#" },
          { label: "Content Generation", href: "#" },
        ],
      },
      {
        title: "Models",
        image:
          "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Custom Models", href: "#" },
          { label: "Model Training", href: "#" },
          { label: "Model Library", href: "#" },
          { label: "API Access", href: "#" },
        ],
      },
      {
        title: "Resources",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
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
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Profile Settings", href: "#" },
          { label: "Security", href: "#" },
          { label: "Notifications", href: "#" },
          { label: "Preferences", href: "#" },
        ],
      },
      {
        title: "Team",
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
        links: [
          { label: "Team Members", href: "#" },
          { label: "Roles & Permissions", href: "#" },
          { label: "Invite Users", href: "#" },
          { label: "Team Settings", href: "#" },
        ],
      },
      {
        title: "System",
        image:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
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
