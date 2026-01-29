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
    value: "hello@johndoe.dev",
    href: "mailto:hello@johndoe.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    type: "education",
    title: "Master of Computer Science",
    company: "Stanford University",
    period: "2018 - 2020",
    description:
      "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
    technologies: ["Research", "AI/ML", "Distributed Systems"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "WebAgency Co.",
    period: "2018 - 2020",
    description:
      "Developed client websites and e-commerce platforms. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "UC Berkeley",
    period: "2014 - 2018",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
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
