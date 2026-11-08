import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * Everything public is crawlable. AI / answer-engine crawlers are explicitly allowed so the
 * business can be cited in ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews (GEO).
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
