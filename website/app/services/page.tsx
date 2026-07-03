import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../components/CTASection";
import { DemoVisual } from "../../components/DemoVisual";
import { ServiceCard } from "../../components/ServiceCard";
import {
  serviceCatalog,
  serviceGroups,
  serviceOverviewAsset,
  supplementalPages,
  validationNotes
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
            A stronger services hub turns APS&apos;s broad service list into clear,
            professional paths for property managers, business owners, facility
            teams, and homeowners with exterior or building-related needs.
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
            These groups preserve the premium, commercial-first direction while
            representing the full APS service mix from the source site.
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
            Each path rewrites source-derived APS content into scannable service
            pages with related services and walkthrough CTAs.
          </p>
        </div>
        <div className="service-directory-grid">
          {serviceCatalog.map((service) => (
            <article className="directory-card" key={service.slug}>
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul className="plain-list compact-list">
                {service.handles.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="text-link" href={`/services/${service.slug}`}>
                View {service.title}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-band source-band">
        <div>
          <p className="eyebrow">Source-derived additions</p>
          <h2>Partner and Hiring Content Is Present, But Approval-Gated</h2>
          <p>
            The existing APS site includes a Service Partner Network and Careers
            content. This demo acknowledges both without adding public forms,
            hiring claims, or partner-process commitments that still need APS
            approval.
          </p>
        </div>
        <div className="source-card-stack">
          {supplementalPages.map((page) => (
            <article key={page.title}>
              <h3>{page.title}</h3>
              <p>{page.summary}</p>
              <small>{page.approvalNeeded}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section notes-panel">
        <p className="eyebrow">Approval notes</p>
        <h2>Claims That Stay Out Until Approved</h2>
        <ul className="plain-list">
          {validationNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <CTASection
        title="Not sure which service path fits?"
        body="The walkthrough path lets a visitor describe the property need first, then APS can route the conversation to the right service category."
      />
    </>
  );
}


