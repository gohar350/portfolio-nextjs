import Link from "next/link";
import Typewriter from "@/components/effects/Typewriter";
import contact from "@/utiles/contact";

const ROLES = [
  "Frontend Engineer",
  "React Developer",
  "Next.js Specialist",
  "AI Prompt Engineer",
  "TypeScript Developer",
];

const MARQUEE = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Apache Kafka",
  "Claude Code",
  "TailwindCSS",
  "Redux Toolkit",
  "React Query",
  "NestJS",
  "WebSockets",
  "SSR / SSG / ISR",
  "Core Web Vitals",
];

export default function Landing() {
  return (
    <>
      <section className="hero" id="top">
        <div className="shell">
          <p className="hero__status">
            <span className="pulse" aria-hidden="true" />
            Senior Software Engineer · ElkTech
          </p>

          <h1>
            Muhammad <span className="grad">Gohar</span>
          </h1>

          <p className="hero__role">
            <span className="sr-only">Roles: </span>
            <Typewriter words={ROLES} />
          </p>

          <p className="hero__lede">
            I build real-time, SEO-first web platforms — live sports products
            serving <strong>100K+ daily users</strong>, engineered with React,
            Next.js and TypeScript, and shipped faster with AI in the loop.
          </p>

          <div className="hero__actions">
            <Link href="/portfolio" className="btn btn--primary">
              <i className="bi bi-grid" aria-hidden="true" />
              View selected work
            </Link>
            <a href={`mailto:${contact.email}`} className="btn btn--ghost">
              <i className="bi bi-send" aria-hidden="true" />
              Start a conversation
            </a>
          </div>

          <div className="metrics" data-reveal>
            <div className="metric">
              <div className="metric__val">
                <span data-count="3">3</span>
              </div>
              <div className="metric__label">Years shipping</div>
            </div>
            <div className="metric">
              <div className="metric__val">
                <span data-count="100" data-suffix="K+">
                  100K+
                </span>
              </div>
              <div className="metric__label">Daily users</div>
            </div>
            <div className="metric">
              <div className="metric__val">
                <span data-count="2" data-suffix="x">
                  2x
                </span>
              </div>
              <div className="metric__label">AI productivity</div>
            </div>
            <div className="metric">
              <div className="metric__val">
                <span data-count="40" data-suffix="%">
                  40%
                </span>
              </div>
              <div className="metric__label">Faster loads</div>
            </div>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <i className="bi bi-chevron-down" />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {/* duplicated once so the -50% translate loops seamlessly */}
          {[0, 1].map((dup) =>
            MARQUEE.map((m) => (
              <span className="marquee__item" key={`${dup}-${m}`}>
                {m}
              </span>
            ))
          )}
        </div>
      </div>
    </>
  );
}
