import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { DemoVisual } from "../../components/DemoVisual";
import { business, contactAsset } from "../../lib/siteData";

export const metadata: Metadata = {
  title: "Contact American Property Solutions",
  description:
    "Call 610-760-0600 or use the walkthrough request form for American Property Solutions property maintenance services."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Contact American Property Solutions</h1>
          <p className="lead">
            Call APS directly or use the walkthrough request path to start a
            practical conversation about your property.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <a className="button button-secondary" href="#quote-form">
              Request a Property Walkthrough
            </a>
          </div>
        </div>
        <DemoVisual asset={contactAsset} variant="contact" />
      </section>

      <section className="section contact-layout">
        <div id="quote-form" className="form-panel">
          <p className="eyebrow">Walkthrough request</p>
          <h2>Request a Property Walkthrough</h2>
          <p>
            Share the property location, service need, and best contact details
            so APS can route the request to the right service conversation.
          </p>
          <ContactForm />
        </div>
        <aside className="contact-card" aria-label="Public APS contact details">
          <p className="eyebrow">Public contact details</p>
          <h2>Call or request a walkthrough</h2>
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
            Ask about service availability, scheduling, and the best next step
            for your property.
          </p>
        </aside>
      </section>
    </>
  );
}
