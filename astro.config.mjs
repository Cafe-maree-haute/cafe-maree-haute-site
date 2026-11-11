// @ts-check
import { defineConfig } from 'astro/config';

// Static site, built by Cloudflare Pages with `npm run build` into `dist`.
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
});
