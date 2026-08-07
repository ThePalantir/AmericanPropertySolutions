import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { CinematicHero } from "../components/CinematicHero";
import { galleryAssets, homeHeroSlides, propertyTypes, serviceAreas, serviceGroups, snowPartner, trustBarItems } from "../lib/commercialData";

export const metadata: Metadata = {
  title: "Commercial Exterior Facilities Maintenance",
  description: "APS provides commercial exterior facilities maintenance, concrete and site work, excavation, grading, drainage, property improvements, repair support, and a connection to specialized commercial snow and ice management.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  const featuredWork = galleryAssets.slice(0, 3);

  return (
    <>
      <CinematicHero slides={homeHeroSlides}>
        <div className="hero-copy aps-editorial-hero-copy">
          <p className="eyebrow on-dark">Commercial exterior facilities maintenance</p>
          <h1>One call for the exterior work your facility needs—year-round.</h1>
          <p className="lead">APS helps facility managers, property managers, and commercial property owners coordinate maintenance, repairs, site work, concrete, drainage, property improvements, and seasonal needs through one connected property relationship.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Request a Property Walkthrough</Link>
            <Link className="aps-quiet-link aps-quiet-link-light" href="/services">View Commercial Services <span aria-hidden="true">&#8599;</span></Link>
          </div>
        </div>
      </CinematicHero>

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

      <section className="aps-editorial-section aps-services-editorial">
        <div className="aps-services-statement">
          <p className="eyebrow">What APS handles</p>
          <h2>Property support, organized around the work.</h2>
          <p>Start with the service that seems closest. APS can confirm the property, scope, location, timing, and best next step.</p>
          <Link className="aps-quiet-link" href="/services">View the full service directory <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <div className="aps-service-index">
          {serviceGroups.map((service) => (
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

      <section className="aps-work-section">
        <div className="aps-work-heading">
          <div><p className="eyebrow">Commercial work in the field</p><h2>Exterior property work, seen clearly.</h2></div>
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


      <section className="section split-band">
        <div>
          <p className="eyebrow">Specialized winter operations</p>
          <h2>Commercial snow and ice has its own dedicated team.</h2>
          <p>APS includes winter needs in the year-round facilities conversation. American Snow & Ice Solutions provides the detailed commercial snow and ice offering.</p>
        </div>
        <a className="button button-primary" href={snowPartner.href} target="_blank" rel="noreferrer">
          Visit {snowPartner.name}
        </a>
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

      <CTASection title="Discuss your facility needs." body="Tell APS what is happening at the commercial property, where it is located, and what the facility team needs to address." />
    </>
  );
}
