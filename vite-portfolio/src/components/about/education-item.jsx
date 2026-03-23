
export function  EducationItem  ({ item }) {
  // Función para obtener el estilo según el estado
  const getEstadoStyles = (estado) => {
    switch(estado) {
      case "egresado":
        return "bg-gradient-secondary";
      case "aprobado":
        return "bg-gradient-primary";
      case "en curso":
        return "bg-transparent border border-orange-400";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  // Función para obtener el texto del estado
  const getEstadoTexto = (estado) => {
    switch(estado) {
      case "egresado":
        return "Egresado";
      case "aprobado":
        return "Aprobado";
      case "en curso":
        return "En curso";
      default:
        return estado;
    }
  };

  return (
    <div className={`rounded-xl p-2 shadow-lg ${item.tipo === "academica" ? "bg-custom-gradient-important" : "bg-custom-gradient"}`}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="shrink-0 w-[20%] lg:w-[15%] xl:w-[20%] m-auto">
          <img 
            src={item.imagen} 
            alt={item.imagenAlt}
            className="w-full aspect-square rounded-xl bg-white"
          />
        </div>

        <div className="grow space-y-2 text-left">
       
            <h4 className="text-md sm:text-lg font-bold text-white">
              {item.titulo}
            </h4>
            
        
          <p className="text-sm text-gray-400 ">
            {item.institucion}
          </p>

            <div className="flex items-center gap-2 w-[50%]">
                <span className={`rounded-full text-sm  py-1 px-3 flex justify-center ${getEstadoStyles(item.estado)}`}>
                {getEstadoTexto(item.estado)} {item.fecha}
             
                </span>

            </div>

        </div>
      </div>
    </div>
  );
};

export default EducationItem;