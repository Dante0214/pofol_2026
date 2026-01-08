export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  category: "web" | "mobile" | "ai";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}
export interface Certification {
  name: string;
  issuer: string;
  year: string;
}
