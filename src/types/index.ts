export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  courses: string[];
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  url: string;
}