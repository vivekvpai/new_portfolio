import { Project, TechStackItem } from '../types';

export type { Project };

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI AGENTS & LLMS',
    description: '',
    techStack: ['Python', 'LangChain', 'N8N', 'OpenAI'],
    image: 'https://picsum.photos/seed/ai-agent/800/600',
    color: '#FF4B4B',
    projectCount: 5
  },
  {
    id: '2',
    title: 'WEB ECOSYSTEMS',
    description: '',
    techStack: ['TypeScript', 'React', 'Node.js', 'Redis'],
    image: 'https://picsum.photos/seed/automation/800/600',
    color: '#54C64D',
    projectCount: 10
  },
  {
    id: '3',
    title: 'MOBILE INTERFACES',
    description: '',
    techStack: ['Go', 'TypeScript', 'gRPC', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/mcp/800/600',
    color: '#3D8FF0',
    projectCount: 2
  },
  {
    id: '4',
    title: 'CREATIVE EXPERIMENTS',
    description: '',
    techStack: ['Python', 'Docker', 'Kubernetes', 'Grafana'],
    image: 'https://picsum.photos/seed/pipeline/800/600',
    color: '#FFB800',
    projectCount: 5
  }
];

export const LEFT_TECH_STACK = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Expo", icon: "https://raw.githubusercontent.com/expo/expo/master/packages/expo/assets/favicon.png" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Electron JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Ollama", icon: "https://ollama.com/favicon.ico" },
  { name: "Gemini", icon: "https://www.gstatic.com/lamda/images/favicon_v2_16x16.png" },
  { name: "Claude", icon: "https://www.anthropic.com/favicon.ico" },
  { name: "OpenAI", icon: "https://openai.com/favicon.ico" },
  { name: "Grok", icon: "https://x.ai/favicon.ico" },
  { name: "Loveable", icon: "https://loveable.ai/favicon.ico" },
];

export const RIGHT_TECH_STACK = [
  { name: "MCP", icon: "https://modelcontextprotocol.io/favicon.ico" },
  { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Swagger", icon: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
  { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  { name: "Pytest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" },
  { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  { name: "Antigravity", icon: "https://antigravity.ai/favicon.ico" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "WindSurf", icon: "https://windsurf.ai/favicon.ico" },
  { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
];
