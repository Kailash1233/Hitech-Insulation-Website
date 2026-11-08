"use client";

import Image from "next/image";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Builds a wa.me link with a pre-filled enquiry message. */
export function whatsappLink(message: string) {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}

/** Fires a conversion event to GA4 / GTM so WhatsApp enquiries can be tracked as leads. */
export function trackWhatsappClick(label: string) {
  try {
    window.gtag?.("event", "whatsapp_click", { event_category: "lead", event_label: label });
    window.dataLayer?.push({ event: "whatsapp_click", whatsapp_label: label });
  } catch {
    /* analytics must never block the click */
  }
}

/**
 * Floating WhatsApp button shown on every page. The pre-filled message includes the page's
 * main heading (e.g. the product name) and URL, so the sales team knows what is being asked about.
 */
export function WhatsappFloatingButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const heading = document.querySelector("h1")?.textContent?.replace(/\s+/g, " ").trim();
    const message = heading
      ? `Hi Hitech Insulation, I would like a quote / details for: ${heading}\n${window.location.href}`
      : `Hi Hitech Insulation, I would like to enquire about your insulation products.\n${window.location.href}`;
    e.currentTarget.href = whatsappLink(message);
    trackWhatsappClick(heading || window.location.pathname);
  };

  return (
    <a
      href={whatsappLink("Hi Hitech Insulation, I would like to enquire about your products.")}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Hitech Insulation on WhatsApp (${SITE.phoneDisplay})`}
      title="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 sm:h-16 sm:w-16 rounded-full shadow-lg shadow-black/20 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
    >
      <Image src="/whatsapp.webp" alt="" width={64} height={64} className="h-full w-full" />
    </a>
  );
}

/** Inline "Enquire on WhatsApp" button with the product name pre-filled. */
export function WhatsappEnquiryButton({
  productName,
  path,
  className = "",
}: {
  productName: string;
  path: string;
  className?: string;
}) {
  const message = `Hi Hitech Insulation, I would like a quote for ${productName}.\nRequired size / thickness:\nQuantity:\nDelivery location:\n${SITE.url}${path}`;
  return (
    <a
      href={whatsappLink(message)}
      onClick={() => trackWhatsappClick(productName)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold h-11 px-6 transition-colors ${className}`}
    >
      <Image src="/whatsapp.webp" alt="" width={24} height={24} className="h-6 w-6" />
      Enquire on WhatsApp
    </a>
  );
}
