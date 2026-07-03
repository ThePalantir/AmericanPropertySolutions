# American Property Solutions Demo Site

This folder contains a small Next.js demo concept for the American Property Solutions pilot.

It is not final approved public copy. The demo intentionally avoids unsupported testimonials, reviews, certifications, awards, guarantees, warranties, years-in-business claims, and final trust badges.

## Pages

- `/` - Home
- `/services` - Services overview
- `/services/property-building-maintenance` - Flagship Phase Three service page
- `/contact` - Contact and safe mock walkthrough form

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

## Demo Notes

- Property & Building Maintenance is the flagship service page for this demo.
- Snow plowing is treated as an important seasonal supporting service, not the flagship page.
- Visual slots are centralized in `lib/siteData.ts` and render CSS-based placeholders until an approved image `src` and `status: "approved"` are provided.
- The walkthrough form has required-field validation plus loading, success, and error states.
- The walkthrough form uses safe mock submission only. It does not send email, connect to a CRM, call an API, or submit to a backend.
- `Stacking and Hauling` and `Line Striping` / `Line Stripping` wording should be validated with APS before final public copy.
- Final sitemap, copy, service areas, photos, public trust claims, production deployment, DNS, and analytics changes require approval.


## Approved Asset Workflow

No external images are used in this demo. Approved APS photos can be added later without changing homepage markup.

Recommended future location:

```text
website/public/approved-aps-assets/
```

Recommended filenames:

- `commercial-property-exterior.jpg`
- `commercial-exterior-maintenance.jpg`
- `aps-crew-equipment.jpg`
- `snow-cleared-parking-lot.jpg`
- `parking-lot-sealcoating-striping.jpg`
- `concrete-sitework.jpg`
- `building-facility-maintenance.jpg`
- `aps-service-overview.jpg`
- `property-building-maintenance.jpg`
- `property-walkthrough-contact.jpg`
- `before-after-project-example.jpg`
- `local-regional-context.jpg`

Replacement steps after APS approves assets:

1. Add approved images to `website/public/approved-aps-assets/`.
2. In `website/lib/siteData.ts`, set the matching asset `src` to `/approved-aps-assets/<filename>`.
3. Change that asset status from `pending-approval` to `approved`; images do not render until both `src` and approved status are present.
4. Confirm the `alt`, `title`, and `usage` text accurately describe the actual photo.
5. Run `npm run lint` and `npm run build`.

Do not add photos that imply unapproved service areas, credentials, equipment ownership, emergency availability, awards, certifications, warranties, guarantees, testimonials, or years in business.



## Launch Approval Reference

Before this demo moves toward public launch, use `../projects/american-property-solutions/launch-approval-checklist.md` as the validation gate for service-area wording, approved assets, public claims, form routing, SEO metadata, and legal/privacy needs.
