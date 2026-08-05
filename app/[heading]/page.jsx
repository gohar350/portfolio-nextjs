import { notFound } from "next/navigation";

import Article from "@/components/common/Article";
import Stats from "@/components/common/Stats";
import AIExpertise from "@/components/common/AIExpertise";
import Faq from "@/components/common/Faq";
import Resume from "@/components/common/Resume";
import Portfolio from "@/components/common/Portfolio";
import Testimonials from "@/components/common/Testimonial";
import ContactSection from "@/components/common/Contact";
import JsonLd from "@/components/seo/JsonLd";

import about from "@/utiles/about";
import stats from "@/utiles/stats";
import resume from "@/utiles/resume";
import portfolio from "@/utiles/portfolio";
import testimonials from "@/utiles/testimonials";
import contact from "@/utiles/contact";

import { commonSeo } from "@/utiles/seo";
import { VALID_HEADINGS } from "@/utiles/site";

/* Pre-render only the four real pages… */
export function generateStaticParams() {
  return VALID_HEADINGS.map((heading) => ({ heading }));
}

/* …and refuse everything else. Without this the catch-all answered HTTP 200
   for any path (/foo, /buy-cheap-x) with an empty <main> — an unbounded space
   of soft-404s for Google to crawl and index. */
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { heading } = await params;
  if (!VALID_HEADINGS.includes(heading)) return {};
  return commonSeo(`/${heading}`);
}

export default async function Page({ params }) {
  const { heading } = await params;
  if (!VALID_HEADINGS.includes(heading)) notFound();

  const path = `/${heading}`;

  return (
    <main style={{ paddingTop: "clamp(3.5rem, 10vw, 6rem)" }}>
      <JsonLd path={path} />

      {heading === "about" && (
        <>
          <Article data={about} primary />
          <Stats stats={stats} showCounters />
          <AIExpertise
            aiExpertise={stats.aiExpertise}
            aiWorkflow={resume.aiWorkflow}
          />
          <Faq />
        </>
      )}

      {heading === "resume" && <Resume resumeData={resume} primary />}

      {heading === "portfolio" && (
        <>
          <Portfolio portfolioItems={portfolio} primary />
          <Testimonials testimonials={testimonials} />
        </>
      )}

      {heading === "contact" && <ContactSection data={contact} primary />}
    </main>
  );
}
