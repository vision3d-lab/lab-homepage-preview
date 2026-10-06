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
