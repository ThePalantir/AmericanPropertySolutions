import Link from "next/link";
import { business, navItems, validationNotes } from "../lib/siteData";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <p className="eyebrow">American Property Solutions</p>
          <h2>Property maintenance demo concept</h2>
          <p>
            This demo keeps the focus on clearer service organization, visible
            phone and quote paths, and draft copy that still requires client
            approval before public launch.
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
