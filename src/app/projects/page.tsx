import ProjectsHero from "@/src/components/sections/projects/ProjectsHero";
import ProjectsList from "@/src/components/sections/projects/ProjectsList";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ProjectsHero />
      <ProjectsList />
    </main>
  );
}

