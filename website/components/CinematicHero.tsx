import Image from "next/image";
import type { ReactNode } from "react";
import type { VisualAsset } from "../lib/commercialData";

type CinematicHeroProps = {
  slides: VisualAsset[];
  children: ReactNode;
};

export function CinematicHero({ slides, children }: CinematicHeroProps) {
  const approvedSlides = slides.filter((slide) => slide.src && slide.status === "approved");

  return (
    <section className="commercial-hero cinematic-hero section" aria-label="American Property Solutions homepage hero">
      <div className="cinematic-hero-media" aria-hidden="true">
        {approvedSlides.map((slide, index) => (
          <div className="cinematic-hero-slide" key={slide.id}>
            <Image
              src={slide.src ?? ""}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="cinematic-hero-overlay" aria-hidden="true" />
      <div className="cinematic-hero-content">{children}</div>
    </section>
  );
}
