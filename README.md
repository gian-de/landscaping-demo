# Lawnx website

Nuxt site for a Reno landscaping client. The homepage follows the Lawnx layout: top bar, hero with consultation form, client logos, about, team, FAQ, blog, and footer. Copy and photos are meant to come from WordPress. Until that CMS is connected, the site uses the same copy stored in `cms/wordpress-content.md`.

## Run it

Node `22.21` or newer. This repo includes `.nvmrc`.

```bash
nvm use
npm install
npm run dev
```

Open `http://localhost:3000`.

## WordPress

1. Paste the copy from `cms/wordpress-content.md` into the WordPress fields named there.
2. Upload the images listed in that file to the Media Library.
3. Copy `.env.example` to `.env` and set `NUXT_PUBLIC_WP_URL` to the WordPress origin.
4. Restart the dev server.

The site reads, in order:

- ACF fields on the page with slug `home`
- Blog posts
- Custom post types `team`, `faq`, and `project` when those endpoints exist

If WordPress is unreachable, the local copy stays on screen.

`NUXT_WP_FORM_ENDPOINT` is optional. When it is set, consultation and newsletter submissions are forwarded there.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```
