import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WeatherWidget } from "../components/WeatherWidget";
import { business, serviceAreas, snowPartner } from "../lib/commercialData";

export const metadata: Metadata = {
  title: "Commercial Exterior Facilities Maintenance",
  description: "Year-round exterior maintenance, concrete, drainage, site improvements and repair support for commercial properties and facilities.",
  alternates: { canonical: "/" }
};

const capabilities = [
  { number: "1", title: "Exterior facilities maintenance", detail: "Grounds, access areas and recurring upkeep, considered together.", href: "/services/exterior-facilities-maintenance" },
  { number: "2", title: "Concrete & site work", detail: "Flatwork, sidewalks, curbing and preparation for exterior improvements.", href: "/services/commercial-concrete-site-work" },
  { number: "3", title: "Excavation, grading & drainage", detail: "Water, elevations and site preparation that affect how the property works.", href: "/services/excavation-grading-drainage" },
  { number: "4", title: "Property improvements", detail: "Commercial improvement projects connected to the surrounding site.", href: "/services/commercial-property-improvements" },
  { number: "5", title: "Ongoing repairs & maintenance", detail: "A starting point for the smaller issues that build up around a facility.", href: "/services/ongoing-repair-maintenance" }
];

export default function HomePage() {
  return (
    <div className="aps-home">
      <section className="aps-new-hero" aria-labelledby="home-title">
        <div className="aps-hero-grid">
          <div className="aps-hero-message">
            <p className="aps-kicker">Commercial exterior facilities maintenance</p>
            <h1 id="home-title">Your property.<br />Every season.<br /><em>One point of contact.</em></h1>
            <p className="aps-hero-description">Exterior maintenance, concrete, drainage, site improvements and repairs. Bring your commercial property needs together with American Property Solutions.</p>
            <div className="aps-action-row">
              <Link className="aps-primary-action" href="/contact">Request a walkthrough <span aria-hidden="true">↗</span></Link>
              <a className="aps-phone-link" href={business.phoneHref}>Call {business.phone}</a>
            </div>
            <p className="aps-hero-footnote">For facility managers, property teams and commercial owners.</p>
          </div>
          <figure className="aps-hero-figure">
            <Image src="/illustrative/commercial-facility-concept-v1.webp" alt="AI-generated illustration of a commercial facility with maintained grounds, concrete walkway and drainage" fill priority sizes="(max-width: 900px) 100vw, 58vw" />
            <div className="aps-hero-weather"><WeatherWidget /></div>
            <figcaption>AI-generated property illustration · not an APS project</figcaption>
          </figure>
        </div>
        <div className="aps-hero-bottom"><span>American Property Solutions</span><strong>One call does it all.</strong><Link href="#capabilities">Explore our capabilities <span aria-hidden="true">↓</span></Link></div>
      </section>

      <section className="aps-home-section aps-capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div className="aps-section-intro">
          <div><p className="aps-kicker">The work around your property</p><h2 id="capabilities-title">Every part of the site.<br />A clearer way forward.</h2></div>
          <p>Start with a maintenance need or a defined project. APS reviews the site, the work and the timing to help establish the next step.</p>
        </div>
        <div className="aps-capability-grid">
          <Link className="aps-featured-capability" href={capabilities[0].href}>
            <span className="aps-card-top"><span>1 / Year-round property support</span><span aria-hidden="true">↗</span></span>
            <h3>Exterior facilities<br />maintenance</h3>
            <p>A familiar starting point for connected maintenance, repairs and improvements across the property.</p>
            <span className="aps-card-link">Explore maintenance <span aria-hidden="true">→</span></span>
          </Link>
          <div className="aps-project-capabilities">
            {capabilities.slice(1).map((item) => <Link key={item.href} href={item.href}>
              <span className="aps-service-number" aria-hidden="true">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="aps-service-direction" aria-hidden="true">↗</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="aps-property-story" aria-labelledby="property-story-title">
        <figure><Image src="/approved-aps-assets/corporate-building-exterior-2.jpg" alt="Office building exterior, landscaped grounds and access areas" fill sizes="(max-width: 900px) 100vw, 50vw" /><figcaption>Commercial exterior context · existing image library</figcaption></figure>
        <div className="aps-story-copy">
          <p className="aps-kicker">The whole property matters</p>
          <h2 id="property-story-title">The work is connected.<br />Your plan should be, too.</h2>
          <p>Drainage affects pavement. Site preparation affects concrete. Seasonal upkeep affects entrances, sidewalks and access.</p>
          <p>Review those needs together with a team that can look beyond a single task.</p>
          <ul className="aps-property-points"><li>Recurring maintenance and defined projects</li><li>Site needs reviewed in context</li><li>Scope and availability confirmed for your property</li></ul>
          <Link className="aps-inline-link" href="/services/exterior-facilities-maintenance">How exterior facilities maintenance works <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="aps-home-section aps-how-it-works" aria-labelledby="process-title">
        <div className="aps-section-intro"><div><p className="aps-kicker">Start with the property</p><h2 id="process-title">A straightforward next step.</h2></div><p>You do not need to have the entire scope figured out before getting in touch.</p></div>
        <ol className="aps-three-steps">
          <li><span>1</span><h3>Tell us what needs attention.</h3><p>Share your property location, the issue or project, and the timing you have in mind.</p></li>
          <li><span>2</span><h3>Review the property.</h3><p>Discuss the site and related needs to establish what the work involves.</p></li>
          <li><span>3</span><h3>Agree on the next step.</h3><p>Confirm scope, service availability and scheduling before work moves forward.</p></li>
        </ol>
      </section>

      <section className="aps-winter-section" aria-labelledby="winter-title">
        <div className="aps-winter-copy"><p className="aps-kicker">A dedicated winter operation</p><h2 id="winter-title">When winter comes,<br />bring in the snow team.</h2><p>American Snow &amp; Ice Solutions is the dedicated commercial snow and ice operation alongside APS. Explore winter-service planning, plowing, deicing and walkway needs on its own website.</p><span className="aps-winter-brand">{snowPartner.name}</span><a className="aps-primary-action" href={snowPartner.href} target="_blank" rel="noopener noreferrer">Explore snow &amp; ice services <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>
        <figure><Image src="/approved-aps-assets/snow-plow-equipment-1.png" alt="Snow removal equipment in the existing image library" fill sizes="(max-width: 900px) 100vw, 50vw" /></figure>
      </section>

      <section className="aps-home-section aps-local-section" aria-labelledby="local-title">
        <div><p className="aps-kicker">Based in Walnutport, Pennsylvania</p><h2 id="local-title">Let’s look at<br />your property.</h2><p>Ask about your commercial property in the Lehigh Valley or surrounding communities. Availability depends on location, service and timing.</p><div className="aps-location-tags">{serviceAreas.slice(0, 5).map((area) => <span key={area}>{area}</span>)}</div></div>
        <div className="aps-contact-panel"><p className="aps-kicker">Your next step</p><h3>What needs attention?</h3><p>Tell APS where the property is and what you would like to address.</p><Link className="aps-primary-action" href="/contact">Request a property walkthrough <span aria-hidden="true">↗</span></Link><a className="aps-contact-number" href={business.phoneHref}>{business.phone}</a><span className="aps-office-hours">Office hours: {business.hours}</span></div>
      </section>
    </div>
  );
}
