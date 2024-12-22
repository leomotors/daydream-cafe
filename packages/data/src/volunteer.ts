import type { Contribution } from "./common.js";

export type Volunteer = Contribution;

export const volunteers = [
  {
    name: "Thinc",
    description:
      "Thinc. is a student-run community aiming to make impact to society. A student community committed to promoting real-world profession skills with the goal of incubating the leader of tomorrow.",
    contributions: ["CU Get Reg (https://cugetreg.com) - Project Lead"],
  },
  {
    name: "ISD (Part of Student Government of Chulalongkorn University)",
    description:
      "A part of SGCU that responsible for Information System Development",
    contributions: [
      "รับเพื่อนก้าวใหม่ (RPKM) 2566 - A website for freshmen students to register for events with users over 40k (From GA)",
    ],
  },
  {
    name: "Creatorsgarten",
    description:
      "Community of creators in Thailand, work with open source communities, developers, educators, artists, and more",
    contributions: [
      "Staff of many events and Website Development for some of them",
    ],
  },
  {
    name: "programming.in.th",
    description:
      "Website for everyone to practice Data Structure & Algorithms problems",
    contributions: [],
  },
  {
    name: "Crack 'n' Code",
    description:
      "A group of students who love competitive programming and host contests for anyone to participate and practice their algorithm solving skills",
    contributions: [],
  },
] satisfies Volunteer[];
