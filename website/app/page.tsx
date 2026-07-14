import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { CinematicHero } from "../components/CinematicHero";
import { galleryAssets, homeHeroSlides, propertyTypes, serviceAreas, serviceGroups, trustBarItems } from "../lib/siteData";

export const metadata: Metadata = {
  title: "Commercial Property Maintenance in Lehigh Valley",
  description: "American Property Solutions provides property maintenance, landscaping, snow and ice, parking lot, concrete, sitework, building repair, remodeling, deck, patio, and hardscape services."
};

export default function HomePage() {
  const featuredWork = galleryAssets.slice(0, 3);

  return (
    <>
      <CinematicHero slides={homeHeroSlides}>
        <div className="hero-copy aps-editorial-hero-copy">
          <p className="eyebrow on-dark">Commercial property maintenance</p>
          <h1>One Property. Every Season. One Place to Start.</h1>
          <p className="lead">APS helps property managers, facility teams, businesses, and owners coordinate the exterior, access, sitework, and repair needs that keep a property moving.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Request a Property Walkthrough</Link>
            <Link className="aps-quiet-link aps-quiet-link-light" href="/services">Explore all services <span aria-hidden="true">&#8599;</span></Link>
          </div>
        </div>
      </CinematicHero>

      <section className="aps-capability-strip" aria-label="Company highlights">
        {trustBarItems.map((item, index) => (
          <div key={item.label}>
            <span className="aps-strip-number">0{index + 1}</span>
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </div>
        ))}
      </section>

      <section className="aps-editorial-section aps-intro-section">
        <div>
          <p className="eyebrow">The property comes first</p>
          <h2>Maintenance rarely fits into one neat category.</h2>
        </div>
        <div className="aps-intro-copy">
          <p className="aps-intro-lead">A clean entrance, clear lot, working drainage, maintained grounds, and timely repairs all shape how a property looks and functions.</p>
          <p>When those needs cross seasons and trades, the contractor list gets complicated. APS gives owners and managers one practical starting point: walk the property, identify the work, and route the next step.</p>
          <Link className="aps-quiet-link" href="/services/property-maintenance">How property maintenance works <span aria-hidden="true">&#8594;</span></Link>
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
          {serviceGroups.map((service, index) => (
            <Link href={service.href} key={service.title}>
              <span className="aps-service-number">0{index + 1}</span>
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
          <p className="eyebrow on-dark">One call, full property coverage</p>
          <h2>Keep the conversations connected.</h2>
          <p>Landscape cleanup may uncover drainage work. Pavement repairs may involve concrete or site preparation. Seasonal planning may touch lots, sidewalks, and access. APS helps keep the next step clear.</p>
          <div className="aps-operations-line" aria-label="Property service categories">
            {["Grounds", "Snow", "Lots", "Sitework", "Concrete", "Repairs"].map((item) => <span key={item}>{item}</span>)}
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
          <li><span>01</span><div><strong>Tell APS what is happening.</strong><p>Share the location, the property need, and the service that seems closest.</p></div></li>
          <li><span>02</span><div><strong>Walk the property.</strong><p>Review the site context and identify the work that needs a closer conversation.</p></div></li>
          <li><span>03</span><div><strong>Confirm the next step.</strong><p>Align on scope, timing, availability, and the right service path for the property.</p></div></li>
        </ol>
      </section>

      <section className="aps-editorial-section aps-audience-section">
        <div>
          <p className="eyebrow">Who APS helps</p>
          <h2>Built around real property responsibilities.</h2>
          <p>APS works with people responsible for keeping grounds, access areas, structures, and outdoor spaces maintained and usable.</p>
        </div>
        <div className="aps-audience-list">
          {propertyTypes.slice(0, 5).map((type) => (
            <div key={type.label}><strong>{type.label}</strong><span>{type.status}</span></div>
          ))}
        </div>
      </section>

      <section className="aps-work-section">
        <div className="aps-work-heading">
          <div><p className="eyebrow">Work in the field</p><h2>Property work, seen clearly.</h2></div>
          <p>Approved APS imagery across commercial exteriors, landscaping, winter operations, pavement, and building maintenance.</p>
        </div>
        <div className="aps-work-mosaic">
          {featuredWork.map((asset, index) => (
            <figure key={asset.id} className={index === 0 ? "aps-work-feature" : undefined}>
              <div>{asset.src && asset.status === "approved" ? <Image src={asset.src} alt={asset.alt} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 66vw" : "(max-width: 800px) 100vw, 34vw"} /> : null}</div>
              <figcaption><span>0{index + 1}</span><strong>{asset.title}</strong></figcaption>
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
          {serviceAreas.map((area, index) => <span key={area}><small>{String(index + 1).padStart(2, "0")}</small>{area}</span>)}
        </div>
      </section>

      <CTASection title="Walk the property. Clarify the work." body="Tell APS what is happening, where the property is located, and which service seems closest." />
    </>
  );
}
