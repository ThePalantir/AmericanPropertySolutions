import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "../../../components/CTASection";
import { DemoVisual } from "../../../components/DemoVisual";
import {
  getRelatedServices,
  getServiceBySlug,
  serviceAreas,
  serviceCatalog
} from "../../../lib/siteData";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | American Property Solutions`,
    description: service.summary
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);

  return (
    <>
      <section className="page-hero section service-detail-hero">
        <div>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.summary}</p>
          <p>{service.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Property Walkthrough
            </Link>
            <Link className="button button-secondary" href="/services">
              Back to Services
            </Link>
          </div>
        </div>
        <DemoVisual asset={service.image} variant="services" />
      </section>

      <section className="section service-detail-layout">
        <div className="service-detail-main">
          <div className="section-heading">
            <p className="eyebrow">What we handle</p>
            <h2>Service Scope</h2>
            <p>
              This list is rewritten from APS source content and organized for
              easier scanning. Final public wording and service scope still
              require APS approval.
            </p>
          </div>
          <div className="detail-list-grid">
            {service.handles.map((item) => (
              <article key={item}>
                <span />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="source-note-panel">
          <p className="eyebrow">Source basis</p>
          <h2>Derived From APS Source Content</h2>
          <p>{service.sourceNote}</p>
          <a className="text-link" href={service.sourceUrl} target="_blank" rel="noreferrer">
            View source page
          </a>
        </aside>
      </section>

      <section className="section split-band">
        <div>
          <p className="eyebrow">Common needs we solve</p>
          <h2>When This Service Path Fits</h2>
          <p>
            The demo speaks to real property maintenance situations instead of
            repeating keyword lists from the old site.
          </p>
        </div>
        <ul className="check-list service-need-list">
          {service.needs.map((need) => (
            <li key={need}>{need}</li>
          ))}
        </ul>
      </section>

      <section className="section related-services-section">
        <div className="section-heading">
          <p className="eyebrow">Related services</p>
          <h2>Connected Property Work</h2>
        </div>
        <div className="related-service-grid">
          {relatedServices.map((related) => (
            <Link href={`/services/${related.slug}`} key={related.slug}>
              <span>{related.eyebrow}</span>
              <strong>{related.title}</strong>
              <small>{related.summary}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section service-area service-detail-area">
        <div>
          <p className="eyebrow">Service-area note</p>
          <h2>Ask About Availability in Your Area</h2>
          <p>
            APS source content references the Lehigh Valley and surrounding
            Pennsylvania communities. Final launch copy should confirm the exact
            cities, counties, and service radius APS wants to promote.
          </p>
          <Link className="text-link" href="/contact">
            Ask About Service Coverage
          </Link>
        </div>
        <div className="area-list" aria-label="Source-derived service areas requiring final approval">
          {serviceAreas.slice(0, 12).map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <CTASection
        title={`Request a walkthrough for ${service.title.toLowerCase()}.`}
        body="Tell APS what is happening at the property, where it is located, and which service path seems closest."
      />
    </>
  );
}

