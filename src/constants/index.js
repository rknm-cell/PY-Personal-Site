import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sfds,
  breakaway,
  freelance,
  winetime,
  swolecialnetwork,
  blackjack,
  threejs,
  melodytalker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Artist",
  //   icon: artist,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Python",
  //   icon: python
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "3d Printing Lead",
    company_name: "SFDS",
    icon: sfds,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Developed and maintained a database of 3d prints with information relating to printers, materials used, time elapsed, quality, and issues to log successes and bottlenecks in order to maintain high quality and troubleshoot any issues that arise in production.",
      "Designed and modified existing 3d models to create high quality prints with regards to art direction.",
      "Interfaced with Design, Project Management, and Scenic Department in order to create high quality prints that can be implemented into production.",
      "Researched new technologies and equipment to improve the quality and efficiency of 3d printing.",
    ],
  },
  {
    title: "Scenic Artist / Casting Artist",
    company_name: "SFDS",
    icon: sfds,
    iconBg: "#383E56",
    date: "May 2021 - January 2024",
    points: [
      "Interfaced with Project Managers to execute designs for sculptural and scenic elements of projects.",
      "Collaborated with a team of artists to ensure speedy and accurate delivery of design elements",
      "Researched and implemented new techniques and tools to create more efficient processes of scenic design.",
      "Trained new team members in shop practices and standards.",
      "Maintained and tracked inventory.",
    ],
  },
  {
    title: "VFX Artist",
    company_name: "Self",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Coordinated with producers and directors to execute planned elements of layout, animation, and compositing.",
      "Collaborated with Editing and Color Correction to create a smooth, efficient pipeline.",
      "Implemented design elements and animation for a variety of projects.",
    ],
  },
  {
    title: "Crew Chief",
    company_name: "Breakaway Courier Systems",
    icon: breakaway,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Trained new and tenured employees in new technology and methodolies.",
      "Developed new delivery technology and systems to increase efficiency of deliveries by 100% and lower maintenance costs.",
    ],
  },
];



const projects = [
  {
    name: "Melody Talker",
    description:
      "Mobile application that allows users with vocal disabilities to communicate with others using a text-to-speech interface.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
    ],
    image: melodytalker,
    source_code_link: "https://github.com/rknm-cell/Melody-Talker",
  },
  {
    name: "Wine Time",
    description: "E-Commerce site selling natural wines.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: winetime,
    source_code_link: "https://github.com/rknm-cell/Wine-Time",
  },
  {
    name: "Swolecial Network",
    description: "A social media site for fitness enthusiasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      { 
        name: "mongodb", 
        color: "yellow-text-gradient" 
      },
    ],
    image: swolecialnetwork,
    source_code_link: "https://github.com/rknm-cell/swocial_network",
  },{
  name: "Blackjack CLI",
    description: "A game of blackjack is played on the Command Line using Object Oriented Programming.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "cli",
        color: "pink-text-gradient",
      },
    ],
    image: blackjack,
    source_code_link: "https://github.com/rknm-cell/CLI-Blackjack",
  },
];

export { services, technologies, experiences, projects };
