import type { Metadata } from "next";
import { products, type Product } from "./products";
import { getProductImage } from "./product-images";
import { SITE, sameAsLinks, yearsInBusiness } from "./site";

const BASE_URL = SITE.url;
const BRAND = SITE.name;

type PageKey = "home" | "products" | "pressboard" | "about" | "industries" | "contact";

interface SeoPage {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
}

/**
 * Titles are kept close to ~60 characters and descriptions to ~155 characters so Google
 * shows them in full. Each page targets ONE primary keyword cluster to avoid cannibalisation:
 *   home        → electrical insulation manufacturer Chennai / Tamil Nadu (brand + head term)
 *   pressboard  → pressboard / pre-compressed pressboard manufacturer (main money keyword)
 *   products    → electrical insulation products / materials catalogue
 *   industries  → transformer / motor / switchgear insulation supplier
 */
const pages: Record<PageKey, SeoPage> = {
  home: {
    title: "Pressboard & Electrical Insulation Manufacturer Chennai | Hitech",
    description: `Electrical insulation manufacturer in Guindy, Chennai since ${SITE.foundingYear}. Pressboard, pre-compressed pressboard & transformer insulation kits. All India & export.`,
    keywords: [
      "electrical insulation manufacturer chennai",
      "electrical insulation company tamil nadu",
      "pressboard manufacturer chennai",
      "pre compressed pressboard manufacturer india",
      "transformer insulation materials supplier",
      "hitech insulation guindy",
    ],
    path: "/",
    ogImage: "/hero/hitech_hero_bg.webp",
  },

  pressboard: {
    title: "Pressboard Manufacturer in Chennai, India | Pre-Compressed Pressboard",
    description:
      "Electrical grade & pre-compressed pressboard sheets, machined and moulded components for transformers. Chennai manufacturer supplying all India & export.",
    keywords: [
      "pressboard manufacturer india",
      "pressboard manufacturer chennai",
      "pre compressed pressboard",
      "pre compressed pressboard manufacturer",
      "transformer pressboard",
      "electrical insulation pressboard sheet",
      "pressboard supplier tamil nadu",
      "pressboard components for transformers",
      "pressboard exporter india",
    ],
    path: "/pressboard",
    ogImage: "/products/precompressed-pressboard.jpg",
  },

  products: {
    title: "Electrical Insulation Products & Materials | Hitech Insulation Chennai",
    description:
      "Pressboard, pre-compressed pressboard, insulation kits, G10 epoxy, hylam, bakelite, kraft paper, FRP, mica, PTFE & custom parts. Quote in 24 hours.",
    keywords: [
      "electrical insulation products",
      "electrical insulation materials supplier india",
      "transformer insulation materials",
      "epoxy sheet supplier chennai",
      "hylam sheet supplier chennai",
      "frp rods supplier chennai",
    ],
    path: "/products",
    ogImage: "/hero/product_hero.jpg",
  },

  about: {
    title: `About Hitech Insulation | Chennai Insulation Manufacturer Since ${SITE.foundingYear}`,
    description: `Founded in ${SITE.foundingYear} in Chennai, Hitech Insulation makes pressboard components and electrical insulation for transformer, motor & switchgear makers.`,
    keywords: [
      "about hitech insulation",
      "electrical insulation company chennai",
      "insulation manufacturer since 1977",
    ],
    path: "/about",
    ogImage: "/hero/about_hero.jpg",
  },

  industries: {
    title: "Transformer, Motor & Switchgear Insulation Supplier | Hitech",
    description:
      "Insulation materials and components for power & distribution transformers, electric motors, switchgear, panel boards and bus ducts – supplied from Chennai across India.",
    keywords: [
      "transformer insulation supplier india",
      "motor insulation materials supplier",
      "switchgear insulation supplier",
      "bus duct insulation",
    ],
    path: "/industries",
    ogImage: "/hero/product_hero.jpg",
  },

  contact: {
    title: "Contact Hitech Insulation, Guindy Chennai | Get a Quote in 24 Hours",
    description: `Call ${SITE.phoneDisplay} or email ${SITE.email} for pressboard and electrical insulation quotes. Industrial Estate, Guindy, Chennai 600032.`,
    keywords: [
      "hitech insulation contact",
      "hitech insulation guindy",
      "pressboard price quote",
      "electrical insulation supplier near me",
    ],
    path: "/contact",
    ogImage: "/hero/contact_hero.jpg",
  },
};

interface BuildMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = "/hero/hitech_hero_bg.webp",
  ogType = "website",
}: BuildMetaInput): Metadata {
  const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    keywords: keywords.length ? keywords.join(", ") : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      locale: "en_IN",
      url,
      siteName: BRAND,
      title,
      description,
      images: [{ url: ogImage, alt: `${BRAND} – ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function getSeoMetadata(page: PageKey): Metadata {
  const p = pages[page];
  return buildMetadata(p);
}

/* ─────────────────────────────── Product pages ─────────────────────────────── */

/**
 * Hand-written titles/descriptions for the highest-value product pages.
 * Everything else falls back to an auto-generated, unique title + description.
 */
const productSeoOverrides: Record<string, { title?: string; description?: string; keywords?: string[] }> = {
  pressboard: {
    title: "Electrical Grade Pressboard Sheets Manufacturer, Chennai | Hitech",
    description:
      "Transformer-grade pressboard sheets – full sheets, cut-to-size and machined parts. Pressboard manufacturer in Chennai supplying all India and export.",
    keywords: [
      "pressboard sheet",
      "electrical pressboard",
      "transformer pressboard sheet",
      "insulation pressboard price",
      "pressboard manufacturer chennai",
    ],
  },
  "pre-compressed-pressboard": {
    title: "Pre-Compressed Pressboard Manufacturer in India | Hitech Insulation",
    description:
      "High-density pre-compressed pressboard sheets & blocks, 3–75 mm, for transformer spacers and clamping rings. CNC machined to drawing in Chennai.",
    keywords: [
      "pre compressed pressboard",
      "precompressed pressboard manufacturer",
      "high density pressboard",
      "pre compressed board for transformer",
      "pre compressed pressboard price",
    ],
  },
  "moulded-pressboard-components": {
    title: "Moulded Pressboard Components – Angle Rings, Caps | Hitech Insulation",
    description:
      "Hot-moulded pressboard angle rings, snouts, lead exits, collars and caps for transformer windings. Made to drawing in Chennai.",
  },
  "transformer-insulation-kits": {
    title: "Transformer Insulation Kits & Pressboard Components | Hitech",
    description:
      "Pressboard insulation kits for distribution & power transformers – spacers, blocks, cylinders, rings – made to drawing and kitted in Chennai.",
  },
};

const trimTo = (text: string, max: number) =>
  text.length <= max ? text : `${text.slice(0, max - 1).replace(/[\s,;–-]+\S*$/, "")}…`;

export function getProductMetadata(slug: string, product: Product): Metadata {
  const override = productSeoOverrides[slug] ?? {};
  const shortName = product.name.split(" – ")[0];

  const title = override.title ?? `${shortName} Supplier in Chennai, India | Hitech Insulation`;
  const description =
    override.description ??
    trimTo(
      `${product.shortDescription}. Hitech Insulation, Chennai – custom sizes, pan-India delivery, quote in 24 hours.`,
      158
    );

  return buildMetadata({
    title,
    description,
    path: `/products/${slug}`,
    keywords: override.keywords ?? [
      `${shortName.toLowerCase()} supplier chennai`,
      `${shortName.toLowerCase()} manufacturer india`,
      `${product.category.toLowerCase()} for transformers`,
    ],
    ogImage: getProductImage(slug),
  });
}

/* ─────────────────────────────── Structured data ─────────────────────────────── */

const ORG_ID = `${BASE_URL}/#organization`;
const BUSINESS_ID = `${BASE_URL}/#localbusiness`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

/**
 * Site-wide JSON-LD graph: Organization + LocalBusiness + WebSite, linked by @id.
 * This is what Google's Knowledge Graph and AI answer engines (ChatGPT, Perplexity,
 * Gemini, Google AI Overviews) use to understand WHO the business is and WHERE it is.
 */
export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BRAND,
      alternateName: SITE.alternateNames,
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}${SITE.logo}` },
      foundingDate: String(SITE.foundingYear),
      founder: { "@type": "Person", name: SITE.founder },
      email: SITE.email,
      telephone: SITE.phone,
      address: postalAddress,
      description: `Hitech Insulation is an electrical insulation manufacturer in Guindy, Chennai, Tamil Nadu, India, established in ${SITE.foundingYear}. It manufactures electrical grade pressboard, pre-compressed pressboard, machined and moulded pressboard components and transformer insulation kits, and supplies epoxy laminates, phenolic laminates, FRP, mica, PTFE and other insulation materials to transformer, motor and switchgear manufacturers across India and overseas.`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          email: SITE.email,
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Tamil", "Hindi"],
        },
      ],
      sameAs: sameAsLinks,
      knowsAbout: [
        "Electrical insulation",
        "Transformer insulation",
        "Electrical grade pressboard",
        "Pre-compressed pressboard",
        "Moulded pressboard components",
        "Transformer insulation kits",
        "Epoxy glass laminates",
        "Phenolic laminates",
        "FRP insulation components",
        "Mica insulation",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: BRAND,
      alternateName: SITE.alternateNames,
      parentOrganization: { "@id": ORG_ID },
      url: BASE_URL,
      image: `${BASE_URL}/hero/hitech_hero_bg.webp`,
      logo: `${BASE_URL}${SITE.logo}`,
      telephone: SITE.phone,
      email: SITE.email,
      foundingDate: String(SITE.foundingYear),
      description:
        "Pressboard and electrical insulation manufacturer in Guindy, Chennai. Pre-compressed pressboard, transformer insulation kits, pressboard components, epoxy, FRP and mica insulation.",
      address: postalAddress,
      geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
      hasMap: SITE.profiles.googleBusiness,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: SITE.hours.opens,
          closes: SITE.hours.closes,
        },
      ],
      areaServed: [
        { "@type": "City", name: "Chennai" },
        { "@type": "State", name: "Tamil Nadu" },
        { "@type": "State", name: "Karnataka" },
        { "@type": "State", name: "Andhra Pradesh" },
        { "@type": "State", name: "Telangana" },
        { "@type": "State", name: "Kerala" },
        { "@type": "State", name: "Maharashtra" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "State", name: "Uttar Pradesh" },
        { "@type": "State", name: "Delhi" },
        { "@type": "State", name: "Haryana" },
        { "@type": "State", name: "Punjab" },
        { "@type": "State", name: "Rajasthan" },
        { "@type": "State", name: "Madhya Pradesh" },
        { "@type": "State", name: "West Bengal" },
        { "@type": "Country", name: "India" },
      ],
      sameAs: sameAsLinks,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical Insulation Products",
        itemListElement: Object.values(products).map((product) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: product.name,
            url: `${BASE_URL}/products/${product.id}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BASE_URL,
      name: BRAND,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-IN",
    },
  ],
};

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.path === "/" ? BASE_URL : `${BASE_URL}${crumb.path}`,
    })),
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/products/${product.id}#product`,
    name: product.name,
    description: [product.shortDescription, ...product.description].join(" "),
    image: `${BASE_URL}${getProductImage(product.id)}`,
    url: `${BASE_URL}/products/${product.id}`,
    category: product.category,
    brand: { "@type": "Brand", name: BRAND },
    manufacturer: { "@id": ORG_ID },
    countryOfOrigin: "IN",
    additionalProperty: product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const companyAgeText = () => `${yearsInBusiness()}+`;
