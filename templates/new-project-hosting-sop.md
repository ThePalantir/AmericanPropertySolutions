# New website project setup and preview deployment SOP

Status: working procedure with verified detection/recovery steps; server-release
acceptance remains blocked in the current pilot. Verify host capabilities per project.
Owner: TrueCore Services. Updated: November 3, 2026.

## Summary

Use the signed-in operations dashboard for normal project setup and deployment.
SSH is a separate operator capability, not an assumed prerequisite. Record the
actual access method and exact successful repository layout for every project.
This procedure complements the engineering standard and launch checklists.

## Inputs reviewed

- Current engineering standard and approved project scope.
- Repository instructions, status, default branch and deployment scripts.
- Dashboard setup result, technical details and existing runtime recipe.
- Comparable deployments and their recorded limitations.

## Confirmed facts and intake record

Before changing anything, record:

| Item | Required evidence |
|---|---|
| Repository and branch | Remote URL, live default branch and commit |
| Local changes | Status output; preserve unrelated work |
| Preview destination | Explicit hostname and project ID |
| Existing production | Host, DNS and any push-triggered deployment |
| Runtime | Static or server; Node/version; install, build, start commands |
| Application location | Root or subdirectory; effective host working directory |
| Access | Dashboard session, connector or proven operator SSH connection |
| Failure | Stage, saved timestamp and expanded technical error |
| Form | Real endpoint and delivery/persistence, or explicitly nonfunctional |

## Observations and troubleshooting rules

- "No supported web deployment contract" is a detection failure, not a build failure.
- The host has documented support for locked static Vite sites, npm applications
  with a start script, simple Rust servers, and matching named presets.
- A nested application may require a supported root entry point or an explicit
  host working-directory recipe. Selecting a preset alone does not prove support.
- A missing `origin/<branch>` revision is a repository-fetch failure. It occurs
  before app detection. Inspect saved technical details; do not keep changing
  application code to fix a missing host ref.
- If a saved failed project's clone cannot resolve a newly selected branch after
  one retry, a fresh preview project ID with that branch selected at creation
  has passed repository checks and npm detection. Use only an unused preview
  destination; preserve the failed record and avoid duplicate active routes.
  Confirm the fresh build and runtime separately before declaring success.
- A successful build does not prove runtime packaging, HTTPS or public routing.
- A generic host release rejected an npm-workspace candidate with "Project
  configuration must use regular files and directories, never symbolic links".
  npm workspace package links are a suspected compatibility issue. Do not call
  workspaces host-supported based only on local tests. A direct root Next.js
  package with explicit application-directory arguments also hit this restriction.
  The next candidate disables npm executable links using `.npmrc` `bin-links=false`
  and invokes tools through Node with regular file paths. Verify on the host;
  do not weaken its symbolic-link policy or claim this is proven before release.
  The regular-file-only candidate passed local checks but the host repeated the
  same error. At this point obtain the rejected path from host diagnostics;
  additional repository rewrites without that evidence are speculative.
- Existing host recipes can remain authoritative despite a dashboard preset
  change. A host operator may need to repair the protected project catalog.
- An absent local SSH key does not mean earlier deployments used SSH. Check the
  actual session/release record before asking for new credentials.

## Assumptions

None of the following are automatic: dashboard login implies SSH access;
HTTP redirect implies correct HTTPS certificate; form UI implies delivery;
GitHub push implies deployment; host success implies correct app identity.

## Procedure and recommendations

1. Read current instructions and project state. Query the live repository branch.
   Use an isolated checkout when the user's checkout contains unrelated changes.
2. Inspect the existing failed setup. Expand Technical details and capture the
   stage and non-secret error. Preserve saved environment values.
3. Select a deployable contract:
   - Static Vite: root package/lockfile, build script and expected output directory.
   - npm server: root package/lockfile, build and start scripts, host-provided PORT.
   - Nested npm app: test a root package that invokes the app with an explicit
     directory, or verify a host recipe that builds/runs in the subdirectory.
     Do not assume workspace symbolic links are accepted by release packaging.
   - Next.js standalone: include public and static assets, runtime launcher,
     image-cache write access and service identity. Never substitute a static
     export when server endpoints are required.
4. Install locked dependencies, run lint/type/build checks and start the production
   server with an allocated port. Test real routes, assets, redirects and health.
   Build with required development dependencies present. Verify minimum Node.
5. Push a reviewed preview branch. Check whether the host can fetch that branch
   before relying on it. Avoid pushing main when it may publish to an old host.
6. Configure the dashboard project: repository, branch, preview hostname, runtime
   type, health path, expected identity and necessary environment names. Secrets
   belong only in the protected host store.
7. Start setup/deployment and observe stage transitions. Retry once when evidence
   supports repository refresh; repeated identical errors require a different fix.
8. Verify from outside the server: HTTPS without bypass, HTTP redirect, correct
   identity, homepage, service/deep routes, image optimization/static assets,
   not-found behavior, robots/noindex and preview analytics isolation.
9. Verify the critical user journey. A form must actually persist/deliver through
   its approved integration. Do not mark an unwired form as operational.
10. Record commit, URL, configuration, evidence, limitations, rollback procedure
    and owner. Publish the verified procedure to the shared engineering folder.
11. Run the production acceptance workflow separately before domain cutover.

## Open questions and escalation

When blocked, identify the smallest concrete missing capability: repository fetch,
host recipe, runtime version, artifact packaging, secret routing or edge config.
Provide the operator with the exact stage/error and intended branch, never secrets.
Do not request broad new access when the existing dashboard workflow suffices.

## Handoff notes

Retain the current engineering standard as the governing acceptance reference.
Keep client-specific deployment records in the client project directory. This SOP
must distinguish locally tested candidates from verified host behavior. On any
failure, retain the failed outcome and next action; do not label the setup complete.
