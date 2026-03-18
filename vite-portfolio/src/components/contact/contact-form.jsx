import { useState } from "react";
import { Button } from "../ui/Button";
import { SOCIALDATA } from "../../data/social-data"; // Ajustá la ruta según corresponda

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  // Redes sociales para mostrar en círculos (solo las que son links)

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header con título y descripción */}
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold text-blue-500 mb-3">¡Conversemos!</h3>
        <p className="text-gray-300 text-lg">
          Tenés un proyecto en mente? Completá el formulario y te responderé a
          la brevedad
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-6 rounded-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="nombre"
              className="text-blue-400 mb-2 font-medium text-sm uppercase tracking-wider"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="apellido"
              className="text-blue-400 mb-2 font-medium text-sm uppercase tracking-wider"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Tu apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-blue-400 mb-2 font-medium text-sm uppercase tracking-wider"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="mensaje"
            className="text-blue-400 mb-2 font-medium text-sm uppercase tracking-wider"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Contame sobre tu proyecto, idea o consulta..."
            value={formData.mensaje}
            onChange={handleChange}
            rows="6"
            className="w-full p-4 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none resize-none text-white placeholder-gray-500 transition-colors"
            required
          />
        </div>

        <div className="flex justify-center ">
          <Button
            text="Enviar mensaje"
            animation={true}
            type="submit"
            className="bg-gradient-secondary w-full sm:w-64 rounded-full p-3 font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          />
        </div>

      </form>
    </div>
  );
}
