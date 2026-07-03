import Image from "next/image";
import Link from "next/link";
import { business, logoAsset, navItems, serviceGroups } from "../lib/siteData";

export function Header() {
  const hasApprovedLogo = Boolean(logoAsset.src && logoAsset.status === "approved");

  return (
    <header className="site-header">
      <div className="demo-ribbon">{business.demoNote}</div>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="American Property Solutions home">
          {hasApprovedLogo && logoAsset.src ? (
            <span className="brand-logo" aria-hidden="true">
              <Image src={logoAsset.src} alt="" fill sizes="142px" priority />
            </span>
          ) : (
            <span className="brand-mark">APS</span>
          )}
          <span>
            <strong>American Property Solutions</strong>
            <small>Commercial property maintenance</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link className="button button-secondary" href="/services">
            {serviceGroups.length} Service Groups
          </Link>
          <Link className="button button-primary" href="/contact">
            Request a Property Walkthrough
          </Link>
        </div>
      </div>
    </header>
  );
}
