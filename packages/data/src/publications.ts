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
