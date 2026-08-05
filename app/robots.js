import { SITE_URL } from "@/utiles/site";

/**
 * Dynamic robots.txt.
 *
 * A bare `Allow: /` already permits AI crawlers, but several are named
 * explicitly because they are the ones commonly blocked by default templates
 * and hosting presets — and the goal here is the opposite: maximum eligibility
 * to be cited by AI answer engines.
 *
 *   GPTBot / OAI-SearchBot / ChatGPT-User  → ChatGPT + OpenAI search
 *   ClaudeBot / Claude-User / Claude-SearchBot / anthropic-ai → Claude
 *   PerplexityBot / Perplexity-User        → Perplexity
 *   Google-Extended                        → Gemini & AI Overviews grounding
 *   Applebot-Extended                      → Apple Intelligence
 *   CCBot                                  → Common Crawl (feeds many models)
 *   meta-externalagent                     → Meta AI
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "cohere-ai",
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next internals and the dev overlay have no search value.
        disallow: ["/_next/static/chunks/", "/api/"],
      },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
