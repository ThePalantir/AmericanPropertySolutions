import Link from "next/link";
import { business, navItems } from "../lib/siteData";

export function Header() {
  return (
    <header className="site-header">
      <div className="demo-ribbon">{business.demoNote}</div>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="American Property Solutions home">
          <span className="brand-mark">APS</span>
          <span>
            <strong>American Property Solutions</strong>
            <small>Demo concept</small>
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
          <a className="button button-secondary" href={business.phoneHref}>
            Call {business.phone}
          </a>
          <Link className="button button-primary" href="/contact">
            Request a Property Walkthrough
          </Link>
        </div>
      </div>
    </header>
  );
}

