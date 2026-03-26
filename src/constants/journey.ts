/**
 * Professional Journey Constants
 * This file contains the data for the professional journey section.
 */

const calculateExperienceTime = (startDateStr: string) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date();
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  const diffMonths = Math.floor((diffDays % 365) / 30);
  
  if (diffYears === 0) return `${diffMonths} months`;
  return `${diffYears} years ${diffMonths} months`;
};

export const EXPERIENCE_TIME = calculateExperienceTime("2025-07-01");

export interface JourneyItem {
  role: string;
  company: string;
  date: string;
  duration: string;
  description: string;
  techStack: string[];
  hash: string;
}

export const PROFESSIONAL_JOURNEY: JourneyItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Hireko.ai",
    date: "July 2025 - Present",
    duration: EXPERIENCE_TIME,
    description:
      "Architected serverless MCP servers on AWS Lambda for production AI agentic workflows. Built RAG-powered support chatbots, autonomous AI interview agents, and engineered NL to JSON parsers using AWS Bedrock and OpenAI SDK.",
    techStack: [
      "MCP",
      "FastMCP",
      "AWS Bedrock",
      "OpenAI SDK",
      "RAG",
      "n8n",
      "AWS Lambda",
      "Python",
    ],
    hash: "s25pre",
  },
  {
    role: "Software Developer",
    company: "MetricDust",
    date: "June 2022 - July 2025",
    duration: "3 years 1 month",
    description:
      "Developed MetricRealties Dashboard 2.0 using Angular Micro-Frontends and built the React-based ORCA network dashboard with D3.js. Automated AWS S3 storage optimization using Python and implemented advanced tooling with Monaco Editor.",
    techStack: [
      "Angular",
      "React",
      "Python",
      "AWS S3",
      "AG Grid",
      "D3.js",
      "Monaco Editor",
    ],
    hash: "j22j25",
  },
  {
    role: "Software Intern",
    company: "MetricDust",
    date: "July 2021 - June 2022",
    duration: "1 year",
    description:
      "Built Angular-based dashboards for real estate SaaS platforms and integrated REST APIs for authentication and dynamic forms. Collaborated with senior engineers to optimize UI performance and gain hands-on AWS production experience.",
    techStack: [
      "Angular",
      "REST APIs",
      "AWS",
      "Authentication",
      "SCSS",
    ],
    hash: "o21j22",
  },
  {
    role: "Intern",
    company: "Let's Grow More",
    date: "Sep 2021 - Oct 2021",
    duration: "1 month",
    description:
      "Built two websites using HTML, CSS, JS, and React JS as part of project tasks, gaining hands-on frontend development experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React JS"],
    hash: "s21o21",
  },
  {
    role: "Intern",
    company: "Sparks Foundation",
    date: "Aug 2021 - Sep 2021",
    duration: "1 month",
    description:
      "Developed Barrique Hotel website with secure payment gateway integration, enhancing transactions and learning client-focused delivery.",
    techStack: ["Web Dev", "Payment Gateway"],
    hash: "a21s21",
  },
];
