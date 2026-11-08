# Hitech Insulation – SEO / AEO / GEO Audit & Action Plan (Nov 2026)

Goal: rank #1 for **pressboard / pre-compressed pressboard** and **electrical insulation in Chennai / Tamil Nadu**, then win North-India and export enquiries.

## 1. Executive summary

The site has good design and a lot of product content, but before this work it had **critical indexing problems**:

1. **All 35 product pages canonicalised to `/products`.** Google treated them as duplicates of the catalogue, so no product page (including Pre-Compressed Pressboard) could rank. *Fixed.*
2. **There was no standard "Pressboard" product page.** The main target product was commented out, and the homepage carousel/footer linked to dead URLs (`/products/pressboard-3mm`, `/products/fr4-epoxy-sheet`). *Fixed: `/pressboard` hub page and `/products/pressboard` added, old URLs redirect.*
3. **Fake review schema (4.9★ from 138 reviews) on the homepage.** This breaks Google's review-snippet policy and can lead to a manual action, which is risky while the Google Business Profile has poor reviews. *Removed.*
4. **Incomplete NAP (name, address, phone).** The schema had no phone and no postcode, and pointed to the centre of Chennai, not Guindy. The footer had no phone or address, and the social icons linked to `#`. *Fixed via `lib/site.ts`.*

The biggest remaining lever is **off-site**: Google Business Profile reviews, citations and backlinks. The website alone will not overcome a weak GBP for "near me" / map-pack searches.

## 2. What was changed in code

| Area | Change |
|---|---|
| Product pages | Unique title, description, canonical, OG image per product; Product + Breadcrumb schema; FAQ section + FAQPage schema on pressboard products; phone CTA |
| `/pressboard` (new) | Pillar page: range, pressboard vs pre-compressed comparison table, components list, supply regions (TN / South / North India / export), how-to-order, 8 FAQs, schema |
| `/products/pressboard` (new) | Electrical Grade Pressboard Sheets product |
| Homepage | H1 now targets "Chennai"; FAQs rewritten for answer engines (incl. "best pressboard manufacturer in Chennai", North India / export); years computed automatically (49+); phone card clickable |
| Schema | One Organization + LocalBusiness + WebSite graph: full Guindy address, phone, hours, founder, sameAs (GBP, IndiaMART, Justdial), areaServed incl. North-Indian states |
| Redirects | apex → www; `pressboard-3mm`, `fr4-epoxy-sheet` and other legacy product slugs → live pages |
| robots / sitemap | AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended…) explicitly allowed; sitemap with stable lastmod + images; pressboard pages prioritised |
| `llms.txt` | Plain-text summary for AI answer engines (who you are, NAP, pressboard pages) |
| Footer / contact | Phone (tel:), WhatsApp, full address, "Get directions", Google / IndiaMART / Justdial links; social icons appear automatically once real URLs are added in `lib/site.ts` |
| Performance | −37 npm packages, −16 unused UI components, −hero carousel, −admin page, −commented code; Inter as single variable font; PNG → WebP (1.6 MB → 20 KB, 953 KB → 66 KB, 729 KB → 43 KB); home hero 780 KB → 264 KB; ~21 MB of unused images deleted; 30-day cache on images |

## 3. Keyword targets (page mapping)

| Keyword | Intent | Target page | Priority |
|---|---|---|---|
| pressboard manufacturer chennai / india | Commercial | `/pressboard` | Highest |
| pre compressed pressboard (manufacturer, price) | Commercial | `/products/pre-compressed-pressboard` | Highest |
| transformer pressboard / pressboard sheet | Commercial | `/products/pressboard` | High |
| pressboard components / transformer insulation kits | Commercial | `/products/transformer-insulation-kits` | High |
| moulded pressboard / angle rings | Commercial | `/products/moulded-pressboard-components` | Medium |
| electrical insulation manufacturer chennai / tamil nadu | Local | `/` | High |
| electrical insulation materials supplier near me / guindy | Local (map pack) | GBP + `/contact` | High |
| hylam / bakelite / epoxy / FRP / mica sheet supplier chennai | Commercial | product pages | Medium |
| pressboard vs pre-compressed pressboard, what is pressboard | Informational / AEO | `/pressboard` FAQ + table | Medium |

Competitive landscape (from IndiaMART / TradeIndia search results): pressboard results are dominated by **marketplace listings**, for example Raj Techno Products (Aurangabad), Umang Boards (Jaipur), Senapathy Whiteley, Asha Power Insulation, Lamtex and PDT. Few have strong standalone websites, so a well-structured manufacturer site with real content can outrank them. The main risk is **brand confusion**: "Hi-Tech Insulation" IndiaMART listings exist for both Chennai and Secunderabad (the sister business), and Google may merge the two entities. Consistent naming, NAP and sameAs links are the fix.

## 4. Off-page / local action plan (owner actions – not code)

**This week**
1. **Google Business Profile**: primary category "Electrical insulation materials manufacturer" (or closest available), secondary "Insulation materials store". Use the exact name "Hitech Insulation" and exactly the same address/phone as the website. Website link → `https://www.hitechinsulation.in/?utm_source=gbp`. Add products (Pressboard, Pre-Compressed Pressboard, Transformer Insulation Kits…) with photos, each linking to its product page.
2. **Reviews recovery**: ask 20–30 genuine long-standing customers (transformer OEMs and repairers) for Google reviews over the next 6–8 weeks, at a steady 2–4 per week. Send them a direct review link (GBP → "Ask for reviews"). **Reply to every review**, including the old negative ones: calmly, factually, offering to resolve the issue. Never buy reviews or write them yourself.
3. Post on GBP weekly (photos of the Kundrathur pressboard unit, dispatches, new components).
4. Submit the sitemap in **Google Search Console** and **Bing Webmaster Tools**, and request indexing for `/pressboard` and the pressboard product pages.
5. Add a **Cloudflare Redirect Rule**: `hitechinsulation.in/*` → `https://www.hitechinsulation.in/$1` (301). Also turn on "Always Use HTTPS".

**This quarter**
6. **Citations with identical NAP**: IndiaMART, Justdial, TradeIndia, ExportersIndia, Sulekha, Yellow Pages India, Bing Places, Apple Business Connect, LinkedIn company page. Link every one back to the website.
7. **Social profiles**: create LinkedIn (most important for B2B), YouTube (machining/moulding videos), Instagram and Facebook. Then add the URLs to `lib/site.ts` → they appear in the footer and in the schema `sameAs` automatically.
8. **Export**: register on Alibaba / TradeKey / Go4WorldBusiness and with EEPC India. Add an "Export" note (IEC code, ports, Incoterms) to `/pressboard` once confirmed.
9. **Backlinks**: industry associations (IEEMA membership listing), transformer OEM vendor lists, Guindy Industrial Estate association, supplier pages of customers, trade-show exhibitor pages (ELECRAMA).
10. **Content** (1 article per month, linked to `/pressboard`): "Pressboard grades explained", "How to specify transformer insulation kits", "Pressboard moisture & drying", "Pressboard vs presspaper vs kraft paper".

## 5. Items the owner must confirm (content accuracy)

- Founding year: most pages say **1977**, but the About timeline starts in **1974 at Parrys**. Pick one.
- Founder name spelling: "Mr. Radhakrushnun".
- Homepage testimonials (Rajesh Kumar / Priya Sharma / Amit Patel) and the "100% client satisfaction" and "138+ projects" stats: replace with real, attributable quotes and figures.
- "Manufacturing partner for Hitachi, Toyota, BHEL, Siemens, Schneider, Toshiba": keep only names you can prove (written permission is best).
- ISO certificate number / standard (e.g. ISO 9001:2015). Show it on the site once confirmed.
- FR4 epoxy: the product was removed from the catalogue but is still mentioned in text. Is it still supplied?
- Exact Google Maps coordinates for Guindy (currently approximate in `lib/site.ts`), and the GBP's long Maps URL (better than the share link for schema).
- Pressboard thickness range and any standard you comply with (IEC 60641 / IS 1576). These can be added to the specs.

## 6. Not verified in this audit

The live site, the Google Business Profile, IndiaMART, Justdial and hi-techinsulation.com could not be fetched from the audit environment (network blocked). Redirect behaviour was verified on a local production build only. Re-check after deploy with:

```
curl -sI https://hitechinsulation.in/ | grep -i location
curl -sI https://www.hitechinsulation.in/products/pressboard-3mm | grep -i location
```

Search volumes are directional (no paid SEO tool was connected).
