# Addis Eats — SEO Metadata Assignment

Next.js App Router implementation for IBT College Canada CodeOps, Module 3, Day 44.

## Run the app

Requires Node.js 20.9 or later.

```bash
npm install
# Optional: copy .env.example to .env.local and set NEXT_PUBLIC_SITE_URL=http://localhost:3000
npm run dev
```

Open http://localhost:3000. For a production build use `npm run build` then `npm start`. Set `NEXT_PUBLIC_SITE_URL` to the real canonical origin before deploying.

## Assignment checklist

1. Root `app/layout.js` sets `metadataBase`, a title template, and a default title.
2. Home, menu, cart, and checkout each export their own title and human-written description.
3. `app/menu/[id]/page.js` uses `generateMetadata` to create title and description from the selected dish's name, price, and summary.
4. `app/opengraph-image.js` generates a site-wide image; `app/menu/[id]/opengraph-image.js` generates a unique image for each dish with `ImageResponse`.
5. Dish pages add `MenuItem` JSON-LD from the same `dish` object used to render the page.
6. `app/sitemap.js` includes home, menu, and dish pages, excluding `/cart` and `/checkout`.
7. `app/robots.js` disallows `/cart` and `/checkout` and points to `/sitemap.xml`.

## Required verification: inspect the running page source

The assignment says to verify the generated page source, not merely inspect your project code. Start the app first, then use browser **View Page Source** (`Ctrl+U`) or enter a `view-source:` URL.

### 1. Root metadata
Open `view-source:http://localhost:3000/`. Confirm the generated HTML has a `<title>`, description meta tag, and Open Graph image metadata referencing `/opengraph-image`.

### 2. Static route titles/descriptions
Open each of these source views and verify the generated `<title>` and `<meta name="description">`:
- `view-source:http://localhost:3000/`
- `view-source:http://localhost:3000/menu`
- `view-source:http://localhost:3000/cart`
- `view-source:http://localhost:3000/checkout`

### 3. Dish metadata and JSON-LD
Open `view-source:http://localhost:3000/menu/1` and repeat with `/menu/2` and `/menu/4`. Verify title contains the dish name and price, description uses the dish summary, `og:image` points to `/menu/1/opengraph-image` (adjust ID), and `application/ld+json` contains `"@type":"MenuItem"`, the correct name, description, and offer price in ETB.

### 4. Generated images
Open these URLs directly in your browser:
- `http://localhost:3000/opengraph-image`
- `http://localhost:3000/menu/1/opengraph-image`
- `http://localhost:3000/menu/4/opengraph-image`

Each should render a generated PNG. Dish images should differ in name, summary, color, and price.

### 5. Sitemap and robots
- Open `http://localhost:3000/sitemap.xml`: verify home, `/menu`, and all `/menu/{id}` URLs are present; `/cart` and `/checkout` are absent.
- Open `http://localhost:3000/robots.txt`: verify `Disallow: /cart`, `Disallow: /checkout`, and a sitemap URL ending in `/sitemap.xml`.

### 6. Unknown dish
Open `http://localhost:3000/menu/does-not-exist` and verify the not-found page appears.

## Scope
Cart and checkout are intentionally demo placeholders; the focus of this assignment is metadata, Open Graph image generation, structured data, sitemap, and robots rules.
