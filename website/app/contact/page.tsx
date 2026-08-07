import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { DemoVisual } from "../../components/DemoVisual";
import { business, contactAsset } from "../../lib/commercialData";

export const metadata: Metadata = {
  title: "Request Commercial Service",
  description:
    "Call 610-760-0600 or request a walkthrough to discuss commercial exterior facilities maintenance with American Property Solutions.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section compact-hero">
        <div>
          <p className="eyebrow">Commercial property contact</p>
          <h1>Discuss Your Facility Needs</h1>
          <p className="lead">
            Call APS directly or request a walkthrough to start a practical
            conversation about your commercial property or facility.
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
          <p className="eyebrow">Commercial walkthrough request</p>
          <h2>Request a Property Walkthrough</h2>
          <p>
            Share the facility location, commercial service need, and best contact
            details so APS can route the request to the right conversation.
          </p>
          <ContactForm />
          <p className="small-note">
            Looking for residential services? APS is now focused exclusively on
            commercial properties and facilities. While we no longer perform
            homeowner projects, we are happy to recommend a trusted local
            contractor when possible.
          </p>
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
            Ask about commercial service availability and the best next step
            for your facility.
          </p>
        </aside>
      </section>
    </>
  );
}
