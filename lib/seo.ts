import type { Metadata } from "next";
import { products } from "./products";

const BASE_URL = "https://www.hitechinsulation.in";

const BRAND = "Hitech Insulation";
const FOUNDED = "1977";

const CORE_KEYWORDS = [
  // Brand + location
  "Hitech Insulation Chennai",
  "Hitech Insulation Tamil Nadu",
  "hitech insulation india",

  // Best-in-class head terms
  "best electrical insulation company india",
  "best electrical insulation manufacturer chennai",
  "electrical insulation manufacturer india",
  "electrical insulation supplier chennai",
  "electrical insulation company tamil nadu",

  // Pressboard — primary manufacturing focus
  "pressboard manufacturer india",
  "best pressboard manufacturer india",
  "pressboard manufacturer chennai",
  "pressboard supplier tamil nadu",
  "electrical grade pressboard india",
  "transformer pressboard manufacturer india",
  "pre compressed pressboard india",

  // Transformer insulation
  "transformer insulation manufacturer india",
  "transformer insulation supplier chennai",
  "transformer insulation components india",
  "transformer insulation kits manufacturer india",

  // Supporting categories
  "epoxy sheet supplier india",
  "FR4 sheet manufacturer india",
  "phenolic laminate supplier india",
  "hylam sheet supplier india",
  "FRP components manufacturer india",
  "mica sheet supplier india",
  "kraft paper transformer insulation india",
  "PTFE sheet supplier india",
];

type PageKey = "home" | "products" | "about" | "industries" | "contact" | "productDetails";

interface SeoPage {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

const pages: Record<PageKey, SeoPage> = {
  home: {
    title:
      "Hitech Insulation | Best Electrical Insulation Manufacturer in Chennai, India Since 1977",
    description:
      "Hitech Insulation is India's trusted electrical insulation manufacturer based in Chennai, Tamil Nadu. Supplying pressboard, pre-compressed pressboard, transformer insulation kits, FR4 epoxy sheets, kraft paper, mica sheets, FRP components, and PTFE products since 1977. ISO-certified. 24-hour quote turnaround. Serving transformer, motor, and switchgear manufacturers across India.",
    keywords: [
      ...CORE_KEYWORDS,
      "electrical insulation manufacturer since 1977",
      "ISO certified insulation manufacturer india",
      "transformer insulation components chennai",
      "custom insulation fabrication india",
      "insulation components for motors india",
      "switchgear insulation supplier india",
      "electrical insulation manufacturer tamil nadu",
      "best insulation company tamil nadu",
      "pressboard sheets india",
      "moulded pressboard components india",
    ],
    ogImage: "/hero/hitech_hero_bg.webp",
    canonical: BASE_URL,
  },

  products: {
    title:
      "Electrical Insulation Products | Pressboard, Epoxy Sheets, FR4, Mica, FRP | Hitech Insulation India",
    description:
      "Complete electrical insulation product catalog from Hitech Insulation, Chennai. Pressboard sheets, pre-compressed pressboard, transformer insulation kits, moulded pressboard components, FR4/G10/G11 epoxy sheets, hylam, bakelite, kraft paper, FRP tubes/rods, mica sheets, PTFE, Nomex, and custom fabrication. ISO-certified manufacturer. Get quote in 24 hours.",
    keywords: [
      ...CORE_KEYWORDS,
      "electrical insulation products catalog india",
      "pressboard sheets manufacturer india",
      "FR4 epoxy sheet supplier india",
      "G10 G11 epoxy laminate india",
      "hylam sheet manufacturer india",
      "bakelite sheet supplier india",
      "FRP tubes rods india",
      "mica sheet supplier chennai",
      "kraft paper transformer india",
      "nomex paper india",
      "PTFE sheet supplier india",
      "ESD epoxy sheet india",
      "custom insulation gaskets india",
      "insulation products transformer motor switchgear india",
    ],
    ogImage: "/hero/product_hero.jpg",
    canonical: `${BASE_URL}/products`,
  },

  about: {
    title:
      "About Hitech Insulation | Electrical Insulation Manufacturer Since 1977 | Chennai, India",
    description:
      "Hitech Insulation was founded in 1977 in Chennai, Tamil Nadu by Mr. Radhakrushnun. Over 47 years we have grown from an insulation trading company to a precision manufacturer supplying transformer, motor, and switchgear manufacturers across India. ISO-certified manufacturing facility. Trusted by leading electrical OEMs.",
    keywords: [
      ...CORE_KEYWORDS,
      "about hitech insulation chennai",
      "electrical insulation company history india",
      "insulation manufacturer founded 1977",
      "ISO certified electrical insulation india",
      "transformer insulation manufacturer tamil nadu",
      "electrical insulation OEM supplier india",
      "precision insulation manufacturer chennai",
      "insulation manufacturing company chennai",
    ],
    ogImage: "/hero/about_hero.jpg",
    canonical: `${BASE_URL}/about`,
  },

  industries: {
    title: "Industries Served | Transformer, Motor, Switchgear Insulation Supplier India | Hitech",
    description:
      "Hitech Insulation supplies precision electrical insulation to transformer manufacturers, motor industries, panel board and switchgear manufacturers, and bus duct system builders across India. Serving OEMs including Hitachi, Toyota, BHEL, Siemens, Schneider Electric, and Toshiba from our Chennai facility.",
    keywords: [
      ...CORE_KEYWORDS,
      "transformer manufacturer insulation supplier india",
      "motor insulation supplier india",
      "switchgear insulation supplier india",
      "panel board insulation manufacturer india",
      "bus duct insulation india",
      "electrical OEM insulation supplier india",
      "BHEL insulation supplier",
      "Siemens insulation supplier india",
      "industrial insulation manufacturer chennai",
      "electrical equipment insulation india",
    ],
    ogImage: "/hero/product_hero.jpg",
    canonical: `${BASE_URL}/industries`,
  },

  contact: {
    title: "Contact Hitech Insulation | Get Quote for Electrical Insulation | Chennai, India",
    description:
      "Contact Hitech Insulation in Chennai, Tamil Nadu for electrical insulation products and custom fabrication. Get a quote within 24 hours for pressboard, epoxy sheets, transformer insulation kits, FRP components, and more. Email: srk@hitechinsulation.in. ISO-certified manufacturer since 1977.",
    keywords: [
      ...CORE_KEYWORDS,
      "contact hitech insulation chennai",
      "electrical insulation quote india",
      "get insulation quote chennai",
      "pressboard quote india",
      "transformer insulation supplier contact india",
      "electrical insulation manufacturer contact chennai",
      "insulation fabrication quote india",
      "24 hour quote insulation india",
    ],
    ogImage: "/hero/contact_hero.jpg",
    canonical: `${BASE_URL}/contact`,
  },

  // Inside the pages Record in the new seo.ts, add:
  productDetails: {
    title:
      "Electrical Insulation Product | Specifications & Applications | Hitech Insulation India",
    description:
      "Detailed specifications, applications, and engineering data for electrical insulation products manufactured in Chennai, India. Pressboard, epoxy laminates, FRP, mica, PTFE, and more. Get a quote in 24 hours.",
    keywords: [
      "electrical insulation product specifications india",
      "transformer insulation material india",
      "pressboard specifications india",
      "epoxy insulation sheet specifications",
      "custom electrical insulation india",
      "electrical insulation manufacturer chennai",
    ],
    ogImage: "/hero/product_hero.jpg",
    canonical: `${BASE_URL}/products`,
  },
};

export function getSeoMetadata(page: PageKey): Metadata {
  const p = pages[page];

  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords.join(", "),
    authors: [{ name: BRAND, url: BASE_URL }],
    creator: BRAND,
    publisher: BRAND,
    category: "Electrical Insulation Manufacturing",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: p.canonical ?? BASE_URL,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: p.canonical ?? BASE_URL,
      siteName: BRAND,
      title: p.title,
      description: p.description,
      images: [
        {
          url: p.ogImage ?? "/hero/hitech_hero_bg.webp",
          width: 1200,
          height: 630,
          alt: `${BRAND} – Electrical Insulation Manufacturer, Chennai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
      images: [p.ogImage ?? "/hero/hitech_hero_bg.webp"],
      creator: "@hitechinsulation",
    },
    other: {
      // Additional meta for local SEO
      "geo.region": "IN-TN",
      "geo.placename": "Chennai",
      "geo.position": "13.0827;80.2707",
      ICBM: "13.0827, 80.2707",
    },
  };
}

/**
 * JSON-LD structured data for the organisation.
 * Add this to layout.tsx via <script> tag for rich results.
 */
export const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND,
  alternateName: "Hitech Insulation Chennai",
  url: BASE_URL,
  logo: `${BASE_URL}/HITECHINSULATION.png`,
  foundingDate: FOUNDED,
  description:
    "Hitech Insulation is a leading electrical insulation manufacturer based in Chennai, Tamil Nadu, India. Established in 1977, we manufacture and supply pressboard, transformer insulation kits, epoxy sheets, FRP components, mica products, and custom insulation fabrication to transformer, motor, and switchgear manufacturers across India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "srk@hitechinsulation.in",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil"],
  },
  sameAs: [],
  knowsAbout: [
    "Electrical Insulation",
    "Transformer Insulation",
    "Pressboard Manufacturing",
    "Epoxy Laminates",
    "FRP Components",
    "Mica Products",
    "PTFE Products",
    "Custom Insulation Fabrication",
  ],
};

/**
 * JSON-LD for local business — critical for Chennai/Tamil Nadu local search ranking.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: BRAND,
  image: `${BASE_URL}/HITECHINSULATION.png`,
  url: BASE_URL,
  telephone: "",
  email: "srk@hitechinsulation.in",
  foundingDate: FOUNDED,
  description:
    "Best electrical insulation manufacturer in Chennai, India. Supplying pressboard, transformer insulation components, epoxy sheets, FRP products, and custom fabrication since 1977.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0827,
    longitude: 80.2707,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  areaServed: [
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "State", name: "Maharashtra" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "State", name: "Karnataka" },
    { "@type": "State", name: "Andhra Pradesh" },
    { "@type": "Country", name: "India" },
  ],
  hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Electrical Insulation Products",
  itemListElement: Object.values(products).map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: `${BASE_URL}/products/${product.id}`,
  })),
},
};

/**
 * JSON-LD breadcrumb helper — use on product and sub-pages.
 */
export function breadcrumbJsonLd(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
