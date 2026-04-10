export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  score: string;
  period: string;
}

export interface Skill {
  name: string;
  category: 'Professional' | 'Relevant';
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  interests: string[];
}
