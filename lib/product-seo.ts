import { Product } from "./products";
import { getProductImage } from "./product-images";

export interface ProductSeoOverride {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

// Extend or override SEO copy per product without touching page code.
export const productSeoOverrides: Record<string, ProductSeoOverride> = {
  // Example:
  // "pressboard-3mm": {
  //   title: "3mm Electrical Grade Pressboard | Hitech Insulation",
  //   description: "Transformer-grade 3mm pressboard with ISO-controlled density and oil impregnation.",
  //   keywords: ["pressboard 3mm", "transformer pressboard india"],
  //   image: "/products/pressboardsheet-2-570x400.jpg",
  // },
};

export function resolveProductSeo(slug: string, product: Product) {
  const override = productSeoOverrides[slug] ?? {};

  const defaultDescription = `${product.shortDescription} Manufactured in Chennai, India. ${
    product.specifications[0]?.value || "Custom specifications available"
  }. Get quote within 24 hours.`;

  const defaultKeywords = [
    `best ${product.category.toLowerCase()} supplier india`,
    `${product.name.toLowerCase()} manufacturer chennai`,
    `buy ${product.category.toLowerCase()} india`,
    `electrical insulation ${product.category.toLowerCase()} india`,
    `transformer insulation ${product.category.toLowerCase()}`,
  ];

  return {
    title:
      override.title ??
      `${product.name} | Best ${product.category} Supplier in India | Hitech Insulation`,
    description: override.description ?? defaultDescription,
    keywords: override.keywords ?? defaultKeywords,
    image: override.image ?? getProductImage(product.id),
    path: `/products/${slug}`,
  };
}
