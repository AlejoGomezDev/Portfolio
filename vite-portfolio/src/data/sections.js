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
    bgColor: "bg-blue-900" // Azul profundo
  },
  {
    id: "experience",
    label: "Experiencia",
    icon: BriefcaseBusiness,
    componentToRender: Experience,
    bgColor: "bg-blue-800" // Azul medio-oscuro
  },
  {
    id: "projects",
    label: "Proyectos",
    icon: FolderOpen,
    componentToRender: Projects,
    bgColor: "bg-indigo-900" // Azul con tono púrpura
  },
  {
    id: "about",
    label: "Sobre Mí",
    icon: UserRound,
    componentToRender: About,
    bgColor: "bg-blue-950" // Azul casi noche (el más oscuro)
  },

  {
    id: "contact",
    label: "Contacto",
    icon: Mail,
    componentToRender: Contact,
    bgColor: "bg-sky-900" // Azul con tono más claro/verdoso
  },
];
