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
    company: "Agoda",
    duration: "Current Position",
    positions: [
      {
        name: "Software Engineer Part-Time",
        period: "August 2025 - Present",
        jobs: ["Building internal tools, a full stack Vaadin Web Application"],
        technologies: ["Java", "Vaadin"],
      },
      {
        name: "Software Engineer Intern, Full-Stack",
        period: "May 2025 - August 2025",
        jobs: [
          "Develop a feature for YCS Mobile App: Notification Preferences and Awards Page",
        ],
        technologies: ["React.js", "TypeScript", "React Native"],
      },
    ],
  },
  {
    company: "Agoda",
    duration: "10 Weeks",
    positions: [
      {
        name: "Software Engineer Intern, Backend",
        period: "May 2024 - August 2024",
        jobs: [
          "Create a POC that related to Site Reliability, consists of sending metrics from application, process and monitor those metrics",
          "Create service that process Kafka messages and store the result to Microsoft SQL",
          "Create Grafana Dashboard to visualize those metrics",
        ],
        technologies: ["Scala", "Kotlin", "Kafka", "Microsoft SQL", "Grafana"],
      },
    ],
  },
  {
    company: "Brikl",
    duration: "1 Year 1 Month",
    positions: [
      {
        name: "Platform Engineer (Frontend, Part Time)",
        period: "December 2022 - September 2023",
        jobs: [
          "Maintain Codebase Quality ex. formatting, unit tests and dependency's vulnerabilities (required for audit)",
          "Ensure Good Codebase Quality and CI Workflows to improve developers' DX",
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
        jobs: ["Implement features and fix bugs in its website and its CMS"],
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
