# APS droplet preview recovery — November 3, 2026

## Summary

Preview setup is blocked by the host's regular-file validation. Repository
install/build/runtime and host detection pass, but no preview release is live.
Production cutover is outside this change.

## Inputs reviewed

- Repository instructions, current GitHub main, failed dashboard project.
- Snow & Ice deployment session and repository instructions.
- KJ Lehigh project setup and droplet deployment notes.
- Shared Drive: Engineering Standards MD Files Skills Etc; engineering standard v1.2.

## Confirmed facts

- Repository: https://github.com/ThePalantir/AmericanPropertySolutions
- Original local checkout: `C:\Projects\aps-pa-agent-demo`, branch `agent/polish-aps-site`.
- Existing local image deletions/additions and shortcut are preserved.
- GitHub main at start: `459c55178b3af6b185362d0c93b45838d839becc`.
- Candidate branch: `deployment/truecore-preview`, commit `bb53f4b`.
- Candidate change: root npm workspace package/lockfile, README instructions,
  and identity-bearing `/health` endpoint. Site remains in `website/`.
- Node minimum: 20.9.0. Validated locally with Node 24.18.0 and npm 11.16.0.
- Root `npm ci --ignore-scripts`, lint, production build and `PORT=3127 npm start` pass.
- Local 200 checks: health, homepage, services, contact, exterior facilities
  maintenance detail, robots and logo asset. Health identifies APS.
- Original dashboard project ID: `american-property-solutions`.
- Requested host: `american-property-solutions.truecore.services`.
- Original setup failed at `detecting_application` with no supported web contract.
- Updated setup on the preview branch failed at `checking_repository`:
  `fatal: ambiguous argument 'origin/deployment/truecore-preview': unknown revision or path not in the working tree`.
- One normal retry at 8:04 PM Eastern repeated the same missing-ref error.
- A fresh failed-project recovery attempt uses ID `american-property-solutions-preview`,
  the same requested hostname, the preview branch, and `/health` with expected
  text `american-property-solutions`. It passed repository checking and app
  detection and entered the host build pipeline at approximately 8:06 PM Eastern.
- Draft review: https://github.com/ThePalantir/AmericanPropertySolutions/pull/2
- First host candidate `bb53f4b` failed safely after the build stage:
  `Project configuration must use regular files and directories, never symbolic links`.
  The initial isolated release was removed; account and private state retained.
  Root npm workspace link is a suspected cause, not a proven path-specific diagnosis.
  A direct root Next.js package without npm workspaces is being tested next.
- Revised candidate: `22ba1f2`, direct root `next build website` and `next start website`.
  Clean install, lint and production build pass. Direct runtime honors PORT and
  returns 200 for health, main pages, service detail, robots and optimized image.
  This candidate is pushed to the same preview branch; host verification pending.
- Host deployment of `22ba1f2` repeated the symbolic-link restriction and safely
  removed the initial release. A third candidate uses `.npmrc` `bin-links=false`
  and invokes Next.js/ESLint directly through Node, avoiding npm executable
  links as well as workspace package links. Host verification is still required.
- Final local candidate: `8435e58f433fa0266b22eaf6dcc622845193752e` on the
  preview branch. Clean install, lint, build, production start and HTTP checks
  passed. QA found zero source/index/node_modules symbolic links/reparse points;
  no `node_modules/.bin`. Host deployment repeated the same symbolic-link
  restriction at approximately 8:35 PM Eastern. No release was deployed.
- Local optimized-image requests returned 200, but the sandboxed runtime logged
  EPERM when writing `.next/cache/images` after an elevated build. This is a
  local mixed-permission limitation; host image-cache write access still needs
  verification and must not be assumed from HTTP status alone.
- Host deployment of `8435e58` requested at approximately 8:33 PM Eastern.
  Dashboard confirmed the remote target before request. Result: failed safely;
  initial isolated release removed, account/private state retained.
- New project's runtime unit is
  `project-american-property-solutions-preview.service`, upstream `127.0.0.1:10007`.
- GitHub commit-status readback confirms Vercel integration is still active:
  candidate `bb53f4b` has a successful Vercel preview status; main `459c551`
  has successful Vercel statuses from two project integrations. No Vercel
  settings were changed. Do not merge assuming the legacy host is disconnected.
- Contact form is a demo: no server submission or delivery; it resets after a
  delay and instructs the visitor to call. No form submission tests were sent.
- Existing app metadata is noindex/nofollow and robots disallows `/`.

## Observations

The root npm contract works locally and host detection passed. Host release
packaging/validation rejects all three candidates with the same non-specific
regular-file error, even after source/package/bin links were eliminated locally.
The missing remote ref is distinct from application detection. The dashboard's
branch field does not establish that its cached clone fetches that branch.
Prior Snow & Ice work used the signed-in dashboard; SSH was rejected. Jesse
subsequently repaired its protected runtime recipe. KJ used a recognized root
layout. Do not assume either project proves SSH access from this machine.

## Assumptions

The generic host npm recipe is expected to run root install/build/start, but this
remains a candidate until the actual host release succeeds. Root lockfile is
canonical; the original website lockfile is retained and documented.

## Recommendations

Preserve main because Vercel integration remains active. Do not keep rewriting
the repository against the same non-specific error. A host operator must identify
the rejected path and the responsible source, install, artifact-copy or protected
configuration layer. Preserve link restrictions and other applications.

### Operator checkpoint

- Project: `american-property-solutions-preview`; hostname:
  `american-property-solutions.truecore.services`.
- Branch: `deployment/truecore-preview`; code candidate: `8435e58`.
- Unit: `project-american-property-solutions-preview.service`; port `10007`.
- Error: `Initial isolated release safely removed after failed activation:
  Project configuration must use regular files and directories, never symbolic
  links; account and private state retained`.
- Prior setup reported stage `running_tests`; this project's deployment UI
  offers no path-specific validator output or operation-log action.
- Inspect the effective project recipe and physical source/release paths. The
  documented protected control plane is `/etc/operations-dashboard/control-plane.json`;
  verify current effective configuration before editing.
- Confirm installation respects `.npmrc`; identify the exact rejected path,
  including any host-generated links. Do not disable the link policy.
- After targeted correction, use ordinary dashboard deployment and verify public
  health identity, HTTPS, deep routes, assets, writable image cache and noindex.

## Open questions

- Which exact path fails host validation, and which component owns that path?
- Does the effective host recipe honor `.npmrc` and the direct Node start command?
- Which Vercel integration currently owns production, and when should it retire?
- Who receives leads and what approved form integration should be implemented?

## Handoff notes

Candidate checkout is isolated under the session temporary directory
`aps-preview-f79967fac21946bfbc71953cd092f128/repo`; the branch is on GitHub.
Keep exact host outcomes here. After a successful release verify public HTTPS,
HTTP redirect, health identity, deep routes, assets/image optimization, 404 and
index controls. Record the actual URL and deployed commit. Main merge, public
copy approval, production deployment and production DNS remain separate gates.

General SOP source: `templates/new-project-hosting-sop.md`.
Shared engineering destination:
https://drive.google.com/drive/folders/1XVvfSbgLvcyYw_Bry2EAa5u15-r0WD5I
