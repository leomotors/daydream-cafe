import type { Contribution } from "./common.js";

export type OSSContrib = Contribution;

export const ossContribs = [
  {
    name: "@trivago/prettier-plugin-sort-imports",
    description: "Prettier plugin for sorting imports",
    contributions: [
      "Add type definitions that can be imported to make type-safe prettier config",
    ],
  },
  {
    name: "PED 4 YOU",
    description: "A website simulating election, especially for new voters",
    contributions: [
      "Format Code and add minor features (according to open issues)",
    ],
  },
  {
    name: "tldr.sh",
    description: "Collaborative cheatsheets for console commands",
    contributions: ["Small Thai Translation"],
  },
] satisfies OSSContrib[];
