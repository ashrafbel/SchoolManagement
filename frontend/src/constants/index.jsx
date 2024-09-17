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
  { href: '/', label: 'Home' },
  { href: '/etudiant', label: 'Student' },
  { href: '/users', label: 'Instructor' }
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
    text: "Information Technologies",
    description:
      "TechMTI trains engineers in computer systems, networks, data science, and cloud computing, with a strong foundation in mathematics and computer science.",
  },
  {
    icon: <Fingerprint />,
    text: "Digital Transformation of the Industry",
    description:
      "This program trains versatile engineers in information technology and industrial management to lead the digital transformation toward Industry 4.0.",
  },
];

export const cycleI = [
  {
    icon: <ShieldHalf />,
    text: "Computer Engineering",
    description:
      "The Computer Engineering program trains engineers capable of designing, developing, and managing complex IT systems, combining strong skills in mathematics, networks, data science, and emerging technologies such as cloud computing and IoT.",
  },
  {
    icon: <BatteryCharging />,
    text: "Digital Transformation of Industry",
    description:
      "The TDI program trains engineers capable of leading the digital transformation of industrial processes toward Industry 4.0, combining technological expertise with industrial management skills.",
  },
]

export const licenceMasterInfo = [
  {
    icon: <PlugZap />,
    text: "Computer Systems Engineering (BAC+3) | Bachelor's Degree",
    description:
      "The 'Computer Systems Engineering' program trains IT professionals capable of developing, customizing, and managing computer systems while adapting to technological advancements.",
  },
  {
    icon: <GlobeLock />,
    text: "Computer Systems Engineering | Master's Degree",
    description:
      "The 'Computer Systems Engineering | Master's' program trains versatile IT professionals, experts in application development, technology project management, and data engineering, with career opportunities in the design, customization, and management of advanced IT systems.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Computer Systems Engineering | Master's Degree",
    description:
      "The 'Computer Systems Engineering | Master's' program trains versatile IT professionals, experts in application development, technology project management, and data engineering, with career opportunities in the design, customization, and management of advanced IT systems.",
  },
];


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
