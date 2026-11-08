/**
 * Real customer reviews shown on the homepage.
 *
 * Copy genuine 5-star reviews from the Google Business Profile EXACTLY as written
 * (you may shorten with "…", but do not reword), using the reviewer's name as shown on Google.
 * The section is hidden automatically while this list is empty, so the site never shows
 * invented testimonials (misleading reviews are an offence under India's Consumer
 * Protection Act / CCPA rules and against Google's guidelines).
 *
 * Example:
 *   { name: "Reviewer Name", quote: "Exact review text…", source: "Google review" },
 */
export interface Testimonial {
  name: string;
  quote: string;
  source: string;
  /** Optional, only if the reviewer mentioned it, e.g. "Transformer manufacturer, Hosur" */
  detail?: string;
}

export const testimonials: Testimonial[] = [];
