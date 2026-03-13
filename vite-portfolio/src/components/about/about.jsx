import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { AboutMeText } from "./about-me-text";
import { AboutEducation } from "./about-education";
import { SkillsContainer } from "./skills-container";
export function About() {
  return (
    <section className="w-full min-h-dvh mb-20 flex flex-col space-y-10">
      <SectionTitle text={"Sobre Mí"} />

      <div className="w-full  flex gap-8 flex-col overflow-hidden max-h-[85%] ">
          <div className="w-full rounded-xl flex gap-6">
            <AboutMeText className="w-[60%]"/>
            <AboutEducation className="w-[40%]"/>
          </div>  
          <SkillsContainer/>

      </div>


    </section>
  );
}
