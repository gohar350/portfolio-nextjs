/**
 * Single source of truth for site-wide identity.
 *
 * Every value has a hard-coded production fallback on purpose: when
 * NEXT_PUBLIC_SITEBASE_URL was unset, template literals produced the string
 * "undefined" and shipped `<link rel="canonical" href=".../undefined/">`.
 * Never let an env var be the only source of a canonical URL.
 */

const stripTrailingSlash = (u) => (u || "").replace(/\/+$/, "");

export const SITE_URL =
  stripTrailingSlash(process.env.NEXT_PUBLIC_SITEBASE_URL) ||
  "https://muhammadgohar.vercel.app";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME || "Muhammad Gohar — Frontend Engineer";

export const OG_IMAGE = process.env.NEXT_PUBLIC_SITE_IMAGE || "/opengraph-image";

/** Absolute URL builder — always produces a clean, canonical address. */
export const abs = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "") ||
  SITE_URL;

export const PERSON = {
  name: "Muhammad Gohar",
  givenName: "Muhammad",
  familyName: "Gohar",
  jobTitle: "Senior Software Engineer",
  email: "gohar350butt@gmail.com",
  telephone: "+92-305-935-8248",
  city: "Lahore",
  region: "Punjab",
  country: "PK",
  countryName: "Pakistan",
  image: "/assets/img/gohar.jpg",
  linkedin: "https://www.linkedin.com/in/gohar-butt-0118b1422",
  github: "https://github.com/muhammadgohar",
  employer: { name: "ElkTech", city: "Lahore", country: "Pakistan" },
  almaMater: {
    name: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    url: "https://www.nu.edu.pk/",
  },
};

/** Routes that actually exist. Drives the sitemap AND the 404 guard. */
export const ROUTES = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/resume", priority: 0.9, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

/** Valid [heading] segments — anything else must 404, not render an empty page. */
export const VALID_HEADINGS = ["about", "resume", "portfolio", "contact"];
