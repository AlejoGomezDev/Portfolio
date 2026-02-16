import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { SECTIONS } from "./data/sections";
import { useRef } from "react";
import { useScrollDirection } from "./hooks/useScrollDirection";
import logoAG from "./assets/logos/personal/LogoPurple.png";

function App() {
  const scrollContainerRef = useRef(null);
  const isNavbarHidden = useScrollDirection(scrollContainerRef);

  const Logo = () => {
    return (
      <div>
        <h1 className="text-sm font-semibold inline tracking-[.2em] ">
          ALEJO GOMEZ <span className="text-violet-400"> | DEV</span>
        </h1>
      </div>
    );
  };

  const RightNavbarButton = () => {
    return (
      <button className="cursor-pointer rounded-md p-1 w-30 bg-transparent border border-gray-300 hover:scale-105 transition-all duration-300 ease-in-out">
        ¡Hablemos!
      </button>
    );
  };

  return (
    <div className="min-w-full h-screen text-gray-200 flex flex-col overflow-hidden bg-white font-inter">
      {/* Header con el navbar */}
      <header>
        <Navbar
          sections={SECTIONS}
          navbarClassName={`w-[80%] absolute top-2 left-0 right-0 m-auto bg-gray-700/10 rounded-full shrink-0 backdrop-blur-xl border border-gray-800 h-[5em] font-normal`}
          selectedClassName="text-violet-400"
          hoverClassName="hover:text-violet-400"
          underlineClassName=""
          hidden={isNavbarHidden}
          textClassName="text-gray-200"
          logo={Logo()}
          rightButton={RightNavbarButton()}
        />
      </header>

      {/* Main content */}
      <main ref={scrollContainerRef} className="h-screen flex-1 overflow-y-auto">
        <div className="bg-gray-950 min-h-screen pt-[10em]">
          <h2 className="sr-only">Inicio - Home</h2> 
          <p>loremipsum 1</p>
        </div>

        <section className="bg-white min-h-screen">
          <h2 className="sr-only">Sobre mí - About Me</h2>
          <p>loremipsum</p>
          {/* ... resto del contenido */}
        </section>

        <section className="bg-green-800 min-h-screen">
          <h2 className="sr-only">Proyectos - Projects</h2>
          <p>loremipsum</p>
          {/* ... resto del contenido */}
        </section>
      </main>

      {/* Opcional: Footer */}
      <footer className="sr-only">
        <p>© 2024 Alejo Gomez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;