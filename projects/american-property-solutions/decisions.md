# Decisions

> **Status update — August 7, 2026:** The earlier mixed-market direction in this file is superseded by the APS leadership-approved commercial-only direction in [commercial-only-revision-plan.md](commercial-only-revision-plan.md).

## Summary

This decision log captures pilot-phase choices made from the intake, audit, discovery brief, sitemap, homepage copy, SEO package, design spec, and pitch summary work. These are working project decisions for the APS pilot concept, not final client-approved launch decisions unless explicitly marked approved.

## Inputs Reviewed

- `AGENTS.md`
- `README.md`
- `agents/00-orchestrator.md`
- `agents/01-discovery.md`
- `agents/02-current-site-audit.md`
- `agents/03-site-architecture.md`
- `projects/american-property-solutions/intake.md`
- `projects/american-property-solutions/current-site-audit.md`
- `projects/american-property-solutions/brief.md`
- `projects/american-property-solutions/sitemap.md`
- `projects/american-property-solutions/homepage-copy.md`
- `projects/american-property-solutions/seo-package.md`
- `projects/american-property-solutions/design-spec.md`
- `projects/american-property-solutions/pitch-summary.md`
- `projects/american-property-solutions/open-questions.md`

## Confirmed Facts

- APS is the current pilot client.
- The pilot website is `https://aps-pa.com/`.
- The current client project folder is `projects/american-property-solutions/`.
- Pilot v1 requires structured deliverables including intake, audit, brief, sitemap, homepage copy, SEO package, design spec, pitch summary, open questions, and decisions.
- Phase one produced audit, brief, sitemap, open questions, and decisions.
- Phase two produced homepage copy, SEO package, design spec, pitch summary, and updated open questions and decisions.
- The user explicitly instructed not to build the website yet.

## Observations

- Several important choices can be made safely as pilot direction without becoming public claims.
- Final sitemap, public copy, deployment, DNS, analytics changes, and public trust claims all require human approval.
- The current site's strongest practical improvement is clearer organization, not simply prettier visuals.
- Phase two now gives enough material to start an owner-facing conversation, but not enough to launch publicly without validation.

## Decisions Log

| Date | Decision | Status | Rationale | Approval Needed |
|---|---|---|---|---|
| 2026-07-02 | Run only the first phase: audit, brief, sitemap, open questions, and decisions. | Working decision | Matches original phase-one request and avoided premature homepage copy. | No |
| 2026-07-02 | Treat the sitemap as proposed, not final. | Working decision | AGENTS.md requires human approval before final sitemap. | Yes, before final sitemap |
| 2026-07-02 | Use year-round property maintenance as the organizing concept for the pilot. | Working decision | Supported by current site language and intake hypothesis. | Yes, before final public copy |
| 2026-07-02 | Lead the pilot strategy with commercial property maintenance while leaving residential audience scope unresolved until validated. | Working decision | Current site references commercial properties, but residential-only or mixed-service priority is not fully confirmed. | Yes |
| 2026-07-02 | Replace the original five-bucket service grouping with the updated Phase Three service priority led by Property & Building Maintenance. | Working decision | User corrected the demo direction so the first build emphasizes evergreen maintenance work while keeping seasonal and specialty services visible. | Yes, before final sitemap |
| 2026-07-02 | Do not recommend location pages yet. | Working decision | Service areas are broad and not validated enough for low-risk location pages. | Yes, if location pages are later proposed |
| 2026-07-02 | Do not reuse testimonials, trust badges, memberships, awards, certifications, guarantees, warranties, or years-of-experience claims as final public claims until approved. | Required rule | AGENTS.md requires approval for these public claims. | Yes |
| 2026-07-02 | Keep Careers and Service Partner Network secondary for pilot v1. | Working decision | The pilot goal is a sales/conversion concept for the owner conversation. | Yes, if included publicly |
| 2026-07-02 | Standardize pilot CTAs around phone calls and quote requests. | Working decision | Intake states the main website goal is calls, quote requests, and contact form submissions. | Yes, before final public copy |
| 2026-07-02 | Create draft homepage copy for the pilot but mark it as not final public copy. | Working decision | User requested stronger homepage copy; AGENTS.md requires approval before final public copy. | Yes, before final public copy |
| 2026-07-02 | Create an SEO package around page-specific intent rather than repeated keyword blocks. | Working decision | Supports local SEO cleanup and reduces credibility risk. | Yes, before launch metadata is final |
| 2026-07-02 | Keep location pages out of the phase-two SEO package. | Working decision | Service-area coverage is not validated enough for location-page strategy. | Yes, if revisited |
| 2026-07-02 | Create a Vercel demo design spec only, with no website build yet. | Working decision | User explicitly asked not to build the website yet. | Yes, before build starts |
| 2026-07-02 | Use real service imagery only if approved; otherwise keep visuals as placeholders for the demo. | Working decision | Avoids unsupported visual/trust implications. | Yes |
| 2026-07-02 | Create a concise pitch summary for Nina/the owner. | Working decision | Supports the pilot goal of starting a practical owner conversation. | No |
| 2026-07-02 | Use Property & Building Maintenance as the Phase Three flagship service page. | Working decision | User corrected the demo direction because snow plowing is seasonal and should not be the first flagship service page. | Yes, before final public copy |
| 2026-07-02 | Keep Snow & Ice / Emergency Snow Plow Contractor content as a seasonal supporting service. | Working decision | Snow remains important but should not lead the first demo build. | Yes, before final public copy |
| 2026-07-02 | Flag `Stacking and Hauling` and `Line Stripping` / `Line Striping` wording for client validation. | Working decision | User noted these labels may be uncertain and should be validated before final public copy. | Yes |

## Assumptions

- This section is retained to satisfy the standard deliverable format. Project assumptions that require validation are tracked in `open-questions.md`; the decision log above should be treated as the source for actual project decisions.

## Recommendations
- Review `pitch-summary.md` and `open-questions.md` before contacting Nina/the owner.
- Approve or revise the proposed sitemap before any build work.
- Use the updated service priority order before deciding hero imagery and service order.
- Confirm service areas before final SEO metadata or any location-page work.
- Keep the next phase focused on either approval gathering or a Vercel demo build, not production launch.

## Open Questions

- Which working decisions above should become approved client decisions?
- Which decisions should be changed before demo build begins?
- Is Property & Building Maintenance approved as the evergreen flagship for Phase Three?
- Should APS approve the updated service priority order and the Property & Building Maintenance flagship page?
- Is phase-two homepage copy approved for demo use?
- Is the design direction approved for demo build?

## Handoff Notes for the Next Agent

- Orchestrator Agent should use this log to prevent accidental scope drift into production launch planning.
- Build Agent should not start until the user explicitly approves building the Vercel demo.
- Copywriting Agent should treat homepage copy as draft until client validation.
- SEO Agent should treat service-area and trust-signal decisions as unresolved.
- Design Agent can use the working sitemap and design spec for layout planning after demo direction is approved.




