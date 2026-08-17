import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { WeatherWidget } from "../components/WeatherWidget";
import { galleryAssets, propertyTypes, serviceAreas, serviceGroups, snowPartner, trustBarItems } from "../lib/commercialData";

export const metadata: Metadata = {
  title: "Commercial Exterior Facilities Maintenance",
  description: "American Property Solutions provides year-round commercial exterior facilities maintenance, repairs, site work, property improvements, and access to specialized commercial snow and ice management through American Snow & Ice Solutions.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const featuredWork = galleryAssets.slice(0, 3);
  const primaryServiceGroups = serviceGroups.filter((service) => service.href !== "/services/commercial-snow-ice-management");
  const facilityBenefits = [
    {
      title: "One practical starting point",
      detail: "Bring connected exterior maintenance, repair, site, and improvement needs into one property conversation."
    },
    {
      title: "Familiarity with the property",
      detail: "Build continuity around the site context instead of beginning from zero with every new need."
    },
    {
      title: "Connected scope planning",
      detail: "Consider concrete, drainage, excavation, access, repairs, and improvements as related facility work."
    },
    {
      title: "Continuity across seasons",
      detail: "Keep current work and future exterior property needs connected throughout the year."
    }
  ];

  return (
    <>
      <section className="aps-static-hero" aria-labelledby="homepage-hero-title">
        <div className="aps-static-hero-media" aria-hidden="true">
          <Image src="/og.png" alt="" fill priority sizes="100vw" />
        </div>
        <div className="aps-static-hero-overlay" aria-hidden="true" />
        <div className="aps-static-hero-content">
          <div className="aps-static-hero-copy">
            <p className="aps-static-hero-brand">American Property Solutions</p>
            <h1 id="homepage-hero-title">Commercial Exterior Facilities Maintenance</h1>
            <p className="aps-static-hero-promise">One call does it all.</p>
            <p className="lead">Year-round maintenance, repairs, site improvements, and seasonal support for commercial properties and facilities.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Request a Property Walkthrough</Link>
              <Link className="aps-quiet-link aps-quiet-link-light" href="/services">View Commercial Services <span aria-hidden="true">&#8599;</span></Link>
            </div>
          </div>
          <WeatherWidget />
        </div>
      </section>

      <section className="aps-capability-strip" aria-label="Company highlights">
        {trustBarItems.map((item) => (
          <div key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </div>
        ))}
      </section>

      <section className="aps-editorial-section aps-intro-section">
        <div>
          <p className="eyebrow">Exterior facilities maintenance</p>
          <h2>Your property needs a partner, not a longer contractor list.</h2>
        </div>
        <div className="aps-intro-copy">
          <p className="aps-intro-lead">Exterior access, drainage, concrete, grounds, repairs, and improvements all shape how a commercial facility looks and functions.</p>
          <p>APS becomes familiar with the property, connects related needs, and gives the facility team one practical place to start throughout the year.</p>
          <Link className="aps-quiet-link" href="/services/exterior-facilities-maintenance">How the APS relationship works <span aria-hidden="true">&#8594;</span></Link>
        </div>
      </section>

      <section className="aps-signature-band">
        <div className="aps-signature-image">
          <Image src="/approved-aps-assets/landscaping-3.png" alt="APS landscaping work at a maintained commercial property" fill sizes="(max-width: 900px) 100vw, 55vw" />
        </div>
        <div className="aps-signature-copy">
          <p className="eyebrow on-dark">One commercial property relationship</p>
          <h2>One call does it all.</h2>
          <p>Concrete work may uncover drainage needs. Pavement repairs may require site preparation. Seasonal planning may touch lots, sidewalks, and access. APS keeps connected exterior work in one practical conversation.</p>
          <div className="aps-operations-line" aria-label="Property service categories">
            {["Maintenance", "Concrete", "Site work", "Drainage", "Improvements", "Repairs"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <Link className="button button-primary" href="/contact">Start with a Walkthrough</Link>
        </div>
      </section>

      <section className="aps-editorial-section aps-services-editorial">
        <div className="aps-services-statement">
          <p className="eyebrow">Commercial capabilities</p>
          <h2>Exterior work, organized around the facility.</h2>
          <p>Start with Exterior Facilities Maintenance when needs cross categories, or review the commercial service path closest to the work.</p>
          <Link className="aps-quiet-link" href="/services">View Commercial Services <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <div className="aps-service-index">
          {primaryServiceGroups.map((service) => (
            <Link href={service.href} key={service.title}>
              <span className="aps-service-name">
                <small>{service.eyebrow}</small>
                <strong>{service.title}</strong>
                <span>{service.summary}</span>
              </span>
              <span className="aps-service-arrow" aria-hidden="true">&#8594;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="aps-snow-feature" aria-labelledby="snow-feature-title">
        <div className="aps-snow-feature-copy">
          <p className="eyebrow on-dark">Specialized winter operations</p>
          <h2 id="snow-feature-title">Commercial Snow &amp; Ice Management</h2>
          <p>Winter operations require specialized planning, equipment, documentation, and response. American Property Solutions works alongside American Snow &amp; Ice Solutions to provide commercial properties with dedicated snow and ice management throughout the winter season.</p>
          <div className="aps-snow-brand-block">
            <strong>{snowPartner.name}</strong>
            <span>Dedicated Commercial Snow &amp; Ice Management</span>
          </div>
          <a className="button button-primary aps-snow-feature-cta" href={snowPartner.href} target="_blank" rel="noreferrer" aria-label="Explore snow and ice services at American Snow & Ice Solutions">
            Explore Snow &amp; Ice Services <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
        <div className="aps-snow-feature-media">
          <Image src="/approved-aps-assets/snow-plow-equipment-1.png" alt="Commercial snow removal equipment prepared for winter operations" fill sizes="(max-width: 1040px) 100vw, 50vw" />
          <div className="aps-snow-feature-image-label" aria-hidden="true">
            <span>Winter readiness</span>
            <strong>Specialized commercial response</strong>
          </div>
        </div>
      </section>

      <section className="aps-editorial-section aps-process-section">
        <div className="aps-process-heading">
          <p className="eyebrow">A clear next step</p>
          <h2>From property need to practical plan.</h2>
        </div>
        <ol className="aps-process-list">
          <li><span>1</span><div><strong>Tell APS what is happening.</strong><p>Share the location, the property need, and the service that seems closest.</p></div></li>
          <li><span>2</span><div><strong>Walk the property.</strong><p>Review the site context and identify the work that needs a closer conversation.</p></div></li>
          <li><span>3</span><div><strong>Confirm the next step.</strong><p>Align on scope, timing, availability, and the right service path for the property.</p></div></li>
        </ol>
      </section>

      <section className="aps-editorial-section aps-audience-section">
        <div>
          <p className="eyebrow">Commercial properties and facilities</p>
          <h2>Built for the people responsible for the property.</h2>
          <p>The APS site is focused on facility managers, property managers, industrial operators, commercial owners, and corporate real estate teams.</p>
        </div>
        <div className="aps-audience-list">
          {propertyTypes.map((type) => (
            <div key={type.label}><strong>{type.label}</strong><span>{type.status}</span></div>
          ))}
        </div>
      </section>

      <section className="aps-editorial-section aps-audience-section aps-facility-benefits">
        <div>
          <p className="eyebrow">Why the relationship helps</p>
          <h2>Built around the facility manager&apos;s workload.</h2>
          <p>APS is positioned as a familiar commercial property resource for connected exterior needs—not as a generic handyman or a list of unrelated services.</p>
        </div>
        <div className="aps-audience-list">
          {facilityBenefits.map((benefit) => (
            <div key={benefit.title}><strong>{benefit.title}</strong><span>{benefit.detail}</span></div>
          ))}
        </div>
      </section>

      <section className="aps-work-section">
        <div className="aps-work-heading">
          <div><p className="eyebrow">Existing APS field imagery</p><h2>Exterior property work, seen clearly.</h2></div>
          <p>Existing APS imagery across commercial exteriors, grounds, winter operations, pavement, and facility maintenance.</p>
        </div>
        <div className="aps-work-mosaic">
          {featuredWork.map((asset, index) => (
            <figure key={asset.id} className={index === 0 ? "aps-work-feature" : undefined}>
              <div>{asset.src && asset.status === "approved" ? <Image src={asset.src} alt={asset.alt} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 66vw" : "(max-width: 800px) 100vw, 34vw"} /> : null}</div>
              <figcaption><strong>{asset.title}</strong></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="aps-editorial-section aps-area-section">
        <div>
          <p className="eyebrow">Service availability</p>
          <h2>Based in Walnutport. Available by property, service, and timing.</h2>
          <p>APS lists Lehigh Valley communities and nearby counties as service-area references. Confirm availability for your property during a walkthrough.</p>
          <Link className="aps-quiet-link" href="/contact">Ask about your location <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <div className="aps-area-list" aria-label="Service areas to confirm during walkthrough">
          {serviceAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>

      <CTASection title="Let&apos;s talk about your property." body="Tell APS what is happening at the commercial property, where it is located, and what the facility team needs to address now and throughout the year." />
    </>
  );
}
