import { BLOGS_DATA } from "@/src/data/blog.data";
import { PROJECTS_DATA } from "@/src/data/project.data";
import { SERVICES_DATA } from "@/src/data/service.data";
import type { NavItem, TabItem } from "./types";

const DEFAULT_SERVICE_HREF = SERVICES_DATA.length
  ? `/services/${SERVICES_DATA[0].slug}`
  : "/";

const SERVICE_CATEGORY_ORDER = [
  "Digital",
  "Data & Analytics",
  "Cloud",
  "Business Process Services",
];

const BLOG_CATEGORY_ORDER = [
  "Artificial Intelligence",
  "Knowledge Systems",
  "Operations",
  "Climate Tech",
];

const buildServiceColumns = () =>
  SERVICE_CATEGORY_ORDER.map((category) => {
    const services = SERVICES_DATA.filter(
      (service) => service.category === category
    );

    if (!services.length) {
      return null;
    }

    return {
      title: category,
      image: services[0]?.heroImage,
      links: services.slice(0, 4).map((service) => ({
        label: service.heroTitle,
        href: `/services/${service.slug}`,
      })),
    };
  }).filter(Boolean) as NavItem["columns"];

const buildProjectColumns = () => {
  const featuredColumn =
    PROJECTS_DATA.length > 0
      ? {
          title: "Featured Case Studies",
          image: PROJECTS_DATA[0].heroImage,
          links: PROJECTS_DATA.map((project) => ({
            label: project.title,
            href: `/projects/${project.slug}`,
          })),
        }
      : null;

  const industries = Array.from(
    new Set(PROJECTS_DATA.map((project) => project.industry))
  );

  const industryColumn = industries.length
    ? {
        title: "Industries",
        image: PROJECTS_DATA[0]?.images?.[0]?.url,
        links: industries.map((industry) => ({
          label: industry,
          href: `/projects?industry=${encodeURIComponent(industry)}`,
        })),
      }
    : null;

  const resourcesColumn = {
    title: "Project Resources",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    links: [
      { label: "Projects Overview", href: "/projects" },
      ...(PROJECTS_DATA.length
        ? [
            {
              label: PROJECTS_DATA[0].title,
              href: `/projects/${PROJECTS_DATA[0].slug}`,
            },
          ]
        : []),
      {
        label: "AI Frontiers 2025",
        href: "/blogs/ai-operating-model-2025",
      },
      {
        label: "Contact Our Team",
        href: "/contact",
      },
    ],
  };

  return [featuredColumn, industryColumn, resourcesColumn].filter(
    Boolean
  ) as NavItem["columns"];
};

const buildBlogColumns = () =>
  BLOG_CATEGORY_ORDER.map((category) => {
    const posts = BLOGS_DATA.filter((post) => post.category === category);
    if (!posts.length) {
      return null;
    }

    return {
      title: category,
      image: posts[0]?.coverImage,
      links: posts.slice(0, 4).map((post) => ({
        label: post.title,
        href: `/blogs/${post.slug}`,
      })),
    };
  }).filter(Boolean) as NavItem["columns"];

export const TAB_ITEMS: TabItem[] = [
  { id: 1, title: "Overview", href: "/" },
  {
    id: 2,
    title: "Services",
    href: DEFAULT_SERVICE_HREF,
    matchPrefixes: ["/services"],
  },
  {
    id: 3,
    title: "Projects",
    href: "/projects",
    matchPrefixes: ["/projects"],
  },
  {
    id: 4,
    title: "Blog",
    href: "/blogs",
    matchPrefixes: ["/blogs"],
  },
  {
    id: 5,
    title: "About",
    href: "/about",
    matchPrefixes: ["/about"],
  },
  {
    id: 6,
    title: "Contact",
    href: "/contact",
    matchPrefixes: ["/contact"],
  },
];

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "2",
    label: "Services",
    hero: {
      title: "Our Services",
      description:
        "Strategy, engineering, and operations to ship production-grade platforms.",
    },
    columns: buildServiceColumns(),
    footerLink: {
      label: "View all services",
      href: "/#services",
          },
  },
  {
    id: "3",
    label: "Projects",
    hero: {
      title: "Client Work",
      description:
        "Case studies spanning AI platforms, cloud migrations, and digital builds.",
    },
    columns: buildProjectColumns(),
    footerLink: {
      label: "Explore the projects library",
      href: "/projects",
    },
  },
  {
    id: "4",
    label: "Blog",
    hero: {
      title: "Insights & Research",
      description:
        "Playbooks on GenAI, data platforms, operations, and climate-scale software.",
    },
    columns: buildBlogColumns(),
    footerLink: {
      label: "Visit the blog hub",
      href: "/blogs",
    },
  },
];
