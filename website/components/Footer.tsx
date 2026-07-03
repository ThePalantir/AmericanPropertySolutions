import Image from "next/image";
import Link from "next/link";
import { business, logoAsset, navItems, serviceCatalog, validationNotes } from "../lib/siteData";

export function Footer() {
  const hasApprovedLogo = Boolean(logoAsset.src && logoAsset.status === "approved");

  return (
    <footer className="site-footer">
      <div className="footer-grid expanded-footer-grid">
        <div>
          <div className="footer-brand">
            {hasApprovedLogo && logoAsset.src ? (
              <span className="footer-logo" aria-hidden="true">
                <Image src={logoAsset.src} alt="" fill sizes="150px" />
              </span>
            ) : null}
            <p className="eyebrow">American Property Solutions</p>
          </div>
          <h2>Property maintenance demo concept</h2>
          <p>
            A commercial-first service structure for APS property maintenance,
            snow and ice, parking lots, concrete, sitework, landscaping,
            building repairs, remodeling, decks, patios, and hardscapes.
          </p>
        </div>
        <div>
          <h3>Navigation</h3>
          <ul className="footer-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul className="footer-list footer-service-list">
            {serviceCatalog.slice(0, 9).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer-list">
            <li>
              <a href={business.phoneHref}>Call {business.phone}</a>
            </li>
            <li>{business.paAddress}</li>
            <li>{business.nyAddress}</li>
            <li>{business.hours}</li>
          </ul>
        </div>
      </div>
      <div className="footer-note">
        {validationNotes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </div>
    </footer>
  );
}
