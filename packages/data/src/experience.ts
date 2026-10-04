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

// Built at deploy time, so an ongoing role's duration stays current
function durationSince(year: number, month: number) {
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + now.getMonth() + 1 - month;
  const years = Math.floor(months / 12);
  const rest = months % 12;

  return [
    years && `${years} Year${years > 1 ? "s" : ""}`,
    rest && `${rest} Month${rest > 1 ? "s" : ""}`,
  ]
    .filter(Boolean)
    .join(" ");
}

export const experiences = [
  {
    company: "Nansen",
    duration: durationSince(2026, 4),
    positions: [
      {
        name: "Software Engineer I",
        period: "July 2026 - Present",
        jobs: [],
        technologies: ["React.js", "TypeScript", "React Native"],
      },
      {
        name: "Software Engineer Intern",
        period: "April 2026 - July 2026",
        jobs: [],
        technologies: ["React.js", "TypeScript", "React Native"],
      },
    ],
  },
  {
    company: "Agoda",
    duration: "10 Months",
    positions: [
      {
        name: "Software Engineer Part-Time",
        period: "February 2026 - April 2026",
        jobs: ["Building internal tools, a full stack Vaadin Web Application"],
        technologies: ["Java", "Vaadin"],
      },
      {
        name: "Software Engineer Part-Time",
        period: "August 2025 - December 2025",
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
          "Maintain Codebase Quality, such as formatting, unit tests, and dependencies' vulnerabilities (required for audit)",
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
