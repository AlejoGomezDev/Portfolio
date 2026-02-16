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
    label: "Inicio",
    icon: House,
    componentToRender: Home,
    href:"#home"
  },
  {
    id: "experience",
    label: "Experiencia",
    icon: BriefcaseBusiness,
    componentToRender: Experience,
    href:"#experience"  
  },
  {
    id: "projects",
    label: "Proyectos",
    icon: FolderOpen,
    componentToRender: Projects,
    href:"#projects"  
  },
    {
    id: "about",
    label: "Sobre Mí",
    icon: UserRound,
    componentToRender: About,
    href:"#about-me"  
  },
      {
    id: "contact",
    label: "Contacto",
    icon: Mail,
    componentToRender: Contact,
    href:"#contact"  
  },
];
