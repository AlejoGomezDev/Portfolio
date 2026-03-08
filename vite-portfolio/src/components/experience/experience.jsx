import { motion, useScroll, useTransform } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { useRef } from "react";
import { EXPERIENCIAS } from "../../data/experience";
import { ExperienciaLaboralItem } from "./experiencia-laboral-item";
export function Experience() {
  return (
    <div className="flex w-full min-h-dvh  overflow-hidden flex-col justify-center space-y-10 mb-20">
      <SectionTitle text={"Experiencia"}/>
    
      <div className="flex flex-col gap-10">
        {EXPERIENCIAS.map((exp) => (
          <ExperienciaLaboralItem 
            key={exp.id}
            experiencia={exp}
            activo={exp.actual}
          />
        ))}

      </div>

    </div>
  );
}
