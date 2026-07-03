# Design Spec

## Summary

This design spec defines a modern Vercel demo direction for American Property Solutions. The goal is to show the owner a cleaner, more credible website concept without building the site yet.

The design should feel like a practical property maintenance company: organized, direct, local, and capable. It should avoid clutter, keyword blocks, unverified trust claims, and decorative excess.

## Inputs Reviewed

- `AGENTS.md`
- `projects/american-property-solutions/intake.md`
- `projects/american-property-solutions/current-site-audit.md`
- `projects/american-property-solutions/brief.md`
- `projects/american-property-solutions/sitemap.md`
- `projects/american-property-solutions/homepage-copy.md`
- `projects/american-property-solutions/seo-package.md`
- `projects/american-property-solutions/open-questions.md`
- `projects/american-property-solutions/decisions.md`

## Confirmed Facts

- Business name: American Property Solutions.
- APS publicly positions itself as a four-season property maintenance company.
- APS publicly lists snow removal/snow plowing, parking lot services, excavation/sitework, landscaping/hardscaping, concrete/drainage, and building maintenance/repair services.
- APS publicly lists phone number `610-760-0600`.
- APS publicly lists locations in Walnutport, PA and Vestal, NY.
- APS publicly lists hours as `M-F 9AM-4PM`.
- Final public copy, final sitemap, deployment, analytics changes, DNS changes, and public trust claims require approval.

## Observations

- The existing site appears cluttered and service-heavy, with repeated SEO text making the business harder to evaluate quickly.
- The demo needs to make service clarity obvious in the first viewport.
- The strongest visual direction is utility and confidence, not a flashy marketing site.
- Real project/equipment/property photos would materially improve credibility if approved.
- Trust badges and testimonials should be placeholders or omitted until verified.

## Assumptions

- If approved, the demo would be built as a modern responsive site with a Vercel-friendly frontend stack.
- The primary audience includes commercial property owners, property managers, local businesses, and residential homeowners pending validation.
- APS has or can approve service photos for snow, parking lots, sitework, landscaping/hardscaping, and repairs.
- The demo should prioritize homepage and service-path clarity over deep content pages.

## Design Goals

- Make APS appear clear and credible within the first screen.
- Make the service offering easier to understand than the current site.
- Make phone and quote actions obvious on desktop and mobile.
- Present commercial/property-manager appeal without excluding residential needs before validation.
- Replace keyword clutter with clean service sections and natural local context.
- Keep the design maintainable for future small-business website projects.

## Visual Direction

Recommended look:

- Professional, grounded, work-ready.
- Clean white and light neutral backgrounds with strong dark text.
- Controlled use of APS brand colors if logo assets are available.
- High-contrast call-to-action buttons.
- Real service imagery over generic stock whenever approved.
- Simple service cards and section bands, not nested card-heavy layouts.

Avoid:

- Oversized marketing hero with vague claims.
- Decorative gradients, visual clutter, or ornamental graphics.
- Repeated badges or testimonials before approval.
- Dense keyword text blocks.
- Overly residential-home-improvement styling if commercial positioning remains primary.

## Demo Service Priority

1. Property Maintenance
2. Building Maintenance
3. Stacking and Hauling, pending client validation of wording and scope
4. Remodeling Contractor, pending client validation of scope
5. Emergency Snow Plow Contractor as a seasonal supporting service
6. Flowers and Shrubs
7. Landscaping Contractor
8. New Sod
9. Paver Installer
10. Patio & Deck Contractor
11. Excavation Contractor
12. Paving Contractor
13. Concrete Contractor
14. Crack Sealing and Sealcoating
15. Line Striping, with `Line Stripping` treated as wording to validate/correct
## Suggested Page Layout: Homepage

### Header

- Left: APS logo or text wordmark.
- Center/right navigation: Home, Services, Property & Building Maintenance, About, Contact.
- Right CTA cluster: phone link and `Request a Quote` button.
- Mobile: compact menu, sticky phone/quote action if practical.

### Hero

Purpose:

- State what APS does and who it helps.
- Show real property maintenance capability.
- Provide immediate call and quote paths.

Recommended layout:

- Full-width section with text on the left and strong service image on the right, or a restrained full-bleed image treatment with readable text overlay.
- Use one headline, one short paragraph, and two CTAs.
- Include a small location/service-area line below CTAs.

Preferred imagery:

- Snow clearing at a commercial lot.
- Parking lot/sitework equipment.
- Maintained commercial exterior.

### Service Overview

Purpose:

- Turn the broad service list into five understandable buckets.

Layout:

- Five service cards in a responsive grid.
- Each card includes icon, title, 2-3 lines of copy, and text link.
- Cards should be compact, scannable, and equal height.

Suggested icons:

- Snowflake or plow-related icon for Snow & Ice.
- Parking/road icon for Parking Lot Maintenance.
- Shovel/excavator/construction icon for Sitework.
- Leaf/tree icon for Landscaping & Hardscaping.
- Wrench/tool icon for Building Maintenance & Repairs.

### Who APS Helps

Purpose:

- Speak to property owners and managers without overclaiming.

Layout:

- Simple two-column band.
- Left: short positioning copy.
- Right: audience list with checkmarks or subtle icons.

Audience labels:

- Commercial property owners
- Property managers
- Local businesses
- Facilities and operations managers
- Residential homeowners with exterior property needs

### Proof/Trust Placeholder

Purpose:

- Reserve space for approved trust signals without inventing them.

Layout:

- Use muted placeholder row in internal demo or omit from public-looking mock until approved.
- Label internally as pending approval.

Potential approved content later:

- Testimonials
- Membership or affiliation badges
- Company history
- Project photos
- Snow operations details

### Service Area Band

Purpose:

- Replace SEO stuffing with natural local relevance.

Layout:

- Short paragraph plus select visible areas.
- Link to Contact.
- Do not create location cards for every town.

### Final CTA

Purpose:

- Convert interested visitors.

Layout:

- Strong but simple band with `Request a Quote` and `Call 610-760-0600`.
- Include short reassurance: "Tell us what property issue you need help with, and APS can discuss the right next step."

## Page Templates

### Services Overview Template

- H1 and short intro.
- Five service group cards.
- Sub-service lists under each group.
- Cross-links to relevant service pages.
- CTA band.

### Service Detail Template

- H1 and service-specific intro.
- Short "what we handle" list.
- "Good fit for" section pending validation.
- Related services.
- Quote CTA.
- Optional approved image gallery.

### Contact Template

- H1.
- Phone CTA.
- Quote form.
- Service-interest dropdown matching sitemap.
- Public locations and hours.
- Service-area note.
- Map only if approved and useful.

## Content and Component Guidance

- Buttons: use clear text labels, not vague `Learn More` repeated everywhere.
- Primary button: `Request a Quote`.
- Secondary button: `Call 610-760-0600`.
- Forms: labels visible, fields easy to tap on mobile, clear required-field indicators.
- Service cards: title, icon, concise body, link.
- Trust sections: do not show final-looking badges or testimonials unless approved.
- Photos: use real work photos where possible; avoid generic glossy stock photos.

## Color and Typography Direction

Suggested palette direction:

- Deep charcoal or near-black for primary text.
- White and cool light gray for backgrounds.
- Safety/work accent such as controlled yellow, gold, or orange for CTAs if compatible with APS branding.
- Secondary accent such as green for landscape/property maintenance if used sparingly.
- Avoid a one-note green-only landscaping palette because APS is broader than landscaping.

Typography:

- Use a clean sans-serif type family.
- Headings should be strong but not oversized inside content sections.
- Body copy should prioritize readability and scanning.
- Do not use negative letter spacing.

## Responsive Behavior

Desktop:

- Sticky or stable top nav with visible CTA.
- Service grid can use 3+2 or 5-card responsive arrangement.
- Hero should keep content readable and image clear.

Tablet:

- Collapse card grid to two columns.
- Keep phone and quote CTA visible.

Mobile:

- Single-column layout.
- Header should make calling easy.
- Service cards should not overflow or shift.
- Form fields should be full width.
- CTAs should be thumb-friendly.

## Accessibility and Usability

- Maintain strong color contrast.
- Use visible focus states.
- Use semantic headings in order.
- Provide descriptive image alt text.
- Make phone number a clickable link.
- Use form labels, not placeholders only.
- Avoid text embedded in images.

## Phase Three Build Readiness

- Demo page priority: Home first, then Services, Contact, and the Property & Building Maintenance flagship service page.
- Form states: loading, success, error, and required fields.
- Asset plan: approved photos are preferred; placeholders are acceptable for demo only.
- Acceptance criteria: mobile-first layout, visible CTAs, no unsupported trust claims, no fake reviews, and no invented certifications.

## Recommendations

- Build the demo around the homepage first, then service overview and a small set of service detail pages.
- Use approved real photos if available; otherwise use clearly temporary placeholders for internal demo only.
- Keep trust signals pending until APS confirms them.
- Keep navigation lean and consistent with `sitemap.md`.
- Design for fast comprehension by property managers and business owners.

## Open Questions

- Does APS have approved logo files and brand colors?
- Which real photos can be used in the demo?
- Should the hero image emphasize building maintenance, property upkeep, hauling, or a general maintained-property exterior?
- Are trust badges/testimonials approved for display in the demo?
- Should the demo visually prioritize commercial properties over residential examples?

## Handoff Notes for the Next Agent

- Build Agent should not start until the user approves moving from design spec to demo build.
- Build Agent should use this spec with `sitemap.md`, `homepage-copy.md`, and `seo-package.md`.
- QA Agent should later verify mobile layout, CTA visibility, form usability, image rendering, and text overlap.
- Deployment Agent should not plan production deployment, DNS, or analytics changes without approval.





## Phase Three Commercial Aesthetic Refinement

### Summary

The current demo aesthetic should move further away from a soft residential lawn-care feel and toward a serious commercial property maintenance provider: commercial, regional, dependable, four-season, and operational.

Competitor references are used only as directional inspiration for polish, structure, service grouping, commercial photography quality, and conversion flow. Do not copy competitor text, layouts exactly, images, logos, or proprietary assets.

### Inputs Reviewed

- User-provided Phase Three aesthetic direction dated 2026-07-03
- `projects/american-property-solutions/homepage-copy.md`
- `projects/american-property-solutions/seo-package.md`
- Current `website/` demo homepage implementation

### Confirmed Facts

- APS publicly references commercial properties.
- APS publicly positions itself as a four-season property maintenance company.
- APS publicly lists services that support landscape/grounds, snow, paving/parking lots, concrete/sitework, building maintenance, and special-project grouping.
- APS publicly lists Walnutport, PA and Lehigh Valley/Pennsylvania service-area references.

### Observations

- The homepage should feel more like a commercial maintenance operator than a small residential landscaping company.
- Strong dark/neutral sections, operational spacing, commercial-style service grouping, and clear CTA hierarchy help support that shift.
- The current repo does not confirm final BBB A+ accreditation wording or 24-hour/emergency-response language for broad homepage use, so those should remain omitted or pending approval.

### Refined Visual Direction

- Dark commercial hero with strong typography and practical CTA buttons.
- CSS-based commercial property placeholders until APS approves real images.
- Service cards grouped by operational category rather than a long contractor directory.
- A trust/positioning bar that uses safe facts and approval-gate language.
- A one-call maintenance section that reinforces year-round property support.
- A property-type section that clearly marks unconfirmed property segments as demo audiences to validate.
- A gallery placeholder section with a recommended shot list instead of random stock imagery.
- A neutral credibility section titled `Why Property Managers Choose APS` instead of unapproved testimonials.

### Homepage Section Order

1. Hero: `Four-Season Commercial Property Maintenance for the Lehigh Valley and Eastern Pennsylvania`.
2. Trust/positioning bar with only safe demo claims.
3. Service categories:
   - Landscape & Grounds Maintenance
   - Snow & Ice Management
   - Paving, Sealcoating & Parking Lots
   - Concrete & Sitework
   - Building / Facility Maintenance
   - Remodeling / Special Projects
4. One-call four-season maintenance section.
5. Property types served / to validate.
6. Featured work/gallery placeholders.
7. Neutral property-manager credibility section.
8. Local service-area block.
9. Final CTA.

### CTA Direction

- Primary: `Request a Property Walkthrough`
- Secondary: `View Services`

### Image and Asset Plan

Approved photos are preferred. Until available, use CSS-based placeholders only.

Recommended image shot list:

- Commercial exterior maintenance.
- Snow-cleared commercial lot.
- Paving, sealcoating, or line striping.
- Concrete and sitework.
- Landscape and grounds maintenance.
- Building/facility maintenance work.

### Assumptions

- `Eastern Pennsylvania` remains demo positioning until APS confirms final service-area wording.
- Retail centers, office parks, industrial sites, multi-family communities, and HOAs are useful commercial audience examples but require validation before final public copy.
- BBB A+ accreditation, 24-hour response, emergency response beyond listed service labels, testimonials, awards, certifications, warranties, guarantees, and years-in-business claims require approval before use.

### Recommendations

- Keep the homepage dense, scannable, and commercial-first.
- Avoid residential lawn-care visual cues as the dominant look.
- Use real APS work photos as soon as approved.
- Keep trust claims conservative until the owner validates them.
- Preserve the Phase Three flagship direction: Property & Building Maintenance is the evergreen flagship page; Snow & Ice remains seasonal/supporting.

### Handoff Notes for the Next Agent

- QA should verify the revised homepage at mobile, tablet, and desktop widths.
- Build or deployment agents should not add external imagery or unsupported trust claims.
- Final public copy still requires APS approval.

## Production Asset Readiness

### Summary

The demo now has centralized asset slots in `website/lib/siteData.ts` so approved APS photos can replace CSS placeholders without rewriting homepage markup.

### Recommended Image Needs

- Commercial property exterior.
- APS crews at work.
- Trucks and equipment.
- Landscape maintenance.
- Snow-cleared parking lot.
- Paving, sealcoating, crack sealing, or parking lot line striping.
- Concrete and sitework.
- Building or facility maintenance.
- Before/after project examples.
- Local/regional context where appropriate.

### Recommended Future Location and Filenames

Approved files should be placed under `website/public/approved-aps-assets/` when available. That folder is not required until real approved photos exist.

Recommended filenames:

- `commercial-property-exterior.jpg`
- `commercial-exterior-maintenance.jpg`
- `aps-crew-equipment.jpg`
- `snow-cleared-parking-lot.jpg`
- `parking-lot-sealcoating-striping.jpg`
- `concrete-sitework.jpg`
- `building-facility-maintenance.jpg`
- `before-after-project-example.jpg`
- `local-regional-context.jpg`

### Replacement Workflow

1. Confirm the photo is APS-owned, licensed, or approved for public use.
2. Confirm the photo does not imply unsupported service areas, credentials, emergency response, awards, warranties, guarantees, testimonials, or years in business.
3. Add the file to `website/public/approved-aps-assets/`.
4. Update the related asset object in `website/lib/siteData.ts` with `src: "/approved-aps-assets/<filename>"`.
5. Change `status` from `pending-approval` to `approved`.
6. Verify alt text describes the actual image.
7. Run lint and build before deployment.

### Launch Approval Blockers

- Final service-area wording, including `Eastern Pennsylvania`.
- Any BBB, badge, rating, affiliation, certification, award, warranty, guarantee, testimonial, review, emergency-response, 24-hour, or years-in-business claim.
- Property-type targeting beyond confirmed commercial-property language.
- Final image approvals and image usage rights.

### Additional Implementation Asset Slots

The current `website/lib/siteData.ts` asset config also includes these page-level slots:

- `aps-service-overview.jpg` for the Services page hero.
- `property-building-maintenance.jpg` for the flagship Property & Building Maintenance page.
- `property-walkthrough-contact.jpg` for the Contact page walkthrough request visual.

Images should render only after the asset has an approved `src` and `status: "approved"` in `siteData.ts`.

## Launch Approval Reference

Before production launch planning, use `projects/american-property-solutions/launch-approval-checklist.md` to validate final service-area wording, service labels, approved asset usage, trust claims, form routing, SEO metadata, and legal/privacy needs.
