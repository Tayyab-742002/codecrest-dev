import Hero from "../components/sections/hero";
import { ServicesSection } from "../components/sections/services";
import { CallToAction } from "../components/common/CallToAction";
import { AboutScrollSection } from "../components/ui/scroll-hero-section";
import { Featured } from "../components/sections/Featured/Featured";

export default function Home() {
  return (
    <>
      <Hero />

      <AboutScrollSection
        highlights={["Innovation.", "momentum.", "confidence.", "scalability."]}
        headingPrefix="We partner with teams to deliver"
        accentHue={266}
        startOffsetVh={54}
        stackSpacingVh={44}
      />

      <ServicesSection />
      <Featured />
      <CallToAction />
    </>
  );
}
