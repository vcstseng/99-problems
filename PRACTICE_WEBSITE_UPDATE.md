# 解題實踐 / Practice — 2026-10-25

Added pages/practice/index.html and en/pages/practice/index.html. Existing page content, shared CSS, scripts and problem data are preserved; headers receive only a Practice link before the language switch. English navigation uses the short label Practice, with Problem-Solving Practice as the page title.

The six sections explain the approach, agent/skill/tool responsibilities, consulting workflow, human supervision, security/governance, and actual case maturity. F03 links to the existing consulting addition; CS07/GOV08 are explicitly described as local rehearsals whose website results and complete proposals are pending. No live agent runtime, production IAM, real approval or resolution of all 99 problems is claimed.

This update is Website-only and has not been committed, pushed or deployed. Earlier F03 additions remain intact.

QA completed: all 207 page navigation entries resolve (205 existing plus 2 new). Removing only the added navigation and earlier F03 blocks restores the original tracked page content, with line endings normalized. Both new pages and all their local links/assets/anchors return HTTP 200. Language switching and 390px/1280px layouts were checked; no page overflow observed. Shared CSS/JS remain unchanged. git diff --check passes.
