
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  
  location: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}
