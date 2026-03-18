import { useState } from "react";
import { Button } from "../ui/Button";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const EmailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EmailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EmailJsPublicKeyId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [isFormSending, setIsFormSending] = useState(false)
  const [isFormSended, setIsFormSended] = useState(false)

  const restoreFormData = () => {
    setFormData({
      name:"",
      lastname:"",
      email:"",
      message:""
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsFormSending(true)

    try{
      const response = await emailjs
        .sendForm(EmailJsServiceId, EmailJsTemplateId, form.current, {
          publicKey: EmailJsPublicKeyId,
        })
      

        console.log("RES", response)
        setIsFormSending(false)
        setIsFormSended(true)

    }catch(e){
      console.error("Error enviando Formulario", e)
    }finally{

    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header con título y descripción */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-blue-500 mb-3">¡Conversemos!</h3>
        <p className="text-gray-300 text-lg">
          Completá el formulario y te responderé a
          la brevedad.
        </p>
      </div>

      <form
        onSubmit={sendEmail}
        className="flex flex-col gap-6 p-6 rounded-2xl"
        ref={form}
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
              name="name"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-colors ${isFormSended || isFormSending ? "pointer-events-none bg-gray-600 opacity-50" : "pointer-events-auto"}`}
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
              name="lastname"
              placeholder="Tu apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-colors ${isFormSended || isFormSending ? "pointer-events-none opacity-50" : "pointer-events-auto"}`}
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
            type=""
            id="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 transition-colors ${isFormSended || isFormSending ? "pointer-events-none opacity-50" : "pointer-events-auto"}`}
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
            name="message"
            placeholder="Contame sobre tu proyecto, idea o consulta..."
            value={formData.mensaje}
            onChange={handleChange}
            rows="6"
            className={`w-full p-4 rounded-lg bg-gray-950/80 border border-gray-800 focus:border-blue-500 focus:outline-none resize-none text-white placeholder-gray-500 transition-colors ${isFormSended || isFormSending ? "pointer-events-none opacity-50" : "pointer-events-auto"}`}
            required
          />
        </div>

        <div className="flex justify-center ">
          <Button
            text={`${isFormSending ? "Enviando..." : isFormSended ? "Enviado!" : "Enviar"}`}
            animation={true}
            type="submit"
            className={` w-full sm:w-64 rounded-full p-3 font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 ${isFormSended || isFormSending ? "pointer-events-none bg-gray-500" : "bg-gradient-secondary "}`}
          />
        </div>

      </form>
    </div>
  );
}
