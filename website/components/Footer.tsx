import Image from "next/image";
import Link from "next/link";
import { business, logoAsset, navItems, serviceCatalog } from "../lib/commercialData";

export function Footer() {
  const hasApprovedLogo = Boolean(logoAsset.src && logoAsset.status === "approved");

  return (
    <footer className="site-footer">
      <div className="footer-grid expanded-footer-grid">
        <div>
          <div className="footer-brand">
            {hasApprovedLogo && logoAsset.src ? (
              <span className="footer-logo" aria-hidden="true">
                <Image src={logoAsset.src} alt="" fill sizes="84px" />
              </span>
            ) : null}
            <p className="eyebrow">American Property Solutions</p>
          </div>
          <h2>Commercial exterior facilities maintenance</h2>
          <p>
            One commercial relationship for exterior maintenance, concrete,
            site work, drainage, improvements, repairs, and seasonal needs.
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
        <span>Walnutport, PA</span>
        <span>Call 610-760-0600 to discuss a commercial property.</span>
      </div>
    </footer>
  );
}
