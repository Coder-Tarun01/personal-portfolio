import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  icon: React.ReactElement;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
}

export interface VisibilityState {
  [key: string]: boolean;
}
