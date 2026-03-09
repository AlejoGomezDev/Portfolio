import { SectionTitle } from "../ui/SectionTitle";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <div className="flex w-full min-h-dvh overflow-hidden flex-col mb-20 space-y-10">
      <SectionTitle text={"Proyectos"} />
      
      <div className="w-[86%] m-auto grid gap-8 grid-cols-[repeat(auto-fit,minmax(25rem,1fr))]">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
