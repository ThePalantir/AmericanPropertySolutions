type DemoVisualProps = {
  label: string;
  variant?: "property" | "services" | "contact";
};

export function DemoVisual({ label, variant = "property" }: DemoVisualProps) {
  return (
    <div className={`demo-visual demo-visual-${variant}`} role="img" aria-label={label}>
      <div className="visual-sky" />
      <div className="visual-building">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-yard" />
      <div className="visual-panel">
        <strong>Demo-only visual placeholder</strong>
        <small>{label}</small>
      </div>
    </div>
  );
}
