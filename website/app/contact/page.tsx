import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { DemoVisual } from "../../components/DemoVisual";
import { business } from "../../lib/siteData";

export const metadata: Metadata = {
  title: "Contact American Property Solutions",
  description:
    "Call 610-760-0600 or use the safe demo quote form for American Property Solutions property maintenance services."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Contact American Property Solutions</h1>
          <p className="lead">
            Make the phone number and quote request path obvious. This form is
            a safe mock interaction for the demo only.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <a className="button button-secondary" href="#quote-form">
              Request a Quote
            </a>
          </div>
        </div>
        <DemoVisual label="Contact and quote path placeholder for APS demo" variant="contact" />
      </section>

      <section className="section contact-layout">
        <div id="quote-form" className="form-panel">
          <p className="eyebrow">Safe mock form</p>
          <h2>Request a Property Maintenance Quote</h2>
          <p>
            Required fields, loading, success, and error states are included.
            No real email, CRM, API, or backend submission is connected.
          </p>
          <ContactForm />
        </div>
        <aside className="contact-card" aria-label="Public APS contact details">
          <p className="eyebrow">Public contact details</p>
          <h2>Call or confirm service fit</h2>
          <dl>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={business.phoneHref}>{business.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Pennsylvania Location</dt>
              <dd>{business.paAddress}</dd>
            </div>
            <div>
              <dt>New York Location</dt>
              <dd>{business.nyAddress}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{business.hours}</dd>
            </div>
          </dl>
          <p className="small-note">
            Locations, service areas, and final quote handling should be
            confirmed with APS before public launch.
          </p>
        </aside>
      </section>
    </>
  );
}
