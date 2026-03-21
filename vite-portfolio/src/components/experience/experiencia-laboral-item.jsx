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
      className={`w-full transition-all duration-300 flex flex-col lg:flex-row gap-4 sm:gap-6`}
    >
      {/* Tarjeta principal */}
      <div
        className={`
          rounded-xl shadow-lg 
          flex flex-col sm:flex-row p-4 sm:p-4 items-center gap-4
          border border-blue-500
          w-full lg:w-[50%]
          transition-all duration-300
          ${activo ? "bg-custom-gradient-important" : "bg-custom-gradient"}
        `}
      >
        {/* Logo - Mobile first */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-transparent shrink-0">
          {experiencia.imagen ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={experiencia.urlEmpresa}
              className="block w-full h-full"
            >
              <img
                src={experiencia.imagen}
                alt={`Logo ${experiencia.empresa}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `<div class="w-full h-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">${experiencia.empresa.charAt(0)}</div>`;
                }}
              />
            </a>
          ) : (
            <div className="w-full h-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
              {experiencia.empresa.charAt(0)}
            </div>
          )}
        </div>

        {/* Información principal */}
        <div className="flex-1 w-full flex flex-col gap-3 sm:gap-4">
          <div className="flex sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Building2 size={20} className="text-blue-400 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experiencia.empresa}
              </h3>
            </div>

            {experiencia.actual && (
              <span className="bg-gradient-secondary text-white px-3 py-1 rounded-full text-sm sm:text-sm w-fit">
                Actual
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={18} className="shrink-0" />
            <h4 className="text-md sm:text-base text-gray-300">
              {experiencia.puesto}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} className="shrink-0" />
            <span className="text-md sm:text-base text-gray-400">
              {experiencia.fechaInicio} ~ {experiencia.fechaFin}
            </span>
          </div>

          {/* Botón toggle para mobile */}
          <button
            onClick={() => setMostrarDetalle(!mostrarDetalle)}
            className="lg:hidden flex items-center justify-between w-full mt-2 py-2 px-3 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition-colors"
          >
            <span className="text-sm text-blue-400">
              {mostrarDetalle ? "Ocultar detalles" : "Ver detalles"}
            </span>
            {mostrarDetalle ? (
              <ChevronUp size={18} className="text-blue-400" />
            ) : (
              <ChevronDown size={18} className="text-blue-400" />
            )}
          </button>
        </div>
      </div>

      {/* Detalles */}
      <div
        className={`
        w-full  lg:w-[50%] lg:flex-1
        transition-all duration-300 ease-in-out
        overflow-hidden
        ${mostrarDetalle ? "max-h-500 opacity-100" : "max-h-0 opacity-0"}
        lg:max-h-50 lg:opacity-100
      `}
      >
        <div
          className="
            backdrop-blur-sm
            border border-blue-700
            rounded-xl p-4 sm:p-6
            shadow-2xl
            transform transition-all duration-500
            overflow-y-auto
            max-h-100 sm:max-h-125 lg:max-h-full
          "
        >
          <div className="space-y-4">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {experiencia.descripcion}
              </p>
            </div>

            {/* Responsabilidades / Logros */}
            {experiencia.responsabilidades &&
              experiencia.responsabilidades.length > 0 && (
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                    Responsabilidades y Logros
                  </h5>
                  <ul className="space-y-2">
                    {experiencia.responsabilidades.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm sm:text-base text-gray-400"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Tecnologías */}
            {experiencia.tecnologias && experiencia.tecnologias.length > 0 && (
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {experiencia.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-2 sm:px-3 py-1
                        text-xs sm:text-sm
                        border border-blue-600/40
                        rounded-full
                        bg-blue-900/20
                        whitespace-nowrap
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
