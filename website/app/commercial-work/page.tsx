import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "../../components/CTASection";
import { galleryAssets, serviceOverviewAsset } from "../../lib/commercialData";
import { DemoVisual } from "../../components/DemoVisual";

export const metadata: Metadata = {
  title: "Commercial Work & Facility Capabilities",
  description:
    "View APS commercial exterior, grounds, pavement, winter, and facility-maintenance imagery, then discuss the needs at your property.",
  alternates: { canonical: "/commercial-work" }
};

export default function CommercialWorkPage() {
  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Commercial work</p>
          <h1>Facility Needs Seen in the Field</h1>
          <p className="lead">
            APS supports commercial exterior maintenance, site work, repairs,
            improvements, and seasonal needs. These existing images show the
            range of property contexts behind that conversation.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Discuss a Similar Facility Need
            </Link>
            <Link className="button button-secondary" href="/services">
              View Commercial Services
            </Link>
          </div>
        </div>
        <DemoVisual asset={serviceOverviewAsset} variant="services" />
      </section>

      <section className="section gallery-section">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Existing APS imagery</p>
          <h2>Commercial Property Work Across the Year</h2>
          <p>
            Property-specific scope, timing, and comparable examples can be
            discussed during a walkthrough. No unsupported project outcomes or
            client identities are presented here.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryAssets.map((asset) => (
            <figure className="gallery-placeholder" key={asset.id}>
              <span className="gallery-image">
                {asset.src && asset.status === "approved" ? (
                  <Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 720px) 100vw, 33vw" />
                ) : null}
              </span>
              <figcaption className="gallery-title">{asset.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection
        title="Discuss the work at your commercial property."
        body="Share the facility location, current need, and timing so APS can identify the appropriate next conversation."
      />
    </>
  );
}

