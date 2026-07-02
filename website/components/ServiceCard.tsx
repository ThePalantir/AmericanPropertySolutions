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
    <article className="service-card">
      <p className="eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="text-link" href={href}>
        View service path
      </Link>
    </article>
  );
}
