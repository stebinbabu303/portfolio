export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  type: 'work' | 'personal';
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  period: string;
  score: string;
  institution: string;
  university?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const PORTFOLIO = {
  name: 'Stebin Babu',
  title: 'Software Developer',
  tagline: 'Crafting high-performance enterprise systems and responsive user interfaces with precision.',
  about: `Software Engineer with 2+ years of experience in Full Stack Web Development, specializing in ASP.NET Core, C#, Angular, SQL Server, and REST APIs. Experienced in developing enterprise applications, implementing new features, fixing complex production issues, optimizing SQL queries, and building responsive web interfaces. Passionate about writing clean, maintainable code and delivering reliable business solutions. A proactive team player with strong analytical, problem-solving, and communication skills, committed to continuous learning and professional growth.`,
  email: 'stebinbabu303@gmail.com',
  phone: '+91 8606596654',
  location: 'Kottayam, Kerala, India',
  social: {
    github: 'https://github.com/stebinbabu303',
    linkedin: 'https://linkedin.com/in/stebin-babu',
    twitter: 'https://twitter.com/stebin_babu'
  },
  skills: [
    { category: 'Frontend', skills: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'CSS3', 'JavaScript'] },
    { category: 'Backend & DB', skills: ['ASP.NET Core', 'C#', 'ASP.NET Web API', 'Microsoft SQL Server', 'REST APIs'] },
    { category: 'Soft Skills & Strength', skills: ['Problem Solving', 'Analytical Thinking', 'Adaptability', 'Team Collaboration', 'Communication', 'Quick Learner', 'Attention to Detail', 'Time Management'] }
  ] as SkillGroup[],
  projects: [
    {
      title: 'Gold Loan Audit & Vigilance Platform',
      description: 'An enterprise surveillance and audit platform built for monitoring gold loan operations. Features real-time anomaly detection, risk assessment workflows, and audit reporting templates.',
      tags: ['Angular', 'ASP.NET Core', 'SQL Server', 'REST API'],
      link: '#',
      github: '#',
      type: 'work'
    },
    {
      title: 'Liability & Auction Management System',
      description: 'Automated workflow system for tracking overdue gold loan liabilities, calculating outstanding dues, and managing the auction cycle of pledged assets.',
      tags: ['Angular', 'C#', 'SQL Server', 'Stored Procedures'],
      link: '#',
      github: '#',
      type: 'work'
    },
    {
      title: 'Accounting & Project Ledger Manager',
      description: 'Double-entry bookkeeping and client ledger management module integrated with project accounting services. Handles multi-currency transactions and real-time ledger updates.',
      tags: ['Angular', 'TypeScript', 'ASP.NET Web API', 'RxJS'],
      link: '#',
      github: '#',
      type: 'work'
    },
    {
      title: 'Personal Finance Tracking Dashboard',
      description: 'A full-stack wealth and expense management application. Visualizes spending categories, handles multi-account synchronization, and generates monthly budget summaries.',
      tags: ['Angular', 'ASP.NET Core', 'SQL Server', 'Chart.js'],
      link: '#',
      github: 'https://github.com/stebinbabu303/finance-tracker',
      type: 'personal'
    },
    {
      title: 'Dynamic Developer CV Builder',
      description: 'A web application that generates professional resumes from raw JSON schemas or markdown files, supporting customizable layouts and PDF exports.',
      tags: ['Angular', 'SCSS', 'TypeScript', 'pdfmake'],
      link: '#',
      github: 'https://github.com/stebinbabu303/cv-builder',
      type: 'personal'
    },
    {
      title: 'Reactive State Store',
      description: 'A lightweight, reactive state management library for Angular applications built on top of RxJS, enabling predictable unidirectional data flow without boilerplate.',
      tags: ['TypeScript', 'RxJS', 'Angular', 'NPM Package'],
      link: '#',
      github: 'https://github.com/stebinbabu303/rxjs-state-store',
      type: 'personal'
    }
  ] as Project[],
  experience: [
    {
      role: 'Software Developer',
      company: 'Muthoottu Infotech Pvt. Ltd',
      location: 'Ernakulam, Kerala',
      period: 'Apr 2024 — Present',
      description: [
        'Developed and maintained enterprise web applications using ASP.NET Core, C#, Angular, SQL Server, HTML, CSS, and JavaScript.',
        'Designed and implemented RESTful APIs, optimized SQL queries and stored procedures, and enhanced application performance.',
        'Built responsive Angular user interfaces and developed new features across modules including Audit, Vigilance, Liability, Gold Loan, Auction, and Accounting.',
        'Implemented Excel import/export functionality, generated business reports, and resolved production issues while maintaining application quality.',
        'Collaborated with cross-functional teams throughout the software development lifecycle, from requirement analysis and development to testing, deployment, and production support.'
      ]
    },
    {
      role: 'Angular Developer',
      company: 'Info360 Innovative Solutions LLP',
      location: 'Peruva, Kottayam',
      period: 'Sep 2023 — Mar 2024',
      description: [
        'Developed responsive and user-friendly interfaces using Angular for accounting and project management applications.',
        'Worked closely with backend services built on ASP.NET Web API, integrating APIs and implementing business logic.',
        'Participated in the complete software development lifecycle, including requirement analysis, development, debugging, testing, and maintenance.'
      ]
    }
  ] as Experience[],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      period: '2021 — 2023',
      score: '7.23 CGPA',
      institution: 'Amal Jyothi College of Engineering, Kanjirappally',
      university: 'APJ Abdul Kalam Technological University'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      period: '2017 — 2020',
      score: '5.7 CGPA',
      institution: 'Mar Augusthinose College, Ramapuram',
      university: 'Mahatma Gandhi University'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      period: '2015 — 2017',
      score: '77%',
      institution: 'Mattakkara H.S.S, Mattakkara',
      university: 'Kerala State Board'
    },
    {
      degree: 'Secondary School Certificate (SSLC / 10th)',
      period: '2015',
      score: '90%',
      institution: 'St Joseph\'s H.S, Mattakkara',
      university: 'Kerala State Board'
    }
  ] as Education[],
  certifications: [
    {
      title: 'Microsoft Certified: Azure Developer Associate (AZ-204)',
      issuer: 'Microsoft',
      year: '2025',
      credentialUrl: '#'
    },
    {
      title: 'Advanced Angular & Enterprise State Architect',
      issuer: 'Angular Academy',
      year: '2024',
      credentialUrl: '#'
    },
    {
      title: 'Building RESTful APIs with ASP.NET Core & EF Core',
      issuer: 'Pluralsight Professional',
      year: '2023',
      credentialUrl: '#'
    }
  ] as Certification[],
  achievements: [
    {
      title: 'Employee of the Quarter',
      description: 'Awarded at Muthoottu Infotech for early delivery and robust performance of the Vigilance & Audit Module, reducing report processing times by 30%.',
      year: '2025'
    },
    {
      title: 'Core Database Optimization',
      description: 'Refactored legacy stored procedures and query indexing at Muthoottu Infotech, which decreased database CPU utilization by 25% under peak loads.',
      year: '2024'
    },
    {
      title: 'Testing Standards Advocate',
      description: 'Introduced mock-based Angular component testing standards at Info360, boosting codebase unit test coverage from 20% to 75% for project accounting interfaces.',
      year: '2023'
    }
  ] as Achievement[]
};
