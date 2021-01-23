import React from "react";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "About",
  },
  {
    id: 2,
    url: "/",
    text: "Projects",
  },
  {
    id: 3,
    url: "/",
    text: "Skills",
  },
  {
    id: 4,
    url: "/",
    text: "Experience/Education",
  },
  {
    id: 5,
    url: "/",
    text: "Recommendations",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/lisatrevis/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/LisaTrevis",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: "https://codepen.io/LisaTrevis/",
    icon: <FaCodepen />,
  },
];
