import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../components/CTASection";
import { DemoVisual } from "../../components/DemoVisual";
import {
  serviceDirectoryGroups,
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

      <section className="section directory-section grouped-services-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Service directory</p>
          <h2>One Clear Directory by Property Need</h2>
          <p>
            Each APS service path appears once, grouped by how a visitor is
            likely to think about the property issue: maintenance, exterior
            upkeep, access areas, sitework, building repairs, or outdoor
            improvements.
          </p>
        </div>
        <div className="grouped-directory-grid">
          {serviceDirectoryGroups.map((group) => (
            <article className="service-family-card" key={group.title}>
              <div className="service-family-heading">
                <p className="eyebrow">{group.eyebrow}</p>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
              </div>
              <div className="service-path-list">
                {group.services.map((service) => (
                  <Link
                    className="service-path-row"
                    href={`/services/${service.slug}`}
                    key={service.slug}
                    aria-label={`View ${service.title} services`}
                  >
                    <div>
                      <p className="eyebrow">{service.eyebrow}</p>
                      <h4>{service.title}</h4>
                      <p>{service.summary}</p>
                    </div>
                    <ul className="plain-list compact-list">
                      {service.handles.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <span className="text-link" aria-hidden="true">
                      View service path
                    </span>
                  </Link>
                ))}
              </div>
            </article>
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
