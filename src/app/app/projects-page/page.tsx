"use client";
import { CardProjects } from "@/components/CardProjects";
import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect } from "react";

export interface IProject {
  image: string;
  title: string;
  subtitle: string;
  about: string;
  stacks: string[];
  link: string;
  linkGit: string;
  linkPresentation: string;
  placeWork: string;
  siteWork: string;
  year: string;
  types: string[];
}

const projects = [
  {
    image: "/Interas.png",
    title: "Interas Tecnologia Website",
    about:
      "The website was created together with Frabricio Dantas, I was responsible for the website's ease dev page and the footer.",
    stacks: ["React", "Typescript", "Tailwind", "CSS"],
    link: "https://interas.com.br/interas/rpa",
    linkGit: "",
    linkPresentation: "",
    placeWork: "Interas",
    siteWork: "https://www.interas.com.br/",
    year: "2024",
    types: ["Frontend"],
  },
  {
    image: "/Interas.png",
    title: "Interas Tecnologia Website",
    about:
      "The website was created together with Frabricio Dantas, I was responsible for the website's ease dev page and the footer.",
    stacks: ["React", "Typescript", "Tailwind", "CSS"],
    link: "https://interas.com.br/interas/rpa",
    linkGit: "",
    linkPresentation: "",
    placeWork: "Interas",
    siteWork: "https://www.interas.com.br/",
    year: "2024",
    types: ["Frontend"],
  },
  {
    image: "/1679941023599.gif",
    title: "Donko app",
    about:
      "Donko was the winning application of the Rio Empreender Criativo Hackathon, a platform to help people find cultural events in the palm of their hand, using the map to show the event closest to the user.",
    stacks: ["React", "Typescript", "CSS"],
    link: "https://linktr.ee/sambia?utm_source=linktree_admin_share",
    linkGit: "https://github.com/SahBianchi/hackrio-front",
    linkPresentation: "",
    placeWork: "Hackathon Rio Empreender Criativo",
    siteWork: "",
    year: "2023",
    types: ["Frontend", "UI Design"],
  },
  {
    image: "/labook.png",
    title: "Labook Backend Project",
    about:
      "Labook is a social network with the aim of promoting connection and interaction between people. Anyone who registers on the application will be able to create and like publications.",
    stacks: ["SQL", "SQLite", "TypeScript", "Express", "Knex", "Postman"],
    link: "",
    linkGit: "https://github.com/marinajaudy/projeto-labook-backend",
    linkPresentation: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2023",
    types: ["Backend"],
  },
  {
    image: "/labecommerce.png",
    title: "Labecommerce Backend Project",
    about:
      "First back-end project, where I practice the entire basis of creating an API linked to a real database.",
    stacks: ["SQL", "SQLite", "TypeScript", "Express", "Knex", "Postman"],
    link: "",
    linkGit: "https://github.com/marinajaudy/labecommerce-backend",
    linkPresentation: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2023",
    types: ["Backend"],
  },
  {
    image: "/1675254420010.gif",
    title: "React APIs Project",
    about:
      "The objective of this project is to create a website with three pages using PokeApi - API with the following tools: React, React Router, Styled-components, React Context and Axios.",
    stacks: ["HTML", "JavaScript", "React", "Styled-components"],
    link: "https://projeto-react-apis-chi.vercel.app/",
    linkGit: "https://github.com/marinajaudy/projeto-react-apis",
    linkPresentation: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/projetoReact.png",
    title: "FrontEnd React Project",
    about:
      "This project aims to introduce the fundamentals of React, through the construction of an E-Commerce.",
    stacks: ["React", "JavaScript", "HTML", "Style-Components"],
    link: "https://astro-tshirts.surge.sh/",
    linkGit: "https://github.com/marinajaudy/projeto-frontendreact",
    linkPresentation: "",
    placeWork: "Lebenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/projectintroweb.png",
    title: "Intro Web Project",
    about:
      "The objective was to build a stylized page, with list and search using DOM manipulation. I used HTML, CSS, JavaScript and DOM to build my page functions.",
    stacks: ["HTML", "JavaScript", "CSS", "DOM"],
    link: "https://marinajaudy.github.io/projeto-intro-web/",
    linkGit: "https://github.com/marinajaudy/projeto-intro-web",
    linkPresentation: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/meuportifolio.png",
    title: "My Portfolio (Previous Version)",
    about:
      "The objective is to reproduce a portfolio website using a ready-made Figma template, where I used HTML and CSS to build the features of my page.",
    stacks: ["HTML", "CSS"],
    link: "https://projetoportifolio-topaz.vercel.app/",
    linkGit: "https://github.com/marinajaudy/projetoportifolio",
    linkPresentation: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/adoteumhorta.png",
    title: "Adopt a Garden",
    about:
      "Project carried out as a UI/UX designer at the Sustainable Cities Hackathon in June 2022, where I used Figma to create the design and prototype",
    stacks: ["Figma"],
    link: "https://www.figma.com/file/3mDm9mW4K6qPSUzuYx5czk/Adote-uma-Horta?type=design&node-id=0-1&mode=design&t=32yXP5gTuFENcWrC-0",
    linkGit: "",
    linkPresentation:
      "https://www.canva.com/design/DAFDUE6kJz0/lfxF5qhx4GUTgYTkoaVtqw/edit?utm_content=DAFDUE6kJz0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    placeWork: "Hackthon Cidades Sustentáveis",
    siteWork: "",
    year: "2022",
    types: ["UI Design"],
  },
  {
    image: "/telasServicoFunerarios.png",
    title: "Funeral Services",
    subtitle:
      "UI/UX Design",
    about:
      "I worked as a UI/UX designer in the Hackathon Experimenta, where I collaborated with a professional designer to create an intuitive and accessible funeral services platform. Using Adobe XD, we crafted wireframes and a high-fidelity prototype. This was my second hackathon and my first experience working closely with a seasoned UI/UX expert, which made it an intense weekend of learning and innovation.",
    stacks: ["Adobe XD"],
    link: "https://youtu.be/iwkqwzvobQY",
    linkGit: "",
    linkPresentation:
      "https://www.canva.com/design/DAFAsz_DxU0/ZEMqqZyfmlXQmyL8_l61Vg/edit?utm_content=DAFAsz_DxU0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    placeWork: "Hackathon Experimenta Serviços Públicos de Guarulhos",
    siteWork: "",
    year: "May 2022",
    types: ["UI Design"],
  },
  // {
  //   image: "/minasabordo.png",
  //   title: "Minas Abordo",
  //   about:
  //     "Project carried out as a UI/UX designer at the Ade Sampa Hackathon in January 2022, where I used Figma to create the design and prototype.",
  //   stacks: ["Figma"],
  //   link: "https://www.figma.com/file/nPINxd2hMGjlHqflSzTjHZ/App-Hacka?t=Kxh8WEYiTOTkGgqz-0",
  //   linkGit: "",
  //   placeWork: "Hackathon Ade Samp",
  //   siteWork: "",
  //   year: "2022",
  // },
];

// const stacks = [
//   "React",
//   "Typescript",
//   "Tailwind",
//   "CSS",
//   "Chakra UI",
//   "SQL",
//   "SQLite",
//   "TypeScript",
//   "Express",
//   "Knex",
//   "Postman",
//   "HTML",
//   "JavaScript",
//   "Styled-components",
//   "Figma",
//   "Adobe XD",
// ];

export default function ProjectsPage() {
  const [filterSelect, setFilterSelect] = React.useState<string>("Clean");

  // const filteredStacks = projects?.map((project) => {
  //   return project?.stacks.map((stack) => {
  //     return stack;
  //   });
  // });

  // const filteredStacks = stacks.map((stack)=>{
  //   return stack
  // })

  useEffect(() => {
    console.log(filterSelect);
  }, [filterSelect]);

  return (
    <main className="flex h-[88vh] flex-col">
      <div className="pt-12 pl-14">
        <h1 className="text-4xl text-blue-900 pb-2 font-bold">My Projects</h1>
        <Select
          onValueChange={(value) => {
            setFilterSelect(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a stack" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Fullstack">Fullstack</SelectItem>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="UI Design">UI Design</SelectItem>
              <SelectItem className="font-bold" value="Clean">
                Clean filter
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="px-14 py-8">
        <CardProjects filterSelect={filterSelect} projects={projects} />
      </div>
    </main>
  );
}
