import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "B.tech UnderGraduate student",
    location: "BIT, MESRA",
    description:
      "Pursuing Computer Science Engineering ",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "MERN Stack Developer Intern",
    location: "Bipolar Factory, Banglore",
    description: `
    Worked on a Production House website - Drumsticks Production.
    Tech stacks used in project are Next.js, React, React Player and Tailwind CSS.
  `,
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "SDE Intern",
    location: "Chalkboc, Dehradun",
    description: `
    Worked on Company's secondary website .
    Used React-Bootsrap, Redux for front-end and axios,
     REST API, Express, Node.js for backend.
  `,
  icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Socio",
    description: `
      MERN stack social media application .
      Allowing User Registration and Authentication, Posting and Sharing
      of posts , like and comment,  and follow 
      or unfollow a user.
    `,
    tags: ["React", "Node.js", "MongoDB", "Express", "Axios", "JWT"],
    // imageUrl: corpcommentImg,
  },
  {
    title: "Stay-Xpert",
    description:
    `
    Full stack hotel booking web application .
    Allowing User Registration and Log In, explore and book hotels
    along with selecting check in and check out dates , number of guests.
  `,
    tags: ["Firebase", "React-Dom", "Node.js", "Express", "Redux"],
    // imageUrl: rmtdevImg,
  },
  {
    title: "Streamify",
 
    description:
    `
    Full stack Movies/TV Shows streaming web application .
    Allowing User Registration and Log In,browsing through a vast 
    collection of movies and TV shows, selecting by genres,
    adding or removing Movies from watchlists.
  `,
    tags: ["React", "Node.js", "API", "MongoDb", "Express", "Axios"],
    // imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  " CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git/GitHub",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "React-Dom",
  "Express",
  "Firebase Login",
  "C++",
  "DBMS",
  "OOPS",
  "OS",
  "Operating Systems",
  "Data Structure and Algorithms",
] as const;