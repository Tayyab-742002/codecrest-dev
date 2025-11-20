import * as React from "react";

import { cn } from "@/lib/utils";

// Define interfaces for props

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
}

// TeamSection Component

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,

      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-background py-12 md:py-16 lg:py-24 xl:py-32",
          className
        )}
        {...props}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Header Section */}
          <div className="relative z-10 mb-12 flex w-full flex-col items-center gap-4 text-center md:mb-16 md:items-start md:text-left lg:mb-20">
            <div className="w-full space-y-3 md:space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white/80">
                <span className="text-blue-400 block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium">
                  O U R
                </span>
                {title}
              </h1>
              <p className="mx-auto w-full max-w-[700px] text-sm text-white/60 sm:text-base md:text-lg lg:text-xl">
                {description}
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12 2xl:max-w-7xl">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-2xl sm:p-5 md:p-6 lg:p-8"
                style={{
                  backgroundColor:
                    index === 0
                      ? "rgba(239, 68, 68, 0.1)"
                      : index === 1
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(234, 179, 8, 0.1)",
                }}
              >
                {/* Background wave animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-linear-to-t from-primary/20 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />
                {/* Member Image with mask and border animation */}
                <div
                  className="relative z-10 h-24 w-24 overflow-hidden rounded-full border-4 border-transparent bg-background/20 transition-all duration-500 ease-out group-hover:border-primary group-hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <h3 className="relative z-10 mt-3 text-base font-semibold text-white sm:mt-4 sm:text-lg md:text-xl">
                  {member.name}
                </h3>
                <p className="relative z-10 mt-1 text-xs text-white/60 sm:text-sm">
                  {member.designation}
                </p>
                {/* Social Links for individual members */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-3 flex gap-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 sm:mt-4 sm:gap-3">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-blue-400 transition-colors"
                      >
                        <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
