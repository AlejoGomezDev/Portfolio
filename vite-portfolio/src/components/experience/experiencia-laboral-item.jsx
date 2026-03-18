// ExperienciaLaboral.jsx
import { useState } from "react";
import {
  Calendar,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const ExperienciaLaboralItem = ({ experiencia, activo = false }) => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  return (
    <div
      className={`w-full transition-all duration-300 flex h-50 rounded-xl overflow-hidden justify-between gap-8`}
    >
      <div
        className={`
          rounded-xl shadow-lg 
          flex  p-4 items-center gap-4
          border border-blue-500
          w-[50%] h-full
          transition-all duration-300
          ${activo ? " bg-custom-gradient-important " : "bg-custom-gradient"}
        `}
      >
        {/* Logo */}
        <div className="h-full w-40 rounded-lg overflow-hidden bg-transparent shrink-0">
          {experiencia.imagen ? (
            <a
            target="_blank"
              href={experiencia.urlEmpresa}>
                <img
                  src={experiencia.imagen}
                  alt={`Logo ${experiencia.empresa}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<div class=" h-full w-full flex bg-linear-to-br from-blue-600 to-purple-600  items-center justify-center text-white font-bold text-xl">${experiencia.empresa.charAt(0)}</div>`;
                  }}
                />

            </a>
          ) : (
            <div className="w-full h-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
              {experiencia.empresa.charAt(0)}
            </div>
          )}
        </div>

        <div className="w-full h-full flex flex-col justify-between ">
          {/* Información principal */}
          <div className="grow flex flex-col justify-start h-full space-y-4 text-gray-300 text-lg">
            <div className="flex items-center gap-2 ">
              <Building2 size={22} className="text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">
                {experiencia.empresa}
              </h3>
            </div>

            <div className="flex items-center gap-2 ">
              <Briefcase size={22} />
              <h4>{experiencia.puesto}</h4>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={22} />
              <span>
                {experiencia.fechaInicio} ~ {experiencia.fechaFin}
              </span>
            </div>
          </div>

          {experiencia.actual && (
            <span className="bg-gradient-secondary text-white px-4 py-1 rounded-full text-sm w-min">
              Actual
            </span>
          )}
        </div>
      </div>

      {/* Detalles  */}

      <div className=" w-[50%] overflow-hidden ">
        <div
          className="
            backdrop-blur-sm
            border border-blue-700
            rounded-xl p-4
            shadow-2xl
            transform transition-all duration-500
            animate-in fade-in slide-in-from-top-2
            hover:shadow-blue-500/10 overflow-y-scroll max-h-full"
        >
          <div className="space-y-4">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                {experiencia.descripcion}
              </p>
            </div>

            {/* Responsabilidades / Logros */}
            {experiencia.responsabilidades &&
              experiencia.responsabilidades.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-3">
                    Responsabilidades y Logros
                  </h5>
                  <ul className="space-y-2">
                    {experiencia.responsabilidades.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-400"
                      >
                        <span className="text-blue-700 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Tecnologías */}
            {experiencia.tecnologias && experiencia.tecnologias.length > 0 && (
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {experiencia.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="
                    px-3 py-1
                    text-xs
                    border border-blue-600/40
                    rounded-full
                    bg-blue-900/20
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
