import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../components/CTASection";
import { DemoVisual } from "../../components/DemoVisual";
import { ServiceCard } from "../../components/ServiceCard";
import { serviceGroups, serviceOverviewAsset, servicePriority, validationNotes } from "../../lib/siteData";

export const metadata: Metadata = {
  title: "Property Maintenance Services",
  description:
    "Explore the APS property maintenance service structure for building maintenance, seasonal snow, landscaping, hardscaping, sitework, paving, concrete, and line striping."
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Services</p>
          <h1>Property Maintenance Services</h1>
          <p className="lead">
            A clearer service page helps visitors understand the work APS
            publicly lists without turning the site into a long contractor
            directory.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Request a Property Walkthrough
            </Link>
            <Link className="button button-secondary" href="/services/property-building-maintenance">
              View Flagship Service
            </Link>
          </div>
        </div>
        <DemoVisual asset={serviceOverviewAsset} variant="services" />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Service priority</p>
          <h2>Service Order for Approval and Validation</h2>
          <p>
            This list follows the current planning direction. Wording for
            Stacking and Hauling plus Line Striping should be validated before
            final public copy.
          </p>
        </div>
        <ol className="priority-list">
          {servicePriority.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Service paths</p>
          <h2>Grouped for Scanning, Routing, and Future SEO</h2>
        </div>
        <div className="card-grid">
          {serviceGroups.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section notes-panel">
        <p className="eyebrow">Approval notes</p>
        <h2>Claims That Stay Out Until Approved</h2>
        <ul className="plain-list">
          {validationNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <CTASection
        title="Have a property issue that spans more than one service?"
        body="The walkthrough path lets a visitor choose the closest service interest or select multiple needs."
      />
    </>
  );
}

