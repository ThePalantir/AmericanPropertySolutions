# American Property Solutions Demo Site

This folder contains a small Next.js demo concept for the American Property Solutions pilot.

It is not final approved public copy. The demo intentionally avoids unsupported testimonials, reviews, certifications, awards, guarantees, warranties, years-in-business claims, and final trust badges.

## Pages

- `/` - Home
- `/services` - Services overview
- `/services/property-building-maintenance` - Flagship Phase Three service page
- `/contact` - Contact and safe mock quote form

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
- Visuals are CSS-based demo-only placeholders in `components/DemoVisual.tsx`.
- The quote form has required-field validation plus loading, success, and error states.
- The quote form uses safe mock submission only. It does not send email, connect to a CRM, call an API, or submit to a backend.
- `Stacking and Hauling` and `Line Striping` / `Line Stripping` wording should be validated with APS before final public copy.
- Final sitemap, copy, service areas, photos, public trust claims, production deployment, DNS, and analytics changes require approval.
