# Migration review

Preview: https://vision3d-lab.github.io/lab-homepage-preview/
Production is pending the researcher's review of the finished preview.

## Content moved from the public source

- 11 main pages; 85 full News entries and 19 Home summaries (4 source Home-only announcements retained separately in the shared data).
- 61 publications, preserving year/type grouping, author order/emphasis, venue and source links.
- 47 people: Graduate Students, Staff, Interns and Alumni.
- 21 funded projects; 25 equipment/computing resources; 6 research areas and their full detail panels.
- 10 research slides, 18 activity slides; 20 currently public Instagram post permalinks.
- Professor profile, biography and all timeline sections; Contact map, address, phone and email; Recruitment text and links.

Source metadata, counts, corrections and date inconsistencies are in `src/content/source-manifest.json`. Assets live under `public/lab-media/`, with provenance/path mapping in `src/content/media.json`. No full WordPress backup was made.

## Source issues preserved for review

1. News title dated `2026.10.01` says CVPR **2027**; the same entry's body says CVPR **2026** in Seattle. Both source statements are retained.
2. The KIC DC Tech **2026** entry on News says `2025.07.05`; Home says `2026.07`. Both source statements are retained.
3. Several original publication link labels have no hyperlink. They remain labels rather than guessing a paper URL.
4. A baseline audit found 26 missing local link/asset references across the existing paper HTML (313 local references checked), including placeholder Trip2GS URLs and old `nerfies_paper.pdf` footer links. See `existing-project-baseline.json`. These are source issues, not caused by this migration.
5. The original paper projects retain their files and any pre-existing missing links or console errors. Their existing Home icons may still point to `unist.info`; changing those project HTML bytes was outside the preservation scope.

Obvious spelling only: `Intergrated` → `Integrated`, `Editional` → `Editorial`. Instagram profile URL was taken from the source, not inferred.

## Checks

`npm test` tests rejection of invalid/duplicate content. `npm run build` checks Astro types, record fields, local media, route links/fragments, preview noindex or production canonical policy, and the 20 MB delivery budget. The deploy job depends on those checks.

The compatibility workflow builds current existing projects with the official Jekyll action, combines a production Astro build, compares project assets byte-for-byte, and prepares a recovery package. The sole exclusion is the 52 approved unused MambaDance duplicates, totaling 207,263,010 bytes. Original Git files and every LighthouseGS copy are preserved. Frozen MambaDance HTML/CSS/JS hashes force re-review if future code might use those images. Both published-tree bytes and a conservative tar upper bound must remain below 1,000,000,000.

A source-to-rendered text audit compares every captured text/profile/timeline block, including Recruitment and all six research detail panels. Browser checks and actual workflow outcomes are recorded after execution. A started or queued check is not a pass.

The final source-to-rendered text audit passed all 457 captured text/profile/timeline blocks across the ten text pages; SNS separately preserves all 20 verified post URLs/captions. See `content-audit.json`.

## Executed automatic checks

- [Preview deployment](https://github.com/vision3d-lab/lab-homepage-preview/actions/runs/37501885583): passed for the final implementation, commit `ed4b3895443f5616433a30f54ccef2728aed832e`.
- [Project compatibility and recovery](https://github.com/vision3d-lab/lab-homepage-preview/actions/runs/37501885633): passed with **23 projects / 684 preserved files**, **970,667,397 published bytes**, and a conservative uncompressed tar bound of **973,020,160 bytes**.
- [Recovery package](https://github.com/vision3d-lab/lab-homepage-preview/actions/runs/37501885633/artifacts/11429773204): generated and uploaded, 943,460,905 bytes including archive wrapping. Retained for 30 days; regenerate it before a later production transition.
- Live preview: **11 routes + 277 asset/endpoint URLs** passed; every route has noindex. The final local homepage build is **19,190,453 bytes**.
- Existing live projects: **23/23 entry URLs** passed; **348 asset/entry URLs** checked. All 50 LighthouseGS comparison images responded successfully. 14 failing asset URLs match pre-existing missing files; these are included in `live-project-check.json`. No existing project bytes were changed.
- News/Home and publication addition examples rendered in an isolated candidate; duplicate news content failed validation. Sample records were never deployed.

The final live-preview check again passed all 11 routes and 277 asset/endpoint URLs. The official repository remained at `5a918a0612b3efeb33d1b8851e7cb080f41cb336`, with Pages still using its existing legacy build from `main` at `/`. Production has not been switched; completed-preview approval remains the next gate.

The optional `validate_failure_gate` workflow-dispatch input injects a duplicate record only inside a temporary runner. Its deliberately failing check must skip deployment, proving the publishing gate without committing broken content.

The [executed failure-gate proof](https://github.com/vision3d-lab/lab-homepage-preview/actions/runs/37500057374) rejected `news: duplicate id 62a7ffc60236`; artifact upload and the entire deploy job were **skipped**. The red result of this explicitly named test is expected; the previously deployed preview remained available.

## Executed browser checks

Chrome was operated through its native UI. Source and preview were compared at the same desktop window size, and at **768 × 844** and **390 × 844** in responsive emulation. This is browser emulation, not physical-device or Safari testing. The desktop style is retained; smaller screens use wider content columns and proportional slides to keep images and text readable. The four Home section headings retain the source's bold gray treatment.

- Home: original logo, navy/white styling, content width, slide proportions and content order; automatic transitions, pause and slide selection.
- Navigation: mobile open/close, Members submenu and Students navigation; desktop submenu, Tab traversal and Escape. Escape now restores the toggle's focus and the mobile button's accessible name.
- Research: all six detail dialogs opened and closed with Escape; the close button returned focus to the originating button. Images and full descriptions rendered in the mobile dialog.
- Resource: Sensor/Server category anchors moved to the respective sections; server details collapsed. The original category controls are section anchors, rather than hidden tab panels, and that behavior is retained.
- Publications: year selection changed the page fragment and scrolled to the year; all original years/type groups remain.
- Professor, News, Project, Students and Recruitment: content rendered in the browser, with responsive portraits, image/text rows and long text wrapping.
- Contact: the original Google Maps embed loaded its UNIST campus marker and controls. Public email links retain their `mailto:` destinations.
- SNS: official Instagram embeds loaded profile/post content; independent `Instagram에서 보기` fallback links and YouTube/GitHub links remained present.
- Legacy `?page_id=1604` redirected to the preview's `/research/` path.
- Existing MambaDance: the first muted video advanced beyond nine seconds; the FineDance comparison video advanced beyond sixteen seconds, then was paused.
- Existing LighthouseGS: Dressing room and Bedroom changed the real/synthetic comparison images; dragging the comparison boundary visibly changed the image partition. All 50 dynamically used image URLs also passed the live asset check.

Chrome's installed extension emitted `Unchecked runtime.lastError: The message port closed before a response was received` on source and preview pages, including the Google Maps frame. This is recorded separately from site checks; no site-script error was observed during the interactions above. Third-party map/Instagram availability continues to depend on those services and browser privacy settings.
