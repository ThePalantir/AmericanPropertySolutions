# APS Website Agent Demo

## Droplet preview deployment

Run installation and deployment commands at the repository root. The root npm
package calls Next.js directly with the application directory `website/`.
The host rejects symbolic links in packaged project files. `.npmrc` disables
npm executable links, and the root scripts invoke Next.js and ESLint through
Node using regular file paths. Do not reintroduce npm workspaces or bin links
without testing the host's release validation. Keep root dependency versions
aligned with `website/package.json` when updating either manifest.
The root `package-lock.json` is canonical for host installs; the original nested
lockfile is retained for historical context and must not drive host installation.

```text
npm ci --ignore-scripts
npm run lint
npm run build
npm start
```

Requires Node.js 20.9 or newer. Install development dependencies before building.
Supply the allocated port with the `PORT` environment variable. `/health` returns
the `american-property-solutions` service identity. This is a server deployment,
not a static export. The existing noindex metadata and robots block remain in
place for preview. The contact form currently does not send submissions.

Keep client deployment outcomes in `projects/american-property-solutions/`.

This repo is a pilot for building a reusable agentic website workflow.

The first test project is American Property Solutions:

https://aps-pa.com/

## Purpose

Use a structured agent workflow to audit the existing site, create a better business brief, propose a cleaner sitemap, generate improved copy and SEO structure, and eventually build a Vercel-ready demo site.

## Project Folder

`projects/american-property-solutions/`

## First Codex Task

Run the Current Site Audit Agent, Discovery Agent, and Site Architecture Agent against the APS intake file.

## Deliverables

- current-site-audit.md
- brief.md
- sitemap.md
- homepage-copy.md
- seo-package.md
- design-spec.md
- pitch-summary.md
- open-questions.md
- decisions.md
