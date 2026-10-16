# CFI Website: Technical Analysis

Frontend redesign of the Christian Friends of Israel UK website. This document covers the tech stack, architecture, current limitations and suggested next steps.

## Getting started

```bash
npm install      # first time only
npm run dev      # dev server on http://localhost:61287 (next free port if taken)
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Requires Node.js 18 or newer (built with Node 20.19.5).

## Tech stack

| Layer | Tool | Version |
|---|---|---|
| UI library | React | 18.3.1 |
| Routing | react-router-dom | 6.30.6 |
| Build tool / dev server | Vite | 5.4.21 |
| JSX compile | @vitejs/plugin-react | 4.7.0 |
| CSS | Plain CSS in one file, with Tailwind loaded | Tailwind 3.4.19 |
| CSS processing | PostCSS + Autoprefixer | 8.5 / 10.6 |
| Language | JavaScript (JSX), no TypeScript | ES modules |
| Fonts | Google Fonts: Inter, Merriweather, Roboto, Roboto Condensed | loaded from Google's servers |

- **Dependencies:** only three runtime libraries (`react`, `react-dom`, `react-router-dom`). No UI kit, no animation library, no backend.

## Architecture

**Single-page app (SPA):** the browser loads one `index.html` plus one JS bundle, and React Router swaps pages without a full reload.

```
index.html → src/main.jsx → <BrowserRouter> → App.jsx
                                   ├─ Header (nav, search, Donate, Login)
                                   ├─ <Routes> → 20 page components
                                   └─ Footer
```

### Folder structure

```
src/
├─ main.jsx, App.jsx        entry, routes, page titles
├─ styles.css               all styling
├─ components/ (12)         Header, Footer, HeroSlider, HomeIntro, ShopHighlight,
│                           AboutLayout, NewsLayout, PageHero, Reveal,
│                           VideoFeature, DemoForm, Icon, ScrollToTop
├─ data/ (4)                site.js, news.js, shop.js, downloads.js
└─ pages/ (20)              one file per page
public/                     logo, hero images, book covers
```

### Routes

| Section | Routes |
|---|---|
| Home | `/` |
| About CFI | `/about`, `/about/international-relationships`, `/about/how-we-began`, `/about/what-we-do`, `/about/doctrinal-information`, `/about/kesher-course`, `/about/israel-questions` |
| News | `/news`, `/news/:slug` |
| Other pages | `/downloads`, `/prayer`, `/magazine`, `/shop`, `/links`, `/contact`, `/login` |
| Donations | `/donate` and `/support` (same page) |
| Unknown address | redirects to `/` |

### Shared layouts

Shared layout components hold the common sidebar and header, so each page only adds its own content:

- `AboutLayout`: the 7 About pages (sidebar links + "New to CFI?" video)
- `NewsLayout`: the News list and article pages (News, Categories and Tags sidebar)
- `PageHero`: the blue page header and breadcrumb on every inner page

### Content as data

News, shop products, downloads, navigation and contact details live in `src/data/*.js`. Adding a news article, product or download means adding one entry to the matching file; no page code changes. This also makes a later move to a CMS straightforward.

| File | Contents |
|---|---|
| `site.js` | Site name, contact details, charity/company numbers, nav, download categories |
| `news.js` | News articles (title, date, type, excerpt, body, optional video), categories, tags |
| `shop.js` | Homepage recommended books, shop products, categories, subjects |
| `downloads.js` | PDF downloads per category |

## Styling

- **Approach:** one stylesheet (`src/styles.css`) using BEM-style class names such as `.news-item__title`, with colour variables in `:root`. Tailwind is installed and available, but nearly all styling is custom CSS.
- **Look:** blue gradients (`#2a5c9e` → `#4a86cc`), gold accents (`#ffc21a`), white cards and wave edges between sections.
- **Responsive:** main breakpoints at 960px and 560px. On phones the sidebars move above or below the main content. Every page has been checked at 390px (phone) and 1280px (desktop) with no horizontal scrolling.

## Interactive features

All built without external libraries.

| Feature | How it works |
|---|---|
| Hero slider | React state, auto-advances every 7s, swipe and arrow-key support, gold progress ring |
| Scroll reveal | `Reveal` component uses IntersectionObserver; content animates in once when it comes on screen |
| 3D book covers, card hovers | CSS transforms only, so the browser animates them cheaply |
| YouTube videos | Thumbnail shown first; the YouTube player loads only when clicked |
| Magazine | Yumpu flipbook embedded in the page, with resize workarounds |
| Donations | Quick amount buttons, editable amount, live Gift Aid total |
| Shop / Downloads / News | Filtering and search driven by the address bar (`?cat=`, `?type=`, `?q=`) |
| Sticky nav | Mini logo slides into the nav once the header scrolls away |

## Performance

| Item | Size |
|---|---|
| JS bundle | 240 KB (75 KB gzipped) |
| CSS | 82 KB (16 KB gzipped) |
| Images in `public/` | 1.3 MB |
| Build time | ~1 second |

- **Lazy loading:** YouTube players and images further down the page load only when needed.
- **Animations:** only movement and fade effects, so scrolling stays smooth.
- **Not yet optimised:**
  - No code splitting; all pages ship in one bundle.
  - Images are plain JPG/PNG rather than WebP.

## Accessibility

- **Navigation:** skip-to-content link, visible keyboard focus rings, `aria-current` on the active nav and sidebar links.
- **Forms and images:** every form field has a label; images and icons have alt text or are hidden from screen readers.
- **Screen readers:** external links announce "opens in a new tab", and "Read more" links include hidden context.
- **Known gap:** the hero slider autoplay cannot be paused, which falls short of the WCAG guideline on moving content.

## Limitations and risks

1. **Frontend only.** The contact, donation, login and newsletter forms submit nothing, and there's no payment processing, user accounts or email sending.
2. **Content is in code.** Editors need a developer to add news, products or downloads; there's no CMS.
3. **SEO.** As a single-page app, content appears only after JavaScript runs. Page titles update per page, but there are no per-page meta descriptions or social preview tags, and no sitemap.
4. **Hosting needs an SPA fallback.** The server must send `index.html` for every path, otherwise refreshing `/about` (or any inner page) returns a 404.
5. **External dependencies:**
   - PDF downloads link directly to `cfi.org.uk`.
   - The magazine relies on Yumpu, which shows its own branding. A mobile next-arrow issue was reported but couldn't be reproduced in testing.
   - Videos come from YouTube and fonts from Google.
6. **No tests, linting or TypeScript**, and the project is not yet under version control.
7. **reCAPTCHA** on the contact form is a placeholder box only.
8. **Single 82 KB stylesheet.** Fine at the current size, but harder to maintain as the site grows.

## Suggested next steps

| Priority | Step |
|---|---|
| High | Put the project under version control (`git init` + first commit) |
| High | Choose hosting (Netlify, Vercel or GitHub Pages) and configure the SPA fallback |
| High | Connect the forms to a backend (e.g. Formspree or a serverless function) |
| Medium | Add a headless CMS (Sanity, Strapi or Contentful) for news, shop and downloads |
| Medium | Add per-page meta tags and a sitemap, or move to Next.js if search ranking matters |
| Medium | Integrate real payments (Stripe, PayPal or a donation platform) and real reCAPTCHA |
| Low | Code splitting with `React.lazy`, convert images to WebP, add ESLint + Prettier, add a pause control to the hero slider |
