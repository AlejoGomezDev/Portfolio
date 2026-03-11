import { SectionTitle } from "../ui/SectionTitle";
import { PROJECTS } from "../../data/projects";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section className="flex w-full min-h-dvh  flex-col mb-20 space-y-10  ">
      <SectionTitle text={"Proyectos"} />
    
    <div className="w-[85%] m-auto grid  grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-6 justify-items-center">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>

    </section>
  );
}
