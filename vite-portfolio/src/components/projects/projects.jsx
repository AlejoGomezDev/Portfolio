import { useEffect, useState } from "react";
import { SectionTitle } from "../ui/SectionTitle";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "./project-card";
import { ChevronDown } from "lucide-react";

export function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsToShow =
    isMobile && !showAll ? PROJECTS.slice(0, 3) : PROJECTS;

  return (
    <div className="flex w-full min-h-dvh flex-col mb-20 space-y-10">
      <SectionTitle text={"Proyectos"} />

      <div className="w-[85%] m-auto grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 justify-items-center">
        {projectsToShow.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {isMobile && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="xl:hidden flex items-center justify-between w-[50%] m-auto mt-8 py-2 px-3 bg-blue-500/10 rounded-xl hover:bg-blue-500/20 transition-colors"
         
        >
          Ver más
           <ChevronDown size={18} className="text-blue-400" />
        </button>
      )}
    </div>
  );
}