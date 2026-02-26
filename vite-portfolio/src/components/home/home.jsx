function SocialLink({ href, title, imageSrc }) {
  return (
    <a
      href={href}
      target="_blank"
      class="w-9 h-9 bg-gradient-primary  rounded-md  hover:scale-115  transition-transform duration-300 ease-out"
    >
      <img src={imageSrc} alt={title} class="w-full h-full  " />
    </a>
  );
}

import linkedIn from "../../assets/logotipos/linkedIn.png";
import GitHub from "../../assets/logotipos/github.png"
import { Button } from "../ui/Button";


export function Home() {
  
    const socialLinks = [
    {
      href: "https://www.linkedin.com/in/alejoGomez04/",
      title: "LinkedIn",
      imageSrc: linkedIn,
    },
    {
      href: "https://github.com/AlejoGomezDev",
      title: "GitHub",
      imageSrc: GitHub,
    },
  ];

  return (
    <div className="flex  w-full h-full  justify-between">
      <div className="w-[50%] h-[60%] m-auto flex flex-col justify-center">
        <div className="w-full flex flex-col h-min space-y-5">
          <p className="text-3xl text-gray-400">
            Hola, soy{" "}
            <span className="text-white font-semibold ">ALEJO GOMEZ</span>
          </p>
          {/* <h3 className="text-[7em]">Alejo Gomez</h3> */}
          <h3 className="text-[7em]/25 font-bold line-h text-gradient-primary">
            SOFTWARE DEVELOPER
          </h3>

          <p className="prose prose-xl prose-invert text-gray-400">
            Técnico Universitario en Programación y Estudiante de Licenciatura
            en Sistemas. Siempre buscando nuevos desafíos y creando soluciones
            que marquen la diferencia.
          </p>

          <div className="flex gap-4 mt-4 ">
            {/* {
                socialLinks.map((l) => ( 
                    <SocialLink 
                        href={l.href}
                        imageSrc={l.imageSrc}
                        title={l.title}
                    />
                ))
            }
               */}
           
          </div>

          <div className="w-[40%] flex gap-4">
            <Button className="bg-gradient-primary w-full " text="Descargar mi CV"/>
            <Button className="bg-gradient-secondary w-full" text="¡Hablemos!"/>

          </div>
        </div>
      </div>

      <div className=" w-[50%]">Logo</div>
    </div>
  );
}
