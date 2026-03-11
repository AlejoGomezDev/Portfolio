import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
export function About() {
  return (
    <section className="w-full h-dvh mb-20 flex flex-col space-y-10">
      <SectionTitle text={"Sobre Mí"} />

      <div className="w-full  flex gap-8 flex-1 overflow-hidden max-h-[85%] ">
        <div className="w-[55%] rounded-xl flex flex-col gap-8">
          <div className="w-full border border-blue-500  h-[60%] rounded-xl flex overflow-hidden p-4 bg-custom-gradient">
            <div className="w-[65%] prose prose-invert ">
              <p>
                {" "}
                Soy Técnico Universitario en Programación, graduado de la
                Universidad Tecnológica Nacional (UTN) en Buenos Aires,
                Argentina. Cursé la carrera entre 2023 y 2025, periodo en el que
                construí una sólida base lógica de programación.{" "}
              </p>
              <p>
                {" "}
                A lo largo de mi formación y experiencia profesional, he
                trabajado con tecnologías como React, C#, Java y SQL,
                desarrollando tanto aplicaciones de escritorio como soluciones
                web integradas con bases de datos relacionales.{" "}
              </p>
              <p>
                {" "}
                Actualmente me desempeño como desarrollador en Sarsy SRL,
                mientras continúo mi especialización cursando la Licenciatura en
                Sistemas.{" "}
              </p>
            </div>
            
            <div className="w-[35%] flex flex-col  justify-between ">
              <div className="w-[80%] aspect-square rounded-full mx-auto mt-4 bg-blue-900"></div>
              <div className="flex flex-col h-30 justify-end ">
                <Button
                  text="Ver mi Curriculum"
                  className="w-[80%] rounded-full m-auto bg-gradient-primary"
                   animation={true}
                />
                <Button
                  text="Linkedin"
                  className="w-[80%] rounded-full  m-auto bg-gradient-secondary "
                  animation={true}
                />
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl h-[40%] border border-blue-500 bg-custom-gradient">
            Hola
          </div>
        </div>
        <div className="w-[45%] rounded-xl border border-blue-500">Adios</div>
      </div>
    </section>
  );
}
