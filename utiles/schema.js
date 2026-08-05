import { SITE_URL, SITE_NAME, PERSON, abs } from "./site";
import { getPageSeo, FAQS } from "./pageSeo";
import resume from "./resume";
import portfolio from "./portfolio";
import stats from "./stats";

/**
 * JSON-LD as a connected @graph rather than loose islands.
 *
 * Every node carries a stable @id so Google and LLM crawlers can resolve
 * "this WebPage is about this Person, who works for this Organization"
 * instead of re-deriving the entity on every page.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;

/** Flatten the technical skill groups into a knowsAbout list. */
const knowsAbout = [
  ...new Set([
    ...Object.values(stats.technicalSkills ?? {}).flat(),
    "Server-Side Rendering",
    "Static Site Generation",
    "Incremental Static Regeneration",
    "Technical SEO",
    "Core Web Vitals",
    "Web Performance Optimization",
    "Prompt Engineering",
  ]),
];

/** Employment history as structured OrganizationRole entries. */
const parseYears = (year = "") => {
  const MONTHS = {
    january: "01", february: "02", march: "03", april: "04",
    may: "05", june: "06", july: "07", august: "08",
    september: "09", october: "10", november: "11", december: "12",
  };
  const toISO = (chunk) => {
    const m = chunk.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);
    if (m && MONTHS[m[1].toLowerCase()]) return `${m[2]}-${MONTHS[m[1].toLowerCase()]}`;
    const y = chunk.trim().match(/^(\d{4})$/);
    return y ? y[1] : null;
  };
  const [from, to] = year.split(/\s*[-–]\s*/);
  return { start: toISO(from || ""), end: /present/i.test(to || "") ? null : toISO(to || "") };
};

const occupations = (resume.experience ?? []).map((job) => {
  const { start, end } = parseYears(job.year);
  const [orgName] = (job.company ?? "").split(",");
  return {
    "@type": "OrganizationRole",
    roleName: job.title,
    ...(start ? { startDate: start } : {}),
    ...(end ? { endDate: end } : {}),
    worksFor: {
      "@type": "Organization",
      name: (orgName || "").trim(),
      address: {
        "@type": "PostalAddress",
        addressLocality: PERSON.city,
        addressCountry: PERSON.country,
      },
    },
  };
});

const personNode = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON.name,
  givenName: PERSON.givenName,
  familyName: PERSON.familyName,
  alternateName: "Gohar Butt",
  url: SITE_URL,
  image: { "@type": "ImageObject", url: abs(PERSON.image) },
  jobTitle: PERSON.jobTitle,
  description: getPageSeo("/").description,
  email: `mailto:${PERSON.email}`,
  telephone: PERSON.telephone,
  nationality: { "@type": "Country", name: PERSON.countryName },
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSON.city,
    addressRegion: PERSON.region,
    addressCountry: PERSON.country,
  },
  worksFor: {
    "@type": "Organization",
    name: PERSON.employer.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.employer.city,
      addressCountry: PERSON.country,
    },
  },
  hasOccupation: occupations,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: PERSON.almaMater.name,
    url: PERSON.almaMater.url,
  },
  knowsAbout,
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Urdu" },
  ],
  hasCredential: (resume.certifications ?? []).map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.name,
    credentialCategory: "certificate",
  })),
  sameAs: [PERSON.linkedin, PERSON.github],
};

const websiteNode = {
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: getPageSeo("/").description,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
  about: { "@id": PERSON_ID },
};

/** Portfolio projects as an ItemList of CreativeWork. */
const projectListNode = {
  "@type": "ItemList",
  "@id": `${abs("/portfolio")}#projects`,
  name: "Selected work by Muhammad Gohar",
  numberOfItems: portfolio.length,
  itemListElement: portfolio.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "WebSite",
      name: p.title,
      url: p.link,
      description: p.description,
      creator: { "@id": PERSON_ID },
      keywords: p.tech,
    },
  })),
};

const faqNode = {
  "@type": "FAQPage",
  "@id": `${abs("/about")}#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumb = (path, label) => ({
  "@type": "BreadcrumbList",
  "@id": `${abs(path)}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ...(path === "/"
      ? []
      : [{ "@type": "ListItem", position: 2, name: label, item: abs(path) }]),
  ],
});

const LABELS = {
  "/": "Home",
  "/about": "About",
  "/resume": "Résumé",
  "/portfolio": "Portfolio",
  "/contact": "Contact",
};

/**
 * Build the JSON-LD graph for a given route.
 * Only emits FAQ/project schema on pages that actually render that content.
 */
export function buildSchema(path = "/") {
  const { title, description } = getPageSeo(path);
  const canonical = abs(path);
  const isProfile = path === "/" || path === "/about" || path === "/resume";

  const pageNode = {
    "@type": isProfile ? "ProfilePage" : "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: { "@id": SITE_ID },
    about: { "@id": PERSON_ID },
    ...(isProfile ? { mainEntity: { "@id": PERSON_ID } } : {}),
    breadcrumb: { "@id": `${canonical}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: abs(PERSON.image) },
  };

  const graph = [
    personNode,
    websiteNode,
    pageNode,
    breadcrumb(path, LABELS[path] ?? "Page"),
  ];

  // Schema must only describe content the page actually shows.
  if (path === "/" || path === "/portfolio") graph.push(projectListNode);
  if (path === "/" || path === "/about") graph.push(faqNode);

  return { "@context": "https://schema.org", "@graph": graph };
}
