// Product image mapping - maps product IDs to image paths
export const productImages: Record<string, string> = {
  "pressboard-3mm": "/products/pressboardsheet-2-570x400.jpg",
  "pre-compressed-pressboard": "/products/pressboardsheet-2-570x400.jpg",
  "fr4-epoxy-sheet": "/products/epoxy-sheets-1.jpg",
  "g10-epoxy-sheet": "/products/epoxy-sheets-1.jpg",
  "paper-phenolic": "/products/composites-570x400.jpg",
  "cotton-phenolic": "/products/composites-570x400.jpg",
  "bakelite-sheet": "/products/composites-570x400.jpg",
  "kraft-paper": "/products/insulating-kraft-4.jpg",
  "delrin-sheet": "/products/smc-sheet-570x400.jpg",
  "fiberglass-tubes": "/products/fg-epoxy-tube-1.jpg",
  "syndanio-sheet": "/products/rubber-oil-570x400.jpg",
  "ptfe-cloth-non-adhesive": "/products/diamond-dotted-2-570x400.jpg",
  "ptfe-cloth-adhesive": "/products/diamond-dotted-2-570x400.jpg",
  "ptfe-sheet": "/products/diamond-dotted-2-570x400.jpg",
  "epoxy-rods": "/products/fgthreaded-2.jpg",
  "nomex-paper": "/products/thermally-upgraded-paper-1.jpg",
  "polyester-film": "/products/varnished-insulating-paper-1-570x400.jpg",
  "mica-sheets": "/products/porceilein.jpg",
  "custom-gaskets": "/products/epoxy-bushings-2.jpg",
  "transformer-kits": "/products/pressboardsheet-2-570x400.jpg",
};

// Fallback image for products without specific images
export const defaultProductImage = "/products/pressboardsheet-2-570x400.jpg";

// Get product image with fallback
export function getProductImage(productId: string): string {
  return productImages[productId] || defaultProductImage;
}

