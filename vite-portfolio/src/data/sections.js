import { House, UserRound, BriefcaseBusiness, FileCodeCorner, Mail, List, FolderOpen  } from "lucide-react"
import { Home } from "../components/home/home";
import { Experience } from "../components/experience/experience";
import { Projects } from "../components/projects/projects";
import { Skills } from "../components/skills/skills";
import { About } from "../components/about/about";
import { Contact } from "../components/contact/contact"; 

export const SECTIONS = [
  {
    id: "home",
    label: "Home",
    icon: House,
    componentToRender: Home
  },
  {
    id: "experience",
    label: "Experiencia",
    icon: BriefcaseBusiness,
    componentToRender: Experience
  },
  {
    id: "projects",
    label: "Proyectos",
    icon: FolderOpen,
    componentToRender: Projects
  },
    {
    id: "skills",
    label: "Habilidades",
    icon: FileCodeCorner,
    componentToRender: Skills
  },
      {
    id: "about",
    label: "Sobre mí",
    icon: UserRound,
    componentToRender: About
  },
      {
    id: "contact",
    label: "Contacto",
    icon: Mail,
    componentToRender: Contact
  },
];
