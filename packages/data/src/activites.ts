export interface Activity {
  name: string;
  description: string;
}

export const activities = [
  {
    name: "Code in the Wind (2022) Participant",
    description: "Game Show for TailwindCSS users in Thailand",
  },
  {
    name: "APIO 2022 Participant",
    description:
      "IOI-Format contest but for Asia-Pacific, featuring very hard algorithmic problems",
  },
  {
    name: "IPST Camp 2.2 (2022)",
    description:
      "IOI Training Camp to find representative of Thailand, made into the final selection round of 9 people",
  },
  {
    name: "6th Stupid Hackathon in Thailand (2022), Most Aesthetically Pleasing Award winner",
    description:
      "A Hackathon where you do anything you want without caring about anything. The awards are decided by voting",
  },
  {
    name: "2nd Place in NITAD Hackathon (2022)",
    description:
      "A Hackathon focusing on idea for innovations that solve the garbage problems in low-income community",
  },
  {
    name: "Silver Medal & Determination Award in TOI17 (2022)",
    description:
      "17th Thailand Olympiad in Informatics is a competition where around 90 students from each center solve algorithmic puzzle. Winning medal award in this competition open chance for students to be accepted by every university including Chulalongkorn",
  },
  {
    name: "1st Prize in SIC (2019)",
    description:
      "Samsung Innovation Campus (2019) is a 10-day camp learning about programming. IDEATHON is held at the end of the camp to let students apply their knowledge",
  },
] satisfies Activity[];
