# Launch Approval Checklist

## Summary

This packet lists what APS must approve before the current demo-safe website can move toward public launch. It is a validation checklist, not final public copy.

The current demo intentionally avoids unsupported trust claims, unapproved photos, unverified service-area expansion, real form submission, testimonials, warranties, guarantees, certifications, awards, affiliations, years-in-business claims, and broad emergency-response language.

## Inputs Reviewed

- `AGENTS.md`
- `projects/american-property-solutions/design-spec.md`
- `projects/american-property-solutions/homepage-copy.md`
- `projects/american-property-solutions/seo-package.md`
- `projects/american-property-solutions/sitemap.md`
- `projects/american-property-solutions/open-questions.md`
- `projects/american-property-solutions/decisions.md`
- `website/README.md`
- `website/lib/siteData.ts`

## Confirmed Facts

- Business name: American Property Solutions.
- Public phone: `610-760-0600`.
- Public Pennsylvania location: `4531 Lehigh Dr, Walnutport, PA 18088`.
- Public New York location: `3209 Steward Road, Vestal, NY 13850`.
- Public hours: `M-F 9AM-4PM`.
- APS publicly references commercial properties.
- APS publicly positions itself as a four-season property maintenance company.
- APS publicly lists services including property maintenance, building maintenance, landscaping, snow plowing, paving, concrete, excavation/sitework, sealcoating, crack sealing, line striping, and related exterior services.
- The demo uses centralized asset slots and does not render photos until an asset has both an approved `src` and `status: "approved"` in `website/lib/siteData.ts`.

## Observations

- The demo is correctly conservative: it presents APS as a commercial property maintenance provider without relying on unapproved badges, reviews, certifications, or claims.
- The largest launch risks are not visual polish; they are business-fact validation, approved photography, form routing, legal/privacy needs, and final service-area wording.
- The current demo can stay credible with placeholders, but public launch should use approved APS assets wherever possible.

## Assumptions

- APS will review this checklist before any production deployment.
- Final service-area wording may differ from the current demo wording.
- Property types beyond broadly stated commercial properties need APS validation before they are treated as final target audiences.
- Any trust, rating, credential, review, warranty, guarantee, affiliation, or years-in-business claim requires explicit owner approval before publication.

## Approval Matrix

| Approval item | Current demo-safe status | What must be confirmed | Where approved content would be used | Risk if published without validation | Recommended final wording placeholder |
| --- | --- | --- | --- | --- | --- |
| Service area wording | Uses Lehigh Valley, Walnutport, and publicly listed Pennsylvania references; `Eastern Pennsylvania` remains demo positioning pending approval. | Exact cities, counties, states, and any priority service territories APS wants to claim publicly. | Homepage hero/support line, local service-area block, Services page, Contact page, metadata, footer, future location pages. | Misleading customers, poor lead quality, local SEO confusion, or claims outside APS's active service territory. | `Serving [approved primary region] and [approved surrounding service areas].` |
| Confirmed service categories | Services are grouped into practical demo categories based on current planning files. | Final category names, service scope, priority order, and any services to remove, rename, or downplay. | Homepage service cards, Services page, flagship service page, navigation, SEO headings, form service-interest field. | Visitors may request services APS no longer prioritizes or misunderstand the actual offering. | `Services include [approved category list].` |
| Property types served | `Commercial properties` is supported by current project source; retail centers, office parks, industrial sites, multi-family communities, and HOAs are framed as audiences to validate. | Which property types APS actively serves and wants to target. | Homepage property-type section, pitch copy, future service pages, SEO page sections. | The site may attract poor-fit leads or imply experience in property types not approved for marketing. | `Serving [approved property types] across [approved service area].` |
| Approved photos and usage rights | No external images are used; image slots stay as CSS placeholders until approved assets are added. | Ownership/license, permission to publish, accurate image context, people/vehicle/logo visibility, and whether each photo implies any unapproved service, area, credential, or result. | Hero, featured work/gallery, Services page, flagship service page, Contact page, future case studies. | Copyright issues, privacy concerns, inaccurate implied claims, or visual mismatch with APS's actual work. | `Approved photo: [short factual description of actual photo].` |
| BBB / rating / accreditation language | Omitted from public-facing copy. | Exact accreditation/rating status, source, date, logo usage rules, and approved wording. | Trust bar, credibility section, footer, pitch material, possible badge area. | False or outdated trust claim; reputational and compliance risk. | `[Approved accreditation/rating name] - [approved exact wording].` |
| Emergency or after-hours response language | General 24-hour or emergency-response claims are omitted; `Emergency Snow Plow Contractor` appears only as a listed service label from planning. | Whether APS offers emergency, after-hours, winter storm, or priority response; exact hours, limits, service areas, and request process. | Snow & Ice service copy, homepage trust/positioning bar if approved, Contact page, form options, metadata only if appropriate. | Customers may expect immediate response or availability APS has not committed to provide. | `[Approved emergency/after-hours process and availability].` |
| Testimonials or reviews | Omitted; the demo uses a neutral `Why Property Managers Choose APS` section instead. | Which reviews/testimonials can be used, source platform, reviewer permission, name display, date, and exact approved quote. | Credibility section, future case studies, footer, landing pages. | Fake or unapproved social proof; trust and legal risk. | `"[Approved quote]" - [approved name/source/date].` |
| Warranties, guarantees, certifications, awards, affiliations, and years-in-business claims | Omitted. | Exact claim, proof/source, dates, limitations, logo rules, and owner approval. | Trust bar, credibility section, service pages, footer, metadata only when appropriate. | Unsupported marketing claims, customer expectation mismatch, and credibility damage. | `[Approved claim] with [approved limitation/source/date].` |
| Snow and ice management wording | Snow is treated as an important seasonal/supporting service, not the flagship page. No broad 24-hour claim is used. | Final service name, scope, response expectations, service area, commercial/residential priority, and any seasonal contract details APS wants public. | Snow service card, Services page, form option, future snow detail page, seasonal homepage modules. | Overstating winter capabilities or underrepresenting a high-value seasonal service. | `Snow and ice services include [approved snow services] for [approved property types/areas].` |
| Stacking and hauling wording | Listed as `Stacking and Hauling` pending validation. | Correct service name, spelling, customer-facing phrasing, and scope. | Service priority list, Building / Facility Maintenance card, flagship service page, form service options if included. | Confusing wording may reduce credibility or generate wrong-fit requests. | `[Approved hauling/service label]: [approved short description].` |
| Line striping wording | Demo uses `Line Striping`; earlier wording may include `Line Stripping`, which is flagged for validation. | Correct spelling, final service name, scope, and whether this service should be grouped with parking lot maintenance. | Service priority list, Paving/Sealcoating/Parking Lots card, Services page, image alt/captions, SEO terms. | Typo-like wording or inconsistent service labels may hurt professionalism and search clarity. | `Line Striping` or `[approved alternate wording]`. |
| Contact form destination and notification routing | Contact form uses safe mock submission only; it does not send email, CRM data, API calls, or backend submissions. | Destination email(s), CRM/tool, spam prevention, required fields, notification recipients, response-time expectations, and privacy disclosure. | Contact page form, CTA flow, README/deployment notes, privacy policy. | Leads may be lost or sensitive data may be collected without proper routing/disclosure. | `Requests route to [approved inbox/CRM/person] with [approved notification process].` |
| SEO title/meta description approval | Metadata is draft/demo direction based on current planning. No ranking promise is made. | Final page titles, meta descriptions, H1s, target service-area wording, and any page additions/removals. | `website/app/*/page.tsx`, SEO package, search snippets, social previews if added. | Search snippets may overclaim, target wrong geography, or conflict with final business positioning. | `Title: [approved page title]`; `Meta: [approved meta description]`. |
| Final legal/privacy/disclaimer needs | No final legal/privacy pages are created in this pass. | Whether APS needs Privacy Policy, Terms, accessibility statement, image release language, SMS/call consent, form disclaimer, or other legal review. | Footer links, Contact page, form helper text, deployment checklist. | Compliance risk, unclear data handling, or missing disclosures for lead forms. | `Privacy / Terms / Disclaimer: [approved legal text or link].` |

## Asset Approval Table

Recommended future asset location after approval: `website/public/approved-aps-assets/`.

| Asset slot | Current approved filename | Page/section where used | Required image type | Approval status | Notes |
| --- | --- | --- | --- | --- | --- |
| Homepage hero commercial property | `CorporateBuildingExterior1.jpg` | Home hero | Maintained commercial exterior, parking area, crew, or APS equipment | Wired as approved | Uses root-relative `src` in `website/lib/siteData.ts`. |
| Commercial exterior maintenance | `CorporateBuildingExterior2.jpg` | Home featured work/gallery | Commercial property exterior with maintained grounds and visible site context | Wired as approved | Also reused for the Contact page visual. |
| APS crews and equipment | `SnowPlowEquipment1.png` | Home featured work/gallery | APS crew, truck, trailer, equipment, or work setup at an approved property | Wired as approved | Alt text stays factual and does not imply response time or service area. |
| Snow-cleared parking lot | `Plowing1.png` | Home featured work/gallery; future snow section | Commercial lot or access area after snow service | Wired as approved | Does not add 24-hour or emergency availability claims. |
| Parking lot work | `sealcoating.png` | Home featured work/gallery; parking lot service content | Paving, sealcoating, crack sealing, or line striping work | Wired as approved | Does not change pending `Line Striping` wording validation. |
| Concrete and sitework | `concrete-sitework.jpg` | Home featured work/gallery; sitework content | Concrete, excavation, drainage, or sitework photo | Pending approval | No clearly matching approved concrete or excavation image is currently wired. |
| Building / facility maintenance | `buildingmaintenance.png` | Home featured work/gallery; flagship service support | Building maintenance, repair support, hauling, or special-project context | Wired as approved | Validate whether the photo supports final commercial positioning. |
| Services overview visual | `Landscaping3.png` | `/services` page hero/visual area | APS work types, equipment, or commercial property context | Wired as approved | Centralized as `serviceOverviewAsset` in `siteData.ts`. |
| Property & Building Maintenance flagship visual | `aps-drywall.jpeg` | `/services/property-building-maintenance` hero/visual area | Property maintenance, building maintenance, hauling, or repair-support context | Wired as approved | This is the flagship service page image. |
| Contact / walkthrough visual | `CorporateBuildingExterior2.jpg` | `/contact` page visual area | Property walkthrough, APS representative, truck, or commercial site context | Wired as approved | Supports the `Request a Property Walkthrough` CTA without adding a new claim. |
| Before/after project example | `before-after-project-example.jpg` | Future gallery or case study section | Approved before/after image pair or composite | Not currently used | No existing current slot was wired for this pass. |
| Local/regional context | `local-regional-context.jpg` | Future service-area section | Local APS-relevant property, worksite, or regional context | Not currently used | Avoid implying a service area beyond approved wording. |
## Recommendations

- Treat this checklist as a required owner/client review before public launch planning.
- Keep the demo online only as a concept until service-area wording, asset rights, form routing, and public claims are approved.
- Prefer approved APS photography over stock or generic imagery.
- Keep the Property & Building Maintenance page as the evergreen flagship unless APS changes the business priority.
- Keep Snow & Ice Management visible as a seasonal service without turning it into the first flagship page.

## Open Questions

- What exact service-area wording should appear in the hero, footer, metadata, and local service-area section?
- Which service categories and service labels are approved exactly as written?
- Which property types does APS want to actively target?
- Are there approved photos available for each asset slot?
- Is any BBB, rating, affiliation, review, warranty, guarantee, certification, award, or years-in-business claim approved for public use?
- Where should the contact form send requests, and who should receive notifications?
- Does APS need legal review for privacy, terms, form disclosures, or accessibility language before launch?

## Launch Blockers

### Required Before Public Launch

- Approved service-area wording for all public pages and metadata.
- Approved service categories, service names, and service priority.
- Approved wording for `Stacking and Hauling` and `Line Striping` / `Line Stripping`.
- Confirmed property types served and audience priority.
- Contact form destination, notification routing, required fields, and data/privacy language.
- SEO titles and meta descriptions approved for all launch pages.
- Legal/privacy/disclaimer requirements resolved or intentionally waived by the owner.
- Any public BBB, rating, accreditation, testimonial, review, warranty, guarantee, certification, award, affiliation, years-in-business, emergency-response, or 24-hour claim explicitly approved before use.

### Recommended Before Launch

- Approved APS photos for the hero, gallery, Services page, flagship service page, and Contact page.
- Final image alt text and captions matched to actual approved photos.
- Final mobile/tablet/desktop visual QA after approved images are added.
- Accessibility check after final content and imagery are in place.
- Redirect plan if replacing the current website structure.
- Analytics/conversion tracking plan, subject to separate approval.

### Nice-to-Have After Launch

- Approved testimonials or reviews.
- Before/after project examples or short case studies.
- Expanded service pages for high-priority categories.
- Seasonal snow page updates before winter demand periods.
- Additional local service-area pages only after final territory and SEO strategy are approved.

## Handoff Notes for the Next Agent

- Build or deployment agents should not add public claims from this checklist unless APS has supplied approval.
- Deployment Agent must treat this checklist as a launch gate before production deployment, DNS changes, analytics changes, or public trust-claim updates.
- QA Agent should re-check the site after approved assets and final wording are added.

