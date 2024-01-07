interface Position {
  name: string;
  period: string;
  jobs: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  duration: string;
  positions: Position[];
}

export const experiences = [
  {
    company: "Brikl",
    duration: "1 Year 1 Month",
    positions: [
      {
        name: "Platform Engineer (Frontend, Part Time)",
        period: "December 2022 - September 2023",
        jobs: [
          "Maintain Codebase Quality ex. formatting, unit tests and dependency's vulnerabilities (required for audit) and CI",
          "Good Codebase Quality and CI Workflows is for good developers' DX",
        ],
        technologies: ["Jest", "Renovate"],
      },
      {
        name: "Software Engineer (Frontend, Part Time)",
        period: "September 2022 - December 2022",
        jobs: [
          "Implement features and fix bugs in storefront and admin dashboard",
        ],
        technologies: ["TypeScript", "React", "Next.js", "GraphQL", "Gatsby"],
      },
    ],
  },
  {
    company: "Monkey Everyday",
    duration: "3 Months",
    positions: [
      {
        name: "Full Stack Developer (Internship)",
        period: "June 2022 - August 2022",
        jobs: [
          "Maintain monkeyeveryday.com and its CMS with Next.js, TailwindCSS and GraphQL",
          "Maintain Backend using NestJS and Prisma",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Next.js",
          "TailwindCSS",
          "Storybook",
          "GraphQL",
          "NestJS",
          "Prisma",
        ],
      },
    ],
  },
] satisfies Experience[];
