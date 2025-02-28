import Article from "@/components/common/Article";
import Landing from "@/components/common/Landing";
import Stats from "@/components/common/Stats";

import AboutData from "@/utiles/about";
import StatsData from "@/utiles/stats";
import ResumeData from "@/utiles/resume";
import Resume from "@/components/common/Resume";
export default function Page() {
  return (
    <main className="main">
      <Landing />
      <Article data={AboutData} />
      <Stats stats={StatsData} />
      <Resume resumeData={ResumeData} />
    </main>
  );
}
