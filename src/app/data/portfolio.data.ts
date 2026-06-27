export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const PORTFOLIO = {
  name: 'Stebin Babu',
  title: 'Software Developer',
  tagline: 'Crafting reliable, user-focused software with precision and purpose.',
  about: `I'm a passionate developer who turns complex problems into clean, scalable solutions. I care about performance, maintainable architecture, and experiences that feel effortless to use. When I'm not coding, I'm exploring new technologies and refining how I build.`,
  email: 'hello@stebinbabu.com',
  location: 'Available for remote & on-site',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  skills: [
    { category: 'Frontend', skills: ['Angular', 'TypeScript', 'HTML/CSS', 'Responsive Design'] },
    { category: 'Backend', skills: ['Node.js', 'REST APIs', 'Python', 'SQL'] },
    { category: 'Tools', skills: ['Git', 'Docker', 'CI/CD', 'Cloud Deployment'] }
  ] as SkillGroup[],
  projects: [
    {
      title: 'Portfolio Platform',
      description: 'A modern, responsive personal portfolio built with Angular featuring smooth navigation and a bold brand identity.',
      tags: ['Angular', 'SCSS', 'TypeScript'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Full-stack productivity application with real-time updates, role-based access, and intuitive drag-and-drop workflows.',
      tags: ['Node.js', 'MongoDB', 'REST API'],
      link: '#',
      github: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with custom charts, filters, and export capabilities for business insights.',
      tags: ['TypeScript', 'Chart.js', 'API Integration'],
      link: '#',
      github: '#'
    }
  ] as Project[],
  experience: [
    {
      role: 'Software Developer',
      company: 'Tech Company',
      period: '2022 — Present',
      description: 'Design and deliver web applications, collaborate with cross-functional teams, and maintain high code quality standards.'
    },
    {
      role: 'Junior Developer',
      company: 'Startup Studio',
      period: '2020 — 2022',
      description: 'Built responsive interfaces, integrated third-party APIs, and contributed to agile sprint cycles and code reviews.'
    }
  ] as Experience[]
};
