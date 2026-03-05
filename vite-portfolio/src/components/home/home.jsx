
import { motion } from "framer-motion";
import linkedIn from "../../assets/logotipos/linkedin.svg";
import GitHub from "../../assets/logotipos/github.svg";
import { Button } from "../ui/Button";

export function Home() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/alejoGomez04/",
      title: "LinkedIn",
      imageSrc: linkedIn,
      className: "p-[.1em]",
    },
    {
      href: "https://github.com/AlejoGomezDev",
      title: "GitHub",
      imageSrc: GitHub,
    },
  ];

  return (
    <div className="flex  w-full h-dvh justify-between">
      <motion.div
      initial={{translateX:-600, opacity:0}}
      animate={{
        translateX:0,
        opacity:1
      }}
      transition={{ ease: "EaseIn", duration: .7 }}
      className="w-[50%] h-min m-auto mt-[10em] 2xl:mt-[15em] flex flex-col items-center justify-center">
        <div className="w-full flex flex-col h-min space-y-5 2xl:space-y-7">
          <p className="text-3xl 2xl:text-4xl text-gray-400">
            Hola, soy{" "}
            <span className="text-white font-semibold italic ">
              ALEJO GOMEZ
            </span>
          </p>

          <h3 className="text-[5.5em]/25 lg:text-[5.5em]/25 xl:text-[6em]/25 2xl:text-[7.5em]/25 font-bold line-h text-gradient-primary italic">
            SOFTWARE DEVELOPER
          </h3>

          <p className=" text-xl 2xl:text-2xl  prose text-gray-400">
            Técnico Universitario en Programación y Estudiante de Licenciatura
            en Sistemas. Siempre buscando nuevos desafíos y creando soluciones
            que marquen la diferencia.
          </p>

          <div className="w-[80%] flex gap-4 items-stretch h-[2.5em]">
            <Button
              className="bg-gradient-primary w-full italic "
              text="Descargar mi CV"
              animation={true}
            />


            <Button
              className="bg-gradient-secondary w-full italic"
              text="¡Hablemos!"
              animation={true}
            />

            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="
                  h-full
                  aspect-square
                  flex items-center justify-center
                  bg-transparent
                  overflow-hidden
                  shrink-0
                  hover:-translate-y-1
                  transition-all duration-300 ease-in-out
                "
              >
                <img
                  alt={link.title}
                  src={link.imageSrc}
                  className={`w-full h-full object-contain ${link.className}`}
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
      initial={{opacity:0, scale:.8}}
      animate={{
        opacity:1,
        scale:1
      }}
      transition={{ ease: "EaseIn", duration: .7 }}
      className=" w-[50%] flex items-center h-full">
        <div
          className="w-[35em] aspect-square
         bg-blue-500 rounded-full m-auto flex items-center text-center "
        > 
        <h4 className="text-center w-full">Logo aca</h4>
        </div>
      </motion.div>


    </div>
  );
}
