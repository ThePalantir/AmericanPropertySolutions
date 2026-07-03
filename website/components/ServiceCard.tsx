import Link from "next/link";

type ServiceCardProps = {
  title: string;
  eyebrow: string;
  summary: string;
  items: string[];
  href: string;
};

export function ServiceCard({
  title,
  eyebrow,
  summary,
  items,
  href
}: ServiceCardProps) {
  return (
    <Link className="service-card" href={href} aria-label={`View ${title} services`}>
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="text-link" aria-hidden="true">
        View service path
      </span>
    </Link>
  );
}
