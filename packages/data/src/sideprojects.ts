export interface SideProject {
  name: string;
  description: string;
  url?: string;
  technologies: string[];
  image?: string;
  // Default Hide Options
  hide?: "risky" | "old";
}

export const sideProjects = [
  {
    name: "ARM Home Server",
    description:
      "A mini-ITX PC that runs all my service using Docker with my custom GitOps",
    url: "https://medium.com/@leomotors/building-an-arm-home-server-with-rock-5-itx-f2f7b774ada4",
    image: "/projects/home-server-2507.webp",
    technologies: ["Ubuntu", "Docker", "Cloudflare Tunnel", "mdadm"],
  },
  {
    name: "Golden Frame",
    description: "Golden Frame generator using OpenCV",
    url: "https://golden-frame.leomotors.me",
    image: "/projects/goldenframe.png",
    technologies: ["OpenCV", "Python", "Flask", "Astro", "Svelte"],
  },
  {
    name: "Home Environment Monitoring",
    description:
      "A system that monitors temperature and humidity of few rooms in my house, a history graph can be viewed easily in Grafana",
    url: "https://github.com/leomotors/home-env",
    image: "/projects/home-env-hardware.webp",
    technologies: ["Arduino", "ESP32", "Prometheus", "Golang", "net/http"],
  },
  {
    name: "Waifu Bot",
    description:
      "Discord bot that can play music, generate golden frame images and miscellanous features. Also feature website for showing information and for admin to control the bot",
    url: "https://waifu.leomotors.me",
    image: "/projects/waifu-bot-20.avif",
    technologies: [
      "discord.js",
      "Azure Cognitive Services (TTS)",
      "SvelteKit",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
    ],
  },

  {
    name: "Release Action",
    description:
      "My personal GitHub Actions workflow that I use to manage releases of my projects",
    url: "https://github.com/leomotors/release-action",
    technologies: ["GitHub Actions", "TypeScript"],
  },
  {
    name: "Anime Captcha",
    description: "A meme website, fun to play",
    url: "https://anime-captcha.vercel.app",
    image: "/projects/not-a-robot.webp",
    technologies: ["SvelteKit", "TailwindCSS", "Vercel"],
  },
  {
    name: "Adobe Renew",
    description: "Playwright Job for doing some routine jobs",
    technologies: ["Playwright Automation"],
  },
  {
    name: "CP Checklist",
    description:
      "A website containing information for elective subjects in CP Chula and for students to plan their study (WIP)",
    url: "https://github.com/leomotors/cp-checklist",
    technologies: [],
  },
  {
    name: "Terminal Video Player",
    description:
      "A video player in terminal using only ANSI text to play video",
    url: "https://github.com/leomotors/Terminal-Video-Player",
    technologies: ["OpenCV", "C++"],
  },
  {
    name: "JavaDX SUN PLUS",
    description:
      "Final Project for PROGRAMMING METHODOLOGY, a rythm game inspired by CHUNITHM written in JavaFX",
    url: "https://github.com/leomotors/javadx-sun-plus",
    technologies: ["JavaFX"],
  },
  {
    name: "Salim Bot",
    description: "Discord running in many server to monitor people's behavior",
    url: "https://github.com/leomotors/salim-bot",
    technologies: [
      "discord.js",
      "Azure Cognitive Services (TTS)",
      "Prisma",
      "PostgreSQL",
    ],
    hide: "risky",
  },
  {
    name: "Long Live HM",
    description: "Chrome Extension สำหรับคนรักชาติ",
    url: "https://github.com/leomotors/long-live-hm",
    technologies: ["Chrome Extension"],
    hide: "risky",
  },
  {
    name: "Food Busters",
    description: "Mobile App prototype for AIS Jump Thailand Hackathon 2021",
    url: "https://github.com/Food-Busters/food_busters",
    technologies: ["Flutter"],
    hide: "old",
  },
  {
    name: "Rabbit House Menu",
    description: "A simple Windows UWP App for viewing ... Rabbit House's Menu",
    url: "https://github.com/leomotors/rabbit-house-menu",
    technologies: ["C#", "UWP", "Windows UI Library (Microsoft UI Xaml)"],
  },
  {
    name: "You are a Failure!",
    description: "A C# UWP app that used to be on Microsoft Store",
    url: "https://github.com/leomotors/you-are-a-failure",
    image: "/projects/failure.webp",
    technologies: [
      "C#",
      "UWP",
      "Windows UI Library (Microsoft UI Xaml)",
      "Microsoft Store",
    ],
  },
  {
    name: "RTX 2090 TiFy",
    description: "Linus Tech Tips RTX 2090 Ti Meme Generator",
    url: "https://github.com/leomotors/RTX-2090-TiFy",
    image: "/projects/linus.webp",
    technologies: ["OpenCV", "C++", "wxWidgets"],
  },
  {
    name: "Smart Wheel Chair (MCU + Flutter App)",
    description:
      "Simple Arduino Car that can connect to mobile app written in Flutter",
    url: "https://github.com/leomotors/NSM2021-SmartWheelChair-Arduino",
    technologies: ["Arduino", "Flutter"],
  },
  {
    name: "Mini Vector Calculator",
    description: "My first ever project on GitHub, written in Pure C",
    url: "https://github.com/leomotors/Mini-Vector-Calculator",
    technologies: ["C"],
    hide: "old",
  },
] satisfies SideProject[];
