/**
 * Per-route title + description.
 *
 * Every page previously shared one title/description, which Google treats as
 * duplicate content and which gives AI answer engines nothing to distinguish
 * one URL from another. Each entry below is unique, front-loads the entity
 * name, and stays inside the ~60 char / ~155 char render limits.
 */

export const PAGE_SEO = {
  "/": {
    title:
      "Muhammad Gohar — Full Stack Engineer in Lahore, Pakistan",
    description:
      "Muhammad Gohar is a Senior Full Stack Engineer in Lahore, Pakistan with 3 years building React, Next.js, TypeScript and Node.js platforms serving 100K+ daily users. Available for senior full stack roles.",
  },
  "/about": {
    title: "About Muhammad Gohar — Full Stack Engineer, Lahore",
    description:
      "Background, skills and AI-assisted workflow of Muhammad Gohar: FAST-NUCES computer science graduate and Senior Full Stack Engineer at ElkTech, working across React, Next.js, Node.js, NestJS and real-time data.",
  },
  "/resume": {
    title: "Muhammad Gohar Résumé — Senior Full Stack Engineer",
    description:
      "Full résumé of Muhammad Gohar: Senior Full Stack Engineer at ElkTech, previously Sixlogics, The Dev Corporate and Devsinc. React, Next.js, TypeScript, Node.js, NestJS, Apache Kafka and AI-assisted delivery.",
  },
  "/portfolio": {
    title: "Portfolio — Live Sports Platforms by Muhammad Gohar",
    description:
      "Selected work by Muhammad Gohar: Racing and Sports UK, Betway Scores, Hollywood Bets, Football First and Score Mania — real-time platforms with 90+ Lighthouse scores and 100K+ daily users.",
  },
  "/contact": {
    title: "Contact Muhammad Gohar — Full Stack Engineer for Hire",
    description:
      "Get in touch with Muhammad Gohar, Senior Full Stack Engineer in Lahore, Pakistan. Open to senior full stack roles, freelance builds and consulting on performance, SEO and AI-assisted delivery.",
  },
};

export const getPageSeo = (path) => PAGE_SEO[path] ?? PAGE_SEO["/"];

/**
 * Questions real people (and AI answer engines) ask about a candidate.
 * Rendered visibly on the site AND emitted as FAQPage structured data —
 * schema that describes invisible content is a guidelines violation.
 */
export const FAQS = [
  {
    q: "Who is Muhammad Gohar?",
    a: "Muhammad Gohar is a Senior Full Stack Engineer based in Lahore, Pakistan, with 3 years of professional experience building scalable, SEO-optimised web applications end to end — from React and Next.js interfaces through to Node.js and NestJS services, APIs and databases. He currently works at ElkTech and previously spent nearly three years at Sixlogics engineering live sports platforms that serve over 100,000 daily active users.",
  },
  {
    q: "What technologies does Muhammad Gohar specialise in?",
    a: "On the client he works with React.js, Next.js, TypeScript and JavaScript (ES6+), with deep knowledge of Server-Side Rendering (SSR), Static Site Generation (SSG) and Incremental Static Regeneration (ISR), plus Redux Toolkit, React Query and TailwindCSS. On the server he builds with Node.js, NestJS and Express, designing RESTful APIs, GraphQL endpoints and microservices, and integrating MongoDB, PostgreSQL and Firebase. He also uses Apache Kafka and WebSockets for real-time data pipelines.",
  },
  {
    q: "What has Muhammad Gohar built?",
    a: "He architected and developed high-traffic live sports platforms including Racing and Sports UK, Betway Scores, Hollywood Bets Live Score, Football First and Score Mania. These serve 100,000+ daily active users, achieve 90+ Lighthouse scores, and use Apache Kafka pipelines for sub-second live data latency.",
  },
  {
    q: "How does Muhammad Gohar use AI in development?",
    a: "He uses Claude Code, Claude AI and GitHub Copilot to analyse large codebases, implement complex features, debug production issues and generate documentation — a roughly 2x productivity improvement. He is also experienced in prompt engineering and the Model Context Protocol (MCP) for building AI-powered developer tooling.",
  },
  {
    q: "Where did Muhammad Gohar study?",
    a: "He holds a Bachelor of Science in Computer Science from the National University of Computer and Emerging Sciences (FAST-NUCES) in Lahore, Pakistan, completed between 2019 and 2023, with a minor in Project Management.",
  },
  {
    q: "Is Muhammad Gohar available for hire?",
    a: "Yes. He is open to senior full stack engineering roles, freelance projects and consulting engagements focused on web performance, technical SEO and AI-assisted delivery. He can be reached at gohar350butt@gmail.com or on LinkedIn, and typically replies within a day.",
  },
];
