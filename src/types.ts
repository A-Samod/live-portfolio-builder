export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  dribbble?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // percentage (0 - 100)
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TimelineEvent {
  id: string;
  title: string; // e.g., "Senior Frontend Engineer"
  subtitle: string; // e.g., "Stripe" or "University of Waterloo"
  period: string; // e.g., "2022 - Present"
  description: string;
  type: 'work' | 'education' | 'award';
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  detailedBio: string;
  location: string;
  email: string;
  avatarUrl: string;
  socials: SocialLinks;
  skills: Skill[];
  projects: Project[];
  experience: TimelineEvent[];
}
