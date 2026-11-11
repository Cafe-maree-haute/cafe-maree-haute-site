# Café Marée Haute website

The website for Café Marée Haute in Shediac, in English and French. You own all of it: the words, the photos and the code.

## How the site works

- The **live site** is built from the `main` branch. Whatever is on `main` is what customers see.
- Every other branch gets its own **preview link** from Cloudflare. Use it to check changes before they go live.
- The `preview` branch is where you can write blog posts and see drafts before publishing.

## Asking Claude for a change

1. Tell Claude what you want, in your own words.
2. Claude makes the change on a new branch and opens a pull request.
3. Claude gives you a preview link. Open it on your phone and check it.
4. If it looks good, open the pull request on GitHub and click **Merge pull request**. The live site updates in a few minutes.
5. If it doesn't look right, tell Claude what to fix.

Only you merge. Claude never changes the live site on its own.

## Writing a blog post

You write posts in **Pages CMS** (app.pagescms.org). Sign in with your GitHub account and pick this website.

1. In Pages CMS, choose the `preview` branch at the top.
2. Open **Blog / Blogue** and click **Add an entry**.
3. Fill in the title, language, date and a short summary. Add a photo if you have one.
4. Write the post and click **Save**. New posts start as drafts, so they never show on the live site by mistake.
5. Check it on the preview link for the `preview` branch. A yellow banner at the top tells you drafts are visible there.
6. When it's ready, turn off **Draft / Brouillon** and save.
7. On GitHub, open a pull request from `preview` into `main` and merge it. The post is now live.

Write the French version as its own post, with **Français** as the language. It doesn't need to match the English word for word.

## Changing the menu or prices

In Pages CMS, open **Menu** and change any name, description or price. Save, check the preview, then merge like a blog post.

## Adding your photos

Each grey striped box on the site is a spot for one of your photos.

- Blog photos: upload them right in the post in Pages CMS.
- Page photos: ask Claude to put a photo in a spot, and send the photo with your request.

## Things still to fill in

- The address, phone and email in `src/data/site.ts`.
- The real prices in the menu.
- Your own story on the About page.

## For developers

- `npm install`, then `npm run dev` to work locally, or `npm run build` to build into `dist`.
- Cloudflare Pages settings: build command `npm run build`, output directory `dist`. The Node version comes from `.node-version`.
- More details and the rules for changes are in `CLAUDE.md`.
