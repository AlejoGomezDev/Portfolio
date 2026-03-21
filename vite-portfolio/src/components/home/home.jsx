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
    <div className="min-h-dvh flex items-center  px-4 sm:px-6 py-8 sm:py-0 pt-20 sm:pt-0">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-0">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          className="w-full lg:max-w-xl 2xl:max-w-2xl flex flex-col justify-evenly"
        >
          <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8">
            <p className="text-xl sm:text-2xl xl:text-3xl text-gray-400 text-center lg:text-left">
              Hola, soy{" "}
              <span className="text-white font-semibold italic">
                ALEJO GOMEZ
              </span>
            </p>

            <h2 className="text-[2.5rem]/[1.1] sm:text-[3.5rem]/[1.1] md:text-[4rem]/[1] xl:text-[5rem]/[1] 2xl:text-[7rem]/[1] font-bold italic text-gradient-primary text-center lg:text-left">
              SOFTWARE DEVELOPER
            </h2>

            <p className="text-base sm:text-lg xl:text-xl text-gray-400 text-center lg:text-left lg:w-[90%]">
              Técnico Universitario en Programación y Estudiante de Licenciatura
              en Sistemas. Siempre buscando nuevos desafíos y creando soluciones
              que marquen la diferencia.
            </p>
          </div>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center lg:justify-start mt-6 sm:mt-8">
            <Button
              className="bg-gradient-primary w-full sm:w-auto min-w-40 italic flex items-center justify-center text-sm"
              text="Descargar mi CV"
              animation
            />

            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-secondary w-full sm:w-auto min-w-40 text-sm"
              text="¡Hablemos!"
              animation={true}
            />

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:-translate-y-1 transition"
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

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.7 }}
          className="flex justify-center lg:justify-end w-full lg:max-w-xl mb-6 lg:mb-0"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 2xl:w-105 2xl:h-105 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <h4 className="text-white font-bold">Logo acá</h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
}