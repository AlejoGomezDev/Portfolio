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

import linkedIn from "../../assets/logotipos/linkedin.svg";
import GitHub from "../../assets/logotipos/github.svg"

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
    <div className="flex  w-full h-full   justify-between">
      <div className="w-[50%] h-min m-auto mt-[10em] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col h-min space-y-5">
          <p className="text-3xl text-gray-400">
            Hola, soy{" "}
            <span className="text-white font-semibold italic ">ALEJO GOMEZ</span>
          </p>
          {/* <h3 className="text-[7em]">Alejo Gomez</h3> */}
          <h3 className="text-[5.5em]/25 lg:text-[5.5em]/25 xl:text-[6em]/25 font-bold line-h text-gradient-primary italic">
            SOFTWARE DEVELOPER
          </h3>

          <p className="prose prose-xl prose-invert text-gray-400">
            Técnico Universitario en Programación y Estudiante de Licenciatura
            en Sistemas. Siempre buscando nuevos desafíos y creando soluciones
            que marquen la diferencia.
          </p>

          
<div className="w-[80%] flex gap-4 items-stretch h-[2.5em] bg-red-500">
  <Button
    className="bg-gradient-primary w-full italic"
    text="Descargar mi CV"
  />

  <Button
    className="bg-gradient-secondary w-full italic"
    text="¡Hablemos!"
  />

  {/* LinkedIn */}
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="aspect-square h-full rounded-full flex items-center justify-center bg-green-400 m-0"
  >
    <img
      src={linkedIn}
      alt="LinkedIn"
      className=" w-full"
    />
  </a>

  {/* GitHub */}
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="aspect-square h-full rounded-full flex items-center justify-center bg-white "
  >
    <img
      src={GitHub}
      alt="GitHub"
      className=" w-full"
    />
  </a>
</div>
        </div>
      </div>

      <div className=" w-[50%] ">Logo</div>
    </div>
  );
}
