# Handoff: One Stop Rooter Plumbing website

## Overview
Redesign of onestoprooterplumbing.com (currently a Wix/Yellow Pages build). A local, family-owned 24/7 plumbing company in Burnaby, BC. The single goal of the site is to get people to **call 604-681-1100**. Secondary action is a free-estimate form. The look is "work truck / trade signage": loud, condensed uppercase type, solid red/black/white blocks, the phone number huge everywhere.

## About the design files
`One Stop Rooter Site.dc.html` is a **design reference built in HTML**, a prototype showing intended look and behaviour, not production code. Recreate it in the target stack. If none exists, a static-site framework (Astro, Next.js static export, or Eleventy) is the right fit: content-only, SEO-critical, no app state. Open the HTML file in a browser to view it; the three pages are switched client-side in the prototype but should be **real, separate URLs** in the build.

`content-brief.md` contains every page of the old site (11 pages) with headings, lists and facts. Use it to build the remaining service pages from the Drain Cleaning template.

## Fidelity
**High-fidelity.** Final colours, type, spacing, copy and responsive behaviour. Recreate pixel-accurately.

## Site map to build
- `/` Home
- `/services/<slug>` one page per service, all using the **Service page template** (designed: Drain cleaning). Services:
  drain-cleaning, sewer-lines-camera-inspection, broken-water-lines, water-heaters, installation-repair, sewer-sump-pumps, garburators, commercial-residential, emergency-plumbing
- `/contact`
- Privacy policy (existing PDF, link in footer)

Every service card / "Other services" link must go to its own page (the old site had three cards linking to the wrong pages).

## Global layout rules
- Horizontal page padding: `clamp(20px, 5vw, 72px)`.
- Section vertical padding: `clamp(56px, 7vw, 112px)` (main sections), `clamp(40px, 5vw, 72px)` (promise band).
- No border-radius anywhere. No shadows, no gradients, no hairline dividers, no icons, no arrows on links.
- Tiles are separated by an **8px gap** on a solid background, not by borders.
- Links are underlined: `text-underline-offset: 4px; text-decoration-thickness: 2px`.
- Body text 18px / 1.5, never smaller than 15px.
- Two-column sections use `grid-template-columns: repeat(auto-fit, minmax(min(100%, 520px), 1fr))` so they stack to one column on small screens.

## Header (all pages, sticky)
**Desktop (≥1024px)**, height min 88px, background `#0d0d0d`, white text:
- Left (padding-left 40px): wordmark, two stacked lines, Barlow Condensed, uppercase, line-height 0.9. "One Stop" 900/34px in red `#d32424`-ish (see tokens); "Rooter Plumbing" 800/22px white. Click → Home. *(Replace with real logo file when supplied; current logo: https://static.wixstatic.com/media/ba2cd3_c832d5edf8cd4b41a23d9c4f2e6294b8~mv2.png)*
- Centre nav, gap 32px, Barlow 600/18px: Home · Services · Water heaters · Contact. Active item: underline 3px red, offset 8px.
- Right: full-height red block, padding 0 36px, `tel:` link. Line 1 "Call 24/7" Barlow 700/16px; line 2 "604-681-1100" Barlow Condensed 900/34px; white text. Hover: white background, black text.

**Mobile/tablet (<1024px)**, height min 68px:
- Wordmark (26px / 17px), padding 0 20px.
- Right: "Menu" button (Barlow 700/18px, min-width 84px). Toggles to "Close".
- Open menu: full-width stacked list on `#1f1f1f`, Barlow Condensed 800/32px uppercase, each item padding 14px 20px. Selecting an item closes the menu.

## Sticky mobile call bar (<1024px only)
Fixed to the bottom, full width, min-height 64px, red background, white Barlow Condensed 900/30px uppercase: "Call 604-681-1100" (`tel:6046811100`). Add 64px bottom padding to the page so the footer isn't covered.

## Home page
1. **Hero** (black, 2 columns)
   - Left column, padding `clamp(36px,6vw,88px) clamp(20px,5vw,72px)`, vertical gap 28px:
     - Eyebrow: "Burnaby, BC. Open 24 hours, 7 days a week." Barlow 700/18px, light red.
     - H1: "24/7 plumbing & drain cleaning in the Lower Mainland", Barlow Condensed 900, uppercase, `clamp(50px, 6.6vw, 112px)`, line-height 0.88, `text-wrap: balance`.
     - Phone: "604-681-1100", Barlow Condensed 900, `clamp(54px, 7.4vw, 120px)`, red, tel link, hover white.
     - Row (gap 16px 28px, wraps): solid red button "Call now, we pick up" (Barlow 700/20px, padding 18px 32px, white text; hover white bg/black text) + underlined text link "Or book a free estimate" → /contact.
     - Trust line: "Licensed and insured. Same-day service. Free estimates and senior discounts. Family-owned and operated." 500/18px, `#d1d1d1`, max-width 560px.
   - Right column: photo `uploads/iStock-615603432.webp`, `object-fit: cover`, `object-position: 30% 40%` (keeps the plumber's face in frame), min-height `clamp(320px, 46vw, 760px)`. No text over the photo.
2. **Promise band** (red, white text), 3 columns auto-fit min 300px, gap 36px 48px. Each: H2 Barlow Condensed 900 uppercase `clamp(36px,3.6vw,52px)` lh 0.92, + 500/18px line.
   - "No hidden charges. No overtime fees." / "The price is the same at 2 in the morning as it is at 2 in the afternoon."
   - "Free inspection" / "We check for hidden problems and explain every option and price before any work starts."
   - "Licensed, bonded & insured" / "Certified plumbers on every job, for homes and businesses."
3. **Services** (white)
   - Intro row: H2 "Fast, reliable plumbing you can trust" (`clamp(44px,5.6vw,88px)`, lh 0.9) + paragraph 20px "From a slow kitchen drain to a burst water line, one call gets it handled. Residential and commercial, anywhere in the Lower Mainland." Margin-bottom 40px.
   - Grid `repeat(auto-fill, minmax(min(100%,300px),1fr))`, gap 8px, 9 tiles. Tile: `#ebebeb` bg, padding 28px 28px 24px, min-height 220px, whole tile clickable. Title Barlow Condensed 800/34px uppercase lh 0.95; description 18px; underlined "See details" 700. Hover: red bg, white text.
   - Tiles (name / description):
     - Drain cleaning / Kitchen, bathroom and tub clogs cleared, from grease to hair.
     - Sewer lines & camera inspection / Roots, breaks, bellies and blockages found on camera and fixed.
     - Broken water lines / Low pressure, soggy lawn, high bill. Including no-dig water main replacement.
     - Water heaters / Hot water tank installs, leak repairs and safe removal of the old unit.
     - Installation & repair / Toilets, sinks, faucets, showers, perimeter drains and leaks.
     - Sewer & sump pumps / Pedestal and submersible pumps, battery backups, built to code.
     - Garburators / Slow, smelly or jammed units repaired, or upgraded and installed.
     - Commercial & residential / Homes and businesses. Clean job sites, no hidden charges.
     - Emergency plumbing / Burst pipe or backup at 2 a.m.? Call. No overtime fees.
4. **Reviews** (black, white text)
   - Intro row: H2 "Family-owned since 2001" + 22px/600 line "Over **25 years** of homeowners and businesses across the Lower Mainland calling us back." ("25 years" in light red, 800.)
   - 3 tiles, auto-fit min 320px, gap 8px, bg `#1f1f1f`, padding 32px. Quote 22px/500 lh 1.4 in curly quotes; name 700.
     - "Called at midnight with water coming through the ceiling. They were here in under an hour and the price was exactly what they quoted." Jill A., Burnaby
     - "Camera inspection showed roots in our sewer line. They walked us through the footage and fixed it the same day." Bob B., Coquitlam
     - "We use them for all three of our restaurants. Fast, tidy, and they never hit us with surprise fees." Dave C., Vancouver
   - Underlined link "Read our reviews on Google" (**URL needed from client**).
5. **Where we work** (`#ebebeb`), 2 columns. H2 "Where we work" + "Based in Burnaby and on the road across the Lower Mainland. Don't see your city? Call anyway." Right: city names as wrapping inline list, Barlow Condensed 800 uppercase `clamp(26px,2.6vw,36px)`, gap 6px 28px.
   Master list (use everywhere): Abbotsford, Burnaby, Coquitlam, Delta, Ladner, Langley, Maple Ridge, Mission, New Westminster, North Vancouver, Port Coquitlam, Richmond, Surrey, South Surrey, Tsawwassen, Vancouver, West Vancouver, White Rock.
6. **Call band** (red, white text), flex wrap, space-between, align end. H2 "2 in the afternoon or 2 in the morning, we answer." (`clamp(44px,6vw,96px)`, max-width 900px) + black button "604-681-1100" (Barlow Condensed 900 `clamp(36px,4vw,56px)`, padding 20px 32px; hover white bg/black text).

## Service page template (designed with Drain cleaning)
1. **Hero** (black, 2 columns): breadcrumb "Services / Drain cleaning" (600/17px, "Services" underlined); H1 "Drain cleaning across the Lower Mainland" (same scale as home H1); 20px intro, `#dedede`; red button "Call 604-681-1100" (Barlow Condensed 900/36px, padding 18px 28px) + "Free estimate. Senior discounts." 600. Right: photo, `object-position: 65% 50%`. Use a service-specific photo per page when available.
2. **"Call us if you notice"**: H2 + 4 grey tiles (auto-fit min 240px, gap 8px, min-height 150px, text bottom-aligned, Barlow Condensed 800/34px uppercase): Water pooling near fixtures · Foul smell from the drain · Gurgling noises · Slow-draining sinks or tubs.
3. **Sub-services**: 3 black tiles (auto-fit min 320px, gap 8px, padding 32px), title Barlow Condensed 900/40px uppercase light red, body 18px white.
   - Kitchen drains / Grease, fats, soap and food build up fast. Skip the store-bought chemicals; we clear it properly with current equipment.
   - Bathroom sinks / Hair, toothpaste, soap scum and beauty products. A camera finds the blockage quickly so we fix the cause, not just the symptom.
   - Bathtubs / A slow tub today is a backup tomorrow. We clean it out before it turns into a costly repair. Free estimates, senior discounts.
4. **Cross-sell** (`#ebebeb`, 2 columns): H2 "Same clog keeps coming back?" + 20px paragraph about camera inspection + underlined link → sewer-lines page.
5. **Call band** (red): H2 "Day or night, we fix it right" + line "No overtime fees for emergencies." with underlined "Emergency plumbing" link; black phone button.
6. **Other services**: H2 (`clamp(36px,4vw,56px)`) + grid of underlined links (auto-fill min 260px, 700/20px) to all 9 services.

For other service pages, map content from `content-brief.md`: headline → H1, warning signs / problem lists → tile row, sub-services → black tiles, the page's "banner" → call band headline. Rewrite body copy into short plain sentences in the same voice.

## Contact page
1. **2 columns**
   - Left (black): H1 "Your prompt, local plumber"; 20px "The fastest way to reach us is the phone. Someone picks up 24 hours a day, every day of the year."; huge red phone number; 3 facts (auto-fit min 160px): Hours / Open 24/7, Based in / Burnaby, BC, Customers / Homes and businesses (labels 700 light red).
   - Right (`#ebebeb`): form, max-width 560px, gap 20px. H2 "Not urgent? Get a free estimate", line "Tell us what's going on and we'll call you back with a price." Fields (label 700 above input; input 18px, padding 14px, 2px solid `#0d0d0d` border, white bg, radius 0): Name (required), Phone (required, tel), Email (email), What needs fixing? (textarea, 4 rows). Submit: black button "Send request" (700/20px, padding 18px 32px; hover red).
   - Success state replaces the form: H2 "Got it. We'll call you back." + "Leaking right now? Don't wait for us. Call 604-681-1100." (number underlined, tel link).
   - **Form needs a real backend** (email to the client, or Formspree/Netlify Forms). The old site has no email address; confirm the destination inbox with the client.
2. **Service areas**: H2 + same master city list.

## Footer (all pages)
Background `#030303`, padding 56px x / 32px bottom. 4 columns auto-fit min 200px, gap 32px: wordmark (40px / 26px) · "Call 24/7" + 604-681-1100 (700/22px) · "Based in" Burnaby, BC · "Pages": Services, Contact, Privacy policy. Labels 700 light red. Bottom line 16px `#b7b7b7`: "© 2026 One Stop Rooter Plumbing. Family-owned, locally operated. Licensed, bonded and insured." No empty "Social" heading; add social links only if the client provides them.

## Interactions & behaviour
- All phone numbers are `tel:6046811100` links.
- Hover states as listed; no animations or scroll effects (keep content visible on first paint).
- Header switches to the mobile version below 1024px.
- Mobile menu: open/close toggle, closes on navigation.
- Form: native required/email/tel validation; show success state on submit.

## SEO / meta
- `<title>`: "One Stop Rooter Plumbing | 24/7 Plumbing & Drain Cleaning, Lower Mainland" (old title was truncated). Per-service titles: "<Service> in the Lower Mainland | One Stop Rooter Plumbing".
- Add LocalBusiness / Plumber JSON-LD: name, telephone, Burnaby BC, openingHours "Mo-Su 00:00-23:59", areaServed = master city list.
- Keep 301 redirects from old Wix URLs to the new pages.

## Design tokens
Colours (source values are oklch; hex are close equivalents):
- Red, backgrounds/buttons with white text: `oklch(0.55 0.22 27)` ≈ `#cc1f1f`
- Light red, red text on black: `oklch(0.66 0.21 27)` ≈ `#ef4a3f` (needed for 4.5:1 contrast on small text)
- Black (header, dark sections): `oklch(0.16 0 0)` ≈ `#0d0d0d`
- Dark tile: `oklch(0.24 0 0)` ≈ `#1f1f1f`
- Footer: `oklch(0.1 0 0)` ≈ `#030303`
- Light grey (tiles, sections): `oklch(0.94 0 0)` ≈ `#ebebeb`
- Greys on black: `#d1d1d1`, `#dedede`, `#b7b7b7`
- White `#ffffff`

Type (Google Fonts):
- Headlines: **Barlow Condensed** 700/800/900, always uppercase, line-height 0.88 to 0.95.
- Body/UI: **Barlow** 400/500/600/700, 18px base, line-height 1.5.

Radius: 0 everywhere. Shadows: none. Tile gap: 8px.

## Assets
- `uploads/iStock-615603432.webp`: hero photo (plumber under a kitchen sink). iStock image, so **confirm the licence** before launch.
- Logo: not yet supplied in usable form; wordmark is set in type for now.
- More photos (van, team, job sites) recommended for the other service pages.

## Open items for the client
- Google reviews URL; ideally real review text to replace the three quotes.
- Destination email for the estimate form.
- Logo file (SVG preferred).
- Privacy policy PDF URL.
- Who controls the domain/hosting (site is currently a Yellow Pages Wix build).

## Files
- `One Stop Rooter Site.dc.html`: the design prototype (Home, Drain cleaning service template, Contact). Open it in a browser.
- `uploads/iStock-615603432.webp`: photo used by the prototype.
- `content-brief.md`: full content from the old site for building the remaining service pages.
