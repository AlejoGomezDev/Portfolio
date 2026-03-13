import { calcularEdad } from "../../utils/calcularEdad";
import { Button } from "../ui/Button";
import { SectionTitle } from "../ui/SectionTitle";
import { MapPin, Calendar, Briefcase, Laptop} from "lucide-react"
export function AboutMeText({ className = '' }) {


  return (
    <div className={`${className} flex flex-col gap-6 `}>
      <div className="w-full min-w-full prose prose-invert text-lg  rounded-xl p-4  bg-custom-gradient">
        <p>
          Soy <span className="font-bold">Técnico Universitario en Programación</span>,
          graduado en la Universidad Tecnológica Nacional, Buenos Aires, Argentina.
          Durante mi formación desarrollé una sólida base en lógica
          y fundamentos de la programación.
        </p>
        <p>
          Trabajo principalmente con React, .NET y SQL,
          desarrollando aplicaciones web y de escritorio conectadas
          a bases de datos relacionales.
        </p>
        <p>
          Actualmente me desempeño como <span className="font-bold">desarrollador de software en Sarsy SRL</span>,
          mientras continúo mis estudios
          cursando una <span className="font-bold">Licenciatura en Sistemas</span>.
        </p>
      </div>

      <div className="w-full h-full flex gap-6 bg-custom-gradient rounded-xl p-4 items-center justify-between">

        <div className="w-[50%] aspect-square rounded-full bg-blue-900 text-center flex justify-center items-center">
          FOTO
        </div>

        <div className="w-[50%] aspect-square rounded-2xl p-2 flex flex-col justify-between mr-0  ">
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold uppercase italic ">Alejo Gomez</h3>
            <span className="block h-1 w-45 bg-blue-900 -ml-1  mt-1 mb-3"></span>

            <ul className="text-md space-y-3 text-gray-300 font-normal">
              <li className="flex items-center gap-2"><MapPin/> Buenos Aires, Argentina</li>

              <li className="flex items-center gap-2"><Calendar/> {calcularEdad()} años</li>

              <li className="flex items-center gap-2"><Briefcase/> Desarrollador de Software</li>

              <li className="flex items-center gap-2"><Laptop/> {calcularEdad() - 18}+ años programando</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2 text-white ">Stack principal</p>
            <div className="flex flex-wrap gap-2 text-xs ">
              <span className="px-3 py-1
                    text-xs
                    border border-blue-600/40
                    rounded-full
                    bg-blue-900/20">React</span>
              <span className="px-3 py-1
                    text-xs
                    border border-blue-600/40
                    rounded-full
                    bg-blue-900/20">.NET</span>
              <span className="px-3 py-1
                    text-xs
                    border border-blue-600/40
                    rounded-full
                    bg-blue-900/20">SQL</span>
              <span className="px-3 py-1
                    text-xs
                    border border-blue-600/40
                    rounded-full
                    bg-blue-900/20">Node.js</span>
              <span className="px-3 py-1
                    text-xs
                    border border-blue-600/40
                    rounded-full
                    bg-blue-900/20">Tailwind</span>
                    <span className="px-3 py-1
                          text-xs
                          border border-blue-600/40
                          rounded-full
                          bg-blue-900/20">C#</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}