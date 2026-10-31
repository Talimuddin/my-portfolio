/**
 * Portfolio Data Source — Talimuddin's Official Resume Data
 */

export const personal = {
  name: "Talimuddin",
  callsign: "TALIM // JAVA-FS-01",
  role: "Java Full Stack Developer",
  status: "OPEN FOR OPPORTUNITIES",
  phone: "+91 7654626537",
  email: "talimuddin2000@gmail.com",
  location: "Bokaro, Jharkhand // Bangalore",
  coordinates: "23.6693° N, 86.1511° E",
  bio: "Java Full Stack Developer and B.Tech CSE student trained at TAP Academy. Experienced in developing Spring Boot and Gemini AI web applications, REST APIs, and responsive frontends with a strong foundation in Core Java, OOP, DSA, and MySQL.",
  summary: "Structured Java Full Stack background covering Core Java, OOP, Spring Boot, Hibernate, REST APIs, and MySQL at TAP Academy.",
  availability: "Immediate / Full-time Opportunities & Internships",
}

export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
  role: "Java Full Stack Developer Intern",
  specialization: "Core Java, OOP, DSA, MySQL, HTML, CSS, JavaScript, Spring, and Hibernate",
  period: "Jul 2026 – Present",
  description: "Undergoing structured Java Full Stack training covering Core Java, OOP, DSA, MySQL, HTML, CSS, JavaScript, Spring, and Hibernate. Practicing problem-solving and Java-based coding to build a strong foundation in object-oriented programming, data structures, and database management.",
}

export const navLinks = [
  { id: "home", label: "01 // HOME", href: "#home" },
  { id: "about", label: "02 // PROFILE", href: "#about" },
  { id: "projects", label: "03 // PROJECTS", href: "#projects" },
  { id: "journey", label: "04 // JOURNEY", href: "#journey" },
  { id: "contact", label: "05 // TRANSMIT", href: "#contact" },
]

export const stats = [
  { label: "TRAINING PROGRAM", value: "TAP ACADEMY", detail: "Java Full Stack Developer Intern" },
  { label: "CORE STACK", value: "JAVA + SPRING", detail: "Spring Boot, REST APIs, MySQL" },
  { label: "EDUCATION", value: "B.TECH CSE", detail: "CGPA: 7.05 // GGSESTC" },
  { label: "AI INTEGRATION", value: "GEMINI API", detail: "CropGuard Plant Diagnosis" },
]

export const skillCategories = [
  {
    category: "PROGRAMMING & BACKEND",
    code: "BE-01",
    skills: [
      { name: "Core Java", level: "Advanced", tag: "CORE" },
      { name: "Spring Boot", level: "Proficient", tag: "BACKEND" },
      { name: "REST APIs", level: "Advanced", tag: "PROTOCOL" },
      { name: "Hibernate", level: "Proficient", tag: "ORM" },
      { name: "Spring Framework", level: "Proficient", tag: "FRAMEWORK" },
      { name: "Maven", level: "Proficient", tag: "BUILD" },
    ],
  },
  {
    category: "FRONTEND & WEB UI",
    code: "FE-02",
    skills: [
      { name: "JavaScript", level: "Advanced", tag: "LANG" },
      { name: "HTML & CSS", level: "Expert", tag: "MARKUP" },
      { name: "Bootstrap", level: "Proficient", tag: "UI" },
      { name: "Tailwind CSS v4", level: "Proficient", tag: "STYLING" },
      { name: "React 19", level: "Proficient", tag: "FRONTEND" },
      { name: "Responsive UI", level: "Expert", tag: "LAYOUT" },
    ],
  },
  {
    category: "DATABASE, CONCEPTS & TOOLS",
    code: "DE-03",
    skills: [
      { name: "MySQL", level: "Proficient", tag: "DATABASE" },
      { name: "OOP Principles", level: "Expert", tag: "CORE" },
      { name: "Data Structures (DSA)", level: "Proficient", tag: "ALGO" },
      { name: "Git & GitHub", level: "Proficient", tag: "VCS" },
      { name: "Gemini AI API", level: "Proficient", tag: "AI/ML" },
      { name: "Cloud & DevOps", level: "Foundational", tag: "INFRA" },
    ],
  },
]

export const projects = [
  {
    id: "project-1",
    number: "SYS-01",
    title: "CropGuard – Plant Disease Detection Web App",
    category: "AI & SPRING BOOT",
    tagline: "Plant disease diagnosis web application powered by Java, Spring Boot, and Google Gemini API.",
    description: "Developed a web application for plant disease detection using Java, Spring Boot, and the Gemini API. Built a diagnosis system that provides disease name, severity, treatment suggestions, medicine recommendations, and preventive measures from uploaded crop images. Created a REST endpoint (POST /analyze) with image upload, file type and size validation, and centralized JSON error handling. Implemented multilingual support in 8 Indian languages and text-to-speech for farmer accessibility. Designed a responsive interface using HTML, CSS, JavaScript, and Bootstrap with secured API keys.",
    tags: ["Java", "Spring Boot", "REST API", "Gemini API", "JavaScript", "Bootstrap", "MySQL"],
    metrics: "8 Indian Languages // Text-to-Speech // POST /analyze REST API",
    repoUrl: "https://github.com/Talimuddin",
    liveUrl: "https://github.com/Talimuddin",
    highlight: true,
  },
  {
    id: "project-2",
    number: "SYS-02",
    title: "Tic-Tac-Toe Game",
    category: "CORE JAVA & OOP",
    tagline: "Console-based strategic game in Java applying OOP inheritance and polymorphism.",
    description: "Developed a console-based Tic-Tac-Toe game in Java, allowing a human player to compete against a computer opponent. Applied object-oriented programming using an abstract Player class and separate human and computer player implementations. Implemented inheritance and method overriding to support different player behaviors through a common abstraction. Developed game logic to validate moves, track board positions, detect winning combinations, and identify draw conditions with a random-move computer opponent.",
    tags: ["Java", "OOP", "Inheritance", "Polymorphism", "Game Logic", "Console"],
    metrics: "Abstract Player Class // Move Validation // Random AI Opponent",
    repoUrl: "https://github.com/Talimuddin",
    liveUrl: "https://github.com/Talimuddin",
    highlight: false,
  },
  {
    id: "project-3",
    number: "SYS-03",
    title: "Signal HUD Developer Portfolio",
    category: "FRONTEND & MOTION",
    tagline: "High-performance developer portfolio engineered with React 19, Three.js, GSAP, and Tailwind CSS v4.",
    description: "Built during placement training at TAP Academy. Implements custom smooth scrolling with Lenis, an interactive 3D particle core via Three.js, Tailwind v4 design tokens, and a reactive HUD telemetry overlay showcasing full-stack Java and web capabilities.",
    tags: ["React 19", "Three.js", "GSAP", "Tailwind CSS v4", "Lenis"],
    metrics: "60 FPS Three.js Canvas // 100 Lighthouse Performance",
    repoUrl: "https://github.com/Talimuddin/my-portfolio",
    liveUrl: "http://localhost:5173",
    highlight: false,
  },
]

export const journey = [
  {
    id: "j-1",
    year: "JUL 2026 — PRESENT",
    title: "Java Full Stack Developer Intern",
    organization: "TAP Academy",
    orgUrl: "https://thetapacademy.com/",
    badge: "ACTIVE INTERNSHIP",
    description: "Undergoing structured Java Full Stack training covering Core Java, OOP, DSA, MySQL, HTML, CSS, JavaScript, Spring, and Hibernate. Practicing problem-solving and Java-based coding to build a strong foundation in object-oriented programming, data structures, and database management. Learning backend development and frontend integration to understand the complete lifecycle of Java Full Stack web applications.",
    skillsAcquired: ["Core Java", "OOP & DSA", "MySQL", "Spring & Hibernate", "REST APIs", "Full Stack Lifecycle"],
  },
  {
    id: "j-2",
    year: "NOV 2025 — FEB 2026",
    title: "Software Engineering Intern",
    organization: "SPRINT – School of Professional Studies and Information Technology",
    orgUrl: "",
    badge: "COMPLETED INTERNSHIP",
    description: "Completed a 12-week Software Engineering training program in Hazaribagh. Learned Software Development, Data Structures, Databases, Cloud Computing, and DevOps fundamentals. Gained foundational knowledge of Agile methodology and collaborative software development practices. Studied Generative AI and Agentic AI concepts through industry-oriented sessions.",
    skillsAcquired: ["Data Structures", "Cloud & DevOps", "Agile Methodology", "Generative AI", "Agentic AI Concepts"],
  },
  {
    id: "j-3",
    year: "2022 — 2026",
    title: "B.Tech in Computer Science and Engineering",
    organization: "Guru Gobind Singh Educational Society’s Technical Campus",
    badge: "CGPA: 7.05",
    description: "Pursuing Bachelor of Technology in Computer Science and Engineering at Bokaro, Jharkhand. Strong academic foundation in software methodologies, algorithms, object-oriented systems, and relational databases.",
    skillsAcquired: ["Core Computer Science", "Algorithms", "Database Systems", "Operating Systems", "Networking"],
  },
]

export const contactInfo = {
  heading: "INITIALIZE CONTACT TRANSMISSION",
  subheading: "Send an encrypted signal or schedule a technical discussion.",
  channels: [
    { label: "DIRECT EMAIL", value: "talimuddin2000@gmail.com", href: "mailto:talimuddin2000@gmail.com" },
    { label: "PHONE / WHATSAPP", value: "+91 7654626537", href: "tel:7654626537" },
    { label: "LINKEDIN NETWORK", value: "linkedin.com/in/talimuddin-4725292b3", href: "https://www.linkedin.com/in/talimuddin-4725292b3/" },
    { label: "GITHUB PROFILE", value: "github.com/Talimuddin", href: "https://github.com/Talimuddin" },
    { label: "ACADEMY AFFILIATION", value: "TAP Academy Intern", href: "https://thetapacademy.com/" },
  ],
  telemetry: {
    status: "READY FOR INCOMING SIGNALS",
    encryption: "TLS 1.3 / EMAILJS VERIFIED",
    responseTime: "< 24 HOURS",
  },
}
