import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/src/data/service.data";
import ServiceHero from "@/src/components/sections/services/ServiceHero";
import { ServiceOverview } from "@/src/components/sections/services/ServiceOverview";
import { ServiceFeatures } from "@/src/components/sections/services/ServiceFeatures";
import ServiceUseCases from "@/src/components/sections/services/ServiceUseCases";
import { ServiceIndustryOfferings } from "@/src/components/sections/services/ServiceIndustryOfferings";
import { ServiceBenefits } from "@/src/components/sections/services/ServiceBenefits";

import { ServiceCTA } from "@/src/components/sections/services/ServiceCTA";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Codecrest",
    };
  }

  return {
    title: service.metaTitle || `${service.heroTitle} | Codecrest`,
    description: service.metaDescription || service.heroDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceFeatures service={service} />
      <ServiceUseCases service={service} />
      <ServiceIndustryOfferings service={service} />
      <ServiceBenefits service={service} />

      <ServiceCTA service={service} />
    </div>
  );
}
