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
    <div className="min-h-dvh flex items-center">
      <div className="w-full flex justify-between items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ ease: "easeIn", duration: 0.7 }}
          className="max-w-xl 2xl:max-w-2xl flex flex-col justify-evenly h-110 "
        >
          <div className=" max-w-none min-h-[80%]  flex flex-col justify-around ">
            <p className="text-2xl xl:text-3xl text-gray-400">
              Hola, soy{" "}
              <span className="text-white font-semibold italic">
                ALEJO GOMEZ
              </span>
            </p>

            <h2 className="text-[4rem]/[1] xl:text-[5rem]/[1] 2xl:text-[7rem]/[1] font-bold italic text-gradient-primary">
              SOFTWARE DEVELOPER
            </h2>

            <p className="text-lg w-[90%] xl:text-xl text-gray-400">
              Técnico Universitario en Programación y Estudiante de Licenciatura
              en Sistemas. Siempre buscando nuevos desafíos y creando soluciones
              que marquen la diferencia.
            </p>
          </div>

          {/* BOTONES */}
          <div className="flex gap-4 items-stretch h-10 w-[80%] ">
            <Button
              className="bg-gradient-primary w-full italic flex items-center justify-center text-sm"
              text="Descargar mi CV"
              animation
            />

            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-secondary w-full text-sm"
              text="¡Hablemos!"
              animation={true}
            />

            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="aspect-square h-full flex items-center justify-center hover:-translate-y-1 transition"
              >
                <img
                  alt={link.title}
                  src={link.imageSrc}
                  className={`w-full h-full object-contain ${link.className}`}
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          className="flex justify-end w-full max-w-xl"
        >
          <div className="w-72 xl:w-80 2xl:w-105 aspect-square bg-blue-500 rounded-full flex items-center justify-center">
            <h4>Logo acá</h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
