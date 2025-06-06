export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  skills: string[];
}