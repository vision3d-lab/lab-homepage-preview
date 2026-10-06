# UNIST 3D Vision & Robotics Lab homepage

Public review preview: **https://vision3d-lab.github.io/lab-homepage-preview/**

The homepage is an Astro static site. Markdown contains detailed introductions; JSON contains publications, people, news, equipment, research cards, slide lists and Instagram permalinks. Media and fonts are served locally. Public content comes from https://unist.info/.

## Local review

Use Node.js 24 or newer.

```sh
npm ci
npm test
npm run build
npm run preview
```

Open `/lab-homepage-preview/` on the displayed local address. `npm run dev` supports editing. To check production routes locally, use `SITE_MODE=production npm run build`. Rebuild in preview mode before publishing this repository.

## Update workflow

1. Ask AI to edit the relevant content file, preserving verified names, dates, authors and links.
2. Review the content diff and local/public preview. Explicitly approve scientific, membership or date changes.
3. Commit the reviewed content. The workflow validates it, checks assets/internal links and the size budget, builds, then deploys only if those steps succeed.

See [the maintenance guide](docs/maintenance.md), [design reference](DESIGN.md), and [migration review](docs/migration-review.md). This preview repository is temporary. After the finished preview is approved, `lab-site/` in `vision3d-lab/vision3d-lab.github.io` becomes the source of truth.

## Production gate

This repository deploys **only** the preview. The production workflow in `docs/production-pages.yml` is an integration candidate. Do not install it or change the official repository's Pages source until the researcher explicitly confirms satisfaction with the completed preview. Existing paper paths and Git originals must remain intact.

Lab content and photographs retain their respective ownership; no general redistribution license is granted for them. Open Sans and Arimo font licenses are included in `public/lab-fonts/`.
