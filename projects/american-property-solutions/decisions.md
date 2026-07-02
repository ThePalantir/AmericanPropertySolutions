# Decisions

## Summary

This decision log captures pilot-phase choices made from the intake, audit, discovery brief, and sitemap work. These are working decisions for the APS pilot concept, not final client-approved launch decisions unless explicitly marked approved.

## Inputs Reviewed

- `AGENTS.md`
- `README.md`
- `agents/00-orchestrator.md`
- `agents/01-discovery.md`
- `agents/02-current-site-audit.md`
- `agents/03-site-architecture.md`
- `projects/american-property-solutions/intake.md`
- Current public APS website
- First-phase deliverables created in this run:
  - `current-site-audit.md`
  - `brief.md`
  - `sitemap.md`
  - `open-questions.md`

## Confirmed Facts

- APS is the current pilot client.
- The pilot website is `https://aps-pa.com/`.
- The current client project folder is `projects/american-property-solutions/`.
- Pilot v1 requires structured deliverables including intake, audit, brief, sitemap, homepage copy, SEO package, design spec, pitch summary, open questions, and decisions.
- The user requested this phase to stop after audit, brief, sitemap, open questions, and decisions.

## Observations

- Several important choices can be made safely as pilot direction without becoming public claims.
- Final sitemap, public copy, deployment, DNS, analytics changes, and public trust claims all require human approval.
- The current site's strongest practical improvement is clearer organization, not simply prettier visuals.

## Decisions Log

| Date | Decision | Status | Rationale | Approval Needed |
|---|---|---|---|---|
| 2026-07-02 | Run only the first phase: audit, brief, sitemap, open questions, and decisions. | Working decision | Matches user request and avoids premature homepage copy. | No |
| 2026-07-02 | Do not produce homepage copy in this phase. | Working decision | User explicitly asked to stop before homepage copy. | No |
| 2026-07-02 | Treat the sitemap as proposed, not final. | Working decision | AGENTS.md requires human approval before final sitemap. | Yes, before final sitemap |
| 2026-07-02 | Use year-round property maintenance as the organizing concept for the pilot. | Working decision | Supported by current site language and intake hypothesis. | Yes, before final public copy |
| 2026-07-02 | Lead the strategy with commercial property maintenance while preserving residential as an assumption to validate. | Working decision | Current site references commercial properties, but residential-only or mixed-service priority is not fully confirmed. | Yes |
| 2026-07-02 | Group services into five core buckets: Snow & Ice Management, Parking Lot Maintenance, Excavation & Sitework, Landscaping & Hardscaping, Building Maintenance & Repairs. | Working decision | Reduces service clutter while preserving publicly listed services. | Yes, before final sitemap |
| 2026-07-02 | Do not recommend location pages yet. | Working decision | Service areas are broad and not validated enough for low-risk location pages. | Yes, if location pages are later proposed |
| 2026-07-02 | Do not reuse testimonials, trust badges, memberships, awards, certifications, guarantees, or years-of-experience claims as final public claims until approved. | Required rule | AGENTS.md requires approval for these public claims. | Yes |
| 2026-07-02 | Keep Careers and Service Partner Network secondary for pilot v1. | Working decision | The pilot goal is a sales/conversion concept for the owner conversation. | Yes, if included publicly |
| 2026-07-02 | Standardize pilot CTAs around phone calls and quote requests. | Working decision | Intake states the main website goal is calls, quote requests, and contact form submissions. | Yes, before final public copy |

## Assumptions

- The owner conversation will benefit most from a clear before-and-after concept rather than a comprehensive enterprise website plan.
- APS can validate service priorities and trust claims quickly after seeing the first-phase direction.
- The demo can use placeholders or "pending approval" notes internally for trust signals and photos.

## Recommendations

- Review `open-questions.md` with Nina/client context before moving into homepage copy.
- Approve or revise the proposed sitemap before copywriting.
- Decide whether the pilot demo should visibly emphasize snow, parking lots, or full property maintenance first.
- Keep the next phase focused on homepage copy, SEO package, design spec, and pitch summary only after high-priority questions are addressed or intentionally deferred.

## Open Questions

- Which working decisions above should become approved client decisions?
- Which decisions should be changed before homepage copy begins?
- Should commercial property maintenance remain the lead positioning?
- Should APS approve the five service buckets as the first sitemap structure?

## Handoff Notes for the Next Agent

- Orchestrator Agent should use this log to prevent accidental scope drift into final copy or build work.
- Copywriting Agent should wait for approval or explicit pilot-only permission before writing homepage copy.
- SEO Agent should treat service-area and trust-signal decisions as unresolved.
- Design Agent can use the working sitemap for layout planning only after sitemap direction is approved for the pilot demo.
