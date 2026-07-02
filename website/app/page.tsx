import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../components/CTASection";
import { DemoVisual } from "../components/DemoVisual";
import { ServiceCard } from "../components/ServiceCard";
import {
  audienceLabels,
  business,
  serviceAreas,
  serviceGroups,
  validationNotes
} from "../lib/siteData";

export const metadata: Metadata = {
  title: "Property Maintenance in Lehigh Valley",
  description:
    "Demo concept for American Property Solutions with clearer year-round property maintenance positioning, service paths, and quote actions."
};

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Property Maintenance in the Lehigh Valley</p>
          <h1>Year-Round Property Maintenance for Safer, Better-Kept Properties</h1>
          <p className="lead">
            American Property Solutions helps commercial properties, local
            businesses, property managers, and homeowners keep exterior spaces
            safe, functional, and maintained through every season.
          </p>
          <p>
            From property and building maintenance to hauling, remodeling,
            landscaping, hardscaping, excavation, paving, concrete, line
            striping, and seasonal snow plowing, APS gives property owners a
            practical place to start when maintenance needs require a clear
            next step.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Quote
            </Link>
            <a className="button button-secondary" href={business.phoneHref}>
              Call {business.phone}
            </a>
          </div>
          <p className="location-note">
            Serving the Lehigh Valley and surrounding publicly listed service
            areas from Walnutport, Pennsylvania.
          </p>
        </div>
        <DemoVisual
          label="Maintained commercial property exterior placeholder for APS demo"
          variant="property"
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Service clarity</p>
          <h2>One Property Maintenance Partner for the Work That Keeps a Site Moving</h2>
          <p>
            This demo organizes APS around service paths customers can scan
            quickly. Property & Building Maintenance leads because it is the
            evergreen flagship direction for Phase Three; snow remains visible
            as seasonal support.
          </p>
        </div>
        <div className="card-grid">
          {serviceGroups.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="split-band section">
        <div>
          <p className="eyebrow">Who APS helps</p>
          <h2>Built for Property Owners Who Need Clear Answers</h2>
          <p>
            The demo speaks to people responsible for keeping properties open,
            accessible, presentable, and maintained without making unsupported
            claims about credentials, awards, reviews, or guarantees.
          </p>
        </div>
        <ul className="check-list">
          {audienceLabels.map((audience) => (
            <li key={audience}>{audience}</li>
          ))}
        </ul>
      </section>

      <section className="section service-area">
        <div>
          <p className="eyebrow">Local context</p>
          <h2>Serving the Lehigh Valley and Surrounding Listed Areas</h2>
          <p>
            APS publicly lists service areas across the Lehigh Valley and
            surrounding Pennsylvania communities. Final service-area language
            should be confirmed by APS before public launch.
          </p>
        </div>
        <div className="area-list" aria-label="Publicly listed service areas">
          {serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="section trust-placeholder">
        <p className="eyebrow">Approval gate</p>
        <h2>Trust Signals Pending Approval</h2>
        <p>
          This demo intentionally omits final-looking testimonials, badges,
          certifications, awards, guarantees, warranties, and years-in-business
          claims. Approved photos or trust details can be added after APS
          validates them.
        </p>
        <ul className="plain-list">
          {validationNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
