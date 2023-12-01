import { Links } from "@daydream-cafe/constants";

import { activities } from "./activities.js";
import { ossContrib as _ossContrib } from "./osscontrib.js";
import { projects as _projects } from "./projects.js";

export const fullVersionLink = "https://resume.leomotors.me";
export const sourceLink = "https://github.com/Leomotors/daydream-cafe";

export const introData = {
  name: "Nutthapat Pongtanyavichai",
  nickname: "Leo",
  github: Links.last(Links.github),
  linkedin: Links.last(Links.linkedin),
  location: "Bangkok, Thailand",
  website: Links.last(Links.www),
};

export const technologies = [
  {
    section: "Preferred Stack:",
    details: "TypeScript, TailwindCSS, SvelteKit, React, Next.js",
  },
];

export const educations = [
  {
    head: "Assumption College (Middle School)",
    details: "Gifted, 2016-2019 (GPAX 3.88)",
  },
  {
    head: "Triam Udom Suksa School (High School)",
    details: "Science Math, 2019-2022 (GPAX 3.95)",
  },
  {
    head: "Chulalongkorn University",
    details: "B.Eng. Computer Engineering, 2022-Present",
  },
];

export const workExperiences = [
  {
    position: "Software Engineer (Frontend, Part Time)",
    company: "Brikl",
    url: "https://www.brikl.com",
    years: "September 2022 - September 2023",
    details: [
      "Fixing bugs and implement new feature for storefront",
      "Maintain frontend codebase, improve code quality and DX",
    ],
  },
  {
    position: "Full Stack Developer (Internship)",
    company: "Monkey Everyday",
    url: "https://monkeyeveryday.com/",
    years: "June 2022 - August 2022",
    details: [
      "Maintain monkeyeveryday.com and its CMS with Next.js, TailwindCSS and GraphQL",
      "Maintain GraphQL API that will be consumed by Frontend, used Prisma and NestJS",
    ],
  },
];

export const awards = [...activities.awards, ...activities.activities].map(
  (o) => ({ name: o.title, details: o.resume_desc ?? o.desc }),
);

export const projects = [..._projects.big_projects, ..._projects.featured]
  .filter((o) => o.resume_desc != "HIDE")
  .map((o) => ({
    name: o.title,
    details: o.resume_desc ?? o.desc,
    url: o.link.replace(/^https?:\/\//, ""),
  }));

export const ossContrib = _ossContrib.map((o) => ({
  name: o.title,
  details: o.resume_desc ?? o.desc,
  url: o.link.replace(/^https?:\/\//, ""),
}));

export const interests = [
  "Areas: RGB, Mechanical Keyboard, Anime, Dual Monitor Desk Setup, Windows Insider",
  "Typing: 80-100 WPM (English) 40-50 WPM (Thai)",
  "Games: Any game that can be played with friends happily, rythm game sometimes",
];
