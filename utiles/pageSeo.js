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
      "Muhammad Gohar — Frontend Engineer & React Developer in Lahore",
    description:
      "Muhammad Gohar is a Senior Software Engineer in Lahore, Pakistan with 3 years building React, Next.js and TypeScript platforms serving 100K+ daily users. Available for senior frontend roles.",
  },
  "/about": {
    title: "About Muhammad Gohar — React & Next.js Engineer, Lahore",
    description:
      "Background, skills and AI-assisted workflow of Muhammad Gohar: FAST-NUCES computer science graduate, Senior Software Engineer at ElkTech, specialising in SSR, Core Web Vitals and real-time data.",
  },
  "/resume": {
    title: "Muhammad Gohar Résumé — Senior Software Engineer",
    description:
      "Full résumé of Muhammad Gohar: Senior Software Engineer at ElkTech, previously Sixlogics, The Dev Corporate and Devsinc. React, Next.js, TypeScript, Apache Kafka, NestJS and AI-assisted delivery.",
  },
  "/portfolio": {
    title: "Portfolio — Live Sports Platforms by Muhammad Gohar",
    description:
      "Selected work by Muhammad Gohar: Racing and Sports UK, Betway Scores, Hollywood Bets, Football First and Score Mania — real-time platforms with 90+ Lighthouse scores and 100K+ daily users.",
  },
  "/contact": {
    title: "Contact Muhammad Gohar — Frontend Engineer for Hire",
    description:
      "Get in touch with Muhammad Gohar, Senior Software Engineer in Lahore, Pakistan. Open to senior frontend roles, freelance builds and consulting on performance, SEO and AI-assisted delivery.",
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
    a: "Muhammad Gohar is a Senior Software Engineer based in Lahore, Pakistan, with 3 years of professional experience building scalable, SEO-optimised web applications. He currently works at ElkTech and previously spent nearly three years at Sixlogics engineering live sports platforms that serve over 100,000 daily active users.",
  },
  {
    q: "What technologies does Muhammad Gohar specialise in?",
    a: "He specialises in React.js, Next.js, TypeScript and JavaScript (ES6+), with deep knowledge of Server-Side Rendering (SSR), Static Site Generation (SSG) and Incremental Static Regeneration (ISR). He also works with Apache Kafka and WebSockets for real-time data, Redux Toolkit and React Query for state, NestJS on the backend, and TailwindCSS for styling.",
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
    a: "Yes. He is open to senior frontend engineering roles, freelance projects and consulting engagements focused on web performance, technical SEO and AI-assisted delivery. He can be reached at gohar350butt@gmail.com or on LinkedIn, and typically replies within a day.",
  },
];
