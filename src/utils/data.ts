export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  demoLink: string;
  githubLink: string;
};

export type SectionName =
  | ""
  | "about"
  | "home"
  | "projects"
  | "experience"
  | "contact";

export const projectData: ProjectType[] = [
  {
    title: "Manoramam",
    description:
      "A complete end-to-end solution for a boutique hotel. It contains, a user landing page, a hotel management app.",
    tags: [
      "React",
      "React Query",
      "React Router",
      "Supabase",
      "Styled Components",
    ],
    imageSrc: "/manoramam-ss.png",
    demoLink: "https://manoramam-dashboard.vercel.app/",
    githubLink: "https://github.com/amaanmohd047/Manoramam-Dashboard",
  },
  {
    title: "Homecooked Theme",
    description:
      "A high contrast theme for Visual Studio Code based in moonlight palette.",
    tags: ["VS Code", "JSON"],
    imageSrc: "/homecooked-ss.png",
    demoLink:
      "https://marketplace.visualstudio.com/items?itemName=MohammedAmaan.homecooked",
    githubLink: "https://github.com/amaanmohd047/homecooked-theme",
  },
  {
    title: "Vistas Voyage",
    description: "An API for a travel agency",
    tags: [
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport.js",
      "Postman",
      "Github Actions",
    ],
    imageSrc: "/vistas-voyage-ss.png",
    demoLink: "https://documenter.getpostman.com/view/31239846/2sA3JJAPcL",
    githubLink: "https://github.com/amaanmohd047/VistaVoyageAPI",
  },
];
