import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quickcart from "@/public/quickcart.png";
import ecommerceCloud from "@/public/ecommerceCloud.png";
import DeployMate from "@/public/DeployMate.png";
//import skxywrLOGO from "@/public/skxywrLOGO.jpg";
//import sponsogram from "@/public/sponsogram.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern | SKXYWTF",
   // location: "Delhi",
    description:
    "Developed and maintained a responsive dashboard with complex components, including a collection of " +
    "interactive charts and data visualizations. Utilized technologies such as JavaScript, TypeScript, Next.js, " +
    "and Tailwind CSS to build scalable and responsive layouts."
     ,
    icon: React.createElement(CgWorkAlt),
    date: "October 2024",
  },
  {
    title: "Full-Stack Developer Intern | SPONSOGRAM",
    // location: "Houston, TX"
    description:
    "Developed and maintained 10+ dynamic React components, including complex features like a user dashboard, " +
    "navigation sidebar, and interactive search bar using Next.js, TypeScript, and React. " +
    "Converted UI/UX designs into fully functional and interactive web interfaces, ensuring optimal " +
    "performance across different browsers using HTML, Tailwind CSS, and React.",
    icon: React.createElement(CgWorkAlt),
    date: "September2024-October 2024",
  },
] as const;

export const projectsData = [
  {
    title: "QuickCart",
    description:
      "QuickCart, built with Next.js, React, and Tailwind CSS, integrates with EcommerceCloud for advanced browsing, " +
      "filtering, purchasing, quick previews, customizable filters, detailed product pages, and a streamlined checkout, enhancing user experience.",
    url: "https://quickcart-neon.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    imageUrl: quickcart,
  },
  {
    title: "Ecommerce Cloud",
    description:
      "EcommerceCloud: Multi-store management dashboard with secure user authentication and reliable database management.",
    url: "https://ecommerce-cloud-indol.vercel.app/",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand", "Supabase", "Prisma", "Stripe", "Clerk"],
    imageUrl: ecommerceCloud,
  },
  {
    title: "DeployMate",
    description:
      "DeployMate: Automate GitHub project deployment with Next.js frontend and AWS backend.",
    url: "https://github.com/saviomartin/DeployMate",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Docker", "AWS", "Kafka", "ClickHouse"],
    imageUrl: DeployMate,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Data Structures",
  "Algorithms",
  "OOPs",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Next.js",
  "Node.js",
  "Express",
  "DBMS",
  "SQL",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Git",
  "Zustand",
  "Docker",
  "Kubernetes",
  "AWS",
  "Linux",
  "Stripe",
  "Kafka",
  "Redis",
  "Framer Motion",
] as const;
