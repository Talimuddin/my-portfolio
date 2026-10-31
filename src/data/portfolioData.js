/**
 * Portfolio Data Source
 * Central data repository for Talimuddin's Signal HUD Portfolio.
 */

export const personal = {
  name: "Talimuddin",
  callsign: "TALIM // DEV-01",
  role: "Full-Stack Developer & Creative Technologist",
  status: "OPEN FOR OPPORTUNITIES",
  location: "Bangalore, India",
  coordinates: "12.9716° N, 77.5946° E",
  bio: "Passionate software engineer trained in modern full-stack web architectures, immersive 3D interfaces, and augmented reality concepts. Dedicated to writing clean, maintainable code and engineering high-performance digital experiences.",
  summary: "Specialized in React, Node.js, modern CSS, and motion graphics. Actively building robust full-stack applications with high aesthetic precision.",
  email: "talimuddin.dev@gmail.com",
  availability: "Immediate / Full-time & Internships",
}

export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
  role: "Placement Training Program",
  specialization: "Full-Stack Web Development, AI, and Augmented Reality Training",
  period: "2025 - 2026",
  description: "Intensive placement-oriented engineering program covering core computer science principles, full-stack JavaScript architectures, database systems, AI tools, and AR-driven interactive solutions.",
}

export const navLinks = [
  { id: "home", label: "01 // HOME", href: "#home" },
  { id: "about", label: "02 // PROFILE", href: "#about" },
  { id: "projects", label: "03 // PROJECTS", href: "#projects" },
  { id: "journey", label: "04 // JOURNEY", href: "#journey" },
  { id: "contact", label: "05 // TRANSMIT", href: "#contact" },
]

export const stats = [
  { label: "TRAINING PROGRAM", value: "TAP ACADEMY", detail: "Full-Stack Specialist" },
  { label: "CORE STACK", value: "REACT + NODE", detail: "Vite, Tailwind, GSAP" },
  { label: "PRODUCTION PROJECTS", value: "04+", detail: "Full-Stack & 3D Web" },
  { label: "SYSTEM STATUS", value: "ONLINE", detail: "Ready for Deployment" },
]

export const skillCategories = [
  {
    category: "FRONTEND ENGINEERING",
    code: "FE-01",
    skills: [
      { name: "React 19", level: "Advanced", tag: "CORE" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "CORE" },
      { name: "Tailwind CSS v4", level: "Expert", tag: "STYLING" },
      { name: "HTML5 / Semantic UI", level: "Expert", tag: "CORE" },
      { name: "GSAP & ScrollTrigger", level: "Intermediate", tag: "MOTION" },
      { name: "Three.js / WebGL", level: "Intermediate", tag: "3D/AR" },
    ],
  },
  {
    category: "BACKEND & ARCHITECTURE",
    code: "BE-02",
    skills: [
      { name: "Node.js", level: "Proficient", tag: "RUNTIME" },
      { name: "Express.js", level: "Proficient", tag: "API" },
      { name: "RESTful API Design", level: "Advanced", tag: "PROTOCOL" },
      { name: "PostgreSQL / SQL", level: "Intermediate", tag: "DATABASE" },
      { name: "MongoDB", level: "Intermediate", tag: "DATABASE" },
      { name: "Authentication (JWT)", level: "Proficient", tag: "SECURITY" },
    ],
  },
  {
    category: "TOOLS & DEV ENVIRONMENT",
    code: "DE-03",
    skills: [
      { name: "Git & GitHub", level: "Proficient", tag: "VCS" },
      { name: "Vite & Modern Bundlers", level: "Advanced", tag: "BUILD" },
      { name: "Postman API Testing", level: "Proficient", tag: "TESTING" },
      { name: "Linux / Shell Commands", level: "Intermediate", tag: "OS" },
      { name: "Augmented Reality Concepts", level: "Enthusiast", tag: "RESEARCH" },
      { name: "AI Dev Workflows", level: "Advanced", tag: "AUTOMATION" },
    ],
  },
]

export const projects = [
  {
    id: "project-1",
    number: "SYS-01",
    title: "Signal HUD Portfolio",
    category: "CREATIVE ENGINEERING",
    tagline: "High-performance developer terminal portfolio with Three.js and GSAP telemetry.",
    description: "Built during placement training at TAP Academy. Implements custom smooth scrolling with Lenis, an interactive 3D particle core via Three.js, Tailwind v4 design tokens, and a reactive HUD overlay.",
    tags: ["React 19", "Three.js", "GSAP", "Tailwind CSS v4", "Lenis"],
    metrics: "100 Lighthouse Performance // 60 FPS Smooth Scroll",
    repoUrl: "https://github.com/Talimuddin/my-portfolio",
    liveUrl: "http://localhost:5173",
    highlight: true,
  },
  {
    id: "project-2",
    number: "SYS-02",
    title: "Placement Career Hub",
    category: "FULL-STACK PLATFORM",
    tagline: "End-to-end recruitment preparation and placement tracking portal for engineering students.",
    description: "Full-stack application featuring role-based candidate dashboards, real-time interview preparation benchmarks, company tracking, and comprehensive analytics.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
    metrics: "Secure JWT Auth // Relational Database Schema",
    repoUrl: "https://github.com/Talimuddin",
    liveUrl: "https://github.com/Talimuddin",
    highlight: false,
  },
  {
    id: "project-3",
    number: "SYS-03",
    title: "Augmented Vision Studio",
    category: "3D & IMMERSIVE TECH",
    tagline: "Interactive 3D component visualizer and spatial augmented reality playground.",
    description: "Experimental web platform showcasing real-time WebGL rendering, mesh manipulation, and augmented reality camera tracking concepts developed as part of advanced technical explorations.",
    tags: ["Three.js", "WebGL", "JavaScript", "GLSL Shaders"],
    metrics: "Low Latency Rendering // Dynamic Lighting Models",
    repoUrl: "https://github.com/Talimuddin",
    liveUrl: "https://github.com/Talimuddin",
    highlight: false,
  },
  {
    id: "project-4",
    number: "SYS-04",
    title: "OmniTask Orchestrator",
    category: "SYSTEM UTILITY",
    tagline: "Collaborative developer workflow and API monitoring command center.",
    description: "Real-time task synchronization tool with live WebSocket status feeds, keyboard shortcuts, automated task pipelines, and granular performance telemetry.",
    tags: ["React", "Node.js", "WebSockets", "Tailwind CSS"],
    metrics: "< 50ms Telemetry Sync // Zero Latency State",
    repoUrl: "https://github.com/Talimuddin",
    liveUrl: "https://github.com/Talimuddin",
    highlight: false,
  },
]

export const journey = [
  {
    id: "j-1",
    year: "2025 — PRESENT",
    title: "Full-Stack & Placement Training",
    organization: "TAP Academy",
    orgUrl: "https://thetapacademy.com/",
    badge: "ACTIVE TRAINING",
    description: "Rigorous full-time placement training program focused on industry-standard software engineering, modern JavaScript ecosystem, data structures & algorithms, enterprise backend design, and emerging AI & AR technologies.",
    skillsAcquired: ["Full-Stack Engineering", "React & Node.js", "System Architecture", "Augmented Reality Concepts", "Problem Solving"],
  },
  {
    id: "j-2",
    year: "2021 — 2025",
    title: "Bachelor of Technology / Engineering",
    organization: "University Engineering Institute",
    badge: "GRADUATED",
    description: "Comprehensive foundation in computer science engineering, software methodologies, database management systems, object-oriented programming, and operating systems.",
    skillsAcquired: ["Core Computer Science", "Operating Systems", "Networking", "Database Management", "Team Projects"],
  },
  {
    id: "j-3",
    year: "2024 — 2025",
    title: "Interactive Web & AR Research Projects",
    organization: "Independent Lab",
    badge: "INNOVATION",
    description: "Engineered multiple open-source utilities and WebGL experiences, exploring modern declarative UI patterns, high-frame-rate animations, and responsive spatial computing web interfaces.",
    skillsAcquired: ["Three.js", "GSAP Motion", "Tailwind CSS", "Modern Web Architecture"],
  },
]

export const contactInfo = {
  heading: "INITIALIZE CONTACT TRANSMISSION",
  subheading: "Send an encrypted signal or schedule a technical discussion.",
  channels: [
    { label: "DIRECT EMAIL", value: "talimuddin.dev@gmail.com", href: "mailto:talimuddin.dev@gmail.com" },
    { label: "GITHUB PROFILE", value: "github.com/Talimuddin", href: "https://github.com/Talimuddin" },
    { label: "LINKEDIN NETWORK", value: "linkedin.com/in/talimuddin", href: "https://linkedin.com/in/talimuddin" },
    { label: "ACADEMY AFFILIATION", value: "TAP Academy Student", href: "https://thetapacademy.com/" },
  ],
  telemetry: {
    status: "READY FOR INCOMING SIGNALS",
    encryption: "TLS 1.3 / EMAILJS VERIFIED",
    responseTime: "< 24 HOURS",
  },
}
