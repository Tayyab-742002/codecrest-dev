import Hero from "../components/sections/hero";
import { ServicesSection } from "../components/sections/services";
import { CallToAction } from "../components/common/CallToAction";
import { AboutScrollSection } from "../components/ui/scroll-hero-section";
import { Featured } from "../components/sections/Featured/Featured";

export default function Home() {
  return (
    <>
      <div id="overview" className="scroll-mt-24">
        <Hero />
      </div>

      <div id="about" className="scroll-mt-24">
        <AboutScrollSection
          highlights={[
            "Innovation.",
            "momentum.",
            "confidence.",
            "scalability.",
          ]}
          headingPrefix="We partner with teams to deliver"
          accentHue={266}
          startOffsetVh={54}
          stackSpacingVh={44}
        />
      </div>

      <div id="services" className="scroll-mt-24">
        <ServicesSection />
      </div>
      <div id="projects-highlight" className="scroll-mt-24">
        <Featured />
      </div>
      <div id="contact" className="scroll-mt-24">
        <CallToAction />
      </div>
    </>
  );
}
