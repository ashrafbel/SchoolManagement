import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export   const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/register', label: 'Etudiant' },
  { href: '/users', label: 'Enseignant' }
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const ClassesP = [
  {
    icon: <BotMessageSquare />,
    text: "Technologies de l’Information",
    description:
      "SUP MTI forme des ingénieurs en systèmes informatiques, réseaux, data science, et cloud, avec des bases solides en mathématiques et informatique.",
  },
  {
    icon: <Fingerprint />,
    text: "Transformation Digitale de l’Industrie",
    description:
      "Cette filière forme des ingénieurs polyvalents en technologie de l'information et en gestion industrielle pour piloter la transformation digitale vers l'Industrie 4.0.",
  },
];

export const cycleI = [
  {
    icon: <ShieldHalf />,
    text: "Génie informatique",
    description:
      "La filière Génie Informatique forme des ingénieurs capables de concevoir, développer et gérer des systèmes informatiques complexes, en alliant des compétences solides en mathématiques, réseaux, data science, et technologies émergentes telles que le cloud et l'IoT.",
  },
  {
    icon: <BatteryCharging />,
    text: "Transformation Digitale de l’Industrie (TDI)",
    description:
      "LLa filière TDI forme des ingénieurs capables de conduire la transformation digitale des processus industriels vers l'Industrie 4.0, alliant expertise technologique et gestion industrielle.",
  },
]

export const licenceMasterInfo = [
  {
    icon: <PlugZap />,
    text: "Ingénierie des Systèmes Informatiques (BAC+3) | Licence",
    description:
      "La filière 'Ingénierie des Systèmes Informatiques' forme des informaticiens capables de développer, personnaliser, et gérer des systèmes informatiques tout en s'adaptant aux évolutions technologiques.",
  },
  {
    icon: <GlobeLock />,
    text: "Ingénierie des Systèmes Informatiques | Master",
    description:
      "La filière 'Ingénierie des Systèmes Informatiques | Master' forme des informaticiens polyvalents, experts en développement d'applications, gestion de projets technologiques, et ingénierie des données, avec des débouchés professionnels dans la conception, la personnalisation, et la gestion de systèmes informatiques avancés.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Ingénierie des Systèmes Informatiques | Master",
    description:
      "La filière 'Ingénierie des Systèmes Informatiques | Master' forme des informaticiens polyvalents, experts en développement d'applications, gestion de projets technologiques, et ingénierie des données, avec des débouchés professionnels dans la conception, la personnalisation, et la gestion de systèmes informatiques avancés..",
  },
]

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
