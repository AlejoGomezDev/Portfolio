import { useState } from "react";
import { motion } from "framer-motion";
import { CircleArrowLeft, CircleArrowRight, Github } from "lucide-react";
import  GitHub from "../../assets/logotipos/github-2.svg"
import GoogleDrive from "../../assets/logotipos/googledrive.svg"
import { ProjectDetail } from "./project-details";

export function ProjectCard({ project, index }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
    className="w-full max-w-100 aspect-square"
      style={{
        perspective: "2000px",
      }}
    >
      <motion.div
        animate={{ rotateY: flip ? -180 : 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        onClick={() => setFlip(!flip)}
        className="relative w-full h-full rounded-xl cursor-pointer shadow-xl"
        style={{
          transformStyle: "preserve-3d",
        }}
      >

        {/* FRENTE */}
        <div
          className="
          absolute w-full h-full
          rounded-xl
          overflow-hidden
          bg-custom-gradient
          backdrop-blur
          hover:scale-102
          transition-all duration-300
          "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div className="h-[60%] overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center p-0 2xl:p-4  h-[40%] flex flex-col justify-center 2xl:gap-4    ">
            <h4 className="text-xl font-bold text-white">
              {project.title}
            </h4>

            <h5 className="text-lg text-gray-300">
              {project.subtitle}
            </h5>

            {project.techs?.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mt-3">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="
                    px-3 py-1
                    text-xs
                    border border-blue-600/40
                    rounded-full
                    bg-blue-900/20
                    "
                  >
                    {tech.alt}
                  </span>
                ))}
              </div>
            )}

            <div className=" absolute p-1 bottom-0 right-0 w-min ">
                <CircleArrowRight className="text-blue-700 " strokeWidth={1.2}/>
            </div>
          </div>
        </div>

        {/* DORSO */}
        <div
          className="
          absolute w-full h-full
          rounded-xl
          p-5
          bg-linear-to-br from-transparent from-30% to-gray-950
          border border-blue-800/40
          text-white
          flex flex-col justify-between
          "
          style={{
            transform: "rotateY(-180deg)",
            backfaceVisibility: "hidden",
          }}
        >
           <ProjectDetail
            title={project.title}
            description={project.description}
            features={project.features}
           />

          <div className="flex gap-4 justify-center mt-4 ">

            {project.GitHubUrl && (
              <a
                href={project.GitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square h-7 w-7 rounded-full flex items-center justify-center hover:-translate-y-1 transition "
            
                onClick={(e)=>{e.stopPropagation()}}
              >
                <img
                alt={"GitHub"}
                src={GitHub}
                className={`w-full h-full object-contain invert`}
              />
              </a>
            )}

            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                 className="aspect-square h-7 w-7 rounded-full flex items-center justify-center hover:-translate-y-1 transition"
            
                onClick={(e)=>{e.stopPropagation()}}
              >
                <img
                alt={"GitHub"}
                src={GoogleDrive}
                className={`w-full h-full object-contain invert`}
              />
              </a>
            )}
          </div>

          
            <div className=" absolute p-1 bottom-0 left-0 w-min ">
                <CircleArrowLeft className="text-blue-700 " strokeWidth={1.2}/>
            </div>
        </div>

      </motion.div>
    </div>
  );
}