export interface SocialAccount {
  name: string;
  url: string;
  className: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface MainData {
  name: string;
  occupation: string;
  description: string;
  image: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
  resumedownload: string;
  social: SocialAccount[];
}

export interface EducationItem {
  school: string;
  degree: string;
  graduated: string;
  description: string;
}

export interface WorkItem {
  company: string;
  title: string;
  years: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface CertificationItem {
  name: string;
  authority: string;
  date: string;
  license?: string;
  url?: string;
}

export interface HonorItem {
  title: string;
  issuer: string;
  date: string;
}

export interface VolunteeringItem {
  organization: string;
  role: string;
  date: string;
  description: string;
}

export interface CourseItem {
  name: string;
  number: string;
}

export interface ResumeData {
  skillmessage: string;
  education: EducationItem[];
  work: WorkItem[];
  skills: SkillItem[];
  certifications?: CertificationItem[];
  honors?: HonorItem[];
  volunteering?: VolunteeringItem[];
  courses?: CourseItem[];
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
  url: string;
  description: string;
}

export interface PortfolioData {
  projects: ProjectItem[];
}

export interface TestimonialItem {
  text: string;
  user: string;
}

export interface TestimonialsData {
  testimonials: TestimonialItem[];
}

export interface FullResumeSchema {
  main: MainData;
  resume: ResumeData;
  portfolio: PortfolioData;
  testimonials: TestimonialsData;
}
