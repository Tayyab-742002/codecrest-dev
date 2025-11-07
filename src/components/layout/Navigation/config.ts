import type { TabItem, NavItem } from "../Navigation/types";

export const TAB_ITEMS: TabItem[] = [
  { id: 1, title: "Overview" },
  { id: 2, title: "Integrations" },
  { id: 3, title: "Activity" },
  { id: 4, title: "Domains" },
  { id: 5, title: "Usage" },
  { id: 6, title: "AI" },
  { id: 7, title: "Settings" },
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
    label: "Integrations",
    hero: {
      title: "Connect Your Tools",
      description:
        "Seamlessly integrate with your favorite tools and platforms to streamline your workflow.",
    },
    columns: [
      {
        title: "Popular",
        links: [
          { label: "Salesforce", href: "#" },
          { label: "HubSpot", href: "#" },
          { label: "Slack", href: "#" },
          { label: "Microsoft Teams", href: "#" },
        ],
      },
      {
        title: "Development",
        links: [
          { label: "GitHub", href: "#" },
          { label: "GitLab", href: "#" },
          { label: "Jira", href: "#" },
          { label: "Jenkins", href: "#" },
        ],
      },
      {
        title: "Marketing",
        links: [
          { label: "Google Analytics", href: "#" },
          { label: "Mailchimp", href: "#" },
          { label: "Zapier", href: "#" },
          { label: "Segment", href: "#" },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Activity",
    hero: {
      title: "Activity Feed",
      description:
        "Stay updated with real-time activity logs and team collaboration insights.",
    },
    columns: [
      {
        title: "Recent",
        links: [
          { label: "Recent Changes", href: "#" },
          { label: "Team Updates", href: "#" },
          { label: "System Events", href: "#" },
          { label: "Notifications", href: "#" },
        ],
      },
      {
        title: "Monitoring",
        links: [
          { label: "Audit Logs", href: "#" },
          { label: "User Sessions", href: "#" },
          { label: "API Requests", href: "#" },
          { label: "Error Tracking", href: "#" },
        ],
      },
      {
        title: "Reports",
        links: [
          { label: "Activity Reports", href: "#" },
          { label: "Usage Statistics", href: "#" },
          { label: "Export Data", href: "#" },
          { label: "Scheduled Reports", href: "#" },
        ],
      },
    ],
  },
  {
    id: "4",
    label: "Domains",
    hero: {
      title: "Domain Management",
      description:
        "Manage your domains, SSL certificates, and DNS settings all in one place.",
    },
    columns: [
      {
        title: "Management",
        links: [
          { label: "Domain List", href: "#" },
          { label: "Add New Domain", href: "#" },
          { label: "Transfer Domain", href: "#" },
          { label: "Domain Settings", href: "#" },
        ],
      },
      {
        title: "Security",
        links: [
          { label: "SSL Certificates", href: "#" },
          { label: "DNS Security", href: "#" },
          { label: "Domain Privacy", href: "#" },
          { label: "Firewall Rules", href: "#" },
        ],
      },
      {
        title: "Configuration",
        links: [
          { label: "DNS Records", href: "#" },
          { label: "Email Setup", href: "#" },
          { label: "Subdomains", href: "#" },
          { label: "Redirects", href: "#" },
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
