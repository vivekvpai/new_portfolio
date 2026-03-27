import { Project, TechStackItem, OtherProject, BubbleItem } from "../types";

/** Main Projects (The core cards with project counts) */
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI AGENTS & LLMS",
    description: "",
    techStack: ["Python", "LangChain", "N8N", "OpenAI"],
    image: "/images/projects/orca.png",
    color: "#FF4B4B",
    projectCount: 5,
  },
  {
    id: "2",
    title: "WEB ECOSYSTEMS",
    description: "",
    techStack: ["TypeScript", "React", "Node.js", "Redis"],
    image: "/images/projects/nets.png",
    color: "#54C64D",
    projectCount: 10,
  },
  {
    id: "3",
    title: "MOBILE INTERFACES",
    description: "",
    techStack: ["React Native", "Expo", "TypeScript"],
    image: "/images/projects/iw.png",
    color: "#3D8FF0",
    projectCount: 2,
  },
  {
    id: "4",
    title: "CREATIVE EXPERIMENTS",
    description: "",
    techStack: ["Python", "Docker", "Figma"],
    image: "/images/projects/sss.png",
    color: "#FFB800",
    projectCount: 5,
  },
];

/** Other Projects (The scrolling card list at the bottom) */
export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: "INTRA CREW",
    desc: "Internal team management and collaboration platform built to streamline workflows, task tracking, and communication across distributed engineering teams.",
    color: "#FF4B4B",
    img: "/images/projects/intracrew.png",
    buttonText: "View Platform",
    link: "#",
  },
  {
    title: "METRIC REALITIES",
    desc: "End-to-end real estate SaaS platform enabling agents to build custom property websites in under 10 minutes — with MLS integration, Google Maps, transaction dashboards, and support for 4,800+ users.",
    color: "#54C64D",
    img: "/images/projects/MR_Logo_new.png",
    buttonText: "Explore Dashboard",
    link: "#",
  },
  {
    title: "EASYQ SOLUTIONS",
    desc: "Full-stack compliance management platform for the medical device industry — aligning QMS workflows with ISO 13485 and 21 CFR Part 820 standards through document editing, data visualization, and Spring Boot APIs.",
    color: "#3D8FF0",
    img: "/images/projects/eq.png",
    buttonText: "See Solutions",
    link: "#",
  },
  {
    title: "OPEN MATE",
    desc: "Open-source developer productivity tool with a unified CLI, Electron desktop UI, and MCP server — enabling engineers and AI agents (Claude, ChatGPT) to open any project in any IDE instantly. 2,850+ npm downloads.",
    color: "#FF4B4B",
    img: "/images/projects/om.png",
    buttonText: "View Source",
    link: "#",
  },
  {
    title: "ORCA",
    desc: "Web-based network device management dashboard for Stordis — featuring an AI chatbot (ORCASK) that replaces manual UI interactions with natural language commands, real-time logging at 30+ logs/sec, and full VLAN and interface CRUD.",
    color: "#54C64D",
    img: "/images/projects/orca.png",
    buttonText: "View Project",
    link: "#",
  },
  // {
  //   title: "QUERY 3AI",
  //   desc: "AI-powered database querying and natural language processing interface for complex enterprise data lakes.",
  //   color: "#3D8FF0",
  //   img: "/images/projects/query3ai.png",
  //   buttonText: "Try Query 3AI",
  //   link: "#",
  // },
];

/** Hierarcho (HIREKO.AI) feature section data */
export const HIERARCHO_DATA = {
  title: "HIREKO.AI",
  image: "/images/projects/hireko-web.png",
  bubbles: [
    {
      title: "AI INTERVIEW AGENTS",
      desc: "Architected MCP servers and agents on AWS Lambda to autonomously conduct interviews and score candidates — 18% more accurate.",
      color: "#FF4B4B",
      pos: "top-[10%] left-[-5%]",
    },
    {
      title: "RAG & NL SEARCH",
      desc: "Built RAG-powered support chatbots and NL→JSON job search APIs using AWS Bedrock, reducing AI response time by 26%.",
      color: "#54C64D",
      pos: "top-[45%] right-[-5%]",
    },
    {
      title: "n8n AUTOMATION",
      desc: "Engineered automated email pipelines for personalized invitations and recommendations, accelerating the hiring funnel.",
      color: "#3D8FF0",
      pos: "bottom-[5%] left-[-2%]",
    },
  ] as BubbleItem[],
};

/** Shop Prop feature section data */
export const SHOPPROP_DATA = {
  title: "SHOP PROP",
  webImage: "/images/projects/shopprop-web.png",
  mobileImage: "/images/projects/shopprop-mobile.webp",
  bubbles: [
    {
      title: "MFE ARCHITECTURE",
      desc: "Spearheaded Dashboard v2.0 with Module Federation, reducing initial load time by 40% and runtime overhead by 25%.",
      color: "#FF4B4B",
      pos: "top-[15%] left-[45%]",
    },
    {
      title: "UI/UX PERFORMANCE",
      desc: "Optimized property search with lazy loading, achieving 40% faster API response and 71% faster map rendering.",
      color: "#54C64D",
      pos: "top-[45%] right-[15%]",
    },
    {
      title: "CROSS-PLATFORM",
      desc: "Led React Native development and Angular 12→16 migration, improving mobile performance and codebase health by 25%.",
      color: "#3D8FF0",
      pos: "bottom-[15%] left-[35%]",
    },
  ] as BubbleItem[],
};

/** Main Tech Stack Pills (The icons surrounding the character) */
export const LEFT_TECH_STACK: TechStackItem[] = [
  { name: "TypeScript", icon: "/images/tech/ts.png" },
  { name: "JavaScript", icon: "/images/tech/js.png" },
  { name: "Python", icon: "/images/tech/python.png" },
  { name: "Angular", icon: "/images/tech/angular.png" },
  { name: "React", icon: "/images/tech/react.png" },
  { name: "Django", icon: "/images/tech/django.png" },
  { name: "React Native", icon: "/images/tech/react.png" },
  { name: "Expo", icon: "/images/tech/expo.jpg" },
  { name: "HTML", icon: "/images/tech/html.png" },
  { name: "CSS", icon: "/images/tech/css.png" },
  { name: "Node.js", icon: "/images/tech/node.png" },
  { name: "PHP", icon: "/images/tech/php.png" },
  { name: "Electron JS", icon: "/images/tech/electron.png" },
  { name: "MySQL", icon: "/images/tech/mysql.png" },
  { name: "C++", icon: "/images/tech/c++.png" },
  { name: "Ollama", icon: "/images/tech/ollama.png" },
  { name: "Gemini", icon: "/images/tech/gemini.png" },
  { name: "Claude", icon: "/images/tech/claude.png" },
  { name: "OpenAI", icon: "/images/tech/openai.png" },
  { name: "Grok", icon: "/images/tech/grok.png" },
];

export const RIGHT_TECH_STACK: TechStackItem[] = [
  { name: "MCP", icon: "/images/tech/mcp.png" },
  { name: "NPM", icon: "/images/tech/npm.png" },
  { name: "Ubuntu", icon: "/images/tech/ubuntu.png" },
  { name: "Docker", icon: "/images/tech/docker.png" },
  { name: "AWS", icon: "/images/tech/aws.png" },
  { name: "Git", icon: "/images/tech/git.png" },
  { name: "GitHub", icon: "/images/tech/gh.png" },
  { name: "GitLab", icon: "/images/tech/gitlab.png" },
  { name: "Bootstrap", icon: "/images/tech/bootstrap.png" },
  { name: "Tailwind", icon: "/images/tech/tailwind.png" },
  { name: "Figma", icon: "/images/tech/figma.png" },
  { name: "Postman", icon: "/images/tech/postman.png" },
  { name: "Swagger", icon: "/images/tech/swagger.png" },
  { name: "Jest", icon: "/images/tech/jest.png" },
  { name: "Pytest", icon: "/images/tech/pytest.png" },
  { name: "Selenium", icon: "/images/tech/selenium.png" },
  { name: "Loveable", icon: "/images/tech/loveable.ico" },
  { name: "Antigravity", icon: "/images/tech/ag.png" },
  { name: "VS Code", icon: "/images/tech/vs.png" },
  { name: "WindSurf", icon: "/images/tech/ws.png" },
  { name: "IntelliJ", icon: "/images/tech/intellij.png" },
];
