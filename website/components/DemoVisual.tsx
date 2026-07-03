import Image from "next/image";
import type { VisualAsset } from "../lib/siteData";

type DemoVisualProps = {
  asset?: VisualAsset;
  label?: string;
  variant?: "property" | "services" | "contact";
};

export function DemoVisual({ asset, label, variant = "property" }: DemoVisualProps) {
  const title = asset?.title ?? "APS visual pending";
  const alt = asset?.alt ?? label ?? "APS visual asset pending";
  const hasApprovedImage = Boolean(asset?.src && asset.status === "approved");
  const status = asset?.status === "approved" ? "Service visual" : "Visual pending";

  return (
    <div className={`demo-visual demo-visual-${variant}`} role="img" aria-label={alt}>
      {hasApprovedImage && asset?.src ? (
        <Image src={asset.src} alt="" fill sizes="(max-width: 1040px) 100vw, 40vw" />
      ) : (
        <>
          <div className="visual-sky" />
          <div className="visual-building">
            <span />
            <span />
            <span />
          </div>
          <div className="visual-yard" />
        </>
      )}
      <div className="visual-panel">
        <strong>{title}</strong>
        <small>{status}</small>
      </div>
    </div>
  );
}
