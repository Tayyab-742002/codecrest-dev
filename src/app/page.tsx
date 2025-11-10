import Hero from "../components/sections/hero";
import { ServicesSection } from "../components/sections/services";
import { AboutScrollSection } from "../components/ui/scroll-hero-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutScrollSection
        highlights={["clarity.", "momentum.", "confidence.", "scalability."]}
        headingPrefix="We partner with teams to deliver"
        accentHue={266}
        startOffsetVh={54}
        stackSpacingVh={44}
      />
      <ServicesSection />
    </>
  );
}
