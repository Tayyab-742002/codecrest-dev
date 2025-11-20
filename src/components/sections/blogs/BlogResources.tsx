"use client";

import { motion, type Variants } from "framer-motion";
import {
  FileText,
  Headphones,
  Video,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import type { BlogResource } from "@/src/data/blog.data";

interface BlogResourcesProps {
  resources: BlogResource[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const resourceIcons = {
  report: FileText,
  podcast: Headphones,
  webinar: Video,
  "case-study": Briefcase,
};

const getResourceUrl = (href: string): string => {
  // If it's already a full URL, return it
  if (href.startsWith("http")) {
    return href;
  }

  // Map internal paths to external resources or placeholder URLs
  const urlMap: Record<string, string> = {
    "/insights/responsible-genai-governance":
      "https://www.gartner.com/en/articles/responsible-ai-governance",
    "/podcast/ai-agents-guardrails":
      "https://www.oreilly.com/library/view/building-ai-agents/",
    "/webinars/rag-data-contracts":
      "https://www.databricks.com/learn/webinars/rag-data-contracts",
    "/insights/rag-data-contracts":
      "https://www.databricks.com/blog/rag-data-contracts",
    "/webinars/embedding-stores":
      "https://www.weaviate.io/learn/vector-database/embedding-stores",
    "/guides/automation-rituals": "https://www.atlassian.com/automation/guides",
    "/podcast/ops-codesign":
      "https://www.oreilly.com/library/view/operations-engineering/",
    "/case-studies/climate-observability":
      "https://www.dynatrace.com/news/blog/climate-saas-observability",
    "/guides/sustainability-apis":
      "https://www.greenhouse.io/guides/sustainability-apis",
  };

  return urlMap[href] || `https://codecrest.com${href}`;
};

export default function BlogResources({ resources }: BlogResourcesProps) {
  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 md:py-28">
      <div className="container relative z-10 mx-auto w-full max-w-3xl px-6 sm:px-8 lg:px-12">
        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-16 md:mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.2] text-white tracking-tight mb-2">
            Related Resources
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {resources.map((resource) => {
            const Icon = resourceIcons[resource.type] || FileText;
            const url = getResourceUrl(resource.href);
            const isExternal = url.startsWith("http");

            return (
              <motion.a
                key={resource.href}
                href={url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group flex items-start gap-5 p-6 rounded-lg border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div className="flex items-center gap-2">
                      <Icon
                        className="h-4 w-4 text-white/60 shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                        {resource.type.replace("-", " ")}
                      </span>
                    </div>
                    {isExternal && (
                      <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-white/70 shrink-0 transition-colors" />
                    )}
                  </div>
                  <p className="text-base sm:text-lg leading-[1.75] text-white font-light tracking-wide group-hover:text-white/90 transition-colors">
                    {resource.label}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
