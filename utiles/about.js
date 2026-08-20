const BIRTH_DATE = new Date(2000, 10, 9); // 9 Nov 2000

const getAge = () => {
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const monthDiff = today.getMonth() - BIRTH_DATE.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < BIRTH_DATE.getDate())
  ) {
    age -= 1;
  }
  return age;
};

export default {
  title: "About",

  des: "Results-driven Full Stack Engineer with 3 years of experience building scalable, high-performance, and SEO-optimized web applications. Expert in React.js, Next.js, TypeScript, and JavaScript (ES6+) with deep knowledge of Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR). Proficient in AI Prompt Engineering using Claude AI, ChatGPT, and LLM-powered development tools, with strong expertise in state management, responsive design, and test-driven development (TDD).",
  img: "/assets/img/gohar.jpg",
  role: {
    name: "Full Stack Engineer | React & Node.js | AI Prompt Engineer",
    intro:
      "Senior Full Stack Engineer using Claude Code, Claude AI, and GitHub Copilot to accelerate development, refactor legacy code, analyse large codebases, and support architectural decision-making. Proficient in AI Prompt Engineering, MCP (Model Context Protocol) tools integration, and creating comprehensive Markdown documentation. Works across the stack: React.js, Next.js and TypeScript on the client, Node.js and NestJS services, RESTful APIs and microservices architecture on the server, with deep knowledge of SSR, SSG and ISR.",
    info: [
      { label: "Birthday", link: null, value: "9 Nov, 2000" },
      {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/gohar-butt-0118b1422",
        value: "View Profile",
      },
      { label: "Phone", link: null, value: "+92 305 935 8248" },
      { label: "City", link: null, value: "Lahore, Pakistan" },
      { label: "Age", link: null, value: String(getAge()) },
      { label: "Degree", link: null, value: "BS(CS) from FAST-NUCES" },
      {
        label: "Email",
        link: "mailto:gohar350butt@gmail.com",
        value: "gohar350butt@gmail.com",
      },
      { label: "Freelance", link: null, value: "Available" },
    ],
  },
  description:
    "I build high-performance, SEO-optimized web applications end to end — React.js, Next.js and TypeScript on the client, Node.js and NestJS services, REST APIs and databases behind them. With AI-assisted development using Claude Code and Claude AI, I achieve 2x productivity improvement in coding, debugging, and documentation tasks.",
};
