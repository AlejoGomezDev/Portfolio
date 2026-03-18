import { SKILLS } from "../../data/skills";
import { SkillCard } from "../skills/skillcard";

export function AboutMeText({ className = "" }) {
    const getSkillColor = (skillName) => {
    const colors = {
      "C++": "#00599C",
      "C#": "#712596",
      Java: "#007396",
      SQL: "#dea045",
      HTML5: "#E34F26",
      CSS3: "#1572B6",
      JavaScript: "#F7DF1E",
      React: "#61DAFB",
      Astro: "#bf10b2",
      Bootstrap: "#7952B3",
      Tailwind: "#06B6D4",
      "Node.js": "#339933",
      Express: "#000000",
      ".NET": "#512BD4",
      "SQL Server": "#CC2927",
      MySQL: "#4479A1",
      Postgres: "#336791",
      SFML: "#8CC445",
      Azure: "#0078D4",
      Git: "#F05032",
      GitHub: "#181717",
      Vite: "#646CFF",
      "VS Code": "#007ACC",
      "Visual Studio": "#5C2D91",
    };

    return colors[skillName] || "#6366F1"; // Color por defecto (indigo)
  };
  

  return (
    <div className={`${className} flex flex-col gap-6 `}>
      <div className="w-full min-w-full prose prose-invert text-lg  rounded-xl p-4  bg-custom-gradient">
        <p>
          Soy{" "}
          <span className="font-bold">
            Técnico Universitario en Programación
          </span>
          , graduado en la Universidad Tecnológica Nacional, Buenos Aires,
          Argentina. Durante mi formación desarrollé una sólida base en lógica y
          fundamentos de la programación.
        </p>
        <p>
          Trabajo principalmente con React, .NET y SQL, desarrollando
          aplicaciones web y de escritorio conectadas a bases de datos
          relacionales.
        </p>
        <p>
          Actualmente me desempeño como{" "}
          <span className="font-bold">
            desarrollador de software en Sarsy SRL
          </span>
          , mientras continúo mis estudios cursando una{" "}
          <span className="font-bold">Licenciatura en Sistemas</span>.
        </p>
      </div>

      <div className=" p-4 w-full  items-center h-full rounded-xl pl-9   grid grid-cols-[repeat(auto-fit,minmax(6rem,1fr))] gap-4">
          {
            SKILLS.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                skill={skill}
                lightColor={getSkillColor(skill.name)}
              />
            ))
            
          }
      </div>

    </div>
  );
}
