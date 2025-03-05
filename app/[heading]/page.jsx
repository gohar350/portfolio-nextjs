import Article from "@/components/common/Article";
import Stats from "@/components/common/Stats";
import Resume from "@/components/common/Resume";
import Portfolio from "@/components/common/Portfolio";
import Testimonials from "@/components/common/Testimonial";

import about from "@/utiles/about";
import stats from "@/utiles/stats";
import resume from "@/utiles/resume";
import portfolio from "@/utiles/portfolio";
import testimonials from "@/utiles/testimonials";
import ContactSection from "@/components/common/Contact";
import contact from "@/utiles/contact";
import seoData from "@/utiles/seoData";

import { commonSeo } from "@/utiles/seo";

export async function generateMetadata({ params }) {
  const { heading } = await params;

  const canonicalURL = `${process.env.NEXT_PUBLIC_SITEBASE_URL}/${heading}`;
  let data = commonSeo(canonicalURL, seoData);

  const { response, ...seoObj } = data;
  return {
    ...seoObj,
  };
}
export default async function Page({ params }) {
  const { heading } = await params;

  return (
    <main className="main">
      {heading === "about" && <Article data={about} />}
      {heading === "about" && <Stats stats={stats} />}
      {heading === "resume" && <Resume resumeData={resume} />}
      {heading === "portfolio" && <Portfolio portfolioItems={portfolio} />}
      {heading === "portfolio" && <Testimonials testimonials={testimonials} />}
      {heading === "contact" && <ContactSection data={contact} />}
    </main>
  );
}
