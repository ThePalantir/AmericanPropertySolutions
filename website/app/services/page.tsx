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
            APS helps property managers, business owners, facility teams,
            and homeowners start the right conversation for exterior,
            site, seasonal, and building-related property needs.
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
            Find the service family that best matches the property need,
            then review the individual APS service that fits the work:
            maintenance, exterior upkeep, access areas, sitework,
            building repairs, or outdoor improvements.
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
                      View service
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
          <p className="eyebrow">Partner and hiring requests</p>
          <h2>Service Partner and Careers Questions</h2>
          <p>
            Service partner interest and careers questions can start through
            the same contact path so APS can route the request correctly.
          </p>
        </div>
        <div className="source-card-stack">
          {supplementalPages.map((page) => (
            <article key={page.title}>
              <h3>{page.title}</h3>
              <p>{page.summary}</p>
              <small>Start through APS contact.</small>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        body="Describe what is happening at the property first, then APS can route the conversation to the right service category."
      />
    </>
  );
}
