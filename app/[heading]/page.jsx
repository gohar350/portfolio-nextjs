import Article from "@/components/common/Article";
import Landing from "@/components/common/Landing";
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
