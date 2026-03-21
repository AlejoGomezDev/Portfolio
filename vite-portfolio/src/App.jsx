import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { SECTIONS } from "./data/sections";
import { useEffect, useRef, useState } from "react";
import { EllipsisIcon } from "lucide-react";
import { useScroll } from "framer-motion";
import { Button } from "./components/ui/Button";
import { motion } from "framer-motion";

function App() {
  const [selectedSection, setSelectedSection] = useState(SECTIONS[0].id);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const lastScrollTop = useRef(0);

  const { scrollY } = useScroll();

useEffect(() => {
  const unsubscribe = scrollY.on("change", (current) => {
    const scrollingDown = current > lastScrollTop.current;
    const isNearTop = current <= 20;

    if (isNearTop) {
      setIsNavbarHidden(false);
    } 
    else if (scrollingDown) {
      setIsNavbarHidden(true);
    }

    lastScrollTop.current = current;
  });

  return unsubscribe;
}, [scrollY]);

const handleNavbarMouseLeave = () => {
  const isNearTop = lastScrollTop.current <= 20;

  if (isNearTop) return;

  setIsNavbarHidden(true);
};

const handleNavbarClick = (e, id) => {
  e.preventDefault();

  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  // Solo ocultar si cambia de sección
  if (id !== selectedSection) {
    setSelectedSection(id);
    setIsNavbarHidden(true);
    window.history.pushState({}, "", `#${id}`);
  }

};

const handleNavbarMouseEnter = () => {
  setIsNavbarHidden(false);
};

  const Logo = () => {
    return (
      <div>
        <h1 className="text-sm font-semibold inline tracking-[.2em] pointer-events-none ">
          ALEJO GOMEZ <span className="text-gradient-primary"> | DEV</span>
        </h1>
      </div>
    );
  };

  const RightNavbarButton = () => {
    return (
     <Button className="bg-gradient-secondary italic w-10 h-10 rounded-md hover:brightness-90 hover:translate-y-0" text="¡Hablemos!" animation={true}  onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }/>
    );
  };


  return (
    <div className="min-w-full h-full text-gray-200 flex flex-col font-inter scroll-smooth app-background">
      {/* Header con el navbar */}
      <header className="relative">
        <Navbar
          sections={SECTIONS}
          navbarClassName={`w-[80%] fixed top-2 left-0 right-0 m-auto bg-transparent rounded-full shrink-0 backdrop-blur-xl border border-gray-800 h-[5em] font-normal transition-all duration-300 transform ${
            isNavbarHidden
              ? "-translate-y-[120%] opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
          selectedClassName="text-gradient-primary"
          selectedSection={selectedSection}
          hoverClassName="hover:text-blue-500"
          underlineClassName=""
          hidden={isNavbarHidden}
          textClassName="text-gray-200"
          logo={Logo()}
          rightButton={RightNavbarButton()}
          handleClick={handleNavbarClick}
          onMouseLeave={handleNavbarMouseLeave}
        />

        <div
          className={`fixed top-0 h-[1.5em]  w-[15%]  m-auto left-0 right-0 transition-all duration-300 z-999  ${
            isNavbarHidden
              ? "opacity-100 translate-y-0"
              : "opacity-100 -translate-y-20 pointer-events-none"
          }`}
          onMouseEnter={handleNavbarMouseEnter}
        >
          <div className="flex items-center text-center h-full cursor-default justify-center rounded-full border bg-transparent border-gray-800 shrink-0 backdrop-blur-xl mt-1">
            <EllipsisIcon className="h-5" />
          </div>
        </div>
      </header>

    <main className="flex flex-col">
  {SECTIONS.map((section) => {
    const Component = section.componentToRender;
    return (
      <motion.section
        key={section.id}
        id={section.id}
        className="w-[95%] sm:w-[80%] mx-auto min-h-dvh gap-2 mb-2 pt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true}} // Aparece cuando está a 100px de entrar
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="sr-only">{section.label}</h2>
        <Component />
      </motion.section>
    );
  })}
</main>

      {/* Opcional: Footer */}
      <footer className="sr-only">
        <p>© 2024 Alejo Gomez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
