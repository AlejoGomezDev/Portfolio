import { SectionTitle } from "../ui/SectionTitle";
import { ContactLink } from "./contact-link.jsx"
import { SOCIALDATA } from "../../data/social-data.js";
import { ContactForm } from "./contact-form.jsx";


export function Contact() {
  return (
    <div className="space-y-10 mb-20">
      <SectionTitle text={"Contacto"} />

       

        <div className="w-[50%] m-auto p-6 bg-custom-gradient-important rounded-xl">
          <ContactForm />

          {/* Redes sociales en círculos */}
      <div className="flex justify-center gap-8 ">
        {SOCIALDATA.map((link, index) => (
          <a
            key={`social-circle-${index}`}
            href={link.url}
            target={link.target || "_self"}
            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center gap-2"
            title={link.text}
          >
            <div className="w-14 h-14 rounded-full bg-gray-950/70 p-1 hover:scale-110 hover:border-blue-500 border border-gray-800 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-transparent flex items-center justify-center group-hover:bg-opacity-80 transition-all">
                <img
                  src={link.imgUrl}
                  alt={link.alt}
                  className="w-7 h-7 invert opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors hidden sm:block">
              {link.alt}
            </span>
          </a>
        ))}
      </div>
        </div>
    </div>
  );
}
