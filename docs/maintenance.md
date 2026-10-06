# Maintaining content

`src/content/` is the edit surface; `src/pages/`, `src/components/`, and `src/styles/` are the presentation layer.

| Change | File |
|---|---|
| News and Home summaries | `news.json` |
| Papers | `publications.json` |
| Students, Staff, Interns, Alumni | `members.json` |
| Professor | `professor*.json`, `professor-*.md` |
| Research overview and detail | `research-*.md`, `research-areas.json`, `research-groups.json` |
| Funded projects | `projects.json` |
| Equipment | `resources.json` |
| Home slides | `slides.json` |
| Recruitment / Contact | corresponding `.md`, `contact-map.json` |
| Instagram posts | `instagram.json` |
| Local media mapping | `media.json`, `public/lab-media/` |

## Add news

Add a record to `news.json` with a unique `id`, source-backed `year`, `date`, `title`, `body`, `imageSource`, and `source`. A record with `summary` and `homeOrder` also appears on Home. Adjust the other `homeOrder` values intentionally. The same record drives both views. `homeOnly: true` is reserved for announcements that exist only on the original Home page; it preserves the source without fabricating a full News article.

`body` supports simple formatting and links. Scripts, event handlers and iframes are rejected. `npm run build` fails for missing fields, duplicate IDs, unmigrated images, missing links/fragments or excessive output size.

## Add a publication

Add a unique record with `id`, `year`, `type`, `title`, `authors`, `venue`, `body`, `imageSource`, `links`, and `source`. Verify all author order, venue, dates and URLs from approved evidence. Group/type and year determine placement; keep newest years first. Formatting in `body` preserves corresponding-author emphasis from the original. `links` records the source URLs for validation; edit matching link labels in `body` together.

For a new image, place an optimized WebP (or looping MP4 plus poster) under `public/lab-media/`, add its key and local path to `media.json`, and reference the source key in the record. New records may use a stable local key directly as `imageSource`. Markdown detail images use `/lab-media/...`; the build prefixes preview paths automatically. Keep useful alt text, aspect ratio, and the 20 MB delivery budget. Never include a secret or unpublished private portrait/content.

## Add an Instagram post

Add its verified official permalink `https://www.instagram.com/p/POST_ID/` and source caption in `instagram.json`. The external embed script handles rendering; a permanent link works even when cookies, content access or network conditions prevent loading. No token or API feed is used.

## Add a paper project after production migration

In `vision3d-lab/vision3d-lab.github.io`, create the paper folder at the repository root, alongside existing paper folders. Put its HTML, CSS, JS, video and other assets there. Paths remain `https://vision3d-lab.github.io/<folder>/`. Reserve homepage routes and `lab-assets/`, `lab-media/`, `lab-fonts/`, `lab-site/`; do not reuse them for a project.

Run the combined workflow and review the new project URL. It preserves Jekyll output and overlays only the homepage routes/assets. The combined tree and upload package must remain below 1,000,000,000 bytes. Never automatically delete old files to satisfy the budget. Only the 52 specifically approved MambaDance duplicates may be omitted, after hash/reference validation.

## Failure and recovery

The deploy job depends on a successful build; a failed check cannot publish. Revert a faulty content commit and let the same checks deploy the previously working content. For the first production transition, prepare and retain the legacy entry package and verification manifest before changing Pages to Actions. See `production-pages.yml` and the merge script. If rollback is needed, deploy the retained package with the old root entry. Original Git project files remain recoverable independently.
