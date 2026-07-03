import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../components/CTASection";
import { DemoVisual } from "../../components/DemoVisual";
import { ServiceCard } from "../../components/ServiceCard";
import {
  serviceCatalog,
  serviceGroups,
  serviceOverviewAsset,
  supplementalPages
} from "../../lib/siteData";

export const metadata: Metadata = {
  title: "Property Maintenance Services",
  description:
    "Explore APS property maintenance services including landscaping, snow and ice, parking lots, concrete, excavation, building repairs, remodeling, decks, patios, and hardscapes."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Services</p>
          <h1>Property Maintenance Services</h1>
          <p className="lead">
            APS services are organized into clear, professional paths for
            property managers, business owners, facility teams, and homeowners
            with exterior or building-related needs.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Property Walkthrough
            </Link>
            <Link className="button button-secondary" href="/services/property-maintenance">
              Start with Property Maintenance
            </Link>
          </div>
        </div>
        <DemoVisual asset={serviceOverviewAsset} variant="services" />
      </section>

      <section className="section services-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Grouped service families</p>
          <h2>Scan by Property Need</h2>
          <p>
            The hub keeps the premium commercial direction while giving visitors
            a fast way to find the service family that matches their property
            need.
          </p>
        </div>
        <div className="commercial-card-grid">
          {serviceGroups.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section directory-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Service directory</p>
          <h2>Detailed Service Paths</h2>
          <p>
            Each path gives visitors a concise overview, practical scope list,
            related services, and a walkthrough CTA.
          </p>
        </div>
        <div className="service-directory-grid">
          {serviceCatalog.map((service) => (
            <Link
              className="directory-card"
              href={`/services/${service.slug}`}
              key={service.slug}
              aria-label={`View ${service.title} services`}
            >
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="plain-list compact-list">
                {service.handles.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="text-link" aria-hidden="true">
                View {service.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section split-band source-band">
        <div>
          <p className="eyebrow">Additional APS paths</p>
          <h2>Partner and Hiring Conversations Stay Routed Through Contact</h2>
          <p>
            Service partner and careers interest can stay visible without
            creating extra public forms or distracting from the main walkthrough
            path.
          </p>
        </div>
        <div className="source-card-stack">
          {supplementalPages.map((page) => (
            <article key={page.title}>
              <h3>{page.title}</h3>
              <p>{page.summary}</p>
              <small>Start with the APS contact path.</small>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which service path fits?"
        body="The walkthrough path lets a visitor describe the property need first, then APS can route the conversation to the right service category."
      />
    </>
  );
}
