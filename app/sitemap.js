import { SITE_URL, ROUTES } from "@/utiles/site";

/**
 * Native Next.js sitemap. Replaces the hand-written XML route, which emitted
 * trailing whitespace inside <loc> and gave every URL priority 1 — which tells
 * a crawler nothing, since priority is only meaningful as a relative ranking.
 */
export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
