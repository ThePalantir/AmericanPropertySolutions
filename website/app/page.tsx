import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { DemoVisual } from "../components/DemoVisual";
import { ServiceCard } from "../components/ServiceCard";
import {
  galleryAssets,
  heroAsset,
  managerReasons,
  propertyTypes,
  serviceAreas,
  serviceGroups,
  trustBarItems
} from "../lib/siteData";

export const metadata: Metadata = {
  title: "Commercial Property Maintenance in Lehigh Valley",
  description:
    "American Property Solutions commercial property maintenance concept for the Lehigh Valley, with four-season service organization and a property walkthrough path."
};

export default function HomePage() {
  return (
    <>
      <section className="commercial-hero section">
        <div className="hero-copy">
          <p className="eyebrow on-dark">Commercial property maintenance</p>
          <h1>Four-Season Commercial Property Maintenance for the Lehigh Valley and Eastern Pennsylvania</h1>
          <p className="lead">
            American Property Solutions is presented as a dependable regional
            maintenance partner for property managers, facility teams, local
            businesses, and owners responsible for keeping sites safe,
            accessible, and presentable year-round.
          </p>
          <p>
            The homepage uses the confirmed APS service mix to present one clear
            story: one call for grounds, snow, parking areas, sitework,
            concrete, building maintenance, and special projects.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Property Walkthrough
            </Link>
            <Link className="button button-secondary dark" href="/services">
              View Services
            </Link>
          </div>
          <p className="location-note on-dark-note">
            Walnutport-based APS concept serving publicly listed Lehigh Valley
            and Pennsylvania service areas. Final service-area language requires
            APS approval.
          </p>
        </div>
        <DemoVisual asset={heroAsset} variant="property" />
      </section>

      <section className="trust-bar" aria-label="Trust and positioning notes">
        {trustBarItems.map((item) => (
          <article key={item.label}>
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </article>
        ))}
      </section>

      <section className="section services-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Organized service lines</p>
          <h2>Commercial Maintenance Services Without the Scattered Contractor Feel</h2>
          <p>
            The homepage groups APS services the way a property manager or
            business owner would scan them: grounds, snow, parking areas,
            sitework, building maintenance, and special projects. Snow remains
            important and seasonal; Property & Building Maintenance remains the
            evergreen flagship path.
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
          <p className="eyebrow on-dark">One-call property maintenance</p>
          <h2>One Call for Four-Season Property Maintenance</h2>
          <p>
            The redesign positions APS around operational clarity: fewer vague
            service lists, stronger routing for walkthrough requests, and a
            homepage that quickly explains how APS can support exterior property
            needs through changing seasons.
          </p>
        </div>
        <div className="ops-panel" aria-label="Four-season maintenance priorities">
          <span>Grounds</span>
          <span>Snow</span>
          <span>Lots</span>
          <span>Sitework</span>
          <span>Concrete</span>
          <span>Facilities</span>
        </div>
      </section>

      <section className="section property-types-section">
        <div className="section-heading">
          <p className="eyebrow">Property types</p>
          <h2>Built for Commercial Decision-Makers</h2>
          <p>
            Commercial properties are supported by current site language. The
            additional property-type examples below are marked as audience
            direction until APS confirms they should appear as final public
            claims.
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
          <p className="eyebrow">Featured work</p>
          <h2>Approved Photo Slots for APS Work</h2>
          <p>
            These visual slots are ready for approved APS photos. Until then,
            the page uses styled placeholders without external images or
            invented project photography.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryAssets.map((asset) => (
            <div className="gallery-placeholder" key={asset.id} role="img" aria-label={asset.alt} data-has-image={asset.src && asset.status === "approved" ? "true" : "false"}>
              {asset.src && asset.status === "approved" ? (
                <Image
                  src={asset.src}
                  alt=""
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1040px) 50vw, 33vw"
                />
              ) : null}
              <span>{asset.title}</span>
              <small>{asset.status === "approved" ? "Approved APS photo" : "Photo pending APS approval"}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section manager-section">
        <div>
          <p className="eyebrow">Credibility without fake proof</p>
          <h2>Why Property Managers Choose APS</h2>
          <p>
            This section replaces unapproved testimonials with practical,
            validation-safe reasons the demo structure is stronger. It does not
            create reviews, ratings, awards, guarantees, certifications, or
            years-in-business claims.
          </p>
        </div>
        <ul className="check-list manager-list">
          {managerReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </section>

      <section className="section service-area commercial-area">
        <div>
          <p className="eyebrow">Local service area</p>
          <h2>Lehigh Valley and Publicly Listed Pennsylvania Areas</h2>
          <p>
            The demo keeps local SEO language natural and grounded in publicly
            listed APS locations and service-area references. It does not create
            location pages or unsupported coverage claims.
          </p>
          <Link className="text-link" href="/contact">
            Ask About Service in Your Area
          </Link>
        </div>
        <div className="area-list" aria-label="Publicly listed service areas">
          {serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <CTASection
        title="Request a property walkthrough."
        body="Use the walkthrough path to start a practical conversation about the site, the maintenance need, and the best next step."
      />
    </>
  );
}


