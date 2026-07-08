import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { CinematicHero } from "../components/CinematicHero";
import { ServiceCard } from "../components/ServiceCard";
import {
  galleryAssets,
  homeHeroSlides,
  propertyTypes,
  serviceAreas,
  serviceGroups,
  trustBarItems
} from "../lib/siteData";

export const metadata: Metadata = {
  title: "Commercial Property Maintenance in Lehigh Valley",
  description:
    "American Property Solutions provides property maintenance, landscaping, snow and ice, parking lot, concrete, sitework, building repair, remodeling, deck, patio, and hardscape services."
};

export default function HomePage() {
  return (
    <>
      <CinematicHero slides={homeHeroSlides}>
        <div className="hero-copy">
          <p className="eyebrow on-dark">Commercial property maintenance</p>
          <h1>Four-Season Commercial Property Maintenance</h1>
          <p className="lead">
            American Property Solutions helps property managers, facility
            teams, local businesses, and owners maintain exterior spaces,
            parking areas, site access, and building needs through every
            season.
          </p>
          <p>
            Start with APS for lawn and landscape work, snow and ice,
            parking lot maintenance, concrete, excavation, building
            maintenance, remodeling, decks, patios, and hardscapes.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Property Walkthrough
            </Link>
            <Link className="button button-secondary dark" href="/services">
              Explore Services
            </Link>
          </div>
          <p className="location-note on-dark-note">
            Start with a walkthrough so APS can match the property need to the right service path.
          </p>
        </div>
      </CinematicHero>

      <section className="trust-bar" aria-label="Company highlights">
        {trustBarItems.map((item) => (
          <article key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </article>
        ))}
      </section>

      <section className="section services-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Services</p>
          <h2>Property Services Organized Around the Work You Need</h2>
          <p>
            Choose the closest service family below. APS can confirm the
            scope, timing, location, and next step during a property
            walkthrough.
          </p>
        </div>
        <div className="commercial-card-grid">
          {serviceGroups.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="one-call-band section">
        <div>
          <p className="eyebrow on-dark">One call, full property coverage</p>
          <h2>Support for the Work That Keeps Properties Moving</h2>
          <p>
            Property maintenance rarely lives in one category. A site may
            need landscape cleanup, pavement repair, drainage, concrete,
            snow planning, or building repairs in the same season. APS keeps
            those conversations connected.
          </p>
          <Link className="button button-primary" href="/services/property-maintenance">
            View Property Maintenance
          </Link>
        </div>
        <div className="ops-panel" aria-label="Four-season maintenance priorities">
          <span>Grounds</span>
          <span>Snow</span>
          <span>Lots</span>
          <span>Sitework</span>
          <span>Concrete</span>
          <span>Repairs</span>
        </div>
      </section>

      <section className="section property-types-section">
        <div className="section-heading">
          <p className="eyebrow">Who APS helps</p>
          <h2>Support for Commercial Sites and Exterior Property Projects</h2>
          <p>
            APS works with property managers, business owners, facility
            teams, and homeowners who need help maintaining grounds, access
            areas, structures, and outdoor spaces.
          </p>
        </div>
        <div className="property-grid">
          {propertyTypes.map((type) => (
            <article key={type.label}>
              <strong>{type.label}</strong>
              <span>{type.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">APS work photos</p>
          <h2>Property Work in the Field</h2>
          <p>
            Photos from APS service categories show the range of exterior,
            pavement, snow, building maintenance, and site-support work
            customers can ask about.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryAssets.map((asset) => (
            <div
              className="gallery-placeholder"
              key={asset.id}
              role="img"
              aria-label={asset.alt}
              data-has-image={asset.src && asset.status === "approved" ? "true" : "false"}
            >
              {asset.src && asset.status === "approved" ? (
                <Image
                  src={asset.src}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1040px) 50vw, 33vw"
                />
              ) : null}
              <span>{asset.title}</span>
              <small>{asset.status === "approved" ? "APS service photo" : "Photo pending"}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section service-area commercial-area">
        <div>
          <p className="eyebrow">Service areas</p>
          <h2>Ask About Service Availability in Your Area</h2>
          <p>
            APS is based in Walnutport and lists Lehigh Valley-area
            communities and nearby counties as service-area references.
            Availability can depend on the property location, service type,
            and timing.
          </p>
          <Link className="text-link" href="/contact">
            Ask About Service in Your Area
          </Link>
        </div>
        <div className="area-list" aria-label="Service areas to confirm during walkthrough">
          {serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <CTASection
        title="Request a property walkthrough."
        body="Tell APS what is happening at the property, where it is located, and which service path seems closest."
      />
    </>
  );
}
