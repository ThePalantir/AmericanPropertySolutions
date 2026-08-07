import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../components/CTASection";
import { DemoVisual } from "../../components/DemoVisual";
import {
  serviceDirectoryGroups,
  serviceOverviewAsset,
  supplementalPages
} from "../../lib/commercialData";

export const metadata: Metadata = {
  title: "Commercial Exterior Property Services",
  description:
    "Explore APS commercial exterior facilities maintenance, concrete and site work, excavation, grading, drainage, property improvements, ongoing repair support, and commercial snow and ice management.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Commercial services</p>
          <h1>Exterior Facility Services, Organized Around the Property</h1>
          <p className="lead">
            APS helps facility managers, property managers, industrial operators,
            commercial owners, and corporate real estate teams start the right
            conversation for exterior maintenance, site work, repairs, improvements,
            and seasonal facility needs.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Property Walkthrough
            </Link>
            <Link className="button button-secondary" href="/services/exterior-facilities-maintenance">
              Start with Exterior Facilities Maintenance
            </Link>
          </div>
        </div>
        <DemoVisual asset={serviceOverviewAsset} variant="services" />
      </section>

      <section className="section directory-section grouped-services-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Commercial service directory</p>
          <h2>One Clear Directory by Facility Need</h2>
          <p>
            Begin with Exterior Facilities Maintenance when needs cross categories,
            or review the commercial service path closest to the work: concrete,
            excavation, grading, drainage, improvements, repairs, or winter operations.
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
        title="Discuss your commercial property needs."
        body="Describe what is happening at the facility first, then APS can route the conversation to the appropriate commercial service path."
      />
    </>
  );
}
