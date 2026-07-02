import Link from "next/link";
import { business } from "../lib/siteData";

type CTASectionProps = {
  title?: string;
  body?: string;
};

export function CTASection({
  title = "Need property maintenance help?",
  body = "Start with a direct conversation about the property, the service needed, and the best next step."
}: CTASectionProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div>
        <p className="eyebrow">Next step</p>
        <h2 id="cta-heading">{title}</h2>
        <p>{body}</p>
      </div>
      <div className="cta-actions">
        <Link className="button button-primary" href="/contact">
          Request a Quote
        </Link>
        <a className="button button-secondary dark" href={business.phoneHref}>
          Call {business.phone}
        </a>
      </div>
    </section>
  );
}
