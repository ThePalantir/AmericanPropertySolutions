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
              Review the common work APS can discuss during a
              property walkthrough.
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
          <p className="eyebrow">Walkthrough fit</p>
          <h2>Start With the Property Need</h2>
          <p>
            Use the walkthrough conversation to confirm the property,
            location, timing, and best next step for this work.
          </p>
          <Link className="text-link" href="/contact">
            Request a Property Walkthrough
          </Link>
        </aside>
      </section>

      <section className="section split-band">
        <div>
          <p className="eyebrow">Common needs we solve</p>
          <h2>When This Service Path Fits</h2>
          <p>
            Use these examples to decide whether this APS service fits
            the property need.
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
            APS can confirm availability for the property location, requested
            service, and timing during the walkthrough conversation.
          </p>
          <Link className="text-link" href="/contact">
            Ask About Service Coverage
          </Link>
        </div>
        <div className="area-list" aria-label="Service areas to confirm during walkthrough">
          {serviceAreas.slice(0, 12).map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <CTASection
        title={`Request a walkthrough for ${service.title.toLowerCase()}.`}
        body="Tell APS what is happening at the property, where it is located, and which service seems closest."
      />
    </>
  );
}
