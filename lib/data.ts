import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quickcart from "@/public/quickcart.png";
import ecommerceCloud from "@/public/ecommerceCloud.png";
import DeployMate from "@/public/DeployMate.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
  // {
  //   name: "Resume",
  //   hash: "#resume",
  // },
  // {
  //   name: "GitHub",
  //   hash: "#https://github.com/saviomartin",
  // },
  // {
  //   name: "LinkedIn",
  //   hash: "https://www.linkedin.com/in/saviomartin",
  // },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "QuickCart",
    description:
      "QuickCart, built with Next.js, React, and Tailwind CSS, integrates with EcommerceCloud for advanced browsing, filtering, purchasing, quick previews, customizable filters, detailed product pages, and a streamlined checkout, enhancing user experience",
      url : "https://quickcart-neon.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma" , "Stripe"],
    imageUrl: quickcart,
  },
  {
    title: "Ecommerce Cloud",
    description:
      "EcommerceCloud: Multi-store management dashboard with secure user authentication and reliable database management.",
    url : "https://ecommerce-cloud-indol.vercel.app/",
    tags: ["React", "Next.js",  "TypeScript", "Tailwind", "Zustand", "Supabase", "Prisma", "Stripe", "Clerk"],
    imageUrl: ecommerceCloud,
  },
  {
    title: "DeployMate",
    description:
      "DeployMate: Automate GitHub project deployment with Next.js frontend and AWS backend.",
    url : "https://github.com/saviomartin/DeployMate",
    tags: [ "Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Docker", "AWS",  "Kafka", "ClickHouse"],
    imageUrl: DeployMate,
  },
] as const;


export const skillsData = [
  "Java",
  "Python",
  "Data Structures",
  "Alogrithms",
  "Opps",
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

