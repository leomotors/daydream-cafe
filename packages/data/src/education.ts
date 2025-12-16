export interface Education {
  name: string;
  program: string;
  year: string;
  gpax: string;
}

export const educations = [
  {
    name: "Assumption College",
    program: "Gifted",
    year: "2016-2019",
    gpax: "3.88",
  },
  {
    name: "Triam Udom Suksa School",
    program: "Science Math",
    year: "2019-2022",
    gpax: "3.95",
  },
  {
    name: "Chulalongkorn University",
    program: "B.Eng. Computer Engineering",
    year: "2022-2026",
    gpax: "3.91",
  },
] satisfies Education[];
