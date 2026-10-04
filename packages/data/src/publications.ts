export interface Publication {
  name: string;
  publishedTo: string;
  type: string;
  publishedDate: string;
  doi: string;
  contributors: string[];
}

export const publications = [
  {
    name: "Building an Open-Source PID Control System for Cryogenic System",
    publishedTo:
      "2026 23rd International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON)",
    type: "Conference Paper",
    publishedDate: "2026-05-29",
    doi: "10.1109/ecti-con68836.2026.11609058",
    contributors: [
      "Nutthapat Pongtanyavichai",
      "Poopha Suwananek",
      "Monthawat Sawarak",
      "Kamonluk Suksen",
      "Prabhas Chongstitvatana",
    ],
  },
  {
    name: "Benchmarking Quantum Computing for Combinatorial Optimization",
    publishedTo:
      "2025 22nd International Conference on Electrical Engineering/Electronics, Computer, Telecommunications and Information Technology (ECTI-CON)",
    type: "Conference Paper",
    publishedDate: "2025-05-20",
    doi: "10.1109/ecti-con64996.2025.11100821",
    contributors: [
      "Nathan Kittichaikoonkij",
      "Nutthapat Pongtanyavichai",
      "Poopha Suwananek",
      "Prabhas Chongstitvatana",
      "Kamonluk Suksen",
    ],
  },
] satisfies Publication[];
