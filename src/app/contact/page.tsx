import ContactHero from "@/src/components/sections/contact/ContactHero";
import ContactForm from "@/src/components/sections/contact/ContactForm";
import ContactInfo from "@/src/components/sections/contact/ContactInfo";
// import ContactMap from "@/src/components/sections/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="bg-[#050505] text-white">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      {/* <ContactMap /> */}
    </main>
  );
}
