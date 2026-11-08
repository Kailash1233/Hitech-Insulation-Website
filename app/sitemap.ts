import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/products";
import { getProductImage } from "@/lib/product-images";
import { SITE } from "@/lib/site";

// Bump this when page content meaningfully changes. A constant date (instead of `new Date()`
// on every build) keeps lastmod honest, which Google uses to decide when to recrawl.
const LAST_UPDATED = new Date("2026-11-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const page = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly" = "monthly",
    images?: string[]
  ) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
    ...(images ? { images: images.map((i) => `${base}${i}`) } : {}),
  });

  // Pressboard products first — they are the main commercial target.
  const productPages = Object.values(allProducts).map((product) =>
    page(
      `/products/${product.id}`,
      product.category === "Pressboard" ? 0.9 : 0.7,
      "monthly",
      [getProductImage(product.id)]
    )
  );

  return [
    page("/", 1.0, "weekly", ["/hero/hitech_hero_bg.webp"]),
    page("/pressboard", 0.95, "weekly", ["/products/mouldable-press-boards.jpg"]),
    page("/products", 0.9, "weekly"),
    page("/contact", 0.8),
    page("/industries", 0.7),
    page("/about", 0.6),
    ...productPages,
  ];
}
