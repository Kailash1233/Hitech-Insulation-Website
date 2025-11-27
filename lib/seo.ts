import type { Metadata } from "next";

const siteUrl = "https://www.hitechinsulation.in";

type SeoKey =
  | "default"
  | "home"
  | "products"
  | "productDetails"
  | "about"
  | "industries"
  | "contact";

interface SeoEntry {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}

export const seoConfig: Record<SeoKey, SeoEntry> = {
  default: {
    title: "Hitech Insulation | Best Electrical Insulation Manufacturer in India",
    description:
      "Hitech Insulation is India’s most trusted manufacturer of pressboard, epoxy laminates, PTFE products, and custom transformer insulation kits from Chennai since 1977.",
    keywords: [
      "best electrical insulation manufacturer india",
      "transformer insulation materials india",
      "pressboard supplier chennai",
      "epoxy fiberglass sheets manufacturer",
      "ptfe insulation components india",
      "custom transformer kits india",
    ],
    path: "/",
  },
  home: {
    title: "Premium Electrical Insulation Components Made in India | Hitech Insulation",
    description:
      "Buy precision pressboard, epoxy sheets, phenolic laminates, and PTFE components directly from India’s top insulation manufacturer trusted by OEMs nationwide.",
    keywords: [
      "electrical insulation manufacturer india",
      "pressboard supplier india",
      "epoxy sheet manufacturer chennai",
      "phenolic laminates india",
      "ptfe components india",
      "transformer insulation india",
    ],
    path: "/",
  },
  products: {
    title: "Electrical Insulation Products Catalog India | Hitech Insulation",
    description:
      "Browse 20+ electrical insulation products engineered for transformers, motors, and switchgear. Manufactured in Chennai and shipped pan-India within committed lead times.",
    keywords: [
      "electrical insulation products india",
      "transformer insulation catalog",
      "pressboard sheets india",
      "epoxy laminates india",
      "insulation materials supplier india",
    ],
    path: "/products",
  },
  productDetails: {
    title: "Transformer-Grade Insulation Products | Hitech Insulation India",
    description:
      "Detailed specifications, applications, and engineering guidance for India’s most reliable transformer insulation components.",
    keywords: [
      "transformer insulation specifications india",
      "buy pressboard india",
      "electrical insulation supplier india",
      "custom insulation machining india",
    ],
    path: "/products",
  },
  about: {
    title: "About Hitech Insulation | India’s Leading Electrical Insulation Partner",
    description:
      "Discover our 47-year manufacturing legacy, ISO-certified processes, and why India’s best OEMs trust Hitech Insulation for mission-critical projects.",
    keywords: [
      "about hitech insulation",
      "electrical insulation company india",
      "iso certified insulation manufacturer",
      "chennai insulation factory",
    ],
    path: "/about",
  },
  industries: {
    title: "Industries We Serve | Transformer, Motor & Switchgear Insulation India",
    description:
      "Insulation programs engineered for transformer OEMs, motor manufacturers, switchgear, bus duct, and high-temperature equipment builders across India.",
    keywords: [
      "transformer insulation india",
      "motor insulation supplier india",
      "switchgear insulation components india",
      "bus duct insulation india",
    ],
    path: "/industries",
  },
  contact: {
    title: "Contact Hitech Insulation India | Fast Quotes & Engineering Support",
    description:
      "Send RFQs, drawings, and BOMs for transformer insulation materials. Chennai-based team responds within 24 hours with the best solutions in India.",
    keywords: [
      "contact insulation manufacturer india",
      "rfq transformer insulation india",
      "buy insulation pressboard chennai",
      "best insulation supplier india",
    ],
    path: "/contact",
  },
};

export function getSeoMetadata(
  key: SeoKey,
  overrides: Partial<SeoEntry> = {}
): Metadata {
  const base = seoConfig[key] ?? seoConfig.default;
  const merged: SeoEntry = { ...base, ...overrides };
  const canonical = new URL(merged.path, siteUrl).toString();

  return {
    title: merged.title,
    description: merged.description,
    keywords: merged.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: merged.title,
      description: merged.description,
      url: canonical,
      siteName: "Hitech Insulation",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: merged.title,
      description: merged.description,
    },
  };
}

