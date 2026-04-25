// // Product image mapping - maps product IDs to curated image paths in /public/products
// export const productImages: Record<string, string> = {
//   "pressboard-3mm": "/products/pressboardsheet-2.jpg",
//   "pre-compressed-pressboard": "/products/precompressed-pressboard.jpg",
//   presspaper: "/products/electrical-grade-press-paper.webp",
//   "crepe-paper": "/products/electrical-grade-insulation-crepe-paper.jpg",
//   "machined-pressboard-components": "/products/pressboard_components.webp",
//   "machined-component-types": "/products/Insulation Components_Winding Components_3.jpg",
//   "moulded-pressboard-components": "/products/mouldable-press-boards.jpg",
//   "moulded-component-types": "/products/mouldable-press-boards.jpg",
//   "transformer-insulation-kits": "/products/transformer-insulation-kits.png",
//   "fr4-epoxy-sheet": "/products/fr4-fiberglass-sheet-color-options.jpg",
//   "g10-epoxy-sheet": "/products/epoxy-glass-fabric-570x400.jpg",
//   "paper-phenolic": "/products/paper-phenolic-laminates-500x500.webp",
//   "cotton-phenolic": "/products/Phenolic-Cotton-Cloth-Laminated-Textolite-Insulator-Sheet.webp",
//   "bakelite-sheet": "/products/bakelite-sheets.jpg",
//   "kraft-paper": "/products/electrical-grade-kraft-paper.jpg",
//   "delrin-sheet": "/products/delrin-sheets.webp",
//   "fiberglass-tubes": "/products/fiberglass-tube-2-5mm-500x500.webp",
//   "syndanio-sheet": "/products/SYNDANIO-SHEET.jpeg",
//   "ptfe-cloth-non-adhesive": "/products/non-adhesive-teflon-cloth.png",
//   "ptfe-cloth-adhesive": "/products/ptfe-cloth-adhesive-500x500.webp",
//   "ptfe-sheet": "/products/ptfe-sheet-virgin-500x500.webp",
//   "epoxy-rods": "/products/fgthreaded-2.jpg",
//   "nomex-paper": "/products/nomex-paper-aramid-paper-500x500.webp",
//   "polyester-film": "/products/electrical-insulation-polyester-film.jpg",
//   "mica-sheets": "/products/mica-natural-phlogopite-sheets.jpg",
//   "custom-gaskets": "/products/custom-gaskets.jpg",
//   "transformer-kits": "/products/Insulation Components And Kits.jpg",
//   "mica-tape": "/products/Resin-Rich-Glass-Mica-Tape.jpg",
//   "glass-fibre-tapes": "/products/fibre-glass-tapes.jpg",
//   "adhesive-tapes": "/products/adhesive-tapes.jpg",
//   "cork-sheets": "/products/corksheets.jpg",
//   "hylam-sheets": "/products/hylam-sheets-1.jpg",
//   "epoxy-cast-insulators": "/products/33kv-epoxy-cast-insulator-546.jpg",
//   "crepe-paper-range": "/products/crepe-paper-tubes-1.jpg",
//   "frp-products": "/products/frp-components-500x500.webp",
// };

// // Fallback image for products without specific images
// export const defaultProductImage = "/products/pressboardsheet-2-570x400.jpg";

// // Get product image with fallback
// export function getProductImage(productId: string): string {
//   return productImages[productId] || defaultProductImage;
// }

// Product image mapping - maps product IDs to curated image paths in /public/products
export const productImages: Record<string, string> = {
  // "pressboard-3mm": "/products/pressboardsheet-2.jpg",
  "pre-compressed-pressboard": "/products/precompressed-pressboard.jpg",
  "transformer-insulation-kits": "/products/transformer-insulation-kits.png",
  "moulded-pressboard-components": "/products/mouldable-press-boards.jpg",
  // "fr4-epoxy-sheet": "/products/fr4-fiberglass-sheet-color-options.jpg",
  "g10-epoxy-sheet": "/products/epoxy-glass-fabric-570x400.jpg",
  "esd-epoxy-sheet": "/products/esd-grade-fiberglass.jpg",
  "paper-phenolic": "/products/bakelite-hylam-sheets.jpg",
  "bakelite-sheet": "/products/bakelite.jpg",
  "esd-bakelite-sheet": "/products/esd-bakelite-sheet.jpeg",
  presspaper: "/products/electrical-grade-press-paper.webp",
  "kraft-paper": "/products/electrical-grade-kraft-paper.jpg",
  "frp-tubes": "/products/fiberglass-tube-2-5mm-500x500.webp",
  "frp-rods": "/products/frp-rods.jpg",
  "frp-threaded-rods": "/products/frp-threaded-rod-500x500.webp",
  "frp-components": "/products/frp-components-500x500.webp",
  "mica-sheets": "/products/mica-natural-phlogopite-sheets.jpg",
  "mica-tape": "/products/Resin-Rich-Glass-Mica-Tape.jpg",
  "polycarbonate-sheet": "/products/polycarbonate.webp",
  "acrylic-sheet": "/products/acrylic-sheets.webp",
  "delrin-sheet": "/products/delrin-sheets.webp",
  "pp-sheet": "/products/pp-sheets.jpg",
  "nylon-sheet-rod": "/products/nylon-sheet-500x500.webp",
  "peek-sheet-rod": "/products/peek-rod-sheets.jpeg",
  "ptfe-sheet": "/products/ptfe-sheet-virgin-500x500.webp",
  "ptfe-cloth-non-adhesive": "/products/non-adhesive-teflon-cloth.png",
  "ptfe-cloth-adhesive": "/products/ptfe-cloth.jpg",
  "glass-fibre-tapes": "/products/fibre-glass-tapes.jpg",
  "adhesive-tapes": "/products/adhesive-tapes.jpg",
  "cork-sheets": "/products/cork-sheets.jpg",
  "epoxy-cast-insulators": "/products/epoxy-cast-insulators.jpg",
  "crepe-paper-range": "/products/crepe-paper-tubes-1.jpg",
  "nomex-paper": "/products/nomex-paper-aramid-paper-500x500.webp",
  "polyester-film": "/products/polyster-tape.jpg",
  "syndanio-sheets": "/products/syndanio-sheets.webp",
  "custom-gaskets": "/products/custom-gaskets.jpg",
};

// Fallback image for products without specific images
export const defaultProductImage = "/products/pressboardsheet-2-570x400.jpg";

// Get product image with fallback
export function getProductImage(productId: string): string {
  return productImages[productId] || defaultProductImage;
}
