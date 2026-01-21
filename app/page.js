import Article from "@/components/common/Article";
import Landing from "@/components/common/Landing";
import Stats from "@/components/common/Stats";
import AIExpertise from "@/components/common/AIExpertise";
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

export default function Page() {
  return (
    <main className="main">
      <Landing />
      <Article data={about} />
      <Stats stats={stats} />
      <AIExpertise aiExpertise={stats.aiExpertise} aiWorkflow={resume.aiWorkflow} />
      <Resume resumeData={resume} />
      <Portfolio portfolioItems={portfolio} />
      <Testimonials testimonials={testimonials} />
      <ContactSection data={contact} />
    </main>
  );
}
