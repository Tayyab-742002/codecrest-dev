import AboutHero from "@/src/components/sections/about/AboutHero";
import AboutMission from "@/src/components/sections/about/AboutMission";
import AboutLeadership from "@/src/components/sections/about/AboutLeadership";
import AboutCulture from "@/src/components/sections/about/AboutCulture";
import AboutTimeline from "@/src/components/sections/about/AboutTimeline";
import AboutCTA from "@/src/components/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className=" text-white">
      <AboutHero />
      <AboutMission />
      <AboutLeadership />
      <AboutCulture />
      <AboutTimeline />
      <AboutCTA />
    </main>
  );
}
