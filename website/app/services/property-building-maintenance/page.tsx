import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../../components/CTASection";
import { DemoVisual } from "../../../components/DemoVisual";
import { business } from "../../../lib/siteData";

export const metadata: Metadata = {
  title: "Property & Building Maintenance",
  description:
    "Demo flagship service page for APS property maintenance, building maintenance, repair support, stacking and hauling, and remodeling-related service needs pending client validation."
};

const maintenanceItems = [
  "Property Maintenance",
  "Building Maintenance",
  "Stacking and Hauling",
  "Remodeling Contractor"
];

const supportingItems = [
  "Seasonal snow support remains visible but secondary",
  "Landscaping, shrubs, sod, pavers, patios, and decks can support exterior upkeep",
  "Excavation, paving, concrete, sealcoating, and line striping remain grouped as related site services"
];

export default function PropertyBuildingMaintenancePage() {
  return (
    <>
      <section className="page-hero section">
        <div>
          <p className="eyebrow">Flagship demo service</p>
          <h1>Property & Building Maintenance</h1>
          <p className="lead">
            This page shows how APS can lead with evergreen property and
            building maintenance instead of making a seasonal snow page carry
            the first demo build.
          </p>
          <p>
            The copy is demo direction only. Specific repair, remodeling,
            stacking, and hauling wording should be validated with APS before
            final public use.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request Property Maintenance Help
            </Link>
            <a className="button button-secondary" href={business.phoneHref}>
              Call {business.phone}
            </a>
          </div>
        </div>
        <DemoVisual
          label="Property and building maintenance placeholder for APS demo"
          variant="property"
        />
      </section>

      <section className="section split-band">
        <div>
          <p className="eyebrow">What this page should clarify</p>
          <h2>Maintenance Work That Keeps a Property Usable</h2>
          <p>
            A focused flagship page gives property owners and managers one
            place to start for general property upkeep, repair support, hauling,
            and remodeling-related needs without inventing unapproved claims.
          </p>
        </div>
        <ul className="check-list">
          {maintenanceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Service fit</p>
          <h2>Use This Page as the Evergreen Service Anchor</h2>
          <p>
            The page should make the maintenance offer easier to evaluate
            quickly while linking visitors back to related seasonal and site
            services.
          </p>
        </div>
        <div className="feature-grid">
          <article>
            <h3>Property maintenance needs</h3>
            <p>
              Use practical language for exterior property upkeep, access,
              repair coordination, and ongoing maintenance needs.
            </p>
          </article>
          <article>
            <h3>Building maintenance needs</h3>
            <p>
              Present repair support and building-related service requests
              carefully, without overclaiming exact scopes that APS has not
              approved for final copy.
            </p>
          </article>
          <article>
            <h3>Hauling and remodeling scope</h3>
            <p>
              Keep Stacking and Hauling plus Remodeling Contractor visible, but
              mark the exact public wording and service scope for client
              validation.
            </p>
          </article>
        </div>
      </section>

      <section className="section notes-panel">
        <p className="eyebrow">Related support</p>
        <h2>Snow Stays Important, But Seasonal</h2>
        <ul className="plain-list">
          {supportingItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <CTASection
        title="Start with the property maintenance need."
        body="Tell APS what is happening at the property, where it is located, and which service path seems closest."
      />
    </>
  );
}
