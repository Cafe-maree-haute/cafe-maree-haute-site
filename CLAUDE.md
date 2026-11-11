# CLAUDE.md: rules for working on the Café Marée Haute website

The owner is not technical. Explain everything in plain language, with short steps.

## How every change is made

- **Never change `main` directly.** `main` is the live site.
- For each change, create a new branch from `main`.
- Open a pull request into `main`.
- Give the owner the Cloudflare Pages preview link for that branch so they can check the change. The link looks like `https://<branch-name>.<project>.pages.dev` (branch names are shortened and use dashes).
- **Only the owner merges pull requests.** Never merge one yourself.
- After anything is merged into `main`, update the `preview` branch from `main` so it matches the live site.
- Run `npm run build` before pushing. It must succeed.

## Café facts

- Name: Café Marée Haute, a small seaside café in Shediac, New Brunswick.
- Locally roasted coffee, house-made pastries and a daily soup.
- Open Tuesday to Sunday, 7 a.m. to 4 p.m. Closed Mondays.
- Feel: warm, simple and coastal. Sand, sea blue and soft light.
- Customers are locals and summer visitors. The site must work well on phones.
- Address, phone and email are still placeholders in `src/data/site.ts`.

## Languages

- The site is bilingual. English is the main language, French is second.
- Write the English first, then adapt it to French. Never translate word for word.
- Use Southeast New Brunswick Acadian French: warm and natural, not formal Quebec or Parisian French. No slang.
- Every page has a button to switch languages. A new page needs both versions and an entry in `routes` in `src/i18n/ui.ts`.

## Writing style

- Warm, simple and local.
- No em dashes.
- Nothing salesy or overpromising.
- No stock photos. Use the photo spot component (`PhotoSpot`) where a photo will go.

## How the site is built

- Astro static site, deployed on Cloudflare Pages. Build command `npm run build`, output folder `dist`.
- Node version is in `.node-version`. Keep it in line with what Astro needs (`engines` in `node_modules/astro/package.json`).
- Café facts and photos: `src/data/site.ts`. Menu and prices: `src/data/menu.yml`.
- Page text lives in `src/views/`. Each view holds the English and French copy side by side. Files in `src/pages/` only point to the views.
- Blog posts: `src/content/blog`, one Markdown file per language. Fields: `title`, `date`, `lang` (`en` or `fr`), `description`, `image`, `draft`.
- To pair an English and French post, give the files the same name ending in `-en.md` and `-fr.md`.
- Drafts: `draft: true` posts are hidden only when `CF_PAGES_BRANCH` is `main`. Every other build shows them, with a banner saying drafts are visible. Logic is in `src/lib/posts.ts`.
- Pages CMS is set up in `.pages.yml`. Photos go in `public/images`. New posts start as drafts. Keep field labels bilingual.
