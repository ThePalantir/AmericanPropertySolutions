import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "../../../components/CTASection";
import { DemoVisual } from "../../../components/DemoVisual";
import { facilityFaqs, getRelatedServices, getServiceBySlug, serviceAreas, serviceCatalog } from "../../../lib/commercialData";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedServices = getRelatedServices(service);
  const isFlagship = service.slug === "exterior-facilities-maintenance";
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: "American Property Solutions",
      url: "https://aps-pa.com"
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Commercial property and facility teams"
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: facilityFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {isFlagship ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <section className="page-hero section service-detail-hero">
        <div>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.summary}</p>
          <p>{service.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Request a Property Walkthrough</Link>
            {service.externalCta ? (
              <a className="button button-secondary" href={service.externalCta.href} target="_blank" rel="noreferrer">
                {service.externalCta.label}
              </a>
            ) : (
              <Link className="button button-secondary" href="/services">Back to Commercial Services</Link>
            )}
          </div>
        </div>
        <DemoVisual key={service.slug} asset={service.image} variant="services" />
      </section>

      <section className="section service-detail-layout">
        <div className="service-detail-main">
          <div className="section-heading">
            <p className="eyebrow">Commercial service scope</p>
            <h2>What APS Can Discuss</h2>
            <p>Review the common commercial property work APS can discuss during a walkthrough.</p>
          </div>
          <ul className="detail-list-grid">
            {service.handles.map((item) => (
              <li key={item}>
                <span aria-hidden="true" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <aside className="source-note-panel">
          <p className="eyebrow">Walkthrough fit</p>
          <h2>Start With the Property Need</h2>
          <p>Use the walkthrough conversation to confirm the property, location, timing, and best next step for this work.</p>
          <Link className="text-link" href="/contact">Request a Property Walkthrough</Link>
        </aside>
      </section>

      <section className="section split-band">
        <div>
          <p className="eyebrow">Common commercial needs</p>
          <h2>When This Service Path Fits</h2>
          <p>Use these examples to decide whether this APS service fits the facility need.</p>
        </div>
        <ul className="check-list service-need-list">
          {service.needs.map((need) => <li key={need}>{need}</li>)}
        </ul>
      </section>

      {isFlagship ? (
        <section className="section">
          <div className="section-heading wide-heading">
            <p className="eyebrow">Facility manager questions</p>
            <h2>Exterior Facilities Maintenance FAQs</h2>
          </div>
          <div className="source-card-stack">
            {facilityFaqs.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

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
          <p>APS can confirm availability for the property location, requested service, and timing during the walkthrough conversation.</p>
          <Link className="text-link" href="/contact">Ask About Service Coverage</Link>
        </div>
        <ul className="area-list service-detail-area-list" aria-label="Service areas to confirm during walkthrough">
          {serviceAreas.slice(0, 12).map((area) => <li key={area}>{area}</li>)}
        </ul>
      </section>

      <CTASection title={`Discuss ${service.title.toLowerCase()}.`} body="Tell APS what is happening at the commercial property, where it is located, and what the facility team needs to address." />
    </>
  );
}
