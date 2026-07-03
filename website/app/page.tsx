import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { DemoVisual } from "../components/DemoVisual";
import { ServiceCard } from "../components/ServiceCard";
import {
  galleryAssets,
  heroAsset,
  propertyTypes,
  serviceAreas,
  serviceCatalog,
  serviceGroups,
  trustBarItems
} from "../lib/siteData";

export const metadata: Metadata = {
  title: "Commercial Property Maintenance in Lehigh Valley",
  description:
    "American Property Solutions commercial property maintenance concept for the Lehigh Valley, with complete four-season service organization and a property walkthrough path."
};

const featuredServices = serviceCatalog.slice(0, 6);

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
            The expanded demo keeps the premium visual direction while making
            the service structure more complete: grounds, snow, parking lots,
            concrete, sitework, building repairs, remodeling, decks, patios, and
            partner-supported seasonal operations.
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
            Walnutport-based APS concept serving source-derived Lehigh Valley
            and Pennsylvania service-area references. Final service-area
            language requires APS approval.
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
          <p className="eyebrow">Complete property maintenance services</p>
          <h2>One Service Hub Instead of a Scattered Contractor List</h2>
          <p>
            The old site includes a wide range of useful APS services, but the
            content is spread across repetitive pages. This homepage now shows
            the breadth without becoming a giant encyclopedia; each service path
            links to a fuller detail page.
          </p>
        </div>
        <div className="commercial-card-grid">
          {serviceGroups.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="service-mosaic section" aria-labelledby="service-mosaic-heading">
        <div className="section-heading wide-heading">
          <p className="eyebrow on-dark">Service directory preview</p>
          <h2 id="service-mosaic-heading">The Core APS Service Paths</h2>
          <p>
            The demo organizes APS around clear customer problems: maintaining
            grounds, keeping lots open, repairing buildings, improving outdoor
            spaces, and coordinating seasonal property needs.
          </p>
        </div>
        <div className="mosaic-grid">
          {featuredServices.map((service) => (
            <Link className="mosaic-tile" href={`/services/${service.slug}`} key={service.slug}>
              <span>{service.eyebrow}</span>
              <strong>{service.title}</strong>
              <small>{service.summary}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="one-call-band section">
        <div>
          <p className="eyebrow on-dark">One call, full property coverage</p>
          <h2>Built for Four Seasons, Not One-Off Service Searches</h2>
          <p>
            APS is strongest when the site presents property maintenance as an
            operational system: grounds in warm months, snow planning in winter,
            pavement and concrete when access needs attention, and building
            repairs when interior or facility needs appear.
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
          <p className="eyebrow">Property types</p>
          <h2>Commercial-First, With Service Scope to Validate</h2>
          <p>
            Commercial property language is supported by the current APS site.
            More specific property-type examples are source-derived or audience
            assumptions and remain approval-needed before public launch.
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
          <p className="eyebrow">Approved local visuals</p>
          <h2>APS Photo Slots That Support the Service Story</h2>
          <p>
            The demo uses local APS assets only. Badge, rating, and affiliation
            graphics remain out of public rendering until APS validates exact
            claims and usage rules.
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
              <small>{asset.status === "approved" ? "Approved APS photo" : "Photo pending APS approval"}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="section service-area commercial-area">
        <div>
          <p className="eyebrow">Regional service coverage</p>
          <h2>Source-Derived Lehigh Valley and Regional References</h2>
          <p>
            The current APS site references communities and counties across the
            Lehigh Valley and surrounding Pennsylvania areas. The demo keeps the
            list readable and marks final territory wording for approval.
          </p>
          <Link className="text-link" href="/contact">
            Ask About Service in Your Area
          </Link>
        </div>
        <div className="area-list" aria-label="Source-derived service areas requiring final approval">
          {serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <CTASection
        title="Request a property walkthrough."
        body="Use the walkthrough path to start a practical conversation about the site, the service mix, and the best next step."
      />
    </>
  );
}


