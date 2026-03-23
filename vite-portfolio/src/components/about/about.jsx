import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { AboutMeText } from "./about-me-text";
import { AboutEducation } from "./about-education";
import { SkillsContainer } from "./skills-container";
export function About() {
  return (
    <div className="w-full min-h-dvh mb-20 flex flex-col  space-y-10">
      <SectionTitle text={"Sobre Mí"} />


          <div className="w-full rounded-xl flex flex-col gap-8  xl:flex-row ">
            <AboutMeText className="w-full xl:w-[50%] "/>
            <AboutEducation className="w-full xl:w-[50%]  "/>
          </div>  




    </div>
  );
}
