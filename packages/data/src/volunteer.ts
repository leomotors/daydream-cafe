export interface Volunteer {
  org: string;
  description: string;
  projects: string[];
}

export const volunteers = [
  {
    org: "Thinc",
    description:
      "Thinc. is a student-run community aiming to make impact to society. A student community committed to promoting real-world profession skills with the goal of incubating the leader of tomorrow.",
    projects: ["CU Get Reg (https://cugetreg.com) - Project Lead"],
  },
  {
    org: "ISD (Part of Student Government of Chulalongkorn University)",
    description:
      "A part of SGCU that responsible for Information System Development",
    projects: [
      "รับเพื่อนก้าวใหม่ (RPKM) 2566 - A website for freshmen students to register for events with users over 40k (From GA)",
    ],
  },
  {
    org: "Creatorsgarten",
    description:
      "Community of creators in Thailand, work with open source communities, developers, educators, artists, and more",
    projects: [
      "The โง่ Hackathon ครั้งที่ 7 เเห่งประเทศ Thailand (7th Stupid Hackathon in Thailand) - Staff & Website Development",
    ],
  },
  {
    org: "programming.in.th",
    description:
      "Website for everyone to practice Data Structure & Algorithms problems",
    projects: [],
  },
  {
    org: "Crack 'n' Code",
    description:
      "A group of students who love competitive programming and host contests for anyone to participate and practice their algorithm solving skills",
    projects: [],
  },
] satisfies Volunteer[];
