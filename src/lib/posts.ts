import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

// Cloudflare Pages sets CF_PAGES_BRANCH while it builds the site.
// Drafts are hidden only on the live site (the main branch).
// Every other branch (preview links) and local builds show them.
const branch = process.env.CF_PAGES_BRANCH;
export const showDrafts = branch !== 'main';

export type Post = CollectionEntry<'blog'>;

// The part of the address after /blog/. A date at the start and a "-en" or
// "-fr" ending are removed, so the English and French versions of a post
// share the same address.
export function postSlug(post: Post): string {
  return post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/[-.](en|fr)$/, '');
}

export async function getPosts(lang?: Lang): Promise<Post[]> {
  const posts = await getCollection('blog', (post) => {
    if (!showDrafts && post.data.draft) return false;
    if (lang && post.data.lang !== lang) return false;
    return true;
  });
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function postUrl(post: Post): string {
  const base = post.data.lang === 'fr' ? '/fr/blogue/' : '/blog/';
  return `${base}${postSlug(post)}/`;
}
