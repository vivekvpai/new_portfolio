/**
 * Centralized type definitions for the portfolio.
 */

export interface JourneyItem {
  role: string;
  company: string;
  date: string;
  duration: string;
  description: string;
  techStack: string[];
  hash: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
  color: string;
  projectCount: number;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface BlogItem {
  img: string;
  name: string;
  link: string;
  description: string;
  color: string;
}

export interface EducationItem {
  step: string;
  level: string;
  institution: string;
  year: string;
  color: string;
  desc: string;
}

export interface OtherProject {
  title: string;
  desc: string;
  color: string;
  img: string;
  buttonText: string;
  link: string;
}

export interface NavigationCardProps {
  isCollapsed: boolean;
  activeSection: string;
  onNavigate: (section: string) => void;
}
