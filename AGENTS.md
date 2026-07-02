# Client Website Agent OS — Codex Instructions

## Purpose

This repository contains a reusable agentic workflow for auditing, planning, rewriting, designing, building, QA-checking, launching, and monitoring small business websites.

The immediate pilot project is American Property Solutions using the public website at https://aps-pa.com/.

The goal is not generic marketing fluff. The goal is to produce practical, structured deliverables that can be reused across client projects and eventually turned into a repeatable TrueCore Services delivery system.

## Operating Model

Use a specialist-agent workflow:

1. Orchestrator Agent
2. Current Site Audit Agent
3. Discovery Agent
4. Competitor Research Agent
5. Site Architecture Agent
6. Copywriting Agent
7. SEO Agent
8. Design Agent
9. Build Agent
10. QA Agent
11. Analytics Agent
12. Deployment Agent
13. Post-Launch Agent

Each agent is defined in `/agents`.

Each client project lives in `/projects/<client-name>/`.

The current client project folder is:

`/projects/american-property-solutions/`

## Universal Rules

- Do not invent business facts.
- Separate confirmed facts from assumptions.
- Separate observations from recommendations.
- Do not create fake reviews, guarantees, certifications, awards, years in business, service areas, or claims.
- Do not copy competitor language.
- Do not copy the existing website verbatim except where preserving factual information such as business name, phone, address, services, or public facts.
- Prefer practical recommendations over generic advice.
- Every output must be usable by the next agent.
- Keep outputs structured and skimmable.
- Every recommendation must support at least one of these goals:
  1. Clearer positioning
  2. Better search visibility
  3. Better conversion
  4. Easier maintenance
  5. Lower launch risk

## Required Output Format

Every agent deliverable should include:

1. Summary
2. Inputs reviewed
3. Confirmed facts
4. Observations
5. Assumptions
6. Recommendations
7. Open questions
8. Handoff notes for the next agent

## Human Approval Gates

Human approval is required before:

- Final sitemap
- Final public copy
- Production deployment
- DNS changes
- Analytics account changes
- Public claims about credentials, guarantees, awards, reviews, testimonials, or years of experience

## Repository Rules

- Do not delete existing files unless explicitly asked.
- Do not overwrite client project files without preserving useful prior content.
- Use Markdown for deliverables unless explicitly asked for another format.
- Keep reusable templates generic.
- Keep client-specific facts only inside that client’s project folder.
- When making recommendations, be direct and practical.

## Current Pilot Project

Client: American Property Solutions  
Website: https://aps-pa.com/  
Project folder: `/projects/american-property-solutions/`

## Definition of Done for Pilot v1

The APS pilot is considered complete for v1 when it contains:

- intake.md
- current-site-audit.md
- brief.md
- sitemap.md
- homepage-copy.md
- seo-package.md
- design-spec.md
- pitch-summary.md
- open-questions.md
- decisions.md

## Primary Pilot Goal

Produce a fast, credible before-and-after website improvement concept for American Property Solutions that can be used to start a conversation with the owner through Nina or the friend connection.

The first deliverable should show:

1. What is wrong with the current site
2. What the business actually appears to offer
3. How the site should be repositioned
4. What sitemap should replace the current structure
5. What a stronger homepage could say
6. What a clean Vercel demo site could look like
