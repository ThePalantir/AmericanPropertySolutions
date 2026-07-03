import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../../components/CTASection";
import { DemoVisual } from "../../../components/DemoVisual";
import {
  getServiceBySlug,
  serviceCatalog,
  serviceOverviewAsset
} from "../../../lib/siteData";

export const metadata: Metadata = {
  title: "Property & Building Maintenance",
  description:
    "Connects APS property and building maintenance visitors to the expanded service directory."
};

const linkedSlugs = [
  "property-maintenance",
  "building-maintenance-repairs",
  "remodeling-services"
];

export default function PropertyBuildingMaintenanceCompatibilityPage() {
  const linkedServices = linkedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<ReturnType<typeof getServiceBySlug>> =>
      Boolean(service)
    );

  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Service guide</p>
          <h1>Property & Building Maintenance</h1>
          <p className="lead">
            Use this path to choose between property maintenance, building
            repairs, and remodeling-related support.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/services/property-maintenance">
              View Property Maintenance
            </Link>
            <Link className="button button-secondary" href="/services">
              Browse All Services
            </Link>
          </div>
        </div>
        <DemoVisual asset={serviceOverviewAsset} variant="services" />
      </section>

      <section className="section directory-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Related service paths</p>
          <h2>Choose the Closest Maintenance Need</h2>
          <p>
            This page keeps the previous property and building maintenance path
            available while directing visitors to the clearest service detail
            page.
          </p>
        </div>
        <div className="service-directory-grid">
          {linkedServices.map((service) => (
            <Link
              className="directory-card"
              href={`/services/${service.slug}`}
              key={service.slug}
              aria-label={`View ${service.title} services`}
            >
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span className="text-link" aria-hidden="true">
                View {service.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section notes-panel">
        <p className="eyebrow">Service directory</p>
        <h2>Expanded APS Service Paths</h2>
        <p>
          The expanded service structure gives each major APS service a clearer
          destination while keeping property maintenance as the main starting
          point.
        </p>
        <div className="area-list" aria-label="Expanded APS service categories">
          {serviceCatalog.slice(0, 9).map((service) => (
            <span key={service.slug}>{service.title}</span>
          ))}
        </div>
      </section>

      <CTASection
        title="Start with a property walkthrough."
        body="Tell APS what is happening at the property, and the conversation can be routed to the right service path."
      />
    </>
  );
}
