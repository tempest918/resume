export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    isArchive: boolean;
    details: string[];
}

export interface Education {
    title: string;
    institution: string;
    date: string;
}

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    img: string;
    link: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    linkUrl?: string;
}

export interface ResumeData {
    name: string;
    title: string;
    contact: {
        location: string;
        email: string;
        linkedin: string;
        github: string;
        gravatarHash: string;
    };
    profile: string;
    experience: Experience[];
    skills: Record<string, string[]>;
    education: Education[];
    certifications: Certification[];
    projects: Project[];
}