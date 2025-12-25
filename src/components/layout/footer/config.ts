import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_DISPLAY_NAME,
  COMPANY_LINKEDIN_URL,
} from "@/src/lib/constants/contact";

export const siteConfig = {
  company: {
    name: CONTACT_DISPLAY_NAME,
    description:
      "A product studio partnering with ambitious teams to ship AI-native platforms, modernize cloud stacks, and keep critical systems running.",
    location:
      "Italy, Pisa",
    email: CONTACT_EMAIL,
    phonePrimary: "+39 334 232 0631",
    phoneSecondary: "",
    socials: {
      linkedin: COMPANY_LINKEDIN_URL,
    },
  },
  columns: [
    {
      title: "Company",
      links: [
        { id: "company-overview", title: "Overview", url: "/" },
        { id: "company-about", title: "About", url: "/about" },
        {
          id: "company-leadership",
          title: "Leadership",
          url: "/about#leadership",
        },
        { id: "company-culture", title: "Culture", url: "/about#culture" },
      ],
    },
    {
      title: "Services",
      links: [
        {
          id: "service-digital-consulting",
          title: "Digital Consulting",
          url: "/services/digital-consulting-strategy",
        },
        {
          id: "service-generative-ai",
          title: "Generative AI",
          url: "/services/generative-ai",
        },
        {
          id: "service-data-modernization",
          title: "Data Modernization",
          url: "/services/data-modernization",
        },
        {
          id: "service-cloud-ops",
          title: "Cloud Operations",
          url: "/services/cloud-operations-migration",
        },
      ],
    },
    {
      title: "Work",
      links: [
        { id: "work-projects", title: "Projects", url: "/projects" },
        {
          id: "work-case-study",
          title: "Enterprise AI Platform",
          url: "/projects/enterprise-ai-platform",
        },
        {
          id: "work-connected-intelligence",
          title: "Connected Intelligence",
          url: "/projects/connected-intelligence-hub",
        },
        { id: "work-contact", title: "Start a Project", url: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: "resource-blogs", title: "Insights & Research", url: "/blogs" },
        { id: "resource-services", title: "All Services", url: "/services" },
        {
          id: "resource-methodology",
          title: "Delivery Playbook",
          url: "/about#timeline",
        },
        {
          id: "resource-press",
          title: "Press & Media",
          url: CONTACT_MAILTO,
        },
      ],
    },
  ],
};
