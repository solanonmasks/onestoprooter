# One Stop Rooter Plumbing website

A static website built with [Astro](https://astro.build), from the design handoff in `design-handoff/`.

## Pages

| URL | File |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/services/<slug>/` (9 pages) | `src/pages/services/[slug].astro` (one template) |
| `/contact/` | `src/pages/contact.astro` |
| `/thanks/` | `src/pages/thanks.astro` (form fallback when JavaScript is off) |

## Where to change things

- **Phone number, Google reviews link, privacy policy link:** `src/data/site.js`
- **Service area cities, review quotes, stats, promises, "How it works" steps, FAQs:** `src/data/site.js`
- **All service page text:** `src/data/services.js` (one block per service)
- **Colours, fonts, spacing:** `src/styles/global.css` (colours are at the top)
- **Header, footer, mobile menu, SEO tags:** `src/layouts/BaseLayout.astro`
- **Photo:** `public/images/hero-plumber.webp`

## Running it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install       # first time only
npm run dev       # live preview at http://localhost:4321
npm run build     # makes the finished site in the dist/ folder
npm run preview   # view the built site
```

The `dist/` folder is the whole website: plain HTML, CSS and images that any web host can serve.

## Estimate form

The form is set up for **Netlify Forms**. If the site is hosted on Netlify, submissions appear in the
Netlify dashboard, where you can turn on email notifications to the client. On any other host the
form will show "Sorry, that didn't go through. Please call..." until it's connected to a form service
(for example Formspree: change the `fetch('/')` URL and the form `action` in `src/pages/contact.astro`).

## Still needed from the client

- Google reviews URL (link is hidden until added)
- Real review text to replace the three placeholder quotes
- Email address the estimate form should go to
- Logo file (SVG preferred); the wordmark is set in type for now
- Privacy policy PDF URL (footer link is hidden until added)
- Confirmation of the iStock photo licence
- More photos for the service pages (they all reuse the hero photo for now)
- Who controls the domain and hosting (current site is a Yellow Pages Wix build)
- The old Wix page URLs, so 301 redirects can be added (e.g. in a `public/_redirects` file on Netlify)
