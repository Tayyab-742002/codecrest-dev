"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/src/data/project.data";
import { CheckCircle2, Clock, Calendar, ChevronsRight } from "lucide-react";

const projects = getAllProjects();

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-600 from-green-600";
    case "in-progress":
      return "bg-blue-600 from-blue-600";
    case "on-hold":
      return "bg-yellow-600 from-yellow-600";
    default:
      return "bg-purple-600 from-purple-600";
  }
};

const getStatusIcon = (status: string) => {
  if (status === "completed") {
    return <CheckCircle2 className="h-4 w-4" />;
  }
  return <Clock className="h-4 w-4" />;
};

export default function ProjectsList() {
  if (!projects.length) {
    return null;
  }

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:gap-12 sm:px-6 md:gap-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Our Projects
          </h2>
          <p className="text-xs text-slate-600 sm:text-sm">
            Transformative solutions that drive business impact and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {projects.map((project) => {
            const statusColors = getStatusColor(project.status);
            const statusText =
              project.status === "completed"
                ? "Completed"
                : project.status === "in-progress"
                  ? "In Progress"
                  : "On Hold";

            return (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white text-black flex flex-col h-[480px] sm:h-[520px] md:h-[560px] lg:h-[600px] xl:h-[640px] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full h-full">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="h-full w-full scale-105 group-hover:scale-100 object-cover transition-all duration-300"
                  />
                </div>

                {/* Hover Overlay */}
                <article
                  className={`p-6 sm:p-8 md:p-10 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 ${statusColors} text-white`}
                >
                  <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-3 sm:space-y-4 md:space-y-5">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(project.status)}
                      <span className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider">
                        {statusText}
                      </span>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold line-clamp-2">
                      {project.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg line-clamp-3">
                      {project.subtitle}
                    </p>
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-4 md:gap-6 pt-2">
                        {project.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className="flex flex-col">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold">
                              {metric.value}
                            </span>
                            <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider opacity-90">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <button className="p-2.5 sm:p-3 md:p-3.5 bg-black flex items-center gap-2 rounded-md text-white text-sm sm:text-base md:text-lg w-fit mt-2 hover:bg-black/90 transition-colors">
                      View Project <ChevronsRight className="h-4 w-4 md:h-5 md:w-5" />
                    </button>
                  </div>
                </article>

                {/* Bottom Info (Visible by default, hidden on hover) */}
                <article
                  className={`p-4 sm:p-6 md:p-8 w-full flex flex-col justify-end overflow-hidden absolute bottom-0 opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300 bg-gradient-to-t ${statusColors} text-white`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {getStatusIcon(project.status)}
                    <span className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider">
                      {statusText}
                    </span>
                  </div>
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold line-clamp-2 mb-1">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-white/90">
                    <span className="uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {project.completedAt
                        ? new Date(project.completedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "Ongoing"}
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

