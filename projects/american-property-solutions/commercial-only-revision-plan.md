# APS Commercial-Only Revision Plan

## Summary

APS leadership has approved a commercial-only direction. American Property Solutions should be positioned as a long-term Exterior Facilities Maintenance partner for commercial properties and facilities, using the professional value proposition “One call does it all.” American Snow & Ice Solutions remains a separate specialized website and is linked from APS as part of the year-round facilities story.

This document supersedes earlier mixed-market recommendations. The sitemap below remains a recommended sitemap until the required human approval gate is recorded.

## Inputs Reviewed

- APS leadership direction supplied August 7, 2026
- Current Next.js demo implementation under `website/`
- Existing APS project deliverables
- Existing public APS URLs and commercial service content
- Existing approved-image inventory
- American Snow & Ice Solutions public website: `https://americansnowandicesolutions.com/`

## Confirmed Facts

- APS is now focused exclusively on commercial properties and facilities.
- Residential and homeowner work is discontinued.
- Exterior Facilities Maintenance is the centerpiece.
- “One call does it all” is the approved relationship concept.
- APS and American Snow & Ice Solutions remain separate websites.
- APS may provide a residential contractor referral when possible, but this is customer courtesy rather than a service.
- Public APS contact information currently represented in the project is phone `610-760-0600`, Walnutport and Vestal addresses, and `M-F 9AM-4PM`.
- APS has existing public content supporting property maintenance, concrete, site work, excavation, drainage, parking-area work, building maintenance, and commercial snow and ice conversations.

## Observations

- The previous demo was commercially styled but still generated homeowner, deck, patio, outdoor-living, and generic remodeling paths through one shared service catalog.
- That catalog also controlled metadata, footer links, form options, related links, and generated routes, so the commercial shift required a coordinated replacement rather than isolated copy edits.
- The current asset set is strongest for commercial exteriors, grounds, pavement, winter operations, and building maintenance. Direct concrete, excavation, drainage, and fact-rich case-study imagery remains limited.
- The Phillipsburg relationship is a strong internal positioning model but should not be named publicly until APS approves facts and publication permission.

## Assumptions

- Commercial grounds support remains inside Exterior Facilities Maintenance only to the extent confirmed for a specific property.
- Commercial common-area and site-feature improvements may be discussed under Commercial Property Improvements, while residential decks, patios, and outdoor-living offers are retired.
- Exact recurring-contract terms, response commitments, service boundaries, and licensing-sensitive trade scopes remain unconfirmed.
- Existing public service-area references are retained only as availability prompts, not guarantees of coverage.

## Recommendations

### 1. Revised Recommended Sitemap

Primary navigation:

- `/` — Home
- `/services/exterior-facilities-maintenance` — flagship
- `/services` — Commercial Services
- `/commercial-work` — Commercial Work
- `/contact` — Contact / Commercial Walkthrough Request

Commercial service pages:

- `/services/exterior-facilities-maintenance`
- `/services/commercial-concrete-site-work`
- `/services/excavation-grading-drainage`
- `/services/commercial-property-improvements`
- `/services/ongoing-repair-maintenance`
- `/services/commercial-snow-ice-management`

Future pages after content approval:

- `/projects/[slug]` — fact-rich commercial case studies
- `/about` — verified company history, team, and commercial operating model
- A focused parking-area page if search demand and APS scope justify a standalone page

### 2. Pages Removed or Consolidated

- Property Maintenance → Exterior Facilities Maintenance
- Lawn & Landscaping → commercial grounds scope inside Exterior Facilities Maintenance
- Parking Lot Maintenance → commercial parking and access-area scope inside Exterior Facilities Maintenance and Commercial Concrete & Site Work
- Concrete Services → Commercial Concrete & Site Work
- Excavation & Sitework → Excavation, Grading & Drainage
- Building Maintenance & Repairs → Ongoing Repair & Maintenance Support
- Decks, Patios & Hardscapes → retired; any validated commercial site-feature work belongs under Commercial Property Improvements
- Remodeling Services → retired; any validated commercial improvement scope belongs under Commercial Property Improvements
- Snow & Ice Management → concise commercial APS overview that links to American Snow & Ice Solutions
- Careers and Service Partner Network remain secondary contact topics, not primary sales navigation
- No Residential Services page should exist

### 3. Recommended Permanent Redirects

| Retired source | Permanent destination |
|---|---|
| `/services/property-building-maintenance` | `/services/exterior-facilities-maintenance` |
| `/services/property-maintenance` | `/services/exterior-facilities-maintenance` |
| `/services/lawn-landscaping` | `/services/exterior-facilities-maintenance` |
| `/services/parking-lot-maintenance` | `/services/exterior-facilities-maintenance` |
| `/services/concrete-services` | `/services/commercial-concrete-site-work` |
| `/services/excavation-sitework` | `/services/excavation-grading-drainage` |
| `/services/building-maintenance-repairs` | `/services/ongoing-repair-maintenance` |
| `/services/decks-patios-hardscapes` | `/services/commercial-property-improvements` |
| `/services/remodeling-services` | `/services/commercial-property-improvements` |
| `/services/snow-ice-management` | `/services/commercial-snow-ice-management` |
| `/american-property-solutions-property-maintenance/` | `/services/exterior-facilities-maintenance` |
| `/american-property-solutions-lawn-and-landscaping-services/` | `/services/exterior-facilities-maintenance` |
| `/parking-lot-maintenance/` | `/services/exterior-facilities-maintenance` |
| `/concrete-contractor/` | `/services/commercial-concrete-site-work` |
| `/excavation-and-sitework/` | `/services/excavation-grading-drainage` |
| `/building-maintenance/` | `/services/ongoing-repair-maintenance` |
| `/decks-and-patios/` | `/services/commercial-property-improvements` |
| `/snow-plowing-company/` | `/services/commercial-snow-ice-management` |
| `/american-property-solutions-contact-us/` | `/contact` |

Before production, export the live URL inventory and analytics/search-console landing pages to catch aliases, query patterns, and older repair URLs not represented in the demo.

### 4. Revised Homepage Structure and Messaging

1. Commercial-only hero
   - Eyebrow: “Commercial Exterior Facilities Maintenance”
   - H1: “One call for the exterior work your facility needs—year-round.”
   - Lead: facility and property teams can connect maintenance, repairs, concrete, site work, drainage, improvements, and seasonal needs through one relationship
   - CTAs: Request a Property Walkthrough / View Commercial Services
2. Commercial-only proof strip
3. Exterior Facilities Maintenance definition and fragmented-vendor problem
4. Six commercial service paths
5. “One call does it all” relationship section
6. Three-step walkthrough process
7. Intended commercial property types and buyer roles
8. Existing commercial work imagery
9. American Snow & Ice Solutions handoff
10. Service-availability summary
11. Final commercial walkthrough CTA

### 5. Revised Commercial Navigation

Header:

- Home
- Exterior Facilities
- Commercial Services
- Commercial Work
- Contact
- Primary button: Request a Property Walkthrough

Footer:

- Repeat the commercial navigation
- Link only the six commercial service pages
- Retain public contact details
- Remove residential, deck, patio, outdoor-living, generic remodeling, and homeowner wording

### 6. Exterior Facilities Maintenance Page Structure

1. Commercial-first hero and walkthrough CTA
2. Plain-language definition
3. Facility-manager problem: fragmented vendors and disconnected scopes
4. “One call does it all” relationship model
5. Confirmed exterior, access, concrete, drainage, site, improvement, repair, and seasonal capabilities
6. Property walkthrough process
7. Examples of when the relationship fits
8. Intended commercial property types
9. Connected commercial services
10. American Snow & Ice Solutions relationship
11. Visible buyer-intent FAQs
12. Final walkthrough CTA

### 7. Recommended Commercial Calls to Action

- Request a Property Walkthrough
- Discuss Your Facility Needs
- Request Commercial Service
- Talk With APS
- View Commercial Services
- Discuss a Site Work Project
- Discuss a Similar Facility Need
- Call APS: 610-760-0600
- Visit American Snow & Ice Solutions

Do not use homeowner estimates, residential quotes, outdoor-living CTAs, or “Schedule Service” unless APS confirms real scheduling functionality.

### 8. Residential Language Removal Areas

The implementation revision removes mixed-market wording from:

- Header and navigation
- Homepage hero, audience section, service paths, and CTA
- Services hub title, metadata, lead, categories, and links
- Dynamic service titles, summaries, scopes, related links, and form options
- Contact-page messaging and form labels
- Footer positioning and service links
- Root, homepage, services, contact, service, and commercial-work metadata
- Internal links and generated routes
- Commercial structured data and visible FAQs

The only homeowner reference is the approved secondary courtesy note on Contact:

> Looking for residential services? APS is now focused exclusively on commercial properties and facilities. While we no longer perform homeowner projects, we are happy to recommend a trusted local contractor when possible.

### 9. SEO and AEO Changes

- Establish Exterior Facilities Maintenance as the strongest site topic and internal-link destination.
- Use commercial buyer intent in titles, descriptions, H1s, service summaries, image alt text, and form labels.
- Remove homeowner, residential-project, deck, patio, outdoor-living, and generic remodeling targeting.
- Add answer-first visible FAQs on the flagship page.
- Add LocalBusiness and Service structured data using confirmed public facts only.
- Do not add Review or AggregateRating schema without approved evidence.
- Add canonical metadata, sitemap output, and permanent redirects.
- Keep the demo `noindex` and robots-blocked until production approval.
- Explain the Snow & Ice relationship in visible copy and link to the specialized website; do not duplicate its full content.
- Add fact-rich commercial case studies after APS supplies approved project details.
- Avoid thin location pages until service coverage and useful local content are confirmed.
- Confirm the legal/brand relationship before using entity-linking properties such as `sameAs`.

### 10. Information Still Needed From Mike and APS

Highest priority:

- Exact active service territory by service line
- Confirmation that both public addresses and current hours are accurate
- Exact commercial grounds-maintenance scope
- Exact concrete, construction, electrical, interior repair, hardscape, drainage, excavation, and recurring-maintenance scope
- Whether APS offers recurring agreements, on-demand work, or both
- What a property walkthrough includes and how inquiries are routed
- Which commercial property types APS actually serves today
- Approved details and publication permission for the Phillipsburg relationship
- Two to five commercial case studies with property type, problem, verified scope, timing, and outcome
- Before/after photographs for commercial exterior maintenance, concrete, excavation, drainage, repairs, and improvements
- Captions confirming what each existing image shows and final public-use rights
- Approved commercial testimonials and customer publication permission
- Current credentials, insurance language, affiliations, certifications, and years-of-experience wording
- Confirmed ownership/relationship language for American Snow & Ice Solutions
- Approved public email and active form destination/workflow
- Required commercial qualification fields, urgency options, and routing rules
- Current careers and service-partner status

## Open Questions

- Should commercial parking-area maintenance return as a standalone search page after demand and scope validation?
- Which commercial grounds, hardscape, interior, construction, and trade scopes are currently active?
- Can the Phillipsburg relationship be named and documented publicly?
- Which current testimonials, credentials, affiliations, and photographs are approved for launch?
- When the sitemap and public copy are approved, should the demo noindex controls be removed for production?

## Handoff Notes for the Next Agent

- Treat this file as the current source of truth for architecture, copy, SEO, design, build, and QA.
- Do not reintroduce mixed-market or residential service paths.
- Before production, complete a full live-URL crawl, validate every redirect, confirm all public facts, connect the form to its real destination, and obtain human approval for the final sitemap, public copy, deployment, DNS, analytics, and public trust claims.
- American Snow & Ice Solutions should remain a linked specialist website rather than duplicated APS content.

