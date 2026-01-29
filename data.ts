import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Learned", value: "15+" },
  { label: "Hackathons / Events", value: "5+" },
];


export const highlights = [
  { icon: MapPin, text: "Based in India" },
  { icon: Briefcase, text: "Open for Internships & Full-Time Roles" },
  { icon: GraduationCap, text: "B.Tech CSE Student" },
  { icon: Coffee, text: "Driven by curiosity & consistency" },
];


export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "luckykr1620@gmail.com",
    href: "mailto:luckykr1620@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9065728764",
    href: "tel:+91 9065728764",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bilaspur,India",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/luckykumar1620", label: "GitHub" },
  { icon: FaLinkedinIn, href: "www.linkedin.com/in/luckykumar1620", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://www.instagram.com/meritorious_lucky/", label: "Twitter" },
];

export const experiences = [
  {
    type: "education",
    title: "Bachelor of Technology (Computer Science)",
    company: "Guru Ghasidas Vishwavidyalaya (GGV)",
    period: "2022 - 2026 (Expected)",
    description:
      "Pursuing B.Tech in Computer Science with strong focus on data structures, algorithms, web development, and core computer science subjects.",
    technologies: ["DSA", "OOPs", "DBMS", "Operating Systems"],
  },
  {
    type: "work",
    title: "Full Stack Web Developer",
    company: "Personal & Academic Projects",
    period: "2024 - 2025",
    description:
      "Developed and deployed multiple full stack web applications with authentication, database integration, and responsive UI, focusing on real-world problem solving.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    type: "work",
    title: "Backend Development & APIs",
    company: "Project-Based Learning",
    period: "2024 - 2025",
    description:
      "Built RESTful APIs, handled database design, authentication, and server-side logic for scalable web applications.",
    technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    type: "work",
    title: "Data Structures & Algorithms",
    company: "Interview Preparation & Practice",
    period: "2023 - 2025",
    description:
      "Actively practicing data structures and algorithms in C++ to improve problem-solving skills and prepare for technical interviews.",
    technologies: ["C++", "Data Structures", "Algorithms"],
  },
  {
    type: "education",
    title: "Continuous Technical Learning",
    company: "Self Learning & Online Platforms",
    period: "2023 - 2025",
    description:
      "Continuously learning modern web technologies, backend systems, and best practices through hands-on projects and structured courses.",
    technologies: ["JavaScript", "TypeScript", "Git", "System Design Basics"],
  },
];


export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/luckykumar1620", label: "GitHub" },
  { icon: FaLinkedin, href: "www.linkedin.com/in/luckykumar1620", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "luckykr1620@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "ResumeForge",
    description:
      "A full-stack resume builder web application that allows users to create, customize, preview, and download professional resumes with a clean and responsive interface.",
    image: "/images/resumeforge.png",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    demoUrl: "https://resumeforge-frontend-jlma.onrender.com/",
    githubUrl: "https://github.com/luckykumar1620/ResumeForge",
  },
  {
    title: "TravelMate",
    description:
      "A full-stack travel platform that enables users to explore destinations, manage bookings, and securely authenticate using a scalable backend architecture.",
    image: "/images/travelmate.png",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", ],
    demoUrl: "https://travelmate-zev3.onrender.com/listing",
    githubUrl: "https://github.com/luckykumar1620/TravelMate",
  },
  {
    title: "HealthSync",
    description:
      "A smart health management system designed to securely store medical records and provide quick access during emergencies with real-time data handling.",
    image: "/images/healthsync.png",
    techStack: ["React", "Node.js", "MongoDB", "REST APIs"],
    demoUrl: "https://healthsync-frontend.onrender.com/",
    githubUrl: "https://github.com/luckykumar1620/HealthSync",
  },
  {
    title: "Employment India",
    description:
      "A job listing and career assistance platform that connects job seekers with relevant opportunities through role-based listings and simple navigation.",
    image: "/images/employement.png",
    techStack: ["React", "Node.js", "MongoDB", "Express.js"],
    demoUrl: "https://employe-india-frontend.onrender.com/",
    githubUrl: "https://github.com/luckykumar1620/EmployeMent_India",
  },
  {
    title: "NoteSphere",
    description:
      "A modern note-taking web application that helps users organize, manage, and access notes efficiently with a minimal and intuitive user interface.",
    image: "/images/notesphere.png",
    techStack: ["React", "JavaScript", "CSS","MongoDB"],
    demoUrl: "https://notesphere-frontend.onrender.com/",
    githubUrl: "https://github.com/luckykumar1620/NoteSphere",
  },
  {
    title: "Foodies",
    description:
      "A food discovery and ordering platform that showcases restaurants, menus, and food items with a responsive design and smooth user experience.",
    image: "/images/foodies.png",
    techStack: ["React", "CSS", "API Integration","Bootstrap"],
    demoUrl: "https://luckykumar1620.github.io/bootstrap-restaurant-website/",
    githubUrl: "https://github.com/luckykumar1620/bootstrap-restaurant-website",
  },
];


export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: Layout },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: Terminal },
      { name: "TypeScript", icon: Terminal },
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Cloud },
      { name: "JWT Auth", icon: Cpu },
      { name: "Mongoose", icon: Database },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Python", icon: Terminal },
      { name: "Jupyter Notebook", icon: Terminal },
      { name: "C++ (DSA)", icon: Cpu },
      { name: "Postman", icon: Cloud },
      { name: "VS Code", icon: Terminal },
    ],
  },
];
