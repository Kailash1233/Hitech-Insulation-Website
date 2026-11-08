/**
 * Single source of truth for business NAP (Name, Address, Phone) and profile links.
 * Keep this EXACTLY consistent with the Google Business Profile, IndiaMART and Justdial —
 * NAP consistency across the web is one of the strongest local-ranking signals.
 */
export const SITE = {
  url: "https://www.hitechinsulation.in",
  name: "Hitech Insulation",
  alternateNames: ["Hi-Tech Insulation", "Hi Tech Insulation", "Hitech Insulation Chennai"],
  legalName: "Hitech Insulation",
  foundingYear: 1977,
  founder: "Mr. Radhakrushnun",
  email: "srk@hitechinsulation.in",
  phone: "+91-90032-88146",
  phoneDisplay: "+91 90032 88146",
  phoneHref: "tel:+919003288146",
  whatsappHref: "https://wa.me/919003288146",
  address: {
    street: "7/4, Industrial Estate, Guindy",
    locality: "Chennai",
    region: "Tamil Nadu",
    regionCode: "IN-TN",
    postalCode: "600032",
    country: "IN",
  },
  // Approximate coordinates of Guindy Industrial Estate — replace with the exact pin from Google Maps.
  geo: { latitude: 13.0108, longitude: 80.212 },
  hours: { days: "Mon – Sat", opens: "09:30", closes: "18:30", display: "9:30 AM to 6:30 PM IST" },
  logo: "/HITECHINSULATION.png",
  /**
   * Public profiles — every URL here is emitted as schema.org `sameAs` (entity linking for
   * Google's Knowledge Graph and AI answer engines) and rendered in the footer.
   * Add the real Instagram / Facebook / LinkedIn / YouTube URLs once the pages exist.
   */
  profiles: {
    googleBusiness: "https://share.google/4r8dkvXuKuw8U0ct4",
    indiamart: "https://www.indiamart.com/hi-techinsulation/profile.html",
    justdial:
      "https://www.justdial.com/Chennai/Hi-tech-Insulation-Near-Spar-Banner-Shop-Guindy/044PXX44-XX44-201015124620-E1A9_BZDET",
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
  },
} as const;

export const yearsInBusiness = () => new Date().getFullYear() - SITE.foundingYear;

export const fullAddress = `${SITE.address.street}, ${SITE.address.locality} – ${SITE.address.postalCode}, ${SITE.address.region}, India`;

export const sameAsLinks = Object.values(SITE.profiles).filter(Boolean) as string[];
