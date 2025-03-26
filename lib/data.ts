// Profile & branding
export const profile = {
  name: "Mignot Dansa",
  initials: "MD",
  title: "Software Engineer / Full-Stack / AI Systems",
  tagline: "< Software Engineer / Full-Stack / AI Systems >",
  punchline: "I build things that work in production.",
  bio: "Software Engineer with experience building full-stack web and mobile applications, backend services, and AI-assisted solutions. Proficient in React, Next.js, Node.js, TypeScript, and Python, with hands-on experience developing scalable systems, designing REST APIs, and delivering production-ready applications.",
  email: "mignotdansa33@gmail.com",
  phone: "+251 937 553 248",
  location: "Addis Ababa, Ethiopia",
  linkedin: "https://www.linkedin.com/in/mignot-dansa-683870268/",
  github: "https://github.com/mignotD",
  resumePdf: "/Mignot_Dansa_CV.pdf",
};

// What I do section
export const whatIDo = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web applications from database design to responsive UI, built for performance and maintainability.",
  },
  {
    title: "Backend & API Engineering",
    description: "Scalable REST APIs, authentication systems, and server-side logic using Node.js, FastAPI, and PostgreSQL.",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native and Expo, including offline-first architecture and real-time sync.",
  },
  {
    title: "AI Integration",
    description: "Practical AI-assisted features — document analysis, OCR pipelines, and serverless AI functions — integrated into production systems.",
  },
];

// Tech marquee
export const techMarquee = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Supabase",
  "Next.js",
  "MongoDB",
  "React Native",
  "REST APIs",
];

// Experience - tabbed layout
export const experience = [
  {
    id: "tecethio",
    company: "TechEthio IT Solution",
    title: "Full-Stack Developer Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Addis Ababa",
    bullets: [
      "Developed responsive web applications using React.js, Node.js, and PostgreSQL.",
      "Identified and resolved application bugs through testing and code reviews, reducing the reported bug rate significantly.",
      "Mentored junior interns on code review practices and Git-based workflows.",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    title: "Frontend Developer",
    period: "Jan 2025 – Jun 2025",
    location: "Remote",
    bullets: [
      "Built responsive React.js applications for multiple clients, reducing page load times by up to 35% through component optimization and lazy loading.",
      "Integrated frontend applications with REST APIs and third-party services.",
      "Delivered production-ready solutions while managing multiple concurrent client projects.",
    ],
  },
  {
    id: "netsolutions",
    company: "NetSolutions",
    title: "Full-Stack Developer",
    period: "Feb 2024 – Sep 2024",
    location: "Remote",
    bullets: [
      "Developed and maintained full-stack applications using React.js, Node.js, and MongoDB.",
      "Designed RESTful APIs supporting multiple frontend clients and contributed to testing and deployment workflows.",
      "Collaborated with distributed teams to deliver project milestones on schedule.",
    ],
  },
];

// Projects - featured + grid
export const projects = [
  {
    id: "quorum",
    title: "Quorum",
    subtitle: "Community Platform & Content Management System",
    description: "A production-grade community platform with blogging, discussions, role-based access control, and AI-assisted content moderation.",
    category: "fullstack",
    categoryLabel: "Full-Stack",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "JWT", "Docker"],
    featured: true,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "https://github.com/mignotD/quorum",
    fullDescription: "Built a full-stack community platform supporting discussions, blogging, and role-based access control. Implemented authentication, content moderation workflows, advanced search, and an administrative dashboard. Applied security practices including rate limiting, input sanitization, and secure HTTP headers. Containerized services with Docker and implemented automated testing for core functionality.",
  },
  {
    id: "sebeverify",
    title: "SebeVerify",
    subtitle: "Digital Identity Verification & KYC Platform",
    description: "An end-to-end KYC platform that automates identity document verification using computer vision and OCR pipelines.",
    category: "ai",
    categoryLabel: "AI/ML",
    tech: ["Python", "FastAPI", "OpenCV", "Tesseract OCR", "React.js", "Docker"],
    featured: false,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "PLACEHOLDER",
    fullDescription: "Built a KYC platform enabling organizations to verify user identities through automated document analysis. Developed image preprocessing pipelines including deskewing, adaptive thresholding, and OCR optimization. Implemented field validation, confidence scoring, expiry checks, and audit logging for compliance workflows. Added duplicate submission detection and fraud-prevention mechanisms.",
  },
  {
    id: "nuvos",
    title: "Nuvos",
    subtitle: "AI-Powered Fitness Coach",
    description: "A mobile fitness application that adapts training, nutrition, and recovery plans daily based on computed readiness scores.",
    category: "mobile",
    categoryLabel: "Mobile",
    tech: ["TypeScript", "React Native", "Expo", "Supabase", "SQLite"],
    featured: false,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "https://github.com/mignotD/Nuvos",
    fullDescription: "Developed an AI-powered fitness application providing adaptive training, nutrition, and recovery recommendations based on daily readiness scores. Implemented offline-first architecture using an SQLite outbox queue that syncs to Supabase when connectivity is restored. Built workout tracking, nutrition logging, progress analytics, and social engagement features. Integrated Supabase Edge Functions for AI-generated weekly reports and tier-based feature access.",
  },
  {
    id: "educhain",
    title: "EduChain Ethiopia",
    subtitle: "Blockchain Academic Credential Verification",
    description: "A tamper-proof credential platform anchoring certificate fingerprints on-chain for instant public verification.",
    category: "blockchain",
    categoryLabel: "Blockchain",
    tech: ["TypeScript", "React.js", "Solidity", "Supabase", "IPFS"],
    featured: false,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "https://github.com/mignotD/EduChain-Ethiopia",
    fullDescription: "Built a credential verification platform where data is stored off-chain and a cryptographic fingerprint is anchored on-chain. Designed smart contracts for credential issuance, verification, and revocation with role-gated access. Implemented public verification tools with on-chain status indicators. Developed role-based management features for educational institutions and credential issuers.",
  },
];

// Skills by category
export const skillsByCategory = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "Java"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "Linux", "Postman"],
  },
];

// Blog posts
export const blogPosts = [
  {
    id: "ai-kyc-pipeline",
    title: "How I Built an AI-Powered KYC Pipeline with FastAPI and Tesseract OCR",
    excerpt: "A deep dive into building a production-grade identity verification pipeline — from image preprocessing and OCR to confidence scoring and fraud detection.",
    date: "2026-06-01",
    readTime: "8 min read",
    slug: "ai-kyc-pipeline-fastapi-tesseract",
  },
];

// Leadership section
export const leadership = {
  organization: "UniVerseHub",
  role: "Team Lead & Co-Founder",
  description: "Co-founded a student-focused digital platform to improve access to academic resources and collaboration opportunities. Led technical strategy and product development; advanced to the national stage of the Hult Prize competition.",
};

// Navigation sections
export const navSections = [
  { number: "01", label: "About", id: "about" },
  { number: "02", label: "Experience", id: "experience" },
  { number: "03", label: "Projects", id: "projects" },
  { number: "04", label: "Skills", id: "skills" },
  { number: "05", label: "Blog", id: "blog" },
  { number: "06", label: "Contact", id: "contact" },
];
