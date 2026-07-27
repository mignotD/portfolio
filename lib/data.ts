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
    description: "Practical AI assisted features, including adaptive recommendation logic, readiness scoring, and serverless AI functions, integrated into production systems.",
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
  "OpenAI API",
  "Socket.IO",
  "OAuth",
];

// Experience - tabbed layout
export const experience = [
  {
    id: "afterquery",
    company: "AfterQuery",
    title: "AI Research Contractor",
    period: "Feb 2026 – Present",
    location: "Remote",
    bullets: [
      "Authored evaluation tasks for Terminal-Bench, a benchmark suite testing AI agent capabilities across file manipulation, build systems, Git, compiler engineering, and cybersecurity domains.",
      "Designed multimodal visual labeling tasks across automotive and skilled trades domains, producing structured prompt-answer pairs with expert chain-of-thought reasoning.",
      "Built Blueprint visual engineering benchmarks targeting frontier model difficulty, involving 20–30+ agent reasoning steps per task.",
    ],
  },
  {
    id: "tecethio",
    company: "TechEthio IT Solution",
    title: "Full-Stack Developer",
    period: "Jun 2023 – Aug 2023",
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
    categories: ["fullstack"],
    categoryLabel: "Full-Stack",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "JWT", "Docker"],
    featured: true,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "https://github.com/mignotD/quorum",
    fullDescription: "Built a full-stack community platform supporting discussions, blogging, and role-based access control. Implemented authentication, content moderation workflows, advanced search, and an administrative dashboard. Applied security practices including rate limiting, input sanitization, and secure HTTP headers. Containerized services with Docker and implemented automated testing for core functionality.",
  },
  {
    id: "nuvos",
    title: "Nuvos",
    subtitle: "AI-Powered Fitness Coach",
    description: "A mobile fitness application that adapts training, nutrition, and recovery plans daily based on computed readiness scores.",
    categories: ["mobile", "ai"],
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
    categories: ["blockchain"],
    categoryLabel: "Blockchain",
    tech: ["TypeScript", "React.js", "Solidity", "Supabase", "IPFS"],
    featured: false,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "https://github.com/mignotD/EduChain-Ethiopia",
    fullDescription: "Built a credential verification platform where data is stored off-chain and a cryptographic fingerprint is anchored on-chain. Designed smart contracts for credential issuance, verification, and revocation with role-gated access. Implemented public verification tools with on-chain status indicators. Developed role-based management features for educational institutions and credential issuers.",
  },
  {
    id: "libtrack",
    title: "LibTrack",
    subtitle: "Full-Stack Library Management System",
    description: "A full-stack library management system with role-based access control, JWT authentication, and book borrowing workflows.",
    categories: ["fullstack"],
    categoryLabel: "Full-Stack",
    tech: ["Java", "Spring Boot", "React", "MySQL", "Docker"],
    featured: false,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "https://github.com/mignotD/LibTrack",
    fullDescription: "Built a full-stack library management system featuring role-based access control, JWT authentication, book borrowing and renewal workflows, automated overdue email notifications, and fine payment handling. Deployed via Docker Compose across three services.",
  },
  {
    id: "talentmind",
    title: "TalentMind",
    subtitle: "AI-Powered Recruitment Platform",
    description: "An AI-native recruitment platform that automates resume screening, conversational AI interviews, candidate evaluation, hiring workflows, and recruitment pipeline management.",
    categories: ["ai", "fullstack"],
    categoryLabel: "AI/ML",
    tech: ["Node.js", "Express.js", "MongoDB", "OpenAI API", "Socket.IO", "Google OAuth", "Docker"],
    featured: false,
    liveDemoUrl: "PLACEHOLDER",
    githubUrl: "https://github.com/mignotD/TalentMind",
    fullDescription: "Built an AI-native recruitment platform that streamlines the entire hiring workflow — from smart resume screening and AI-conducted conversational interviews to candidate scoring and pipeline management. Integrated OpenAI-powered evaluations for objective, data-driven candidate assessments. Implemented real-time communication via Socket.IO for live interview sessions and seamless collaboration. Added Google OAuth for secure, frictionless authentication and Docker for containerized deployment across environments.",
  },
];

// Education
export const education = {
  school: "Adama Science and Technology University (ASTU)",
  degree: "BSc Computer Science and Engineering",
  period: "Jun 2026",
  location: "Adama, Ethiopia",
};

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
  {
    category: "AI & Integrations",
    skills: ["OpenAI API", "LLM Integration", "OpenCV", "REST APIs", "OAuth", "Socket.IO"],
  },
];

// Blog posts
export const blogPosts = [
  {
    id: "building-talentmind",
    title: "Building TalentMind: An AI-Native Recruitment Platform with Node.js, MongoDB, and LLMs",
    excerpt: "Recruitment is still surprisingly manual. Recruiters spend countless hours reviewing resumes, scheduling interviews, comparing candidates, and moving applicants through hiring pipelines. While AI has become increasingly capable, many hiring platforms still use it only as an optional feature rather than integrating it throughout the hiring process. I wanted to explore a different approach.",
    date: "2026-07-01",
    readTime: "12 min read",
    slug: "building-talentmind-ai-recruitment-platform",
    content: `## Introduction

Recruitment is still surprisingly manual. Recruiters spend countless hours reviewing resumes, scheduling interviews, comparing candidates, and moving applicants through hiring pipelines. While AI has become increasingly capable, many hiring platforms still use it only as an optional feature rather than integrating it throughout the hiring process.

I wanted to explore a different approach.

TalentMind is a full-stack, AI-native recruitment platform that combines modern web technologies with Large Language Models (LLMs) to automate candidate screening, conduct conversational interviews, analyze responses, and help recruiters make more informed hiring decisions.

This project was built to simulate how a modern AI-first hiring platform could work in production while solving real engineering challenges around authentication, AI integration, real-time communication, security, and workflow automation.

---

## Why I Built TalentMind

The original idea was simple:

> What if recruiters only needed to review qualified candidates instead of every applicant?

Instead of asking recruiters to manually filter hundreds of resumes, I wanted AI to handle repetitive tasks while allowing humans to make the final hiring decisions.

TalentMind was designed to automate:

- Resume screening
- Candidate interviews
- Personality analysis
- Hiring recommendations
- Interview scheduling
- Recruitment pipeline management

without removing recruiters from the decision-making process.

---

## Technology Stack

I intentionally selected technologies commonly used in production backend systems.

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- EJS
- HTML
- CSS
- JavaScript

### Authentication

- Google OAuth 2.0
- bcrypt

### AI

- OpenAI-compatible APIs
- Prompt engineering
- Resume parsing
- Personality analysis
- Interview generation

### Real-time

- Socket.IO

### DevOps

- Docker
- Docker Compose

### Integrations

- SendGrid
- Nodemailer
- Google OAuth
- Webhooks

---

## Designing the Architecture

One of my goals was to organize the project similarly to a production application instead of a small demo.

The project separates responsibilities into:

- Route handlers
- Controllers
- Database models
- Authentication
- AI services
- Utility modules
- Middleware
- Real-time communication
- Audit logging

This separation made it easier to add new features without creating tightly coupled code.

---

## AI-Powered Resume Screening

One of the first features I implemented was AI resume parsing.

Candidates can upload resumes in multiple formats.

Instead of relying only on regular expressions, the application sends the extracted content to an LLM which identifies:

- Candidate information
- Skills
- Experience
- Education
- Contact information

The parsed information automatically populates the candidate profile.

This removes repetitive manual data entry while producing structured candidate records.

---

## Conversational AI Interviews

The most interesting part of the project was building the AI interviewer.

Instead of multiple-choice questions, candidates interact with an AI chatbot.

The interviewer generates role-specific questions dynamically and evaluates responses throughout the conversation.

Rather than simply storing answers, the platform analyzes communication quality and overall candidate performance.

This creates interviews that feel significantly more natural than traditional application forms.

---

## Candidate Evaluation

Once an interview is complete, TalentMind performs several AI analyses.

These include:

- Skill matching
- Personality analysis
- Emotional tone analysis
- Overall candidate scoring

Rather than relying on a single score, the platform combines multiple signals into a weighted recommendation that recruiters can review alongside the original interview.

The objective is to assist—not replace—human decision making.

---

## Building the Recruitment Pipeline

Recruitment is more than interviewing.

Companies need to move applicants through multiple stages.

I implemented a Kanban-style recruitment pipeline that allows recruiters to manage candidates from:

Applied → Screening → Interview → Assessment → Offer → Hired / Rejected

Each transition automatically updates application status and helps visualize hiring progress.

---

## Authentication and Security

Security was an important consideration throughout the project.

The platform supports:

- Google OAuth authentication
- Secure password hashing
- Role-based authorization
- Protected routes
- Input validation
- Rate limiting
- Secure HTTP headers

Administrative actions are also recorded in an immutable audit log, allowing organizations to review who performed sensitive operations.

---

## Real-Time Communication

Recruitment often requires communication between candidates and recruiters.

Using Socket.IO, I implemented real-time messaging that supports:

- Instant messaging
- Typing indicators
- Persistent conversations

This removes the need for external communication tools during the hiring process.

---

## Interview Scheduling

Another challenge was coordinating interviews.

Instead of exchanging multiple emails, recruiters propose available time slots while candidates simply choose one.

Once confirmed, the candidate automatically progresses through the recruitment pipeline.

This significantly reduces scheduling friction.

---

## AI Beyond Interviews

After completing the core hiring workflow, I expanded AI usage throughout the platform.

Additional AI capabilities include:

- Job description bias detection
- Interview question generation
- Resume parsing
- Career chatbot
- Offer letter generation

These features demonstrate how AI can improve multiple stages of recruitment instead of being isolated to a single feature.

---

## Engineering Challenges

Building TalentMind involved solving several engineering challenges beyond simply integrating an LLM.

Some of the problems included:

- Designing scalable REST APIs
- Managing authentication flows
- Integrating external AI providers
- Organizing modular backend architecture
- Handling asynchronous workflows
- Building secure authorization logic
- Designing reusable database models
- Maintaining clean separation of concerns
- Supporting real-time communication

Each feature required balancing functionality, maintainability, and scalability.

---

## Lessons Learned

TalentMind taught me that building AI products involves much more than calling an API.

The real complexity lies in designing reliable systems around AI, validating responses, securing user data, handling failures gracefully, and integrating AI into existing business workflows.

It also reinforced the importance of building modular architectures that remain maintainable as projects grow.

---

## Future Improvements

Although the platform is fully functional, there are several areas I would like to continue exploring.

These include:

- Calendar synchronization
- ATS integrations
- Mobile application
- Advanced recommendation models
- Voice interviews
- Fraud detection
- Multi-tenant architecture
- Vector search for candidate matching

---

## Final Thoughts

TalentMind became much more than an AI recruitment application.

It evolved into an opportunity to explore production backend engineering, distributed system design, AI integration, authentication, workflow automation, and modern software architecture within a single project.

More importantly, it reinforced a principle I strongly believe in:

**AI should enhance human decision-making rather than replace it.** The best software combines intelligent automation with transparency, giving people better tools instead of taking control away from them.

Building TalentMind challenged me to think beyond writing code and focus on designing systems that are scalable, maintainable, and genuinely useful in real-world hiring workflows.`,
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
  { number: "02", label: "Education", id: "education" },
  { number: "03", label: "Experience", id: "experience" },
  { number: "04", label: "Projects", id: "projects" },
  { number: "05", label: "Skills", id: "skills" },
  { number: "06", label: "Blog", id: "blog" },
  { number: "07", label: "Contact", id: "contact" },
];
