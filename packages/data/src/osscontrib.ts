export interface IOSSContrib {
  title: string;
  link: string;
  desc: string;
  resume_desc?: string;
  language?: string;
  img: string;
  bgtl?: boolean;
}

export const ossContrib: IOSSContrib[] = [
  {
    title: "CU Get Reg",
    link: "https://github.com/thinc-org/cugetreg",
    desc: "An app to help plan enrolling courses in Chulalongkorn University. Used by most of Chulalongkorn Students because it is very useful app.",
    img: "https://user-images.githubusercontent.com/33742791/142388797-fa14bcfa-b01e-45ab-a271-bfdeeb26285f.png",
  },
  {
    title: "@trivago/prettier-plugin-sort-imports",
    link: "https://github.com/trivago/prettier-plugin-sort-imports",
    desc: "Contribute to prettier plugin for sorting imports.",
    img: "",
  },
];
