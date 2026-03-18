import { SectionTitle } from "../ui/SectionTitle";
import { SKILLS } from "../../data/skills";
import { SkillCard } from "./skillcard";

export function Skills() {

  const itemsPerRow = Math.ceil(SKILLS.length / 4);

  const rows = [
    SKILLS.slice(0, itemsPerRow),
    SKILLS.slice(itemsPerRow, itemsPerRow * 2),
    SKILLS.slice(itemsPerRow * 2, itemsPerRow * 3),
    SKILLS.slice(itemsPerRow * 3),
  ];

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
    <section className="w-full space-y-10">
      <SectionTitle text={"Habilidades"} />
      <div className="rounded-xl border border-blue-700">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-10 mb-4"
          >
            {row.map((skill, skillIndex) => (
              <SkillCard
                key={`${skill.name}-${skillIndex}`}
                skill={skill}
                lightColor={getSkillColor(skill.name)} // Puedes definir colores por tecnología
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
