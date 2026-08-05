import Landing from "@/components/common/Landing";
import Article from "@/components/common/Article";
import Stats from "@/components/common/Stats";
import AIExpertise from "@/components/common/AIExpertise";
import Resume from "@/components/common/Resume";
import Portfolio from "@/components/common/Portfolio";
import Testimonials from "@/components/common/Testimonial";
import Faq from "@/components/common/Faq";
import ContactSection from "@/components/common/Contact";
import JsonLd from "@/components/seo/JsonLd";

import about from "@/utiles/about";
import stats from "@/utiles/stats";
import resume from "@/utiles/resume";
import portfolio from "@/utiles/portfolio";
import testimonials from "@/utiles/testimonials";
import contact from "@/utiles/contact";

import { commonSeo } from "@/utiles/seo";

export function generateMetadata() {
  return commonSeo("/");
}

export default function Page() {
  return (
    <main>
      <JsonLd path="/" />
      <Landing />
      <Article data={about} />
      <Stats stats={stats} />
      <AIExpertise
        aiExpertise={stats.aiExpertise}
        aiWorkflow={resume.aiWorkflow}
      />
      <Portfolio portfolioItems={portfolio} />
      <Resume resumeData={resume} />
      <Testimonials testimonials={testimonials} />
      <Faq />
      <ContactSection data={contact} />
    </main>
  );
}
